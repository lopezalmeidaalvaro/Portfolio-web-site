import { ArrowLeft, Ban, Coins, TrendingUp, CheckCircle2, Activity, Database, FileSpreadsheet, PlayCircle, Mail } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { motion } from 'framer-motion';

type CaseStudyWeatherProps = {
  onClose: () => void;
  lang: 'en' | 'es';
};

const CONTENT = {
  en: {
    backBtn: "Volver al portfolio",
    title: "Calima Weather Impact on Hotel Demand",
    subtitle: "Gran Canaria · 4-Star Hotels · FY2025",
    badge: "Data Engineering · Revenue Management",
    
    problemTitle: "The Business Problem",
    problemDesc: "Gran Canaria hotels slashed room rates reactively during Calima sandstorm alerts, assuming it reduced tourist demand. This study proves that this practice destroys net profit margins without any empirical basis.",
    
    methodologyTitle: "3-Step Applied Methodology",
    steps: [
      {
        num: "01",
        title: "Data Extraction",
        desc: "3,588 historical records from ISTAC + AEMET local weather stations."
      },
      {
        num: "02",
        title: "ETL & Validation",
        desc: "Dynamic threshold of +4.5°C above monthly average + humidity < 55%. Fail-fast contracts with pandera."
      },
      {
        num: "03",
        title: "Statistical Analysis",
        desc: "Pearson correlation coefficient computed on relational matrices of Calima events vs booking pacing."
      }
    ],
    
    tableTitle: "Empirical Monthly Pacing & Volatility",
    tableHeaderMonth: "Month",
    tableHeaderCalima: "Calima Days",
    tableHeaderLastMinute: "% Last Minute",
    tableHeaderTourists: "Tourists",
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    
    resultTitle: "Key Statistical Result",
    resultBig: "r = 0.268",
    resultLabel: "Pearson Correlation Coefficient",
    resultDesc: "Demand is completely inelastic to Calima events. Guests do not cancel reservations; hotels must NOT impulsively slash room rates during sandstorms.",
    
    recommendationsTitle: "Strategic B2B Recommendations",
    recs: [
      {
        title: "Halt Reactive Price Drops",
        desc: "Panic discounting during Calima alerts erodes revenue margins without stimulating any incremental booking demand."
      },
      {
        title: "Reallocate Marketing Spend",
        desc: "The Customer Acquisition Cost (CAC) for emergency alerts should be redirected to high-ROI seasonal campaigns."
      },
      {
        title: "Trust the Pacing",
        desc: "Real-time pick-up metrics are far more reliable pricing indicators than short-term local weather forecasts."
      }
    ],
    
    ctaTitle: "Want to transform your data into revenue decisions?",
    ctaGithub: "View Code on GitHub",
    ctaContact: "Discuss a Similar Project"
  },
  es: {
    backBtn: "Volver al portfolio",
    title: "Calima Weather Impact on Hotel Demand",
    subtitle: "Gran Canaria · 4-Star Hotels · FY2025",
    badge: "Data Engineering · Revenue Management",
    
    problemTitle: "El Problema de Negocio",
    problemDesc: "Los hoteles de Gran Canaria bajaban precios de forma reactiva durante alertas de Calima asumiendo que reducían la demanda. Este estudio demuestra que esa práctica destruye margen sin ninguna base empírica.",
    
    methodologyTitle: "Metodología Aplicada en 3 Pasos",
    steps: [
      {
        num: "01",
        title: "Data Extraction",
        desc: "3,588 registros ISTAC + registros meteorológicos de estaciones AEMET."
      },
      {
        num: "02",
        title: "ETL & Validation",
        desc: "Umbral dinámico: +4.5°C sobre media mensual + humedad < 55%. Contratos de datos fail-fast con pandera."
      },
      {
        num: "03",
        title: "Statistical Analysis",
        desc: "Coeficiente de correlación de Pearson sobre matriz relacional de eventos Calima vs comportamiento de reservas."
      }
    ],
    
    tableTitle: "Datos Reales de Ocupación y Volatilidad",
    tableHeaderMonth: "Mes",
    tableHeaderCalima: "Días Calima",
    tableHeaderLastMinute: "% Last Minute",
    tableHeaderTourists: "Turistas",
    months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    
    resultTitle: "Resultado Estadístico Clave",
    resultBig: "r = 0.268",
    resultLabel: "Coeficiente de Correlación de Pearson",
    resultDesc: "Demanda inelástica al Calima. Los clientes mantienen sus reservas, por lo que bajar tarifas solo destruye tu margen de beneficio neto.",
    
    recommendationsTitle: "Recomendaciones Estratégicas de Negocio",
    recs: [
      {
        title: "Halt Reactive Price Drops",
        desc: "Los descuentos por pánico durante el Calima erosionan márgenes sin estimular ninguna demanda incremental."
      },
      {
        title: "Reallocate Marketing Spend",
        desc: "El CAC invertido en campañas de emergencia climática debe redirigirse a campañas estacionales de alto ROI."
      },
      {
        title: "Trust the Pacing",
        desc: "Las métricas reales de pick-up en libros de reserva son más fiables para la fijación de tarifas que los pronósticos climáticos."
      }
    ],
    
    ctaTitle: "¿Quieres transformar tus datos en decisiones de facturación?",
    ctaGithub: "Ver Código en GitHub",
    ctaContact: "Contactar para un proyecto similar"
  }
};

