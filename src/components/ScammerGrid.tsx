
import { useState } from 'react';
import ScammerCard from './ScammerCard';
import ScammerModal from './ScammerModal';
import { Scammer } from '../data/scammers';

interface ScammerGridProps {
  scammers: Scammer[];
  searchQuery: string;
}

const ScammerGrid = ({ scammers, searchQuery }: ScammerGridProps) => {
  const [selectedScammerId, setSelectedScammerId] = useState<string | null>(null);
  
  const handleCardClick = (scammerId: string) => {
    setSelectedScammerId(scammerId);
  };

  const closeModal = () => {
    setSelectedScammerId(null);
  };

  // Filter scammers based on search query
  const filteredScammers = searchQuery
    ? scammers.filter(scammer => 
        scammer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scammer.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        scammer.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : scammers;

  const selectedScammer = scammers.find(s => s.id === selectedScammerId) || null;

  return (
    <>
      <section className="py-16 px-6 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Top 10 Most Notorious Scammers
        </h2>
        
        {filteredScammers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-foreground/70">No scammers match your search criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScammers.map((scammer) => (
              <div key={scammer.id} className="animate-scale-in">
                <ScammerCard 
                  scammer={scammer} 
                  onClick={handleCardClick}
                />
              </div>
            ))}
          </div>
        )}
      </section>
      
      {/* Modal */}
      {selectedScammer && (
        <ScammerModal 
          scammer={selectedScammer} 
          isOpen={!!selectedScammerId}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default ScammerGrid;
