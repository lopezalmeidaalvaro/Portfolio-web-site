import { motion } from 'framer-motion';
import {
  SiReact,
  SiTypescript,
  SiPython,
  SiTailwindcss,
  SiVite,
  SiGit,
  SiFramer,
  SiVercel,
  SiNextdotjs,
  SiNodedotjs,
  SiSupabase,
  SiPostgresql
} from '@icons-pack/react-simple-icons';

const technologies = [
  { name: "Python", Icon: SiPython, hoverColorClass: "group-hover:text-[#3776AB]" },
  { name: "TypeScript", Icon: SiTypescript, hoverColorClass: "group-hover:text-[#3178C6]" },
  { name: "React", Icon: SiReact, hoverColorClass: "group-hover:text-[#61DAFB]" },
  { name: "Next.js", Icon: SiNextdotjs, hoverColorClass: "group-hover:text-[#FFFFFF]" },
  { name: "Node.js", Icon: SiNodedotjs, hoverColorClass: "group-hover:text-[#5FA04E]" },
  { name: "PostgreSQL", Icon: SiPostgresql, hoverColorClass: "group-hover:text-[#4169E1]" },
  { name: "Supabase", Icon: SiSupabase, hoverColorClass: "group-hover:text-[#3FCF8E]" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, hoverColorClass: "group-hover:text-[#06B6D4]" },
  { name: "Vite", Icon: SiVite, hoverColorClass: "group-hover:text-[#646CFF]" },
  { name: "Git", Icon: SiGit, hoverColorClass: "group-hover:text-[#F05032]" },
  { name: "Framer Motion", Icon: SiFramer, hoverColorClass: "group-hover:text-[#0055FF]" },
  { name: "Vercel", Icon: SiVercel, hoverColorClass: "group-hover:text-[#FFFFFF]" }
];

export default function TechStack() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="py-12 border-y border-gray-200 dark:border-gray-900/50"
    >
      <div className="flex flex-wrap items-center gap-4">
        {technologies.map((tech, index) => {
          const Icon = tech.Icon;
          return (
            <div 
              key={index} 
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-950 dark:hover:text-white transition-all cursor-default"
            >
              <Icon className={`w-4 h-4 text-gray-400 dark:text-gray-500 transition-colors ${tech.hoverColorClass}`} />
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
