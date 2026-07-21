import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import ProjectGrid from './components/ProjectGrid';
import Skills from './components/Skills';
import CustomCursor from './components/CustomCursor';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="relative">
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <ProjectGrid />
          <Skills />

          {/* Contact Section Placeholder */}
          {/* Contact Section Placeholder */}
          <section id="contacto" className="py-32 bg-[var(--bg-base)] text-[var(--text-primary)] text-center border-t border-[var(--border-subtle)] relative overflow-hidden">
            <div className="absolute inset-0 bg-neon-cyan/5 blur-[150px] pointer-events-none"></div>
            <h2 className="text-4xl md:text-5xl font-title font-bold mb-8 relative z-10">¿Listo para encender tu <span className="text-gradient-cyan">ecosistema digital</span>?</h2>
            <p className="text-[var(--text-secondary)] mb-12 max-w-xl mx-auto relative z-10 font-light">Actualmente aceptando nuevos desafíos y colaboraciones estratégicas de alto nivel.</p>
            <a href="mailto:a.vilcatoma.palacios@gmail.com" className="relative z-10 px-12 py-5 bg-transparent border border-neon-cyan text-neon-cyan rounded-full font-bold text-xl hover:bg-neon-cyan hover:text-black transition-all shadow-[0_0_15px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)]">
              Iniciar Conexión
            </a>
          </section>
        </main>

        <footer className="py-12 border-t border-[var(--border-subtle)] bg-[var(--bg-base)] text-center text-[var(--text-muted)]">
          <p>© 2026 Anthony Vilcatoma.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
