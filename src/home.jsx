/* ───────── Home · assembler ───────── */

// Trust bar — founders' background (Lockton, Aon, JLT, Bain Capital, Pátria, EZZE)
function TrustBar() {
  const logos = [
    { src: "assets/logos/lockton.png",      alt: "Lockton",              tag: "Broker global · P&C" },
    { src: "assets/logos/aon.png",          alt: "Aon",                  tag: "Risco corporativo" },
    { src: "assets/logos/jlt.png",          alt: "JLT",                  tag: "Specialty insurance" },
    { src: "assets/logos/bain-capital.png", alt: "Bain Capital",         tag: "Private equity" },
    { src: "assets/logos/patria.png",       alt: "Pátria Investimentos", tag: "Asset management" },
    { src: "assets/logos/ezze.png",         alt: "EZZE Seguros",         tag: "Seguradora digital" },
  ];
  return (
    <section className="trustbar" data-reveal>
      <div className="wrap">
        <div className="trustbar__head">
          <div>
            <div className="eyebrow">· Construído por quem viveu o problema</div>
            <h2 className="trustbar__title display">
              Décadas de <em>mercado real</em><br/>
              dentro da nossa arquitetura.
            </h2>
          </div>
          <p className="trustbar__note">
            Os fundadores e advisors da WIR vêm de seguradoras, corretoras e casas de investimento que moldaram o setor na última década. A plataforma carrega esse aprendizado em cada decisão que entrega.
          </p>
        </div>
        <div className="trustbar__logos">
          {logos.map((l,i) => (
            <div key={i} className="trustbar__logo">
              <img src={l.src} alt={l.alt} title={l.alt}/>
              <span className="trustbar__logo-tag">{l.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Six strategic outcome indicators — from AXA proposal language
function Outcomes() {
  const items = [
    { k:"+ Eficiência",    c:"#10B981", t:"Escalar volume de cotações",                  d:"Processar múltiplos de cotação sem multiplicar headcount." },
    { k:"+ Faturamento",   c:"#F8AD39", t:"Mais cotações geram mais negócio fechado",    d:"Retorno mais rápido ao corretor abre mais ciclos de venda." },
    { k:"− DA / Custos",   c:"#FE8B77", t:"Margem e lucratividade ampliadas",            d:"Ampliar volume sem crescer despesa administrativa na mesma proporção." },
    { k:"+ Inteligência",  c:"#3B82F6", t:"Dashboards e analytics em tempo real",        d:"Gestão decide sobre pipeline vivo, não sobre relatório de ontem." },
    { k:"+ AI First",      c:"#7540AC", t:"Pioneirismo em automação regulada",           d:"Quem sai na frente lidera e atrai os melhores resultados de risco." },
    { k:"Escalar +",       c:"#06B6D4", t:"Preparada para o futuro da seguradora",       d:"Plataforma que evolui com o setor — não um SaaS a mais." },
  ];
  return (
    <section className="outcomes" data-reveal>
      <div className="wrap">
        <div className="outcomes__head">
          <div className="eyebrow">· 04.5 — Indicadores estratégicos</div>
          <h2 className="display outcomes__title">Seis sinais de <em>onde o retorno aparece.</em></h2>
          <p className="outcomes__sub">O que seguradoras que adotam a WIR conseguem observar nos primeiros trimestres — não promessas de número, mas direções de resultado.</p>
        </div>
        <div className="outcomes__grid">
          {items.map((x,i) => (
            <div key={i} className="outcomes__cell" style={{"--c": x.c}}>
              <div className="outcomes__k">{x.k}</div>
              <div className="outcomes__t">{x.t}</div>
              <div className="outcomes__d">{x.d}</div>
            </div>
          ))}
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
      <Outcomes/>
      <WorkflowSVG/>
      <Trust/>
      <ComplianceBadges/>
      <Closing go={go}/>
    </>
  );
}

Object.assign(window, { HomePage });
