/* ───────── Home · assembler ───────── */

// Sócios & Conselheiros + Experiência no setor
function TrustBar() {
  // Logo cells: each cell can hold one or two logos stacked.
  // Layout follows Nicholas-Weiser spec: 5 columns × 2 rows, with composite top cells in cols 1-2.
  const cols = [
    {
      top: [
        { src: "assets/logos/bain-capital.png", alt: "Bain Capital" },
        { src: "assets/logos/notredame-intermedica.png", alt: "Notredame Intermédica" },
      ],
      bot: [{ src: "assets/logos/aon.png", alt: "Aon" }],
    },
    {
      top: [
        { src: "assets/logos/patria.png", alt: "Pátria Investimentos" },
        { src: "assets/logos/athena-saude.svg", alt: "Athena Saúde" },
      ],
      bot: [{ src: "assets/logos/gallagher.png", alt: "Gallagher" }],
    },
    {
      top: [{ src: "assets/logos/ezze.png", alt: "EZZE" }],
      bot: [{ src: "assets/logos/jlt.png", alt: "JLT" }],
    },
    {
      top: [{ src: "assets/logos/santander.png", alt: "Santander Seguros", sub: "seguros" }],
      bot: [{ src: "assets/logos/lockton.png", alt: "Lockton", size: "lg" }],
    },
    {
      top: [{ src: "assets/logos/hapvida-notredame.png", alt: "Hapvida · NotreDame Intermédica" }],
      bot: [{ src: "assets/logos/vis.png", alt: "VIS" }],
    },
  ];

  const renderItem = (it, key) => {
    if (it.wm) return <span key={key} className="trustbar__wordmark">{it.wm}</span>;
    return (
      <span key={key} className={"trustbar__logo-img" + (it.size === "lg" ? " trustbar__logo-img--lg" : "")}>
        <img src={it.src} alt={it.alt} title={it.alt}/>
        {it.sub && <span className="trustbar__logo-sub">{it.sub}</span>}
      </span>
    );
  };

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
            {cols.map((col, i) => (
              <div key={i} className="trustbar__col">
                <div className="trustbar__cell">
                  {col.top.map((it, j) => renderItem(it, `t${j}`))}
                </div>
                <div className="trustbar__cell">
                  {col.bot.map((it, j) => renderItem(it, `b${j}`))}
                </div>
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
