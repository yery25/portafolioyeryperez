'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Command, Sparkles, Code } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="mesh-glow"></div>
      
      <div className="container grid grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-7 lg:col-span-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-8 animate-pulse">
            <Sparkles size={14} />
            <span>Building for the future of business</span>
          </div>
          
          <h1 className="text-8xl lg:text-6xl md:text-5xl font-black mb-8 leading-[0.95] tracking-tight">
            Engineering <br /> 
            <span className="text-gradient">Intelligent</span> <br />
            Systems.
          </h1>
          
          <p className="text-xl text-secondary mb-12 leading-relaxed max-w-xl font-medium">
            Developing sophisticated management platforms and AI-driven solutions that transform how modern salons and grocery stores operate.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <a href="#projects" className="btn btn-primary text-lg">
              Explore Projects <ArrowRight size={20} className="ml-2" />
            </a>
            <a href="#contact" className="btn btn-secondary text-lg">
              Contact Me
            </a>
          </div>

          <div className="flex gap-12 mt-16 text-secondary border-t border-white/5 pt-8 max-w-lg">
            <div>
              <p className="text-2xl font-black text-white">100%</p>
              <p className="text-[10px] uppercase tracking-widest font-bold">Innovation</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">AI</p>
              <p className="text-[10px] uppercase tracking-widest font-bold">Integrated</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">Full</p>
              <p className="text-[10px] uppercase tracking-widest font-bold">Stack</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-5 lg:hidden relative"
        >
          {/* Abstract Modern Graphic */}
          <div className="aspect-square relative flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient rounded-[60px] opacity-20 blur-[60px] animate-pulse"></div>
             <div className="w-full h-full glass rounded-[60px] flex items-center justify-center relative z-10 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative z-10 flex flex-col items-center gap-6">
                   <div className="w-32 h-32 rounded-3xl bg-white flex items-center justify-center shadow-2xl shadow-primary/20">
                      <Terminal size={64} className="text-black" />
                   </div>
                   <div className="text-center">
                      <p className="text-2xl font-black">YP.SOFTWARE</p>
                      <p className="text-xs uppercase tracking-widest text-secondary font-bold">Full Stack Wizardry</p>
                   </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-12 right-12 p-4 glass rounded-2xl animate-bounce" style={{ animationDuration: '3s' }}>
                   <Code size={24} className="text-primary" />
                </div>
                <div className="absolute bottom-12 left-12 p-4 glass rounded-2xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                   <Sparkles size={24} className="text-accent" />
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
