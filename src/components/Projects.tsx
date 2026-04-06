import { ArrowUpRight, ExternalLink, FileText } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { motion } from 'framer-motion';

type ProjectData = {
  title: string;
  description: string;
  tags: readonly string[];
  action: string;
};

type ProjectsProps = {
  t: {
    weather: ProjectData;
    germalearn: ProjectData;
    reflex: ProjectData;
  };
};

export default function Projects({ t }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Weather Demand - Featured Item taking 2 columns on lg screens */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative lg:col-span-2 rounded-3xl bg-gray-900 border border-gray-800 p-8 hover:bg-gray-800/80 transition-colors flex flex-col justify-between overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="w-6 h-6 text-gray-400" />
          </div>
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {t.weather.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-gray-950 rounded-full text-xs font-medium text-gray-300 border border-gray-800">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{t.weather.title}</h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">{t.weather.description}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="https://github.com/lopezalmeidaalvaro/datadriven-weather-demand"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-700 bg-gray-950 text-white font-semibold text-sm hover:bg-gray-800 hover:border-gray-500 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              {t.weather.action}
            </a>
            <a 
              href="https://github.com/lopezalmeidaalvaro/datadriven-weather-demand/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-800 bg-transparent text-gray-300 font-semibold text-sm hover:text-white hover:border-gray-600 transition-colors"
            >
              <FileText className="w-4 h-4" />
              Technical Report
            </a>
          </div>
        </motion.div>

        {/* Germalearn - 1 column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group relative rounded-3xl bg-gray-900 border border-gray-800 p-8 hover:bg-gray-800/50 transition-colors flex flex-col justify-between overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="w-6 h-6 text-emerald-400" />
          </div>
          <div className="mb-8">
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex flex-wrap gap-2">
                {t.germalearn.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-950 rounded-full text-xs font-medium text-emerald-400 border border-gray-800">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["SM-2 Algorithm", "Gemini Flash API", "Vite", "CI/CD"].map((tag, i) => (
                  <span key={`sub-${i}`} className="text-xs font-medium text-gray-500 px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{t.germalearn.title}</h3>
            <p className="text-gray-400 leading-relaxed">{t.germalearn.description}</p>
          </div>
          <div>
            <a 
              href="https://germalearn-app.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-gray-950 font-semibold text-sm hover:bg-gray-100 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              {t.germalearn.action}
            </a>
          </div>
        </motion.div>

        {/* Reflex Game - Full Width on bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group relative md:col-span-2 lg:col-span-3 rounded-3xl bg-gradient-to-br from-gray-900 to-indigo-950/20 border border-gray-800 p-8 hover:border-indigo-500/50 transition-colors flex flex-col md:flex-row justify-between md:items-end gap-8 overflow-hidden"
        >
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-6">
              {t.reflex.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-indigo-500/10 rounded-full text-xs font-medium text-indigo-300 border border-indigo-500/20">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{t.reflex.title}</h3>
            <p className="text-gray-400 leading-relaxed">{t.reflex.description}</p>
          </div>
          <div>
            <a 
              href="https://app-reflex-game.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-500 text-white font-semibold text-sm hover:bg-indigo-600 transition-colors"
            >
              {t.reflex.action}
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
