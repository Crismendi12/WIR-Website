/* ───────── Home · assembler ───────── */

// Sócios & Conselheiros + Experiência no setor
function TrustBar() {
  // 6×2 grid — each logo gets its own cell, uniform size.
  // Column 3: Pátria (top, featured larger) directly above Athena Saúde (bottom)
  // — visually communicates the parent-investor / portfolio relationship.
  const logos = [
    // Row 1
    { src: "assets/logos/hapvida-notredame.png",     alt: "Hapvida · NotreDame Intermédica" },
    { src: "assets/logos/notredame-intermedica.png", alt: "Notredame Intermédica" },
    { src: "assets/logos/patria.png",                alt: "Pátria Investimentos", featured: true },
    { src: "assets/logos/ezze.png",                  alt: "EZZE" },
    { src: "assets/logos/santander.png",             alt: "Santander Seguros", sub: "seguros" },
    { src: "assets/logos/bain-capital.png",          alt: "Bain Capital" },
    // Row 2
    { src: "assets/logos/aon.png",                   alt: "Aon" },
    { src: "assets/logos/gallagher.png",             alt: "Gallagher" },
    { src: "assets/logos/athena-saude.svg",          alt: "Athena Saúde" },
    { src: "assets/logos/jlt.png",                   alt: "JLT" },
    { src: "assets/logos/lockton.png",               alt: "Lockton" },
    { src: "assets/logos/vis.png",                   alt: "VIS" },
  ];
  return (
    <section className="trustbar" data-reveal>
      <div className="wrap">
        <div className="trustbar__head">
          <div>
            <div className="eyebrow">· Fundadores, Sócios & Conselheiros Estratégicos</div>
            <h2 className="trustbar__title display">
              Décadas no setor. <em>Solidez Financeira.</em><br/>
              <em>World Class</em> em IA.
            </h2>
          </div>
          <p className="trustbar__note">
            A experiência de décadas como sócios e C-Level de seguradoras e corretoras nacionais e internacionais, somada ao expertise de sócios de fundos de Private Equity e Venture Builder internacional, proporciona aos nossos clientes um conhecimento profundo do mercado segurador, solidez financeira de longo prazo e nível World Class em tecnologia e Inteligência Artificial.
          </p>
        </div>

        <div className="trustbar__experience">
          <div className="eyebrow trustbar__experience-kicker">· Experiência no setor</div>
          <div className="trustbar__grid">
            {logos.map((l, i) => (
              <div key={i} className={"trustbar__cell" + (l.featured ? " trustbar__cell--featured" : "")}>
                <span className="trustbar__logo-img">
                  <img src={l.src} alt={l.alt} title={l.alt}/>
                  {l.sub && <span className="trustbar__logo-sub">{l.sub}</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage({ go }) {
  useReveal();
  return (
    <>
      <Opening go={go}/>
      <TrustBar/>
      <Trust/>
      <ProductTabs go={go}/>
      <ArchFlow/>
      <Proof/>
      <Closing go={go}/>
    </>
  );
}

Object.assign(window, { HomePage });
