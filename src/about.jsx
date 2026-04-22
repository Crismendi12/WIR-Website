/* ───────── Sobre · ensayo editorial ───────── */

function AboutHero() {
  return (
    <section className="abhero">
      <div className="wrap">
        <div className="abhero__meta">
          <span>· Ensaio / Abr 2026</span>
          <span>· Palavras: Equipe WIR</span>
          <span>· Tempo de leitura · 6 min</span>
        </div>
        <div className="abhero__grid">
          <div>
            <div className="eyebrow">· Sobre a WIR</div>
            <h1 className="display abhero__title">
              Construímos<br/>
              a <em>infra</em> que<br/>
              o seguro nunca teve.
            </h1>
          </div>
          <div className="abhero__portrait">
            <div className="abhero__photo" role="img" aria-label="Retrato dos fundadores">
              <span className="abhero__photo-label">IMAGE · Nicholas Weiser + Co-founder</span>
              <span className="abhero__photo-meta">B&amp;W · studio portrait · São Paulo · Mar 2026</span>
            </div>
          </div>
        </div>
        <p className="abhero__lede">
          A WIR não é uma startup de IA que decidiu mexer com seguro. É uma companhia fundada por operadores do setor — pessoas que passaram vinte anos dentro das maiores corretoras do mundo — que resolveram construir a infraestrutura que sempre precisaram.
        </p>
      </div>
    </section>
  );
}

