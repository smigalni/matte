# Felles kvalitetssystem for mattebøkene

Dette er den felles standarden for bok-repoene. Målet er å unngå at hver chat eller hvert repo utvikler sin egen formateringspraksis.

## Slik fungerer det

- Den delte sjekkeren ligger i scripts/book-quality/check_book_format.py.
- Hvert bok-repo har en .book-quality.toml som slår regler av/på og justerer terskler.
- Den gjenbrukbare GitHub Actions-workflowen ligger i .github/workflows/reusable-book-quality.yml.
- Hvert repo har en liten workflow som kaller den gjenbrukbare workflowen.
- Kontrollene kjører automatisk ved push og pull request. De sjekker endrede Markdown-filer, ikke hele den historiske boka hver gang.
- Sjekkeren bruker bare Python-standardbiblioteket.

## Standardkontroller

1. Et gjennomarbeidet eksempel skal bruke en example-boks, ikke en løs Eksempel-overskrift.
2. Et Svar skal etterfølges av et MathJax-svar med dobbel understreking.
3. Innhold i admonition-bokser skal være korrekt indenteret.
4. Kodeblokker skal være lukket.
5. Antall åpne og lukkede SVG- og figure-tagger skal stemme.

## Lokal kjøring

Fra rotmappen til et bok-repo med Python 3.11 eller nyere:

python scripts/book-quality/check_book_format.py --root . --config .book-quality.toml docs/kapittel/side.md

Hvis den delte sjekkeren er sjekket ut i en undermappe, bruk den faktiske stien til check_book_format.py.

## Når vi legger til en ny bok

1. Legg til en .book-quality.toml med standardene boka skal følge.
2. Legg til en liten workflow i .github/workflows/book-quality.yml som kaller den delte workflowen.
3. Legg til AGENTS.md med bokas egne pedagogiske regler, og lenk hit for de felles reglene.
4. Ikke kopier og vedlikehold en separat variant av selve Python-sjekkeren i hvert repo.

## Vedlikehold av den delte sjekkeren

Sjekkeren og den gjenbrukbare workflowen vedlikeholdes i smigalni/matte. Når denne feature-branchen er flettet inn i main, oppdater ref i den gjenbrukbare workflowen fra feature/kapittel-3-derivasjon-komplett til main.
