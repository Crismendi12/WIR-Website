/* ───────── Movement 01 · Opening + 02 · Proof ───────── */

// DecisionFlow — network pipeline visualization showing how data becomes decisions
function DecisionFlow() {
  const [pulse, setPulse] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setPulse(p => (p + 1) % 5), 1100);
    return () => clearInterval(id);
  }, []);

  const stages = [
    { k: "COLETA"     },
    { k: "ENRIQ."     },
    { k: "SCORE"      },
    { k: "DECISÃO"    },
    { k: "EMISSÃO"    },
  ];

  return (
    <div className="dflow" aria-label="Fluxo de decisão">
      <div className="dflow__head">
        <div className="dflow__title">
          <span className="dflow__title-k">Fluxo de decisão</span>
          <span className="dflow__title-v">wir.produtos</span>
        </div>
        <div className="dflow__status">
          <span className="dflow__dot"/>
          ao vivo · aprendendo
        </div>
      </div>

      <svg className="dflow__svg" viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <linearGradient id="dflowPath" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7540AC" stopOpacity="0.15"/>
            <stop offset="50%" stopColor="#7540AC" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#F8AD39" stopOpacity="0.6"/>
          </linearGradient>
          <radialGradient id="dflowNode" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#FE8B77" stopOpacity="1"/>
            <stop offset="100%" stopColor="#7540AC" stopOpacity="1"/>
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3"/>
          </filter>
        </defs>

        {/* Source nodes (left, 3 stacked) — labels with breathing room */}
        {[{y:80,l:"e-mail"},{y:170,l:"anexos"},{y:260,l:"API"}].map((s,i) => (
          <g key={i}>
            <circle cx="60" cy={s.y} r="8" fill="#E9E3D7" stroke="#7540AC" strokeWidth="1.5"/>
            <text x="22" y={s.y + 4} fill="#6A6458" fontSize="11"
              fontFamily="JetBrains Mono, monospace" textAnchor="end" letterSpacing="0.5"
              fontWeight="500">
              {s.l}
            </text>
            {/* path from source to central spine */}
            <path d={`M68 ${s.y} Q 110 ${s.y}, 140 170`}
              stroke="url(#dflowPath)" strokeWidth="1.5" fill="none"/>
          </g>
        ))}

        {/* Central pipeline spine */}
        <line x1="140" y1="170" x2="395" y2="170" stroke="#7540AC" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 4"/>

        {/* Processing stages on spine — wider spacing, no sub label to prevent overlap */}
        {stages.map((s, i) => {
          const x = 150 + i * 60;
          const active = pulse === i;
          return (
            <g key={i}>
              <circle cx={x} cy="170" r={active ? 13 : 9}
                fill={active ? "url(#dflowNode)" : "#0B0A08"}
                stroke={active ? "#F8AD39" : "#7540AC"}
                strokeWidth={active ? 2 : 1.5}
                filter={active ? "url(#glow)" : undefined}
                style={{transition: "all .4s ease"}}/>
              <text x={x} y={i % 2 === 0 ? 145 : 200} fill={active ? "#0B0A08" : "#6A6458"}
                fontSize="9.5" fontFamily="JetBrains Mono, monospace"
                textAnchor="middle" letterSpacing="0.8"
                fontWeight={active ? "700" : "500"}
                style={{transition: "fill .3s"}}>
                {s.k}
              </text>
            </g>
          );
        })}

        {/* Output branches (right side, 2) */}
        <path d="M395 170 Q 435 170, 445 80" stroke="url(#dflowPath)" strokeWidth="1.5" fill="none"/>
        <path d="M395 170 Q 435 170, 445 260" stroke="url(#dflowPath)" strokeWidth="1.5" fill="none"/>

        {[{y:80,l:"cotação",c:"#F8AD39"},{y:260,l:"trilha",c:"#7540AC"}].map((o,i) => (
          <g key={i}>
            <rect x="425" y={o.y - 12} width="48" height="24" rx="5"
              fill={o.c} fillOpacity="0.15"
              stroke={o.c} strokeWidth="1"/>
            <text x="449" y={o.y + 4} fill={o.c}
              fontSize="9" fontFamily="JetBrains Mono, monospace"
              textAnchor="middle" letterSpacing="0.5" fontWeight="600">
              {o.l}
            </text>
          </g>
        ))}

        {/* Learning feedback loop (curved arc at bottom) */}
        <path d="M 450 270 Q 250 320, 50 260"
          stroke="#FE8B77" strokeWidth="1" strokeDasharray="4 4" fill="none" strokeOpacity="0.4"/>
        <text x="250" y="310" fill="#FE8B77"
          fontSize="9" fontFamily="JetBrains Mono, monospace"
          textAnchor="middle" letterSpacing="1.5" fillOpacity="0.75">
          · ciclo de aprendizado contínuo ·
        </text>
      </svg>

      <div className="dflow__foot">
        <span>Dados</span>
        <span className="dflow__arrow">→</span>
        <span>Produtos WIR</span>
        <span className="dflow__arrow">→</span>
        <span>Decisão auditável</span>
      </div>
    </div>
  );
}

