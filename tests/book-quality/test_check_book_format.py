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
    "check_admonition_indentation": True,
    "check_balanced_code_fences": True,
    "check_balanced_svg_figure": True,
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
        content = '!!! example "Eksempel"\n\n    Regn ut.\n\n    **Svar:**\n\n    \\\\[\n    \\\\underline{\\\\underline{x=2}}\n    \\\\]\n'
        self.assertEqual(self.check(content), [])

    def test_plain_example_heading_fails(self):
        errors = self.check("### Eksempel 1\n\nRegn ut.\n")
        self.assertTrue(any("Eksempel-heading utenfor boks" in e for e in errors))

    def test_missing_double_underline_fails(self):
        errors = self.check('!!! example "Eksempel"\n\n    **Svar:**\n\n    \\\\(x=2\\\\)\n')
        self.assertTrue(any("Svar mangler dobbel understreking" in e for e in errors))

    def test_unclosed_fence_fails(self):
        errors = self.check("~~~python\nprint('hei')\n")
        self.assertTrue(any("Uavsluttet kodeblokk" in e for e in errors))

    def test_unbalanced_svg_fails(self):
        errors = self.check("<figure>\n<svg></figure>\n")
        self.assertTrue(any("Ubalansert HTML/SVG" in e for e in errors))

if __name__ == "__main__":
    unittest.main()
