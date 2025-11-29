import React from 'react';
import { Icon } from './common/Icon';
import { TRUST_BADGES_DATA } from '../constants';

const TrustBadges: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
                    {TRUST_BADGES_DATA.map((badge, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 sm:p-8 text-center group hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-2 border-2 border-accent/20"
                        >
                            {/* Icon */}
                            <div className="flex items-center justify-center mb-4 sm:mb-5">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-soft group-hover:scale-110 group-hover:shadow-glow-pink transition-all duration-300">
                                    <Icon name={badge.icon} className="text-white text-4xl sm:text-5xl" />
                                </div>
                            </div>

                            {/* Title */}
                            <h4 className="font-display text-xl sm:text-2xl text-text-primary mb-3">
                                {badge.title}
                            </h4>

                            {/* Description */}
                            <p className="text-sm sm:text-base text-text-secondary font-medium leading-relaxed">
                                {badge.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;
