'use client';

import { motion } from 'framer-motion';
import { projects } from '../app/data';
import { ExternalLink, Terminal, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glow for the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container">
        <div className="mb-24 flex lg:flex-col justify-between items-end lg:items-start gap-8">
          <div className="max-w-2xl">
            <h2 className="text-xs uppercase tracking-[0.4em] font-black text-primary mb-6">Selected Work</h2>
            <h3 className="text-6xl md:text-4xl font-black tracking-tight leading-tight">
              Crafting <span className="text-gradient">high-performance</span> digital products.
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-40 lg:gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="group grid grid-cols-12 gap-16 lg:flex lg:flex-col items-center"
            >
              {/* Browser Mockup */}
              <div className="col-span-7 lg:w-full relative aspect-video rounded-[32px] overflow-hidden glass border border-white/10 group-hover:border-primary/50 transition-all duration-700 shadow-2xl group-hover:shadow-primary/20">
                <div className="h-10 border-b border-white/5 px-5 flex items-center gap-2 bg-white/[0.03]">
                   <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-white/10"></div>
                      <div className="w-3 h-3 rounded-full bg-white/10"></div>
                      <div className="w-3 h-3 rounded-full bg-white/10"></div>
                   </div>
                   <div className="flex-grow mx-6 h-6 rounded-lg bg-black/40 border border-white/5 flex items-center justify-center">
                      <span className="text-[10px] text-secondary tracking-widest uppercase font-bold opacity-50">{project.link}</span>
                   </div>
                </div>
                
                <div className="relative h-[calc(100%-40px)] overflow-hidden bg-[#050505]">
                   {project.image ? (
                     <Image 
                       src={project.image} 
                       alt={project.title}
                       fill
                       className="object-cover object-top transition-all duration-1000 scale-[1.01] group-hover:scale-105"
                     />
                   ) : (
                     <div className="w-full h-full flex items-center justify-center opacity-5">
                        <Terminal size={120} />
                     </div>
                   )}
                   
                   <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>

              {/* Info Area */}
              <div className="col-span-5 lg:w-full">
                <div className="space-y-8">
                  <div className="space-y-4">
                     <div className="flex items-center gap-4">
                        <h4 className="text-5xl font-black tracking-tighter">{project.title}</h4>
                        <div className="h-px flex-grow bg-white/10"></div>
                     </div>
                     <div className="flex gap-2 flex-wrap">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] uppercase tracking-widest font-black text-primary border border-primary/20 px-3 py-1 rounded-full bg-primary/5">
                            {tag}
                          </span>
                        ))}
                     </div>
                  </div>
                  
                  <p className="text-xl text-secondary leading-relaxed font-medium">
                    {project.description}
                  </p>

                  <div className="flex gap-8 items-center pt-8 border-t border-white/5">
                    <a href={project.link} target="_blank" className="btn btn-primary">
                      Live Project <ArrowUpRight size={18} className="ml-2" />
                    </a>
                    <a href={project.github} target="_blank" className="p-4 glass rounded-2xl hover:text-primary transition-colors hover:scale-110">
                      <Terminal size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
