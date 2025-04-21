
import ThemeToggle from './ThemeToggle';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 md:px-8 glass flex justify-between items-center z-50 fixed top-0 left-0 right-0">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-primary">
          <span className="text-scamRed dark:text-scamRed-dark">Scam</span>
          <span className="text-scamBlue dark:text-scamBlue-dark">Radar</span>
        </h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="link-underline text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#" className="link-underline text-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#" className="link-underline text-foreground hover:text-primary transition-colors">
            Resources
          </a>
          <a href="#" className="link-underline text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </div>
        
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
