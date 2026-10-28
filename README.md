# R1-matte – startpakke

Dette er en første prototype for en digital R1-ressurs bygget med Zensical.

## Start på Windows (PowerShell)

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
python -m pip install zensical
zensical serve
```

Åpne deretter http://localhost:8000 i nettleseren.

Stopp serveren med `Ctrl+C`.

## Innhold

- `docs/index.md`: startsiden
- `docs/r1/derivasjon/index.md`: første kapittelutkast
- `docs/javascripts/mathjax.js`: oppsett for matematisk notasjon
- `zensical.toml`: nettstedets konfigurasjon

Dette er et pedagogisk førsteutkast. Kvalitetssikre innholdet mot gjeldende kompetansemål og undervisningsplan før det brukes som et fullstendig kapittel.

## Regler for matematisk formatering

- Bruk alltid `\\( ... \\)` for matematikk inne i en tekstlinje.
- Bruk `\\[ ... \\]` for en egen, sentrert matematisk linje. Ikke skriv visningslikninger som vanlige hakeparenteser `[ ... ]`.
- I eksempler og oppgaver inne i en admonition (for eksempel `!!! example`) skal alle linjer i innholdet ha samme innrykk, vanligvis fire mellomrom.
- Sett en tom linje både før og etter hver visningslikning. Sett også en tom linje mellom to separate `\\[ ... \\]`-blokker. Dette hindrer at Markdown slår dem sammen eller viser avgrensningene som tekst.
- Etter endring: kontroller den ferdigbygde siden i nettleseren og se at likningene rendres som matematikk, særlig i eksempler, fasit og oppgaver.
