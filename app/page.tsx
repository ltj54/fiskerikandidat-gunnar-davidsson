import Image from "next/image";
import ContactDialog from "@/components/ContactDialog";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const imagePath = (name: string) => `${basePath}/images/${name}`;

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Til toppen">
          <span className="brand-mark" aria-hidden="true">
            <Image
              src={imagePath("logo-gunnar-symbol.webp")}
              width={800}
              height={273}
              alt=""
              priority
            />
          </span>
          <span>Gunnar Davidsson</span>
        </a>
        <nav className="site-nav" aria-label="Hovedmeny">
          <a href="#tjenester">Tjenester</a>
          <a href="#om">Om Gunnar</a>
          <a className="nav-contact" href="#kontakt">
            Ta kontakt <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> Havbruksfond · Forvaltning · Næringsutvikling
            </p>
            <h1>
              Strategisk rådgivning innen fiskeri, havbruk og
              kystforvaltning.
            </h1>
            <p className="hero-lead">
              Fiskerikandidat Gunnar Davidsson har arbeidet med kystrelaterte
              problemstillinger i over 40 år innen bank, fiskeeksport og
              offentlig forvaltning.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#kontakt">
                Ta kontakt <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#tjenester">
                Se tjenester <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <Image
              src={imagePath("hero-nordnorsk-kyst.webp")}
              width={1800}
              height={1121}
              alt="Fjordlandskap i Nord-Norge med snødekte fjell og maritimt anlegg i forgrunnen"
              priority
              sizes="(max-width: 800px) calc(100vw - 32px), 54vw"
            />
            <div className="hero-shade" aria-hidden="true" />
            <div className="visual-note">
              <span className="note-dot" /> Foto: Gunnar Davidsson
            </div>
            <div className="visual-caption">
              Nord-Norge
              <br />
              <strong>kyst og kompetanse</strong>
            </div>
          </div>
        </section>

        <section className="intro-band">
          <div className="section-shell intro-grid">
            <p className="section-kicker">Faglig bakgrunn</p>
            <div className="intro-copy">
              <p className="intro-text">
                Gunnar Davidsson er utdannet fiskerikandidat, MSc i fiskeri- og
                havbruksvitenskap ved UiT Norges arktiske universitet,
                tidligere Universitetet i Tromsø.
              </p>
              <div className="background-points">
                <div>
                  <h3>Forvaltning og utvikling</h3>
                  <p>
                    Han har lang erfaring primært fra offentlig forvaltning,
                    virkemiddelforvaltning, akvakultur- og vannforvaltning samt
                    regional næringsutvikling i Nord-Norge.
                  </p>
                </div>
                <div>
                  <h3>Næring og internasjonalt arbeid</h3>
                  <p>
                    Gunnar har også bakgrunn fra bankvirksomhet,
                    fiskeeksport og internasjonalt samarbeid innen EU/EØS.
                  </p>
                </div>
                <div>
                  <h3>Ledelse og Havbruksfondet</h3>
                  <p>
                    Gunnar har ledet akvakulturtildeling i Troms fylkeskommune
                    i en årrekke og hatt ansvar for kystrelatert virksomhet og
                    infrastruktur. Han har også fulgt opp Havbruksfondet og
                    bidratt med offentlige prognoser og beregninger.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section section-shell" id="tjenester">
          <div className="section-heading">
            <p className="section-kicker">Kompetanseområder</p>
            <h2>Rådgivning i møtet mellom næring og forvaltning.</h2>
          </div>
          <div className="service-grid">
            <article className="service-card service-card-accent service-card-featured">
              <h3>Havbruksfondet</h3>
              <p>
                Havbruksfondet ble etablert i 2017 for å fordele en andel av
                statens inntekter fra havbruksnæringen til fylkeskommuner og
                kommuner. Gunnar har siden starten utarbeidet prognoser for
                kommuner og fylker. Beregningssystemet er til dels komplisert
                og uoversiktlig før utbetalingene finner sted, og midlene
                utbetales sent i regnskapsåret. Han har også vært sentral i det
                politiske arbeidet med å forbedre rammebetingelsene rundt
                fordelingen og sikre kommunenes og fylkeskommunenes inntekter
                fra fondet.
              </p>
            </article>
            <article className="service-card">
              <h3>Forvaltning og rammevilkår</h3>
              <p>
                Bistand til virksomheter eller offentlige aktører som har behov
                for bedre oversikt over offentlige prosesser, ansvar og
                regelverk.
              </p>
            </article>
            <article className="service-card">
              <h3>Analyser og faglige bidrag</h3>
              <p>
                Faglige vurderinger, utredninger og analyser knyttet til næring
                og forvaltning.
              </p>
            </article>
            <article className="service-card">
              <h3>Areal og lokaliteter</h3>
              <p>
                Rådgivning om havbrukslokaliteter, arealbruk og
                kystsoneforvaltning, basert på mange års ledelse og ansvar for
                akvakulturforvaltning og kystsoneplanlegging.
              </p>
            </article>
            <article className="service-card">
              <h3>Besøk og ekskursjoner til Island</h3>
              <p>
                Som født og oppvokst på Island, med god kunnskap om næring og
                samfunn og mange års samarbeid med islandske myndigheter og
                virksomheter, har Gunnar organisert og guidet en rekke besøk og
                fagekskursjoner. Temaene spenner fra reiseliv, landbruk, fiskeri
                og oppdrett til forskning, utvikling og kompetanse. OU-turer og
                blåturer inngår også i tilbudet.
              </p>
            </article>
          </div>

          <div
            className="field-gallery"
            aria-label="Utvalgte bilder fra Gunnars arbeid og Nord-Norge"
          >
            <figure className="field-image field-image-wide">
              <Image
                src={imagePath("akvakultur-laks.webp")}
                width={1400}
                height={1068}
                alt="Laks som hopper over havoverflaten"
                sizes="(max-width: 800px) calc(100vw - 32px), 50vw"
              />
              <figcaption>
                <strong>Akvakultur</strong>
                <span>Havbruksfond, rammevilkår og muligheter</span>
              </figcaption>
            </figure>
            <figure className="field-image">
              <Image
                src={imagePath("fiskeri-kystnaering.webp")}
                width={1600}
                height={868}
                alt="Fiskefartøy i arbeid ved den nordnorske kysten"
                sizes="(max-width: 800px) calc(100vw - 32px), 50vw"
              />
              <figcaption>
                <strong>Fiskeri og kystnæring</strong>
                <span>Verdiskaping langs kysten</span>
              </figcaption>
            </figure>
            <figure className="field-image">
              <Image
                src={imagePath("naeringsutvikling.webp")}
                width={1500}
                height={818}
                alt="Omvisning i et maritimt produksjonslokale"
                sizes="(max-width: 800px) calc(100vw - 32px), 50vw"
              />
              <figcaption>
                <strong>Næringsutvikling</strong>
                <span>Kompetanse, produksjon og samarbeid</span>
              </figcaption>
            </figure>
            <figure className="field-image field-image-wide">
              <Image
                src={imagePath("nordlys-reiseliv.webp")}
                width={1400}
                height={1050}
                alt="Nordlys over et vinterlandskap i Nord-Norge"
                sizes="(max-width: 800px) calc(100vw - 32px), 50vw"
              />
              <figcaption>
                <strong>Besøksplanlegging</strong>
                <span>Fagekskursjoner og opplevelser på Island</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="about-section" id="om">
          <div className="section-shell about-grid">
            <div className="about-image">
              <Image
                src={imagePath("gunnar-faglig-innlegg.webp")}
                width={1400}
                height={933}
                alt="Gunnar Davidsson holder et faglig innlegg"
                sizes="(max-width: 800px) calc(100vw - 32px), 46vw"
              />
              <span className="image-label">Gunnar Davidsson</span>
            </div>
            <div className="about-copy">
              <p className="section-kicker">Om Gunnar</p>
              <h2>
                Fiskerifaglig utdanning og erfaring fra Island og Norge.
                Omfattende erfaring fra offentlig forvaltning.
              </h2>
              <p>
                Gjennom sitt arbeid som avdelings- og seksjonsleder,
                assisterende næringssjef i Troms fylkeskommune og avdelingsleder
                i Troms og Finnmark fylkeskommune har han opparbeidet særlig
                kunnskap om Havbruksfondet, tildeling av havbrukslokaliteter,
                arealspørsmål og samspillet mellom næringsliv og offentlig
                forvaltning, spesielt i Nord-Norge. Han har også deltatt aktivt
                i den offentlige debatten om rammevilkår innen
                havbruksnæringen.
              </p>
              <p>
                Gjennom enkeltpersonforetaket Fiskerikandidat Gunnar Davidsson
                tilbyr han rådgivning til offentlige og private, basert på
                denne faglige kunnskapen og praktiske erfaringen.
              </p>
              <ul
                className="credentials"
                aria-label="Gunnars kompetanseområder"
              >
                <li>
                  <strong>Fiskerikandidat</strong>
                  <span>Universitetet i Tromsø</span>
                </li>
                <li>
                  <strong>Offentlig forvaltning</strong>
                  <span>Lang og relevant erfaring</span>
                </li>
                <li>
                  <strong>Havbruk og areal</strong>
                  <span>Lokalisering og rammevilkår</span>
                </li>
                <li>
                  <strong>Næringsutvikling</strong>
                  <span>Regionalt perspektiv</span>
                </li>
              </ul>
              <Image
                className="profile-logo"
                src={imagePath("logo-gunnar-full.webp")}
                width={1000}
                height={639}
                alt="Fiskerikandidat Gunnar Davidsson – Havbruksfond, forvaltning og næringsutvikling"
                sizes="390px"
              />
            </div>
          </div>
        </section>

        <section
          className="insight-section section-shell"
          aria-labelledby="insight-title"
        >
          <div className="insight-heading">
            <div>
              <p className="section-kicker">Utvalgte faglige omtaler</p>
              <h2 id="insight-title">
                Beregninger som setter lokale ringvirkninger i perspektiv.
              </h2>
            </div>
            <p>
              Gunnar har over tid bidratt med beregninger og prognoser til
              kommuner og fylkeskommuner om forventede årlige inntekter fra det
              statlige Havbruksfondet. Beregningene har i en årrekke vært
              publisert og delt med kommuner og fylker.
            </p>
          </div>

          <div className="insight-grid">
            <article className="insight-card">
              <p className="insight-meta">
                Vest-Lofoten Næringsforening · 27. august 2024
              </p>
              <h3>Lofoten kunne få rundt 35 millioner fra Havbruksfondet</h3>
              <p>
                Gunnars beregninger viste at Flakstad, Vestvågøy og Vågan
                samlet kunne få om lag 35 millioner kroner utbetalt på slutten
                av året. Han gjorde videre rede for usikkerheten rundt
                beregningene og hvilke forutsetninger prognosen bygget på.
              </p>
              <a
                className="article-link"
                href="https://vlnf.no/aktuelt/nyheter/lofoten-kan-fa-35-millioner-kroner"
                target="_blank"
                rel="noopener noreferrer"
              >
                Les saken hos Vest-Lofoten Næringsforening
                <span aria-hidden="true">↗</span>
              </a>
            </article>

            <article className="insight-card">
              <p className="insight-meta">IntraFish · 28. juni 2018</p>
              <h3>Havbruksfondet og verdiene som tilfaller kystkommunene</h3>
              <p>
                IntraFish presenterte estimater for utbetalinger til
                oppdrettskommuner langs kysten. Saken er illustrert med et av
                Gunnars egne fotografier fra havbruksnæringen i Nord-Troms.
              </p>
              <a
                className="article-link"
                href="https://www.intrafish.no/nyheter/havbruksfondet-sa-mye-far-kommunene-i-finnmark/2-1-368154"
                target="_blank"
                rel="noopener noreferrer"
              >
                Les saken hos IntraFish (forutsetter abonnement)
                <span aria-hidden="true">↗</span>
              </a>
            </article>

            <article className="insight-card">
              <p className="insight-meta">
                Uttalelse · 9. september 2022
              </p>
              <h3>Havbruksfondet hjem til kysten</h3>
              <p>
                Uttalelsen beskriver hvordan endringene i fordelingen fra
                Havbruksfondet påvirket kystkommunene, som planlegger og
                tilrettelegger sjøarealer for havbruksnæringen.
              </p>
              <a
                className="article-link"
                href="https://www.halogalandsradet.no/wp-content/uploads/2022/09/220909-TFFK-VFRR-m.fl_.-Uttalelse-Havbruksfondet-hjem-til-kysten.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Les uttalelsen <span aria-hidden="true">↗</span>
              </a>
            </article>

            <article className="insight-card">
              <p className="insight-meta">
                Troms fylkeskommune · 13. september 2024
              </p>
              <h3>
                Spørsmål om endringer i oppdrettslokaliteter for laks og røye
                i Troms
              </h3>
              <p>
                Et skriftlig spørsmål om økt maksimal tillatt biomasse i
                enkeltlokaliteter i produksjonsområdene 10 og 11, og hvordan
                slike saker blir behandlet politisk.
              </p>
              <a
                className="article-link"
                href="https://www.tromsfylke.no/politikk/for-politikere/skriftlige-sporsmal/#faqsporsmal-2768"
                target="_blank"
                rel="noopener noreferrer"
              >
                Les spørsmålet hos Troms fylkeskommune
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          </div>
        </section>

        <section className="contact-section section-shell" id="kontakt">
          <div className="contact-card">
            <div>
              <p className="section-kicker">Kontakt</p>
              <h2>Ta kontakt om en konkret problemstilling.</h2>
              <p className="contact-copy">
                En innledende samtale kan avklare behovet, rammene for oppdraget
                og om Gunnars kompetanse passer til saken.
              </p>
              <ContactDialog />
            </div>
            <div className="contact-details">
              <span className="pending-detail">
                [E-postadresse – må bekreftes]
              </span>
              <span className="pending-detail">
                [Telefonnummer – må bekreftes]
              </span>
              <span className="pending-detail">
                [Forretningsadresse – må bekreftes]
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <span>© 2026 Fiskerikandidat Gunnar Davidsson</span>
        <span>Org.nr. 938 423 334</span>
        <span>Rådgivning for fiskeri og havbruk</span>
      </footer>
    </>
  );
}