const TABLE_DATA = [
  { monthIdx: 0, calimaDays: 0, lastMinute: "11.51%", tourists: 278, highlight: false },
  { monthIdx: 1, calimaDays: 0, lastMinute: "16.72%", tourists: 323, highlight: false },
  { monthIdx: 2, calimaDays: 0, lastMinute: "13.95%", tourists: 337, highlight: false },
  { monthIdx: 3, calimaDays: 0, lastMinute: "16.30%", tourists: 276, highlight: false },
  { monthIdx: 4, calimaDays: 0, lastMinute: "15.04%", tourists: 226, highlight: false },
  { monthIdx: 5, calimaDays: 0, lastMinute: "16.42%", tourists: 274, highlight: false },
  { monthIdx: 6, calimaDays: 2, lastMinute: "17.84%", tourists: 342, highlight: true },
  { monthIdx: 7, calimaDays: 0, lastMinute: "13.59%", tourists: 309, highlight: false },
  { monthIdx: 8, calimaDays: 3, lastMinute: "19.11%", tourists: 314, highlight: true },
  { monthIdx: 9, calimaDays: 0, lastMinute: "23.80%", tourists: 332, highlight: false },
  { monthIdx: 10, calimaDays: 0, lastMinute: "21.09%", tourists: 313, highlight: false },
  { monthIdx: 11, calimaDays: 0, lastMinute: "12.88%", tourists: 264, highlight: false }
];

