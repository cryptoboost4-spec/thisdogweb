import React from 'react';
import { Icon } from './common/Icon';
import { PRICING_DATA } from '../constants';

const Pricing: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 md:py-24 px-4 relative overflow-hidden">
            {/* Enhanced background gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-secondary/15 to-transparent blur-3xl pointer-events-none animate-pulse-slow" />

            {/* Floating decorative elements */}
            <div className="hidden lg:block floating-emoji" style={{ top: '15%', left: '10%', animationDelay: '0s' }}>💰</div>
            <div className="hidden lg:block floating-emoji" style={{ top: '20%', right: '12%', animationDelay: '1.5s' }}>💎</div>

            <div className="relative z-10">
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-center mb-3 sm:mb-4 animate-fade-in">
                    Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient-shift drop-shadow-[0_0_25px_rgba(255,105,180,0.4)]">Pricing</span> ✨
                </h3>
                <p className="text-center text-lg sm:text-xl text-text-secondary font-bold mb-8 sm:mb-12 px-4 animate-fade-in-delay">
                    Start free, upgrade when you're ready 💕
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
                    {PRICING_DATA.map(tier => (
                        <div
                            key={tier.title}
                            className={`relative rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-mega-glow backdrop-blur-sm border-2 transition-all duration-500 hover:-translate-y-4 hover:scale-105 group overflow-hidden gradient-shimmer ${
                                tier.highlight
                                    ? 'bg-gradient-to-br from-primary/15 via-secondary/15 to-accent/15 border-primary/40 shadow-glow-pink'
                                    : 'bg-gradient-to-br from-white/95 to-white/80 border-accent/30'
                            }`}
                        >
                            {/* Enhanced gradient glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-primary/20 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
                            {tier.highlight && <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2 bg-gradient-to-r from-transparent via-primary to-transparent" />}

                            <div className="relative z-10">
                                <h4 className={`font-display text-2xl sm:text-3xl ${tier.highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient-shift drop-shadow-[0_0_20px_rgba(255,105,180,0.4)]' : 'text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-primary group-hover:from-primary group-hover:to-secondary'} transition-all duration-300`}>
                                    {tier.title}
                                </h4>
                                <p className="text-sm sm:text-base text-text-secondary font-bold mt-2">{tier.subtitle}</p>
                                <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                                    {tier.features.map(feature => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <div className="relative">
                                                <Icon
                                                    name={tier.icon}
                                                    className={`${tier.highlight ? 'text-primary' : 'text-success'} text-xl sm:text-2xl flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}
                                                />
                                                {tier.highlight && <div className="absolute inset-0 bg-primary/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />}
                                            </div>
                                            <span className="text-sm sm:text-base text-text-primary font-semibold">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-text-secondary font-bold">{tier.footer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;