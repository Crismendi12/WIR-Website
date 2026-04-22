/* ───────── Movement 03 · The Shift + 04 · The Stack ───────── */

function Shift() {
  const before = [
    "E-mail recebido · encaminhado várias vezes",
    "PDF impresso, anexado, re-digitado",
    "Ligações para validar CNPJ",
    "Planilha manual de scoring",
    "Reunião de comitê · aprovação",
    "Apólice redigida e emitida",
  ];
  const after = [
    "intake automático",
    "enrich multi-fonte",
    "score ML · apetite · compliance",
    "decisão auditável",
    "escrita no core da seguradora",
    "trilha imutável · learning loop",
  ];
  return (
    <section className="shift" data-reveal>
      <div className="wrap shift__head">
        <div className="eyebrow">· 03 — A mudança</div>
        <h2 className="shift__title display">
          O mesmo caso.<br/><em>Duas realidades.</em>
        </h2>
        <p className="shift__sub">O fluxo tradicional de subscrição comercial, lado a lado com o mesmo caso processado pela plataforma WIR.</p>
      </div>
      <div className="wrap">
        <div className="ba ba--static">
          <div className="ba__side ba__side--before">
            <div className="ba__label">Antes · fluxo manual</div>
            <div className="ba__stat display">Ciclo<em>em semanas</em></div>
            <ol className="ba__list">
              {before.map((t,i) => <li key={i}><span className="ba__step">· 0{i+1}</span>{t}</li>)}
            </ol>
            <div className="ba__foot">Broker aguarda · cliente migra para concorrente</div>
          </div>
          <div className="ba__side ba__side--after">
            <div className="ba__label">Depois · WIR Agents</div>
            <div className="ba__stat display">Ciclo<em>automatizado</em></div>
            <ol className="ba__list ba__list--mono">
              {after.map((t,i) => <li key={i}><span className="ba__step">· 0{i+1}</span>{t}</li>)}
            </ol>
            <div className="ba__foot">Decisão auditável · apólice emitida · broker notificado</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductTabs({ go }) {
  const prods = [
    { k:"SSA", c:"#1C17FF", title:"Smart Sales", tag:"Inteligência de distribuição",
      lede:"Pipeline de IA que pontua, roteia e converte leads — antes que a concorrência responda.",
      bullets:["Scoring em tempo real com ML calibrado ao apetite","Roteamento automático por apetite × exposure","Análise preditiva de conversão por produto × broker"],
      m:[{v:"Real-time", l:"Scoring"},{v:"Calibrado", l:"Ao apetite"},{v:"Always-on", l:"Pipeline"}] },
    { k:"UCP", c:"#A44F98", title:"Underwriter Co-Pilot", tag:"Risco & cotação instantânea",
      lede:"Extrai dados, valida documentos, aplica múltiplos fatores e devolve cotação com explicação escrita.",
      bullets:["OCR + parsing semântico de PDF, email e formulários","Motor multi-fator calibrado ao seu apetite","Verificações de compliance alinhadas a LGPD · HIPAA"],
      m:[{v:"Minutos", l:"Decisão"},{v:"Multi-fator", l:"Motor"},{v:"Explicável", l:"Cada saída"}] },
    { k:"XBA", c:"#EE7D48", title:"X-sell Brokers", tag:"Automação de cross-sell",
      lede:"Analisa portfólios, identifica oportunidades e dispara campanhas — penetração e retenção crescem juntas.",
      bullets:["Mapeamento de portfólio cliente × produtos","Scoring de upsell × next-best-action","Campanhas multi-canal com trilha de atribuição"],
      m:[{v:"+Upsell", l:"Penetração"},{v:"−Churn", l:"Retenção"},{v:"Multi", l:"Canais"}] },
    { k:"SNB", c:"#F9B336", title:"SDR New Business", tag:"Outbound inteligente",
      lede:"Qualifica prospects, dispara outreach multicanal e agenda reuniões de alto valor.",
      bullets:["Priorização por ICP e fit de produto","Sequências automáticas email · LinkedIn · voice","Agendamento inteligente com scoring de intenção"],
      m:[{v:"Qualif.", l:"Reuniões"},{v:"−CAC", l:"Aquisição"},{v:"+Pipe", l:"Gerado"}] },
  ];
  const [active, setActive] = React.useState(0);
  const p = prods[active];
  return (
    <section className="stack" data-reveal>
      <div className="wrap">
        <div className="stack__head">
          <div className="eyebrow">· 04 — O stack</div>
          <h2 className="stack__title display">Quatro agentes. <em>Um core de decisão.</em></h2>
          <p className="stack__sub">A WIR entrega agentes especializados que cobrem todo o ciclo comercial — da geração de lead à emissão de apólice e retenção de carteira.</p>
        </div>

        <div className="stack__layout">
          {/* LEFT — Agent list (vertical tabs) */}
          <div className="stack__tabs stack__tabs--vertical">
            {prods.map((x,i) => (
              <button key={x.k}
                className={"stack__tab" + (i === active ? " is-active" : "")}
                onClick={()=>setActive(i)}
                style={{"--c": x.c}}>
                <span className="stack__tab-k">{x.k}</span>
                <span className="stack__tab-l">{x.title}</span>
                <span className="stack__tab-tag">{x.tag}</span>
                <span className="stack__tab-arrow" aria-hidden>→</span>
              </button>
            ))}
          </div>

          {/* RIGHT — Active agent representation */}
          <div className="stack__panel" style={{"--pc": p.c}} key={p.k}>
            <div className="stack__panel-top">
              <div className="stack__vis">
                <div className="stack__vis-code">{p.k}</div>
                <div className="stack__vis-bg"/>
              </div>
              <div className="stack__panel-info">
                <div className="stack__tag">{p.tag}</div>
                <h3 className="display stack__panel-title">{p.title}</h3>
              </div>
            </div>
            <p className="stack__panel-lede">{p.lede}</p>
            <ul className="stack__bullets">
              {p.bullets.map((b,j) => <li key={j}><span className="stack__bu"/>{b}</li>)}
            </ul>
            <div className="stack__panel-bot">
              <div className="stack__m">
                {p.m.map((x,j) => (
                  <div key={j} className="stack__m-cell">
                    <b>{x.v}</b>
                    <span>{x.l}</span>
                  </div>
                ))}
              </div>
              <button className="btn btn--ghost stack__cta" onClick={()=>go("solutions")}>
                Explorar {p.k} <span className="btn__arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Shift, ProductTabs });
