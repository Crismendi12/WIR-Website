/* ───────── Proteção de Dados · Segurança & Compliance ───────── */

function DPHero() {
  return (
    <section className="dphero">
      <div className="wrap">
        <div className="dphero__meta">
          <span>· Segurança & Compliance</span>
          <span>· LGPD-ready desde a arquitetura</span>
          <span>· Modelo auditável</span>
        </div>
        <div className="eyebrow">· Proteção de Dados</div>
        <h1 className="display dphero__title">
          Segurança e <em>compliance</em><br/>
          como <em>fundação</em>, não feature.
        </h1>
        <p className="dphero__lede">
          A WIR Innovation foi desenhada desde a arquitetura para operar dentro dos requisitos regulatórios do mercado segurador. Cada decisão deixa trilha auditável; cada dado é encriptado em trânsito e em repouso; cada ambiente é segregado por cliente.
        </p>
      </div>
    </section>
  );
}

function DPCards() {
  const cards = [
    {
      icon: "lock",
      k: "LGPD nativa",
      d: "Conformidade com a Lei Geral de Proteção de Dados desde a arquitetura. Dados processados e armazenados em território nacional.",
    },
    {
      icon: "shield",
      k: "Infraestrutura cloud",
      d: "AWS / GCP com criptografia em trânsito (TLS 1.3) e em repouso (AES-256). Ambientes segregados por cliente.",
    },
    {
      icon: "key",
      k: "API segura",
      d: "Autenticação via OAuth 2.0 / API Key. Rate limiting, logging completo e webhook com assinatura digital.",
    },
    {
      icon: "brain",
      k: "Modelo auditável",
      d: "Cada decisão do ML registrada com inputs, score, confiança e versão do modelo. Trail de auditoria completo.",
    },
  ];

  const Icon = ({ name }) => {
    if (name === "lock") return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>
      </svg>
    );
    if (name === "shield") return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 2L4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3z"/>
      </svg>
    );
    if (name === "key") return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3M14 9l3 3"/>
      </svg>
    );
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3v1a3 3 0 0 0 3 3M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3v1a3 3 0 0 1-3 3M9 8h.01M15 8h.01M9 16h.01M15 16h.01"/>
      </svg>
    );
  };

  return (
    <section className="dpgrid" data-reveal>
      <div className="wrap">
        <div className="dpgrid__head">
          <div className="eyebrow eyebrow--onDark">· Pilares de proteção</div>
          <h2 className="display dpgrid__title">Quatro pilares.<br/><em>Uma plataforma segura.</em></h2>
        </div>
        <div className="dpgrid__grid">
          {cards.map((c, i) => (
            <div key={i} className="dpgrid__card">
              <div className="dpgrid__icon"><Icon name={c.icon}/></div>
              <div className="dpgrid__k">{c.k}</div>
              <p className="dpgrid__d">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="dpgrid__stack">
          <span>Stack:</span>
          <b>Docker + K8s</b>
          <span>·</span>
          <b>CI/CD GitHub Actions</b>
          <span>·</span>
          <b>DataDog monitoring</b>
          <span>·</span>
          <b>Auth0 identity</b>
        </div>
      </div>
    </section>
  );
}

function DPCompliance() {
  const items = [
    { k: "LGPD",  v: "Conforme",         d: "Proteção de dados pessoais (BR)" },
    { k: "SOC 2", v: "Em processo",      d: "Arquitetura e controles prontos" },
    { k: "HIPAA", v: "Alinhado",         d: "Privacidade em saúde (US)" },
    { k: "ISO",   v: "27001 em processo", d: "Base de gestão de segurança" },
  ];
  return (
    <section className="dpcomp" data-reveal>
      <div className="wrap">
        <div className="dpcomp__head">
          <div className="eyebrow">· Certificações & alinhamentos</div>
          <h2 className="display dpcomp__title">Construído para os <em>frameworks</em> que o mercado exige.</h2>
        </div>
        <div className="dpcomp__grid">
          {items.map((b, i) => (
            <div key={i} className="dpcomp__cell">
              <div className="dpcomp__k">{b.k}</div>
              <div className="dpcomp__v display"><em>{b.v}</em></div>
              <div className="dpcomp__d">{b.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DPClose({ go }) {
  return (
    <section className="dpclose" data-reveal>
      <div className="wrap">
        <div className="eyebrow eyebrow--onDark">· Próximo passo</div>
        <h2 className="display dpclose__title">
          Quer revisar a <em>arquitetura de segurança</em><br/>
          em detalhe com seu time de TI e Compliance?
        </h2>
        <div className="dpclose__actions">
          <button className="btn btn--solid btn--onDark" onClick={() => go("contact")}>
            Agendar revisão técnica <span className="btn__arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function DataProtectionPage({ go }) {
  useReveal();
  return (
    <>
      <DPHero/>
      <DPCards/>
      <DPCompliance/>
      <DPClose go={go}/>
    </>
  );
}

Object.assign(window, { DataProtectionPage });
