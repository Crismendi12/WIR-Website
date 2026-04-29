/* ───────── Movement 05 · Workflow + 06 · Trust + 07 · Closing ───────── */

// ArchFlow — diagrama de arquitetura completo com sub-nodos, branches paralelos
// e múltiplos dots animados. Adaptado ao design system WIR (paper).
function ArchFlow() {
  const dotsRef = React.useRef([]);
  const haloRef = React.useRef([]);
  const frameRef = React.useRef(null);

  // 5 paths, cada um percorrendo a arquitetura por rotas distintas (parallel processing)
  // Estrutura: INTAKE (x=80-180) → PLATFORM (x=260-440) → AI (x=520-720) → OUTPUT (x=820-980) → CORE (x=1060-1180)
  const paths = [
    // Path 1: e-mail → API → Worker 1 → NLP → LLM → Score → QC → Dashboard
    [{x:130,y:130},{x:130,y:240},{x:330,y:170},{x:430,y:200},{x:540,y:230},{x:620,y:200},{x:720,y:170},{x:870,y:200},{x:1010,y:170},{x:1130,y:200}],
    // Path 2: portal → API → Worker 2 → Risk Routing → Score → QC → Webhook → CORE
    [{x:130,y:200},{x:130,y:280},{x:330,y:230},{x:430,y:200},{x:540,y:200},{x:620,y:200},{x:720,y:230},{x:870,y:240},{x:1010,y:240},{x:1130,y:240}],
    // Path 3: anexos → API → Worker N → Fraud → ML → Score → Dashboard
    [{x:130,y:280},{x:130,y:200},{x:330,y:280},{x:430,y:260},{x:540,y:170},{x:620,y:200},{x:720,y:280},{x:870,y:280},{x:1010,y:200},{x:1130,y:170}],
    // Path 4: shorter loop — feedback into ML (continuous learning)
    [{x:1130,y:300},{x:870,y:320},{x:620,y:320},{x:540,y:280},{x:430,y:300},{x:330,y:300},{x:130,y:330},{x:130,y:130}],
    // Path 5: monitoring/observability path
    [{x:130,y:170},{x:330,y:130},{x:430,y:140},{x:540,y:130},{x:620,y:140},{x:720,y:130},{x:870,y:140},{x:1010,y:130},{x:1130,y:140}],
  ];

  React.useEffect(() => {
    const start = performance.now();
    const dotDurations = [6500, 7000, 6000, 9000, 5500]; // varied speed per dot
    const tick = (now) => {
      const elapsed = now - start;
      for (let d = 0; d < paths.length; d++) {
        const dot = dotsRef.current[d];
        const halo = haloRef.current[d];
        if (!dot) continue;
        const path = paths[d];
        const duration = dotDurations[d];
        const offset = d * 900;
        const t = ((elapsed + offset) % duration) / duration;
        const segCount = path.length - 1;
        const seg = Math.min(Math.floor(t * segCount), segCount - 1);
        const segT = (t * segCount) - seg;
        const ease = segT < 0.5 ? 2*segT*segT : 1 - Math.pow(-2*segT+2, 2)/2;
        const cx = path[seg].x + (path[seg+1].x - path[seg].x) * ease;
        const cy = path[seg].y + (path[seg+1].y - path[seg].y) * ease;
        dot.setAttribute("cx", cx);
        dot.setAttribute("cy", cy);
        if (halo) { halo.setAttribute("cx", cx); halo.setAttribute("cy", cy); }
      }
      frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const dotColors = ["#F8AD39", "#A44F98", "#10B981", "#FE8B77", "#1C17FF"];

  // Sub-node helper
  const SubNode = ({ x, y, w, h, label, sub, color, fill }) => (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8"
        fill={fill || `${color}10`} stroke={color} strokeWidth="1.4" strokeOpacity="0.45"/>
      <text x={x + w/2} y={y + (sub ? h/2 - 2 : h/2 + 4)} fill={color}
        fontSize="10.5" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">
        {label}
      </text>
      {sub && (
        <text x={x + w/2} y={y + h/2 + 12} fill="#6A6458"
          fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">
          {sub}
        </text>
      )}
    </g>
  );

  return (
    <section className="archflow" data-reveal>
      <div className="wrap">
        <div className="archflow__head">
          <div className="eyebrow">· Arquitetura WIR · Fluxo ao vivo</div>
          <h2 className="archflow__title display">
            Do <em>e-mail da corretora</em> à decisão no dashboard.<br/>
            <span className="archflow__sub">Ponta a ponta — em minutos, auditável.</span>
          </h2>
          <p className="archflow__lede">
            Fluxo end-to-end com processamento paralelo: múltiplas submissões correm em paralelo pelos workers, atravessam o engine de IA (NLP · LLM · Risk · Fraud · ML) e voltam ao seu core como decisão auditável. O loop inferior é o <em>continuous learning</em> — cada decisão alimenta o modelo de volta.
          </p>
        </div>

        <div className="archflow__canvas">
          <svg viewBox="0 0 1240 380" className="archflow__svg" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="archGrad" x1="0" x2="1">
                <stop offset="0%" stopColor="#1C17FF"/>
                <stop offset="25%" stopColor="#7540AC"/>
                <stop offset="55%" stopColor="#A44F98"/>
                <stop offset="80%" stopColor="#EE7D48"/>
                <stop offset="100%" stopColor="#10B981"/>
              </linearGradient>
              <filter id="archGlow"><feGaussianBlur stdDeviation="8"/></filter>
              <filter id="archDotShadow"><feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.25"/></filter>
            </defs>

            {/* Zone separators (vertical dashed) */}
            {[230, 490, 770, 1030].map((x, i) => (
              <line key={i} x1={x} y1="20" x2={x} y2="370" stroke="rgba(11,10,8,.07)" strokeWidth="1" strokeDasharray="4 5"/>
            ))}

            {/* Zone labels (top) */}
            {[
              {x:130, l:"INTAKE",       c:"#1C17FF"},
              {x:360, l:"WIR PLATFORM", c:"#7540AC"},
              {x:620, l:"AI ENGINE",    c:"#A44F98"},
              {x:900, l:"OUTPUT",       c:"#EE7D48"},
              {x:1130,l:"CORE",         c:"#10B981"},
            ].map((z, i) => (
              <text key={i} x={z.x} y="18" fill={z.c} fontSize="11" fontWeight="800"
                fontFamily="Inter, sans-serif" textAnchor="middle" letterSpacing=".18em">
                {z.l}
              </text>
            ))}

            {/* INTAKE column */}
            <SubNode x={75} y={108}  w={110} h={44} label="E-mail"   sub="anexos · PDF"   color="#1C17FF"/>
            <SubNode x={75} y={178}  w={110} h={44} label="Portal"   sub="formulários"    color="#1C17FF"/>
            <SubNode x={75} y={248}  w={110} h={44} label="API"      sub="3 endpoints"    color="#1C17FF"/>

            {/* WIR PLATFORM column — Load balancer + DB cluster + Worker pool */}
            <SubNode x={260} y={108} w={140} h={36} label="Load Balancer" sub="Nginx · 2× inst" color="#7540AC"/>
            <SubNode x={260} y={158} w={140} h={48} label="Postgres" sub="Primary · Replica" color="#7540AC"/>
            <SubNode x={260} y={218} w={140} h={36} label="Redis"    sub="Celery · Cache"   color="#EF4444"/>

            {/* Worker pool (dashed cluster) */}
            <rect x="260" y="262" width="140" height="84" rx="10" fill="rgba(117,64,172,.04)"
              stroke="rgba(117,64,172,.25)" strokeWidth="1" strokeDasharray="4 4"/>
            <text x="330" y="278" fill="rgba(117,64,172,.55)" fontSize="8" fontWeight="800"
              fontFamily="Inter, sans-serif" textAnchor="middle" letterSpacing=".14em">WORKER POOL</text>
            <SubNode x={268} y={284} w={62} h={22} label="W-1" color="#7540AC"/>
            <SubNode x={336} y={284} w={62} h={22} label="W-2" color="#7540AC"/>
            <SubNode x={268} y={310} w={62} h={22} label="W-3" color="#7540AC"/>
            <SubNode x={336} y={310} w={62} h={22} label="W-N" color="#7540AC"/>

            {/* AI ENGINE column — Business rules + AI Layer */}
            <SubNode x={510} y={108} w={120} h={42} label="Business Rules" sub="política risco" color="#A44F98"/>
            <rect x="500" y={170} width="220" height="170" rx="12" fill="rgba(238,125,72,.04)"
              stroke="rgba(238,125,72,.3)" strokeWidth="1" strokeDasharray="4 4"/>
            <text x="610" y="186" fill="rgba(238,125,72,.6)" fontSize="9" fontWeight="800"
              fontFamily="Inter, sans-serif" textAnchor="middle" letterSpacing=".18em">AI LAYER</text>
            <SubNode x={508} y={196} w={100} h={32} label="NLP Parser"   color="#EE7D48"/>
            <SubNode x={612} y={196} w={100} h={32} label="WIR LLM"      color="#EE7D48" fill="rgba(238,125,72,.15)"/>
            <SubNode x={508} y={234} w={100} h={32} label="Risk Routing" color="#EE7D48"/>
            <SubNode x={612} y={234} w={100} h={32} label="Fraud Det."   color="#EE7D48"/>
            <SubNode x={508} y={272} w={204} h={28} label="ML Model API · POST /predict" color="#EE7D48"/>
            <SubNode x={508} y={306} w={204} h={26} label="Model Registry · v3.2.1"     color="#A44F98"/>

            {/* OUTPUT column */}
            <SubNode x={800} y={108} w={130} h={56} label="Score Engine" sub="risk + price"   color="#F8AD39"/>
            <SubNode x={800} y={172} w={130} h={32} label="~65% auto"    sub="25% rev · 10% esc" color="#10B981"/>
            <SubNode x={800} y={212} w={130} h={36} label="QC"           sub="quality check"   color="#10B981"/>
            <SubNode x={800} y={256} w={130} h={36} label="Dashboard"    sub="painel real time" color="#10B981"/>

            {/* CORE column */}
            <SubNode x={1060} y={108} w={130} h={44} label="Webhook"  sub="signed payload" color="#10B981"/>
            <SubNode x={1060} y={162} w={130} h={48} label="Core de apólice" sub="policy admin" color="#10B981"/>
            <SubNode x={1060} y={220} w={130} h={36} label="Audit Log" sub="LGPD · imutável" color="#7540AC"/>
            <SubNode x={1060} y={266} w={130} h={36} label="DataDog"   sub="observability"   color="#1C17FF"/>

            {/* Connection lines (subtle) — INTAKE → PLATFORM */}
            {[130, 200, 270].map((y, i) => (
              <path key={"c1-"+i} d={`M 185 ${y} Q 230 ${y} 260 ${130 + i*55}`}
                stroke="url(#archGrad)" strokeWidth="1.3" fill="none" opacity=".35"/>
            ))}
            {/* PLATFORM → AI */}
            {[126, 182, 236, 304].map((y, i) => (
              <path key={"c2-"+i} d={`M 400 ${y} Q 450 ${y} 500 ${130 + i*40}`}
                stroke="url(#archGrad)" strokeWidth="1.3" fill="none" opacity=".3"/>
            ))}
            {/* AI → OUTPUT */}
            {[130, 212, 250, 286].map((y, i) => (
              <path key={"c3-"+i} d={`M 720 ${y} Q 760 ${y} 800 ${130 + i*45}`}
                stroke="url(#archGrad)" strokeWidth="1.3" fill="none" opacity=".3"/>
            ))}
            {/* OUTPUT → CORE */}
            {[136, 188, 230, 274].map((y, i) => (
              <path key={"c4-"+i} d={`M 930 ${y} Q 990 ${y} 1060 ${130 + i*45}`}
                stroke="url(#archGrad)" strokeWidth="1.3" fill="none" opacity=".4"/>
            ))}

            {/* Continuous learning feedback loop (bottom curved) */}
            <path d="M 1130 360 Q 700 380 130 360"
              stroke="#FE8B77" strokeWidth="1.5" fill="none" opacity=".45" strokeDasharray="6 5"/>
            <text x="630" y="378" fill="#FE8B77" fontSize="9" fontWeight="700"
              fontFamily="JetBrains Mono, monospace" textAnchor="middle" letterSpacing=".15em" opacity=".75">
              · CONTINUOUS LEARNING · MODEL FEEDBACK ·
            </text>

            {/* Master gradient pipe (visual cohesion across the canvas) */}
            <path d="M 130 200 C 250 200, 380 200, 480 200 S 700 200, 830 200 S 1000 200, 1130 200"
              stroke="url(#archGrad)" strokeWidth="2" fill="none" opacity=".22"/>

            {/* Animated dots — halos first (behind), then dots */}
            {dotColors.map((c, i) => (
              <circle key={`halo-${i}`} ref={el => haloRef.current[i] = el}
                cx="130" cy="200" r="20" fill={c} opacity="0.22" filter="url(#archGlow)"/>
            ))}
            {dotColors.map((c, i) => (
              <circle key={`dot-${i}`} ref={el => dotsRef.current[i] = el}
                cx="130" cy="200" r="8" fill={c}
                stroke="#FAF6EE" strokeWidth="2" filter="url(#archDotShadow)"/>
            ))}
          </svg>
        </div>

        <div className="archflow__legend">
          <span className="archflow__pulse"/>
          <b>Fluxo ao vivo</b> · 5 submissões em processamento paralelo · loop de aprendizado contínuo
        </div>
      </div>
    </section>
  );
}

function WorkflowSVG() {
  const ref = React.useRef(null);
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.8;
      const end = vh * 0.2;
      const p = (start - r.top) / (start - end + r.height * 0.3);
      setProgress(Math.max(0, Math.min(1, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const steps = [
    { k:"01", t:"Coleta",       d:"E-mail, anexos, API — a WIR aceita o formato que você já usa.", c:"#1C17FF" },
    { k:"02", t:"Enriquecer",   d:"Cruza com múltiplas fontes externas: CNPJ, histórico do broker, exposição, crédito.", c:"#4D38C0" },
    { k:"03", t:"Pontuar",      d:"Motor ML multi-fator calibrado ao seu apetite e à sua manual de subscrição.", c:"#A44F98" },
    { k:"04", t:"Decidir",      d:"Cotação, recusa automática ou escalada para humano — sempre com explicação.", c:"#EE7D48" },
    { k:"05", t:"Subscrever",   d:"Escreve no seu core de apólice e devolve a trilha de auditoria completa.", c:"#F9B336" },
  ];
  const pathLen = 1200;
  return (
    <section className="wf" data-reveal ref={ref}>
      <div className="wrap wf__head">
        <div className="eyebrow">· 05 — Como funciona</div>
        <h2 className="wf__title display">Cinco passos.<br/><em>Um fluxo auditável.</em></h2>
        <p className="wf__sub">Cada decisão deixa uma trilha — modelo, versão, confiança, inputs, timestamp. Nada é caixa-preta.</p>
      </div>
      <div className="wf__canvas">
        <svg viewBox="0 0 1400 280" className="wf__svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wfGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="#1C17FF"/>
              <stop offset="0.35" stopColor="#A44F98"/>
              <stop offset="0.7" stopColor="#EE7D48"/>
              <stop offset="1" stopColor="#F9B336"/>
            </linearGradient>
          </defs>
          <path d="M 80 140 C 260 40, 420 240, 560 140 S 820 40, 980 140 S 1240 240, 1360 140"
            stroke="rgba(0,0,0,.08)" strokeWidth="2" fill="none"/>
          <path d="M 80 140 C 260 40, 420 240, 560 140 S 820 40, 980 140 S 1240 240, 1360 140"
            stroke="url(#wfGrad)" strokeWidth="3" fill="none"
            strokeDasharray={pathLen}
            strokeDashoffset={pathLen * (1 - progress)}
            style={{transition:"stroke-dashoffset 80ms linear"}}/>
          {steps.map((s,i) => {
            const x = 80 + (i * (1360-80)/4);
            const y = 140 + (i % 2 === 0 ? -100 : 100) * Math.sin((i/4)*Math.PI);
            const active = progress > (i / steps.length) * 0.9;
            return (
              <g key={i}>
                <circle cx={x} cy={y} r={active ? 14 : 8} fill={active ? s.c : "#fff"} stroke={s.c} strokeWidth="3"
                  style={{transition:"all .3s ease"}}/>
              </g>
            );
          })}
        </svg>
        <div className="wf__steps">
          {steps.map((s,i) => {
            const active = progress > (i / steps.length) * 0.9;
            return (
              <div key={i} className={"wf__step" + (active ? " is-on" : "")} style={{"--c": s.c}}>
                <div className="wf__step-k num">{s.k}</div>
                <div className="wf__step-t">{s.t}</div>
                <div className="wf__step-d">{s.d}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const stats = [
    { k:"Eficiência",            v:"40%",    l:"do tempo do underwriter gasto com tarefas administrativas.",         src:"Deloitte" },
    { k:"Transformação Digital", v:"70%",    l:"das seguradoras não executam inovação por limitação de TI.",         src:"BCG" },
    { k:"Velocidade",            v:"60%+",   l:"dos brokers escolhem seguradora pela velocidade de resposta.",       src:"Capgemini" },
    { k:"Foco em Negócios",      v:"20-30%", l:"do tempo corporativo perdido organizando dados não estruturados.",   src:"Gartner" },
  ];
  return (
    <section id="desafios" className="trust" data-reveal>
      <div className="wrap">
        <div className="eyebrow eyebrow--onDark">· Desafios do mercado</div>
        <div className="trust__top">
          <blockquote className="trust__quote display">
            "Mercado de Seguros e Danos cresce <em>dois dígitos ao ano</em>. Mas a estrutura das empresas não acompanha esta aceleração."
          </blockquote>
          <div className="trust__attrib">
            <div className="trust__avatar trust__avatar--photo" style={{backgroundImage:"url(assets/team/nicholas.jpg)"}}/>
            <div>
              <b>Nicholas Weiser</b>
              <span>CEO · Co-Founder · WIR Innovation</span>
            </div>
          </div>
        </div>
        <div className="trust__divider"/>
        <div className="trust__bot">
          <div className="trust__bot-k">Quatro forças que tornam o status quo insustentável</div>
          <div className="trust__stats">
            {stats.map((s,i) => (
              <div key={i} className="trust__stat">
                <div className="trust__stat-k">{s.k}</div>
                <div className="trust__stat-v display">{s.v}</div>
                <div className="trust__stat-l">{s.l}</div>
                <div className="trust__stat-s">Fonte · <b>{s.src}</b></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Closing({ go }) {
  return (
    <section className="closing" data-reveal>
      <div className="wrap">
        <div className="closing__top">
          <div className="eyebrow">· Próximo passo</div>
          <h2 className="display closing__title">
            Sua equipe tem o <em>conhecimento.</em><br/>
            A WIR dá a <em>plataforma de IA para escalar.</em>
          </h2>
          <div className="closing__actions">
            <button className="btn btn--solid" onClick={()=>go("contact")}>
              Agendar conversa com nossos sócios <span className="btn__arrow">→</span>
            </button>
            <button className="btn btn--ghost" onClick={()=>go("solutions")}>
              Explorar soluções <span className="btn__arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { WorkflowSVG, ArchFlow, Trust, Closing });
