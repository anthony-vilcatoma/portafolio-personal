import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = ['Inicio', 'Experiencia', 'Skills'];

  return (
    <>
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto z-50"
      >
        <div className="glass px-6 md:px-8 py-3 rounded-full flex justify-between items-center gap-4 md:gap-8 shadow-[0_0_20px_rgba(189,0,255,0.15)] border border-white/10">
          <div className="text-xl font-title font-bold tracking-tighter text-[var(--text-primary)]">
            AV<span className="text-neon-cyan">.</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 font-medium text-sm">
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="relative group hover:text-neon-cyan transition-colors text-[var(--text-secondary)]"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon-cyan transition-all group-hover:w-full shadow-[0_0_8px_rgba(0,243,255,0.8)]"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/10 transition-all active:scale-90 text-[var(--text-muted)] hover:text-neon-cyan"
            >
              {isDark ? <Sun className="w-5 h-5 drop-shadow-[0_0_5px_rgba(0,243,255,0.8)] text-neon-cyan" /> : <Moon className="w-5 h-5 drop-shadow-[0_0_5px_rgba(189,0,255,0.5)] text-neon-purple" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-white/10 transition-all active:scale-90 text-gray-300 hover:text-neon-cyan"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] z-40 md:hidden"
          >
            <div className="glass p-6 rounded-2xl flex flex-col gap-4 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center font-medium text-lg text-[var(--text-secondary)] hover:text-neon-cyan py-2 border-b border-[var(--border-subtle)] last:border-0 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
