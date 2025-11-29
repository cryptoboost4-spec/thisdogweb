import React from 'react';
import { Icon } from './common/Icon';
import { TRUST_BADGES_DATA } from '../constants';

const TrustBadges: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {TRUST_BADGES_DATA.map((badge, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-5 sm:p-6 text-center group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-2 border-accent/10"
                        >
                            {/* Icon */}
                            <div className="flex items-center justify-center mb-3 sm:mb-4">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-200">
                                    <Icon name={badge.icon} className="text-white text-3xl sm:text-4xl" />
                                </div>
                            </div>

                            {/* Title */}
                            <h4 className="font-display text-lg sm:text-xl text-text-primary mb-2">
                                {badge.title}
                            </h4>

                            {/* Description */}
                            <p className="text-xs sm:text-sm text-text-secondary font-medium leading-relaxed">
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
