/* ───────────────────────────────────────────
   Shared: Logo, Nav, Footer, Ticker, helpers
   ─────────────────────────────────────────── */

const { useEffect, useState, useRef, useMemo } = React;

// Wordmark — simplified version of WIR logo
function Wordmark({ small }) {
  const h = small ? 22 : 28;
  return (
    <svg height={h} viewBox="0 0 240 68" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="WIR">
      <defs>
        <linearGradient id="wirGrad" x1="0" x2="1" y1="0.5" y2="0.5">
          <stop offset="0" stopColor="#1C17FF"/>
          <stop offset="0.45" stopColor="#A44F98"/>
          <stop offset="0.75" stopColor="#EE7D48"/>
          <stop offset="1" stopColor="#F9B336"/>
        </linearGradient>
      </defs>
      {/* W arc swoosh */}
      <path d="M4 16 C 28 66, 52 12, 74 52 C 88 22, 100 14, 118 42" stroke="url(#wirGrad)" strokeWidth="7" strokeLinecap="round" fill="none"/>
      {/* i dot */}
      <circle cx="136" cy="18" r="6" fill="#0B0A08"/>
      {/* i stem */}
      <rect x="131" y="28" width="10" height="34" rx="4" fill="#0B0A08"/>
      {/* r stem */}
      <rect x="154" y="28" width="10" height="34" rx="4" fill="#0B0A08"/>
      {/* r hook */}
      <path d="M164 36 Q 174 26, 188 30" stroke="#0B0A08" strokeWidth="9" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

function Ticker() {
  const items = [
    { d: "b", t: "São Paulo · New York · Silicon Valley" },
    { d: "a", t: "Cotação média: <2 min" },
    { d: "p", t: "STP rate: 97%" },
    { d: "o", t: "Mercados ativos: 47" },
    { d: "b", t: "Infraestrutura de IA para seguros" },
    { d: "a", t: "Founders: 57 anos combinados" },
    { d: "p", t: "SOC 2 Type II · HIPAA · LGPD" },
    { d: "o", t: "Deploy em semanas, não meses" },
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
            <Wordmark/>
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
