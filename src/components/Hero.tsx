import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Linkedin, Download, ChevronDown } from 'lucide-react';

export const Hero = ({ data }: { data: any }) => {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center relative pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
          {data.name}
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 mb-6">
          {data.title}
        </h2>
        
        <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-8">
          <div className="flex items-center gap-1.5">
            <MapPin size={16} />
            <span>{data.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail size={16} />
            <a href={`mailto:${data.email}`} className="hover:text-sky-400 transition-colors">{data.email}</a>
          </div>
          <div className="flex items-center gap-1.5">
            <Phone size={16} />
            <span>{data.phone}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Linkedin size={16} />
            <a href={`https://${data.links.LinkedIn}`} target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">LinkedIn</a>
          </div>
        </div>

        <div className="prose prose-invert max-w-3xl text-slate-300 text-lg leading-relaxed mb-10">
          {data.summary.split('\n\n').map((paragraph: string, i: number) => (
            <p key={i} className="mb-4">{paragraph}</p>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <button 
            onClick={scrollToExperience}
            className="px-6 py-3 bg-white text-slate-950 font-medium rounded-full hover:bg-sky-50 transition-colors flex items-center gap-2 cursor-pointer"
          >
            View Experience
            <ChevronDown size={18} />
          </button>
          <a 
            href="/Ajay_Gupta_Resume.pdf"
            download="Ajay_Gupta_Resume.pdf"
            className="px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-sm cursor-pointer"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};
