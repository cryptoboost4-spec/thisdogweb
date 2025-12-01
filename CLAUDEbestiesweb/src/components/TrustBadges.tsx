import React from 'react';
import { Icon } from './common/Icon';
import { TRUST_BADGES_DATA } from '../constants';

const TrustBadges: React.FC = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-b from-transparent via-secondary/10 to-transparent relative overflow-hidden">
            {/* Enhanced background effects */}
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-primary/10 to-transparent blur-3xl pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-secondary/10 to-transparent blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-10 sm:mb-14 animate-fade-in">
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-text-primary mb-3">
                        Why Girls <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient-shift drop-shadow-[0_0_20px_rgba(255,105,180,0.4)]">Love</span> Besties ✨
                    </h3>
                    <p className="text-base sm:text-lg text-text-secondary font-bold max-w-2xl mx-auto">
                        Safety shouldn't cost money, track you, or be complicated. We built it the right way. 💕
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {TRUST_BADGES_DATA.map((badge, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-sm rounded-3xl p-7 sm:p-9 text-center group hover:shadow-mega-glow transition-all duration-500 hover:-translate-y-4 hover:scale-105 border-2 border-gradient-to-br border-primary/20 hover:border-primary/40 relative overflow-hidden gradient-shimmer"
                        >
                            {/* Enhanced gradient glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                {/* Icon - Enhanced with multiple effects */}
                                <div className="flex items-center justify-center mb-5 sm:mb-6">
                                    <div className="relative">
                                        <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-gradient-to-br from-primary via-secondary to-primary bg-size-200 animate-gradient-shift flex items-center justify-center shadow-soft group-hover:scale-125 group-hover:shadow-mega-glow group-hover:rotate-12 transition-all duration-500">
                                            <Icon name={badge.icon} className="text-white text-4xl sm:text-5xl group-hover:animate-bounce-gentle" />
                                        </div>
                                        {/* Pulsing ring effect on hover */}
                                        <div className="absolute inset-0 rounded-full border-4 border-primary/30 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500" />
                                    </div>
                                </div>

                                {/* Title */}
                                <h4 className="font-display text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-primary group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                                    {badge.title}
                                </h4>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-text-secondary font-medium leading-relaxed">
                                    {badge.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;
