import React from "react";
import Canvas from "./Canvas";
import details from '../utili/data.js'
const Missions = () => {
    return (
        <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-transparent relative overflow-hidden">
       {details[1].map((item, index) => (
        <Canvas key={index} detail={item} />
      ))}
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light text-white mb-4" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
                        Our Mission & Approach
                    </h2>
                    <div className="w-20 h-0.5 bg-red-300 mx-auto"></div>
                </div>
                
                {/* Content */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between items-start">
                    {/* Left Column */}
                    <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-semibold m-0 text-white" style={{textShadow: '0 2px 4px rgba(0,0,0,0.4)'}}>
                            We aim to listen in detail…
                        </h2>
                        <p className="text-lg text-red-100 mt-6 leading-relaxed max-w-lg" style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>
                            Our mission is to understand every nuance of your vision, ensuring that every project reflects your unique goals and values. We believe in open communication and thoughtful collaboration at every step.
                        </p>
                    </div>
                    
                    {/* Right Column */}
                    <div className="flex-1 text-base text-red-100 leading-relaxed max-w-lg" style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>
                        <p className="mb-6">
                            From initial consultation to final delivery, our team is dedicated to providing clarity, transparency, and creative solutions. We value your input and strive to exceed expectations through attentive service and expert craftsmanship.
                        </p>
                        
                        {/* Additional mission points */}
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-3">
                                    <svg className="w-5 h-5 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p className="text-red-100" style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>Deep understanding of client needs</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-3">
                                    <svg className="w-5 h-5 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p className="text-red-100" style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>Transparent processes and communication</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-3">
                                    <svg className="w-5 h-5 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p className="text-red-100" style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>Creative solutions tailored to your brand</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-red-700/50">
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-light text-white mb-2" style={{textShadow: '0 2px 4px rgba(0,0,0,0.4)'}}>36+</div>
                        <div className="text-red-200" style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>Projects Completed</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-light text-white mb-2" style={{textShadow: '0 2px 4px rgba(0,0,0,0.4)'}}>18+</div>
                        <div className="text-red-200" style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>Happy Clients</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-light text-white mb-2" style={{textShadow: '0 2px 4px rgba(0,0,0,0.4)'}}>5+</div>
                        <div className="text-red-200" style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>Years Experience</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Missions;