import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { motion } from 'framer-motion';

type FooterProps = {
  t: {
    cta: string;
    responseTime: string;
  };
};

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="border-t border-gray-900 mt-20">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <h2 className="text-2xl font-bold text-white mb-3">{t.cta}</h2>
          <a
            href="mailto:lopezalmeidaalvaro@gmail.com"
            className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
          >
            lopezalmeidaalvaro@gmail.com
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <p className="mt-2 text-xs text-gray-600">{t.responseTime}</p>
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://github.com/lopezalmeidaalvaro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              GitHub
            </a>
            <span className="text-gray-700 text-sm">·</span>
            <a
              href="https://www.linkedin.com/in/alvaro-lopez-almeida-ba65153bb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-500 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
