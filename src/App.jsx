import React, { useState, useEffect } from 'react';

// Icons
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const UtensilsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
);

const DumbbellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.4 14.4 9.6 9.6"/><path d="M18.6 21.4l-5-5 .4-1.9 1.5-1.5-2-2-1.5 1.5-1.9.4-5-5"/><path d="M21.4 18.6l-5-5-1.9.4-1.5-1.5-2-2 1.5-1.5.4-1.9-5-5"/><path d="M6 10.4 3.6 12.8a2.83 2.83 0 1 0 4 4l2.4-2.4"/><path d="M13.6 18l2.4 2.4a2.83 2.83 0 1 0 4-4l-2.4-2.4"/></svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);

const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
);

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
    { name: 'Services', href: '#services' },
    { name: 'Menu', href: '#menu' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-emerald-950/95 py-4 shadow-xl backdrop-blur-md border-b border-yellow-500/20' : 'bg-emerald-950/80 py-6 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl sm:text-3xl font-serif font-bold text-yellow-500 tracking-widest flex items-center gap-2">
              <span>CHEF ANTHONY</span>
              <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block"></span>
            </a>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-200 hover:text-yellow-400 transition-colors text-sm font-medium tracking-widest uppercase">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-yellow-500 hover:bg-yellow-400 text-emerald-950 px-6 py-2.5 rounded-sm transition-all text-sm font-bold tracking-widest uppercase shadow-lg shadow-yellow-500/20 transform hover:-translate-y-0.5">
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-yellow-500 p-2 focus:outline-none" aria-label="Toggle menu">
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-emerald-950/95 backdrop-blur-xl border-t border-emerald-800/80 absolute w-full shadow-2xl">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3.5 text-center text-gray-200 hover:text-yellow-400 hover:bg-emerald-900/50 transition-colors text-sm font-medium tracking-widest uppercase border-b border-emerald-800/30"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-yellow-500 hover:bg-yellow-400 text-emerald-950 py-3 rounded-sm font-bold tracking-widest uppercase text-sm"
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

// Chef Portrait with optional view toggle and high-end visual styling
const ChefPortrait = ({ src = '/chef-anthony.jpg', altSrc = '/chef-anthony-original.jpg' }) => {
  const [viewMode, setViewMode] = useState('chef'); // 'chef' | 'original'
  const [imageLoaded, setImageLoaded] = useState(false);

  // If the user's project uses public folder or import, fallback gracefully:
  const currentSrc = viewMode === 'chef' ? src : altSrc;

  return (
    <div className="relative group">
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/40 via-emerald-600/30 to-yellow-500/40 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition duration-700"></div>

      <div className="relative aspect-[3/4] overflow-hidden rounded-lg border-2 border-yellow-500/70 shadow-2xl bg-emerald-900">
        {!imageLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-emerald-950">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500 mb-3"></div>
            <p className="text-yellow-400 text-xs uppercase tracking-widest">Chef Anthony Larsuel</p>
          </div>
        )}
        
        <img 
          src={currentSrc} 
          alt="Chef Anthony Larsuel" 
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            // Fallback to secondary image or relative path if needed
            if (e.target.src !== altSrc) {
              e.target.src = altSrc;
            }
          }}
          className={`w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/85 via-transparent to-black/20 pointer-events-none"></div>

        {/* Lower Tag */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
          <div className="backdrop-blur-md bg-emerald-950/85 border border-yellow-500/40 px-3.5 py-1.5 rounded text-xs text-yellow-400 uppercase tracking-widest font-semibold flex items-center gap-2 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Executive Chef Anthony Larsuel
          </div>
        </div>

        {/* Switcher button */}
        <div className="absolute top-4 right-4">
          <button 
            type="button"
            onClick={() => setViewMode(prev => prev === 'chef' ? 'original' : 'chef')}
            className="bg-emerald-950/85 hover:bg-yellow-500 hover:text-emerald-950 text-yellow-400 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded border border-yellow-500/50 backdrop-blur-md transition-all shadow-md"
            title="Toggle between Executive Chef portrait and casual style"
          >
            {viewMode === 'chef' ? 'Casual Look' : 'Chef Uniform'}
          </button>
        </div>
      </div>
      
      {/* Floating Macro / Fine Dining Badge */}
      <div className="absolute -bottom-6 -left-6 bg-emerald-900/95 backdrop-blur-md border border-yellow-500 p-4 shadow-2xl rounded-sm hidden md:flex items-center gap-3 transform -rotate-1 hover:rotate-0 transition-transform">
        <div className="w-10 h-10 rounded-full bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center text-yellow-400">
          <AwardIcon />
        </div>
        <div>
          <p className="text-2xl font-serif font-bold text-yellow-400 leading-none">100%</p>
          <p className="text-[11px] text-gray-200 uppercase tracking-widest mt-1 font-semibold">Custom Macro<br/>& Fine Dining</p>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative bg-[#052217] min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-emerald-700/20 blur-[120px]"></div>
        <div className="absolute bottom-10 -left-20 w-96 h-96 rounded-full bg-yellow-600/15 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="lg:w-7/12 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold tracking-[0.25em] uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
              Elevating Culinary & Athletic Standards
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
              Chef Anthony <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600">
                Larsuel
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Elite private dining, bespoke sports nutrition, and high-protein gourmet meal prep designed for championship performance and uncompromised flavor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a href="#services" className="w-full sm:w-auto bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-sm transition-all text-sm uppercase tracking-widest font-semibold text-center shadow-lg shadow-emerald-950/60 border border-emerald-600/50">
                Explore Services
              </a>
              <a href="#contact" className="w-full sm:w-auto bg-transparent border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-emerald-950 px-8 py-4 rounded-sm transition-all text-sm uppercase tracking-widest font-bold text-center">
                Book Consultation
              </a>
            </div>

            {/* Quick Highlights Bar */}
            <div className="mt-12 pt-8 border-t border-emerald-900/80 grid grid-cols-3 gap-4 text-center lg:text-left max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-2xl font-serif font-bold text-yellow-400">5★</p>
                <p className="text-xs uppercase tracking-wider text-gray-400 mt-1">Private Dining</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-yellow-400">100%</p>
                <p className="text-xs uppercase tracking-wider text-gray-400 mt-1">Fresh & Prepared</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-yellow-400">Athlete</p>
                <p className="text-xs uppercase tracking-wider text-gray-400 mt-1">Macro Precision</p>
              </div>
            </div>
          </div>
          
          {/* Chef Anthony Portrait */}
          <div className="lg:w-5/12 w-full max-w-md lg:max-w-full">
            <ChefPortrait src="/chef-anthony.jpg" altSrc="/chef-anthony-original.jpg" />
          </div>

        </div>
      </div>
    </section>
  );
};

// Dedicated About Section to match the navigation link
const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#052217] to-emerald-950 text-white relative border-t border-emerald-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-yellow-500/40 shadow-2xl">
              <img 
                src="/chef-anthony.jpg" 
                alt="Chef Anthony in the kitchen" 
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
              Culinary Mastery Meets Athletic Performance
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mb-8"></div>
            
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 font-light">
              Chef Anthony Larsuel redefines the intersection between fine dining craftsmanship and athletic nutrition. Specializing in high-protein, performance-driven cuisine without compromising on Michelin-caliber flavor, Chef Anthony creates meals that fuel ambitious lifestyles.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 font-light">
              Whether creating bespoke multi-course menus for intimate gatherings or delivering regimented macro-optimized weekly meal prep for elite athletes, every dish is executed with culinary rigor, fresh ingredients, and signature sauces.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-emerald-900/40 border border-emerald-800 p-4 rounded-sm">
                <h4 className="text-yellow-400 font-bold uppercase tracking-wider text-sm mb-1">Tailored Macro Profiles</h4>
                <p className="text-gray-300 text-xs leading-normal">Optimized for high protein, lean mass, and energy requirements tailored to your body.</p>
              </div>
              <div className="bg-emerald-900/40 border border-emerald-800 p-4 rounded-sm">
                <h4 className="text-yellow-400 font-bold uppercase tracking-wider text-sm mb-1">Luxury Private Dinners</h4>
                <p className="text-gray-300 text-xs leading-normal">White-glove private dining experience hosted seamlessly inside your residence or venue.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const servicesList = [
    {
      icon: <UtensilsIcon />,
      title: "Private Dining",
      desc: "An unforgettable culinary experience in the comfort of your own home. Featuring signature dishes like perfectly seared Lamb Chops and premium Steak."
    },
    {
      icon: <DumbbellIcon />,
      title: "Sports Nutrition",
      desc: "Custom sports nutrition designed for athletes and high-performers. Focused on macro-nutrient balance, high protein diets, and recovery."
    },
    {
      icon: <CalendarIcon />,
      title: "Meal Prepped Plans",
      desc: "Weekly high-protein meal prep delivered fresh. Enjoy favorites like Katsu, Garlic Noodles & Shrimp, and Cajun Pasta without the hassle."
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
            Whether you need tailored sports nutrition to hit your fitness goals, or a luxurious private dinner, every menu is crafted with precision and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-white p-8 border-t-4 border-emerald-800 shadow-md hover:shadow-xl transition-shadow group">
              <div className="text-yellow-600 mb-6 group-hover:scale-110 transition-transform origin-left">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-emerald-950 uppercase tracking-wide mb-4 font-serif">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuGallery = () => {
  const menuItems = [
    { name: "Garlic Noodles & Shrimp", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80" },
    { name: "Crispy Katsu", img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80" },
    { name: "Signature Lamb Chops", img: "https://images.unsplash.com/photo-1603894584373-5ac82bea3d76?auto=format&fit=crop&w=800&q=80" },
    { name: "Cajun & Rasta Pasta", img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80" },
    { name: "Premium Steak", img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80" },
    { name: "Glazed Chicken Wings", img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-emerald-800 font-bold tracking-[0.2em] text-sm uppercase mb-2 block">The Menu</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950">Signature Dishes</h2>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="text-gray-600 italic border-l-4 border-yellow-500 pl-4">
              "Flavor without compromise. Every dish is a balance of taste and nutrition."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden h-72 cursor-pointer bg-gray-100 rounded-sm shadow-md">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-white font-bold text-xl uppercase tracking-wide font-serif">{item.name}</h3>
                <div className="w-12 h-1 bg-yellow-500 mt-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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
              Ready to elevate your diet, book a private dinner, or establish a custom sports nutrition plan? Fill out the form, and Chef Anthony will get back to you to discuss your specific needs and goals.
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
            </div>
          </div>

          <div className="lg:w-1/2">
            {submitted ? (
              <div className="bg-emerald-900/60 p-10 border border-yellow-500/50 rounded-sm text-center">
                <div className="w-16 h-16 bg-yellow-500 text-emerald-950 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                  ✓
                </div>
                <h3 className="text-2xl font-serif font-bold text-yellow-400 mb-2">Inquiry Received</h3>
                <p className="text-gray-300">Thank you! Chef Anthony will review your consultation request and reach out shortly.</p>
              </div>
            ) : (
              <form className="bg-emerald-900/40 p-8 border border-emerald-800/80 rounded-sm shadow-xl backdrop-blur-sm" onSubmit={handleSubmit}>
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
                    <option>Sports Nutrition & Custom Meal Prep</option>
                    <option>Private Dining Experience (In-Home)</option>
                    <option>VIP Event Catering</option>
                    <option>Athlete Competition Diet Planning</option>
                  </select>
                </div>
                <div className="mb-8">
                  <label className="block text-xs uppercase tracking-wider text-gray-300 mb-2 font-semibold">Message Details</label>
                  <textarea rows="4" className="w-full bg-emerald-950 border border-emerald-700/80 text-white px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors rounded-sm" placeholder="Tell Chef Anthony about your fitness goals, dietary requirements, or event date..."></textarea>
                </div>
                <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-400 text-emerald-950 font-bold uppercase tracking-widest py-4 transition-all rounded-sm shadow-lg shadow-yellow-500/20">
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

const Footer = () => (
  <footer className="bg-[#03150e] py-10 text-center border-t border-emerald-900/50">
    <div className="max-w-7xl mx-auto px-4">
      <p className="text-yellow-500 font-bold tracking-widest text-2xl mb-2 font-serif">CHEF ANTHONY LARSUEL</p>
      <p className="text-gray-400 text-xs tracking-widest uppercase mb-4">Fine Dining • Sports Nutrition • Gourmet High-Protein Meal Prep</p>
      <p className="text-gray-600 text-xs tracking-wider uppercase">
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
      <About />
      <Services />
      <MenuGallery />
      <Contact />
      <Footer />
    </div>
  );
}
