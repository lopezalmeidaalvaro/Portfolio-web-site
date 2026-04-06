export type Language = 'en' | 'es';

export const translations = {
  en: {
    header: {
      githubText: "GitHub",
    },
    hero: {
      headline: "I build intelligent applications and scalable data systems.",
      tagline: "Full-Stack AI Developer • Data-Driven Web Engineer",
      bio: "18-year-old software engineer with a relentless drive for shipping real-world products. Based in the Canary Islands, available worldwide.",
      ctaPrimary: "View my work",
      ctaSecondary: "Get in touch"
    },
    projects: {
      germalearn: {
        title: "Germalearn (The Brain)",
        description: "AI-powered learning platform featuring dynamic exercise generation and spaced repetition algorithms. Deployed on Vercel with full Gemini API integration.",
        tags: ["AI Integration", "React", "Tailwind"],
        action: "Live App"
      },
      reflex: {
        title: "Reflex Game (The Agility)",
        description: "Interactive application optimized for 0ms visual latency, heavily focused on complex React state management and 60fps fluid transitions.",
        tags: ["UI/UX", "React", "Complex State"],
        action: "Play Now"
      },
      weather: {
        title: "DataDriven Weather Demand (The Engine)",
        description: "Automated Python ETL pipeline extracting, processing, and analyzing thousands of weather data points from the AEMET API with CI/CD integration.",
        tags: ["Python", "Data Engineering", "API", "CI/CD"],
        action: "View Code"
      }
    },
    footer: {
      cta: "Have a project in mind? Let's talk."
    }
  },
  es: {
    header: {
      githubText: "GitHub",
    },
    hero: {
      headline: "Construyo aplicaciones inteligentes y sistemas de datos que escalan.",
      tagline: "Full-Stack AI Developer • Data-Driven Web Engineer",
      bio: "Soy un desarrollador de software de 18 años con un hambre insaciable por crear productos reales. Basado en las Islas Canarias, disponible para todo el mundo.",
      ctaPrimary: "Ver mis proyectos",
      ctaSecondary: "Contactar"
    },
    projects: {
      germalearn: {
        title: "Germalearn (El Cerebro)",
        description: "Plataforma de aprendizaje con IA que genera ejercicios dinámicos y algoritmos de repetición espaciada. Desplegada en Vercel con integración completa de Gemini API.",
        tags: ["AI Integration", "React", "Tailwind"],
        action: "Ver App en Vivo"
      },
      reflex: {
        title: "Reflex Game (La Agilidad)",
        description: "Aplicación interactiva optimizada para 0ms de latencia visual, enfocada en la gestión de estados complejos de React y transiciones a 60fps.",
        tags: ["UI/UX", "React", "Complex State"],
        action: "Jugar Ahora"
      },
      weather: {
        title: "DataDriven Weather Demand (El Motor de Datos)",
        description: "Pipeline ETL automatizado en Python que extrae, procesa y analiza miles de puntos de datos climáticos de la API de AEMET integrado con flujos de CI/CD.",
        tags: ["Python", "Data Engineering", "API", "CI/CD"],
        action: "Ver Código"
      }
    },
    footer: {
      cta: "¿Tienes un proyecto en mente? Hablemos."
    }
  }
} as const;