export default function CaseStudyWeather({ onClose, lang }: CaseStudyWeatherProps) {
  const c = CONTENT[lang];
  const steps = c.steps;
  const recs = c.recs;

  // Custom icons mapping for section 5 recommendations
  const recIcons = [
    <Ban className="w-6 h-6 text-rose-500" />,
    <Coins className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
    <TrendingUp className="w-6 h-6 text-indigo-500" />
  ];

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto pt-10 pb-20 px-4"
    >
      {/* Back button */}
      <button
        onClick={onClose}
        className="group inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white font-semibold mb-10 transition-colors cursor-pointer select-none"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        {c.backBtn}
      </button>

      {/* Header */}
      <header className="mb-14">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold border border-emerald-500/20 mb-6 uppercase tracking-wider select-none">
          <Activity className="w-3.5 h-3.5" />
          {c.badge}
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-gray-950 dark:text-white tracking-tight mb-4 leading-tight">
          {c.title}
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed font-normal max-w-2xl">
          {c.subtitle}
        </p>
      </header>

      {/* Content grid */}
      <div className="space-y-20">
        
        {/* Section 1: Business Problem */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-900/40 rounded-3xl border border-gray-200 dark:border-gray-800 p-8 md:p-10 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-950 dark:text-white mb-6 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-400 rounded-full inline-block" />
            {c.problemTitle}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
            {c.problemDesc}
          </p>
        </motion.section>

        {/* Section 2: Methodology Stepper */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-bold text-gray-950 dark:text-white mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-400 rounded-full inline-block" />
            {c.methodologyTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {steps.map((step, idx) => {
              const icons = [
                <PlayCircle className="w-5 h-5 text-emerald-500" />,
                <Database className="w-5 h-5 text-indigo-500" />,
                <FileSpreadsheet className="w-5 h-5 text-brand-indigo" />
              ];
              
              return (
                <div 
                  key={idx} 
                  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 relative flex flex-col justify-between shadow-sm group hover:border-indigo-500/20 transition-colors"
                >
                  <div className="absolute top-4 right-6 text-3xl font-black text-gray-100 dark:text-gray-800/40 select-none">
                    {step.num}
                  </div>
                  
                  <div className="mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-850 flex items-center justify-center text-gray-600 dark:text-gray-400 mb-6 shadow-sm">
                      {icons[idx]}
                    </div>
                    <h3 className="font-bold text-gray-950 dark:text-white text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* Section 3: Data Table */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-950 dark:text-white mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-400 rounded-full inline-block" />
            {c.tableTitle}
          </h2>

          {/* Desktop HTML table */}
          <div className="hidden md:block bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/30 text-gray-500 dark:text-gray-400 font-semibold select-none">
                    <th className="p-4 pl-8">{c.tableHeaderMonth}</th>
                    <th className="p-4 text-center">{c.tableHeaderCalima}</th>
                    <th className="p-4 text-center">{c.tableHeaderLastMinute}</th>
                    <th className="p-4 pr-8 text-right">{c.tableHeaderTourists}</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE_DATA.map((row, idx) => (
                    <tr 
                      key={idx} 
                      className={`border-b border-gray-100 dark:border-gray-850 hover:bg-gray-50/60 dark:hover:bg-gray-800/10 transition-colors ${
                        row.highlight 
                          ? 'bg-amber-500/5 dark:bg-amber-500/10 border-l-4 border-amber-400 dark:border-amber-500 font-semibold text-gray-950 dark:text-white' 
                          : 'text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      <td className="p-4 pl-8 font-medium">{c.months[row.monthIdx]}</td>
                      <td className="p-4 text-center">{row.calimaDays}</td>
                      <td className="p-4 text-center">{row.lastMinute}</td>
                      <td className="p-4 pr-8 text-right">{row.tourists}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile responsive cards list */}
          <div className="md:hidden space-y-4">
            {TABLE_DATA.map((row, idx) => (
              <div 
                key={idx}
                className={`p-5 rounded-3xl border transition-all ${
                  row.highlight 
                    ? 'bg-amber-500/5 dark:bg-amber-500/10 border-amber-400 dark:border-amber-500 shadow-sm' 
                    : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800'
                } flex flex-col gap-3`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-950 dark:text-white text-base">
                    {c.months[row.monthIdx]}
                  </span>
                  {row.calimaDays > 0 ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold border border-amber-500/20 select-none">
                      {row.calimaDays} {lang === 'es' ? 'Días Calima' : 'Calima Days'}
                    </span>
                  ) : (
                    <span className="text-xs text-gray-400 dark:text-gray-600">0 days</span>
                  )}
                </div>
                
                <div className="h-px bg-gray-100 dark:bg-gray-800" />
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-gray-400 dark:text-gray-500 select-none">{c.tableHeaderLastMinute}</span>
                    <span className="font-bold text-gray-900 dark:text-white text-sm">{row.lastMinute}</span>
                  </div>
                  <div className="flex flex-col gap-0.5 text-right">
                    <span className="text-gray-400 dark:text-gray-500 select-none">{c.tableHeaderTourists}</span>
                    <span className="font-bold text-gray-900 dark:text-white text-sm">{row.tourists}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section 4: Key Business Result */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-gradient-to-br from-white to-emerald-500/5 dark:from-gray-900 dark:to-emerald-950/20 border border-emerald-500/20 p-8 md:p-10 overflow-hidden group shadow-sm"
        >
          <div className="absolute top-0 right-0 p-8 text-emerald-500/5 dark:text-emerald-400/10 group-hover:text-emerald-400/20 transition-colors select-none">
            <CheckCircle2 className="w-24 h-24 stroke-[1]" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-gray-950 dark:text-white mb-8 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-6 bg-emerald-400 rounded-full inline-block" />
              {c.resultTitle}
            </h2>
            
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              {/* Massive Metric Card */}
              <div className="flex-shrink-0 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 text-center lg:w-60 shadow-md">
                <div className="text-gray-400 dark:text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2 select-none">
                  {c.resultLabel}
                </div>
                <div className="text-5xl md:text-6xl font-black text-emerald-600 dark:text-emerald-400 tracking-tighter">
                  {c.resultBig}
                </div>
                <div className="text-xs text-emerald-600 dark:text-emerald-500/70 font-semibold mt-2 select-none">
                  Inelastic Demand Proof
                </div>
              </div>
              
              {/* Business Implication */}
              <div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                  {c.resultDesc}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 5: Recommendations */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-bold text-gray-950 dark:text-white mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-400 rounded-full inline-block" />
            {c.recommendationsTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recs.map((rec, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 hover:bg-gray-50 dark:hover:bg-gray-850/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-850 flex items-center justify-center mb-6 shadow-sm">
                    {recIcons[idx]}
                  </div>
                  <h3 className="font-bold text-gray-950 dark:text-white text-lg mb-2">{rec.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{rec.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section 6: CTA Block */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-sm"
        >
          <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl select-none" />
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-950 dark:text-white mb-4 tracking-tight max-w-xl mx-auto leading-tight">
            {c.ctaTitle}
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="https://github.com/lopezalmeidaalvaro/datadriven-weather-demand"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gray-950 dark:bg-white text-white dark:text-gray-950 font-semibold hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors shadow-md cursor-pointer"
            >
              <GithubIcon className="w-4 h-4 text-white dark:text-gray-950" />
              {c.ctaGithub}
            </a>
            
            <a
              href="mailto:lopezalmeidaalvaro@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-700 dark:text-white font-semibold hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              {c.ctaContact}
            </a>
          </div>
        </motion.section>
        
      </div>
    </motion.article>
  );
}
