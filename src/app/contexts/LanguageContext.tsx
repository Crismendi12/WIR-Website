import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.solutions': 'Solutions',
    'nav.blog': 'IA News',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    
    // Hero
    'hero.title': 'Insurance Intelligence',
    'hero.subtitle': 'Beyond Prediction',
    'hero.description': 'AI-powered insurtech platform that transforms legacy systems into intelligent risk engines. No replacement. Just evolution.',
    'hero.cta': 'See Our Tech',
    'hero.demo': 'Request Demo',
    
    // Ticker
    'ticker.title': 'Numbers That Kill',
    'ticker.claims': 'Claims Processed',
    'ticker.accuracy': 'Prediction Accuracy',
    'ticker.reduction': 'Fraud Reduction',
    'ticker.speed': 'Faster Processing',
    
    // Bento
    'bento.title': 'The WIR Stack',
    'bento.subtitle': 'Precision Engineering',
    'bento.neural': 'Neural Risk Engine',
    'bento.neuralDesc': 'Deep learning models trained on billions of data points',
    'bento.global': 'Global Intelligence',
    'bento.globalDesc': 'Real-time risk assessment across 47 markets',
    'bento.api': 'API-First Architecture',
    'bento.apiDesc': 'Plug into your existing systems in minutes',
    'bento.quantum': 'Quantum Precision',
    'bento.quantumDesc': 'Advanced algorithms for impossible-to-detect patterns',
    
    // Terminal
    'terminal.title': 'Live System Status',
    'terminal.status': 'All systems operational',
    'terminal.uptime': 'Uptime',
    'terminal.requests': 'API Requests/min',
    'terminal.latency': 'Avg. Latency',
    
    // Audit Trail
    'audit.title': 'Audit Trail',
    'audit.subtitle': 'Every Decision, Tracked',
    'audit.event': 'Event',
    'audit.timestamp': 'Timestamp',
    'audit.user': 'User',
    'audit.status': 'Status',
    
    // Founders
    'founders.title': 'Built by Founders',
    'founders.subtitle': 'Who Actually Ship',
    
    // Footer
    'footer.tagline': 'Insurance intelligence for the next generation',
    'footer.company': 'Company',
    'footer.product': 'Product',
    'footer.resources': 'Resources',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.security': 'Security',
    'footer.docs': 'Documentation',
    'footer.api': 'API Reference',
    'footer.status': 'System Status',
    'footer.rights': 'All rights reserved',
    
    // About Page
    'about.backedBy': 'Backed by strategic partners',
    'about.leadership': 'Leadership',
    'about.meetFounders': 'Meet the founders',
    'about.foundersDesc': 'Experienced operators combining deep insurance expertise with AI engineering capabilities',
    'about.experience': 'Experience',
    'about.expertise': 'Expertise',
    'about.connectLinkedIn': 'Connect on LinkedIn',
    'about.careerHighlights': 'Career Highlights',
    'about.institutionalExperience': 'Institutional Experience',
    'about.strategicSupport': 'Strategic Support',
    'about.strategicPartners': 'Sócios & Investidores Estratégicos',
    'about.ventureBuilder': 'Venture Builder Global em Tech & IA',
    'about.partner': 'Sócia',
    'about.cofounder': 'Co-Founder',
    
    // Strategic Partners details
    'about.californiaUSA': '(Califórnia, EUA)',
    'about.mahwayDesc': 'Venture Builder Global em Tech & IA',
    'about.avanteDesc': 'Holding de IA Estratégica - (Solidez financeira e governança de longo prazo)',
    'about.boardMember': 'Conselheiro WIR',
    
    // Jess Mah highlights
    'about.jessHighlight1': 'Forbes 30 Under 30',
    'about.jessHighlight2': 'Youngest woman at Y Combinator (2010)',
    'about.jessHighlight3': 'Built and scaled inDinero (Fintech) for 10+ years',
    'about.jessHighlight4': 'Harvard Business School President\'s Program',
    
    // Andrea Barrica highlights
    'about.andreaHighlight1': 'Ex-Venture Partner at 500 Startups (500 Global)',
    'about.andreaHighlight2': 'Supported 100+ startups raising over USD 100M',
    'about.andreaHighlight3': 'Serial founder in fintech/insurtech & AI',
    
    // Felipe Moraes highlights
    'about.felipeHighlight1': 'Ex-Managing Partner Innova Capital',
    'about.felipeHighlight2': '20+ anos em finanças e VC no Brasil',
    'about.felipeHighlight3': 'R$ 1.6 bi em investimentos com EXITS',
    'about.felipeHighlight4': 'Co-Fundador e CEO da Bambú DCM',
    
    // Amanda Pinheiro highlights
    'about.amandaHighlight1': '14+ anos em gestão de fundos e mercados financeiros no Brasil',
    'about.amandaHighlight2': 'Especialista em PE e VC',
    'about.amandaHighlight3': 'C-Level na Innova Capital e Unbox Capital',
    
    // Why Us section
    'about.whyUsTitle': 'Por que nós?',
    'about.whyUsBadge': 'DIFERENCIAL COMPETITIVO',
    'about.whyUs1Title': 'Expertise em Seguros e Saúde',
    'about.whyUs1Desc': 'Fundadores com profundo conhecimento do mercado segurador brasileiro',
    'about.whyUs2Title': 'Solução para o Mercado de Seguros',
    'about.whyUs2Desc': 'Plataforma construída para seguros, não uma solução genérica adaptada',
    'about.whyUs3Title': 'Plug-and-play',
    'about.whyUs3Desc': 'Implementação em semanas, sem projetos de TI e sem interrupção do negócio',
    'about.whyUs4Title': 'LGPD Ready',
    'about.whyUs4Desc': 'Conformidade total com a Lei Geral de Proteção de Dados desde a concepção',
    'about.whyUs5Title': 'ROI mensurável',
    'about.whyUs5Desc': 'Ganhos de eficiência rastreáveis desde o primeiro mês de operação',
    'about.whyUs6Title': 'Tech & IA World Class',
    'about.whyUs6Desc': 'Tecnologia de ponta com equipe de desenvolvedores globais da Mahway (Califórnia, EUA)',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Ready to transform your insurance operations?',
    
    // Language
    'lang.english': 'English',
    'lang.portuguese': 'Português',
    'lang.spanish': 'Español',
  },
  pt: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'Sobre',
    'nav.solutions': 'Plataformas de IA',
    'nav.blog': 'IA News',
    'nav.contact': 'Contato',
    'nav.getStarted': 'Fale Conosco',
    
    // Hero
    'hero.title': 'Inteligência em Seguros',
    'hero.subtitle': 'Além da Previsão',
    'hero.description': 'Plataforma insurtech com IA que transforma sistemas legados em motores inteligentes de risco. Sem substituição. Apenas evolução.',
    'hero.cta': 'Ver Nossa Tecnologia',
    'hero.demo': 'Solicitar Demo',
    
    // Ticker
    'ticker.title': 'Números Que Impressionam',
    'ticker.claims': 'Sinistros Processados',
    'ticker.accuracy': 'Precisão de Previsão',
    'ticker.reduction': 'Redução de Fraude',
    'ticker.speed': 'Processamento Mais Rápido',
    
    // Bento
    'bento.title': 'O Stack WIR',
    'bento.subtitle': 'Engenharia de Precisão',
    'bento.neural': 'Motor Neural de Risco',
    'bento.neuralDesc': 'Modelos de deep learning treinados com bilhões de dados',
    'bento.global': 'Inteligência Global',
    'bento.globalDesc': 'Avaliação de risco em tempo real em 47 mercados',
    'bento.api': 'Arquitetura API-First',
    'bento.apiDesc': 'Integre aos seus sistemas existentes em minutos',
    'bento.quantum': 'Precisão Quântica',
    'bento.quantumDesc': 'Algoritmos avançados para padrões impossíveis de detectar',
    
    // Terminal
    'terminal.title': 'Status do Sistema ao Vivo',
    'terminal.status': 'Todos os sistemas operacionais',
    'terminal.uptime': 'Tempo Ativo',
    'terminal.requests': 'Requisições API/min',
    'terminal.latency': 'Latência Média',
    
    // Audit Trail
    'audit.title': 'Trilha de Auditoria',
    'audit.subtitle': 'Cada Decisão, Rastreada',
    'audit.event': 'Evento',
    'audit.timestamp': 'Data/Hora',
    'audit.user': 'Usuário',
    'audit.status': 'Status',
    
    // Founders
    'founders.title': 'Construído por Fundadores',
    'founders.subtitle': 'Que Realmente Entregam',
    
    // Footer
    'footer.tagline': 'Inteligência em seguros para a próxima geração',
    'footer.company': 'Empresa',
    'footer.product': 'Produto',
    'footer.resources': 'Recursos',
    'footer.legal': 'Legal',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Serviço',
    'footer.security': 'Segurança',
    'footer.docs': 'Documentação',
    'footer.api': 'Referência API',
    'footer.status': 'Status do Sistema',
    'footer.rights': 'Todos os direitos reservados',
    
    // About Page
    'about.backedBy': 'Apoiados por parceiros estratégicos',
    'about.primaryBacking': 'Apoio institucional primário fornecendo capital, recursos estratégicos, suporte operacional e comprometimento de capital de longo prazo para impulsionar o desenvolvimento da plataforma e expansão de mercado.',
    'about.strategicResources': 'Recursos Estratégicos',
    'about.operationalSupport': 'Suporte Operacional',
    'about.longTermCapital': 'Capital de Longo Prazo',
    'about.strategicPartner': 'Parceiro estratégico fornecendo acesso ao mercado, redes de distribuição e profunda expertise do setor de seguros para acelerar a execução go-to-market.',
    'about.marketAccess': 'Acesso ao Mercado',
    'about.distributionNetworks': 'Redes de Distribuição',
    'about.industryExpertise': 'Expertise do Setor',
    'about.leadership': 'Liderança',
    'about.meetFounders': 'Conheça os fundadores',
    'about.foundersDesc': 'Operadores experientes combinando profunda expertise em seguros com capacidades de engenharia de IA',
    'about.experience': 'Experiência',
    'about.expertise': 'Expertise',
    'about.connectLinkedIn': 'Conectar no LinkedIn',
    'about.careerHighlights': 'Destaques da Carreira',
    'about.institutionalExperience': 'Experiência Institucional',
    'about.strategicSupport': 'Apoio Estratégico',
    'about.strategicPartners': 'Sócios & Investidores Estratégicos',
    'about.ventureBuilder': 'Venture Builder Global em Tech & IA',
    'about.partner': 'Sócia',
    'about.cofounder': 'Co-Founder',
    
    // Strategic Partners details
    'about.californiaUSA': '(Califórnia, EUA)',
    'about.mahwayDesc': 'Venture Builder Global em Tech & IA',
    'about.avanteDesc': 'Holding de IA Estratégica - (Solidez financeira e governança de longo prazo)',
    'about.boardMember': 'Conselheiro WIR',
    
    // Jess Mah highlights
    'about.jessHighlight1': 'Forbes 30 Under 30',
    'about.jessHighlight2': 'Youngest woman at Y Combinator (2010)',
    'about.jessHighlight3': 'Built and scaled inDinero (Fintech) for 10+ years',
    'about.jessHighlight4': 'Harvard Business School President\'s Program',
    
    // Andrea Barrica highlights
    'about.andreaHighlight1': 'Ex-Venture Partner at 500 Startups (500 Global)',
    'about.andreaHighlight2': 'Supported 100+ startups raising over USD 100M',
    'about.andreaHighlight3': 'Serial founder in fintech/insurtech & AI',
    
    // Felipe Moraes highlights
    'about.felipeHighlight1': 'Ex-Managing Partner Innova Capital',
    'about.felipeHighlight2': '20+ anos em finanças e VC no Brasil',
    'about.felipeHighlight3': 'R$ 1.6 bi em investimentos com EXITS',
    'about.felipeHighlight4': 'Co-Fundador e CEO da Bambú DCM',
    
    // Amanda Pinheiro highlights
    'about.amandaHighlight1': '14+ anos em gestão de fundos e mercados financeiros no Brasil',
    'about.amandaHighlight2': 'Especialista em PE e VC',
    'about.amandaHighlight3': 'C-Level na Innova Capital e Unbox Capital',
    
    // Why Us section
    'about.whyUsTitle': 'Por que nós?',
    'about.whyUsBadge': 'DIFERENCIAL COMPETITIVO',
    'about.whyUs1Title': 'Expertise em Seguros e Saúde',
    'about.whyUs1Desc': 'Fundadores com profundo conhecimento do mercado segurador brasileiro',
    'about.whyUs2Title': 'Solução para o Mercado de Seguros',
    'about.whyUs2Desc': 'Plataforma construída para seguros, não uma solução genérica adaptada',
    'about.whyUs3Title': 'Plug-and-play',
    'about.whyUs3Desc': 'Implementação em semanas, sem projetos de TI e sem interrupção do negócio',
    'about.whyUs4Title': 'LGPD Ready',
    'about.whyUs4Desc': 'Conformidade total com a Lei Geral de Proteção de Dados desde a concepção',
    'about.whyUs5Title': 'ROI mensurável',
    'about.whyUs5Desc': 'Ganhos de eficiência rastreáveis desde o primeiro mês de operação',
    'about.whyUs6Title': 'Tech & IA World Class',
    'about.whyUs6Desc': 'Tecnologia de ponta com equipe de desenvolvedores globais da Mahway (Califórnia, EUA)',
    
    // Contact
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Pronto para transformar suas operações de seguros?',
    
    // Language
    'lang.english': 'English',
    'lang.portuguese': 'Português',
    'lang.spanish': 'Español',
  },
  es: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'Sobre',
    'nav.solutions': 'Plataformas de IA',
    'nav.blog': 'IA News',
    'nav.contact': 'Contacto',
    'nav.getStarted': 'Fale Conosco',
    
    // Hero
    'hero.title': 'Inteligencia en Seguros',
    'hero.subtitle': 'Más allá de la Predicción',
    'hero.description': 'Plataforma insurtech con IA que transforma sistemas legados en motores inteligentes de riesgo. Sin reemplazo. Solo evolución.',
    'hero.cta': 'Ver Nuestra Tecnología',
    'hero.demo': 'Solicitar Demo',
    
    // Ticker
    'ticker.title': 'Números Que Impressionan',
    'ticker.claims': 'Siniestros Procesados',
    'ticker.accuracy': 'Precisión de Predicción',
    'ticker.reduction': 'Reducción de Fraude',
    'ticker.speed': 'Procesamiento Más Rápido',
    
    // Bento
    'bento.title': 'El Stack WIR',
    'bento.subtitle': 'Ingeniería de Precisión',
    'bento.neural': 'Motor Neural de Riesgo',
    'bento.neuralDesc': 'Modelos de aprendizaje profundo entrenados con miles de millones de datos',
    'bento.global': 'Inteligencia Global',
    'bento.globalDesc': 'Evaluación de riesgo en tiempo real en 47 mercados',
    'bento.api': 'Arquitectura API-First',
    'bento.apiDesc': 'Integre a sus sistemas existentes en minutos',
    'bento.quantum': 'Precisión Cuántica',
    'bento.quantumDesc': 'Algoritmos avanzados para patrones imposibles de detectar',
    
    // Terminal
    'terminal.title': 'Estado del Sistema en Vivo',
    'terminal.status': 'Todos los sistemas operativos',
    'terminal.uptime': 'Tiempo Activo',
    'terminal.requests': 'Solicitudes API/min',
    'terminal.latency': 'Latencia Media',
    
    // Audit Trail
    'audit.title': 'Rastro de Auditoría',
    'audit.subtitle': 'Cada Decisión, Rastreada',
    'audit.event': 'Evento',
    'audit.timestamp': 'Fecha/Hora',
    'audit.user': 'Usuario',
    'audit.status': 'Estado',
    
    // Founders
    'founders.title': 'Construido por Fundadores',
    'founders.subtitle': 'Que Realmente Entregan',
    
    // Footer
    'footer.tagline': 'Inteligencia en seguros para la próxima generación',
    'footer.company': 'Empresa',
    'footer.product': 'Producto',
    'footer.resources': 'Recursos',
    'footer.legal': 'Legal',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.security': 'Seguridad',
    'footer.docs': 'Documentación',
    'footer.api': 'Referencia API',
    'footer.status': 'Estado del Sistema',
    'footer.rights': 'Todos los derechos reservados',
    
    // About Page
    'about.backedBy': 'Apoiados por parceiros estratégicos',
    'about.primaryBacking': 'Apoio institucional primario proporcionando capital, recursos estratégicos, soporte operativo y compromiso de capital a largo plazo para impulsar el desarrollo de la plataforma y la expansión de mercado.',
    'about.strategicResources': 'Recursos Estratégicos',
    'about.operationalSupport': 'Soporte Operativo',
    'about.longTermCapital': 'Capital a Largo Plazo',
    'about.strategicPartner': 'Parceiro estratégico proporcionando acceso al mercado, redes de distribución y profunda experiencia en el sector de seguros para acelerar la ejecución go-to-market.',
    'about.marketAccess': 'Acceso al Mercado',
    'about.distributionNetworks': 'Redes de Distribución',
    'about.industryExpertise': 'Experiencia en el Sector',
    'about.leadership': 'Liderazgo',
    'about.meetFounders': 'Conozca a los fundadores',
    'about.foundersDesc': 'Operadores experimentados combinando profunda experiencia en seguros con capacidades de ingeniería de IA',
    'about.experience': 'Experiencia',
    'about.expertise': 'Experiencia',
    'about.connectLinkedIn': 'Conectar en LinkedIn',
    'about.careerHighlights': 'Destacados de la Carrera',
    'about.institutionalExperience': 'Experiencia Institucional',
    'about.strategicSupport': 'Soporte Estratégico',
    'about.strategicPartners': 'Socios & Inversores Estratégicos',
    'about.ventureBuilder': 'Venture Builder Global en Tech & IA',
    'about.partner': 'Sócia',
    'about.cofounder': 'Co-Fundador',
    
    // Strategic Partners details
    'about.californiaUSA': '(Califórnia, EUA)',
    'about.mahwayDesc': 'Venture Builder Global em Tech & IA',
    'about.avanteDesc': 'Holding de IA Estratégica - (Solidez financeira e governança de longo prazo)',
    'about.boardMember': 'Conselheiro WIR',
    
    // Jess Mah highlights
    'about.jessHighlight1': 'Forbes 30 Under 30',
    'about.jessHighlight2': 'Youngest woman at Y Combinator (2010)',
    'about.jessHighlight3': 'Built and scaled inDinero (Fintech) for 10+ years',
    'about.jessHighlight4': 'Harvard Business School President\'s Program',
    
    // Andrea Barrica highlights
    'about.andreaHighlight1': 'Ex-Venture Partner at 500 Startups (500 Global)',
    'about.andreaHighlight2': 'Supported 100+ startups raising over USD 100M',
    'about.andreaHighlight3': 'Serial founder in fintech/insurtech & AI',
    
    // Felipe Moraes highlights
    'about.felipeHighlight1': 'Ex-Managing Partner Innova Capital',
    'about.felipeHighlight2': '20+ anos em finanças y VC en Brasil',
    'about.felipeHighlight3': 'R$ 1.6 bi en inversiones con EXITS',
    'about.felipeHighlight4': 'Co-Fundador y CEO de Bambú DCM',
    
    // Amanda Pinheiro highlights
    'about.amandaHighlight1': '14+ años en gestión de fondos y mercados financieros en Brasil',
    'about.amandaHighlight2': 'Especialista en PE y VC',
    'about.amandaHighlight3': 'C-Level en Innova Capital y Unbox Capital',
    
    // Why Us section
    'about.whyUsTitle': 'Por qué nosotros?',
    'about.whyUsBadge': 'DIFERENCIAL COMPETITIVO',
    'about.whyUs1Title': 'Expertise en Seguros y Salud',
    'about.whyUs1Desc': 'Fundadores con conocimiento profundo del mercado asegurador brasileño',
    'about.whyUs2Title': 'Solución para el Mercado de Seguros',
    'about.whyUs2Desc': 'Plataforma construida para seguros, no una solución genérica adaptada',
    'about.whyUs3Title': 'Plug-and-play',
    'about.whyUs3Desc': 'Implementación en semanas, sin proyectos de TI y sin interrupción del negocio',
    'about.whyUs4Title': 'LGPD Ready',
    'about.whyUs4Desc': 'Conformidad total con la Ley General de Protección de Datos desde la concepción',
    'about.whyUs5Title': 'ROI mensurable',
    'about.whyUs5Desc': 'Ganancias de eficiencia rastreables desde el primer mes de operación',
    'about.whyUs6Title': 'Tech & IA World Class',
    'about.whyUs6Desc': 'Tecnología de vanguardia con equipo de desarrolladores globales de Mahway (Califórnia, EUA)',
    
    // Contact
    'contact.title': 'Entre en Contacto',
    'contact.subtitle': 'Listo para transformar sus operaciones de seguros?',
    
    // Language
    'lang.english': 'English',
    'lang.portuguese': 'Português',
    'lang.spanish': 'Español',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}