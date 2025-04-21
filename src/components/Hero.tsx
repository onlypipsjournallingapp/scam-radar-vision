
import { useState } from 'react';
import { Search } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string) => void;
}

const Hero = ({ onSearch }: HeroProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 md:px-8 relative">
      <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-background to-accent/5 dark:from-background dark:to-accent/10" />
      
      <div className="text-center max-w-3xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-scamBlue to-scamIndigo dark:from-scamBlue-dark dark:to-scamIndigo-dark bg-clip-text text-transparent">
          Forex Scammer Radar
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-foreground/80">
          Exposing the truth about forex scams and fake mentors.
        </p>
        
        <div className="search-container w-full max-w-xl mx-auto">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              className="w-full search-input glass rounded-full py-3 px-6 pr-12 outline-none shadow-md text-lg"
              placeholder="Search to see if your mentor is listed here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-2 rounded-full hover:bg-opacity-90 transition-all"
              type="submit"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
