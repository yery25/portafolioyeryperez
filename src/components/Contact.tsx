'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container">
        <div className="glass rounded-[32px] p-8 md:p-16 relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent rounded-full blur-[100px] opacity-20"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Let's build something <span className="text-gradient">extraordinary</span> together.</h2>
              <p className="text-text-secondary text-lg mb-10 max-w-md">
                Whether you have a question or just want to say hi, my inbox is always open.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-widest font-bold">Email</p>
                    <p className="text-lg font-medium">yery.perez.dev@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-widest font-bold">Phone</p>
                    <p className="text-lg font-medium">+1 (829) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-surface/50 border border-surface-border p-8 rounded-3xl"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-secondary">Name</label>
                    <input type="text" className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-secondary">Email</label>
                    <input type="email" className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-secondary">Message</label>
                  <textarea rows={4} className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="Tell me about your project..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full py-4 text-lg">
                  Send Message <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
