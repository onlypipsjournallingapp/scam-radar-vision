
import { useState } from 'react';
import { Scammer } from '../data/scammers';
import { ExternalLink, Video } from 'lucide-react';

interface ScammerCardProps {
  scammer: Scammer;
  onClick: (scammerId: string) => void;
}

const ScammerCard = ({ scammer, onClick }: ScammerCardProps) => {
  const [isHovering, setIsHovering] = useState(false);

  // Determine badge class based on scam level
  const badgeClass = 
    scammer.scamLevel === 'high' ? 'badge-high' :
    scammer.scamLevel === 'medium' ? 'badge-medium' : 'badge-low';
  
  // Format scam level for display
  const scamLevelDisplay = 
    scammer.scamLevel === 'high' ? 'High Risk' :
    scammer.scamLevel === 'medium' ? 'Medium Risk' : 'Low Risk';

  return (
    <div 
      className="glass-card hover-lift overflow-hidden relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => onClick(scammer.id)}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 z-[-1] opacity-50"
      />
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <div className="relative">
              <img 
                src={scammer.avatar} 
                alt={scammer.name} 
                className="w-16 h-16 rounded-full object-cover border-2 border-white/10"
              />
              <span className={`${badgeClass} absolute -bottom-1 -right-1`}>
                {scamLevelDisplay}
              </span>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold">{scammer.name}</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {scammer.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-xs bg-secondary/20 text-secondary-foreground px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-foreground/80 mb-4 line-clamp-2">
          {scammer.description}
        </p>
        
        <div className="flex items-center justify-between mt-4">
          <a 
            href={scammer.featuredVideo.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Video className="h-4 w-4 mr-1" />
            <span>Watch Exposé</span>
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
          
          <button 
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onClick(scammer.id);
            }}
          >
            View All Evidence
          </button>
        </div>
      </div>
      
      {/* Subtle hover effect overlay */}
      <div 
        className={`absolute inset-0 bg-primary/5 pointer-events-none transition-opacity duration-300 ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default ScammerCard;
