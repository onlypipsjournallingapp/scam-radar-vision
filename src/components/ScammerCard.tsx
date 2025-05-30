
import { useState } from 'react';
import { Scammer } from '../data/scammers';
import { ExternalLink, Video } from 'lucide-react';
import RiskBadge from './RiskBadge';

interface ScammerCardProps {
  scammer: Scammer;
  onClick: (scammerId: string) => void;
}

const ScammerCard = ({ scammer, onClick }: ScammerCardProps) => {
  const [isHovering, setIsHovering] = useState(false);

  // Convert scamLevel to RiskBadge level
  const riskLevel = 
    scammer.scamLevel === 'high' ? 'extreme' :
    scammer.scamLevel === 'medium' ? 'high' :
    'moderate';

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
          <div className="flex items-center w-full">
            <div className="flex-grow flex items-center">
              <div className="flex items-center space-x-3">
                <RiskBadge level={riskLevel} />
                <h3 className="text-xl font-bold">{scammer.name}</h3>
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
