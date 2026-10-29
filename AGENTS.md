# Arbeidsregler for matteprosjektet

Disse reglene gjelder for alt arbeid i dette repositoriet. Følg eksisterende løsninger før du lager nye mønstre. Ikke be brukeren gjenta allerede avtalte krav.

## 1. Git og arbeidsflyt

- Arbeid på den feature-branchen brukeren har angitt. I den pågående samlede kapittel 3-jobben er branchen `feature/kapittel-3-derivasjon-komplett`.
- Ikke gjør endringer direkte på `main`, og ikke opprett en ny branch når brukeren uttrykkelig ber om å bruke samme branch.
- Bevar alle eksisterende, urelaterte endringer. Ikke tilbakestill eller overskriv arbeid uten grunn.
- Bruk små, beskrivende commit-meldinger på norsk eller engelsk som passer repoets eksisterende historikk.
- Kontroller branch og filinnhold før du skriver. Etter endring: hent filen på nytt og kontroller at committen og innholdet faktisk finnes på riktig branch.
- Ikke slett branches eller filer uten uttrykkelig beskjed.

## 2. Design og formatering – obligatorisk

Bruk kapittel 3.1 og de nærmeste eksisterende kapitlene som visuell og strukturell fasit. Gjenbruk repoets etablerte MkDocs/Zensical-syntaks; ikke finn opp et nytt design for hver side.

- **Eksempler:** alle gjennomarbeidede eksempler skal ligge inni en `!!! example`-boks. Bruk samme turkise eksempelbokser som i kapittel 3.1 og andre ferdige sider. Ikke presenter et fullstendig regneeksempel som en vanlig `### Eksempel`-overskrift uten boks.
- **Regler og viktige formler:** bruk etablerte blå/regelfremhevende bokser og passende overskrifter.
- **Oppgaver:** bruk etablerte lilla oppgavebokser med konsekvent nummerering.
- **Fasit:** legg fasit i sammenleggbare bokser med samme mønster som resten av nettstedet, for eksempel `??? note "Fasit – oppgave ..."` når dette er mønsteret på siden.
- **Svar:** alle endelige svar i utregnede eksempler og fasiter skal dobbeltunderstrekes i MathJax: `\\underline{\\underline{...}}`.
- **Matematikk:** bruk korrekt MathJax. Bruk display-matematikk for sentrale formler og mellomregninger. Bruk `\\dfrac{...}{...}` når en brøk ellers blir for liten eller utydelig.
- **Mellomregning:** vis logiske steg på egne linjer med `aligned` der det passer. Ikke hopp over viktige steg for elever på VGS.
- **Eksempler:** forklar metode trinnvis, si hvilken regel som brukes, definer symboler før de brukes, og avslutt med et tydelig dobbeltunderstreket svar.
- **Feil elevene ofte gjør:** der det er pedagogisk relevant, ta med en tydelig advarsel eller et eksempel som forklarer feilen.
- **Oppgavenivå:** varier oppgavene fra grunnleggende til mer krevende. Nummerer dem i eksisterende kapittelstruktur; ikke opprett nye kategorier uten at brukeren ber om det.
- **Språk:** skriv klart og naturlig norsk, med konsekvent matematisk notasjon og begrepsbruk.
- **Navigasjon:** oppdater relevante lenker og indeksfiler når en ny side eller seksjon krever det. Ikke endre navigasjonen unødvendig.
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
4. **Kontroller rendering/build:** kjør prosjektets faktiske Zensical/MkDocs-bygg og relevante formatterings-/testkommandoer hvis miljøet er tilgjengelig. Hvis ikke, si eksplisitt at full bygging eller visuell nettleserkontroll ikke ble utført; ikke påstå at den er bestått.
5. **Kontroller Git:** bekreft branch, commit og endrede filer. Bevar eksisterende arbeid.
6. **Rapporter kort:** oppsummer hva som er endret, lenk til branch/commit eller filer, og oppgi hvilke kontroller som faktisk ble kjørt og eventuelle begrensninger.

## 5. Viktig samarbeidsregel

Bruk disse instruksjonene automatisk i alle fremtidige oppgaver i repositoriet. Ikke spør brukeren om designvalg som allerede er bestemt her. Hvis en side ser annerledes ut enn den etablerte malen, undersøk og rett formateringen før du leverer.
