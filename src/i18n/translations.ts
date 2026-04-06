export type Language = 'en' | 'es';

export const translations = {
  en: {
    header: {
      githubText: "GitHub",
    },
    hero: {
      headline: "I build intelligent applications and scalable data systems.",
      tagline: "Full-Stack AI Developer • Data-Driven Web Engineer • Software Developer",
      bio: "18-year-old software engineer with an aggressive hunger for shipping real-world products. Based in the Canary Islands, available worldwide.",
      ctaPrimary: "View my work",
      ctaSecondary: "Get in touch"
    },
    projects: {
      germalearn: {
        title: "Germalearn (The Brain)",
        description: "German learning platform with spaced repetition algorithms and dynamic exercise generation via AI.",
        tags: ["AI Integration", "React", "Tailwind"],
        action: "Live App"
      },
      reflex: {
        title: "Reflex Game (The Agility)",
        description: "Interactive reflex application focused on immediate React state response and fluid transitions.",
        tags: ["UI/UX", "React", "Complex State"],
        action: "Play Now"
      },
      weather: {
        title: "DataDriven Weather Demand (The Engine)",
        description: "Automated ETL pipeline that extracts, transforms, and analyzes massive weather data from the AEMET API.",
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
      tagline: "Full-Stack AI Developer • Data-Driven Web Engineer • Software Developer",
      bio: "Soy un desarrollador de software de 18 años con un hambre insaciable por crear productos reales. Basado en las Islas Canarias, disponible para todo el mundo.",
      ctaPrimary: "Ver mis proyectos",
      ctaSecondary: "Contactar"
    },
    projects: {
      germalearn: {
        title: "Germalearn (El Cerebro)",
        description: "Plataforma de aprendizaje de alemán con algoritmos de repetición espaciada y generación de ejercicios dinámicos mediante IA.",
        tags: ["AI Integration", "React", "Tailwind"],
        action: "Ver App en Vivo"
      },
      reflex: {
        title: "Reflex Game (La Agilidad)",
        description: "Aplicación interactiva de reflejos enfocada en la respuesta inmediata del estado de React y transiciones fluidas.",
        tags: ["UI/UX", "React", "Complex State"],
        action: "Jugar Ahora"
      },
      weather: {
        title: "DataDriven Weather Demand (El Motor de Datos)",
        description: "Pipeline ETL automatizado que extrae, transforma y analiza datos meteorológicos masivos desde la API de AEMET.",
        tags: ["Python", "Data Engineering", "API", "CI/CD"],
        action: "Ver Código"
      }
    },
    footer: {
      cta: "¿Tienes un proyecto en mente? Hablemos."
    }
  }
} as const;
