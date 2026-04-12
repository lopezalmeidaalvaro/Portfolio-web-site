export type Language = 'en' | 'es';

export const translations = {
  en: {
    header: {
      githubText: "GitHub",
    },
    hero: {
      headline: "Ship fast. Break nothing. Learn everything.",
      tagline: "Full-Stack Engineer specializing in AI products and data pipelines",
      bio: "I turn complex problems into clean, deployed solutions. From a Gemini-powered learning engine with SM-2 spaced repetition to a production ETL pipeline correlating weather anomalies with hotel demand — I build things that work, then make them better.",
      credibilityBar: "Available now · Remote-first · EN / ES",
      ctaPrimary: "See the work",
      ctaSecondary: "Let's talk",
      differentiators: [
        {
          label: "Production-first",
          detail: "Every project is deployed and maintained, not just demoed."
        },
        {
          label: "Full ownership",
          detail: "From architecture decisions to CI/CD pipelines — no hand-holding required."
        },
        {
          label: "Domain + code",
          detail: "I understand the business problem before writing the first line."
        }
      ] as const
    },
    projects: {
      weather: {
        title: "DataDriven Weather Demand",
        description: "Production-grade Python ETL pipeline analyzing the correlation between Calima weather events and last-minute hotel bookings in Gran Canaria. Implements Pearson correlation analysis, pandera data contracts, dynamic anomaly detection, and a fail-fast strategy. Reviewed by a senior data engineering panel.",
        tags: ["Python", "ETL Pipeline", "Pearson Correlation", "pandera", "AEMET API", "CI/CD"],
        action: "View Code",
        problem: "Data Engineering · Gran Canaria Tourism"
      },
      germalearn: {
        title: "Germalearn",
        description: "German learning app built around a custom SM-2 spaced repetition engine and real-time exercise generation via Gemini Flash API. Designed to maximize retention through adaptive difficulty — the algorithm adjusts card intervals based on individual performance, not fixed schedules.",
        tags: ["AI Integration", "React", "Tailwind"],
        subTags: ["SM-2 Algorithm", "Gemini Flash API", "Vite", "CI/CD"] as const,
        action: "Live App",
        problem: "AI Product · Language Learning"
      },
      reflex: {
        title: "Reflex Game",
        description: "High-performance browser game focused on sub-100ms input response and fluid 60fps transitions. Demonstrates advanced React state architecture with pure reducer patterns — zero external state libraries.",
        tags: ["UI/UX", "React", "Complex State"],
        action: "Play Now",
        problem: "Frontend Performance · Browser Game"
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
      headline: "Rápido. Limpio. En producción.",
      tagline: "Ingeniero Full-Stack especializado en productos con IA y pipelines de datos",
      bio: "Convierto problemas complejos en soluciones desplegadas y limpias. Desde un motor de aprendizaje con Gemini y repetición espaciada SM-2 hasta un pipeline ETL que correlaciona anomalías climáticas con demanda hotelera — construyo cosas que funcionan y luego las mejoro.",
      credibilityBar: "Disponible ahora · Trabajo remoto · EN / ES",
      ctaPrimary: "Ver el trabajo",
      ctaSecondary: "Hablemos",
      differentiators: [
        {
          label: "Producción ante todo",
          detail: "Cada proyecto está desplegado y mantenido, no solo presentado."
        },
        {
          label: "Responsabilidad total",
          detail: "Desde decisiones de arquitectura hasta pipelines CI/CD — sin necesidad de supervisión."
        },
        {
          label: "Dominio + código",
          detail: "Entiendo el problema de negocio antes de escribir la primera línea."
        }
      ] as const
    },
    projects: {
      weather: {
        title: "DataDriven Weather Demand",
        description: "Pipeline ETL en Python de grado producción que analiza la correlación entre eventos de Calima y reservas hoteleras de última hora en Gran Canaria. Implementa análisis de correlación de Pearson, contratos de datos con pandera, detección dinámica de anomalías y estrategia fail-fast. Revisado por un panel senior de ingeniería de datos.",
        tags: ["Python", "ETL Pipeline", "Pearson Correlation", "pandera", "AEMET API", "CI/CD"],
        action: "Ver Código",
        problem: "Ingeniería de Datos · Turismo en Gran Canaria"
      },
      germalearn: {
        title: "Germalearn",
        description: "App para aprender alemán construida sobre un motor de repetición espaciada SM-2 personalizado y generación de ejercicios en tiempo real mediante Gemini Flash API. Diseñada para maximizar la retención mediante dificultad adaptativa — el algoritmo ajusta los intervalos de cada tarjeta según el rendimiento individual, no calendarios fijos.",
        tags: ["AI Integration", "React", "Tailwind"],
        subTags: ["Algoritmo SM-2", "Gemini Flash API", "Vite", "CI/CD"] as const,
        action: "Ver App en Vivo",
        problem: "Producto con IA · Aprendizaje de idiomas"
      },
      reflex: {
        title: "Reflex Game",
        description: "Juego de navegador de alto rendimiento enfocado en respuesta de input sub-100ms y transiciones fluidas a 60fps. Demuestra arquitectura avanzada de estado en React con patrones reducer puros, sin librerías de estado externas.",
        tags: ["UI/UX", "React", "Complex State"],
        action: "Jugar Ahora",
        problem: "Rendimiento Frontend · Juego de Navegador"
      }
    },
    footer: {
      cta: "¿Tienes un proyecto o una posición? Veamos si encajamos.",
      responseTime: "Responde en menos de 24h"
    }
  }
} as const;
