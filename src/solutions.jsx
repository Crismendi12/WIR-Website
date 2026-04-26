/* ───────── Soluções · catalog editorial ───────── */

const SOLS = [
  {
    k: "SSA", title: "Smart Sales", c: "#1C17FF", status: "prod",
    tag: "Inteligência de distribuição",
    lede: "Pipeline de IA que pontua, roteia e converte leads — antes que a concorrência responda.",
    full: "A SSA atua na camada de distribuição: escuta sinais de múltiplos canais (site, parceiros, CRM, intake de brokers), pontua cada oportunidade contra o apetite da casa, encaminha para o underwriter certo com o contexto completo e devolve métricas de conversão em tempo real.",
    capabilities: [
      { t: "Lead scoring em tempo real",
        d: "Modelos de ML calibrados a cada apetite. Cada lead recebe probabilidade de conversão, ticket esperado e risco ajustado." },
      { t: "Roteamento inteligente",
        d: "Distribuição automática por região, produto, histórico do broker e carga da equipe. Zero filas manuais." },
      { t: "Análise preditiva de pipeline",
        d: "Previsão de closing rate por semana. Identificação de leads em risco de perda. Next-best-action por conta." },
      { t: "Trilha de atribuição",
        d: "Todo lead traz canal de origem, pontuação inicial, handoffs e resultado. Auditoria fechada." },
    ],
    metrics: [
      { v: "Real-time", l: "Scoring" },
      { v: "Calibrado", l: "Ao apetite" },
      { v: "Always-on", l: "Pipeline ativo" },
      { v: "Auditável", l: "Cada handoff" },
    ],
    cases: [
      "Seguradora Tier-1 · LatAm · ampliação do volume qualificado",
      "MGA · US · redução do handoff broker → underwriter em ordens de grandeza",
      "Broker corporativo · LatAm · capacidade ampliada sem novo headcount",
    ],
  },
  {
    k: "UCP", title: "Underwriter Co-Pilot", c: "#A44F98", status: "prod",
    tag: "Risco & cotação instantânea",
    lede: "Extrai dados, valida documentos, aplica 300+ fatores e devolve cotação com explicação escrita.",
    full: "O UCP é o assistente que acompanha o underwriter em cada submissão. Lê PDFs, e-mails e formulários estruturados, cruza com fontes externas, aplica o motor de regras da casa e devolve uma cotação com explicação em linguagem natural e trilha de decisão. O humano continua no comando — só que com o trabalho chato já feito.",
    capabilities: [
      { t: "Intake multi-formato",
        d: "OCR + parsing semântico para PDF, e-mail, XLSX, JSON e APIs. Extração de entidades calibrada por ramo." },
      { t: "Motor multi-fator",
        d: "Configurado ao seu apetite: exposure, limites, histórico, setor, geografia, compliance. Versionado e auditável." },
      { t: "Explicabilidade escrita",
        d: "Cada decisão vem com justificativa em linguagem natural: por que aprovou, por que escalou, quais riscos residuais." },
      { t: "Human-in-the-loop",
        d: "Casos fora do apetite ou de baixa confiança vão automaticamente para revisão humana, com todo o contexto pré-carregado." },
    ],
    metrics: [
      { v: "Minutos",     l: "Decisão" },
      { v: "Multi-fator", l: "Motor" },
      { v: "Explicável",  l: "Saída" },
      { v: "Straight-through", l: "Padrão" },
    ],
    cases: [
      "Seguradora comercial · ciclos de cotação reduzidos de semanas para minutos",
      "Programa MGA · capacidade de subscrição ampliada por underwriter",
      "Resseguradora · redução significativa de re-work em cotação",
    ],
  },
  {
    k: "XBA", title: "X-sell Brokers", c: "#EE7D48", status: "dev",
    tag: "Automação de cross-sell",
    lede: "Analisa portfólios, identifica oportunidades e dispara campanhas — penetração e retenção crescem juntas.",
    full: "O XBA olha para a base instalada e pergunta: onde está o dinheiro que você ainda não cobrou? Mapeia cada cliente contra o catálogo de produtos, identifica gaps de cobertura, calcula next-best-action e dispara campanhas multicanal com atribuição fechada de ROI.",
    capabilities: [
      { t: "Mapeamento de portfólio",
        d: "Visão cliente × produto × exposição. Identifica gaps de cobertura e oportunidades de upgrade em segundos." },
      { t: "Scoring de upsell",
        d: "Modelo próprio de propensity baseado em sinistralidade, tempo de casa, eventos de vida e setor." },
      { t: "Campanhas multi-canal",
        d: "E-mail, WhatsApp, SMS, call center e portal do broker — orquestrados com cadência e trilha de atribuição." },
      { t: "Retenção preditiva",
        d: "Identifica contas em risco de churn 90 dias antes da renovação e dispara playbook de retenção." },
    ],
    metrics: [
      { v: "+Upsell", l: "Penetração" },
      { v: "−Churn", l: "Retenção" },
      { v: "Multi", l: "Canais orquestrados" },
      { v: "ROI fechado", l: "Atribuição" },
    ],
    cases: [
      "Corretora nacional · expansão de penetração em carteira instalada",
      "Seguradora vida · redução de churn via retenção preditiva",
      "MGA especializada · playbook automático de renovação ativa",
    ],
  },
  {
    k: "SNB", title: "SDR New Business", c: "#F9B336", status: "dev",
    tag: "Outbound inteligente",
    lede: "Qualifica prospects, dispara outreach multicanal e agenda reuniões de alto valor.",
    full: "O SNB é o seu motor de new business 24/7. Identifica ICPs, enriquece dados, prioriza contas pelo fit com o seu apetite, dispara sequências multi-canal e agenda reuniões qualificadas na agenda do vendedor certo. Pipeline sem contratar SDRs.",
    capabilities: [
      { t: "ICP scoring",
        d: "Modelo calibrado ao seu histórico: quem fecha, quem não fecha, quem renova. Priorização automática do universo." },
      { t: "Sequências adaptativas",
        d: "E-mail, LinkedIn, voice drop e SMS com timing e copy que se ajustam ao engajamento do prospect." },
      { t: "Agendamento inteligente",
        d: "Calendário compartilhado com scoring de intenção — só reuniões de alto valor chegam na agenda do executive." },
      { t: "Feedback loop",
        d: "Cada reunião gerada alimenta o modelo. ICP fica mais preciso a cada ciclo, sem retrain manual." },
    ],
    metrics: [
      { v: "Qualif.", l: "Reuniões agendadas" },
      { v: "−CAC", l: "Custo de aquisição" },
      { v: "+Pipe", l: "Pipeline gerado" },
      { v: "Always-on", l: "Operação" },
    ],
    cases: [
      "MGA commercial · pipeline coverage ampliado sem contratar SDR",
      "InsurTech early stage · reuniões qualificadas como output contínuo",
      "Seguradora corporate · outbound escalado entre múltiplos mercados",
    ],
  },
];

