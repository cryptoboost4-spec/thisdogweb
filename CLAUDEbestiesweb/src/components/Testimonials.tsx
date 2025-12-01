import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';

const Testimonials: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-b from-secondary/10 to-primary/10 relative overflow-hidden">
            {/* Enhanced background effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 to-transparent blur-3xl pointer-events-none animate-pulse-slow" />

            {/* Floating decorative elements */}
            <div className="hidden lg:block floating-emoji" style={{ top: '10%', left: '8%', animationDelay: '0s' }}>💬</div>
            <div className="hidden lg:block floating-emoji" style={{ bottom: '15%', right: '10%', animationDelay: '2s' }}>⭐</div>

            <div className="max-w-6xl mx-auto relative z-10">
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-center mb-3 sm:mb-4 animate-fade-in">
                    What <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient-shift drop-shadow-[0_0_20px_rgba(255,105,180,0.4)]">Besties</span> Are Saying ✨
                </h3>
                <p className="text-center text-base sm:text-lg text-text-secondary font-bold mb-8 sm:mb-12 px-4 animate-fade-in-delay">
                    Real stories from real people staying safe together 💕
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {TESTIMONIALS_DATA.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-white/95 to-white/80 rounded-3xl p-5 sm:p-6 shadow-soft hover:shadow-mega-glow transition-all duration-500 hover:-translate-y-4 hover:scale-105 border-2 border-accent/30 hover:border-primary/40 relative overflow-hidden group gradient-shimmer"
                        >
                            {/* Enhanced gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-radial from-secondary/15 to-transparent blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                            {/* Quote decoration with gradient */}
                            <div className="absolute top-2 left-3 text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-primary/20 to-secondary/20 font-display leading-none group-hover:scale-110 transition-transform duration-300">
                                "
                            </div>
                            <div className="relative z-10">
                                <p className="text-sm sm:text-base text-text-primary font-medium leading-relaxed mb-4 italic pt-4">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary via-secondary to-primary bg-size-200 animate-gradient-shift flex items-center justify-center text-white font-display text-sm sm:text-base shadow-soft group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-glow-pink transition-all duration-500">
                                        {testimonial.author.charAt(0)}
                                        <div className="absolute inset-0 rounded-full border-2 border-primary/30 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500" />
                                    </div>
                                    <p className="font-display text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                        {testimonial.author}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;