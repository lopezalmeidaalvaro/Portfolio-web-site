import { Globe, Sun, Moon } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

type HeaderProps = {
  lang: string;
  toggleLanguage: () => void;
  t: { githubText: string };
};

export default function Header({ lang, toggleLanguage, t }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between py-6 mt-4 select-none"
    >
      <div className="flex items-center">
        <span className="text-xl tracking-tight">
          <span className="font-bold text-gray-950 dark:text-white">Álvaro</span>
          <span className="font-bold text-emerald-400">.</span>
          <span className="font-light text-gray-500 dark:text-gray-400">dev</span>
        </span>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        <button
          onClick={scrollToProjects}
          className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white transition-colors hidden sm:block cursor-pointer"
        >
          Work
        </button>

        {/* Language selector */}
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-800/80 transition-colors text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white cursor-pointer"
        >
          <Globe className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
          <span>{lang === 'en' ? 'ES' : 'EN'}</span>
        </button>

        {/* Dark/Light mode toggle */}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center p-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-800/80 transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white cursor-pointer"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4 text-amber-500 animate-pulse" />
          ) : (
            <Moon className="w-4 h-4 text-indigo-500" />
          )}
        </button>

        <a
          href="https://www.linkedin.com/in/alvaro-lopez-almeida-ba65153bb"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-800/80 transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white"
          aria-label="LinkedIn"
        >
          <LinkedInIcon className="w-4 h-4" />
        </a>

        <a
          href="https://github.com/lopezalmeidaalvaro"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white transition-colors"
        >
          <GithubIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          <span className="hidden sm:inline">{t.githubText}</span>
        </a>
      </div>
    </motion.header>
  );
}
