import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

type Differentiator = { label: string; detail: string };

type HeroProps = {
  t: {
    headline: string;
    tagline: string;
    bio: string;
    credibilityBar: string;
    ctaPrimary: string;
    ctaSecondary: string;
    differentiators: readonly Differentiator[];
  };
};

export default function Hero({ t }: HeroProps) {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Split headline into lines for per-line color treatment
  const headlineLines = t.headline.split('. ').map((line, i, arr) =>
    i < arr.length - 1 ? line + '.' : line
  );

  return (
    <section className="pt-20 md:pt-32 flex flex-col items-start max-w-4xl">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="headline-display text-5xl md:text-7xl mb-6"
      >
        {headlineLines.map((line, i) => (
          <span key={i}>
            <span className={i === 1 ? 'text-gray-400 dark:text-gray-500' : 'text-gray-950 dark:text-white'}>
              {line}
            </span>
            {i < headlineLines.length - 1 && <br />}
          </span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-base text-gray-500 dark:text-gray-400 font-normal mb-6"
      >
        {t.tagline}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed mb-10"
      >
        {t.bio}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap items-center gap-6 mb-12"
      >
        <button
          onClick={scrollToServices}
          className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gray-950 dark:bg-white text-white dark:text-gray-950 font-semibold hover:bg-gray-900 dark:hover:bg-gray-100 transition-all focus:ring-2 focus:ring-gray-950/50 dark:focus:ring-white/50 focus:outline-none cursor-pointer"
        >
          {t.ctaPrimary}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        <a
          href="mailto:lopezalmeidaalvaro@gmail.com"
          className="relative text-gray-500 dark:text-gray-400 text-sm font-medium hover:text-gray-950 dark:hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gray-950 dark:after:bg-white after:transition-all hover:after:w-full"
        >
          {t.ctaSecondary}
        </a>
      </motion.div>

      {/* Differentiators block */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-0 mb-12">
        {t.differentiators.map((item, i) => (
          <div key={item.label} className="flex flex-row items-center sm:contents">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              className="flex items-start gap-0 sm:pr-8"
            >
              <div className="border-l border-gray-200 dark:border-gray-800 pl-3">
                <p className="text-gray-950 dark:text-white text-sm font-semibold leading-tight">{item.label}</p>
                <p className="text-gray-400 dark:text-gray-500 text-sm leading-snug mt-0.5 max-w-[200px]">{item.detail}</p>
              </div>
            </motion.div>
            {i < t.differentiators.length - 1 && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.55 + i * 0.1 }}
                className="hidden sm:flex items-start pt-0.5 pr-8 text-gray-300 dark:text-gray-700 text-sm select-none"
                aria-hidden="true"
              >
                ·
              </motion.span>
            )}
          </div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="text-xs text-gray-400 dark:text-gray-700"
      >
        {t.credibilityBar}
      </motion.p>
    </section>
  );
}
