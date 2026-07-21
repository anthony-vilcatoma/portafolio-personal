import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code2, Mail, Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-neon-cyan/5 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.5, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] bg-neon-purple/5 rounded-full blur-[150px]"
        />
        {/* Luxury Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[2px] bg-neon-cyan mb-6"
          />
          <span className="text-neon-cyan font-bold tracking-[0.3em] text-xs md:text-sm uppercase mb-4 block">
            Senior Fullstack Developer
          </span>
          <h1 className="text-6xl md:text-8xl font-title font-bold mb-6 tracking-tighter leading-[0.9] drop-shadow-2xl text-[var(--text-primary)]">
            Anthony <br />
            <span className="text-gradient-neon italic pr-4">Vilcatoma</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-10 max-w-lg leading-relaxed font-light">
            Experto en arquitecturas <span className="text-neon-cyan font-semibold">.NET, Angular & MAUI</span>. 
            Construyendo el futuro de las aplicaciones empresariales con diseño de ultra-lujo y rendimiento impecable.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px -10px rgba(0,243,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="#experiencia" 
              className="px-10 py-4 bg-neon-cyan text-gray-900 font-bold rounded-full text-center tracking-wide transition-shadow shadow-[0_0_15px_rgba(0,243,255,0.3)]"
            >
              Ver Experiencia
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(189,0,255,0.05)" }}
              whileTap={{ scale: 0.95 }}
              href="#contacto" 
              className="px-10 py-4 border border-neon-purple text-neon-purple font-bold rounded-full text-center tracking-wide hover:border-neon-pink hover:text-neon-pink transition-colors backdrop-blur-sm"
            >
              Contactar
            </motion.a>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-10">
            <a href="https://www.linkedin.com/in/anthony-vilcatoma-palacios-418590282/" target="_blank" rel="noreferrer" className="p-3 glass rounded-full text-[var(--text-muted)] hover:text-neon-cyan hover:border-neon-cyan transition-all shadow-[0_0_15px_rgba(0,243,255,0)] hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] hover:-translate-y-1">
              <Briefcase className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="https://github.com/AnthonyVP" target="_blank" rel="noreferrer" className="p-3 glass rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all hover:-translate-y-1">
              <Code2 className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="mailto:a.vilcatoma.palacios@gmail.com" className="p-3 glass rounded-full text-gray-400 hover:text-neon-pink hover:border-neon-pink transition-all shadow-[0_0_15px_rgba(255,0,160,0)] hover:shadow-[0_0_15px_rgba(255,0,160,0.5)] hover:-translate-y-1">
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="https://wa.me/51914515788?text=Hola%20Anthony,%20deseo%20consultar%20por%20tus%20servicios%20para%20apoyar%20mi%20negocio%20o%20proyecto." target="_blank" rel="noreferrer" className="p-3 glass rounded-full text-gray-400 hover:text-[#25D366] hover:border-[#25D366] transition-all shadow-[0_0_15px_rgba(37,211,102,0)] hover:shadow-[0_0_15px_rgba(37,211,102,0.5)] hover:-translate-y-1">
              <Smartphone className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center relative perspective-1000"
        >
          {/* Floating Elements for depth */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-24 h-24 glass rounded-2xl flex items-center justify-center z-20 border border-white/20 shadow-[0_0_20px_rgba(189,0,255,0.2)]"
          >
            <span className="font-title font-bold text-neon-purple text-xl">.NET</span>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 w-20 h-20 glass rounded-full flex items-center justify-center z-20 border border-white/20 shadow-[0_0_20px_rgba(0,243,255,0.2)]"
          >
            <span className="font-title font-bold text-neon-cyan text-lg">NG</span>
          </motion.div>

          <div className="relative group">
            {/* Animated Glow Behind Image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-neon-cyan via-neon-purple to-neon-pink rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-70 transition duration-1000 animate-pulse"></div>
            
            <div className="relative w-72 h-[400px] md:w-[22rem] md:h-[500px] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 mix-blend-overlay"></div>
              <img 
                src="/1774394516921.jpeg" 
                alt="Anthony Vilcatoma" 
                className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100 grayscale-[50%] group-hover:grayscale-0"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

