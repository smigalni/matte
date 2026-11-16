# Arbeidsregler for matteprosjektet

Disse reglene gjelder for alt arbeid i dette repositoriet. Følg eksisterende løsninger før du lager nye mønstre. Ikke be brukeren gjenta allerede avtalte krav.

## 1. Git og arbeidsflyt

- Arbeid alltid på den aktive feature-branchen som er angitt for oppgaven. Ikke anta at en tidligere oppgaves branch fortsatt gjelder. Bekreft branch før hver skriveoperasjon.
- Ikke gjør endringer direkte på `main`, og ikke opprett en ny branch når brukeren uttrykkelig ber om å bruke samme branch.
- Bevar alle eksisterende, urelaterte endringer. Ikke tilbakestill eller overskriv arbeid uten grunn.
- Bruk små, beskrivende commit-meldinger på norsk eller engelsk som passer repoets eksisterende historikk.
- Kontroller branch og filinnhold før du skriver. Etter endring: hent filen på nytt og kontroller at committen og innholdet faktisk finnes på riktig branch.
- Ikke slett branches eller filer uten uttrykkelig beskjed.

## 2. Design og formatering – obligatorisk

Bruk kapittel 3.1 og de nærmeste eksisterende kapitlene som visuell og strukturell fasit. Gjenbruk repoets etablerte MkDocs/Zensical-syntaks; ikke finn opp et nytt design for hver side.

- **Eksempler:** alle gjennomarbeidede eksempler skal ligge inni en `!!! example`-boks. Bruk samme turkise eksempelbokser som i kapittel 3.1 og andre ferdige sider. Ikke presenter et fullstendig regneeksempel som en vanlig `### Eksempel`-overskrift uten boks.
- **Regler og viktige formler:** bruk etablerte blå/regelfremhevende bokser og passende overskrifter. Regelbokser skal ikke ha en tung svart ramme; bruk repoets etablerte rolige, blå stil.
- **Oppgaver:** bruk etablerte lilla `!!! question`-bokser. Tittelen skal alltid ha hierarkisk nummerering, for eksempel `Oppgave 2.6.3`. Ikke bruk bare løse, fete nummeretiketter. Deloppgaver skal stå på egne linjer med tom linje mellom dem.
- **Deloppgaver:** presenter hver deloppgave på egen linje med bokstavmerking (`a)`, `b)`, `c)` osv.). Ikke bruk ekstra punktliste eller nummerering foran bokstavene. Bruk samme format i oppgavetekst og fasit, og sørg for at eventuelle formelblokker står riktig under tilhørende deloppgave.
- **Fasit/momenter:** legg fasit eller momenter rett etter tilhørende oppgave i en sammenleggbar `??? note "Fasit – 2.6.3"`- eller `??? note "Momenter – 2.13.1"`-boks. Nummeret skal samsvare nøyaktig med oppgaven. Ikke flytt svarstoff til et annet delkapittel eller la det stå under en ny seksjonsoverskrift.
- **Svar:** alle endelige svar i utregnede eksempler og fasiter skal dobbeltunderstrekes i MathJax: `\\underline{\\underline{...}}`. Ikke la en fasit ha en løs eller feilkopiert resultatlinje.
- **Matematikk:** bruk korrekt MathJax. Bruk display-matematikk for sentrale formler og mellomregninger. Bruk `\\dfrac{...}{...}` i display-formler og når en brøk ellers blir for liten eller utydelig; `\\frac` kan brukes i korte inline-uttrykk. Sett alltid en tom linje før og etter hver display-formel. Inne i admonitions skal hele formelblokken ha samme innrykk som innholdet. Bruk `aligned` når flere regnetrinn hører sammen.
- **Mellomregning:** vis logiske steg på egne linjer med `aligned` der det passer. Ikke hopp over viktige steg for elever på VGS.
- **Eksempler:** forklar metode trinnvis, si hvilken regel som brukes, definer symboler før de brukes, og avslutt med et tydelig dobbeltunderstreket svar.
- **Feil elevene ofte gjør:** der det er pedagogisk relevant, ta med en tydelig advarsel eller et eksempel som forklarer feilen.
- **Oppgavenivå:** varier oppgavene fra grunnleggende til mer krevende. Nummerer dem i eksisterende kapittelstruktur; ikke opprett nye kategorier uten at brukeren ber om det.
- **Språk:** skriv klart og naturlig norsk, med konsekvent matematisk notasjon og begrepsbruk.
- **Navigasjon:** oppdater relevante lenker og indeksfiler når en ny side eller seksjon krever det. Nummereringen i venstremenyen skal samsvare med sidetitler, oppgavenummer og kapittelstruktur. Ikke la nummerhull stå uforklart.
- **Struktur:** ikke la tomme eksempel-/regel-/oppgavebokser stå igjen. Hver oppgave skal ha én entydig ID på formen kapittel.delkapittel.løpenummer, og hver fasit-ID skal samsvare med oppgaven.
- **Mellomrom:** bruk én tom linje mellom separate oppgave-, fasit- og eksempelbokser. Ikke slå sammen to admonitions eller la neste overskrift bli del av forrige boks.
- **Bilder/SVG:** følg eksisterende mønstre, sørg for tilgjengelig `aria-label`/alternativ tekst og kontroller at SVG-/figure-elementer er balansert.

