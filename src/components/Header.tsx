'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Mail, Command } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-8 transition-all duration-500">
      <div className="container flex justify-center">
        <motion.div 
          initial={false}
          animate={{
            padding: isScrolled ? '0.6rem 1.2rem' : '0.8rem 2.4rem',
            background: isScrolled ? 'rgba(15, 15, 15, 0.7)' : 'rgba(255, 255, 255, 0)',
            backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
            borderRadius: '100px',
            border: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0)',
            width: isScrolled ? 'fit-content' : '100%',
            boxShadow: isScrolled ? '0 20px 40px rgba(0,0,0,0.4)' : 'none'
          }}
          className="flex justify-between items-center transition-all duration-500 gap-8"
        >
          <a href="#" className="flex items-center gap-3 group">
             <div className="w-9 h-9 rounded-xl bg-gradient flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
                <Command size={20} />
             </div>
             <span className={`text-sm font-black tracking-tighter ${isScrolled ? 'hidden md:block' : 'block'}`}>
                YER PEREZ
             </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[11px] uppercase tracking-[0.2em] font-bold text-secondary hover:text-white transition-colors px-5 py-2 rounded-full hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="h-4 w-[1px] bg-white/10 mx-2"></div>
            <a href="https://github.com/yery25" target="_blank" rel="noopener noreferrer" className="p-2 text-secondary hover:text-white transition-colors">
               <Terminal size={18} />
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 glass rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl flex flex-col p-8 md:hidden"
          >
            <div className="flex justify-between items-center mb-16">
               <span className="text-xs tracking-[0.3em] font-bold text-secondary">NAVIGATION</span>
               <button onClick={() => setIsMobileMenuOpen(false)} className="p-3 glass rounded-full">
                  <X size={24} />
               </button>
            </div>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-6xl font-black tracking-tighter hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="mt-auto pt-12 border-t border-white/10 flex justify-between items-center">
               <div className="flex gap-6">
                  <a href="https://github.com/yery25" className="text-sm font-bold text-secondary">GITHUB</a>
                  <a href="#" className="text-sm font-bold text-secondary">CONTACT</a>
               </div>
               <div className="w-12 h-12 rounded-2xl bg-gradient flex items-center justify-center text-white">
                  <Command size={24} />
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
