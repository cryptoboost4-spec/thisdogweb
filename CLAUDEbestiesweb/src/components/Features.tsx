import React from 'react';
import { Icon } from './common/Icon';
import { FEATURES_DATA } from '../constants';
import type { Feature } from '../types';

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
    <div className="relative bg-gradient-to-br from-white/95 to-white/80 rounded-3xl p-5 sm:p-6 shadow-soft hover:shadow-mega-glow backdrop-blur-sm transition-all duration-500 hover:-translate-y-4 hover:scale-105 border-2 border-accent/30 hover:border-primary/50 h-full group overflow-hidden gradient-shimmer">
        {/* Enhanced gradient glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-secondary/15 to-transparent blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

        <div className="relative z-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 text-primary shadow-soft group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-glow-pink transition-all duration-500">
                    <Icon name={feature.icon} className="text-2xl sm:text-3xl group-hover:animate-bounce-gentle" />
                    {/* Pulsing ring on hover */}
                    <div className="absolute inset-0 rounded-full border-2 border-primary/40 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500" />
                </div>
                <h4 className="font-display text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-primary group-hover:from-primary group-hover:to-secondary transition-all duration-300">{feature.title}</h4>
            </div>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-text-secondary font-semibold leading-relaxed">{feature.description}</p>
        </div>
    </div>
);

const Features: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 md:py-24 px-4 relative overflow-hidden">
            {/* Enhanced background effects */}
            <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-primary/8 to-transparent blur-3xl pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-secondary/8 to-transparent blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />

            {/* Floating decorative elements */}
            <div className="hidden lg:block floating-emoji" style={{ top: '10%', right: '8%', animationDelay: '0s' }}>⚡</div>
            <div className="hidden lg:block floating-emoji" style={{ top: '40%', left: '5%', animationDelay: '1s' }}>🛡️</div>
            <div className="hidden lg:block floating-emoji" style={{ bottom: '20%', right: '10%', animationDelay: '2s' }}>✨</div>

            <div className="relative z-10">
                {FEATURES_DATA.map((category, index) => (
                    <div key={category.title} className={index > 0 ? "mt-12 sm:mt-16" : ""}>
                        <h3 className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 font-display text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12 px-4 animate-fade-in">
                           <span className="text-3xl sm:text-4xl animate-bounce-gentle">{category.emoji}</span>
                           <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient-shift drop-shadow-[0_0_20px_rgba(255,105,180,0.3)]">{category.title}</span>
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                            {category.items.map(feature => (
                                <FeatureCard key={feature.title} feature={feature} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;