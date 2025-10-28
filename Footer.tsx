const Footer = () => {
  return (
    <footer className="bg-dark-text text-light-gray py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold text-brand-green">🐻 BearAware Romania</p>
            <p className="text-sm text-gray-400 mt-1">Protecting wildlife through AI technology</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 text-sm">
            <a href="#about" className="hover:text-brand-green transition-colors">About</a>
            <a href="#projects" className="hover:text-brand-green transition-colors">Projects</a>
            <a href="#team" className="hover:text-brand-green transition-colors">Team</a>
            <a href="https://github.com/mareluca675/bear-detection-system" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">
              GitHub
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} BearAware Romania. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
