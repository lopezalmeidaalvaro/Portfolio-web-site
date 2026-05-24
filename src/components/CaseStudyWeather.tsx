import { ArrowLeft, Mail, CheckCircle2, Activity, ArrowDown } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { motion } from 'framer-motion';

type CaseStudyWeatherProps = {
  onClose: () => void;
  lang: 'en' | 'es';
};

const CONTENT = {
  en: {
    backBtn: "Back to Portfolio",
    badge: "Data Engineering Case Study",
    subtitle: "Scientific proof that weather panic costs hotels thousands in profit margins.",
    problemTitle: "The Business Problem",
    problemText1: "Weather volatility often triggers panic-pricing in the hotel industry. When events like Calima (dust storms) hit Gran Canaria, the standard management reaction is to slash room rates out of fear of mass cancellations.",
    problemText2: "This unnecessarily erodes profit margins. Because hotels lack real-time correlation data, they make emotional pricing decisions rather than data-driven ones, losing thousands of euros in average daily rate (ADR) during weather anomalies.",
    howItWorksTitle: "How the Pipeline Works",
    flow: {
      step1: "AEMET API Extraction",
      step1Desc: "Automated daily weather collection",
      step2: "ETL & Validation",
      step2Desc: "Cleaned & verified by pandera data contracts",
      step3: "Statistical Analysis",
      step3Desc: "Pearson correlation coefficient computation",
      step4: "Business Decision",
      step4Desc: "Dynamic pricing recommendations"
    },
    resultTitle: "Key Business Result",
    metricLabel: "Pearson Correlation Coefficient",
    implicationTitle: "Strategic Pricing Implication",
    implicationText: "The analysis scientifically proves that last-minute hotel demand in Gran Canaria is inelastic to Calima weather anomalies (r = 0.268 shows positive but weak correlation; guests do not cancel bookings). Slashing rates only destroys profit margins. Hotels must maintain standard rates during these events.",
    techStackTitle: "Technical Architecture Stack",
    ctaTitle: "Want to transform your data into revenue decisions?",
    ctaGithub: "View Code on GitHub",
    ctaContact: "Discuss a Similar Project"
  },
  es: {
    backBtn: "Volver al Portfolio",
    badge: "Caso de Estudio · Ingeniería de Datos",
    subtitle: "Prueba científica de cómo el pánico meteorológico destruye el margen de beneficio hotelero.",
    problemTitle: "El Problema de Negocio",
    problemText1: "La volatilidad del clima suele provocar pánico en las tarifas del sector hotelero. Cuando ocurre un fenómeno como la Calima en Gran Canaria, la reacción habitual de la dirección es bajar drásticamente los precios por miedo a cancelaciones masivas.",
    problemText2: "Esta bajada destruye el margen de beneficio de forma innecesaria. Al carecer de datos de correlación reales, los hoteles toman decisiones de precios emocionales y reactivas en lugar de guiarse por datos, perdiendo miles de euros de tarifa media diaria (ADR) durante estas anomalías.",
    howItWorksTitle: "Cómo Funciona el Pipeline",
    flow: {
      step1: "Extracción API AEMET",
      step1Desc: "Captura diaria de datos meteorológicos automáticos",
      step2: "ETL y Validación",
      step2Desc: "Limpieza y validación estricta con pandera",
      step3: "Análisis Estadístico",
      step3Desc: "Cálculo de correlación de Pearson",
      step4: "Decisión de Negocio",
      step4Desc: "Recomendación inteligente de tarifas"
    },
    resultTitle: "Resultado Clave de Negocio",
    metricLabel: "Coeficiente de Correlación de Pearson",
    implicationTitle: "Implicación Estratégica de Tarifas",
    implicationText: "El análisis demuestra científicamente que la demanda hotelera de última hora en Gran Canaria es inelástica frente a la Calima (r = 0.268 demuestra que el cliente mantiene su reserva y no cancela). Bajar precios solo erosiona el margen neto. Los hoteles deben mantener sus precios estables durante estos eventos.",
    techStackTitle: "Arquitectura y Stack Técnico",
    ctaTitle: "¿Quieres transformar tus datos en decisiones de facturación?",
    ctaGithub: "Ver Código en GitHub",
    ctaContact: "Contactar para un proyecto similar"
  }
};

