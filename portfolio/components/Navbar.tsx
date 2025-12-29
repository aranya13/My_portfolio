import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Github, Linkedin, Code, Cpu } from 'lucide-react';
import { NavItem, Theme } from '../types';
import { motion } from 'framer-motion';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-card shadow-lg py-2' : 'bg-transparent py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="bg-gradient-to-tr from-primary to-accent p-2 rounded-xl rotate-3 hover:rotate-0 transition-transform">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Aranya Bahuguna
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
            <div className="flex items-center gap-4 border-l border-gray-200 dark:border-gray-700 pl-4">
               <a href="https://github.com/aranya13" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors transform hover:scale-110"><Github size={20} /></a>
               <a href="https://codolio.com/profile/aranya_13" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors transform hover:scale-110"><Code size={20} /></a>
               <a href="https://www.linkedin.com/in/aranya-bahuguna-485aa4251/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors transform hover:scale-110"><Linkedin size={20} /></a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors transform hover:rotate-12"
                aria-label="Toggle theme"
              >
                {theme === Theme.DARK ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {theme === Theme.DARK ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden glass-card absolute w-full border-b border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;