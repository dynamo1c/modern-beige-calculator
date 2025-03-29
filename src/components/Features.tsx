
import React from "react";

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="glass-card p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
    <div className="bg-beige/30 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <p className="text-sm text-black/70">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium bg-beige px-4 py-1.5 rounded-full inline-block mb-3">Features</span>
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Why Choose Calcify?</h2>
          <p className="text-black/70 max-w-2xl mx-auto">
            A beautifully designed calculator with powerful features that make calculations a pleasure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
          <FeatureCard 
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            title="Real-Time Calculations"
            description="Perform calculations instantly as you type with our real-time calculation engine."
          />
          
          <FeatureCard 
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9C2 5.68629 4.68629 3 8 3H16C19.3137 3 22 5.68629 22 9V15C22 18.3137 19.3137 21 16 21H8C4.68629 21 2 18.3137 2 15V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 8L10 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 8L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12L10 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 12L15 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 16L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 16L15 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            title="Scientific Mode"
            description="Switch to scientific mode for advanced calculations like trigonometry and logarithms."
          />
          
          <FeatureCard 
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 2C18.866 2 22 5.13401 22 9C22 12.866 18.866 16 15 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 4"/></svg>}
            title="History Tracking"
            description="Never lose your calculation history with our automatic history tracking feature."
          />
          
          <FeatureCard 
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            title="Unit Conversion"
            description="Convert between different units of measurement with our built-in converter."
          />
          
          <FeatureCard 
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 8C18 6 16.5714 4 14 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M6 12L18 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M6 16L18 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M6 20L18 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M6 8L10 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>}
            title="Customizable Themes"
            description="Personalize your calculator with different themes and color schemes."
          />
          
          <FeatureCard 
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7.5L9.5 12L5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13 16H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            title="Cross-Platform Sync"
            description="Sync your calculations across all your devices with our cloud sync feature."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
