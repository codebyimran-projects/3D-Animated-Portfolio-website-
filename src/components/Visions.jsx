import React from "react";
import Canvas from "./Canvas";
import details from '../utili/data.js'
const values = [
    {
        word: "Agile",
        desc: "We adapt quickly, iterate fast, and embrace change to deliver the best results.",
        style: {
            transform: "rotate(-3deg) skewY(-2deg)",
            color: "#fff",
            letterSpacing: "-2px",
            textShadow: "4px 4px 0 rgba(225, 29, 72, 0.7), 8px 8px 0 rgba(0,0,0,0.1)"
        },
    },
    {
        word: "Innovative",
        desc: "We push boundaries, experiment boldly, and create unique digital experiences.",
        style: {
            transform: "scaleY(1.1) skewX(4deg)",
            color: "#fff",
            letterSpacing: "-1px",
            textShadow: "4px 4px 0 rgba(225, 29, 72, 0.7), 8px 8px 0 rgba(0,0,0,0.1)"
        },
    },
    {
        word: "Cultural",
        desc: "We celebrate diversity, foster collaboration, and build products with soul.",
        style: {
            transform: "rotate(2deg) skewY(3deg)",
            color: "#fff",
            letterSpacing: "-3px",
            textShadow: "4px 4px 0 rgba(225, 29, 72, 0.7), 8px 8px 0 rgba(0,0,0,0.1)"
        },
    },
];

export default function Visions() {
    return (
        <section className="py-16 md:py-24 bg-transparent relative overflow-hidden">
            {details[2].map((item, index) => (
        <Canvas key={index} detail={item} />
      ))}
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-light text-white mb-4" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
                    Our vision is to refine digital products…
                </h2>
                <p className="text-lg text-red-100 max-w-2xl mx-auto mb-12" style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>
                    We believe in shaping digital experiences that are not only functional, but also meaningful and memorable. Our core values guide every project, every pixel, and every interaction.
                </p>
                
                <div className="space-y-16 md:space-y-24">
                    {values.map((v, i) => (
                        <div
                            key={v.word}
                            className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-center gap-6 md:gap-12`}
                        >
                            {/* Value Word */}
                            <div className="relative">
                                <span
                                    className="text-6xl md:text-7xl lg:text-8xl font-black inline-block transition-transform duration-300 hover:scale-105"
                                    style={v.style}
                                >
                                    {v.word}
                                </span>
                                
                                {/* Decorative elements */}
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-400 rounded-full opacity-70"></div>
                                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-red-300 rounded-full opacity-80"></div>
                            </div>
                            
                            {/* Description */}
                            <div className={`max-w-xs ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                <p className="text-base text-red-100 leading-relaxed" style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>
                                    {v.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Call to Action */}
                <div className="mt-16 pt-12 border-t border-red-700/40">
                    <p className="text-red-200 mb-6" style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>
                        Ready to create something extraordinary together?
                    </p>
                    <button className="px-8 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-300">
                        Start a Project
                    </button>
                </div>
            </div>
        </section>
    );
}