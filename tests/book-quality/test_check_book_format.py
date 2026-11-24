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
    "check_display_math_spacing": True,
    "check_limit_subscript_below": True,
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
        content = r'''!!! example "Eksempel 2.3.1"

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

    def test_display_math_missing_blank_line_before_fails(self):
        content = r'''Tekst rett over
    \[
    x=2
    \]
'''
        errors = self.check(content)
        self.assertTrue(any("Mangler tom linje før visningsformelen" in e for e in errors))

    def test_display_math_missing_blank_line_after_fails(self):
        content = r'''    \[
    x=2
    \]
Tekst rett under
'''
        errors = self.check(content)
        self.assertTrue(any("Mangler tom linje etter visningsformelen" in e for e in errors))

    def test_display_math_with_blank_lines_passes(self):
        content = r'''Tekst over

    \[
    x=2
    \]

Tekst under
'''
        self.assertEqual(self.check(content), [])

    def test_unclosed_fence_fails(self):
        errors = self.check("~~~python\nprint('hei')\n")
        self.assertTrue(any("Uavsluttet kodeblokk" in e for e in errors))

    def test_unbalanced_svg_fails(self):
        errors = self.check("<figure>\n<svg></figure>\n")
        self.assertTrue(any("Ubalansert HTML/SVG" in e for e in errors))

    def test_subtasks_on_separate_paragraphs_pass(self):
        content = """!!! question \"Oppgave 2.3.1\"
    a) Første deloppgave.

    b) Andre deloppgave.

??? note \"Fasit – 2.3.1\"
    a) Første svar.

    b) Andre svar.
"""
        self.assertEqual(self.check(content), [])

    def test_subtasks_on_same_line_fail(self):
        content = """!!! question \"Oppgave 2.3.1\"

    a) Første deloppgave. b) Andre deloppgave.
"""
        errors = self.check(content)
        self.assertTrue(any("Flere deloppgaver står på samme linje" in e for e in errors))

    def test_subtask_without_blank_line_before_fails(self):
        content = """!!! question \"Oppgave 2.3.1\"

    a) Første deloppgave.
    b) Andre deloppgave.
"""
        errors = self.check(content)
        self.assertTrue(any("eget avsnitt med tom linje før" in e for e in errors))

    def test_subtask_with_extra_bullet_fails(self):
        content = """!!! question \"Oppgave 2.3.1\"

    - a) Første deloppgave.
"""
        errors = self.check(content)
        self.assertTrue(any("ekstra punktmarkør" in e for e in errors))


    def test_task_and_fasit_ids_match(self):
        content = r'''!!! question "Oppgave 2.3.1"

    Finn grenseverdien.

??? note "Fasit – 2.3.1"

    \[
    \underline{\underline{4}}
    \]
'''
        self.assertEqual(self.check(content), [])

    def test_task_and_moments_ids_match(self):
        content = r'''!!! question "Oppgave 2.13.1"

    Forklar begrepet.

??? note "Momenter – 2.13.1"

    Et godt svar forklarer begrepet presist.
'''
        self.assertEqual(self.check(content), [])

    def test_task_without_answer_box_fails(self):
        content = r'''!!! question "Oppgave 2.3.1"

    Finn grenseverdien.
'''
        errors = self.check(content)
        self.assertTrue(any("mangler fasit- eller momentboks" in e for e in errors))

    def test_mismatched_fasit_id_fails(self):
        content = r'''!!! question "Oppgave 2.3.1"

    Finn grenseverdien.

??? note "Fasit – 2.3.2"

    **Resultat:** \\(\\underline{\\underline{4}}\\)
'''
        errors = self.check(content)
        self.assertTrue(any("ingen oppgave med samme nummer" in e for e in errors))

    def test_duplicate_task_id_fails(self):
        content = r'''!!! question "Oppgave 2.3.1"

    Første oppgave.

!!! question "Oppgave 2.3.1"

    Andre oppgave.
'''
        errors = self.check(content)
        self.assertTrue(any("brukt flere ganger" in e for e in errors))

    def test_legacy_task_label_fails(self):
        errors = self.check("**2.3.1** Finn grenseverdien.\\n")
        self.assertTrue(any("mangler etiketten 'Oppgave'" in e for e in errors))

    def test_duplicate_example_id_fails(self):
        content = """!!! example "Eksempel 2.3.1"

    Første eksempel.

!!! example "Eksempel 2.3.1"

    Andre eksempel.
"""
        errors = self.check(content)
        self.assertTrue(any("Eksempelnummer 2.3.1 er brukt flere ganger" in e for e in errors))

    def test_empty_example_box_fails(self):
        errors = self.check('!!! example "Eksempel 2.3.1"\\n\\n### Neste del\\n')
        self.assertTrue(any("Tom admonition-boks" in e for e in errors))


    def test_parameter_tuple_is_not_mistaken_for_subtask(self):
        content = """!!! question "Oppgave 2.3.1"

    c) Finn to parameterpar \\((a,b)\\) som oppfyller kravet.

??? note "Momenter – 2.3.1"

    Det finnes flere mulige par.
"""
        self.assertEqual(self.check(content), [])

    def test_limit_subscript_below_passes(self):
        content = r'''Grenseverdi: \(\lim\limits_{x\to a}f(x)\).'''
        self.assertEqual(self.check(content), [])

    def test_limit_subscript_not_below_fails(self):
        content = r'''Grenseverdi: \(\lim_{x\to a}f(x)\).'''
        errors = self.check(content)
        self.assertTrue(any("Grensepunktet skal stå under lim-tegnet" in e for e in errors))

if __name__ == "__main__":
    unittest.main()
