import { Globe } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { motion } from 'framer-motion';

type HeaderProps = {
  lang: string;
  toggleLanguage: () => void;
  t: { githubText: string };
};

export default function Header({ lang, toggleLanguage, t }: HeaderProps) {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between py-6 mt-4"
    >
      <div className="flex items-center">
        <span className="text-xl font-bold tracking-tight text-white">
          Álvaro.dev
        </span>
        <div className="w-2 h-2 rounded-full bg-emerald-400 ml-1.5 mt-2 animate-pulse" />
      </div>

      <div className="flex items-center gap-6">
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-800 bg-gray-900/50 hover:bg-gray-800/80 transition-colors text-sm font-medium text-gray-300 hover:text-white"
        >
          <Globe className="w-4 h-4 text-emerald-400" />
          <span>{lang === 'en' ? 'ES' : 'EN'}</span>
        </button>

        <a 
          href="https://github.com/lopezalmeidaalvaro" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
        >
          <GithubIcon className="w-4 h-4" />
          <span className="hidden sm:inline">{t.githubText}</span>
        </a>
      </div>
    </motion.header>
  );
}
