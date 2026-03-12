import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

export const Experience = ({ data }: { data: any[] }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-sky-500/10 rounded-lg text-sky-400">
            <Briefcase size={24} />
          </div>
          <h2 className="text-3xl font-bold text-white">Experience</h2>
        </div>

        <div className="space-y-4 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
          {data.map((job, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-950 bg-slate-800 text-slate-400 group-hover:text-sky-400 group-hover:border-sky-400/30 transition-colors absolute left-0 md:left-1/2 -translate-x-1/2 z-10">
                <div className="w-3 h-3 bg-current rounded-full" />
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ml-auto md:ml-0 p-1">
                <motion.div 
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer backdrop-blur-sm ${
                    expandedIndex === index 
                      ? 'bg-white/5 border-sky-500/30 shadow-[0_0_30px_rgba(56,189,248,0.1)]' 
                      : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10'
                  }`}
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.role}</h3>
                      <div className="text-lg text-sky-400 font-medium">{job.company}</div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 90 : 0 }}
                      className="text-slate-500"
                    >
                      <ChevronRight size={20} />
                    </motion.div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 text-sm text-slate-400 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span>{job.dates}</span>
                    </div>
                    {job.location && (
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        <span>{job.location}</span>
                      </div>
                    )}
                  </div>

                  <AnimatePresence>
                    {expandedIndex === index && job.bullets && job.bullets.length > 0 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-2 mt-4 pt-4 border-t border-white/5">
                          {job.bullets.map((bullet: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-slate-300">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-400/50 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
