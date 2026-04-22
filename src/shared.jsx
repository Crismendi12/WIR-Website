/* ───────────────────────────────────────────
   Shared: Logo, Nav, Footer, Ticker, helpers
   ─────────────────────────────────────────── */

const { useEffect, useState, useRef, useMemo } = React;

// Official WIR logo — uses brandbook SVG with proper gradient
function Wordmark({ small, variant }) {
  const h = small ? 36 : 52;
  const src = variant === "white" ? "assets/wir-logo-branco.svg" : "assets/wir-logo-azul.svg";
  return (
    <img src={src} alt="WIR Innovation" style={{ height: h + "px", width: "auto", display: "block" }} />
  );
}

function Ticker() {
  const items = [
    { d: "a", t: "Cotação média: <2 min" },
    { d: "p", t: "STP rate: 97%" },
    { d: "b", t: "Infraestrutura de IA para seguros" },
    { d: "o", t: "SOC 2 Type II · HIPAA · LGPD" },
  ];
  const dotClass = (d) => "ticker__dot" + (d === "b" ? " ticker__dot--b" : d === "p" ? " ticker__dot--p" : d === "o" ? " ticker__dot--o" : "");
  return (
    <div className="ticker">
      <div className="ticker__track">
        {[...items, ...items].map((it, i) => (
          <span key={i} className="ticker__item">
            <span className={dotClass(it.d)}/>
            {it.t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Nav({ route, go }) {
  const links = [
    { id: "home", label: "Início" },
    { id: "solutions", label: "Soluções" },
    { id: "about", label: "Sobre" },
    { id: "blog", label: "Ideias" },
  ];
  return (
    <>
      <Ticker />
      <nav className="nav">
        <div className="wrap nav__inner">
          <a href="#home" onClick={(e)=>{e.preventDefault();go("home")}} className="nav__brand">
            <Wordmark/>
            <span className="nav__brand-sub">Innovation · AI Stack</span>
          </a>
          <div className="nav__links">
            {links.map(l => (
              <a key={l.id} href={"#"+l.id} onClick={(e)=>{e.preventDefault();go(l.id)}}
                className={"nav__link" + (route===l.id ? " nav__link--active": "")}>
                {l.label}
              </a>
            ))}
          </div>
          <a href="#contact" onClick={(e)=>{e.preventDefault();go("contact")}} className="nav__cta">
            <span className="dot"/>
            Agendar demo
            <span aria-hidden>→</span>
          </a>
        </div>
      </nav>
    </>
  );
}

function Footer({ go }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <Wordmark variant="white"/>
            <p className="footer__brand-desc">Infraestrutura de IA para o mercado segurador. Automatize subscrição, sinistros, pricing e compliance sem substituir seus sistemas.</p>
          </div>
          <div>
            <h4>Produto</h4>
            <ul>
              <li><a href="#" onClick={(e)=>{e.preventDefault();go("solutions")}}>Soluções</a></li>
              <li><a href="#">Integrações</a></li>
              <li><a href="#">Segurança</a></li>
              <li><a href="#">Docs da API</a></li>
            </ul>
          </div>
          <div>
            <h4>Empresa</h4>
            <ul>
              <li><a href="#" onClick={(e)=>{e.preventDefault();go("about")}}>Sobre</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault();go("blog")}}>Ideias</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault();go("contact")}}>Contato</a></li>
              <li><a href="#">Carreiras</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacidade</a></li>
              <li><a href="#">Termos</a></li>
              <li><a href="#">LGPD</a></li>
              <li><a href="#">SOC 2</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bot">
          <span>© 2026 WIR Innovation</span>
          <span>Feito entre São Paulo e a Bay Area</span>
        </div>
      </div>
      <div className="wrap" aria-hidden>
        <div className="footer__marquee"><em>WIR</em> Innovation.</div>
      </div>
    </footer>
  );
}

/* Reveal-on-scroll */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-revealed"); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

Object.assign(window, { Wordmark, Nav, Footer, Ticker, useReveal });
