import React, { useState, useEffect } from 'react';

// --- Icons ---
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const UtensilsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
);

const DumbbellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.4 14.4 9.6 9.6"/><path d="M18.6 21.4l-5-5 .4-1.9 1.5-1.5-2-2-1.5 1.5-1.9.4-5-5"/><path d="M21.4 18.6l-5-5-1.9.4-1.5-1.5-2-2 1.5-1.5.4-1.9-5-5"/><path d="M6 10.4 3.6 12.8a2.83 2.83 0 1 0 4 4l2.4-2.4"/><path d="M13.6 18l2.4 2.4a2.83 2.83 0 1 0 4-4l-2.4-2.4"/></svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);

const HalalBadgeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
);

const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
);

const HeartPulseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
);

// --- Header ---
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Halal Standards', href: '#halal' },
    { name: 'Menu & Ingredients', href: '#menu' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-emerald-950/95 py-3 shadow-xl backdrop-blur-md border-b border-yellow-500/20' : 'bg-emerald-950/80 py-5 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2 group">
              <span className="text-xl sm:text-2xl font-serif font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
                CHEF ANTHONY
              </span>
              <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block shadow-sm shadow-yellow-400 group-hover:scale-125 transition-transform"></span>
            </a>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-200 hover:text-yellow-400 transition-colors text-xs font-semibold tracking-widest uppercase">
                {link.name}
              </a>
            ))}
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/90 border border-yellow-500/50 text-yellow-300 text-xs font-bold tracking-wider shadow-sm">
              <HalalBadgeIcon />
              <span>100% Halal</span>
            </div>

            <a href="#contact" className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-emerald-950 px-5 py-2.5 rounded-sm transition-all text-xs font-bold tracking-widest uppercase shadow-md shadow-yellow-500/20 transform hover:-translate-y-0.5">
              Book Consultation
            </a>
          </nav>

          <div className="lg:hidden flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-900/90 border border-yellow-500/40 text-yellow-300 text-[11px] font-bold">
              <HalalBadgeIcon />
              <span>Halal</span>
            </span>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-yellow-400 p-2 focus:outline-none" aria-label="Toggle menu">
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-emerald-950/98 backdrop-blur-xl border-t border-emerald-800/80 absolute w-full shadow-2xl">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-center text-gray-200 hover:text-yellow-400 hover:bg-emerald-900/50 transition-colors text-sm font-medium tracking-widest uppercase border-b border-emerald-800/30"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-yellow-500 hover:bg-yellow-400 text-emerald-950 py-3 rounded-sm font-bold tracking-widest uppercase text-sm shadow-md"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// --- Chef Anthony Portrait Component ---
// Clean framing with zero overlapping badges covering his name or face
const ChefPortrait = ({ 
  src = '/chef-anthony.jpg', 
  altSrc = '/chef-anthony-original.jpg' 
}) => {
  const [viewMode, setViewMode] = useState('chef');
  const [imageLoaded, setImageLoaded] = useState(false);
  const currentSrc = viewMode === 'chef' ? src : altSrc;

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Outer ambient glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-yellow-500/40 via-emerald-600/30 to-yellow-500/40 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-700"></div>

      <div className="relative rounded-xl overflow-hidden border-2 border-yellow-500/80 shadow-2xl bg-emerald-950">
        
        {/* Top Badges Bar (Inside photo, clean top corners, zero interference with lower portrait) */}
        <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-auto">
          {/* Halal Certified Pill (Top Left - Never obscures his name) */}
          <div className="backdrop-blur-md bg-emerald-950/90 border border-yellow-500/60 px-3 py-1 rounded-full text-[11px] font-bold text-yellow-300 uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
            <HalalBadgeIcon />
            <span>100% Halal</span>
          </div>

          {/* Look Switcher Toggle Button (Top Right) */}
          <button 
            type="button"
            onClick={() => setViewMode(prev => prev === 'chef' ? 'original' : 'chef')}
            className="backdrop-blur-md bg-emerald-950/90 hover:bg-yellow-500 hover:text-emerald-950 text-yellow-400 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-yellow-500/60 transition-all shadow-lg cursor-pointer"
            title="Toggle between Executive Chef uniform and original look"
          >
            {viewMode === 'chef' ? '👔 Casual Look' : '👨‍🍳 Chef Uniform'}
          </button>
        </div>

        {/* Portrait Image */}
        <div className="aspect-[3/4] relative overflow-hidden bg-emerald-900">
          {!imageLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-emerald-950">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500 mb-3"></div>
              <p className="text-yellow-400 text-xs uppercase tracking-widest font-serif">Chef Anthony Larsuel</p>
            </div>
          )}
          
          <img 
            src={currentSrc} 
            alt="Chef Anthony Larsuel" 
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              if (e.target.src !== altSrc) {
                e.target.src = altSrc;
              }
            }}
            className={`w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
          
          {/* Subtle bottom vignette to blend naturally into the nameplate */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-80 pointer-events-none"></div>
        </div>

        {/* Dedicated Unobstructed Nameplate (Permanently clear, highly readable, no badges covering) */}
        <div className="p-4 bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 border-t border-yellow-500/40 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-yellow-400 block mb-0.5">
              Executive Culinary Artist
            </span>
            <h3 className="font-serif font-bold text-white text-lg sm:text-xl tracking-wide leading-tight">
              Chef Anthony Larsuel
            </h3>
          </div>

          <div className="text-right">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-800/80 border border-emerald-600/50 text-[11px] font-semibold text-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Booking Open
            </span>
          </div>
        </div>

      </div>

      {/* Under-Card Feature Accolades (Positioned BELOW the card so it never overlaps the photo or name) */}
      <div className="mt-4 grid grid-cols-2 gap-2 text-center">
        <div className="bg-emerald-950/80 border border-yellow-500/30 p-2.5 rounded-lg shadow-md">
          <p className="text-yellow-400 font-serif font-bold text-base leading-none">100% Zabiha</p>
          <p className="text-[10px] text-gray-300 uppercase tracking-widest mt-1">Certified Halal Butchery</p>
        </div>
        <div className="bg-emerald-950/80 border border-yellow-500/30 p-2.5 rounded-lg shadow-md">
          <p className="text-yellow-400 font-serif font-bold text-base leading-none">Zero Seed Oils</p>
          <p className="text-[10px] text-gray-300 uppercase tracking-widest mt-1">Avocado & Olive Only</p>
        </div>
      </div>
    </div>
  );
};

// --- Hero Section ---
const Hero = () => {
  return (
    <section className="relative bg-[#052217] min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-emerald-700/20 blur-[130px]"></div>
        <div className="absolute bottom-10 -left-20 w-96 h-96 rounded-full bg-yellow-600/15 blur-[130px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.03]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Hero Left Content */}
          <div className="lg:w-7/12 text-center lg:text-left">
            
            {/* Top Quality Assurance Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/15 border border-yellow-500/40 text-yellow-300 text-xs font-bold tracking-[0.2em] uppercase">
                <SparklesIcon />
                <span>Culinary & Athletic Excellence</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/90 border border-yellow-500/60 text-yellow-400 text-xs font-bold uppercase tracking-wider shadow-sm">
                <HalalBadgeIcon />
                <span>100% Halal Certified</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-white leading-[1.08] mb-6">
              Chef Anthony <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">
                Larsuel
              </span>
            </h1>

            {/* Subheading / Value Proposition */}
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Michelin-level flavor meets elite sports nutrition. Custom macro-calibrated meal prep and bespoke private dining, prepared exclusively with <strong className="text-yellow-400 font-semibold">100% Halal certified meats</strong> and clean, nutrient-dense ingredients.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a 
                href="#menu" 
                className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-emerald-950 font-bold px-8 py-4 rounded-sm transition-all text-sm uppercase tracking-widest text-center shadow-xl shadow-yellow-500/20 transform hover:-translate-y-0.5"
              >
                Explore Halal Menu
              </a>
              <a 
                href="#contact" 
                className="w-full sm:w-auto bg-transparent border-2 border-yellow-500/80 text-yellow-400 hover:bg-yellow-500 hover:text-emerald-950 px-8 py-4 rounded-sm transition-all text-sm uppercase tracking-widest font-bold text-center"
              >
                Book a Consultation
              </a>
            </div>

            {/* Quick Accreditation Ribbon */}
            <div className="mt-12 pt-8 border-t border-emerald-900/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              <div className="p-3 bg-emerald-950/60 border border-emerald-800/60 rounded-lg">
                <p className="text-2xl font-serif font-bold text-yellow-400">100%</p>
                <p className="text-xs uppercase tracking-wider text-gray-300 mt-1 font-semibold flex items-center justify-center lg:justify-start gap-1">
                  <HalalBadgeIcon /> Halal Certified
                </p>
              </div>
              <div className="p-3 bg-emerald-950/60 border border-emerald-800/60 rounded-lg">
                <p className="text-2xl font-serif font-bold text-yellow-400">Zero</p>
                <p className="text-xs uppercase tracking-wider text-gray-300 mt-1 font-semibold">Seed Oils</p>
              </div>
              <div className="p-3 bg-emerald-950/60 border border-emerald-800/60 rounded-lg">
                <p className="text-2xl font-serif font-bold text-yellow-400">5★</p>
                <p className="text-xs uppercase tracking-wider text-gray-300 mt-1 font-semibold">Private Dining</p>
              </div>
              <div className="p-3 bg-emerald-950/60 border border-emerald-800/60 rounded-lg">
                <p className="text-2xl font-serif font-bold text-yellow-400">Athlete</p>
                <p className="text-xs uppercase tracking-wider text-gray-300 mt-1 font-semibold">Macro Precision</p>
              </div>
            </div>

          </div>
          
          {/* Hero Right Portrait Card */}
          <div className="lg:w-5/12 w-full flex justify-center">
            <ChefPortrait src="/chef-anthony.jpg" altSrc="/chef-anthony-original.jpg" />
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Halal Certification Standards Section ---
const HalalStandards = () => {
  const pillars = [
    {
      title: "100% Zabiha Halal Certified",
      desc: "All beef, lamb, and chicken are strictly hand-slaughtered, independently verified Halal certified, hormone-free, and ethically raised with full provenance."
    },
    {
      title: "Zero Inflammatory Seed Oils",
      desc: "We refuse industrial canola or soybean oils. Every marinade and sear is cooked solely in cold-pressed extra virgin olive oil, pure avocado oil, or grass-fed ghee."
    },
    {
      title: "Wholesome & Nutrient Dense",
      desc: "Crafted with fresh whole herbs (rosemary, thyme, cilantro), raw ginger, real black garlic, and organic vegetables to support muscle recovery and gut microbiome."
    }
  ];

  return (
    <section id="halal" className="py-20 bg-[#041a12] border-y border-yellow-500/20 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-950 via-emerald-900/60 to-emerald-950 border border-yellow-500/40 rounded-xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-10 pb-8 border-b border-emerald-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/50 text-yellow-300 text-xs font-bold tracking-widest uppercase mb-3">
                <HalalBadgeIcon />
                <span>Culinary Integrity Guarantee</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                Certified Halal & Wholesome Ingredient Standard
              </h2>
            </div>
            
            <div className="flex items-center gap-4 bg-emerald-950/90 px-6 py-3.5 rounded-xl border border-yellow-500/60 shadow-lg">
              <div className="w-12 h-12 rounded-full bg-yellow-500 text-emerald-950 flex items-center justify-center font-bold text-2xl font-serif">
                حلال
              </div>
              <div>
                <p className="text-yellow-400 font-bold uppercase tracking-wider text-xs">Official Certification</p>
                <p className="text-white font-serif font-semibold text-base">100% Halal Verified</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="bg-emerald-950/70 p-6 rounded-lg border border-emerald-800/80 hover:border-yellow-500/50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold text-sm mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-yellow-400 font-serif mb-2">{pillar.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

// --- About Section ---
const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#052217] to-emerald-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-yellow-500/50 shadow-2xl">
              <img 
                src="/chef-anthony.jpg" 
                alt="Chef Anthony Larsuel" 
                className="w-full h-auto object-cover max-h-[500px]"
                onError={(e) => { e.target.src = '/chef-anthony-original.jpg'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-serif text-xl font-bold text-yellow-400">"Food is fuel, but it must be art."</p>
                <p className="text-sm text-gray-300 uppercase tracking-widest mt-1">— Chef Anthony Larsuel</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="text-yellow-500 font-bold tracking-[0.2em] text-sm uppercase mb-3 block">
              The Philosophy & Craft
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Halal Culinary Mastery Meets Athletic Performance
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mb-8"></div>
            
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 font-light">
              Chef Anthony Larsuel redefines high-performance nutrition. By uniting <span className="text-yellow-400 font-semibold">100% Halal certified butchery</span> with fine dining craft, he proves that athletic fuel never has to sacrifice richness, depth of flavor, or cultural values.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 font-light">
              Whether curating an intimate in-home multi-course dining experience or supplying macro-calibrated high-protein meals for athletes and executives, each dish is made with anti-inflammatory superfoods, clean fats, and zero compromise.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-emerald-900/40 border border-emerald-800 p-5 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <HalalBadgeIcon />
                  <h4 className="text-yellow-400 font-bold uppercase tracking-wider text-sm">Certified Halal Proteins</h4>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed">Grass-fed lamb, prime beef, and cage-free chicken rigorously certified and ethically raised.</p>
              </div>
              <div className="bg-emerald-900/40 border border-emerald-800 p-5 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <HeartPulseIcon />
                  <h4 className="text-yellow-400 font-bold uppercase tracking-wider text-sm">Athlete Macro Accuracy</h4>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed">Precision high-protein formulas with transparent nutritional breakdowns for peak physical output.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Menu & Good Ingredients Section ---
const MenuGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedDish, setExpandedDish] = useState(null);

  const menuItems = [
    {
      id: 'lamb-chops',
      name: "Signature Halal Lamb Chops",
      category: 'signature',
      halalStatus: "100% Halal Certified (New Zealand Grass-Fed)",
      macros: "52g Protein • 6g Carbs • 34g Healthy Fats • 540 kcal",
      img: "https://images.unsplash.com/photo-1603894584373-5ac82bea3d76?auto=format&fit=crop&w=800&q=80",
      description: "Thick-cut, pan-seared pasture-raised lamb chops infused with fresh rosemary and roasted garlic confit, finished with a tart pomegranate-balsamic reduction.",
      goodIngredients: [
        {
          name: "100% Halal Grass-Fed NZ Lamb",
          benefit: "High in bioavailable heme iron, zinc, vitamin B12, and muscle-repairing conjugated linoleic acid (CLA)."
        },
        {
          name: "Fresh Rosemary & Thyme",
          benefit: "Packed with carnosic acid and rosmarinic acid—powerful antioxidants that reduce oxidative muscle stress."
        },
        {
          name: "Cold-Pressed Extra Virgin Olive Oil",
          benefit: "Monounsaturated oleic acids that support cardiovascular health without inflammatory seed oils."
        },
        {
          name: "Pomegranate Reduction",
          benefit: "Rich in punicalagins to promote nitric oxide production, enhancing blood flow and athletic endurance."
        }
      ]
    },
    {
      id: 'steak',
      name: "Prime Halal Black Angus Steak",
      category: 'signature',
      halalStatus: "100% Halal Certified Prime Angus",
      macros: "58g Protein • 2g Carbs • 28g Fats • 490 kcal",
      img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80",
      description: "Tender prime steak seared in grass-fed garlic butter and cracked peppercorn, paired with fire-charred heirloom asparagus and grey sea salt.",
      goodIngredients: [
        {
          name: "Halal Prime Angus Beef",
          benefit: "Natural source of creatine, L-carnitine, and complete essential amino acids for maximum strength and lean muscle mass."
        },
        {
          name: "Grass-Fed Compound Herb Butter",
          benefit: "Contains Vitamin K2 and fat-soluble vitamins (A & D) to enhance nutrient absorption."
        },
        {
          name: "Charred Heirloom Asparagus",
          benefit: "Natural diuretic loaded with prebiotic fiber inulin, folate, and glutathione for cellular detox."
        },
        {
          name: "Celtic Sea Salt",
          benefit: "Supplies 80+ essential trace electrolytes to prevent dehydration and post-workout cramping."
        }
      ]
    },
    {
      id: 'garlic-noodles',
      name: "Garlic Confit Noodles & Wild Shrimp",
      category: 'prep',
      halalStatus: "100% Halal Certified Wild-Caught Seafood",
      macros: "44g Protein • 52g Carbs • 14g Fats • 510 kcal",
      img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
      description: "Jumbo Gulf wild shrimp tossed in slow-cooked black garlic confit, scallions, and silky wheat noodles with savory umami reduction.",
      goodIngredients: [
        {
          name: "Wild-Caught Jumbo Shrimp",
          benefit: "Ultra-lean high-protein seafood rich in astaxanthin (a carotenoid antioxidant 6,000x stronger than Vit C) and selenium."
        },
        {
          name: "Slow-Confit Black Garlic & Shallots",
          benefit: "Fermented allicin compounds that enhance immune function, lower cholesterol, and support optimal gut health."
        },
        {
          name: "Avocado Oil & Grass-Fed Butter",
          benefit: "Clean, stable cooking fats that resist oxidation under heat."
        },
        {
          name: "Fresh Chopped Scallions",
          benefit: "Rich in Vitamin K for bone density and quercetin for natural allergy relief."
        }
      ]
    },
    {
      id: 'katsu',
      name: "Crispy Halal Chicken Katsu",
      category: 'prep',
      halalStatus: "100% Halal Certified Organic Chicken Breast",
      macros: "48g Protein • 38g Carbs • 16g Fats • 490 kcal",
      img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
      description: "Air-crisped organic chicken breast in light artisanal panko, drizzled with homemade ginger-honey tonkatsu sauce over shredded purple cabbage.",
      goodIngredients: [
        {
          name: "100% Halal Organic Chicken Breast",
          benefit: "High-density clean protein boasting optimum leucine levels to trigger muscle protein synthesis (MPS)."
        },
        {
          name: "Avocado Oil Crisp",
          benefit: "Zero harmful trans fats or hydrogenated oils—pure monounsaturated fat."
        },
        {
          name: "Fresh Ginger & Raw Honey Glaze",
          benefit: "Gingerols provide natural anti-nausea, digestion acceleration, and post-training joint relief."
        },
        {
          name: "Purple Cabbage Slaw",
          benefit: "High anthocyanin antioxidant content, aiding cellular repair and cardiovascular elasticity."
        }
      ]
    },
    {
      id: 'cajun-pasta',
      name: "Cajun & Rasta Halal Pasta",
      category: 'prep',
      halalStatus: "100% Halal Certified Chicken & Wild Shrimp",
      macros: "46g Protein • 54g Carbs • 18g Fats • 560 kcal",
      img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80",
      description: "Tender halal chicken strips and wild shrimp sautéed with sweet tri-color peppers in a fragrant Caribbean coconut cream jerk sauce.",
      goodIngredients: [
        {
          name: "Dual Protein Halal Chicken & Shrimp",
          benefit: "Provides a full spectrum of 9 essential amino acids for comprehensive tissue restoration."
        },
        {
          name: "Tri-Color Bell Peppers",
          benefit: "Over 200% of daily Vitamin C needs to enhance iron absorption and collagen production."
        },
        {
          name: "Pure Organic Coconut Milk & Turmeric",
          benefit: "Naturally lactose-free MCTs (medium-chain triglycerides) combined with curcumin for anti-inflammatory fuel."
        },
        {
          name: "Authentic Jamaican Allspice & Thyme",
          benefit: "Natural antimicrobial herbs that enhance gastric digestion without chemical additives."
        }
      ]
    },
    {
      id: 'chicken-wings',
      name: "Glazed Halal Sweet Chili Wings",
      category: 'signature',
      halalStatus: "100% Halal Certified Free-Range Chicken",
      macros: "42g Protein • 18g Carbs • 22g Fats • 440 kcal",
      img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80",
      description: "Crispy oven-roasted halal chicken wings glazed in raw clover honey, coconut aminos, fresh grated ginger root, and toasted sesame.",
      goodIngredients: [
        {
          name: "100% Halal Free-Range Wings",
          benefit: "Natural collagen, gelatin, and glucosamine from bone-in cuts to protect tendons and articular joints."
        },
        {
          name: "Coconut Aminos & Raw Honey",
          benefit: "Low-glycemic alternative to refined white sugar and soy, rich in potassium and active enzymes."
        },
        {
          name: "Toasted White & Black Sesame Seeds",
          benefit: "Excellent plant source of zinc, magnesium, and sesamin for hormone and metabolic balance."
        },
        {
          name: "Fresh Garlic & Cayenne Pepper",
          benefit: "Capsaicin boosts thermogenesis, blood circulation, and metabolic rate."
        }
      ]
    },
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-gray-200 pb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
              <HalalBadgeIcon />
              <span>100% Halal Certified Menu</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950">
              Signature Dishes & Wholesome Ingredients
            </h2>
            <p className="text-gray-600 mt-3 text-base sm:text-lg">
              Every dish is crafted with verified 100% Halal proteins, zero seed oils, and nutrient-dense whole foods calibrated for high performance.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            <button 
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === 'all' 
                  ? 'bg-emerald-900 text-yellow-400 shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Items
            </button>
            <button 
              onClick={() => setActiveCategory('signature')}
              className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === 'signature' 
                  ? 'bg-emerald-900 text-yellow-400 shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Private Dining
            </button>
            <button 
              onClick={() => setActiveCategory('prep')}
              className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === 'prep' 
                  ? 'bg-emerald-900 text-yellow-400 shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              High-Protein Meal Prep
            </button>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const isExpanded = expandedDish === item.id;
            return (
              <div 
                key={item.id} 
                className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Container with Badges */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent"></div>
                  
                  {/* Top Halal Badge Ribbon */}
                  <div className="absolute top-3 left-3 bg-emerald-950/90 backdrop-blur-md border border-yellow-500/60 px-3 py-1 rounded text-[11px] font-bold text-yellow-400 tracking-wider uppercase flex items-center gap-1.5 shadow-md">
                    <HalalBadgeIcon />
                    <span>Halal Certified</span>
                  </div>

                  {/* Macros overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="inline-block bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-mono font-medium text-yellow-300">
                      {item.macros}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold font-serif text-emerald-950 mb-2">
                      {item.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Halal Certification Note */}
                    <div className="mb-4 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-2 rounded border-l-4 border-emerald-700 flex items-center gap-2">
                      <HalalBadgeIcon />
                      <span>{item.halalStatus}</span>
                    </div>

                    {/* Good Ingredients Section */}
                    <div className="border-t border-gray-100 pt-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                          <LeafIcon />
                          <span>What's Good in It</span>
                        </span>
                        <button
                          type="button"
                          onClick={() => setExpandedDish(isExpanded ? null : item.id)}
                          className="text-xs font-bold text-yellow-600 hover:text-yellow-700 underline cursor-pointer"
                        >
                          {isExpanded ? 'Hide Details' : 'View Benefits'}
                        </button>
                      </div>

                      {/* Ingredient Highlights */}
                      <ul className="space-y-2.5">
                        {item.goodIngredients.slice(0, isExpanded ? 4 : 2).map((ing, i) => (
                          <li key={i} className="text-xs text-gray-700 bg-gray-50 p-2.5 rounded border border-gray-100">
                            <span className="font-bold text-emerald-950 block mb-0.5">• {ing.name}</span>
                            <span className="text-gray-600 font-light leading-relaxed">{ing.benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Link to Consultation */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Custom Meal Prep & Dining
                    </span>
                    <a 
                      href="#contact" 
                      className="text-xs font-bold text-emerald-900 hover:text-yellow-600 uppercase tracking-wider flex items-center gap-1 transition-colors"
                    >
                      Inquire Menu &rarr;
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

// --- Services Section ---
const Services = () => {
  const servicesList = [
    {
      icon: <UtensilsIcon />,
      title: "Halal Private Dining",
      desc: "An unforgettable five-star culinary experience in the luxury of your home. Featuring signature dishes like Halal grass-fed Lamb Chops and Prime Angus Steak seared to perfection."
    },
    {
      icon: <DumbbellIcon />,
      title: "Athlete Nutrition & Macros",
      desc: "Custom sports nutrition designed for athletes and high-performers. Focused on macro-nutrient balance, clean fats (avocado/olive), high protein density, and rapid recovery."
    },
    {
      icon: <CalendarIcon />,
      title: "Weekly Halal Meal Prep",
      desc: "Fresh weekly meal prep delivered direct. Enjoy nutrient-dense favorites like Chicken Katsu, Garlic Confit Noodles & Shrimp, and Caribbean Cajun Pasta without compromise."
    }
  ];

  return (
    <section id="services" className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-800 font-bold tracking-[0.2em] text-sm uppercase mb-2 block">What I Do</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950 mb-6">Culinary & Nutritional Excellence</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Whether you need tailored sports nutrition to hit your fitness goals, or a luxurious private dinner, every menu is crafted with precision, passion, and 100% certified Halal integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-white p-8 border-t-4 border-emerald-800 rounded-lg shadow-md hover:shadow-xl transition-shadow group">
              <div className="text-yellow-600 mb-6 group-hover:scale-110 transition-transform origin-left">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-emerald-950 uppercase tracking-wide mb-4 font-serif">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Contact Section ---
const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-emerald-950 text-white relative border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <span className="text-yellow-500 font-bold tracking-[0.2em] text-sm uppercase mb-2 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Book Your Consultation</h2>
            <div className="w-24 h-1 bg-yellow-500 mb-8"></div>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light">
              Ready to elevate your diet with 100% Halal meal prep, book a private dinner, or establish a custom sports nutrition plan? Fill out the form, and Chef Anthony will reach out to discuss your specific goals.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-900 border border-emerald-800 flex items-center justify-center text-yellow-400 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-sm">Phone</h4>
                  <p className="text-gray-400">Available upon consultation request</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-900 border border-emerald-800 flex items-center justify-center text-yellow-400 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-sm">Email</h4>
                  <p className="text-gray-400">booking@cheflarsuel.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-900 border border-emerald-800 flex items-center justify-center text-yellow-400 rounded-full">
                  <HalalBadgeIcon />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-sm">Dietary Standards</h4>
                  <p className="text-gray-400">100% Certified Halal • Zero Seed Oils • Macro Calibrated</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            {submitted ? (
              <div className="bg-emerald-900/60 p-10 border border-yellow-500/50 rounded-lg text-center">
                <div className="w-16 h-16 bg-yellow-500 text-emerald-950 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                  ✓
                </div>
                <h3 className="text-2xl font-serif font-bold text-yellow-400 mb-2">Inquiry Received</h3>
                <p className="text-gray-300">Thank you! Chef Anthony will review your consultation request and reach out shortly.</p>
              </div>
            ) : (
              <form className="bg-emerald-900/40 p-8 border border-emerald-800/80 rounded-xl shadow-xl backdrop-blur-sm" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-300 mb-2 font-semibold">First Name</label>
                    <input required type="text" className="w-full bg-emerald-950 border border-emerald-700/80 text-white px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors rounded-sm" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-300 mb-2 font-semibold">Last Name</label>
                    <input required type="text" className="w-full bg-emerald-950 border border-emerald-700/80 text-white px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors rounded-sm" placeholder="Doe" />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-xs uppercase tracking-wider text-gray-300 mb-2 font-semibold">Email Address</label>
                  <input required type="email" className="w-full bg-emerald-950 border border-emerald-700/80 text-white px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors rounded-sm" placeholder="john@example.com" />
                </div>
                <div className="mb-6">
                  <label className="block text-xs uppercase tracking-wider text-gray-300 mb-2 font-semibold">Service of Interest</label>
                  <select className="w-full bg-emerald-950 border border-emerald-700/80 text-white px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors rounded-sm appearance-none">
                    <option>Weekly Halal Sports Meal Prep</option>
                    <option>Halal Private Dining Experience (In-Home)</option>
                    <option>VIP Event Catering</option>
                    <option>Athlete Competition Diet Planning</option>
                  </select>
                </div>
                <div className="mb-8">
                  <label className="block text-xs uppercase tracking-wider text-gray-300 mb-2 font-semibold">Message Details & Dietary Goals</label>
                  <textarea rows="4" className="w-full bg-emerald-950 border border-emerald-700/80 text-white px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors rounded-sm" placeholder="Tell Chef Anthony about your fitness goals, target macros, or preferred dishes from the menu..."></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-emerald-950 font-bold uppercase tracking-widest py-4 transition-all rounded-sm shadow-lg shadow-yellow-500/20 cursor-pointer">
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => (
  <footer className="bg-[#03150e] py-12 text-center border-t border-emerald-900/50">
    <div className="max-w-7xl mx-auto px-4">
      <p className="text-yellow-500 font-bold tracking-widest text-2xl mb-2 font-serif">CHEF ANTHONY LARSUEL</p>
      <div className="inline-flex items-center gap-2 text-yellow-400 text-xs tracking-widest uppercase mb-4 bg-emerald-950/80 px-4 py-1.5 rounded-full border border-yellow-500/30">
        <HalalBadgeIcon />
        <span>100% Certified Halal • Pure Whole Ingredients • Athlete Performance</span>
      </div>
      <p className="text-gray-500 text-xs tracking-wider uppercase">
        &copy; {new Date().getFullYear()} Chef Anthony Larsuel. All rights reserved.
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-emerald-50 selection:bg-yellow-500 selection:text-emerald-950 font-sans">
      <Header />
      <Hero />
      <HalalStandards />
      <About />
      <MenuGallery />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
