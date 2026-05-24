import { Database, Workflow, FileBarChart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

type ServiceItem = {
  id: string;
  title: string;
  description: string;
};

type ServicesProps = {
  t: {
    title: string;
    subtitle: string;
    ctaText: string;
    list: readonly ServiceItem[];
  };
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  crm: Database,
  etl: Workflow,
  audit: FileBarChart,
};

export default function Services({ t }: ServicesProps) {
  return (
    <section id="services" className="py-20 scroll-mt-24">
      <div className="mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
        >
          {t.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 max-w-xl text-lg"
        >
          {t.subtitle}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.list.map((service, i) => {
          const IconComponent = iconMap[service.id] || Database;
          
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-3xl bg-gray-900 border border-gray-800 p-8 hover:bg-gray-800/40 hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden"
            >
              <div>
                {/* Glowing effect behind icon on card hover */}
                <div className="absolute -top-12 -left-12 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all duration-300" />
                
                {/* Icon container */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-950 border border-gray-800 text-indigo-400 mb-6 group-hover:scale-110 group-hover:text-indigo-300 transition-all duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>
                
                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-indigo-200 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>
              
              {/* Call to Action */}
              <div className="pt-2">
                <a
                  href="mailto:lopezalmeidaalvaro@gmail.com"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors"
                >
                  {t.ctaText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
