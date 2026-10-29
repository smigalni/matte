# Felles kvalitetssystem for mattebøkene

Dette er standarden for formatering og kvalitetssikring på tvers av mattebok-repoene. Målet er at vi ikke skal bruke tid på å rette de samme formateringsfeilene manuelt igjen og igjen.

## Slik fungerer det

- Den delte sjekkeren ligger i `scripts/book-quality/check_book_format.py`.
- Hvert bok-repo har en `.book-quality.toml` som aktiverer og konfigurerer kontrollene.
- GitHub Actions kjører kontrollene automatisk ved push og pull request.
- Sjekkeren bruker bare Python-standardbiblioteket.
- Kildekontroller finner kjente strukturelle feil, men erstatter ikke bygging av boken eller visuell kontroll i nettleseren.

## Standardkontroller

1. Et gjennomarbeidet eksempel skal bruke en `example`-admonition, ikke en løs Eksempel-overskrift.
2. Et **Svar:** skal etterfølges av et MathJax-svar med dobbel understreking.
3. Fasitbokser som inneholder matematikk, skal ha et dobbeltunderstreket sluttsvar.
4. Innhold i admonition-bokser skal være korrekt indenteret.
5. Kodeblokker skal være lukket.
6. Antall åpne og lukkede SVG- og figure-tagger skal stemme.
7. Visningsformler skal ha en tom linje før og etter formelblokken.
8. Display-matematikk skal bruke balanserte MathJax-avgrensninger: `\[ ... \]` eller `$$ ... $$`.
9. Matematikk skal ikke skrives som vanlige hakeparenteser rundt et uttrykk, for eksempel `[ f(x)=x^2 ]`.

## Lokal kjøring

Fra rotmappen til bok-repoet med Python 3.11 eller nyere:

```bash
python scripts/book-quality/check_book_format.py --root . --config .book-quality.toml docs/felles/derivasjon/produkt-og-kvotientregelen.md
```

Testene for selve sjekkeren kjøres med:

```bash
python tests/book-quality/test_check_book_format.py
```

## Når vi legger til en ny bok

1. Legg til en `.book-quality.toml` med standardene boka skal følge.
2. Legg til en liten workflow i `.github/workflows/book-quality.yml` som kaller den gjenbrukbare workflowen.
3. Legg til `AGENTS.md` med bokas pedagogiske regler, og lenk hit for de felles formateringsreglene.
4. Ikke lag og vedlikehold en separat kopi av Python-sjekkeren i hvert bok-repo.

## Vedlikehold

Sjekkeren og den gjenbrukbare workflowen vedlikeholdes i `smigalni/matte`. Etter at endringene er flettet til `main`, skal den gjenbrukbare workflowen peke på `main` i stedet for feature-branchen.
