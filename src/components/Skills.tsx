import React from 'react';
import { motion } from 'motion/react';
import { Code2 } from 'lucide-react';

export const Skills = ({ data }: { data: any[] }) => {
  return (
    <section id="skills" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
            <Code2 size={24} />
          </div>
          <h2 className="text-3xl font-bold text-white">Skills & Expertise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((skillGroup, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
              <h3 className="text-lg font-medium text-white mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill: string, i: number) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 text-sm rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
