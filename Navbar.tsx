import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Docs', href: '#docs' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-2xl' 
          : 'bg-white/80 backdrop-blur-md shadow-lg'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          href="#home"
          whileHover={{ scale: 1.08 }}
          className="text-2xl font-bold text-brand-green flex items-center gap-2"
        >
          <span className="text-3xl">🐻</span>
          <span className="hidden md:inline">BearAware</span>
        </motion.a>
        
        <div className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ y: -2 }}
              className="text-dark-text hover:text-brand-green font-semibold px-4 py-2 rounded-lg transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-brand-green rounded-full group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>

        <motion.a
          href="https://github.com/mareluca675/bear-detection-system"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="hidden md:flex items-center gap-2 bg-brand-green text-white font-bold px-5 py-2 rounded-lg hover:bg-green-700 transition-all"
        >
          🐙 GitHub
        </motion.a>
      </nav>
    </motion.header>
  );
};

export default Navbar;
