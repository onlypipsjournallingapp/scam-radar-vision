
import { trustedBrokers } from '../data/scammers';

const BrokerBanner = () => {
  return (
    <section className="w-full py-12 px-6 md:px-8 glass-card mt-8">
      <div className="container mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-6">Trusted Brokers</h3>
        
        <p className="text-center mb-8 text-foreground/80 max-w-2xl mx-auto">
          These regulated brokers have been verified for compliance and transparency. 
          Always conduct your own research before choosing a broker.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          {trustedBrokers.map((broker, index) => (
            <a 
              key={index}
              href={broker.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-4 rounded-xl hover-lift flex flex-col items-center justify-center w-full max-w-xs"
            >
              <img 
                src={broker.logo} 
                alt={broker.name} 
                className="h-10 mb-3"
              />
              <h4 className="font-medium text-lg mb-2">{broker.name}</h4>
              <p className="text-sm text-center text-foreground/80">
                {broker.description}
              </p>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <span className="text-xs text-foreground/60">
            *This website does not receive commissions from any broker listed.
          </span>
        </div>
      </div>
    </section>
  );
};

export default BrokerBanner;
