/* ───────── Movement 03 · The Shift + 04 · The Stack ───────── */

function Shift() {
  // Dores vs Soluções — slide institucional, mapeado a SSA/UCP/em-dev
  const rows = [
    { dor:"E-mails de cotações desorganizados",       sol:"Estruturação e leitura automática de submissões",  prod:"SSA",       status:"prod" },
    { dor:"Falta de priorização comercial",            sol:"Classificação por apetite e rentabilidade",         prod:"SSA",       status:"prod" },
    { dor:"Underwriter fazendo operação manual",       sol:"Eliminação completa das tarefas manuais",           prod:"UCP",       status:"prod" },
    { dor:"Pipeline invisível para gestão",            sol:"Dashboard estratégico em tempo real",               prod:"UCP",       status:"prod" },
    { dor:"Riscos fora do apetite processados",        sol:"Recusa automática inteligente",                     prod:"SSA / UCP", status:"prod" },
    { dor:"TI sobrecarregada e sem orçamento",         sol:"Plataforma 100% externa — sem TI",                  prod:"SSA / UCP", status:"prod" },
  ];
  return (
    <section className="shift" data-reveal>
      <div className="wrap shift__head">
        <div className="eyebrow">· Dores vs. Soluções</div>
        <h2 className="shift__title display">
          O problema estrutural.<br/><em>A resposta da WIR.</em>
        </h2>
        <p className="shift__sub">Cada dor que observamos dentro das operações de subscrição mapeia diretamente para uma capacidade da plataforma — sem trocar o core, sem projeto pesado de TI.</p>
      </div>
      <div className="wrap">
        <div className="dvs">
          <div className="dvs__head">
            <div className="dvs__head-l">Antes · Problema estrutural</div>
            <div className="dvs__head-c"></div>
            <div className="dvs__head-r">Solução WIR</div>
            <div className="dvs__head-p">Produto</div>
          </div>
          {rows.map((r,i) => (
            <div key={i} className="dvs__row">
              <div className="dvs__dor">
                <span className="dvs__x" aria-hidden>✕</span>
                {r.dor}
              </div>
              <div className="dvs__arrow" aria-hidden>→</div>
              <div className="dvs__sol">
                <span className="dvs__check" aria-hidden>✓</span>
                {r.sol}
              </div>
              <div className="dvs__prod">{r.prod}</div>
            </div>
          ))}
        </div>
        <div className="dvs__legend">
          <span className="dvs__pill dvs__pill--dev">XBA</span>
          <span className="dvs__pill dvs__pill--dev">SNB</span>
          <span className="dvs__legend-txt">Novos produtos em desenvolvimento</span>
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
          <h2 className="stack__title display">Quatro produtos. <em>Um core de decisão.</em></h2>
          <p className="stack__sub">A WIR entrega soluções especializadas que cobrem todo o ciclo comercial — da geração de lead à emissão de apólice e retenção de carteira.</p>
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
