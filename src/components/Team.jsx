import React from "react";

const Team = () => {
    return (
        <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-transparent">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light text-white mb-4" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
                        Our Team
                    </h2>
                    <p className="text-lg text-red-100 max-w-2xl mx-auto" style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>
                        Talented collaborations creating exceptional work
                    </p>
                    <div className="w-20 h-0.5 bg-red-300 mx-auto mt-6"></div>
                </div>
                
                {/* Main Content */}
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 md:p-10 border border-red-800/30">
                    <div className="mb-10">
                        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6" style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>
                            Thirtysixstudio is creating talented collaborations.
                        </h3>
                        <p className="text-lg text-red-100 leading-relaxed" style={{textShadow: '0 1px 1px rgba(0,0,0,0.2)'}}>
                            We bring together creative minds to build exceptional work. Join us and be part of a team that values collaboration and innovation.
                        </p>
                    </div>
                    
                    {/* Team Pillars */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-red-700/40">
                        <div className="text-center p-6 rounded-lg bg-red-900/20 hover:bg-red-900/30 transition-colors duration-300">
                            <div className="text-3xl mb-4 text-red-300">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-3" style={{textShadow: '0 1px 1px rgba(0,0,0,0.3)'}}>Creativity</h3>
                            <div className="space-y-2">
                                <p className="text-sm text-red-100" style={{textShadow: '0 1px 1px rgba(0,0,0,0.2)'}}>Innovative thinking</p>
                                <p className="text-sm text-red-100" style={{textShadow: '0 1px 1px rgba(0,0,0,0.2)'}}>Artistic expression</p>
                                <p className="text-sm text-red-100" style={{textShadow: '0 1px 1px rgba(0,0,0,0.2)'}}>Original concepts</p>
                            </div>
                        </div>
                        
                        <div className="text-center p-6 rounded-lg bg-red-900/20 hover:bg-red-900/30 transition-colors duration-300">
                            <div className="text-3xl mb-4 text-red-300">
                                <i className="fas fa-users"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-3" style={{textShadow: '0 1px 1px rgba(0,0,0,0.3)'}}>Collaboration</h3>
                            <div className="space-y-2">
                                <p className="text-sm text-red-100" style={{textShadow: '0 1px 1px rgba(0,0,0,0.2)'}}>Team synergy</p>
                                <p className="text-sm text-red-100" style={{textShadow: '0 1px 1px rgba(0,0,0,0.2)'}}>Shared vision</p>
                                <p className="text-sm text-red-100" style={{textShadow: '0 1px 1px rgba(0,0,0,0.2)'}}>Collective growth</p>
                            </div>
                        </div>
                        
                        <div className="text-center p-6 rounded-lg bg-red-900/20 hover:bg-red-900/30 transition-colors duration-300">
                            <div className="text-3xl mb-4 text-red-300">
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-3" style={{textShadow: '0 1px 1px rgba(0,0,0,0.3)'}}>Expertise</h3>
                            <div className="space-y-2">
                                <p className="text-sm text-red-100" style={{textShadow: '0 1px 1px rgba(0,0,0,0.2)'}}>Specialized skills</p>
                                <p className="text-sm text-red-100" style={{textShadow: '0 1px 1px rgba(0,0,0,0.2)'}}>Technical mastery</p>
                                <p className="text-sm text-red-100" style={{textShadow: '0 1px 1px rgba(0,0,0,0.2)'}}>Industry knowledge</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Call to Action */}
                    <div className="text-center mt-12 pt-8 border-t border-red-700/40">
                        <p className="text-red-200 mb-6" style={{textShadow: '0 1px 1px rgba(0,0,0,0.3)'}}>
                            Interested in joining our team?
                        </p>
                        <button className="px-8 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-300">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Add Font Awesome CSS */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        </section>
    );
};

export default Team;