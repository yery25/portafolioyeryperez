'use client';

import { ArrowRight, Sparkles, Terminal, Code } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      {/* Background glows */}
      <div className="hero-bg">
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />
      </div>

      <div className="container">
        <div className="hero-grid">
          {/* Text content */}
          <div>
            <div className="hero-badge">
              <Sparkles size={12} />
              <span>Building for the future of business</span>
            </div>

            <h1 className="hero-title">
              Engineering{' '}
              <span className="text-gradient">Intelligent</span>{' '}
              Systems.
            </h1>

            <p className="hero-subtitle">
              Developing sophisticated management platforms and AI-driven
              solutions that transform how modern salons and grocery stores operate.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                Explore Projects <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <p className="hero-stat-value">5+</p>
                <p className="hero-stat-label">Apps Built</p>
              </div>
              <div>
                <p className="hero-stat-value">AI</p>
                <p className="hero-stat-label">Integrated</p>
              </div>
              <div>
                <p className="hero-stat-value">Full</p>
                <p className="hero-stat-label">Stack</p>
              </div>
            </div>
          </div>

          {/* Visual card */}
          <div className="hero-visual">
            <div className="hero-visual-glow" />

            <div className="hero-visual-content">
              <div className="hero-visual-icon-box">
                <Terminal size={52} />
              </div>
              <div>
                <p className="hero-visual-title">YP.SOFTWARE</p>
                <p className="hero-visual-sub">Full Stack Wizardry</p>
              </div>
            </div>

            {/* Floating badges */}
            <div className="hero-float hero-float-1">
              <Code size={22} style={{ color: 'var(--primary)' }} />
            </div>
            <div className="hero-float hero-float-2">
              <Sparkles size={22} style={{ color: 'var(--accent)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
