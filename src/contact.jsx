/* ───────── Contato · humano + steps ───────── */

function ContactClocks() {
  const [now, setNow] = React.useState(new Date());
  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const offices = [
    { city:"São Paulo",   tz:"America/Sao_Paulo",  addr:"Av. Faria Lima, 3500 · 18º" },
    { city:"New York",    tz:"America/New_York",   addr:"345 Park Avenue · 32nd Fl" },
    { city:"Silicon Valley", tz:"America/Los_Angeles", addr:"California · EUA"       },
  ];
  const fmt = (tz) => {
    try {
      return new Intl.DateTimeFormat("pt-BR", { timeZone: tz, hour:"2-digit", minute:"2-digit", second:"2-digit", hour12:false }).format(now);
    } catch { return "--:--:--"; }
  };
  return (
    <div className="ctclocks">
      {offices.map((o,i) => (
        <div key={i} className="ctclock">
          <div className="ctclock__city">{o.city}</div>
          <div className="ctclock__time num">{fmt(o.tz)}</div>
          <div className="ctclock__addr">{o.addr}</div>
        </div>
      ))}
    </div>
  );
}

function ContactHero() {
  return (
    <section className="cthero">
      <div className="wrap">
        <div className="cthero__meta">
          <span>· Falar com nossos sócios</span>
          <span>· Resposta em até 24h úteis</span>
          <span>· Conversa estratégica · não comercial</span>
        </div>
        <div className="cthero__grid">
          <div>
            <div className="eyebrow">· Próxima conversa</div>
            <h1 className="display cthero__title">
              Vamos conversar<br/>
              sobre como <em>escalar<br/>
              o seu negócio?</em>
            </h1>
            <p className="cthero__lede">
              Cada seguradora opera diferente. Em uma conversa de 30 min com nossos sócios, calibramos o que faz sentido para a sua realidade — volume, custo atual, apetite e estrutura — e desenhamos juntos se um projeto de implementação se justifica.
            </p>
          </div>
          <ContactClocks/>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({
    interest: "", role: "", company: "", size: "",
    name: "", email: "", phone: "", notes: "",
  });
  const update = (k, v) => setData(d => ({ ...d, [k]: v }));

  const interests = [
    { k:"SSA", t:"Smart Sales",          d:"Distribuição + lead scoring",   c:"#1C17FF" },
    { k:"UCP", t:"Underwriter Co-Pilot", d:"Subscrição + cotação",          c:"#A44F98" },
  ];
  const roles = [
    "C-level (CEO / COO / CIO)",
    "Head de Subscrição",
    "Head de TI / Arquitetura",
    "Head de Distribuição",
    "Gerente de produto",
    "Consultor / advisory",
    "Outro",
  ];
  const sizes = [
    "MGA (até R$ 200M prêmio)",
    "Seguradora média (R$ 200M – R$ 2B)",
    "Tier-1 (R$ 2B+)",
    "Resseguradora",
    "Corretora corporativa",
    "Outro",
  ];

  const canNext = () => {
    if (step === 0) return !!data.interest;
    if (step === 1) return !!data.role && !!data.company && !!data.size;
    if (step === 2) return !!data.name && !!data.email;
    return false;
  };

  const [submitted, setSubmitted] = React.useState(false);

  // Submit handler: opens user's e-mail client with pre-filled message to contato@wirinnovation.ai
  // Until a server-side endpoint (Formspree/N8N webhook) is configured, this guarantees the lead actually reaches us.
  const handleSubmit = () => {
    const interestLabel = (interests.find(x => x.k === data.interest) || {}).t || data.interest;
    const subject = `[WIR · novo contato] ${data.name} · ${data.company}`;
    const body =
`Nome: ${data.name}
E-mail: ${data.email}
Telefone: ${data.phone || "—"}

Empresa: ${data.company}
Porte: ${data.size}
Papel: ${data.role}

Interesse: ${interestLabel} (${data.interest})

Contexto:
${data.notes || "(sem contexto adicional)"}

—
Enviado pelo formulário do site wirinnovation.ai`;
    const mailto = `mailto:contato@wirinnovation.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="ctform" data-reveal>
        <div className="wrap">
          <div className="ctform__done">
            <div className="eyebrow">· Recebido</div>
            <h2 className="display ctform__done-title">
              Obrigado, <em>{data.name.split(" ")[0] || "pessoal"}.</em>
            </h2>
            <p className="ctform__done-lede">
              Seu cliente de e-mail abriu uma mensagem pré-preenchida para <b>contato@wirinnovation.ai</b>. Confirme o envio e respondemos em até 24h úteis com 2 ou 3 horários para conversar com nossos sócios.
            </p>
            <p className="ctform__done-lede" style={{marginTop: 16}}>
              Caso o e-mail não tenha aberto automaticamente, escreva para <a href="mailto:contato@wirinnovation.ai" style={{color: "var(--wir-purple)", textDecoration: "underline"}}>contato@wirinnovation.ai</a>.
            </p>
            <div className="ctform__done-ref num">· Ref #{Math.random().toString(36).slice(2,8).toUpperCase()}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="ctform" data-reveal>
      <div className="wrap">
        <div className="ctform__head">
          <div className="eyebrow">· Preencha em 2 minutos</div>
          <div className="ctform__steps">
            {["Interesse","Contexto","Você"].map((s,i) => (
              <div key={i} className={"ctform__step" + (i === step ? " is-active" : "") + (i < step ? " is-done" : "")}>
                <span className="num">0{i+1}</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>

        {step === 0 && (
          <div className="ctform__panel">
            <h2 className="display ctform__panel-title">Por qual produto <em>você começaria?</em></h2>
            <div className="ctform__options">
              {interests.map(x => (
                <button key={x.k}
                  className={"ctform__opt" + (data.interest === x.k ? " is-sel" : "")}
                  onClick={()=>update("interest", x.k)}
                  style={{"--c": x.c}}>
                  <span className="ctform__opt-k display">{x.k === "explore" ? "···" : x.k}</span>
                  <span className="ctform__opt-t">{x.t}</span>
                  <span className="ctform__opt-d">{x.d}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="ctform__panel">
            <h2 className="display ctform__panel-title">Conte um pouco do <em>contexto.</em></h2>
            <div className="ctform__fields">
              <label className="ctform__field">
                <span>Seu papel na empresa</span>
                <select value={data.role} onChange={(e)=>update("role", e.target.value)}>
                  <option value="">Selecione…</option>
                  {roles.map(r => <option key={r}>{r}</option>)}
                </select>
              </label>
              <label className="ctform__field">
                <span>Nome da empresa</span>
                <input type="text" value={data.company} onChange={(e)=>update("company", e.target.value)} placeholder="Ex: Mahway Seguros"/>
              </label>
              <label className="ctform__field ctform__field--full">
                <span>Porte</span>
                <div className="ctform__chips">
                  {sizes.map(s => (
                    <button key={s} type="button"
                      className={"ctform__chip" + (data.size === s ? " is-sel" : "")}
                      onClick={()=>update("size", s)}>{s}</button>
                  ))}
                </div>
              </label>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="ctform__panel">
            <h2 className="display ctform__panel-title">Como te <em>chamamos?</em></h2>
            <div className="ctform__fields">
              <label className="ctform__field">
                <span>Nome completo</span>
                <input type="text" value={data.name} onChange={(e)=>update("name", e.target.value)} placeholder="Ana Paula Silva"/>
              </label>
              <label className="ctform__field">
                <span>E-mail corporativo</span>
                <input type="email" value={data.email} onChange={(e)=>update("email", e.target.value)} placeholder="ana@empresa.com"/>
              </label>
              <label className="ctform__field">
                <span>Telefone · opcional</span>
                <input type="tel" value={data.phone} onChange={(e)=>update("phone", e.target.value)} placeholder="+55 11 ---- ----"/>
              </label>
              <label className="ctform__field ctform__field--full">
                <span>O que está acontecendo aí? · opcional</span>
                <textarea rows="4" value={data.notes} onChange={(e)=>update("notes", e.target.value)}
                  placeholder="Qual é o problema concreto de hoje? (ex: levamos 6 semanas para cotar comercial…)"/>
              </label>
            </div>
          </div>
        )}

        <div className="ctform__nav">
          <button className="btn btn--ghost"
            onClick={()=>setStep(s => Math.max(0, s-1))}
            disabled={step === 0}>
            <span className="btn__arrow">←</span> Voltar
          </button>
          <div className="ctform__nav-meta">Passo {step+1} de 3 · {canNext() ? "pronto para avançar" : "complete os campos obrigatórios"}</div>
          {step < 2 ? (
            <button className="btn btn--solid" disabled={!canNext()} onClick={()=>setStep(s => s+1)}>
              Continuar <span className="btn__arrow">→</span>
            </button>
          ) : (
            <button className="btn btn--solid" disabled={!canNext()} onClick={handleSubmit}>
              Enviar pedido <span className="btn__arrow">→</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function ContactChannels() {
  return (
    <section className="ctchan" data-reveal>
      <div className="wrap">
        <div className="ctchan__head">
          <div className="eyebrow">· Outros canais</div>
          <h2 className="display ctchan__title">Prefere <em>direto?</em></h2>
        </div>
        <div className="ctchan__grid">
          <div className="ctchan__card">
            <div className="ctchan__k">· Comercial</div>
            <div className="ctchan__v display">vendas@wir.innovation</div>
            <p>Para propostas, pilotos e conversas executivas. Resposta em até 6h úteis.</p>
          </div>
          <div className="ctchan__card">
            <div className="ctchan__k">· Engenharia</div>
            <div className="ctchan__v display">eng@wir.innovation</div>
            <p>Para dúvidas técnicas, integrações, SDKs e questões de arquitetura.</p>
          </div>
          <div className="ctchan__card">
            <div className="ctchan__k">· Imprensa</div>
            <div className="ctchan__v display">press@wir.innovation</div>
            <p>Solicitações de entrevista, comentários de mercado e materiais institucionais.</p>
          </div>
          <div className="ctchan__card">
            <div className="ctchan__k">· Carreiras</div>
            <div className="ctchan__v display">jobs@wir.innovation</div>
            <p>Currículos, aplicações espontâneas e dúvidas sobre processo seletivo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactDemo() {
  return (
    <section className="ctdemo" data-reveal>
      <div className="wrap">
        <div className="ctdemo__grid">
          <div className="ctdemo__l">
            <div className="eyebrow eyebrow--onDark">· Preferência rápida</div>
            <h2 className="display ctdemo__title">
              Marcar 30 min<br/>
              com <em>Nicholas.</em>
            </h2>
            <p>Agenda direta do CEO — sem intermediários, sem SDR. Se preferir ir direto ao ponto, este é o caminho mais rápido.</p>
          </div>
          <div className="ctdemo__r">
            <div className="ctdemo__cal">
              <div className="ctdemo__cal-head">
                <span>· Semana de 22 · Abr</span>
                <span>→</span>
              </div>
              <div className="ctdemo__cal-grid">
                {["Seg","Ter","Qua","Qui","Sex"].map((d,i) => (
                  <div key={i} className="ctdemo__cal-day">
                    <div className="ctdemo__cal-dayk">{d}</div>
                    <div className="ctdemo__cal-dayn">{22+i}</div>
                    <div className="ctdemo__cal-slots">
                      {["10:00","14:30","16:00"].slice(0, 2 + (i%2)).map((t,j) => (
                        <button key={j} className="ctdemo__cal-slot">{t}</button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="ctdemo__cal-foot">
                · Horário de Brasília · 30 min · Google Meet
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSocial() {
  const channels = [
    { k:"LinkedIn",  v:"@wir-innovation",  href:"https://www.linkedin.com/company/wir-innovation/" },
    { k:"Instagram", v:"@wirinnovation",   href:"https://www.instagram.com/wirinnovation" },
    { k:"X",         v:"@wirinnovationai", href:"https://x.com/wirinnovationai" },
    { k:"E-mail",    v:"contato@wirinnovation.ai", href:"mailto:contato@wirinnovation.ai" },
  ];
  return (
    <section className="ctsocial" data-reveal>
      <div className="wrap">
        <div className="ctsocial__head">
          <div className="eyebrow">· Outros canais</div>
          <h2 className="display ctsocial__title">Acompanhe a WIR<br/><em>nas nossas redes.</em></h2>
        </div>
        <div className="ctsocial__grid">
          {channels.map((c,i) => (
            <a key={i} className="ctsocial__card" href={c.href} target="_blank" rel="noopener noreferrer">
              <div className="ctsocial__k">· {c.k}</div>
              <div className="ctsocial__v display">{c.v}</div>
              <span className="ctsocial__arrow" aria-hidden>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  useReveal();
  return (
    <>
      <ContactHero/>
      <ContactForm/>
      <ContactSocial/>
    </>
  );
}

Object.assign(window, { ContactPage });
