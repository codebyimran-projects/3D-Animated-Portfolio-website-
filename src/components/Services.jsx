import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCube, 
  faFilm, 
  faCity, 
  faPrint, 
  faVrCardboard, 
  faGamepad,
  faArrowRight,
  faBolt
} from '@fortawesome/free-solid-svg-icons';
import Canvas from "./Canvas";
import details from '../utili/data.js'

const services = [
    {
        title: "3D Modeling",
        description: "Creating detailed 3D models for products, characters, and environments with precision and artistic vision.",
        icon: faCube
    },
    {
        title: "3D Animation",
        description: "Bringing models to life with fluid, realistic animations for films, games, and presentations.",
        icon: faFilm
    },
    {
        title: "3D Visualization",
        description: "Photorealistic renderings of architectural spaces, products, and concepts for clients and stakeholders.",
        icon: faCity
    },
    {
        title: "3D Printing",
        description: "Turning digital models into physical objects with high-quality 3D printing services.",
        icon: faPrint
    },
    {
        title: "VR/AR Experiences",
        description: "Creating immersive virtual and augmented reality experiences for training, marketing, and entertainment.",
        icon: faVrCardboard
    },
    {
        title: "3D Asset Creation",
        description: "Designing optimized 3D assets for games, simulations, and interactive applications.",
        icon: faGamepad
    },
];

const Services = () => {
    const [activeService, setActiveService] = useState(0);

    return (
        <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-transparent relative overflow-hidden">
               {details[3].map((item, index) => (
                    <Canvas key={index} detail={item} />
                  ))}
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light text-white mb-4" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
                        3D Design Services
                    </h2>
                    <p className="text-lg text-red-100 max-w-2xl mx-auto" style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>
                        Transforming ideas into dimensional reality with cutting-edge 3D expertise
                    </p>
                    <div className="w-20 h-0.5 bg-red-300 mx-auto mt-6"></div>
                </div>
                
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className={`relative p-6 rounded-xl border transition-all duration-500 cursor-pointer group overflow-hidden ${
                                activeService === index 
                                    ? 'bg-red-600/20 border-red-500/50 shadow-lg transform scale-105' 
                                    : 'bg-red-900/10 border-red-800/30 hover:bg-red-700/20'
                            }`}
                            onClick={() => setActiveService(index)}
                            style={{backdropFilter: 'blur(10px)'}}
                        >
                            {/* Animated background element */}
                            <div className={`absolute -inset-1 bg-gradient-to-br from-red-500/10 to-red-900/10 rounded-xl transition-all duration-500 ${
                                activeService === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                            }`}></div>
                            
                            {/* Icon */}
                            <div className={`mb-4 relative z-10 transition-all duration-500 ${
                                activeService === index ? 'scale-110' : 'group-hover:scale-105'
                            }`}>
                                <FontAwesomeIcon 
                                    icon={service.icon} 
                                    className={`text-3xl ${activeService === index ? 'text-red-300' : 'text-red-400'}`}
                                />
                            </div>
                            
                            {/* Title */}
                            <h3 className={`text-xl font-semibold mb-3 relative z-10 transition-all duration-300 ${
                                activeService === index ? 'text-white' : 'text-red-100'
                            }`} style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>
                                {service.title}
                            </h3>
                            
                            {/* Description */}
                            <p className={`text-red-100 relative z-10 transition-all duration-300 ${
                                activeService === index ? 'opacity-100' : 'opacity-80'
                            }`} style={{textShadow: '0 1px 1px rgba(0,0,0,0.2)'}}>
                                {service.description}
                            </p>
                            
                            {/* Hover/Active Indicator */}
                            <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-400 to-red-600 transition-all duration-500 ${
                                activeService === index ? 'w-full' : 'w-0 group-hover:w-full'
                            }`}></div>
                        </div>
                    ))}
                </div>
                
                {/* Featured Service Detail */}
                <div className="bg-red-900/20 backdrop-blur-sm rounded-xl p-8 border border-red-800/30 transform transition-all duration-500 hover:scale-[1.02]">
                    <div className="flex flex-col md:flex-row items-start">
                        <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                            <FontAwesomeIcon 
                                icon={services[activeService].icon} 
                                className="text-5xl text-red-300"
                            />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-semibold text-white mb-4" style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>
                                {services[activeService].title}
                            </h3>
                            <p className="text-lg text-red-100 leading-relaxed mb-6" style={{textShadow: '0 1px 1px rgba(0,0,0,0.2)'}}>
                                {services[activeService].description}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-6 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-300 flex items-center">
                                    <span>View Portfolio</span>
                                    <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-2" />
                                </button>
                                <button className="px-6 py-2 bg-transparent border border-red-500 text-red-100 rounded-lg font-medium hover:bg-red-500/20 transition-colors duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Call to Action */}
                <div className="text-center mt-16">
                    <h3 className="text-2xl font-light text-white mb-6" style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>
                        Ready to bring your vision to life in 3D?
                    </h3>
                    <button className="px-8 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-300 transform hover:scale-105 flex items-center mx-auto">
                        <span>Start a 3D Project</span>
                        <FontAwesomeIcon icon={faBolt} className="w-5 h-5 ml-2" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;