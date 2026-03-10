import React, { useState } from 'react';

const ComingSoon = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    alert("Thanks! We'll notify you soon.");
    setEmail('');
  };

  return (
    <div className="relative min-h-screen w-full bg-[#05030f] flex flex-col items-center justify-center overflow-hidden font-sans selection:bg-[#a03ab3] selection:text-white">
      
      {/* 1. Ambient Background Layers */}
      {/* Deep radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1f0b56] via-transparent to-transparent opacity-40 pointer-events-none" />
      
      {/* Moving neon orb blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#a03ab3] rounded-full blur-[160px] opacity-10 animate-pulse pointer-events-none" />

      {/* 2. Main Content Container */}
      <div className="relative z-10 flex flex-col items-center px-4 max-w-2xl w-full">
        
        {/* The 3D Glass Sphere (Blender-like effect) */}
        <div className="group relative w-72 h-72 md:w-96 md:h-96 rounded-full flex items-center justify-center 
                        bg-white/[0.03] border border-white/[0.08] backdrop-blur-2xl 
                        shadow-[inset_0_0_60px_rgba(160,58,179,0.3),0_0_100px_rgba(160,58,179,0.1)]
                        animate-[float_6s_easeInOut_infinite] mb-16 transition-all duration-700">
          
          {/* Internal Glow Effects */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#a03ab3]/20 to-transparent opacity-50" />
          
          {/* Top-Left Specular Highlight (The 'Glass' Shine) */}
          <div className="absolute top-[15%] left-[20%] w-16 h-8 bg-white/10 blur-xl rounded-[100%] -rotate-[35deg]" />

          {/* Core Text */}
          <h2 className="text-4xl md:text-6xl font-black tracking-[0.4em] text-[#df9ee0] 
                         drop-shadow-[0_0_25px_#a03ab3] uppercase select-none transition-transform duration-500 group-hover:scale-105">
            Soon
          </h2>
        </div>

        {/* 3. Subscription Section */}
        <div className="text-center w-full max-w-md space-y-8">
          <header>
            <h1 className="text-[10px] md:text-xs font-bold tracking-[0.6em] uppercase text-gray-500 mb-2">
              The Next Evolution
            </h1>
            <p className="text-gray-400 text-sm font-light tracking-wide">
              Something extraordinary is being crafted.
            </p>
          </header>

          <form 
            onSubmit={handleSubmit}
            className="group relative flex items-center p-1.5 bg-white/[0.03] border border-white/10 rounded-full 
                       focus-within:border-[#a03ab3]/50 focus-within:shadow-[0_0_30px_rgba(160,58,179,0.2)] 
                       transition-all duration-500"
          >
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="bg-transparent border-none outline-none flex-grow px-6 py-3 text-white placeholder-gray-600 text-sm md:text-base"
              required
            />
            <button 
              type="submit" 
              className="bg-[#a03ab3] hover:bg-[#df9ee0] text-white text-[10px] font-black uppercase tracking-widest px-8 py-3.5 rounded-full 
                         transition-all duration-300 active:scale-95 shadow-lg shadow-[#a03ab3]/20"
            >
              Notify
            </button>
          </form>
        </div>
      </div>

      {/* 4. Footer Credits */}
      <footer className="absolute bottom-10 text-[9px] tracking-[0.3em] text-gray-700 uppercase">
        © 2026 Christopher Arold Concept • UI Recreation
      </footer>

      {/* Custom Floating Animation via Tailwind Config or Inline Style */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(1deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;