function SolHero({ go }) {
  const [hover, setHover] = React.useState(null);
  return (
    <section className="solhero">
      <div className="wrap">
        <div className="solhero__meta">
          <span>· Plataforma · IA unificada</span>
          <span>· Plug-and-play · sem TI</span>
          <span>· LGPD ready</span>
        </div>
        <div className="solhero__top">
          <div className="eyebrow">· Soluções</div>
          <h1 className="display solhero__title">
            Quatro produtos.<br/>
            <em>Uma única camada de IA.</em>
          </h1>
          <p className="solhero__lede">
            Inteligência plug-and-play que se conecta aos seus sistemas existentes. Sem migração, sem interrupções — apenas transformação imediata. SSA e UCP em produção; XBA e SNB em desenvolvimento.
          </p>
        </div>
        <div className="solhero__grid">
          {SOLS.map((s,i) => (
            <a key={s.k} href={"#s-"+s.k.toLowerCase()}
              className={"solhero__card" + (hover === i ? " is-hover" : "") + (s.status === "dev" ? " is-dev" : "")}
              onMouseEnter={()=>setHover(i)}
              onMouseLeave={()=>setHover(null)}
              style={{"--c": s.c}}>
              <div className="solhero__card-status">
                {s.status === "prod" ? "· Em produção" : "· Em desenvolvimento"}
              </div>
              <div className="solhero__card-k display">{s.k}</div>
              <div className="solhero__card-t">{s.title}</div>
              <div className="solhero__card-tag">{s.tag}</div>
              <div className="solhero__card-arrow">↓</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// Workflow Inteligente de Subscrição (SSA + UCP) — institutional flow
function SolWorkflow() {
  const stages = [
    { k:"01", t:"Application Intake",      d:"Entrada multicanal e validação automática · API · Portal · Upload · validação em tempo real.", c:"#3B82F6" },
    { k:"02", t:"AI Document Extraction",  d:"Leitura inteligente de documentos · extração automática de campos com alta precisão.",        c:"#7540AC" },
    { k:"03", t:"Business Intelligence",   d:"Enriquecimento e contexto do corretor · score · histórico de conversão · priorização.",       c:"#A44F98" },
    { k:"04", t:"Risk Assessment",         d:"Motor de risco e fraude · score de risco · probabilidade · decisão automatizada.",             c:"#EE7D48", tag:"SSA" },
    { k:"05", t:"Pricing Engine",          d:"Precificação dinâmica · ajuste de risco · cálculo automático de prêmio · output instantâneo.", c:"#F8AD39", tag:"UCP" },
    { k:"06", t:"Decision & Prioritization", d:"Orquestração final e fila do underwriter · SLA visível · review ou bind.",                  c:"#10B981" },
  ];
  return (
    <section className="solflow" data-reveal>
      <div className="wrap">
        <div className="solflow__head">
          <div className="eyebrow">· Workflow Inteligente de Subscrição</div>
          <h2 className="display solflow__title">
            <em>SSA + UCP</em> em produção.<br/>
            Seis estágios. Um único core.
          </h2>
          <p className="solflow__sub">A camada de IA que opera entre o portal de cotações e o seu core de apólice — sem substituir nenhum dos dois.</p>
        </div>
        <div className="solflow__grid">
          {stages.map((s,i) => (
            <div key={i} className="solflow__stage" style={{"--c": s.c}}>
              <div className="solflow__stage-head">
                <span className="solflow__stage-k">{s.k}</span>
                {s.tag && <span className="solflow__stage-tag">{s.tag}</span>}
              </div>
              <div className="solflow__stage-t">{s.t}</div>
              <div className="solflow__stage-d">{s.d}</div>
              <div className="solflow__stage-arrow" aria-hidden>{i < stages.length - 1 ? "→" : "✓"}</div>
            </div>
          ))}
        </div>
        <div className="solflow__legend">
          <span className="solflow__legend-dot" style={{background:"#10B981"}}/>
          Workflow ativo · SSA + UCP cobrem do intake à decisão · XBA e SNB em desenvolvimento
        </div>
      </div>
    </section>
  );
}

function SolDeep() {
  const [active, setActive] = React.useState(0);
  const panelRef = React.useRef(null);

  React.useEffect(() => {
    const onScroll = () => {
      const panels = document.querySelectorAll("[data-sol-panel]");
      let bestI = 0, bestY = Infinity;
      panels.forEach((p, i) => {
        const r = p.getBoundingClientRect();
        const y = Math.abs(r.top - 180);
        if (r.top < window.innerHeight * 0.5 && y < bestY) {
          bestY = y; bestI = i;
        }
      });
      setActive(bestI);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="soldeep">
      <div className="wrap soldeep__wrap">
        <aside className="soldeep__nav">
          <div className="eyebrow" style={{marginBottom: 24}}>· Navegação</div>
          <ul>
            {SOLS.map((s,i) => (
              <li key={s.k} className={active === i ? "is-active" : ""}>
                <a href={"#s-"+s.k.toLowerCase()} style={{"--c": s.c}}>
                  <span className="soldeep__nav-k">{s.k}</span>
                  <span className="soldeep__nav-t">{s.title}</span>
                  <span className="soldeep__nav-dot" style={{background: s.c}}/>
                </a>
              </li>
            ))}
          </ul>
          <div className="soldeep__nav-progress">
            <div className="soldeep__nav-bar" style={{transform:`scaleY(${(active+1)/SOLS.length})`}}/>
          </div>
        </aside>
        <div className="soldeep__content" ref={panelRef}>
          {SOLS.map((s,i) => (
            <article key={s.k} id={"s-"+s.k.toLowerCase()}
              data-sol-panel
              className="soldeep__panel"
              style={{"--pc": s.c}}>
              <header className="soldeep__header">
                <div className="soldeep__num">· 0{i+1} / 04</div>
                <div className="soldeep__code display">{s.k}</div>
                <div className="soldeep__tag">{s.tag}</div>
                <h2 className="display soldeep__title">{s.title}</h2>
                <p className="soldeep__lede">{s.lede}</p>
                <p className="soldeep__full">{s.full}</p>
              </header>
              <div className="soldeep__caps">
                <div className="soldeep__caps-k">· Capacidades</div>
                <div className="soldeep__caps-grid">
                  {s.capabilities.map((c,j) => (
                    <div key={j} className="soldeep__cap">
                      <div className="soldeep__cap-n num">0{j+1}</div>
                      <div className="soldeep__cap-t">{c.t}</div>
                      <p className="soldeep__cap-d">{c.d}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="soldeep__metrics">
                {s.metrics.map((m,j) => (
                  <div key={j} className="soldeep__metric">
                    <b style={{color: s.c}}>{m.v}</b>
                    <span>{m.l}</span>
                  </div>
                ))}
              </div>
              <div className="soldeep__cases">
                <div className="soldeep__cases-k">· Casos de uso em produção</div>
                <ul>
                  {s.cases.map((c,j) => (
                    <li key={j}>
                      <span className="soldeep__case-n num">/0{j+1}</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolIntegrations() {
  const tiers = [
    { k: "Core de apólice",        d: "Conectamos aos principais sistemas de policy administration usados pelas seguradoras Tier-1." },
    { k: "CRM · Distribuição",     d: "Integração bidirecional com plataformas de CRM e portais de corretores." },
    { k: "Dados & Analytics",      d: "Saída estruturada para data warehouses, BI e ferramentas de analytics da casa." },
    { k: "Comunicação",            d: "Notificações e handoffs em e-mail, mensageria corporativa e canais do broker." },
    { k: "Compliance & KYC",       d: "Conexões a fontes externas de validação, KYC, sanctions screening e enriquecimento." },
  ];
  return (
    <section className="solintg" data-reveal>
      <div className="wrap">
        <div className="solintg__head">
          <div className="eyebrow">· Integrações</div>
          <h2 className="display solintg__title">Plataforma <em>plug-and-play</em><br/>dentro da sua stack.</h2>
          <p className="solintg__sub">A WIR não pede para você trocar o core. Operamos como camada de IA entre os sistemas que você já usa — autenticação SSO, APIs REST e webhooks bidirecionais. As integrações específicas são desenhadas no escopo do projeto, com base na sua stack atual.</p>
        </div>
        <div className="solintg__grid">
          {tiers.map((t,i) => (
            <div key={i} className="solintg__tier">
              <div className="solintg__tier-k">· 0{i+1}</div>
              <div className="solintg__tier-t">{t.k}</div>
              <div className="solintg__tier-d">{t.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolPricing({ go }) {
  const plans = [
    { k:"Implementação", tag:"Setup único · 3 a 12 meses", price:"Projeto", desc:"Build dos módulos dentro do seu ambiente: integração, testes, ajustes ao apetite e go-live. Preço fechado, escopo claro, KPIs acordados antes de começar.", features:["1 a 2 módulos em produção","Integração com seu core de apólice","Motor calibrado ao seu manual de subscrição","Treinamento do time de UW e TI","Relatório executivo + handoff técnico"], cta:"Entre em contato para saber mais", hi:false },
    { k:"SaaS", tag:"Operação contínua · pós go-live", price:"Por decisão processada", desc:"Operação em produção depois do go-live. Modelo de cobrança calibrado ao volume de cada cliente — sem taxa fixa, sem surprise billing.", features:["Módulos ativos em produção","Modelo de cobrança por volume","SLA de uptime e latência","Suporte dedicado + observabilidade","Customizações de modelo contínuas","Treinamento recorrente"], cta:"Entre em contato para saber mais", hi:true },
  ];
  return (
    <section className="solprice" data-reveal>
      <div className="wrap">
        <div className="solprice__head">
          <div className="eyebrow">· 06 — Pricing</div>
          <h2 className="display solprice__title">Duas fases.<br/><em>Uma parceria de longo prazo.</em></h2>
          <p className="solprice__sub">Construímos primeiro, cobrimos por uso depois. Sem free pilot — projeto tem escopo, deadline e custo acordados antes de começar. Quando o módulo está em produção, o SaaS cobra por volume de decisões.</p>
        </div>
        <div className="solprice__grid solprice__grid--2">
          {plans.map((p,i) => (
            <div key={p.k} className={"solprice__plan" + (p.hi ? " is-hi" : "")}>
              <div className="solprice__plan-tag">{p.tag}</div>
              <div className="solprice__plan-k display">{p.k}</div>
              <div className="solprice__plan-price display">{p.price}</div>
              <p className="solprice__plan-desc">{p.desc}</p>
              <ul>
                {p.features.map((f,j) => (
                  <li key={j}><span className="solprice__plan-bu"/>{f}</li>
                ))}
              </ul>
              <button className={"btn " + (p.hi ? "btn--solid" : "btn--ghost")}
                onClick={()=>go("contact")}>
                {p.cta} <span className="btn__arrow">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolClosing({ go }) {
  return (
    <section className="solclose" data-reveal>
      <div className="wrap">
        <div className="solclose__grid">
          <div>
            <div className="eyebrow eyebrow--onDark">· Próximo passo</div>
            <h2 className="display solclose__title">
              Sua equipe tem o<br/>
              <em>conhecimento.</em><br/>
              A WIR Innovation dá a<br/>
              <em>Plataforma de IA<br/>para ESCALAR.</em>
            </h2>
          </div>
          <div className="solclose__r">
            <p>Começamos com um projeto de implementação — 3 a 12 meses, escopo e preço fechados, 1 ou 2 módulos em produção dentro do seu ambiente. Depois do go-live, a operação vira SaaS por volume de decisões processadas, calibrado à sua realidade.</p>
            <div className="solclose__actions">
              <button className="btn btn--solid btn--onDark" onClick={()=>go("contact")}>
                Entre em contato para saber mais <span className="btn__arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionsPage({ go }) {
  useReveal();
  return (
    <>
      <SolHero go={go}/>
      <SolWorkflow/>
      <SolDeep/>
      <SolIntegrations/>
      <SolPricing go={go}/>
      <SolClosing go={go}/>
    </>
  );
}

Object.assign(window, { SolutionsPage });
