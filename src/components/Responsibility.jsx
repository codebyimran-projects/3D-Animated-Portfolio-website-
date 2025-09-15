import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSeedling, 
  faGlobe, 
  faHandshake,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

const Responsibility = () => (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-transparent">
        <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-light text-white mb-4" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
                    Our Responsibility
                </h2>
                <p className="text-lg text-red-100 max-w-2xl mx-auto" style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>
                    Committed to ethical practices and sustainable creation
                </p>
                <div className="w-20 h-0.5 bg-red-300 mx-auto mt-6"></div>
            </div>
            
            {/* Main Content */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 md:p-10 border border-red-800/30">
                <div className="mb-10">
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6" style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>
                        At Thirtysixstudio, we recognize our responsibility to create with care for people and planet.
                    </h3>
                    <p className="text-lg text-red-100 leading-relaxed mb-6" style={{textShadow: '0 1px 1px rgba(0,0,0,0.2)'}}>
                        Sustainability is woven into every project we undertake. We prioritize ethical sourcing, energy-efficient processes, and mindful design choices to minimize our environmental impact.
                    </p>
                    <p className="text-lg text-red-100 leading-relaxed" style={{textShadow: '0 1px 1px rgba(0,0,0,0.2)'}}>
                        Our commitment extends to fostering inclusive, equitable workplaces and supporting communities through thoughtful collaboration and transparency.
                    </p>
                </div>
                
                {/* Responsibility Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-red-700/40">
                    <div className="text-center p-6 rounded-lg bg-red-900/20 hover:bg-red-900/30 transition-colors duration-300">
                        <div className="text-3xl mb-4 text-red-300">
                            <FontAwesomeIcon icon={faSeedling} />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-3" style={{textShadow: '0 1px 1px rgba(0,0,0,0.3)'}}>Ethics</h3>
                        <div className="space-y-2">
                            <p className="text-sm text-red-100" style={{textShadow: '0 1px 1px rgba(0,0,0,0.2)'}}>Responsible sourcing</p>
                            <p className="text-sm text-red-100" style={{textShadow: '0 1px 1px rgba(0,0,0,0.2)'}}>Fair labor practices</p>
                            <p className="text-sm text-red-100" style={{textShadow: '0 1px 1px rgba(0,0,0,0.2)'}}>Transparent operations</p>
                        </div>
                    </div>
                    
                    <div className="text-center p-6 rounded-lg bg-red-900/20 hover:bg-red-900/30 transition-colors duration-300">
                        <div className="text-3xl mb-4 text-red-300">
                            <FontAwesomeIcon icon={faGlobe} />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-3" style={{textShadow: '0 1px 1px rgba(0,0,0,0.3)'}}>Environment</h3>
                        <div className="space-y-2">
                            <p className="text-sm text-red-100" style={{textShadow: '0 1px 1px rgba(0,0,0,0.2)'}}>Low-impact materials</p>
                            <p className="text-sm text-red-100" style={{textShadow: '0 1px 1px rgba(0,0,0,0.2)'}}>Energy efficiency</p>
                            <p className="text-sm text-red-100" style={{textShadow: '0 1px 1px rgba(0,0,0,0.2)'}}>Sustainable processes</p>
                        </div>
                    </div>
                    
                    <div className="text-center p-6 rounded-lg bg-red-900/20 hover:bg-red-900/30 transition-colors duration-300">
                        <div className="text-3xl mb-4 text-red-300">
                            <FontAwesomeIcon icon={faHandshake} />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-3" style={{textShadow: '0 1px 1px rgba(0,0,0,0.3)'}}>Community</h3>
                        <div className="space-y-2">
                            <p className="text-sm text-red-100" style={{textShadow: '0 1px 1px rgba(0,0,0,0.2)'}}>Inclusive culture</p>
                            <p className="text-sm text-red-100" style={{textShadow: '0 1px 1px rgba(0,0,0,0.2)'}}>Local partnerships</p>
                            <p className="text-sm text-red-100" style={{textShadow: '0 1px 1px rgba(0,0,0,0.2)'}}>Social impact</p>
                        </div>
                    </div>
                </div>
                
                {/* Call to Action */}
                <div className="text-center mt-12 pt-8 border-t border-red-700/40">
                    <p className="text-red-200 mb-6" style={{textShadow: '0 1px 1px rgba(0,0,0,0.3)'}}>
                        Interested in our responsible approach?
                    </p>
                    <button className="px-8 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-300 flex items-center justify-center mx-auto">
                        <span>Learn More</span>
                        <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-2" />
                    </button>
                </div>
            </div>
        </div>
    </section>
);

export default Responsibility;