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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
                    {PRICING_DATA.map(tier => (
                        <div
                            key={tier.title}
                            className={`relative rounded-xl p-6 sm:p-7 hover:shadow-lg backdrop-blur-sm border-2 transition-all duration-300 hover:-translate-y-2 group ${
                                tier.highlight
                                    ? 'bg-gradient-to-br from-purple-50 to-fuchsia-50 border-purple-300 shadow-md'
                                    : 'bg-white border-gray-200'
                            }`}
                        >
                            <div className="relative z-10">
                                <h4 className={`font-display text-xl sm:text-2xl ${tier.highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary' : 'text-gray-900'}`}>
                                    {tier.title}
                                </h4>
                                <p className="text-xs sm:text-sm text-gray-600 font-semibold mt-2">{tier.subtitle}</p>
                                <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
                                    {tier.features.map(feature => (
                                        <li key={feature} className="flex items-start gap-2.5">
                                            <Icon
                                                name={tier.icon}
                                                className={`${tier.highlight ? 'text-primary' : 'text-success'} text-lg sm:text-xl flex-shrink-0 mt-0.5`}
                                            />
                                            <span className="text-xs sm:text-sm text-gray-800 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-5 sm:mt-6 text-xs text-gray-600 font-bold">{tier.footer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;