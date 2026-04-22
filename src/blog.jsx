/* ───────── Ideias · publicação digital ───────── */

const POSTS = [
  { id:1, cat:"Ensaio", hero:true, title:"O underwriter não morre. O modelo operacional dele, sim.", sub:"Por que a próxima década do seguro vai ser definida pela divisão entre quem tem infra de decisão e quem ainda mora em planilha.",
    author:"Nicholas Weiser", role:"CEO · WIR", time:"12 min", date:"18 · Abr · 2026",
    img:"assets/blog/post-03130.jpg", grad:"linear-gradient(135deg,#3222E9,#7540AC)" },
  { id:2, cat:"Técnico", title:"Explicabilidade que vai além do SHAP: como a WIR audita decisões em produção", sub:"Um deep-dive nas camadas de logging, versionamento e retrieval que tornam uma decisão auditável em Q&A.",
    author:"Head of AI", role:"ML · WIR", time:"8 min", date:"12 · Abr · 2026",
    img:"assets/blog/post-03135.jpg", grad:"linear-gradient(135deg,#7540AC,#FE8B77)" },
  { id:3, cat:"Caso", title:"Como a Mahway reduziu seu ciclo de cotação em ordens de grandeza", sub:"Estudo de caso detalhado com o processo de implementação, KPIs e aprendizados.",
    author:"Head of Delivery", role:"Delivery · WIR", time:"6 min", date:"05 · Abr · 2026",
    img:"assets/blog/post-03138.jpg", grad:"linear-gradient(135deg,#FE8B77,#F8AD39)" },
  { id:4, cat:"Mercado", title:"Por que MGAs são a ponta da lança da IA em seguro", sub:"Estrutura enxuta, apetite próprio e necessidade de capacidade — a combinação ideal para adoção rápida.",
    author:"José Carlos de Paula", role:"CSO · WIR", time:"5 min", date:"28 · Mar · 2026",
    img:"assets/blog/post-03142.jpg", grad:"linear-gradient(135deg,#F8AD39,#3222E9)" },
  { id:5, cat:"Técnico", title:"LLMs não substituem motores de regras — eles os complementam", sub:"A arquitetura híbrida que a WIR usa para decisões críticas: quando deixar o modelo decidir e quando aplicar regra hard-coded.",
    author:"Head of AI", role:"ML · WIR", time:"9 min", date:"22 · Mar · 2026",
    img:"assets/blog/post-03131.jpg", grad:"linear-gradient(135deg,#3222E9,#7540AC)" },
  { id:6, cat:"Ensaio", title:"A falsa dicotomia entre velocidade e compliance", sub:"Como o debate do setor precisa mudar: não é velocidade OU compliance — é arquitetura certa.",
    author:"Nicholas Weiser", role:"CEO · WIR", time:"7 min", date:"15 · Mar · 2026",
    img:"assets/blog/post-03143.jpg", grad:"linear-gradient(135deg,#AE46C0,#F8AD39)" },
  { id:7, cat:"Mercado", title:"O custo invisível do straight-through processing mal feito", sub:"STP sem auditabilidade cria risco reputacional, regulatório e de carteira. Checklist do que medir antes de escalar.",
    author:"José Carlos de Paula", role:"CSO · WIR", time:"6 min", date:"08 · Mar · 2026",
    grad:"linear-gradient(135deg,#7540AC,#3222E9)" },
  { id:8, cat:"Caso", title:"Três formatos de PDF que quebravam submissões — e como resolvemos", sub:"Do OCR comum ao parsing semântico: o caminho técnico para elevar extração significativamente.",
    author:"Head of AI", role:"ML · WIR", time:"7 min", date:"01 · Mar · 2026",
    grad:"linear-gradient(135deg,#F8AD39,#FE8B77)" },
  { id:9, cat:"Técnico", title:"Observabilidade de agentes: o que monitorar em produção", sub:"Latência, precisão, drift, custo por decisão — o dashboard mínimo que toda seguradora deveria exigir.",
    author:"Head of AI", role:"ML · WIR", time:"8 min", date:"22 · Fev · 2026",
    grad:"linear-gradient(135deg,#3222E9,#FE8B77)" },
];

