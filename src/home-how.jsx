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
    { k:"03", t:"Score",       d:"Motor ML multi-fator calibrado ao seu apetite.", c:"#A44F98" },
    { k:"04", t:"Decide",      d:"Cotação, decisão ou escalada para humano — com explicação.", c:"#EE7D48" },
    { k:"05", t:"Write",       d:"Escreve no seu core: Guidewire, Duck Creek, Majesco, Sapiens.", c:"#F9B336" },
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
    { v:"40%",  l:"Tempo do UW em tarefas administrativas.", src:"Deloitte" },
    { v:"70%",  l:"Seguradoras travadas em TI legada.",      src:"BCG" },
    { v:"60%+", l:"Brokers escolhem por velocidade.",        src:"Capgemini" },
    { v:"30%",  l:"Tempo perdido organizando dados.",        src:"Gartner" },
  ];
  return (
    <section className="trust" data-reveal>
      <div className="wrap">
        <div className="eyebrow eyebrow--onDark">· 06 — Por que agora</div>
        <div className="trust__top">
          <blockquote className="trust__quote display">
            "O mercado de Seguros e Danos cresce <em>dois dígitos ao ano</em> — mas a estrutura das seguradoras não acompanha. Essa é a fricção que a WIR resolve."
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
          <div className="trust__bot-k">O custo do manual — dados do setor</div>
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

// Pricing model (from AXA proposal): manual baseline R$156/cotação;
// WIR tiered — R$87 (<=1k), R$61 (1-2k), R$43 (2k+). Time: 2.5h manual avg.
function wirTier(v) {
  if (v <= 1000) return { unit: 87, k: "Tier 1", range: "até 1.000" };
  if (v <= 2000) return { unit: 61, k: "Tier 2", range: "1.001 – 2.000" };
  return                { unit: 43, k: "Tier 3", range: "2.001 +"      };
}
function calc(vol) {
  const manualUnit = 156;
  const t = wirTier(vol);
  const wirUnit = t.unit;
  const costManual = vol * manualUnit;
  const costWir = vol * wirUnit;
  const savingsMonth = costManual - costWir;
  const savingsYear = savingsMonth * 12;
  const hoursManual = Math.round(vol * 2.5);
  const ftes = Math.max(1, Math.round((hoursManual / 160) * 10) / 10);
  const savingsPct = Math.round(((manualUnit - wirUnit) / manualUnit) * 100);
  return { manualUnit, wirUnit, tier: t, costManual, costWir, savingsMonth, savingsYear, hoursManual, ftes, savingsPct };
}
const BRL = (n) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(n);
const K = (n) => {
  if (n >= 1_000_000) return `R$ ${(n/1_000_000).toFixed(1).replace(".",",")}M`;
  if (n >= 1_000)     return `R$ ${Math.round(n/1_000)}k`;
  return BRL(n);
};

function Closing({ go }) {
  const [vol, setVol] = React.useState(1200);
  const r = calc(vol);
  return (
    <section className="closing" data-reveal>
      <div className="wrap">
        <div className="closing__top">
          <div className="eyebrow">· 07 — Próximo passo</div>
          <h2 className="display closing__title">
            Sua equipe tem o <em>conhecimento.</em> A WIR dá a infra.
          </h2>
          <p className="closing__lede">
            Subscrição é ofício. A WIR não substitui quem decide — entrega os trilhos para que sua equipe escale decisão, capacidade e margem, sem tocar no seu core.
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
        <div className="closing__calc-wrap">
            <div className="calc">
              <div className="calc__head">
                <div>
                  <div className="calc__eyebrow">· Calculadora · Underwriter vs WIR</div>
                  <div className="calc__title">Quanto custa<br/><em>seu status quo.</em></div>
                </div>
                <div className="calc__pulse" aria-hidden>
                  <span className="calc__pulse-dot"/>
                  live · recalcula
                </div>
              </div>

              <div className="calc__input">
                <div className="calc__input-row">
                  <label>Submissões / mês</label>
                  <div className="calc__val-wrap">
                    <div className="calc__val num">{vol.toLocaleString("pt-BR")}</div>
                    <div className="calc__tier">
                      <span className="calc__tier-k">{r.tier.k}</span>
                      <span className="calc__tier-range">{r.tier.range}</span>
                    </div>
                  </div>
                </div>
                <div className="calc__slider">
                  <input type="range" min="200" max="3000" step="50"
                    value={vol} onChange={(e)=>setVol(+e.target.value)}
                    aria-label="Submissões por mês"/>
                  <div className="calc__marks" aria-hidden>
                    <span style={{left: `${((1000-200)/2800)*100}%`}}/>
                    <span style={{left: `${((2000-200)/2800)*100}%`}}/>
                  </div>
                </div>
                <div className="calc__scale">
                  <span>200</span><span>1.000 <em>· T2</em></span><span>2.000 <em>· T3</em></span><span>3.000</span>
                </div>
              </div>

              <div className="calc__split">
                <div className="calc__col calc__col--manual">
                  <div className="calc__col-k">· Sem WIR · fluxo manual</div>
                  <div className="calc__col-big num">{K(r.costManual)}<small>/mês</small></div>
                  <div className="calc__col-unit">R$ 156 × cotação · benchmark do setor</div>
                  <div className="calc__col-rows">
                    <div><span>Horas/mês em operação</span><b className="num">{r.hoursManual.toLocaleString("pt-BR")}h</b></div>
                    <div><span>FTEs equivalentes</span><b className="num">~{r.ftes.toString().replace(".",",")} UWs</b></div>
                    <div><span>Tempo em decisão real</span><b>{"<"} 40%</b></div>
                  </div>
                </div>

                <div className="calc__arrow" aria-hidden>
                  <span className="calc__arrow-line"/>
                  <span className="calc__arrow-head">→</span>
                </div>

                <div className="calc__col calc__col--wir">
                  <div className="calc__col-k">· Com WIR · agentes</div>
                  <div className="calc__col-big num">{K(r.costWir)}<small>/mês</small></div>
                  <div className="calc__col-unit">R$ {r.wirUnit} × cotação · {r.tier.k} pelo volume</div>
                  <div className="calc__col-rows">
                    <div><span>UWs liberados</span><b>Foco em decisão</b></div>
                    <div><span>Tempo por cotação</span><b>Minutos</b></div>
                    <div><span>Trilha auditável</span><b>100%</b></div>
                  </div>
                </div>
              </div>

              <div className="calc__result">
                <div className="calc__result-row">
                  <span>Economia mensal</span>
                  <b className="num">{K(r.savingsMonth)}</b>
                </div>
                <div className="calc__result-row calc__result-row--hi">
                  <span>Economia anual projetada</span>
                  <b className="num">{K(r.savingsYear)}</b>
                </div>
                <div className="calc__result-row calc__result-row--meta">
                  <span>Redução por cotação</span>
                  <b>−{r.savingsPct}%</b>
                  <div className="calc__bar" aria-hidden>
                    <div className="calc__bar-fill" style={{width: `${r.savingsPct}%`}}/>
                  </div>
                </div>
              </div>

              <div className="calc__foot">
                * Estimativa ilustrativa usando R$ 156 / cotação como benchmark manual (dado do setor) e a cascata de pricing WIR por volume. Payback real depende de mix de produto, apetite e stack — calibramos no escopo do piloto.
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { WorkflowSVG, Trust, Closing });
