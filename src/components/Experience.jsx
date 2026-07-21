import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Landmark, Code2, Cpu, ArrowRight } from 'lucide-react';

const experiences = [
  {
    company: 'Sapiens Consulting',
    role: 'Analista Programador Senior',
    period: '10/2024 - Presente',
    desc: '10 sistemas enterprise en producción: gestión de casos (ASES Casos), app móvil .NET MAUI para 500K+ beneficiarios, chatbot con Azure OpenAI + RAG, reconocimiento de violencia con IA (IFence), sistema de turnos y videollamadas AWS Chime, y más. Stack completo: .NET 6/8/9, Angular, .NET MAUI, AWS, Azure y CI/CD con Azure Pipelines.',
    skills: ['.NET 8/9', '.NET MAUI', 'Angular', 'AWS', 'Azure OpenAI', 'Azure DevOps', 'Docker', 'SQL Server'],
    icon: Code2,
    color: 'neon-cyan'
  },
  {
    company: 'Empresa Bancaria Zigleet',
    role: 'Desarrollador Web',
    period: '2024',
    desc: 'Desarrollo integral del sitio web institucional para el sector bancario, priorizando seguridad, alta disponibilidad y una experiencia de usuario moderna y fluida.',
    skills: ['React', 'UI/UX', 'Security', 'Performance'],
    icon: Landmark,
    color: 'neon-purple'
  },
  {
    company: 'DEVDATEP CONSULTING',
    role: 'Desarrollador Laravel Junior',
    period: '12/2023 - 03/2024',
    desc: 'Servicio de gestión de archivos basado en permisos usando Google Drive API y WebSockets para notificaciones en tiempo real.',
    skills: ['Laravel', 'Google Drive API', 'WebSockets', 'PHP'],
    icon: Briefcase,
    color: 'neon-pink'
  },
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-32 relative overflow-hidden bg-transparent">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-title font-bold mb-24 text-center text-[var(--text-primary)]"
        >
          Trayectoria <span className="text-gradient-neon">Profesional</span>
        </motion.h2>

        <div className="relative border-l-2 border-neon-cyan/20 ml-6 md:ml-0 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:w-[2px] md:before:h-full md:before:bg-gradient-to-b md:before:from-neon-cyan md:before:via-neon-purple md:before:to-neon-pink md:before:opacity-30">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative mb-16 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right md:ml-0' : 'md:pl-16 md:ml-auto'}`}
              >
                {/* Timeline Interactive Dot */}
                <div
                  className={`absolute top-4 -left-[29px] md:left-auto md:right-auto md:translate-x-0 w-14 h-14 rounded-full z-20 border-4 border-[var(--bg-base)] bg-[var(--bg-base)] flex items-center justify-center transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.8)] group-hover:scale-110 ${index % 2 === 0 ? 'md:-right-[28px]' : 'md:-left-[28px]'}`}
                >
                  <div className={`w-full h-full rounded-full flex items-center justify-center bg-${exp.color}/10 border border-${exp.color}/30 shadow-[0_0_15px_var(--color-${exp.color})]`}>
                     <Icon className={`w-5 h-5 text-${exp.color}`} />
                  </div>
                </div>
                
                {/* Experiencia Card */}
                <div className={`group glass p-8 rounded-3xl border border-[var(--border-subtle)] hover:border-${exp.color}/50 hover:shadow-[0_0_30px_rgba(var(--color-${exp.color}),0.15)] transition-all duration-500 hover:-translate-y-2`}>
                  
                  {/* Etiqueta de Año */}
                  <div className={`inline-block px-4 py-1.5 mb-4 rounded-full border border-${exp.color}/30 bg-${exp.color}/10`}>
                    <span className={`font-bold text-xs tracking-widest uppercase text-${exp.color}`}>
                      {exp.period}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mt-2 text-[var(--text-primary)] transition-all duration-300">
                    {exp.role}
                  </h3>
                  
                  <p className={`font-medium text-lg text-${exp.color} mt-2 mb-6`}>
                    {exp.company}
                  </p>

                  <div className="pt-6 border-t border-[var(--border-muted)] relative">
                    <p className="text-[var(--text-secondary)] mb-8 leading-relaxed font-light text-left text-sm md:text-base">
                      {exp.desc}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                      {exp.skills.map(skill => (
                        <span key={skill} className={`text-[10px] md:text-xs font-semibold uppercase tracking-widest px-3 py-1.5 bg-[var(--bg-surface)] text-[var(--text-muted)] rounded-lg border border-[var(--border-subtle)] group-hover:border-${exp.color}/30 transition-colors duration-300`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                    {exp.company === 'Sapiens Consulting' && (
                      <div className={`mt-6 flex ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                        <a
                          href="#proyectos"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neon-cyan/40 bg-neon-cyan/5 text-neon-cyan text-xs font-bold uppercase tracking-widest hover:bg-neon-cyan hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] group/btn"
                        >
                          Ver los 10 proyectos
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
