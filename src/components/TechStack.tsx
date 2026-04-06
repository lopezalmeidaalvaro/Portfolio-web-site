import { Terminal, Code2, Layout, GitBranch, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const technologies = [
  { name: "React", icon: Layout },
  { name: "TypeScript", icon: Code2 },
  { name: "Python", icon: Terminal },
  { name: "Tailwind CSS", icon: Code2 },
  { name: "Vercel", icon: Cpu },
  { name: "Git", icon: GitBranch }
];

export default function TechStack() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="py-12 border-y border-gray-900/50"
    >
      <div className="flex flex-wrap items-center gap-4">
        {technologies.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div 
              key={index} 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 border border-gray-800 text-gray-300 hover:bg-gray-800 hover:text-white transition-all cursor-default"
            >
              <Icon className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-semibold tracking-wide">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
