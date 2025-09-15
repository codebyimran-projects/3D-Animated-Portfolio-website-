import React, { useState, useEffect } from "react";
import Canvas from "./Canvas";
import details from '../utili/data.js'
const Hero = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            const progress = (scrollTop / (docHeight - windowHeight)) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (


        <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-[4vw] py-12 md:py-15 overflow-hidden relative">
        {details[0].map((item, index) => (
        <Canvas key={index} detail={item} />
      ))}

            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <div className="absolute top-1/4 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-red-300/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            </div>

            {/* Left: Text Content */}
            <div className="flex-1 max-w-2xl z-10">
                <h1
                    className="font-sans font-light text-4xl md:text-5xl lg:text-6xl leading-tight m-0 tracking-tight text-left"
                    style={{
                        background: "linear-gradient(90deg, #fff 0%, #ffcccb 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
                    }}
                >
                    At Codebyimran we build digital products and increase purpose for purposeful brands.
                </h1>
                <p
                    className="mt-8 text-lg md:text-xl font-light leading-relaxed text-left max-w-lg"
                    style={{
                        color: "rgba(255, 255, 255, 0.9)",
                        textShadow: "0 1px 4px rgba(0,0,0,0.3)",
                    }}
                >
                    We partner with visionary companies to craft meaningful digital experiences that drive impact and growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                    <a
                        href="#"
                        className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 group shadow-lg hover:shadow-red-500/30 border border-white/20"
                    >
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-white/30 rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-white/20 rounded-md group-hover:mb-12 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out flex items-center">
                            Start a project
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </span>
                    </a>
                    <a
                        href="#"
                        className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition-all duration-300 border border-white/30 rounded-lg hover:text-white group backdrop-blur-sm"
                    >
                        <span className="absolute inset-0 w-full h-full bg-white/10 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"></span>
                        <span className="relative text-white transition-colors duration-200 ease-in-out flex items-center">
                            Learn more
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                            </svg>
                        </span>
                    </a>
                </div>
                
                {/* Stats section */}
                <div className="flex flex-wrap gap-6 mt-16">
                    <div className="flex flex-col">
                        <span className="text-3xl font-light text-white">36+</span>
                        <span className="text-sm text-white/80 mt-1">Projects delivered</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-light text-white">18+</span>
                        <span className="text-sm text-white/80 mt-1">Happy clients</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-light text-white">5+</span>
                        <span className="text-sm text-white/80 mt-1">Years experience</span>
                    </div>
                </div>
            </div>

            {/* Right: Animated Circular Graphic */}
            <div className="flex-1 flex justify-center items-center min-w-[260px] mt-12 md:mt-0 relative">
                <AnimatedCircle progress={scrollProgress} />
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <div className="text-white/80 text-sm mb-2">Scroll to explore</div>
                <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center">
                    <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
                </div>
            </div>
        </section>
    );
};

// Enhanced Animated Circle with progress tracking
const AnimatedCircle = ({ progress }) => {
    const circumference = 2 * Math.PI * 50;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 120 120"
                className="block"
            >
                {/* Background circle */}
                <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="rgba(255, 255, 255, 0.2)"
                    strokeWidth="4"
                    fill="none"
                />
                
                {/* Animated progress circle */}
                <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    style={{
                        transform: "rotate(-90deg)",
                        transformOrigin: "50% 50%",
                        transition: "stroke-dashoffset 0.5s ease-in-out",
                    }}
                />
                
                {/* Gradient definition */}
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#ffcccb" />
                    </linearGradient>
                </defs>
                
                {/* Inner content */}
                <circle
                    cx="60"
                    cy="60"
                    r="40"
                    fill="rgba(255, 255, 255, 0.05)"
                />
                
                <text
                    x="60"
                    y="55"
                    textAnchor="middle"
                    fontSize="12"
                    fill="#ffffff"
                    fontFamily="Inter, sans-serif"
                    fontWeight="500"
                >
                    Scroll Progress
                </text>
                <text
                    x="60"
                    y="75"
                    textAnchor="middle"
                    fontSize="16"
                    fill="#fff"
                    fontFamily="Inter, sans-serif"
                    fontWeight="600"
                >
                    {Math.round(progress)}%
                </text>
            </svg>
            
            {/* Floating elements around the circle */}
            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white/50 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-white/40 animate-pulse" style={{animationDelay: "0.5s"}}></div>
            <div className="absolute top-1/3 -right-6 w-4 h-4 rounded-full bg-white/60 animate-pulse" style={{animationDelay: "1s"}}></div>
        </div>
    );
};

export default Hero;