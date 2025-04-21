
import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ScammerGrid from '../components/ScammerGrid';
import BrokerBanner from '../components/BrokerBanner';
import { scammers } from '../data/scammers';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    // Scroll to results if search query is provided
    if (query) {
      setTimeout(() => {
        document.getElementById('results')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-16">
        <Hero onSearch={handleSearch} />
        
        <div id="results" className="container mx-auto">
          <ScammerGrid scammers={scammers} searchQuery={searchQuery} />
        </div>
        
        <div className="container mx-auto mb-12">
          <BrokerBanner />
        </div>
      </main>
      
      <footer className="py-8 px-6 md:px-8 text-center text-foreground/60 text-sm">
        <p>&copy; {new Date().getFullYear()} ScamRadar | For educational purposes only</p>
        <p className="mt-2">This is a prototype website. All scammer profiles are fictional.</p>
      </footer>
    </div>
  );
};

export default Index;
