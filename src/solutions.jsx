/* ───────── Soluções · catalog editorial ───────── */

const SOLS = [
  {
    k: "SSA", title: "Smart Sales", c: "#1C17FF",
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
    k: "UCP", title: "Underwriter Co-Pilot", c: "#A44F98",
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
    k: "XBA", title: "X-sell Brokers", c: "#EE7D48",
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
    k: "SNB", title: "SDR New Business", c: "#F9B336",
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
          <span>· Plataforma · 04 módulos</span>
          <span>· Arquitetura modular</span>
          <span>· LGPD · SOC 2 (em processo)</span>
        </div>
        <div className="solhero__top">
          <div className="eyebrow">· Soluções</div>
          <h1 className="display solhero__title">
            Quatro agentes.<br/>
            <em>Um core de decisão.</em>
          </h1>
          <p className="solhero__lede">
            A WIR não é uma ferramenta — é um stack. Cada agente resolve um movimento do ciclo comercial, operando dentro dos seus sistemas e escrevendo trilha auditável para cada decisão.
          </p>
        </div>
        <div className="solhero__grid">
          {SOLS.map((s,i) => (
            <a key={s.k} href={"#s-"+s.k.toLowerCase()}
              className={"solhero__card" + (hover === i ? " is-hover" : "")}
              onMouseEnter={()=>setHover(i)}
              onMouseLeave={()=>setHover(null)}
              style={{"--c": s.c}}>
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
    { k: "Cores de apólice", items: ["Guidewire","Duck Creek","Majesco","Sapiens","Insurity","Tia"] },
    { k: "CRM · Distribuição", items: ["Salesforce","HubSpot","Pipedrive","Dynamics","Zendesk","Totvs"] },
    { k: "Dados & Analytics", items: ["Snowflake","BigQuery","Databricks","Redshift","Looker","Tableau"] },
    { k: "Comunicação", items: ["Slack","Teams","WhatsApp","Twilio","Gmail","Outlook"] },
    { k: "Compliance & KYC", items: ["Onfido","Trulioo","Alloy","LexisNexis","Equifax","Serasa"] },
  ];
  return (
    <section className="solintg" data-reveal>
      <div className="wrap">
        <div className="solintg__head">
          <div className="eyebrow">· 05 — Integrações</div>
          <h2 className="display solintg__title">30+ conectores prontos.<br/><em>API-first.</em></h2>
          <p className="solintg__sub">A WIR vive dentro da sua stack. Autenticação SSO, webhooks bidirecionais, SDKs para Python/Node/Go e suporte a eventos via Kafka ou RabbitMQ.</p>
        </div>
        <div className="solintg__grid">
          {tiers.map((t,i) => (
            <div key={i} className="solintg__tier">
              <div className="solintg__tier-k">· 0{i+1} — {t.k}</div>
              <div className="solintg__tier-row">
                {t.items.map((n,j) => <div key={j} className="solintg__chip">{n}</div>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolPricing({ go }) {
  const plans = [
    { k:"Implementação", tag:"Setup único · 3 a 6 meses", price:"Projeto", desc:"Build do módulo dentro do seu ambiente: integração, testes, ajustes ao apetite e go-live. Preço fechado, escopo claro, KPIs acordados antes de começar.", features:["1 a 2 módulos em produção","Integração com seu core (Guidewire, Duck Creek, Majesco)","Motor calibrado ao seu manual de subscrição","Treinamento do time de UW e TI","Relatório executivo + handoff técnico"], cta:"Conversar sobre escopo", hi:false },
    { k:"SaaS", tag:"Operação contínua · pós go-live", price:"Por decisão processada", desc:"Operação em produção depois do go-live. Preço unitário decrescente por volume — quanto mais decisões, menos custa cada uma. Sem taxa fixa, sem surprise billing.", features:["Todos os módulos ativos","Pricing tierizado por volume","SLA de uptime e latência","Suporte dedicado + observabilidade","Customizações de modelo contínuas","Treinamento recorrente"], cta:"Ver pricing por volume", hi:true },
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
              Escolha o agente que<br/>
              mais <em>dói hoje</em>.
            </h2>
          </div>
          <div className="solclose__r">
            <p>Começamos com um projeto de implementação — 3 a 6 meses, escopo e preço fechados, 1 ou 2 módulos em produção dentro do seu ambiente. Depois do go-live, a operação vira SaaS por volume de decisões.</p>
            <div className="solclose__actions">
              <button className="btn btn--solid btn--onDark" onClick={()=>go("contact")}>
                Agendar conversa <span className="btn__arrow">→</span>
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
      <SolDeep/>
      <SolIntegrations/>
      <SolPricing go={go}/>
      <SolClosing go={go}/>
    </>
  );
}

Object.assign(window, { SolutionsPage });
