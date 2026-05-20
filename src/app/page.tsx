import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-24">
          <div className="container grid grid-cols-2 gap-16 items-center lg:grid-cols-1">
            <div className="relative">
              <div className="aspect-square glass rounded-[40px] flex items-center justify-center p-12 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient opacity-5"></div>
                <div className="relative z-10">
                   <h3 className="text-4xl font-bold mb-4">Innovation driven by <span className="text-gradient">passion.</span></h3>
                   <p className="text-secondary text-lg leading-relaxed mb-6">
                     I specialize in turning complex problems into elegant, user-centric digital experiences. With a deep focus on performance and scalability.
                   </p>
                   <div className="flex gap-4">
                      <div className="p-4 glass rounded-2xl text-center flex-grow">
                         <p className="text-2xl font-bold">5+</p>
                         <p className="text-sm text-secondary uppercase">Apps</p>
                      </div>
                      <div className="p-4 glass rounded-2xl text-center flex-grow">
                         <p className="text-2xl font-bold">AI</p>
                         <p className="text-sm text-secondary uppercase">Specialist</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-extrabold mb-8">My <span className="text-gradient">Tech Stack</span></h2>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-1">
                <div className="space-y-4">
                  <h4 className="font-bold text-lg mb-4">Frontend</h4>
                  <ul className="text-secondary space-y-2">
                    <li>Next.js / React</li>
                    <li>TypeScript</li>
                    <li>Vanilla CSS / Tailwind</li>
                    <li>Framer Motion</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-lg mb-4">Backend</h4>
                  <ul className="text-secondary space-y-2">
                    <li>Node.js / Express</li>
                    <li>Python / FastAPI</li>
                    <li>PostgreSQL / Supabase</li>
                    <li>Firebase</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <Contact />
      </main>

      <footer className="py-12 border-t border-surface-border">
        <div className="container flex justify-between items-center flex-col-mobile gap-6">
          <p className="text-secondary text-sm">
            © {new Date().getFullYear()} Yer Perez. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-medium text-secondary">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
