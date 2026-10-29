#!/usr/bin/env python3
"""Reusable, configuration-driven quality checks for Markdown math-book repositories."""
from __future__ import annotations
import argparse
import re
import sys
import tomllib
from pathlib import Path
from typing import Iterable

DEFAULTS = {
    "example_heading_requires_box": True,
    "answer_requires_double_underline": True,
    "answer_key_requires_double_underline": True,
    "check_admonition_indentation": True,
    "check_balanced_code_fences": True,
    "check_balanced_svg_figure": True,
    "check_math_delimiters": True,
    "check_display_math_spacing": True,
    "answer_marker": r"^\s*\*\*Svar:\*\*",
    "answer_search_lines": 12,
    "excluded_paths": ["site/", "build/", ".venv/", ".book-quality-tools/"],
}

def load_config(path: Path | None) -> dict:
    config = {"checks": dict(DEFAULTS)}
    if path and path.exists():
        with path.open("rb") as stream:
            config["checks"].update(tomllib.load(stream).get("checks", {}))
    return config

def visible_lines(lines: list[str]) -> Iterable[tuple[int, str]]:
    fence_char = None
    fence_len = 0
    fence_pattern = r"^\s*(" + re.escape(chr(96)) + r"{3,}|~{3,})"
    for number, line in enumerate(lines, 1):
        match = re.match(fence_pattern, line)
        if match:
            token = match.group(1)
            if fence_char is None:
                fence_char, fence_len = token[0], len(token)
            elif token[0] == fence_char and len(token) >= fence_len:
                fence_char, fence_len = None, 0
            continue
        if fence_char is None:
            yield number, line

def check_file(path: Path, relative: str, checks: dict) -> list[str]:
    try:
        content = path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        return [f"{relative}: kan ikke leses som UTF-8"]
    lines = content.splitlines()
    visible = list(visible_lines(lines))
    errors: list[str] = []

    if checks.get("example_heading_requires_box", True):
        for number, line in visible:
            if re.match(r"^#{1,6}\s+Eksempel(?:\s|$)", line, re.IGNORECASE):
                errors.append(f"{relative}:{number}: Eksempel-heading utenfor boks. Bruk en example-admonition og indenter innholdet.")

    if checks.get("answer_requires_double_underline", True):
        marker = re.compile(checks.get("answer_marker", DEFAULTS["answer_marker"]), re.IGNORECASE)
        search_lines = int(checks.get("answer_search_lines", 12))
        for number, line in visible:
            if marker.search(line):
                end = min(len(lines), number + search_lines)
                nearby = "\n".join(visible_by_number.get(n, "") for n in range(number + 1, end + 1))
                if not re.search(r"\\underline\s*\{\s*\\underline\s*\{", nearby):
                    errors.append(f"{relative}:{number}: Svar mangler dobbel understreking i de neste {search_lines} linjene.")

    if checks.get("answer_key_requires_double_underline", True):
        fasit_marker = re.compile(r'^\s*\?\?\?\s+\w+\s+["\']?Fasit\b', re.IGNORECASE)
        for position, (number, line) in enumerate(visible):
            if not fasit_marker.search(line):
                continue
            base_indent = len(line) - len(line.lstrip(" \t"))
            block_lines = []
            for _, candidate in visible[position + 1:]:
                if candidate.strip():
                    candidate_indent = len(candidate) - len(candidate.lstrip(" \t"))
                    if candidate_indent <= base_indent:
                        break
                block_lines.append(candidate)
            block_text = "\n".join(block_lines)
            contains_math = re.search(r"\\\[|\\\(|\$\$|\\begin\{", block_text)
            has_double_underline = re.search(r"\\underline\s*\{\s*\\underline\s*\{", block_text)
            if contains_math and not has_double_underline:
                errors.append(f"{relative}:{number}: Fasitblokk med matematikk mangler dobbeltunderstreket sluttsvar.")

    if checks.get("check_admonition_indentation", True):
        for index, line in enumerate(lines):
            match = re.match(r"^(\s*)(!!!|\?\?\?)\s+\w+", line)
            if not match:
                continue
            base_indent = len(match.group(1).expandtabs(4))
            for next_index in range(index + 1, len(lines)):
                candidate = lines[next_index]
                if not candidate.strip():
                    continue
                indent = len(candidate) - len(candidate.lstrip(" \t"))
                expanded_indent = len(candidate[:indent].expandtabs(4))
                if expanded_indent > base_indent:
                    break
                if re.match(r"^\s*#{1,6}\s", candidate) or re.match(r"^\s*(!!!|\?\?\?)\s+", candidate):
                    break
                errors.append(f"{relative}:{next_index + 1}: Innhold i admonition må indenteres fire mellomrom under markørlinjen.")
                break

    if checks.get("check_math_delimiters", True):
        # Check display delimiters as standalone lines; do not count inline math.
        for number, line in enumerate(lines, 1):
            stripped = line.strip()
            if stripped in {"[", "]", "$"}:
                errors.append(
                    f"{relative}:{number}: Mulig ugyldig matematikkavgrensning '{stripped}'. "
                    "Bruk \\[ ... \\] eller $$ ... $$ for display-matematikk."
                )
            elif re.match(r"^\[.*\]$", stripped) and re.search(
                r"(=|\\(?:frac|dfrac|boxed|cdot|sqrt|begin)|[a-zA-Z]\s*\()", stripped
            ):
                errors.append(
                    f"{relative}:{number}: Matematikk står i vanlige hakeparenteser. "
                    "Bruk \\[ ... \\] eller $$ ... $$ for display-matematikk."
                )

        display_open = 0
        display_close = 0
        dollar_delimiters = 0
        for _, line in visible:
            stripped = line.strip()
            if stripped == r"\[":
                display_open += 1
            elif stripped == r"\]":
                display_close += 1
            elif stripped == "$$":
                dollar_delimiters += 1
        if display_open != display_close:
            errors.append(
                f"{relative}: Ubalanserte display-matematikkavgrensninger (\\[ \\]): "
                f"åpning={display_open}, lukking={display_close}."
            )
        if dollar_delimiters % 2:
            errors.append(
                f"{relative}: Ubalanserte display-matematikkavgrensninger ($$): "
                f"antall avgrensningslinjer={dollar_delimiters}."
            )

    if checks.get("check_display_math_spacing", True):
        visible_by_number = dict(visible)
        dollar_is_open = False
        for number, line in visible:
            stripped = line.strip()
            is_open = stripped == r"\[" or (stripped == "$$" and not dollar_is_open)
            is_close = stripped == r"\]" or (stripped == "$$" and dollar_is_open)
            if stripped == "$$":
                dollar_is_open = not dollar_is_open
            if is_open and number > 1 and lines[number - 2].strip():
                errors.append(
                    f"{relative}:{number}: Mangler tom linje før visningsformelen."
                )
            if is_close and number < len(lines) and lines[number].strip():
                errors.append(
                    f"{relative}:{number}: Mangler tom linje etter visningsformelen."
                )

    if checks.get("check_balanced_code_fences", True):
        open_fence = None
        fence_pattern = r"^\s*(" + re.escape(chr(96)) + r"{3,}|~{3,})"
        for number, line in enumerate(lines, 1):
            match = re.match(fence_pattern, line)
            if not match:
                continue
            token = match.group(1)
            if open_fence is None:
                open_fence = (token[0], len(token), number)
            elif token[0] == open_fence[0] and len(token) >= open_fence[1]:
                open_fence = None
        if open_fence:
            errors.append(f"{relative}:{open_fence[2]}: Uavsluttet kodeblokk.")

    if checks.get("check_balanced_svg_figure", True):
        for tag in ("svg", "figure"):
            opening = len(re.findall(fr"<{tag}\b", content, re.IGNORECASE))
            closing = len(re.findall(fr"</{tag}\s*>", content, re.IGNORECASE))
            if opening != closing:
                errors.append(f"{relative}: Ubalansert HTML/SVG: åpne {tag}-tagger={opening}, lukkede={closing}.")
    return errors

