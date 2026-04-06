import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

type FooterProps = {
  t: {
    cta: string;
  };
};

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="border-t border-gray-900 mt-20">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-center md:text-left"
          >
            <h2 className="text-2xl font-bold text-white mb-2">{t.cta}</h2>
            <a 
              href="mailto:lopezalmeidaalvaro@gmail.com" 
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              lopezalmeidaalvaro@gmail.com
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/lopezalmeidaalvaro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/alvaro-lopez-almeida" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
