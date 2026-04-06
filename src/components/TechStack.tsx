import { motion } from 'framer-motion';

const technologies = [
  "React", "TypeScript", "Python", "Tailwind CSS", "Vercel", "Git"
];

export default function TechStack() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="py-12 border-y border-gray-900/50"
    >
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {technologies.map((tech, index) => (
          <div key={index} className="text-sm font-semibold tracking-wider text-gray-300 uppercase">
            {tech}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
