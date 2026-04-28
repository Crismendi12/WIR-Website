/* ───────── Movement 05 · Workflow + 06 · Trust + 07 · Closing ───────── */

// ArchFlow — replica do diagrama de arquitetura AXA (zonas + bolinhas animadas)
// adaptado ao design system WIR (paper, brand gradient).
function ArchFlow() {
  const dotsRef = React.useRef([]);
  const frameRef = React.useRef(null);

  // 4 zone-based path waypoints (generic, no AXA branding)
  const paths = [
    [{x:80,y:80},{x:80,y:170},{x:300,y:170},{x:300,y:220},{x:480,y:175},{x:660,y:130},{x:660,y:220},{x:880,y:170},{x:1040,y:170},{x:1040,y:80}],
    [{x:80,y:80},{x:80,y:170},{x:300,y:115},{x:300,y:170},{x:480,y:210},{x:660,y:130},{x:740,y:220},{x:880,y:185},{x:1040,y:170},{x:1040,y:260}],
    [{x:80,y:80},{x:80,y:170},{x:300,y:170},{x:300,y:220},{x:480,y:240},{x:660,y:130},{x:660,y:260},{x:740,y:300},{x:880,y:170},{x:1040,y:170}],
  ];

  React.useEffect(() => {
    const start = performance.now();
    const duration = 6000;
    const tick = (now) => {
      const elapsed = now - start;
      for (let d = 0; d < paths.length; d++) {
        const dot = dotsRef.current[d];
        if (!dot) continue;
        const path = paths[d];
        const offset = d * 1200;
        const t = ((elapsed + offset) % duration) / duration;
        const segCount = path.length - 1;
        const seg = Math.min(Math.floor(t * segCount), segCount - 1);
        const segT = (t * segCount) - seg;
        const cx = path[seg].x + (path[seg+1].x - path[seg].x) * segT;
        const cy = path[seg].y + (path[seg+1].y - path[seg].y) * segT;
        dot.setAttribute("cx", cx);
        dot.setAttribute("cy", cy);
      }
      frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const zoneLabel = (x, label, color) => (
    <text x={x} y="22" fill={color} fontSize="9" fontWeight="800"
      fontFamily="Inter, sans-serif" textAnchor="middle" letterSpacing=".14em">{label}</text>
  );

  const node = (x, y, w, h, fill, stroke, label, sub, labelColor) => (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="10" fill={fill} stroke={stroke} strokeWidth="1.5"/>
      <text x={x + w/2} y={y + h/2 - 2} fill={labelColor} fontSize="11" fontWeight="700"
        fontFamily="Inter, sans-serif" textAnchor="middle">{label}</text>
      <text x={x + w/2} y={y + h/2 + 14} fill="#6A6458" fontSize="8"
        fontFamily="JetBrains Mono, monospace" textAnchor="middle">{sub}</text>
    </g>
  );

  return (
    <section className="archflow" data-reveal>
      <div className="wrap">
        <div className="archflow__head">
          <div className="eyebrow">· Arquitetura WIR</div>
          <h2 className="archflow__title display">
            Do <em>e-mail da corretora</em> à decisão no dashboard.<br/>
            <span className="archflow__sub">Ponta a ponta — em minutos, auditável.</span>
          </h2>
          <p className="archflow__lede">
            Fluxo end-to-end: a submissão chega → a WIR processa → a IA prioriza → o output volta ao seu sistema. Tudo dentro da sua infraestrutura, sem trocar o core.
          </p>
        </div>

        <div className="archflow__canvas">
          <svg viewBox="0 0 1100 380" className="archflow__svg" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="archIntake" x1="0" x2="1"><stop offset="0%" stopColor="#1C17FF"/><stop offset="100%" stopColor="#5237BB"/></linearGradient>
              <linearGradient id="archPlatform" x1="0" x2="1"><stop offset="0%" stopColor="#5237BB"/><stop offset="100%" stopColor="#A44F98"/></linearGradient>
              <linearGradient id="archAI" x1="0" x2="1"><stop offset="0%" stopColor="#A44F98"/><stop offset="100%" stopColor="#EE7D48"/></linearGradient>
              <linearGradient id="archOutput" x1="0" x2="1"><stop offset="0%" stopColor="#EE7D48"/><stop offset="100%" stopColor="#10B981"/></linearGradient>
              <filter id="archGlow"><feGaussianBlur stdDeviation="3"/></filter>
            </defs>

            {/* Zone separators */}
            {[230, 540, 800].map((x, i) => (
              <line key={i} x1={x} y1="34" x2={x} y2="350" stroke="rgba(11,10,8,.08)" strokeWidth="1" strokeDasharray="4 4"/>
            ))}

            {/* Zone labels */}
            {zoneLabel(120, "INTAKE", "#1C17FF")}
            {zoneLabel(385, "WIR PLATFORM", "#5237BB")}
            {zoneLabel(670, "AI ENGINE", "#A44F98")}
            {zoneLabel(960, "OUTPUT", "#10B981")}

            {/* INTAKE column */}
            {node(20, 60, 120, 40, "rgba(28,23,255,.04)", "rgba(28,23,255,.3)", "E-mail · Portal", "Submissão chega", "#1C17FF")}
            {node(20, 145, 120, 50, "rgba(28,23,255,.06)", "rgba(28,23,255,.4)", "API Intake", "3 endpoints · SSO", "#1C17FF")}

            {/* WIR PLATFORM column */}
            {node(245, 60, 110, 38, "rgba(82,55,187,.04)", "rgba(82,55,187,.3)", "Load Balancer", "Nginx · 2+ inst", "#5237BB")}
            {node(245, 110, 110, 50, "rgba(82,55,187,.06)", "rgba(82,55,187,.4)", "Database", "PostgreSQL Primary", "#5237BB")}
            {node(245, 175, 110, 36, "rgba(239,68,68,.04)", "rgba(239,68,68,.25)", "Redis", "Celery + Cache", "#EF4444")}
            {node(265, 220, 70, 24, "rgba(82,55,187,.03)", "rgba(82,55,187,.2)", "Replica", "", "#5237BB")}

            {/* WORKER POOL */}
            <rect x="395" y="100" width="120" height="115" rx="12" fill="rgba(82,55,187,.03)" stroke="rgba(82,55,187,.15)" strokeWidth="1" strokeDasharray="3 3"/>
            <text x="455" y="115" fill="rgba(82,55,187,.5)" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle" letterSpacing=".1em">WORKER POOL</text>
            {node(405, 122, 100, 24, "rgba(82,55,187,.06)", "rgba(82,55,187,.3)", "Worker 1", "", "#5237BB")}
            {node(405, 152, 100, 24, "rgba(82,55,187,.05)", "rgba(82,55,187,.25)", "Worker 2", "", "#5237BB")}
            {node(405, 182, 100, 24, "rgba(82,55,187,.04)", "rgba(82,55,187,.2)", "Worker N", "", "#5237BB")}

            {/* AI ENGINE column */}
            {node(560, 80, 110, 50, "rgba(124,92,252,.05)", "rgba(124,92,252,.3)", "Business Rules", "Política de risco", "#A44F98")}
            <rect x="555" y="145" width="170" height="160" rx="14" fill="none" stroke="rgba(218,114,90,.18)" strokeWidth="1" strokeDasharray="4 4"/>
            <text x="640" y="160" fill="rgba(218,114,90,.5)" fontSize="7" fontWeight="800" fontFamily="Inter, sans-serif" textAnchor="middle" letterSpacing=".1em">AI LAYER</text>
            {node(563, 168, 78, 28, "rgba(218,114,90,.05)", "rgba(218,114,90,.3)", "NLP Parser", "", "#EE7D48")}
            {node(645, 168, 76, 28, "rgba(218,114,90,.07)", "rgba(218,114,90,.4)", "WIR LLM", "", "#EE7D48")}
            {node(563, 202, 78, 28, "rgba(218,114,90,.05)", "rgba(218,114,90,.3)", "Risk Routing", "", "#EE7D48")}
            {node(645, 202, 76, 28, "rgba(218,114,90,.05)", "rgba(218,114,90,.3)", "Fraud Det", "", "#EE7D48")}
            {node(563, 240, 156, 28, "rgba(218,114,90,.04)", "rgba(218,114,90,.2)", "ML Model API", "POST /predict", "#EE7D48")}

            {/* OUTPUT column */}
            {node(820, 75, 110, 80, "rgba(249,179,54,.05)", "rgba(249,179,54,.3)", "Score", "Risk + Price", "#F8AD39")}
            {node(828, 110, 94, 32, "rgba(16,185,129,.06)", "rgba(16,185,129,.15)", "~65% auto", "25% review · 10% esc", "#10B981")}
            {node(960, 90, 80, 60, "rgba(16,185,129,.05)", "rgba(16,185,129,.3)", "QC", "Quality Check", "#10B981")}
            {node(960, 170, 80, 36, "rgba(16,185,129,.06)", "rgba(16,185,129,.4)", "Dashboard", "Output painel", "#10B981")}
            {node(960, 215, 80, 36, "rgba(16,185,129,.04)", "rgba(16,185,129,.25)", "Webhook", "Core de apólice", "#10B981")}

            {/* Connection lines (subtle) */}
            <path d="M140 80 Q190 80 245 80" stroke="url(#archIntake)" strokeWidth="1.5" fill="none" opacity=".4"/>
            <path d="M140 170 Q190 170 245 135" stroke="url(#archIntake)" strokeWidth="1.5" fill="none" opacity=".4"/>
            <path d="M355 135 Q380 135 395 145" stroke="url(#archPlatform)" strokeWidth="1.5" fill="none" opacity=".4"/>
            <path d="M515 165 Q540 130 560 105" stroke="url(#archAI)" strokeWidth="1.5" fill="none" opacity=".4"/>
            <path d="M725 105 Q760 130 820 115" stroke="url(#archAI)" strokeWidth="1.5" fill="none" opacity=".4"/>
            <path d="M725 220 Q760 200 820 130" stroke="url(#archAI)" strokeWidth="1.5" fill="none" opacity=".4"/>
            <path d="M930 115 Q945 115 960 120" stroke="url(#archOutput)" strokeWidth="1.5" fill="none" opacity=".4"/>
            <path d="M930 130 Q945 165 960 188" stroke="url(#archOutput)" strokeWidth="1.5" fill="none" opacity=".3"/>

            {/* Animated dots — "bolinhas andando" */}
            {[0, 1, 2].map(i => (
              <circle key={i} ref={el => dotsRef.current[i] = el}
                cx="80" cy="80" r="5"
                fill={i === 0 ? "#F8AD39" : i === 1 ? "#A44F98" : "#10B981"}
                filter="url(#archGlow)" opacity="1"/>
            ))}
          </svg>
        </div>

        <div className="archflow__legend">
          <span className="archflow__pulse"/>
          Fluxo ao vivo · 3 submissões em processamento simultâneo
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
