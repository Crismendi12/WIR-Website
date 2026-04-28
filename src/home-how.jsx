/* ───────── Movement 05 · Workflow + 06 · Trust + 07 · Closing ───────── */

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

Object.assign(window, { WorkflowSVG, Trust, Closing });
