export type Language = 'en' | 'es';

export const translations = {
  en: {
    header: {
      githubText: "GitHub",
    },
    hero: {
      headline: "Your business data is lying to you. I fix that.",
      tagline: "ETL Pipelines · CRM Data Cleaning · Data Validation · Remote",
      bio: "Growing startups lose revenue and operational speed due to messy CRMs and inaccurate dashboards. I design and implement automated data systems that eliminate manual overhead and ensure 100% reliable metrics. As proof: I scientifically demonstrated (r=0.268) that hotel demand is inelastic to Calima weather anomalies, saving thousands of euros in room margins.",
      credibilityBar: "Verified metrics · Response < 24h · Available for projects across Europe",
      ctaPrimary: "See my work",
      ctaSecondary: "Let's talk",
      differentiators: [
        {
          label: "ROI-Focused",
          detail: "I don't just write code; I stop data leaks in sales and operations."
        },
        {
          label: "Zero Overhead",
          detail: "I work independently, integrating with your stack without hand-holding."
        },
        {
          label: "Speed to Value",
          detail: "Most cleanups and integrations are delivered, tested, and live in under 72h."
        }
      ] as const
    },
    credibility: {
      items: [
        "Analysis reviewed by senior data engineering panel",
        "Available for remote B2B projects across Europe",
        "Guaranteed response in under 24 hours"
      ] as const
    },
    services: {
      title: "How I help your business",
      subtitle: "Concrete data solutions to put your operations on autopilot.",
      ctaText: "Tell me about your project",
      list: [
        {
          id: "crm",
          title: "CRM & Lead Data Cleaning",
          description: "Your CRM is filled with duplicates, incorrect emails, and empty fields. I deliver it clean, validated, and ready to import in 48-72h."
        },
        {
          id: "etl",
          title: "ETL Pipeline & Data Automation",
          description: "I build automated processes that clean and move your data between systems seamlessly, without any manual intervention."
        },
        {
          id: "audit",
          title: "Data Audit & Quality Report",
          description: "I analyze your current data quality and deliver an actionable report on errors found and how they affect your business decisions."
        }
      ] as const
    },
    projects: {
      weather: {
        title: "DataDriven Weather Demand",
        description: "Hotels lose thousands of euros by slashing room rates out of panic over weather cancellations.\nI analyzed historical bookings against real weather alerts and proved (r=0.268) that demand is inelastic. Dropping prices during Calima does not attract guests and only erodes profit margins; keep rates stable.\n(Tech: Python, pandas, data validation, public APIs, automated workflows)",
        tags: ["Python", "ETL Pipeline", "Pearson Correlation", "pandera", "AEMET API", "CI/CD"],
        action: "View Code",
        caseStudy: "View Case Study",
        problem: "Data Engineering · Gran Canaria Tourism"
      },
      germalearn: {
        title: "Germalearn",
        description: "German learning app centered around a custom SM-2 spaced repetition engine and real-time exercise generation via Gemini Flash API. Designed to maximize retention by adjusting card intervals based on individual performance.\n(Tech: React 19, TypeScript, Tailwind v4, Framer Motion, Gemini API)",
        tags: ["AI Integration · Full Stack"],
        action: "Live App",
        problem: "AI Product · Language Learning",
        url: "https://germalearn-app.vercel.app"
      },
      neurosymbolic: {
        title: "Neurosymbolic ECG Pipeline",
        description: "Diagnostic models fail to generalize in real clinical environments.\nDesigned a neurosymbolic pipeline classifying ECG arrhythmias with zero patient leakage, achieving ROC-AUC 0.830 on MIT-BIH. Generalization is driven by causal order preservation, not geometric universality.\n(Tech: Python, scikit-learn, SHAP, scipy, Next.js)",
        tags: ["ML Research · Clinical Data"],
        action: "View Code",
        problem: "Arrhythmia Classification",
        url: "https://github.com/lopezalmeidaalvaro/cardiac-arrhythmia-classification"
      },
      reflex: {
        title: "Reflex Game",
        description: "High user drop-off in web applications due to sluggish interactions and latency.\nEliminates UI friction with sub-100ms response times and fluid 60fps states. Maximizes user engagement by optimizing frontend performance.\n(Tech: React, State Reducer Architecture, Vite, Tailwind)",
        tags: ["UI/UX · React"],
        action: "Play Now",
        problem: "Frontend Performance · Browser Game",
        url: "https://app-reflex-game.vercel.app"
      }
    },
    footer: {
      cta: "Got a project or a role? Let's find out if we're a fit.",
      responseTime: "Usually responds within 24h"
    }
  },
  es: {
    header: {
      githubText: "GitHub",
    },
    hero: {
      headline: "Tus datos de negocio te están mintiendo. Yo lo soluciono.",
      tagline: "Pipelines ETL · Limpieza de Datos CRM · Validación de Datos · Remoto",
      bio: "Las startups en crecimiento pierden dinero y tiempo por culpa de CRMs desordenados y reportes con errores. Yo diseño e implemento sistemas de datos automatizados que eliminan las tareas manuales y garantizan métricas 100% fiables. Como prueba: demostré con datos meteorológicos reales que la demanda hotelera es inelástica a la Calima (r=0.268), salvando miles de euros en márgenes de tarifas.",
      credibilityBar: "Métricas verificadas · Respuesta < 24h · Disponible para proyectos en Europa",
      ctaPrimary: "Ver mi trabajo",
      ctaSecondary: "Hablemos",
      differentiators: [
        {
          label: "Enfoque en ROI",
          detail: "No solo escribo código; soluciono fugas de información en tus ventas y operaciones."
        },
        {
          label: "Sin supervisión",
          detail: "Trabajo de forma independiente, integrándome en tu stack sin quitarte tiempo."
        },
        {
          label: "Valor en días",
          detail: "La mayoría de integraciones y limpiezas de datos están listas y en producción en 48-72h."
        }
      ] as const
    },
    credibility: {
      items: [
        "Pipeline revisado por panel senior de data engineering",
        "Disponible para proyectos remotos en toda Europa",
        "Respuesta garantizada en menos de 24h"
      ] as const
    },
    services: {
      title: "Cómo puedo ayudarte",
      subtitle: "Soluciones de datos concretas para que tu negocio funcione en piloto automático.",
      ctaText: "Háblame de tu proyecto",
      list: [
        {
          id: "crm",
          title: "CRM & Lead Data Cleaning",
          description: "Tu CRM tiene duplicados, emails incorrectos y campos vacíos. Te lo entrego limpio, validado y listo para importar en 48-72h."
        },
        {
          id: "etl",
          title: "ETL Pipeline & Data Automation",
          description: "Construyo el proceso que limpia y mueve tus datos automáticamente entre sistemas, sin intervención manual."
        },
        {
          id: "audit",
          title: "Data Audit & Quality Report",
          description: "Analizo tus datos actuales y te entrego un informe con los errores encontrados y cómo afectan a tus decisiones de negocio."
        }
      ] as const
    },
    projects: {
      weather: {
        title: "DataDriven Weather Demand",
        description: "Los hoteles pierden miles de euros al bajar precios por pánico a cancelaciones climáticas.\nAnalicé reservas históricas contra alertas del clima real y demostré (r=0.268) que la demanda es inelástica. Bajar precios en Calima no atrae clientes y destruye el margen neto; mantén tarifas estables.\n(Tecnologías: Python, pandas, validación de datos, APIs, automatización)",
        tags: ["Python", "ETL Pipeline", "Pearson Correlation", "pandera", "AEMET API", "CI/CD"],
        action: "Ver Código",
        caseStudy: "Ver Caso de Estudio",
        problem: "Ingeniería de Datos · Turismo en Gran Canaria"
      },
      germalearn: {
        title: "Germalearn",
        description: "App para aprender alemán basada en repetición espaciada SM-2 y generación con Gemini Flash API. Diseñada para maximizar la retención ajustando los intervalos de cada tarjeta según el rendimiento individual de cada profesional.\n(Tecnologías: React 19, TypeScript, Tailwind v4, Framer Motion, API Gemini)",
        tags: ["AI Integration · Full Stack"],
        action: "Ver App en Vivo",
        problem: "Producto con IA · Aprendizaje de idiomas",
        url: "https://germalearn-app.vercel.app"
      },
      neurosymbolic: {
        title: "Neurosymbolic ECG Pipeline",
        description: "Los hospitales usan modelos predictivos que fallan al generalizar en entornos clínicos.\nDiseñé un pipeline neurosimbólico para clasificar arritmias sin filtración de pacientes, logrando ROC-AUC 0.830 en MIT-BIH. La generalización depende del orden causal, no de la universalidad geométrica.\n(Tecnologías: Python, scikit-learn, SHAP, scipy, Next.js)",
        tags: ["ML Research · Clinical Data"],
        action: "Ver Código",
        problem: "Clasificación de Arritmias",
        url: "https://github.com/lopezalmeidaalvaro/cardiac-arrhythmia-classification"
      },
      reflex: {
        title: "Reflex Game",
        description: "Pérdida de clientes en la web debido a interfaces lentas o con lag de interacción.\nElimina la fricción digital mediante tiempos de respuesta sub-100ms y transiciones fluidas a 60fps. Incrementa la retención y la velocidad de interacción del usuario.\n(Tecnologías: React, Arquitectura Reducer, Vite, Tailwind CSS)",
        tags: ["UI/UX · React"],
        action: "Jugar Ahora",
        problem: "Rendimiento Frontend · Juego de Navegador",
        url: "https://app-reflex-game.vercel.app"
      }
    },
    footer: {
      cta: "¿Tienes un proyecto o una posición? Veamos si encajamos.",
      responseTime: "Responde en menos de 24h"
    }
  }
} as const;