function AboutEssay() {
  const paragraphs = [
    { k: "A tese", text: "O mercado de Seguros e Danos cresce dois dígitos ao ano. A estrutura das seguradoras, não. Corretoras emitem PDFs. Underwriters rabiscam planilhas. Comitês se reúnem para decidir sobre riscos que o cliente já esqueceu. A fricção é tão grande que virou aceitável — e é exatamente essa normalização que cria espaço para uma nova camada." },
    { k: "A decisão", text: "Em 2024, depois de quase duas décadas operando dentro de seguradoras e corretoras de Tier-1, decidimos parar de reclamar da infraestrutura e construir uma nova. Não um SaaS a mais. Não um chatbot. Uma camada de decisão auditável que opera dentro dos sistemas que já existem e devolve, em segundos, o que antes levava semanas." },
    { k: "O método", text: "Contratamos quem já viveu o problema — operadores, subscritores, atuários — e os sentamos ao lado de engenheiros de ML que vieram de fintech e de logística. A combinação é pouco comum no setor, mas é o que permite construir agentes que funcionam em produção, não em slide." },
    { k: "A promessa", text: "Seguro é, no fim, um contrato sobre decisões difíceis tomadas sob pressão. O papel da WIR não é remover o humano do processo — é devolver ao humano o que só ele pode fazer: julgamento. Tudo o mais — intake, enriquecimento, scoring, escrita — deve ser automático, auditável e rápido o suficiente para que a decisão chegue enquanto o cliente ainda está ouvindo." },
  ];
  return (
    <section className="abessay" data-reveal>
      <div className="wrap">
        <div className="abessay__grid">
          <div className="abessay__side">
            <div className="eyebrow">· O ensaio</div>
            <div className="abessay__pullquote display">
              "Não se resolve o seguro com <em>mais software</em>. Resolve-se com <em>infraestrutura</em>."
            </div>
            <div className="abessay__attr">
              <b>Nicholas Weiser</b>
              <span>CEO · Co-founder</span>
            </div>
          </div>
          <div className="abessay__content">
            {paragraphs.map((p,i) => (
              <div key={i} className="abessay__para">
                <div className="abessay__para-k">· 0{i+1} — {p.k}</div>
                <p className="abessay__para-t">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutTimeline() {
  const events = [
    { y: "2005", t: "Primeiros passos", d: "Fundadores começam carreiras em seguradoras globais — Aon, Lockton, Gallagher — liderando projetos de transformação digital." },
    { y: "2015", t: "O encontro", d: "Os futuros co-founders se cruzam em um projeto de automação de subscrição comercial em NY — e descobrem que compartilham a mesma frustração." },
    { y: "2020", t: "A hipótese", d: "COVID acelera digitalização forçada. Seguradoras aceitam automação como sobrevivência. O cenário regulatório começa a se abrir." },
    { y: "2024", t: "WIR é fundada", d: "Nicholas Weiser e José Carlos de Paula fundam a empresa entre São Paulo e a Bay Area. Primeiros 4 engineering hires vêm de Nubank, Stripe e Palantir." },
    { y: "2025", t: "v1.0 em produção", d: "Primeira seguradora Tier-1 entra em produção com o UCP. 47 dias de cotação viram 2,4 minutos." },
    { y: "2026", t: "Hoje · v26.2", d: "Quatro módulos em produção, operação em 47 mercados, 4 seguradoras Tier-1 ativas. Próximo passo: expansão europeia." },
  ];
  return (
    <section className="abtime" data-reveal>
      <div className="wrap">
        <div className="abtime__head">
          <div className="eyebrow">· Linha do tempo</div>
          <h2 className="display abtime__title">De dentro do setor.<br/><em>Para dentro do setor.</em></h2>
        </div>
        <div className="abtime__rail">
          {events.map((e,i) => (
            <div key={i} className="abtime__event">
              <div className="abtime__dot"/>
              <div className="abtime__year display">{e.y}</div>
              <div className="abtime__body">
                <div className="abtime__t">{e.t}</div>
                <p className="abtime__d">{e.d}</p>
              </div>
            </div>
          ))}
          <div className="abtime__line"/>
        </div>
      </div>
    </section>
  );
}

function AboutTeam() {
  const folks = [
    { name:"Nicholas Weiser", role:"CEO · Co-Founder", bio:"Operou 15+ anos em seguradoras e corretoras Tier-1 liderando transformação de subscrição comercial. Construiu equipes entre LatAm e US.", loc:"São Paulo", email:"nicholas@wirinnovation.ai", photo:"assets/team/nicholas.jpg", color:"var(--wir-blue)" },
    { name:"José Carlos de Paula", role:"CSO / COO · Co-Founder", bio:"Estratégia e operações. Viveu o desafio de escalar underwriting dentro de estruturas tradicionais — agora o resolve do lado da infraestrutura.", loc:"São Paulo", email:"jcdepaula@wirinnovation.ai", photo:"assets/team/jc.jpg", color:"var(--wir-purple)" },
    { name:"Head of AI", role:"Liderança técnica", bio:"PhD. Publicações em fairness e explainability para modelos regulados. Experiência em fintech e decisão automatizada.", loc:"Bay Area", email:"ai@wirinnovation.ai", photo:null, color:"var(--wir-coral)" },
    { name:"Head of Delivery", role:"Customer Success", bio:"Lidera os deploys dentro das seguradoras — do kickoff ao primeiro quote em produção. Experiência em consultoria estratégica e InsurTech.", loc:"São Paulo", email:"delivery@wirinnovation.ai", photo:null, color:"var(--wir-gold)" },
  ];
  return (
    <section className="abteam" data-reveal>
      <div className="wrap">
        <div className="abteam__head">
          <div className="eyebrow">· Time fundador</div>
          <h2 className="display abteam__title">57 anos combinados <em>no setor.</em></h2>
        </div>
        <div className="abteam__grid">
          {folks.map((f,i) => (
            <div key={i} className="abteam__card">
              <div className="abteam__photo"
                style={f.photo
                  ? { backgroundImage: `url(${f.photo})`, backgroundSize: "cover", backgroundPosition: "center" }
                  : { background: `linear-gradient(135deg, ${f.color}, var(--ink))` }}>
                {!f.photo && <span className="abteam__initials display">{f.name.split(" ").map(w=>w[0]).slice(0,2).join("")}</span>}
                {f.photo && <span className="abteam__photo-overlay"/>}
              </div>
              <div className="abteam__body">
                <div className="abteam__name display">{f.name}</div>
                <div className="abteam__role">{f.role}</div>
                <p className="abteam__bio">{f.bio}</p>
                <div className="abteam__loc">· {f.loc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPartners() {
  return (
    <section className="abpart" data-reveal>
      <div className="wrap">
        <div className="abpart__head">
          <div className="eyebrow eyebrow--onDark">· Parceiros estratégicos</div>
          <h2 className="display abpart__title">Onde a <em>força de vendas</em> encontra o <em>músculo de engenharia.</em></h2>
        </div>
        <div className="abpart__grid">
          <div className="abpart__card">
            <div className="abpart__logo display">Mahway</div>
            <div className="abpart__tag">Distribuição · Brasil</div>
            <p>Corretora de referência em risco corporativo. Traz a rede comercial e o domínio regulatório local. Parceria estratégica exclusiva em LatAm.</p>
            <div className="abpart__meta">
              <span>· Fundada 1998</span>
              <span>· 400+ clientes</span>
              <span>· R$ 2B em prêmio anual</span>
            </div>
          </div>
          <div className="abpart__card">
            <div className="abpart__logo display">Avante</div>
            <div className="abpart__tag">Engenharia · US</div>
            <p>Venture studio focado em infra regulada. Aporta a capacidade de engenharia, compliance e go-to-market internacional.</p>
            <div className="abpart__meta">
              <span>· Fundado 2020</span>
              <span>· 12 portfolio companies</span>
              <span>· $140M AUM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutValues() {
  const vals = [
    { k:"01", t:"Respeito ao ofício", d:"Underwriting é artesanato. A WIR não quer substituir quem decide — quer dar a eles instrumentos melhores.", c:"#1C17FF" },
    { k:"02", t:"Auditabilidade acima de tudo", d:"Nenhuma decisão sai sem trilha. Modelo, versão, confiança, inputs, timestamp — tudo exportável, tudo imutável.", c:"#A44F98" },
    { k:"03", t:"Humano no comando", d:"IA que toma decisão crítica sem supervisão é um problema. A WIR foi desenhada com HITL como princípio, não como feature.", c:"#EE7D48" },
    { k:"04", t:"Compliance por design", d:"LGPD, HIPAA, SOC 2 Type II. Não são checkboxes depois do produto — são a fundação.", c:"#F9B336" },
    { k:"05", t:"Velocidade é respeito", d:"O cliente final tem pressa. O corretor tem pressa. Se a decisão demora, o seguro falha antes de ser vendido.", c:"#4D38C0" },
    { k:"06", t:"Infra, não app", d:"Um app dura um ciclo de inovação. Uma infraestrutura dura décadas. A WIR foi pensada para sobreviver ao próximo hype.", c:"#C25F7E" },
  ];
  return (
    <section className="abvals" data-reveal>
      <div className="wrap">
        <div className="abvals__head">
          <div className="eyebrow">· Princípios</div>
          <h2 className="display abvals__title">Seis ideias.<br/><em>Nenhuma negociável.</em></h2>
        </div>
        <div className="abvals__grid">
          {vals.map((v,i) => (
            <div key={i} className="abvals__cell" style={{"--c": v.c}}>
              <div className="abvals__k num">{v.k}</div>
              <div className="abvals__t display">{v.t}</div>
              <p className="abvals__d">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutFAQ() {
  const qs = [
    { q:"Quanto tempo até a primeira decisão em produção?",
      a:"2 a 4 semanas para o primeiro agente em piloto dentro do seu ambiente, com conectores prontos para Guidewire, Duck Creek e Majesco. Escalada para produção plena costuma acontecer no trimestre seguinte." },
    { q:"A WIR substitui meu core de apólices?",
      a:"Não. A WIR é uma camada de decisão — escuta inputs, aplica regras e modelos, e devolve resultados estruturados ao seu core via REST ou GraphQL. O sistema de registro continua sendo o seu." },
    { q:"Como a supervisão humana e a auditoria funcionam?",
      a:"Toda decisão de IA traz explicação, versão do modelo, confiança e, quando configurado, um passo de human-in-the-loop. O log de auditoria é imutável e exportável — SOC 2 Type II, LGPD e HIPAA compliant." },
    { q:"Posso hospedar on-premise ou em private cloud?",
      a:"Sim. SaaS multi-tenant, private cloud (AWS / Azure / GCP) ou on-premise atrás do seu firewall. Deploy, observabilidade e secrets management ficam sob o seu controle." },
    { q:"Como o pricing é estruturado?",
      a:"Por volume de decisões processadas, com tier base + preço unitário decrescente. Piloto 4 semanas com escopo fechado, sem custo de implementação. Fale com a equipe para uma proposta." },
    { q:"Vocês trabalham com que tipo de seguradora?",
      a:"Hoje operamos com Tier-1 em P&C comercial, vida e benefícios. Módulos também se aplicam a MGAs, programas e resseguro. Não trabalhamos com seguro residencial massificado." },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section className="abfaq" data-reveal>
      <div className="wrap">
        <div className="abfaq__head">
          <div className="eyebrow">· Perguntas frequentes</div>
          <h2 className="display abfaq__title">O que as equipes de TI e risco <em>sempre perguntam.</em></h2>
        </div>
        <div className="abfaq__list">
          {qs.map((x, idx) => {
            const isOpen = open === idx;
            return (
              <div key={idx} className={"abfaq__item" + (isOpen ? " is-open" : "")}>
                <button className="abfaq__q" onClick={()=>setOpen(isOpen ? -1 : idx)}>
                  <span className="abfaq__idx num">· {String(idx+1).padStart(2,"0")}</span>
                  <span className="abfaq__qt">{x.q}</span>
                  <span className="abfaq__chev" aria-hidden>{isOpen ? "−" : "+"}</span>
                </button>
                <div className="abfaq__a" style={{maxHeight: isOpen ? 400 : 0}}>
                  <p>{x.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AboutClose({ go }) {
  return (
    <section className="abclose" data-reveal>
      <div className="wrap">
        <div className="abclose__inner">
          <div className="eyebrow eyebrow--onDark">· Vem construir</div>
          <h2 className="display abclose__title">
            Estamos <em>contratando.</em>
          </h2>
          <p className="abclose__lede">
            Engineering, ML, delivery e GTM. Posições remotas, SP, NYC e Bay Area. Se você já operou seguro por dentro ou construiu infra regulada em outro setor — temos cadeira aberta.
          </p>
          <div className="abclose__actions">
            <a className="btn btn--solid btn--onDark" href="#" onClick={(e)=>e.preventDefault()}>
              Ver carreiras <span className="btn__arrow">→</span>
            </a>
            <button className="btn btn--ghost btn--onDark" onClick={()=>go("contact")}>
              Falar com a equipe <span className="btn__arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPage({ go }) {
  useReveal();
  return (
    <>
      <AboutHero/>
      <AboutEssay/>
      <AboutTimeline/>
      <AboutTeam/>
      <AboutValues/>
      <AboutPartners/>
      <AboutFAQ/>
      <AboutClose go={go}/>
    </>
  );
}

Object.assign(window, { AboutPage });