def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path.cwd(), help="Bokrepoets rotmappe")
    parser.add_argument("--config", type=Path, default=Path(".book-quality.toml"), help="TOML-konfigurasjon")
    parser.add_argument("--files-from", type=Path, help="Fil med én repo-relativ filsti per linje")
    parser.add_argument("files", nargs="*", help="Markdown-filer som skal kontrolleres")
    args = parser.parse_args()
    root = args.root.resolve()
    config_path = args.config if args.config.is_absolute() else root / args.config
    checks = load_config(config_path)
    exclusions = tuple(checks.get("excluded_paths", DEFAULTS["excluded_paths"]))
    file_names = args.files_from.read_text(encoding="utf-8").splitlines() if args.files_from else args.files

    selected: list[tuple[Path, str]] = []
    for raw_name in file_names:
        name = raw_name.strip().replace("\\", "/")
        if not name or not name.lower().endswith((".md", ".markdown")):
            continue
        if any(name.startswith(prefix) for prefix in exclusions):
            continue
        candidate = (root / name).resolve()
        if root not in candidate.parents and candidate != root:
            print(f"Ugyldig filsti utenfor repoet: {name}", file=sys.stderr)
            return 2
        if candidate.is_file():
            selected.append((candidate, name))

    if not selected:
        print("Book quality: ingen endrede Markdown-filer å kontrollere.")
        return 0
    errors: list[str] = []
    for path, relative in selected:
        errors.extend(check_file(path, relative, checks))
    if errors:
        print("Book quality: KONTROLL FEILET\n")
        print("\n".join(f"- {error}" for error in errors))
        print(f"\nFant {len(errors)} feil i {len(selected)} Markdown-fil(er).")
        return 1
    print(f"Book quality: OK – {len(selected)} Markdown-fil(er) kontrollert.")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
