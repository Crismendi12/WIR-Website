/* ───────── Movement 03 · The Shift + 04 · The Stack ───────── */

function Shift() {
  const [pos, setPos] = React.useState(50);
  const before = [
    "E-mail recebido · encaminhado 4×",
    "PDF impresso, anexado, re-digitado",
    "3 ligações para validar CNPJ",
    "Planilha manual de scoring",
    "Reunião de comitê · aprovação",
    "Apólice redigida e emitida",
  ];
  const after = [
    "intake automático · 8s",
    "enrich multi-fonte · 12s",
    "score ML v26.2 · 4s",
    "decisão auditável · 2s",
    "escrita no core · 6s",
    "trilha AXZ-8472 · ✓",
  ];
  return (
    <section className="shift" data-reveal>
      <div className="wrap shift__head">
        <div className="eyebrow">· 03 — A mudança</div>
        <h2 className="shift__title display">
          O mesmo caso.<br/><em>Duas realidades.</em>
        </h2>
        <p className="shift__sub">Arraste para comparar um fluxo de subscrição tradicional com o mesmo caso processado pela WIR.</p>
      </div>
      <div className="wrap">
        <div className="ba" onMouseMove={(e)=>{
          if (e.buttons !== 1) return;
          const r = e.currentTarget.getBoundingClientRect();
          setPos(Math.max(0, Math.min(100, ((e.clientX - r.left) / r.width) * 100)));
        }}>
          <div className="ba__side ba__side--before">
            <div className="ba__label">Antes · fluxo manual</div>
            <div className="ba__stat display">47<em>dias</em></div>
            <ol className="ba__list">
              {before.map((t,i) => <li key={i}><span className="ba__step">· 0{i+1}</span>{t}</li>)}
            </ol>
            <div className="ba__foot">Broker aguarda · cliente escolhe concorrente</div>
          </div>
          <div className="ba__side ba__side--after" style={{clipPath:`inset(0 0 0 ${pos}%)`}}>
            <div className="ba__label">Depois · WIR Agents</div>
            <div className="ba__stat display">32<em>seg</em></div>
            <ol className="ba__list ba__list--mono">
              {after.map((t,i) => <li key={i}><span className="ba__step">· 0{i+1}</span>{t}</li>)}
            </ol>
            <div className="ba__foot">Decisão auditável · apólice emitida · broker notificado</div>
          </div>
          <div className="ba__handle" style={{left:`${pos}%`}}>
            <span>⇔</span>
          </div>
          <input type="range" min="0" max="100" value={pos}
            onChange={(e)=>setPos(+e.target.value)}
            className="ba__slider" aria-label="Comparar antes e depois"/>
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
      m:[{v:"+73%", l:"Conversão"},{v:"<4s", l:"Lead scoring"},{v:"24/7", l:"Ativo"}] },
    { k:"UCP", c:"#A44F98", title:"Underwriter Co-Pilot", tag:"Risco & cotação instantânea",
      lede:"Extrai dados, valida documentos, aplica 300+ fatores e devolve cotação com explicação escrita.",
      bullets:["OCR + parsing semântico de PDF, email e formulários","Motor de 300+ fatores calibrado ao seu apetite","Verificações de compliance LGPD · HIPAA · SOC 2"],
      m:[{v:"2.4min", l:"Decisão"},{v:"300+", l:"Fatores"},{v:"91.7%", l:"Precisão"}] },
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
        <div className="stack__tabs">
          {prods.map((x,i) => (
            <button key={x.k}
              className={"stack__tab" + (i === active ? " is-active" : "")}
              onClick={()=>setActive(i)}
              style={{"--c": x.c}}>
              <span className="stack__tab-k">{x.k}</span>
              <span className="stack__tab-l">{x.title}</span>
            </button>
          ))}
        </div>
        <div className="stack__panel" style={{"--pc": p.c}} key={p.k}>
          <div className="stack__panel-l">
            <div className="stack__tag">{p.tag}</div>
            <h3 className="display stack__panel-title">{p.title}</h3>
            <p className="stack__panel-lede">{p.lede}</p>
            <ul className="stack__bullets">
              {p.bullets.map((b,j) => <li key={j}><span className="stack__bu"/>{b}</li>)}
            </ul>
            <button className="btn btn--ghost stack__cta" onClick={()=>go("solutions")}>
              Explorar {p.k} <span className="btn__arrow">→</span>
            </button>
          </div>
          <div className="stack__panel-r">
            <div className="stack__vis">
              <div className="stack__vis-code">{p.k}</div>
              <div className="stack__vis-bg"/>
            </div>
            <div className="stack__m">
              {p.m.map((x,j) => (
                <div key={j} className="stack__m-cell">
                  <b>{x.v}</b>
                  <span>{x.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Shift, ProductTabs });
