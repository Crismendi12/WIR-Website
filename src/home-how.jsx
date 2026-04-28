/* ───────── Movement 05 · Workflow + 06 · Trust + 07 · Closing ───────── */

// ArchFlow — diagrama de arquitetura simplificado (4 zonas) com bolinhas animadas
// Adaptado ao design system WIR (paper). Zonas mais espaçadas, dots bem visíveis.
function ArchFlow() {
  const dotsRef = React.useRef([]);
  const haloRef = React.useRef([]);
  const frameRef = React.useRef(null);

  // 3 paths, cada um percorre 4 zonas: INTAKE → PLATFORM → AI → OUTPUT
  const paths = [
    [{x:140,y:200},{x:380,y:140},{x:620,y:200},{x:860,y:140},{x:1100,y:200}],
    [{x:140,y:200},{x:380,y:200},{x:620,y:200},{x:860,y:200},{x:1100,y:200}],
    [{x:140,y:200},{x:380,y:260},{x:620,y:200},{x:860,y:260},{x:1100,y:200}],
  ];

  React.useEffect(() => {
    const start = performance.now();
    const duration = 5000;
    const tick = (now) => {
      const elapsed = now - start;
      for (let d = 0; d < paths.length; d++) {
        const dot = dotsRef.current[d];
        const halo = haloRef.current[d];
        if (!dot) continue;
        const path = paths[d];
        const offset = d * 1200;
        const t = ((elapsed + offset) % duration) / duration;
        const segCount = path.length - 1;
        const seg = Math.min(Math.floor(t * segCount), segCount - 1);
        const segT = (t * segCount) - seg;
        // Smooth easing per segment
        const ease = segT < 0.5 ? 2*segT*segT : 1 - Math.pow(-2*segT+2, 2)/2;
        const cx = path[seg].x + (path[seg+1].x - path[seg].x) * ease;
        const cy = path[seg].y + (path[seg+1].y - path[seg].y) * ease;
        dot.setAttribute("cx", cx);
        dot.setAttribute("cy", cy);
        if (halo) {
          halo.setAttribute("cx", cx);
          halo.setAttribute("cy", cy);
        }
      }
      frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const zones = [
    { x: 140, label: "INTAKE",       sub: "submissão chega",     color: "#1C17FF" },
    { x: 380, label: "WIR PLATFORM", sub: "processamento",        color: "#7540AC" },
    { x: 620, label: "AI ENGINE",    sub: "scoring + decisão",    color: "#A44F98" },
    { x: 860, label: "OUTPUT",       sub: "dashboard + webhook",  color: "#EE7D48" },
    { x:1100, label: "CORE",         sub: "apólice gravada",      color: "#10B981" },
  ];

  const dotColors = ["#F8AD39", "#A44F98", "#10B981"];

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
            Fluxo end-to-end: a submissão chega → a WIR processa → a IA prioriza → o output volta ao seu sistema. Tudo dentro da sua infraestrutura, sem trocar o core.
          </p>
        </div>

        <div className="archflow__canvas">
          <svg viewBox="0 0 1240 400" className="archflow__svg" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="archGrad" x1="0" x2="1">
                <stop offset="0%" stopColor="#1C17FF"/>
                <stop offset="30%" stopColor="#7540AC"/>
                <stop offset="60%" stopColor="#EE7D48"/>
                <stop offset="100%" stopColor="#10B981"/>
              </linearGradient>
              <radialGradient id="archDotGlow" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#F8AD39" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#F8AD39" stopOpacity="0"/>
              </radialGradient>
              <filter id="archGlow"><feGaussianBlur stdDeviation="6"/></filter>
            </defs>

            {/* 3 horizontal flow paths (visible rails) */}
            {paths.map((path, i) => {
              const d = path.map((p, j) => `${j === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
              return <path key={i} d={d} stroke="rgba(117,64,172,.18)" strokeWidth="2" fill="none" strokeDasharray="6 6"/>;
            })}

            {/* Master gradient line on middle rail */}
            <path d="M 140 200 L 1100 200" stroke="url(#archGrad)" strokeWidth="3" fill="none" opacity=".55"/>

            {/* Zone nodes (5 stations) */}
            {zones.map((z, i) => (
              <g key={i}>
                <circle cx={z.x} cy="200" r="22"
                  fill="#FAF6EE" stroke={z.color} strokeWidth="2.5"/>
                <circle cx={z.x} cy="200" r="6" fill={z.color} opacity=".25"/>
                <text x={z.x} y="160" fill={z.color} fontSize="11" fontWeight="800"
                  fontFamily="Inter, sans-serif" textAnchor="middle" letterSpacing=".14em">
                  {z.label}
                </text>
                <text x={z.x} y="248" fill="#6A6458" fontSize="11"
                  fontFamily="JetBrains Mono, monospace" textAnchor="middle">
                  {z.sub}
                </text>
              </g>
            ))}

            {/* Animated dots — halos first (behind), then dots (front) */}
            {[0, 1, 2].map(i => (
              <circle key={`halo-${i}`} ref={el => haloRef.current[i] = el}
                cx="140" cy="200" r="22"
                fill={dotColors[i]} opacity="0.18" filter="url(#archGlow)"/>
            ))}
            {[0, 1, 2].map(i => (
              <circle key={`dot-${i}`} ref={el => dotsRef.current[i] = el}
                cx="140" cy="200" r="11"
                fill={dotColors[i]}
                stroke="#FAF6EE" strokeWidth="2.5"/>
            ))}
          </svg>
        </div>

        <div className="archflow__legend">
          <span className="archflow__pulse"/>
          <b>Fluxo ao vivo</b> · 3 submissões em processamento simultâneo
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
