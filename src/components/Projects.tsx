import React from 'react';
import { motion } from 'motion/react';
import { FolderGit2 } from 'lucide-react';

export const Projects = ({ data }: { data: any[] }) => {
  if (!data || data.length === 0) return null;

  return (
    <section id="projects" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
            <FolderGit2 size={24} />
          </div>
          <h2 className="text-3xl font-bold text-white">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 backdrop-blur-sm flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech: string, i: number) => (
                  <span 
                    key={i}
                    className="px-2 py-1 text-xs rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 mt-auto">
                {project.bullets.map((bullet: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400/50 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
