import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <main>
        <Hero />

        {/* About Section */}
        <section id="about" className="about">
          <div className="container">
            <div className="about-grid">
              {/* Left card */}
              <div className="about-card">
                <div className="about-card-accent" />
                <h3 className="about-card-title">
                  Innovation driven by{' '}
                  <span className="text-gradient">passion.</span>
                </h3>
                <p className="about-card-text">
                  I specialize in turning complex problems into elegant,
                  user-centric digital experiences. With a deep focus on
                  performance and scalability.
                </p>
                <div className="about-mini-cards">
                  <div className="about-mini-card">
                    <p className="about-mini-card-value">5+</p>
                    <p className="about-mini-card-label">Apps</p>
                  </div>
                  <div className="about-mini-card">
                    <p className="about-mini-card-value">AI</p>
                    <p className="about-mini-card-label">Specialist</p>
                  </div>
                </div>
              </div>

              {/* Right: Stack */}
              <div>
                <h2 className="stack-section-title">
                  My <span className="text-gradient">Tech Stack</span>
                </h2>
                <div className="stack-groups">
                  <div>
                    <p className="stack-group-label">Frontend</p>
                    <ul className="stack-list">
                      <li className="stack-item">Next.js / React</li>
                      <li className="stack-item">TypeScript</li>
                      <li className="stack-item">Vanilla CSS</li>
                      <li className="stack-item">Framer Motion</li>
                    </ul>
                  </div>
                  <div>
                    <p className="stack-group-label">Backend</p>
                    <ul className="stack-list">
                      <li className="stack-item">Node.js / Express</li>
                      <li className="stack-item">Python / FastAPI</li>
                      <li className="stack-item">PostgreSQL / Supabase</li>
                      <li className="stack-item">Firebase</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <p className="footer-copy">
              © {new Date().getFullYear()} Yer Pérez. All rights reserved.
            </p>
            <div className="footer-links">
              <a href="#" className="footer-link">Privacy</a>
              <a href="#" className="footer-link">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
