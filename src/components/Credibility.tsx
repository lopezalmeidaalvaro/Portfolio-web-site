import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

type CredibilityProps = {
  t: {
    items: readonly string[];
  };
};

export default function Credibility({ t }: CredibilityProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="py-6 border-y border-gray-200 dark:border-gray-900/60"
    >
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-3 gap-x-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium select-none">
        {t.items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-500 dark:text-emerald-400">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </span>
            <span>{item}</span>
            {idx < t.items.length - 1 && (
              <span className="hidden sm:inline text-gray-300 dark:text-gray-800 ml-2" aria-hidden="true">·</span>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
