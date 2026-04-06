import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

type HeroProps = {
  t: {
    headline: string;
    tagline: string;
    bio: string;
    credibilityBar: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
};

export default function Hero({ t }: HeroProps) {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-20 md:pt-32 flex flex-col items-start max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Open to freelance & remote roles
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
      >
        {t.headline}
      </motion.h1>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-xl md:text-2xl font-medium text-indigo-300 mb-6"
      >
        {t.tagline}
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-lg text-gray-400 max-w-2xl leading-relaxed mb-10"
      >
        {t.bio}
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-wrap items-center gap-4"
      >
        <button 
          onClick={scrollToProjects}
          className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-950 font-semibold hover:bg-gray-100 transition-all focus:ring-2 focus:ring-white/50 focus:outline-none"
        >
          {t.ctaPrimary}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        <a 
          href="mailto:lopezalmeidaalvaro@gmail.com"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 border border-gray-800 text-white font-medium hover:bg-gray-800 transition-colors focus:ring-2 focus:ring-gray-700 focus:outline-none"
        >
          <Mail className="w-4 h-4 text-emerald-400" />
          {t.ctaSecondary}
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-10 text-sm text-gray-600 tracking-wide font-medium"
      >
        {t.credibilityBar}
      </motion.div>
    </section>
  );
}
