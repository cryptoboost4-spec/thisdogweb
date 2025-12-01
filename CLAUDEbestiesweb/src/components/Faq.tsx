import React from 'react';
import { FAQ_DATA } from '../constants';

const Faq: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 md:py-24 px-4 relative overflow-hidden">
            {/* Enhanced background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
            <div className="absolute top-1/2 right-1/3 w-[600px] h-[600px] bg-gradient-radial from-secondary/10 to-transparent blur-3xl pointer-events-none animate-pulse-slow" />

            {/* Floating decorative elements */}
            <div className="hidden lg:block floating-emoji" style={{ top: '15%', left: '8%', animationDelay: '0s' }}>❓</div>
            <div className="hidden lg:block floating-emoji" style={{ bottom: '20%', right: '10%', animationDelay: '2s' }}>💡</div>

            <div className="relative z-10">
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 animate-fade-in">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient-shift drop-shadow-[0_0_25px_rgba(255,105,180,0.4)]">FAQ</span> ✨
                </h3>
                <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
                    {FAQ_DATA.map(item => (
                        <div
                            key={item.question}
                            className="bg-white p-4 sm:p-5 rounded-xl hover:shadow-lg backdrop-blur-sm border border-gray-200 transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <h4 className="font-display text-base sm:text-lg text-gray-900">{item.question}</h4>
                            <p className="mt-2 text-xs sm:text-sm text-gray-700 leading-snug">{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;