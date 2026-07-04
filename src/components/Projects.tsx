import { ArrowUpRight, ExternalLink, FileText } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type ProjectData = {
  title: string;
  description: string;
  tags: readonly string[];
  action: string;
  caseStudy?: string;
  problem: string;
  url?: string;
};

type ProjectsProps = {
  t: {
    qade: ProjectData;
    weather: ProjectData;
    germalearn: ProjectData;
    neurosymbolic: ProjectData;
    reflex: ProjectData;
  };
  onViewCaseStudy?: () => void;
  view?: 'main' | 'lab';
  lang?: 'en' | 'es';
};

export default function Projects({ t, onViewCaseStudy, view = 'main', lang = 'en' }: ProjectsProps) {
  const renderDescription = (description: string, isFeatured = false) => {
    const lines = description.split('\n');
    return (
      <div className="space-y-3">
        {lines.map((line, idx) => {
          const isTechStack = line.trim().startsWith('(') && line.trim().endsWith(')');
          if (isTechStack) {
            return (
              <p key={idx} className="text-xs text-gray-400 dark:text-gray-500 font-semibold mt-4 tracking-wide uppercase select-none">
                {line}
              </p>
            );
          }
          return (
            <p key={idx} className={`text-gray-600 dark:text-gray-400 leading-relaxed ${isFeatured ? 'text-lg max-w-xl' : 'text-sm md:text-base'}`}>
              {line}
            </p>
          );
        })}
      </div>
    );
  };

  if (view === 'main') {
    return (
      <section id="projects" className="py-20 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          {/* QADE - Primary Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 md:p-10 hover:bg-gray-50/80 dark:hover:bg-gray-800/80 transition-colors flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-6 h-6 text-gray-400" />
            </div>
            <div className="mb-8">
              <p className="text-xs text-gray-400 dark:text-gray-600 uppercase tracking-widest font-medium mb-4">{t.qade.problem}</p>
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {t.qade.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-50 dark:bg-gray-950 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-800">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-950 dark:text-white mb-4 tracking-tight">{t.qade.title}</h3>
              {renderDescription(t.qade.description, true)}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={t.qade.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-950 dark:bg-white text-white dark:text-gray-950 font-semibold text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {t.qade.action}
              </a>
            </div>
          </motion.div>

          {/* Weather Demand - Secondary Featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group relative rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 md:p-10 hover:bg-gray-50/80 dark:hover:bg-gray-800/80 transition-colors flex flex-col justify-between overflow-hidden mt-6"
          >
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-6 h-6 text-gray-400" />
            </div>
            <div className="mb-8">
              <p className="text-xs text-gray-400 dark:text-gray-600 uppercase tracking-widest font-medium mb-4">{t.weather.problem}</p>
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {t.weather.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-50 dark:bg-gray-950 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-800">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-950 dark:text-white mb-4 tracking-tight">{t.weather.title}</h3>
              {renderDescription(t.weather.description, false)}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://github.com/lopezalmeidaalvaro/datadriven-weather-demand"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 text-gray-700 dark:text-white font-semibold text-sm hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-gray-700 dark:text-white" />
                {t.weather.action}
              </a>
              {onViewCaseStudy && (
                <button
                  onClick={onViewCaseStudy}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 dark:border-gray-800 bg-transparent text-gray-600 dark:text-gray-300 font-semibold text-sm hover:text-gray-950 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-600 transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  {t.weather.caseStudy || "View Case Study"}
                </button>
              )}
            </div>
          </motion.div>

          {/* Button to navigate to lab */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex justify-center"
          >
            <Link
              to="/lab"
              onClick={() => window.scrollTo({ top: 0 })}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 text-gray-600 dark:text-gray-300 font-semibold text-sm hover:border-gray-400 dark:hover:border-gray-700 hover:text-gray-950 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-md hover:shadow-indigo-500/5"
            >
              {lang === 'es'
                ? "Ver proyectos de investigación & side projects →"
                : "See research & side projects →"}
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  // Lab View: Shows Germalearn, Neurosymbolic, Reflex Game
  const labProjects = [
    t.germalearn,
    t.neurosymbolic,
    t.reflex
  ];

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {labProjects.map((project, idx) => {
          const isGithub = project.url?.includes('github.com');
          const Icon = isGithub ? GithubIcon : ExternalLink;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 hover:bg-gray-50/40 dark:hover:bg-gray-800/40 hover:border-indigo-500/20 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden"
            >
              <div>
                <p className="text-xs text-gray-400 dark:text-gray-600 uppercase tracking-widest font-medium mb-4">{project.problem}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-50 dark:bg-gray-950 rounded-full text-xs font-semibold text-indigo-600 dark:text-indigo-300 border border-indigo-500/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-3 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-200 transition-colors duration-300">
                  {project.title}
                </h3>
                {renderDescription(project.description, false)}
              </div>
              
              <div className="mt-8 pt-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-700 dark:text-white font-semibold text-sm hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
                >
                  <Icon className="w-4 h-4 text-gray-700 dark:text-white" />
                  {project.action}
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
