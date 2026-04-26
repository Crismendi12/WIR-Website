/* ───────────────────────────────────────────
   Shared: Logo, Nav, Footer, Ticker, helpers
   ─────────────────────────────────────────── */

const { useEffect, useState, useRef, useMemo } = React;

// Official WIR logo — uses brandbook SVG with proper gradient
function Wordmark({ small, variant }) {
  const h = small ? 44 : 64;
  const src = variant === "white" ? "assets/wir-logo-branco.svg" : "assets/wir-logo-azul.svg";
  return (
    <img src={src} alt="WIR Innovation" style={{ height: h + "px", width: "auto", display: "block" }} />
  );
}

function Ticker() {
  const items = [
    { d: "a", t: "Decisão em minutos · auditável · explicável" },
    { d: "p", t: "Straight-through processing como padrão" },
    { d: "b", t: "Infraestrutura de IA para seguros" },
    { d: "o", t: "Em conformidade com LGPD · arquitetura pronta para SOC 2" },
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
    { id: "blog", label: "Insights" },
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
  const socials = [
    { k:"LinkedIn",  href:"https://www.linkedin.com/company/wir-innovation/" },
    { k:"Instagram", href:"https://www.instagram.com/wirinnovation" },
    { k:"X",         href:"https://x.com/wirinnovationai" },
  ];
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <Wordmark variant="white"/>
            <p className="footer__brand-desc">A nova era de seguros é inteligência de dados, velocidade e escala. A WIR Innovation é a plataforma de IA que entrega essa estrutura dentro dos sistemas que você já opera.</p>
            <div className="footer__social">
              {socials.map((s,i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="footer__social-link">
                  {s.k} <span aria-hidden>↗</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4>Produto</h4>
            <ul>
              <li><a href="#" onClick={(e)=>{e.preventDefault();go("solutions")}}>Soluções</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault();go("solutions")}}>Workflow Inteligente</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault();go("solutions")}}>Integrações</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault();go("solutions")}}>Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4>Empresa</h4>
            <ul>
              <li><a href="#" onClick={(e)=>{e.preventDefault();go("about")}}>Sobre</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault();go("blog")}}>Insights de IA</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault();go("contact")}}>Contato</a></li>
              <li><a href="mailto:contato@wirinnovation.ai">contato@wirinnovation.ai</a></li>
            </ul>
          </div>
          <div>
            <h4>Sócios & Holding</h4>
            <ul>
              <li><a href="#" onClick={(e)=>{e.preventDefault();go("about")}}>Mahway · California</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault();go("about")}}>Avante · Brasil</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault();go("about")}}>Conselheiros estratégicos</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault();go("about")}}>Princípios</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bot">
          <span>© 2026 WIR Innovation</span>
          <span>wirinnovation.ai · Feito entre São Paulo e San Francisco</span>
        </div>
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