function Opening({ go }) {
  const index = [
    { n:"01", k:"O DESAFIO",       stat:<>Estrutura das seguradoras <b>não acompanha</b> o crescimento</>,
      cap:"40% do tempo do underwriter perdido em tarefas administrativas.", goHash:"desafios" },
    { n:"02", k:"OS PRODUTOS",     stat:<><b>SSA</b> · <b>UCP</b> em produção · <b>XBA</b> · <b>SNB</b> em desenvolvimento</>,
      cap:"Camada única de IA conectando todo o ciclo de subscrição.", go:"solutions" },
    { n:"03", k:"A EVIDÊNCIA",     stat:<>Mais volume · <b>menos</b> custo manual</>,
      cap:"Mesma equipe, capacidade ampliada — sem trocar o core.", go:"solutions" },
    { n:"04", k:"A CLASSIFICAÇÃO", stat:<>Automático · assistido · <b>sênior</b></>,
      cap:"Foco humano onde realmente importa: analisar e subscrever risco.", go:"solutions" },
    { n:"05", k:"O IMPACTO",       stat:<>Plataforma de IA para <b>ESCALAR</b></>,
      cap:"Sua equipe tem o conhecimento. A WIR dá os trilhos.", go:"about" },
  ];
  return (
    <section className="opening">
      <div className="wrap">
        {/* Edition masthead */}
        <div className="opening__mast">
          <div className="opening__mast-L">
            <span>ABR 2026</span>
            <span>INFRAESTRUTURA DE IA · SEGUROS</span>
          </div>
          <div className="opening__mast-R">
            <span>SÃO PAULO ⟶ BAY AREA</span>
            <span className="opening__mast-lang"><em>PT</em> · EN · ES</span>
          </div>
        </div>

        {/* Hero grid */}
        <div className="opening__hero">
          <div className="opening__hero-L">
            <div className="opening__kicker">
              <span className="opening__kicker-dot"/>
              <span>Infraestrutura em produção · decisão 24/7</span>
            </div>
            <h1 className="display opening__title">
              A camada de<br/>
              <em>inteligência</em><br/>
              do seguro.
            </h1>
            <p className="opening__lede">
              A nova era de seguros é <b>inteligência de dados, velocidade e escala</b>. A WIR entrega essa plataforma de IA dentro dos sistemas que você já opera — sem substituir o seu core.
            </p>
            <div className="opening__actions">
              <button className="btn btn--solid" onClick={()=>go("contact")}>
                Falar com a equipe <span className="btn__arrow">→</span>
              </button>
              <button className="btn btn--ghost" onClick={()=>go("solutions")}>
                Ver a plataforma <span className="btn__arrow">→</span>
              </button>
            </div>
          </div>
          <div className="opening__hero-R">
            <div className="opening__caption">· Como a WIR transforma dados em decisões</div>
            <DecisionFlow/>
          </div>
        </div>

        {/* Editorial index */}
        <div className="opening__index">
          <div className="opening__index-head">
            <div className="eyebrow">Nesta edição</div>
            <span className="opening__index-meta">
              Plataforma WIR · Em produção · Q1 2026
            </span>
          </div>
          <div className="opening__index-grid">
            {index.map((item) => (
              <button key={item.n} className="opening__index-item"
                onClick={()=>{
                  if (item.goHash) {
                    const el = document.getElementById(item.goHash);
                    if (el) el.scrollIntoView({behavior:"smooth", block:"start"});
                  } else if (item.go) {
                    go(item.go);
                  }
                }}>
                <span className="opening__index-num">/{item.n}</span>
                <div className="opening__index-body">
                  <div className="opening__index-title">{item.k}</div>
                  <div className="opening__index-stat">{item.stat}</div>
                  <div className="opening__index-caption">{item.cap}</div>
                </div>
                <span className="opening__index-arrow" aria-hidden>↓</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function Proof() {
  const m = [
    { w:"Minutos",    l:"Decisão",         c:"Não semanas. Não comitês intermináveis." },
    { w:"Contínuo",   l:"Processamento",   c:"Operação 24/7 — exceção como exceção." },
    { w:"Auditável",  l:"Workflow",        c:"Modelo, versão, confiança e inputs — exportáveis." },
    { w:"Ampliada",   l:"Capacidade",      c:"Mesmo time. Mais negócio. Sem contratar." },
  ];
  return (
    <section className="proof" data-reveal>
      <div className="wrap">
        <div className="proof__head">
          <div className="eyebrow">· ROI — Retorno sobre o investimento</div>
          <div className="proof__note">Resultados observados em produção · sujeitos a NDA</div>
        </div>
        <div className="proof__grid">
          {m.map((x,i) => (
            <div key={i} className="proof__cell">
              <div className="proof__idx">/0{i+1}</div>
              <div className="proof__label">{x.l}</div>
              <div className="proof__word display">{x.w}.</div>
              <div className="proof__caption">{x.c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { LiveTerminal, Opening, Proof });
