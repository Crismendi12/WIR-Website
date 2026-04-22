/* ───────── Home · assembler ───────── */

// Trust bar — real partners & founders' background
function TrustBar() {
  const founderLogos = [
    { src: "assets/logos/lockton.png",      alt: "Lockton" },
    { src: "assets/logos/aon.png",          alt: "Aon" },
    { src: "assets/logos/jlt.png",          alt: "JLT" },
    { src: "assets/logos/bain-capital.png", alt: "Bain Capital" },
    { src: "assets/logos/patria.png",       alt: "Pátria Investimentos" },
    { src: "assets/logos/ezze.png",         alt: "EZZE Seguros" },
  ];
  return (
    <section className="trustbar" data-reveal>
      <div className="wrap">
        <div className="trustbar__head">
          <div className="eyebrow">· Em produção com</div>
          <span className="trustbar__note">Piloto ativo · demais clientes sob NDA</span>
        </div>
        <div className="trustbar__hero">
          <img src="assets/logos/axa.png" alt="AXA" className="trustbar__axa"/>
          <div className="trustbar__hero-body">
            <b>Seguradora global Tier-1</b>
            <span>Brasil · Transportes · Em piloto</span>
          </div>
        </div>
        <div className="trustbar__founders">
          <div className="trustbar__founders-head">
            <span className="eyebrow">· O time vem de</span>
            <span className="trustbar__note">Experiência acumulada de fundadores e advisors</span>
          </div>
          <div className="trustbar__logos">
            {founderLogos.map((l,i) => (
              <div key={i} className="trustbar__logo">
                <img src={l.src} alt={l.alt} title={l.alt}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Compliance badges
function ComplianceBadges() {
  const badges = [
    { k: "LGPD",  v: "Conforme",    desc: "Proteção de dados pessoais (BR)" },
    { k: "SOC 2", v: "Em processo", desc: "Arquitetura e controles prontos" },
    { k: "HIPAA", v: "Alinhado",    desc: "Privacidade em saúde (US)" },
    { k: "ISO",   v: "27001 ready", desc: "Base de gestão de segurança" },
  ];
  const Shield = ({ color }) => (
    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" aria-hidden>
      <path d="M10 1L2 4v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V4l-8-3z"
        stroke={color || "currentColor"} strokeWidth="1.3" fill="none"/>
      <path d="M6.5 10.5l2.5 2.5 4.5-5"
        stroke={color || "currentColor"} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  return (
    <div className="compliance">
      <div className="wrap">
        <div className="compliance__grid">
          {badges.map((b,i) => (
            <div key={i} className="compliance__badge">
              <Shield color="var(--wir-purple)"/>
              <div className="compliance__body">
                <div className="compliance__k">{b.k} <em>{b.v}</em></div>
                <div className="compliance__d">{b.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HomePage({ go }) {
  useReveal();
  return (
    <>
      <Opening go={go}/>
      <TrustBar/>
      <Proof/>
      <Shift/>
      <ProductTabs go={go}/>
      <WorkflowSVG/>
      <Trust/>
      <ComplianceBadges/>
      <Closing go={go}/>
    </>
  );
}

Object.assign(window, { HomePage });
