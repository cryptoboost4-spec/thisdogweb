import React from 'react';
import { Icon } from './common/Icon';
import { TRUST_BADGES_DATA } from '../constants';

const TrustBadges: React.FC = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10 sm:mb-14">
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-text-primary mb-3">
                        Why Girls <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Love</span> Besties
                    </h3>
                    <p className="text-base sm:text-lg text-text-secondary font-semibold max-w-2xl mx-auto">
                        Safety shouldn't cost money, track you, or be complicated. We built it the right way.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {TRUST_BADGES_DATA.map((badge, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-2xl p-7 sm:p-9 text-center group hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-3 border-2 border-gradient-to-br border-primary/10 hover:border-primary/30 relative overflow-hidden"
                        >
                            {/* Gradient glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="flex items-center justify-center mb-5 sm:mb-6">
                                    <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-soft group-hover:scale-110 group-hover:shadow-glow-pink transition-all duration-300">
                                        <Icon name={badge.icon} className="text-white text-4xl sm:text-5xl" />
                                    </div>
                                </div>

                                {/* Title */}
                                <h4 className="font-display text-xl sm:text-2xl text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
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
