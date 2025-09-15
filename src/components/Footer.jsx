import React from "react";

const footerLinks = [
    { name: "Home", href: "#" },
    { name: "Work", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
];

export default function Footer() {
    return (
        <footer className="w-full bg-dark border-t border-red-800/30 pt-12">
            {/* Upper Footer CTA */}
            <div className="max-w-4xl mx-auto px-6 pb-10 text-center">
                <h3 className="text-2xl md:text-3xl font-light text-white mb-4" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
                    Past? Looking for something spicy?
                </h3>
                <p className="text-lg text-red-100 mb-6 max-w-2xl mx-auto" style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>
                    Let's create something extraordinary together. Book a meeting and let's talk ideas!
                </p>
                <button className="px-8 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-300">
                    BOOK A MEETING
                </button>
            </div>

            {/* Lower Footer */}
            <div className="flex flex-wrap justify-between items-center border-t border-red-700/40 py-8 px-6 max-w-6xl mx-auto">
                {/* Left: Contact Info */}
                <div className="text-red-200 text-sm mb-4 md:mb-0 min-w-[180px]">
                    <div>codebyimran@gmail.com</div>
                    <div>+92 3703027584</div>
                </div>

                {/* Center: Navigation */}
                <nav className="flex flex-wrap justify-center flex-1 my-4 md:my-0">
                    {footerLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-red-200 no-underline text-sm uppercase font-normal tracking-wider mx-3 md:mx-4 opacity-80 hover:opacity-100 transition-opacity duration-200"
                            style={{textShadow: '0 1px 1px rgba(0,0,0,0.3)'}}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Right: Logo/Brand */}
                <div className="text-red-200 font-medium tracking-wide min-w-[180px] text-right text-sm md:text-base" style={{textShadow: '0 1px 1px rgba(0,0,0,0.3)'}}>
                    codebyimran
                </div>
            </div>
        </footer>
    );
}

