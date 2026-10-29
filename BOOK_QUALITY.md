# Felles kvalitetssystem for mattebøkene

Målet er å fange opp tydelige strukturelle feil uten at automatiske kontroller feilaktig klassifiserer gyldige pedagogiske eller typografiske valg som feil.

## Hva sjekkeren kontrollerer

Sjekkeren i `scripts/book-quality/check_book_format.py` holder seg til avgrensede strukturelle kontroller:

- Kodeblokker har avsluttende avgrensning.
- Display-matematikk med egne `\\[ ... \\]`-linjer og `$$ ... $$`-linjer har balanserte avgrensninger.
- Antall åpne og lukkede `svg`- og `figure`-tagger stemmer.

Sjekkeren prøver **ikke** automatisk å bedømme eksempeloverskrifter, fasitoppsett, understreking av svar, innrykk i admonitions, blanklinjer rundt formler eller om hakeparenteser er brukt som matematisk notasjon. Slike vurderinger kan avhenge av konteksten og ga falske varsler.

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

1. Legg til en `.book-quality.toml` med kontrollene boka skal bruke.
2. Legg til en workflow i `.github/workflows/book-quality.yml` som kaller den gjenbrukbare workflowen.
3. Legg til `AGENTS.md` med bokas pedagogiske regler, og lenk hit for de felles strukturelle kontrollene.
4. Ikke vedlikehold en separat kopi av Python-sjekkeren i hvert bok-repo.

## Vedlikehold

Sjekkeren og den gjenbrukbare workflowen vedlikeholdes i `smigalni/matte`. Endringer i dette systemet gjøres først på en feature-branch og flettes til `main` gjennom vanlig gjennomgang.
