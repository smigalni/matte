import importlib.util
import tempfile
import unittest
from pathlib import Path

SCRIPT = Path(__file__).resolve().parents[2] / "scripts" / "book-quality" / "check_book_format.py"
spec = importlib.util.spec_from_file_location("check_book_format", SCRIPT)
checker = importlib.util.module_from_spec(spec)
spec.loader.exec_module(checker)

BASE_CHECKS = {
    "check_balanced_code_fences": True,
    "check_balanced_math_delimiters": True,
    "check_balanced_svg_figure": True,
}


class BookQualityTests(unittest.TestCase):
    def check(self, content):
        with tempfile.TemporaryDirectory() as temp:
            path = Path(temp) / "page.md"
            path.write_text(content, encoding="utf-8")
            return checker.check_file(path, "page.md", BASE_CHECKS)

    def test_balanced_display_math_passes(self):
        content = r'''Tekst

$$
f(x)=x^2
$$

\[
f'(x)=2x
\]
'''
        self.assertEqual(self.check(content), [])

    def test_unbalanced_display_math_fails(self):
        errors = self.check(r'''\[
f(x)=x^2
''')
        self.assertTrue(any("Ubalanserte display-matematikkavgrensninger" in e for e in errors))

    def test_unbalanced_dollar_delimiters_fails(self):
        errors = self.check("$$\nx=2\n")
        self.assertTrue(any("Ubalanserte display-matematikkavgrensninger ($$)" in e for e in errors))

    def test_unclosed_fence_fails(self):
        errors = self.check("~~~python\nprint('hei')\n")
        self.assertTrue(any("Uavsluttet kodeblokk" in e for e in errors))

    def test_balanced_fence_passes(self):
        self.assertEqual(self.check("~~~python\nprint('hei')\n~~~\n"), [])

    def test_unbalanced_svg_fails(self):
        errors = self.check("<figure>\n<svg></figure>\n")
        self.assertTrue(any("Ubalansert HTML/SVG" in e for e in errors))

    def test_balanced_svg_figure_passes(self):
        self.assertEqual(self.check("<figure><svg></svg></figure>\n"), [])


if __name__ == "__main__":
    unittest.main()
