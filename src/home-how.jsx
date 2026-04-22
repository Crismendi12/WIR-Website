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
    { k:"01", t:"Intake",      d:"E-mail, PDF, API — a WIR aceita o formato que você já usa.", c:"#1C17FF" },
    { k:"02", t:"Enrich",      d:"Cruza com 40+ fontes: CNPJ, histórico, exposure map, crédito.", c:"#4D38C0" },
    { k:"03", t:"Score",       d:"Motor ML com 300+ fatores calibrados ao seu apetite.", c:"#A44F98" },
    { k:"04", t:"Decide",      d:"Cotação, decisão ou escalada para humano — com explicação.", c:"#EE7D48" },
    { k:"05", t:"Write",       d:"Escreve no seu core: Guidewire, Duck Creek, Majesco, Sapiens.", c:"#F9B336" },
  ];
  const pathLen = 1200;
  return (
    <section className="wf" data-reveal ref={ref}>
      <div className="wrap wf__head">
        <div className="eyebrow">· 05 — Como funciona</div>
        <h2 className="wf__title display">Cinco passos.<br/><em>Trinta segundos.</em></h2>
        <p className="wf__sub">Cada decisão deixa uma trilha auditável — modelo, versão, confiança, inputs, timestamp. Nada é caixa-preta.</p>
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
    { v:"40%",    l:"Tempo do UW em tarefas admin.", src:"Deloitte" },
    { v:"70%",    l:"Seguradoras travadas em TI legada.", src:"BCG" },
    { v:"60%+",   l:"Brokers escolhem por velocidade.", src:"Capgemini" },
    { v:"30%",    l:"Tempo perdido organizando dados.", src:"Gartner" },
  ];
  const logos = ["Lockton","Aon","Gallagher","JLT","Ezze","Pátria","Hapvida","Zurich"];
  return (
    <section className="trust" data-reveal>
      <div className="wrap">
        <div className="eyebrow eyebrow--onDark">· 06 — Por que nós</div>
        <div className="trust__top">
          <blockquote className="trust__quote display">
            "O mercado de Seguros e Danos cresce <em>dois dígitos ao ano</em> — mas a estrutura das seguradoras não acompanha. Essa é a fricção que a WIR resolve."
          </blockquote>
          <div className="trust__attrib">
            <div className="trust__avatar">NW</div>
            <div>
              <b>Nicholas Weiser</b>
              <span>CEO & Co-Founder · ex-Aon · ex-Lockton</span>
            </div>
          </div>
        </div>
        <div className="trust__divider"/>
        <div className="trust__mid">
          <div className="trust__mid-k">Construído por quem já liderou o mercado</div>
          <div className="trust__logos">
            {logos.map((n,i) => <div key={i} className="trust__logo">{n}</div>)}
          </div>
        </div>
        <div className="trust__divider"/>
        <div className="trust__bot">
          <div className="trust__bot-k">O custo do manual — por que agora</div>
          <div className="trust__stats">
            {stats.map((s,i) => (
              <div key={i} className="trust__stat">
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
  const [vol, setVol] = React.useState(5000);
  const hours = Math.round(vol * 0.35);
  const costManual = Math.round(vol * 47);
  const annualSave = Math.round((costManual * 0.78 * 12) / 1000);
  return (
    <section className="closing" data-reveal>
      <div className="wrap">
        <div className="closing__grid">
          <div className="closing__l">
            <div className="eyebrow">· 07 — Próximo passo</div>
            <h2 className="display closing__title">
              Vamos refazer<br/>
              a infra<br/>
              do <em>seguro.</em>
            </h2>
            <p className="closing__lede">
              Marque uma conversa de 30 minutos. Em duas semanas, entregamos um piloto funcional dentro do seu ambiente — sem tocar no seu core.
            </p>
            <div className="closing__actions">
              <button className="btn btn--solid" onClick={()=>go("contact")}>
                Falar com a equipe <span className="btn__arrow">→</span>
              </button>
              <button className="btn btn--ghost" onClick={()=>go("solutions")}>
                Explorar soluções <span className="btn__arrow">→</span>
              </button>
            </div>
          </div>
          <div className="closing__r">
            <div className="closing__calc">
              <div className="closing__calc-k">Calculadora rápida · ROI estimado</div>
              <div className="closing__calc-input">
                <label>Submissões mensais</label>
                <div className="closing__calc-val num">{vol.toLocaleString("pt-BR")}</div>
                <input type="range" min="500" max="50000" step="500"
                  value={vol} onChange={(e)=>setVol(+e.target.value)}/>
                <div className="closing__calc-scale">
                  <span>500</span><span>50.000</span>
                </div>
              </div>
              <div className="closing__calc-out">
                <div className="closing__calc-row">
                  <span>Horas/mês economizadas</span>
                  <b className="num">{hours.toLocaleString("pt-BR")}h</b>
                </div>
                <div className="closing__calc-row">
                  <span>Custo manual estimado/mês</span>
                  <b className="num">R$ {Math.round(costManual/1000)}k</b>
                </div>
                <div className="closing__calc-row closing__calc-row--hi">
                  <span>Savings anual com WIR</span>
                  <b className="num">R$ {annualSave.toLocaleString("pt-BR")}k</b>
                </div>
              </div>
              <div className="closing__calc-foot">*Estimativa com base em 78% STP · piloto de 90 dias.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { WorkflowSVG, Trust, Closing });
