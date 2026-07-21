import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Smartphone, Database, Cloud, Globe, Layers, Code2, Server } from 'lucide-react';

const skills = [
  { name: '.NET Core', category: 'Backend', icon: Terminal, color: 'text-neon-cyan', bg: 'bg-neon-cyan', border: 'hover:border-neon-cyan/50', glow: 'hover:shadow-[0_0_30px_rgba(0,243,255,0.2)]' },
  { name: 'Angular', category: 'Frontend', icon: Globe, color: 'text-neon-pink', bg: 'bg-neon-pink', border: 'hover:border-neon-pink/50', glow: 'hover:shadow-[0_0_30px_rgba(255,0,160,0.2)]' },
  { name: 'MAUI', category: 'Mobile', icon: Smartphone, color: 'text-neon-purple', bg: 'bg-neon-purple', border: 'hover:border-neon-purple/50', glow: 'hover:shadow-[0_0_30px_rgba(189,0,255,0.2)]' },
  { name: 'SQL Server', category: 'Database', icon: Database, color: 'text-blue-400', bg: 'bg-blue-400', border: 'hover:border-blue-400/50', glow: 'hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]' },
  { name: 'Azure DevOps', category: 'Cloud/CI-CD', icon: Cloud, color: 'text-blue-500', bg: 'bg-blue-500', border: 'hover:border-blue-500/50', glow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]' },
  { name: 'AWS', category: 'Services', icon: Server, color: 'text-orange-400', bg: 'bg-orange-400', border: 'hover:border-orange-400/50', glow: 'hover:shadow-[0_0_30px_rgba(251,146,60,0.2)]' },
  { name: 'React', category: 'Frontend', icon: Code2, color: 'text-cyan-400', bg: 'bg-cyan-400', border: 'hover:border-cyan-400/50', glow: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]' },
  { name: 'Laravel', category: 'Backend', icon: Layers, color: 'text-red-500', bg: 'bg-red-500', border: 'hover:border-red-500/50', glow: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-transparent">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-neon-cyan/5 rounded-[100%] blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-neon-purple font-bold tracking-[0.2em] text-xs uppercase mb-2 block">Arsenal Tecnológico</span>
          <h2 className="text-5xl md:text-6xl font-title font-bold text-[var(--text-primary)]">Mis <span className="text-gradient-neon">Habilidades</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden bg-[var(--bg-card)] p-6 rounded-[2rem] border border-[var(--border-muted)] transition-all duration-500 ${skill.border} ${skill.glow} group cursor-default shadow-lg dark:shadow-none`}
              >
                {/* Background Decor */}
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br from-transparent to-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-2xl bg-[var(--border-subtle)] border border-[var(--border-muted)] group-hover:bg-opacity-20 transition-colors duration-500 ${skill.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <span className={`font-title font-bold text-lg text-[var(--text-primary)] group-hover:${skill.color} transition-colors duration-300`}>{skill.name}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
