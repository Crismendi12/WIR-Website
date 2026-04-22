/* ───────── Home · assembler + shared hooks ───────── */

function AnimatedNum({ to, duration=1400 }) {
  const [n, setN] = React.useState(0);
  const ref = React.useRef(null);
  const started = React.useRef(false);
  React.useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const raf = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setN(to * eased);
            if (t < 1) requestAnimationFrame(raf);
          };
          requestAnimationFrame(raf);
        }
      });
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);
  const isFloat = to % 1 !== 0;
  const txt = isFloat ? n.toFixed(1) : Math.round(n).toString();
  return <span ref={ref}>{txt}</span>;
}

Object.assign(window, { AnimatedNum });

// Clients/partners trust bar — anonymized markers with brand-aligned shape
function TrustBar() {
  const clients = [
    { shape: "square",  tag: "Seguradora Tier-1", loc: "Brasil", stage: "Em produção" },
    { shape: "diamond", tag: "MGA",               loc: "EUA",    stage: "Em produção" },
    { shape: "triangle",tag: "Ressegurador",      loc: "LatAm",  stage: "Em piloto"   },
    { shape: "circle",  tag: "InsurTech",         loc: "Brasil", stage: "Em produção" },
  ];
  const Shape = ({ type }) => {
    const style = { width: 14, height: 14, display: "inline-block" };
    if (type === "square")   return <span style={{ ...style, background: "var(--wir-purple)" }}/>;
    if (type === "diamond")  return <span style={{ ...style, background: "var(--wir-amber)", transform: "rotate(45deg)" }}/>;
    if (type === "triangle") return <span style={{ width: 0, height: 0, borderLeft: "7px solid transparent", borderRight: "7px solid transparent", borderBottom: "12px solid var(--wir-coral)", display: "inline-block" }}/>;
    return <span style={{ ...style, background: "var(--wir-blue)", borderRadius: "50%" }}/>;
  };
  return (
    <section className="trustbar" data-reveal>
      <div className="wrap">
        <div className="trustbar__head">
          <div className="eyebrow">· Em produção com</div>
          <span className="trustbar__note">Clientes anonimizados sob NDA · logotipos por solicitação</span>
        </div>
        <div className="trustbar__grid">
          {clients.map((c,i) => (
            <div key={i} className="trustbar__cell">
              <Shape type={c.shape}/>
              <div className="trustbar__cell-body">
                <b>{c.tag}</b>
                <span>{c.loc} · {c.stage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Compliance badges
function ComplianceBadges() {
  const badges = [
    { k: "SOC 2", v: "Type II", desc: "Segurança operacional auditada" },
    { k: "HIPAA", v: "Compliant", desc: "Privacidade em saúde (US)" },
    { k: "LGPD",  v: "Conforme",  desc: "Proteção de dados (BR)" },
    { k: "ISO",   v: "27001",     desc: "Gestão de segurança" },
  ];
  const Shield = ({ color }) => (
    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" aria-hidden>
      <path d="M10 1L2 4v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V4l-8-3z"
        stroke={color || "currentColor"} strokeWidth="1.3" fill="none"/>
      <path d="M6.5 10.5l2.5 2.5 4.5-5"
        stroke={color || "currentColor"} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  return (
    <div className="compliance">
      <div className="wrap">
        <div className="compliance__grid">
          {badges.map((b,i) => (
            <div key={i} className="compliance__badge">
              <Shield color="var(--wir-purple)"/>
              <div className="compliance__body">
                <div className="compliance__k">{b.k} <em>{b.v}</em></div>
                <div className="compliance__d">{b.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HomePage({ go }) {
  useReveal();
  return (
    <>
      <Opening go={go}/>
      <TrustBar/>
      <Proof/>
      <Shift/>
      <ProductTabs go={go}/>
      <WorkflowSVG/>
      <Trust/>
      <ComplianceBadges/>
      <Closing go={go}/>
    </>
  );
}

Object.assign(window, { HomePage });
