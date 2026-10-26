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