export default function CaseStudyWeather({ onClose, lang }: CaseStudyWeatherProps) {
  const c = CONTENT[lang];

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto pt-10 pb-20 px-4"
    >
      {/* Back button */}
      <button
        onClick={onClose}
        className="group inline-flex items-center gap-2 text-gray-400 hover:text-white font-medium mb-10 transition-colors cursor-pointer select-none"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        {c.backBtn}
      </button>

      {/* Header */}
      <header className="mb-12">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20 mb-6 uppercase tracking-wider">
          <Activity className="w-3.5 h-3.5" />
          {c.badge}
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
          DataDriven Weather Demand
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed font-normal max-w-2xl">
          {c.subtitle}
        </p>
      </header>

      {/* Content grid */}
      <div className="space-y-16">
        
        {/* Section 1: Business Problem */}
        <section className="bg-gray-900/40 rounded-3xl border border-gray-800 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-400 rounded-full inline-block" />
            {c.problemTitle}
          </h2>
          <div className="text-gray-400 space-y-4 leading-relaxed text-base md:text-lg">
            <p>{c.problemText1}</p>
            <p>{c.problemText2}</p>
          </div>
        </section>

        {/* Section 2: Flowchart diagram */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-400 rounded-full inline-block" />
            {c.howItWorksTitle}
          </h2>
          
          {/* Desktop SVG flowchart */}
          <div className="hidden md:block bg-gray-900 border border-gray-800 rounded-3xl p-8 overflow-hidden select-none">
            <svg viewBox="0 0 800 120" width="100%" className="w-full text-white font-sans text-xs">
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 7 5 L 0 8.5 z" fill="#10b981" />
                </marker>
              </defs>
              
              {/* Step 1: AEMET */}
              <rect x="10" y="20" width="150" height="70" rx="16" fill="#0b0f19" stroke="#1f2937" strokeWidth="2" className="transition-all duration-300 hover:stroke-emerald-400/50" />
              <text x="85" y="45" textAnchor="middle" fill="#fff" fontWeight="bold">{c.flow.step1}</text>
              <text x="85" y="65" textAnchor="middle" fill="#6b7280" fontSize="9">{c.flow.step1Desc}</text>

              {/* Connector 1 */}
              <line x1="160" y1="55" x2="200" y2="55" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />

              {/* Step 2: ETL */}
              <rect x="210" y="20" width="150" height="70" rx="16" fill="#0b0f19" stroke="#10b981" strokeWidth="2" className="transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]" />
              <text x="285" y="45" textAnchor="middle" fill="#fff" fontWeight="bold">{c.flow.step2}</text>
              <text x="285" y="65" textAnchor="middle" fill="#6b7280" fontSize="9">{c.flow.step2Desc}</text>

              {/* Connector 2 */}
              <line x1="360" y1="55" x2="400" y2="55" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />

              {/* Step 3: Analysis */}
              <rect x="410" y="20" width="150" height="70" rx="16" fill="#0b0f19" stroke="#1f2937" strokeWidth="2" className="transition-all duration-300 hover:stroke-emerald-400/50" />
              <text x="485" y="45" textAnchor="middle" fill="#fff" fontWeight="bold">{c.flow.step3}</text>
              <text x="485" y="65" textAnchor="middle" fill="#6b7280" fontSize="9">{c.flow.step3Desc}</text>

              {/* Connector 3 */}
              <line x1="560" y1="55" x2="600" y2="55" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />

              {/* Step 4: Decision */}
              <rect x="610" y="20" width="180" height="70" rx="16" fill="#0b0f19" stroke="#1f2937" strokeWidth="2" className="transition-all duration-300 hover:stroke-emerald-400/50" />
              <text x="700" y="45" textAnchor="middle" fill="#fff" fontWeight="bold">{c.flow.step4}</text>
              <text x="700" y="65" textAnchor="middle" fill="#6b7280" fontSize="9">{c.flow.step4Desc}</text>
            </svg>
          </div>

          {/* Mobile vertical layout */}
          <div className="md:hidden space-y-6">
            {[
              { title: c.flow.step1, desc: c.flow.step1Desc },
              { title: c.flow.step2, desc: c.flow.step2Desc, highlighted: true },
              { title: c.flow.step3, desc: c.flow.step3Desc },
              { title: c.flow.step4, desc: c.flow.step4Desc }
            ].map((step, idx, arr) => (
              <div key={idx} className="flex flex-col items-center">
                <div className={`w-full bg-gray-900 border ${step.highlighted ? 'border-emerald-500' : 'border-gray-800'} rounded-2xl p-6 text-center`}>
                  <h3 className="text-white font-bold mb-1">{step.title}</h3>
                  <p className="text-xs text-gray-500">{step.desc}</p>
                </div>
                {idx < arr.length - 1 && (
                  <ArrowDown className="w-5 h-5 text-emerald-500 my-2 animate-bounce" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Key Business Result */}
        <section className="relative rounded-3xl bg-gradient-to-br from-gray-900 to-emerald-950/20 border border-emerald-500/20 p-8 md:p-10 overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 text-emerald-400/10 group-hover:text-emerald-400/20 transition-colors">
            <CheckCircle2 className="w-24 h-24 stroke-[1]" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-8 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-6 bg-emerald-400 rounded-full inline-block" />
              {c.resultTitle}
            </h2>
            
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 mb-8">
              {/* Massive Metric Card */}
              <div className="flex-shrink-0 bg-gray-950 border border-gray-800 rounded-2xl p-6 text-center lg:w-60 shadow-xl">
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">
                  {c.metricLabel}
                </div>
                <div className="text-5xl md:text-6xl font-black text-emerald-400 tracking-tighter">
                  r = 0.268
                </div>
                <div className="text-xs text-emerald-500/70 font-semibold mt-2 select-none">
                  Weak Positive Correlation
                </div>
              </div>
              
              {/* Business Implication */}
              <div>
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  {c.implicationTitle}
                </h3>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                  {c.implicationText}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Technical Stack */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-400 rounded-full inline-block" />
            {c.techStackTitle}
          </h2>
          <div className="flex flex-wrap gap-3">
            {["Python", "pandas", "pandera", "AEMET API", "GitHub Actions", "Statistical Modeling", "ETL Pipelines", "CI/CD Validation"].map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm font-semibold text-gray-300 hover:border-emerald-500/30 transition-all select-none"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Section 5: CTA Block */}
        <section className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl select-none" />
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight max-w-xl mx-auto leading-tight">
            {c.ctaTitle}
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="https://github.com/lopezalmeidaalvaro/datadriven-weather-demand"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-gray-950 font-semibold hover:bg-gray-100 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              {c.ctaGithub}
            </a>
            
            <a
              href="mailto:lopezalmeidaalvaro@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-gray-700 bg-gray-950 text-white font-semibold hover:border-gray-500 transition-colors"
            >
              <Mail className="w-4 h-4" />
              {c.ctaContact}
            </a>
          </div>
        </section>
        
      </div>
    </motion.article>
  );
}
