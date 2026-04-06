export type Language = 'en' | 'es';

export const translations = {
  en: {
    header: {
      githubText: "GitHub",
    },
    hero: {
      headline: "I build intelligent applications and scalable data systems.",
      tagline: "AI-Powered Full-Stack · Automated Data Pipelines · Available for Remote Work",
      bio: "Self-taught engineer shipping production apps since age 15. Specialized in AI-powered full-stack products and automated data pipelines. Based in the Canary Islands — available worldwide for remote roles and freelance projects.",
      credibilityBar: "3 production projects · 2 languages · Remote-first",
      ctaPrimary: "View my work",
      ctaSecondary: "Get in touch"
    },
    projects: {
      weather: {
        title: "DataDriven Weather Demand (The Engine)",
        description: "Production-grade Python ETL pipeline analyzing the correlation between Calima weather events and last-minute hotel bookings in Gran Canaria. Implements Pearson correlation analysis, pandera data contracts, dynamic anomaly detection, and a fail-fast strategy. Reviewed by a senior data engineering panel.",
        tags: ["Python", "ETL Pipeline", "Pearson Correlation", "pandera", "AEMET API", "CI/CD"],
        action: "View Code"
      },
      germalearn: {
        title: "Germalearn (The Brain)",
        description: "AI learning platform with a custom SM-2 spaced repetition algorithm and dynamic exercise generation via Gemini Flash API. Built with React 19, TypeScript and Tailwind v4. Deployed on Vercel with full CI/CD pipeline.",
        tags: ["AI Integration", "React", "Tailwind"],
        action: "Live App"
      },
      reflex: {
        title: "Reflex Game (The Agility)",
        description: "High-performance browser game focused on sub-100ms input response and fluid 60fps transitions. Demonstrates advanced React state architecture with pure reducer patterns — zero external state libraries.",
        tags: ["UI/UX", "React", "Complex State"],
        action: "Play Now"
      }
    },
    footer: {
      cta: "Available for freelance projects & remote roles.",
      responseTime: "Usually responds within 24h"
    }
  },
  es: {
    header: {
      githubText: "GitHub",
    },
    hero: {
      headline: "Construyo aplicaciones inteligentes y sistemas de datos que escalan.",
      tagline: "Full-Stack con IA · Pipelines de Datos Automatizados · Disponible para Trabajo Remoto",
      bio: "Ingeniero autodidacta construyendo aplicaciones en producción desde los 15 años. Especializado en productos full-stack con IA y pipelines de datos automatizados. Basado en Islas Canarias, disponible en todo el mundo para trabajo remoto y proyectos freelance.",
      credibilityBar: "3 proyectos en producción · 2 idiomas · Trabajo remoto",
      ctaPrimary: "Ver mis proyectos",
      ctaSecondary: "Contactar"
    },
    projects: {
      weather: {
        title: "DataDriven Weather Demand (El Motor de Datos)",
        description: "Pipeline ETL en Python de grado producción que analiza la correlación entre eventos de Calima y reservas hoteleras de última hora en Gran Canaria. Implementa análisis de correlación de Pearson, contratos de datos con pandera, detección dinámica de anomalías y estrategia fail-fast. Revisado por un panel senior de ingeniería de datos.",
        tags: ["Python", "ETL Pipeline", "Pearson Correlation", "pandera", "AEMET API", "CI/CD"],
        action: "Ver Código"
      },
      germalearn: {
        title: "Germalearn (El Cerebro)",
        description: "Plataforma de aprendizaje con IA que implementa un algoritmo de repetición espaciada SM-2 personalizado y generación dinámica de ejercicios mediante Gemini Flash API. Construida con React 19, TypeScript y Tailwind v4. Desplegada en Vercel con pipeline CI/CD.",
        tags: ["AI Integration", "React", "Tailwind"],
        action: "Ver App en Vivo"
      },
      reflex: {
        title: "Reflex Game (La Agilidad)",
        description: "Juego de navegador de alto rendimiento enfocado en respuesta de input sub-100ms y transiciones fluidas a 60fps. Demuestra arquitectura avanzada de estado en React con patrones reducer puros, sin librerías de estado externas.",
        tags: ["UI/UX", "React", "Complex State"],
        action: "Jugar Ahora"
      }
    },
    footer: {
      cta: "Disponible para proyectos freelance y trabajo remoto.",
      responseTime: "Responde en menos de 24h"
    }
  }
} as const;
