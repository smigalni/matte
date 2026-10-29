import importlib.util
import tempfile
import unittest
from pathlib import Path

SCRIPT = Path(__file__).resolve().parents[2] / "scripts" / "book-quality" / "check_book_format.py"
spec = importlib.util.spec_from_file_location("check_book_format", SCRIPT)
checker = importlib.util.module_from_spec(spec)
spec.loader.exec_module(checker)

BASE_CHECKS = {
    "example_heading_requires_box": True,
    "answer_requires_double_underline": True,
    "answer_key_requires_double_underline": True,
    "check_admonition_indentation": True,
    "check_balanced_code_fences": True,
    "check_balanced_svg_figure": True,
    "check_math_delimiters": True,
    "answer_marker": r"^\s*\*\*Svar:\*\*",
    "answer_search_lines": 12,
}

class BookQualityTests(unittest.TestCase):
    def check(self, content):
        with tempfile.TemporaryDirectory() as temp:
            path = Path(temp) / "page.md"
            path.write_text(content, encoding="utf-8")
            return checker.check_file(path, "page.md", BASE_CHECKS)

    def test_example_in_admonition_passes(self):
        content = r'''!!! example "Eksempel"

    Regn ut.

    **Svar:**

    \[
    \underline{\underline{x=2}}
    \]
'''
        self.assertEqual(self.check(content), [])

    def test_plain_example_heading_fails(self):
        errors = self.check("### Eksempel 1\n\nRegn ut.\n")
        self.assertTrue(any("Eksempel-heading utenfor boks" in e for e in errors))

    def test_missing_double_underline_fails(self):
        content = r'''!!! example "Eksempel"

    **Svar:**

    \(x=2\)
'''
        errors = self.check(content)
        self.assertTrue(any("Svar mangler dobbel understreking" in e for e in errors))

    def test_answer_key_requires_double_underline(self):
        content = r'''??? note "Fasit – oppgave 1"

    \[
    x=2
    \]
'''
        errors = self.check(content)
        self.assertTrue(any("Fasitblokk med matematikk mangler" in e for e in errors))

    def test_answer_key_with_double_underline_passes(self):
        content = r'''??? note "Fasit – oppgave 1"

    \[
    \underline{\underline{x=2}}
    \]
'''
        self.assertEqual(self.check(content), [])

    def test_raw_square_bracket_math_fails(self):
        content = r'''!!! important "Regel"

    Hvis

    [ f(x)=u(x)\cdot v(x), ]
'''
        errors = self.check(content)
        self.assertTrue(any("Matematikk står i vanlige hakeparenteser" in e for e in errors))

    def test_lone_dollar_display_delimiter_fails(self):
        content = r'''!!! important "Regel"

    $
    f(x)=x^2
    $
'''
        errors = self.check(content)
        self.assertTrue(any("Mulig ugyldig matematikkavgrensning" in e for e in errors))

    def test_unbalanced_display_math_fails(self):
        content = r'''!!! important "Regel"

    \[
    f(x)=x^2
'''
        errors = self.check(content)
        self.assertTrue(any("Ubalanserte display-matematikkavgrensninger" in e for e in errors))

    def test_balanced_display_math_passes(self):
        content = r'''!!! important "Regel"

    $$
    f(x)=x^2
    $$

    \[
    f'(x)=2x
    \]
'''
        self.assertEqual(self.check(content), [])

    def test_unclosed_fence_fails(self):
        errors = self.check("~~~python\nprint('hei')\n")
        self.assertTrue(any("Uavsluttet kodeblokk" in e for e in errors))

    def test_unbalanced_svg_fails(self):
        errors = self.check("<figure>\n<svg></figure>\n")
        self.assertTrue(any("Ubalansert HTML/SVG" in e for e in errors))

if __name__ == "__main__":
    unittest.main()
