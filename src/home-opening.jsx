/* ───────── Movement 01 · Opening + 02 · Proof ───────── */

function LiveTerminal() {
  const lines = [
    { t:200,  k:"> intake", v:"SUB-8472 · Global Logistics · Frota 142 veículos" },
    { t:600,  k:"> parse",  v:"pdf_attachments=4 · entities=37 · confidence=0.97" },
    { t:1100, k:"> enrich", v:"cnpj ok · histórico sinistros 5y · exposure map" },
    { t:1600, k:"> score",  v:"model=wir-uw.v26.2 · risk=68 · apetite=match · ml=91.7%" },
    { t:2100, k:"> decide", v:"QUOTE $847,200/y · reason: low-loss-ratio · hitl=false" },
    { t:2500, k:"> write",  v:"policy issued → guidewire · audit#AXZ-8472 · ✓" },
  ];
  const [shown, setShown] = React.useState(0);
  const [elapsed, setElapsed] = React.useState(0);
  React.useEffect(() => {
    let raf, start = performance.now();
    const tick = (now) => {
      const e = now - start;
      setElapsed(e);
      setShown(lines.filter(l => e >= l.t).length);
      if (e < 3800) raf = requestAnimationFrame(tick);
      else setTimeout(()=>{ start = performance.now(); setElapsed(0); setShown(0); raf = requestAnimationFrame(tick); }, 1800);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <div className="terminal" aria-hidden>
      <div className="terminal__top">
        <span className="terminal__dots"><i/><i/><i/></span>
        <span className="terminal__title">wir.agents · decision-stream · live</span>
        <span className="terminal__clock num">{(elapsed/1000).toFixed(2)}s</span>
      </div>
      <div className="terminal__body">
        {lines.slice(0,shown).map((l,i)=>(
          <div key={i} className="terminal__line">
            <span className="terminal__k">{l.k}</span>
            <span className="terminal__v">{l.v}</span>
          </div>
        ))}
        {shown < lines.length && <div className="terminal__cursor">▊</div>}
        {shown >= lines.length && (
          <div className="terminal__done">
            <span>· decisão completa</span><b>32s</b>
          </div>
        )}
      </div>
    </div>
  );
}

function Opening({ go }) {
  const index = [
    { n:"01", k:"O CENÁRIO",      stat:<><b>R$230</b> por cotação · <b>10%</b> de conversão</>,
      cap:"Como o custo operacional corrói margem." },
    { n:"02", k:"A SOLUÇÃO",      stat:<><b>4</b> camadas · <b>&lt;3s</b> por decisão</>,
      cap:"Motor de IA que aprende com cada ciclo." },
    { n:"03", k:"A EVIDÊNCIA",    stat:<><b>625 → 1.800</b> cotações/mês · <b>−62%</b> custo</>,
      cap:"Mesma equipe. Tríplice capacidade." },
    { n:"04", k:"A CLASSIFICAÇÃO", stat:<><b>65 / 25 / 10</b> · auto · assistido · senior</>,
      cap:"Foco humano onde realmente importa." },
    { n:"05", k:"O IMPACTO",      stat:<><b>3×</b> capacidade · <b>STP 97%</b></>,
      cap:"Decisão auditável em cada camada." },
  ];
  return (
    <section className="opening">
      <div className="wrap">
        {/* Edition masthead */}
        <div className="opening__mast">
          <div className="opening__mast-L">
            <span className="opening__vol">VOL. 01</span>
            <span>ED. 04 · ABR 2026</span>
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
              <span className="opening__kicker-v">v26.2</span>
              <span>Em produção com 4 seguradoras Tier-1</span>
            </div>
            <h1 className="display opening__title">
              A camada<br/>
              de <em>inteligência</em><br/>
              do seguro.
            </h1>
            <p className="opening__lede">
              Automatize subscrição, sinistros, pricing e compliance com agentes de IA — sem substituir seus sistemas atuais.
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
            <div className="opening__caption">· Decisão #AXZ-8472 · live feed</div>
            <LiveTerminal/>
          </div>
        </div>

        {/* Editorial index */}
        <div className="opening__index">
          <div className="opening__index-head">
            <div className="eyebrow">Nesta edição</div>
            <span className="opening__index-meta">
              Estudo de caso AXA Transportes · Q1 2026
            </span>
          </div>
          <div className="opening__index-grid">
            {index.map((item) => (
              <button key={item.n} className="opening__index-item"
                onClick={()=>go(item.n === "02" || item.n === "04" ? "solutions" : "home")}>
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
    { v:2,   s:"min", pre:"<", l:"Cotação média",  c:"vs. 47 dias de média do setor." },
    { v:97,  s:"%",   l:"STP Rate",        c:"Straight-through processing em sinistros." },
    { v:47,  s:"",    l:"Mercados ativos", c:"América Latina, EUA e Europa." },
    { v:4.2, s:"×",   l:"Capacidade",      c:"Mais negócios por corretor, sem equipe extra." },
  ];
  return (
    <section className="proof" data-reveal>
      <div className="wrap">
        <div className="proof__head">
          <div className="eyebrow">· 02 — Prova</div>
          <div className="proof__note">Métricas agregadas · Q1 2026 · 4 clientes Tier-1</div>
        </div>
        <div className="proof__grid">
          {m.map((x,i) => (
            <div key={i} className="proof__cell">
              <div className="proof__idx">/0{i+1}</div>
              <div className="proof__label">{x.l}</div>
              <div className="proof__value num">
                {x.pre && <i className="proof__pre">{x.pre}</i>}
                <AnimatedNum to={x.v}/>
                <small>{x.s}</small>
              </div>
              <div className="proof__caption">{x.c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { LiveTerminal, Opening, Proof });
