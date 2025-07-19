import React from 'react';

const LiquidChrome = ({ children, className = "" }) => {
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800" />
      
      {/* Liquid chrome animated layers */}
      <div className="absolute inset-0">
        {/* Primary liquid layer */}
        <div className="absolute inset-0 opacity-60">
          <div 
            className="absolute top-0 left-0 w-full h-full animate-liquid-1"
            style={{
              background: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)'
            }} 
          />
        </div>
        
        {/* Secondary liquid layer */}
        <div className="absolute inset-0 opacity-40">
          <div 
            className="absolute top-0 left-0 w-full h-full animate-liquid-2"
            style={{
              background: 'radial-gradient(circle at 60% 30%, rgba(147, 51, 234, 0.4) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)'
            }}
          />
        </div>
        
        {/* Tertiary chrome highlights */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute top-0 left-0 w-full h-full animate-shimmer"
            style={{
              background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%), linear-gradient(-45deg, rgba(255,255,255,0.05) 0%, transparent 50%)'
            }}
          />
        </div>
      </div>
      
      {/* Noise overlay for texture */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} 
      />
      
      {/* Content overlay */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default LiquidChrome;
