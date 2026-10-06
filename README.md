# Fiskerikandidat Gunnar Davidsson

En enkel og vedlikeholdsvennlig presentasjonsside for Fiskerikandidat Gunnar Davidsson.

## Lokal utvikling

Prosjektet bruker Next.js 16, React 19 og TypeScript.

```text
npm install
npm run dev
```

Åpne `http://localhost:3000` i nettleseren. I IntelliJ kan den delte kjøreprofilen `Next.js` brukes.

## Kontroll

```text
npm run lint
npm run build
```

Bygget eksporteres som statiske filer til `out/`. GitHub Pages-arbeidsflyten
publiserer automatisk etter at en bruker har pushet til `main`, eller når den
startes manuelt. Interne prosjekt- og kundedokumenter skal ikke inngå i det
offentlige repositoriet.

## Eget domene

Produksjonsbygget bruker GitHub Pages-adressen og base path
`/fiskerikandidat-gunnar-davidsson` så lenge repository-variabelen
`CUSTOM_DOMAIN` ikke er satt. Dermed fungerer arbeidsutkastet som før.

Ved overgang til kundens domene:

1. Opprett Actions-variabelen `CUSTOM_DOMAIN` med verdien `davidsson.no` under
   **Settings → Secrets and variables → Actions → Variables**.
2. Legg inn `davidsson.no` som **Custom domain** under **Settings → Pages**.
3. Kjør arbeidsflyten **Publiser nettsted** på nytt. Bygget får da tom `basePath`
   og kan vises fra domenets rot.
4. Be domeneeieren endre bare web-postene hos GoDaddy:
   - `A` for `@`: `185.199.108.153`
   - `A` for `@`: `185.199.109.153`
   - `A` for `@`: `185.199.110.153`
   - `A` for `@`: `185.199.111.153`
   - `CNAME` for `www`: `ltj54.github.io`
5. Ikke endre eller slette MX- og TXT-postene som brukes av Microsoft 365.
6. Når DNS er oppdatert og GitHub har utstedt sertifikat, aktiver **Enforce HTTPS**
   under **Settings → Pages**.

DNS-endringer og HTTPS-sertifikatet kan bruke opptil 24 timer på å bli fullt
aktive. Ikke aktiver `CUSTOM_DOMAIN` eller Custom domain lenge før DNS-endringen,
fordi den eksisterende GitHub Pages-adressen da kan begynne å videresende til
domenet før dette er klart.