function BlogHero() {
  const hero = POSTS.find(p => p.hero);
  return (
    <section className="blhero">
      <div className="wrap">
        <div className="blhero__meta">
          <span>· Ideias · Edição 14</span>
          <span>· Publicado quinzenalmente</span>
          <span>· Atualizado 18 · Abr · 2026</span>
        </div>
        <div className="blhero__top">
          <div className="eyebrow">· Ideias</div>
          <h1 className="display blhero__mast">
            Leituras sobre<br/>
            <em>infra, seguro</em><br/>
            e decisão.
          </h1>
          <p className="blhero__sub">Ensaios, casos de uso e notas técnicas do time da WIR. Publicamos o que aprendemos — não o que vende.</p>
        </div>
        <article className="blhero__feature" onClick={()=>{}}>
          <div className="blhero__feature-img"
            style={hero.img
              ? { backgroundImage: `linear-gradient(180deg, rgba(11,10,8,0.15), rgba(11,10,8,0.65)), url(${hero.img})`, backgroundSize: "cover", backgroundPosition: "center" }
              : { background: hero.grad }}>
            <span className="blhero__feature-label">· {hero.cat.toLowerCase()} · editorial</span>
          </div>
          <div className="blhero__feature-body">
            <div className="blhero__feature-meta">
              <span className="blhero__cat">· {hero.cat}</span>
              <span>· {hero.time} de leitura</span>
              <span>· {hero.date}</span>
            </div>
            <h2 className="display blhero__feature-title">{hero.title}</h2>
            <p className="blhero__feature-sub">{hero.sub}</p>
            <div className="blhero__feature-by">
              <div className="blhero__avatar">{hero.author.split(" ").map(w=>w[0]).slice(0,2).join("")}</div>
              <div>
                <b>{hero.author}</b>
                <span>{hero.role}</span>
              </div>
              <a className="blhero__feature-cta" href="#">Ler o ensaio <span aria-hidden>→</span></a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function BlogFilter({ active, setActive, counts }) {
  const cats = ["Todos","Ensaio","Técnico","Caso","Mercado"];
  return (
    <div className="blfilter">
      <div className="wrap blfilter__inner">
        <div className="blfilter__left">
          <span className="eyebrow">· Filtros</span>
          {cats.map(c => (
            <button key={c}
              className={"blfilter__pill" + (active === c ? " is-active" : "")}
              onClick={()=>setActive(c)}>
              {c}
              <span className="blfilter__count">{counts[c] || 0}</span>
            </button>
          ))}
        </div>
        <div className="blfilter__right">
          <input type="text" placeholder="Buscar por título ou autor…" className="blfilter__search"/>
        </div>
      </div>
    </div>
  );
}

function BlogGrid({ posts }) {
  return (
    <section className="blgrid" data-reveal>
      <div className="wrap">
        <div className="blgrid__layout">
          <div className="blgrid__main">
            <div className="eyebrow" style={{marginBottom: 24}}>· {posts.length} artigos</div>
            <div className="blgrid__list">
              {posts.map((p,i) => (
                <article key={p.id} className={"blpost" + (i === 0 ? " blpost--big" : "")}>
                  <div className="blpost__img"
                    style={p.img
                      ? { backgroundImage: `linear-gradient(180deg, rgba(11,10,8,0.2), rgba(11,10,8,0.7)), url(${p.img})`, backgroundSize: "cover", backgroundPosition: "center" }
                      : { background: p.grad }}>
                    <span className="blpost__img-label">{p.cat}</span>
                    <span className="blpost__img-meta">· {p.time}</span>
                  </div>
                  <div className="blpost__body">
                    <div className="blpost__meta">
                      <span className="blpost__cat">· {p.cat}</span>
                      <span>· {p.time}</span>
                      <span>· {p.date}</span>
                    </div>
                    <h3 className="display blpost__title">{p.title}</h3>
                    <p className="blpost__sub">{p.sub}</p>
                    <div className="blpost__by">
                      <div className="blpost__avatar">{p.author.split(" ").map(w=>w[0]).slice(0,2).join("")}</div>
                      <div className="blpost__by-who">
                        <b>{p.author}</b>
                        <span>{p.role}</span>
                      </div>
                      <a className="blpost__cta" href="#">Ler <span aria-hidden>→</span></a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <aside className="blgrid__side">
            <div className="blside__card">
              <div className="eyebrow" style={{marginBottom: 16}}>· Em destaque</div>
              <ul className="blside__list">
                {POSTS.slice(0,4).map((p,i) => (
                  <li key={p.id}>
                    <div className="blside__num">/0{i+1}</div>
                    <div>
                      <div className="blside__title">{p.title}</div>
                      <div className="blside__meta">· {p.cat} · {p.time}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="blside__news">
              <div className="eyebrow eyebrow--onDark" style={{marginBottom: 20}}>· Newsletter</div>
              <h3 className="display blside__news-title">Notas do mercado,<br/><em>quinzenalmente.</em></h3>
              <p className="blside__news-sub">Ensaios curtos, 1 caso prático e leituras recomendadas. Sem marketing.</p>
              <form className="blside__news-form" onSubmit={(e)=>e.preventDefault()}>
                <input type="email" placeholder="seu@email.com"/>
                <button type="submit">Assinar <span aria-hidden>→</span></button>
              </form>
              <div className="blside__news-meta">· 2.400+ leitores · sem spam · cancelar quando quiser</div>
            </div>
            <div className="blside__tags">
              <div className="eyebrow" style={{marginBottom: 16}}>· Tópicos</div>
              <div className="blside__tags-row">
                {["underwriting","auditabilidade","LGPD","MGA","LLM","regulação","STP","integrations","observability","pricing","compliance","private-cloud"].map((t,i) => (
                  <a key={i} href="#" className="blside__tag">#{t}</a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function BlogClose() {
  return (
    <section className="blclose" data-reveal>
      <div className="wrap">
        <div className="blclose__inner">
          <div className="eyebrow">· Arquivo</div>
          <h2 className="display blclose__title">
            Quer <em>colaborar?</em>
          </h2>
          <p className="blclose__lede">
            Recebemos guest essays de operadores, reguladores e engenheiros do setor. Se você tem uma tese para defender, escreva para <b>ideias@wir.innovation</b>.
          </p>
        </div>
      </div>
    </section>
  );
}

function BlogPage() {
  useReveal();
  const [active, setActive] = React.useState("Todos");
  const posts = React.useMemo(() => {
    const list = POSTS.filter(p => !p.hero);
    if (active === "Todos") return list;
    return list.filter(p => p.cat === active);
  }, [active]);
  const counts = React.useMemo(() => {
    const c = { Todos: POSTS.length - 1 };
    POSTS.filter(p => !p.hero).forEach(p => { c[p.cat] = (c[p.cat] || 0) + 1; });
    return c;
  }, []);
  return (
    <>
      <BlogHero/>
      <BlogFilter active={active} setActive={setActive} counts={counts}/>
      <BlogGrid posts={posts}/>
      <BlogClose/>
    </>
  );
}

Object.assign(window, { BlogPage });