## 3. Regler for derivasjonskapitlene

- Kapittel 3.1 er hovedreferanse for utseende og pedagogisk oppbygging.
- Kapittel 3.2–3.4 er felles innhold for R1/S1 der repoets struktur angir det. Behold felles kildefiler og eksisterende lenker.
- Ved produktregelen og kvotientregelen: bruk `u`, `v`, `u'` og `v'` eksplisitt i eksemplene. Vis først valg av `u) og `v), deretter de deriverte, så innsetting i regelen.
- Ved kvotientregelen: gjør hele brøken tydelig, vis rekkefølgen `u'v-uv'`, kvadrer hele nevneren, og oppgi begrensninger i definisjonsmengden når relevant.
- Endelige svar i alle fasiter skal følge samme doble understreking som eksemplene.

## 4. Obligatorisk kontroll før ferdigmelding

Ikke erklær arbeidet ferdig bare fordi en commit er opprettet. Gjennomfør så langt verktøytilgangen tillater:

1. **Sammenlign designet** med kapittel 3.1 eller nærmeste ferdige side.
2. **Kontroller struktur:** overskrifter, oppgavenummer, fasit til alle oppgaver, interne lenker, bilde-/SVG-tagger og kodeblokker.
3. **Kontroller matematikk:** regn gjennom nye svar og fasiter, inkludert fortegn, parenteser, definisjonsmengder og dobbeltunderstreking.
4. **Kontroller rendering/build:** kjør bokkvalitetssjekkeren på alle endrede Markdown-filer, enhetstestene for sjekkeren, prosjektets faktiske Zensical/MkDocs-bygg og relevante formatterings-/testkommandoer hvis miljøet er tilgjengelig. Hvis ikke, si eksplisitt at full bygging eller visuell nettleserkontroll ikke ble utført; ikke påstå at den er bestått.
5. **Kontroller Git:** bekreft branch, commit og endrede filer. Bevar eksisterende arbeid.
6. **Rapporter kort:** oppsummer hva som er endret, lenk til branch/commit eller filer, og oppgi hvilke kontroller som faktisk ble kjørt og eventuelle begrensninger.

## 5. Viktig samarbeidsregel

Bruk disse instruksjonene automatisk i alle fremtidige oppgaver i repositoriet. Ikke spør brukeren om designvalg som allerede er bestemt her. Hvis en side ser annerledes ut enn den etablerte malen, undersøk og rett formateringen før du leverer.

## 6. Gjenbrukbar kvalitetskontroll for alle bok-repoer

- Følg den felles bokstandarden som er dokumentert i BOOK_QUALITY.md.
- Før levering: kjør eller kontroller at den automatiske Markdown-kontrollen dekker alle endrede sider.
- Den delte sjekkeren og reusable workflowen vedlikeholdes sentralt; ikke lag egne kopier i hvert bok-repo.
- Bokspesifikke unntak skal ligge i .book-quality.toml, ikke som ad hoc-regler i hver chat.
- Workflowen kontrollerer endrede Markdown-filer ved push og pull request. Den automatiske kontrollen supplerer, men erstatter ikke, faglig kontroll av matematikk eller visuell byggkontroll.
