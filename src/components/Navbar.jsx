import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
            
            // Update active section based on scroll position
            const sections = ['home', 'about', 'work', 'services', 'contact'];
            const scrollPosition = window.scrollY + 100;
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;
                    
                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 py-4 z-50 transition-all duration-300 ${isScrolled ? 'bg-red-900/20 backdrop-blur-md' : 'bg-transparent'}`}>
                {/* Brand */}
                <div 
                    className="font-sans font-light text-lg tracking-wide select-none cursor-pointer" 
                    style={{ 
                        letterSpacing: '0.08em',
                        color: '#fff',
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                    }}
                    onClick={() => scrollToSection('home')}
                >
                    thirtysixstudio
                </div>
                
                {/* Desktop Menu */}
                <ul className="hidden md:flex flex-1 justify-center gap-8 lg:gap-12">
                    {["About", "Work", "Services", "Contact"].map((item) => {
                        const itemId = item.toLowerCase();
                        const isActive = activeSection === itemId;
                        
                        return (
                            <li key={item}>
                                <a
                                    href={`#${itemId}`}
                                    className={`font-sans font-normal text-base px-2 py-1 transition-all duration-300 border-b-2 ${isActive ? 'border-red-300 text-white' : 'border-transparent text-red-100 hover:border-red-200'}`}
                                    style={{ 
                                        letterSpacing: '0.04em',
                                        textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                                    }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(itemId);
                                    }}
                                >
                                    {item}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                
                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden flex flex-col w-6 h-5 justify-between items-center z-60"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="w-full h-0.5 rounded-full transition-all duration-300 bg-white"></span>
                    <span className="w-full h-0.5 rounded-full transition-all duration-300 bg-white"></span>
                    <span className="w-full h-0.5 rounded-full transition-all duration-300 bg-white"></span>
                </button>
                
                {/* Scroll Indicator */}
                <div className="hidden md:flex items-center justify-center w-8 h-8">
                    <svg className="animate-spin-slow" width="32" height="32" viewBox="0 0 32 32">
                        <circle
                            cx="16"
                            cy="16"
                            r="13"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="1.5"
                            strokeDasharray="82"
                            strokeDashoffset="10"
                            opacity="0.3"
                        />
                        <circle
                            cx="16"
                            cy="16"
                            r="13"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="1.5"
                            strokeDasharray="20"
                            strokeDashoffset="0"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
                
                {/* Custom animation */}
                <style>{`
                    .animate-spin-slow {
                        animation: spin 2.8s linear infinite;
                    }
                    @keyframes spin {
                        100% { transform: rotate(360deg); }
                    }
                `}</style>
            </nav>
            
            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-red-900/95 backdrop-blur-md z-40 transition-all duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {["Home", "About", "Work", "Services", "Contact"].map((item) => {
                        const itemId = item.toLowerCase();
                        const isActive = activeSection === itemId;
                        
                        return (
                            <a
                                key={item}
                                href={`#${itemId}`}
                                className={`font-sans text-2xl font-normal px-4 py-2 transition-all duration-300 ${isActive ? 'text-white border-b-2 border-red-300' : 'text-red-100'}`}
                                style={{ 
                                    letterSpacing: '0.04em',
                                    textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                                }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(itemId);
                                }}
                            >
                                {item}
                            </a>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Navbar;