
import { useState, useEffect } from 'react';
import { Scammer } from '../data/scammers';
import { X, ExternalLink, Calendar, Video, Youtube } from 'lucide-react';

interface ScammerModalProps {
  scammer: Scammer;
  isOpen: boolean;
  onClose: () => void;
}

const ScammerModal = ({ scammer, isOpen, onClose }: ScammerModalProps) => {
  // Close modal with escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Determine badge class based on scam level
  const badgeClass = 
    scammer.scamLevel === 'high' ? 'badge-high' :
    scammer.scamLevel === 'medium' ? 'badge-medium' : 'badge-low';
  
  // Format scam level display
  const scamLevelDisplay = 
    scammer.scamLevel === 'high' ? 'High Risk' :
    scammer.scamLevel === 'medium' ? 'Medium Risk' : 'Low Risk';

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div 
        className="fixed inset-0 bg-black opacity-30"
        onClick={onClose}
      />
      
      <div 
        className="glass-card w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-20 glass p-4 flex justify-between items-center border-b border-border backdrop-blur-md">
          <h2 className="text-xl font-bold">Scammer Profile</h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-foreground/10 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-shrink-0">
              <div className="relative">
                <img 
                  src={scammer.avatar} 
                  alt={scammer.name} 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-white/10 shadow-md"
                />
                <span className={`${badgeClass} absolute -bottom-1 right-0 md:-right-1`}>
                  {scamLevelDisplay}
                </span>
              </div>
            </div>
            
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-2">{scammer.name}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {scammer.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-sm bg-secondary/20 text-secondary-foreground px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-foreground/80">
                {scammer.description}
              </p>
            </div>
          </div>
          
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">Evidence & Exposés</h4>
            <div className="space-y-4">
              {scammer.allVideos.map((video, index) => (
                <div key={index} className="glass p-4 rounded-xl hover-lift">
                  <div className="flex justify-between items-start">
                    <div className="flex-grow">
                      <h5 className="font-medium mb-1">{video.title}</h5>
                      <div className="flex items-center text-sm text-foreground/70 mb-2">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{video.date}</span>
                      </div>
                    </div>
                    <a 
                      href={video.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:text-primary/80 transition-colors ml-2 shrink-0"
                    >
                      {video.platform === 'youtube' ? (
                        <Youtube className="h-6 w-6" />
                      ) : (
                        <ExternalLink className="h-5 w-5" />
                      )}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button 
              onClick={onClose}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-opacity-90 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScammerModal;
