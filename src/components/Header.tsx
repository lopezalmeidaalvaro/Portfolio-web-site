import { Globe, Sun, Moon } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

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
