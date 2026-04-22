/* ───────── Movement 03 · The Shift + 04 · The Stack ───────── */

function Shift() {
  const gargalos = [
    { c:"var(--wir-blue)",   k:"Intake sem triagem",
      hoje:"Cotações chegam por e-mail sem priorização — fila por ordem de chegada.",
      impacto:"Oportunidades de alto valor ficam enterradas." },
    { c:"var(--wir-purple)", k:"Análise 100% manual",
      hoje:"Underwriter extrai dados de e-mails, PDFs e planilhas — horas por cotação.",
      impacto:"Maior parte do tempo gasto em operação, não em decisão." },
    { c:"var(--wir-amber)",  k:"Pricing sem padronização",
      hoje:"Manual de subscrição em PDF, fórmulas em Excel — sem trilha de auditoria.",
      impacto:"Inconsistência de decisão entre subscritores." },
    { c:"var(--wir-coral)",  k:"Aprovação por e-mail",
      hoje:"Cadeia de alçadas via e-mail — sem rastreamento de SLA.",
      impacto:"Propostas expiram antes da decisão final." },
    { c:"#10B981",           k:"Zero visibilidade",
      hoje:"Sem dashboard, sem analytics, sem pipeline em tempo real.",
      impacto:"Gestão opera no escuro — decisões sem dados." },
  ];
  return (
    <section className="shift" data-reveal>
      <div className="wrap shift__head">
        <div className="eyebrow">· 03 — Diagnóstico</div>
        <h2 className="shift__title display">
          Cinco gargalos que<br/><em>limitam o crescimento.</em>
        </h2>
        <p className="shift__sub">O que observamos dentro das operações de subscrição hoje — e onde a WIR se encaixa como camada de decisão sem substituir o core.</p>
      </div>
      <div className="wrap">
        <div className="gargalos">
          <div className="gargalos__head">
            <div>Gargalo</div>
            <div>Como funciona hoje</div>
            <div>Impacto no negócio</div>
          </div>
          {gargalos.map((g,i) => (
            <div key={i} className="gargalos__row" style={{"--c": g.c}}>
              <div className="gargalos__k">
                <span className="gargalos__num">/0{i+1}</span>
                <span>{g.k}</span>
              </div>
              <div className="gargalos__hoje">{g.hoje}</div>
              <div className="gargalos__impacto">{g.impacto}</div>
            </div>
          ))}
          <div className="gargalos__foot">
            <span>· Fonte: entrevistas com times de subscrição em seguradoras e corretoras LatAm</span>
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
          {/* TOP — Horizontal agent tabs */}
          <div className="stack__tabs stack__tabs--row">
            {prods.map((x,i) => (
              <button key={x.k}
                className={"stack__tab" + (i === active ? " is-active" : "")}
                onClick={()=>setActive(i)}
                style={{"--c": x.c}}>
                <span className="stack__tab-k">{x.k}</span>
                <span className="stack__tab-l">{x.title}</span>
                <span className="stack__tab-tag">{x.tag}</span>
              </button>
            ))}
          </div>

          {/* BELOW — Active agent detail, full width */}
          <div className="stack__panel" style={{"--pc": p.c}} key={p.k}>
            <div className="stack__panel-head">
              <span className="stack__panel-code">{p.k}</span>
              <span className="stack__tag">{p.tag}</span>
            </div>
            <div className="stack__panel-body">
              <div className="stack__panel-lhs">
                <h3 className="display stack__panel-title">{p.title}</h3>
                <p className="stack__panel-lede">{p.lede}</p>
              </div>
              <ul className="stack__bullets">
                {p.bullets.map((b,j) => <li key={j}><span className="stack__bu"/>{b}</li>)}
              </ul>
            </div>
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
