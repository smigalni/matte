# Felles kvalitetssystem for mattebøkene

Dette er standarden for formatering og kvalitetssikring på tvers av mattebok-repoene. Målet er at vi ikke skal bruke tid på å rette de samme formateringsfeilene manuelt igjen og igjen.

## Slik fungerer det

- Den delte sjekkeren ligger i `scripts/book-quality/check_book_format.py`.
- Hvert bok-repo har en `.book-quality.toml` som aktiverer og konfigurerer kontrollene.
- GitHub Actions kjører kontrollene automatisk ved push og pull request.
- Sjekkeren bruker bare Python-standardbiblioteket.
- Kildekontroller finner kjente strukturelle feil, men erstatter ikke bygging av boken eller visuell kontroll i nettleseren.

## Absolutte regler for innholdsbevaring og navigasjon

- Eksisterende kapittel- og delkapittelinnhold skal aldri regenereres, overskrives, erstattes eller gjenskapes som følge av navigasjons-, lenke-, formaterings- eller byggearbeid.
- Ved `Not found` skal vi feilsøke den konkrete filbanen og anker-ID-en. Gjør bare en målrettet retting av lenken eller ankeret; bevar resten av innholdet.
- Navigasjonslenker til delkapitler skal peke på eksisterende sider og verifiserte anker-ID-er. Bruk eksplisitte, stabile ID-er når automatiske overskriftsankere er usikre, og oppdater lenke og anker samlet.
- Kontroller endringen med Git-diff: ved en ren navigasjonsretting skal oppgaver, eksempler, fasiter og forklarende tekst være uendret.

- **Zensical-navigasjon:** Hvert element i `nav` skal peke på en faktisk Markdown-fil relativt til `docs_dir`. Ikke bruk `fil.md#anker` som mål i venstremenyen; Zensical-navigasjonen forventer en side, ikke et sidefragment. Hvis et delkapittel skal være et eget punkt i venstremenyen, skal det ha en egen Markdown-fil. Bruk ankerlenker i innholdet eller sidens innholdsfortegnelse for hopp innenfor samme side. Kontroller at alle nav-stier peker på eksisterende filer.

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
10. Deloppgaver i oppgavetekster og fasiter skal stå i hvert sitt avsnitt med bokstavmerking (`a)`, `b)`, `c)` osv.). Det skal være en tom linje før hver deloppgave, ingen ekstra punktmarkør eller nummerering foran bokstavene, og flere deloppgaver skal aldri stå på samme linje. Den automatiske sjekkeren kontrollerer dette.
11. Oppgaver skal bruke `!!! question` og ha hierarkisk ID på formen `Oppgave kapittel.delkapittel.løpenummer`.
12. Hver oppgave skal ha en fasit- eller momentboks med samme ID. Fasit-ID skal samsvare med tilhørende oppgave-ID, og oppgave-/svarbokser skal ikke slås sammen uten tom linje.
13. Eksempel-ID-er skal være unike innenfor hver fil; tomme eksempelbokser og dupliserte nummer skal fanges automatisk.
14. Nummererte eksempler skal bruke `Eksempel kapittel.delkapittel.løpenummer`.
15. Admonitions for eksempel, oppgave og regel skal ha innhold; tomme bokser er feil.
16. Display-formler skal ha tom linje før og etter, balanserte MathJax-avgrensninger og korrekt innrykk. Bruk `\\dfrac` når brøken må være lett å lese.

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
