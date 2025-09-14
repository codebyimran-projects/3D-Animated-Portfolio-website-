import React, { useEffect, useRef } from 'react';

const GiantBrandText = () => {
    const textRef = useRef(null);
    const subtitleRef = useRef(null);

    useEffect(() => {
        // Simple animation on component mount
        if (textRef.current && subtitleRef.current) {
            textRef.current.style.opacity = '1';
            textRef.current.style.transform = 'translateY(0)';
            subtitleRef.current.style.opacity = '1';
            subtitleRef.current.style.transform = 'translateY(0)';
        }
    }, []);

    return (
        <section className="relative w-full py-16 md:py-20 lg:py-24 bg-transparent overflow-hidden">
            <div className="relative w-full text-center px-4 max-w-screen-2xl mx-auto">
                <h2 
                    ref={textRef}
                    className="font-sans font-bold text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] 2xl:text-[8.5rem] text-white tracking-tight leading-none opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
                    style={{
                        textShadow: '0 4px 12px rgba(0,0,0,0.3), 0 6px 20px rgba(0,0,0,0.2)',
                        lineHeight: '0.85',
                        fontWeight: 700
                    }}
                >
                    Thirtysixstudio
                </h2>
                
                {/* Subtle subtitle */}
                <p 
                    ref={subtitleRef}
                    className="mt-6 md:mt-8 text-white/90 text-base md:text-lg font-light max-w-3xl mx-auto opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-300"
                    style={{
                        textShadow: '0 1px 3px rgba(0,0,0,0.4)',
                        fontWeight: 300
                    }}
                >
                    Crafting digital excellence with purpose and precision
                </p>
            </div>
            
            {/* Decorative elements with very low opacity */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full opacity-[0.02] animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white rounded-full opacity-[0.015] animate-pulse" style={{animationDelay: '1.5s'}}></div>
            
            {/* Subtle gradient overlays */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-red-900/5 to-transparent"></div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-900/5 to-transparent"></div>
            </div>
        </section>
    );
};

export default GiantBrandText;