/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { PrintableResume } from './components/PrintableResume';
import resumeData from './data/resume.json';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PrintableResume data={resumeData} />
      <div className="min-h-screen text-slate-200 font-sans selection:bg-sky-500/30 print:hidden">
        <AnimatedBackground />
        
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="splash"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
              className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 mb-8"
              >
                AG
              </motion.div>
              <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-sky-400 to-indigo-400"
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              <main className="max-w-5xl mx-auto px-6 py-12 md:py-24 space-y-32">
                <Hero data={resumeData.basics} />
                <Experience data={resumeData.experience} />
                <Projects data={resumeData.projects} />
                <Skills data={resumeData.skills} />
                <Education data={resumeData.education} />
                <Certifications data={resumeData.certifications} />
              </main>
              
              <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/5 mt-32">
                <p>© {new Date().getFullYear()} {resumeData.basics.name}. All rights reserved.</p>
              </footer>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
