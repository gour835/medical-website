import React from 'react';
import { Target, Zap, Users, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#FACC15] text-black font-sans selection:bg-black selection:text-[#FACC15] pb-20">
      
      {/* 1. Header Section */}
      <header className="pt-20 pb-10 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-block bg-white border-4 border-black px-6 py-2 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-1">
          <span className="font-black uppercase tracking-widest text-sm">Our Origins</span>
        </div>
        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8">
          BORN IN <br /> 
          <span className="text-white drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">THE LIGHT</span>
        </h1>
      </header>

      {/* 2. The Story Section (Split Layout) */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center mb-32">
        <div className="relative">
          {/* Main Image Container */}
          <div className="bg-zinc-900 border-4 border-black rounded-3xl p-4 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] rotate-2 overflow-hidden aspect-video flex items-center justify-center">
             <span className="text-8xl">☀️</span>
          </div>
          {/* Overlapping Badge */}
          <div className="absolute -bottom-10 -left-6 bg-white border-4 border-black p-6 rounded-2xl shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] -rotate-3 max-w-[250px]">
            <p className="font-bold italic">"We grew tired of the dark basements of crypto. It was time for a tan."</p>
          </div>
        </div>

        <div className="space-y-6 lg:pl-10">
          <h2 className="text-4xl font-black uppercase italic">The Sunape Philosophy</h2>
          <p className="text-lg font-bold leading-snug">
            Most meme coins thrive on fear, darkness, and "moon" shots in the middle of the night. SUNAPE was born under the blistering 12 PM sun on the Solana blockchain.
          </p>
          <p className="text-zinc-800 font-medium">
            We aren't just a currency; we're a lifestyle choice. We believe in transparency, community warmth, and the inevitable rise of the Ape who isn't afraid to look directly at the chart.
          </p>
          <div className="pt-4">
            <button className="bg-black text-white px-10 py-4 rounded-full font-black uppercase hover:bg-white hover:text-black border-2 border-black transition-all shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
              View Audit Report
            </button>
          </div>
        </div>
      </section>

      {/* 3. Mission Cards (The "Sun Pillar" Grid) */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AboutCard 
            icon={<Target size={32} />} 
            title="The Vision" 
            text="To become the gold standard of solar-powered memes."
          />
          <AboutCard 
            icon={<Zap size={32} />} 
            title="Pure Energy" 
            text="100% community driven. No team tokens, no shadows."
            bgColor="bg-white"
          />
          <AboutCard 
            icon={<Users size={32} />} 
            title="The Tribe" 
            text="A community that grows together under one sun."
          />
          <AboutCard 
            icon={<ShieldCheck size={32} />} 
            title="Safe Rays" 
            text="Liquidity burned and contract renounced forever."
            bgColor="bg-white"
          />
        </div>
      </section>

    </div>
  );
};

/* Sub-component for the Info Cards */
const AboutCard = ({ icon, title, text, bgColor = "bg-[#FACC15]" }) => (
  <div className={`${bgColor} border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300`}>
    <div className="mb-6 bg-black text-white inline-block p-3 rounded-lg">
      {icon}
    </div>
    <h3 className="text-xl font-black uppercase mb-3">{title}</h3>
    <p className="font-bold text-sm leading-relaxed">{text}</p>
  </div>
);

export default About;