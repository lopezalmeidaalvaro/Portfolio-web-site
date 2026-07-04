export type Language = 'en' | 'es';

export const translations = {
  en: {
    header: {
      githubText: "GitHub",
    },
    hero: {
      headline: "I build systems that think. From quantum compilers to data pipelines.",
      tagline: "Quantum Computing · Full-Stack Engineering · Data Pipelines · AI Products · Remote",
      bio: "I engineer production systems at the intersection of applied science and software — from a calibration-aware quantum compiler that beats Qiskit on real IBM hardware, to ETL pipelines that proved hotel demand is inelastic to weather (r=0.268). I ship fast, test rigorously, and document everything.",
      credibilityBar: "Verified on IBM Quantum hardware · Response < 24h · Available for projects across Europe",
      ctaPrimary: "See my work",
      ctaSecondary: "Let's talk",
      differentiators: [
        {
          label: "Science-Driven",
          detail: "Every claim backed by data — benchmarks, correlations, public Job IDs."
        },
        {
          label: "Full-Stack Depth",
          detail: "From quantum circuits to React frontends, I own the entire stack."
        },
        {
          label: "Speed to Value",
          detail: "Most projects are delivered, tested, and live in under 72h."
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
      title: "What I build",
      subtitle: "End-to-end systems that ship fast, work reliably, and survive production.",
      ctaText: "Let's discuss your project",
      list: [
        {
          id: "crm",
          title: "Full-Stack Applications",
          description: "Production web apps from zero to deploy — React/Next.js frontends, Node.js APIs, PostgreSQL/Supabase backends, CI/CD, and monitoring."
        },
        {
          id: "etl",
          title: "Data Pipelines & Automation",
          description: "ETL systems, data validation, API integrations, and automated workflows that eliminate manual work and ensure reliable metrics."
        },
        {
          id: "audit",
          title: "Applied Research & AI Products",
          description: "From ML pipelines to AI-powered products — I turn research prototypes into deployed applications with rigorous testing and documentation."
        }
      ] as const
    },
    projects: {
      qade: {
        title: "QADE — Quantum Algorithm Discovery Engine",
        description: "Standard quantum compilers ignore real hardware physics. QADE compiles against live QPU calibration data — T1/T2 coherence, readout and CNOT error rates per qubit — and beats Qiskit Level 3 in Hellinger fidelity on real 156-qubit IBM processors.\n60% win rate across 10 documented runs with publicly auditable IBM Quantum Job IDs. Gate Guard ensures output is never worse than baseline.\n(Tech: Python, Qiskit, PyZX, Next.js, Supabase, Vercel)",
        tags: ["Quantum Computing", "Python", "Qiskit", "PyZX", "Next.js", "Supabase"],
        action: "Visit QADE",
        problem: "Quantum Compilation · IBM Quantum Hardware",
        url: "https://qade-landing.vercel.app"
      },
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
      headline: "Construyo sistemas que piensan. De compiladores cuánticos a pipelines de datos.",
      tagline: "Computación Cuántica · Full-Stack · Pipelines de Datos · Productos con IA · Remoto",
      bio: "Diseño sistemas en producción en la intersección de ciencia aplicada y software — desde un compilador cuántico que supera a Qiskit en hardware real de IBM, hasta pipelines ETL que demostraron que la demanda hotelera es inelástica al clima (r=0.268). Entrego rápido, testeo con rigor y documento todo.",
      credibilityBar: "Verificado en hardware IBM Quantum · Respuesta < 24h · Disponible para proyectos en Europa",
      ctaPrimary: "Ver mi trabajo",
      ctaSecondary: "Hablemos",
      differentiators: [
        {
          label: "Ciencia aplicada",
          detail: "Cada afirmación respaldada por datos — benchmarks, correlaciones, Job IDs públicos."
        },
        {
          label: "Full-Stack completo",
          detail: "De circuitos cuánticos a frontends en React, domino todo el stack."
        },
        {
          label: "Valor en días",
          detail: "La mayoría de proyectos están entregados, testeados y en producción en 48-72h."
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
      title: "Lo que construyo",
      subtitle: "Sistemas end-to-end que se entregan rápido, funcionan de verdad y aguantan producción.",
      ctaText: "Hablemos de tu proyecto",
      list: [
        {
          id: "crm",
          title: "Aplicaciones Full-Stack",
          description: "Apps web en producción de cero a deploy — frontends React/Next.js, APIs Node.js, backends PostgreSQL/Supabase, CI/CD y monitorización."
        },
        {
          id: "etl",
          title: "Pipelines de Datos y Automatización",
          description: "Sistemas ETL, validación de datos, integraciones de APIs y workflows automatizados que eliminan trabajo manual y garantizan métricas fiables."
        },
        {
          id: "audit",
          title: "Investigación Aplicada y Productos con IA",
          description: "De pipelines de ML a productos con IA — convierto prototipos de investigación en aplicaciones desplegadas con testing riguroso y documentación."
        }
      ] as const
    },
    projects: {
      qade: {
        title: "QADE — Quantum Algorithm Discovery Engine",
        description: "Los compiladores cuánticos estándar ignoran la física real del hardware. QADE compila contra datos de calibración en tiempo real — coherencia T1/T2, errores de lectura y CNOT por qubit — y supera a Qiskit Level 3 en fidelidad Hellinger en procesadores IBM reales de 156 qubits.\n60% de victorias en 10 ejecuciones documentadas con Job IDs auditables de IBM Quantum. Gate Guard garantiza que el resultado nunca sea peor que el baseline.\n(Tecnologías: Python, Qiskit, PyZX, Next.js, Supabase, Vercel)",
        tags: ["Computación Cuántica", "Python", "Qiskit", "PyZX", "Next.js", "Supabase"],
        action: "Visitar QADE",
        problem: "Compilación Cuántica · Hardware IBM Quantum",
        url: "https://qade-landing.vercel.app"
      },
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
