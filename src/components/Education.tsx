import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';

export const Education = ({ data }: { data: any[] }) => {
  return (
    <section id="education" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
            <GraduationCap size={24} />
          </div>
          <h2 className="text-3xl font-bold text-white">Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((edu, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -2 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-lg font-bold text-white mb-1">{edu.degree || 'Student'}</h3>
              <div className="text-emerald-400 font-medium mb-3">{edu.institution}</div>
              <div className="flex items-center gap-1.5 text-sm text-slate-400">
                <Calendar size={14} />
                <span>{edu.dates}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
