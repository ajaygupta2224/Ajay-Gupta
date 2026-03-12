import React from 'react';
import { motion } from 'motion/react';
import { Award } from 'lucide-react';

export const Certifications = ({ data }: { data: string[] }) => {
  if (!data || data.length === 0) return null;

  return (
    <section id="certifications" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400">
            <Award size={24} />
          </div>
          <h2 className="text-3xl font-bold text-white">Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((cert, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -2, scale: 1.02 }}
              className="p-5 rounded-xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 hover:border-amber-500/30 transition-all duration-300 backdrop-blur-sm flex items-start gap-3"
            >
              <Award className="text-amber-400 shrink-0 mt-0.5" size={18} />
              <span className="text-slate-200 font-medium leading-snug">{cert}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
