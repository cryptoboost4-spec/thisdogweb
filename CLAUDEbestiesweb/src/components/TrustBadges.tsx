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
                    {TRUST_BADGES_DATA.map((badge, index) => {
                        const colors = [
                            { bg: 'from-pink-100 to-purple-100', border: 'border-pink-200', iconBg: 'from-pink-400 to-pink-600' },
                            { bg: 'from-purple-100 to-fuchsia-100', border: 'border-purple-200', iconBg: 'from-purple-400 to-purple-600' },
                            { bg: 'from-fuchsia-100 to-pink-100', border: 'border-fuchsia-200', iconBg: 'from-fuchsia-400 to-fuchsia-600' }
                        ];
                        const color = colors[index % colors.length];

                        return (
                        <div
                            key={index}
                            className={`bg-gradient-to-br ${color.bg} rounded-xl p-6 sm:p-7 text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border ${color.border} relative overflow-hidden`}
                        >
                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="flex items-center justify-center mb-4">
                                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${color.iconBg} flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300`}>
                                        <Icon name={badge.icon} className="text-white text-3xl sm:text-4xl" />
                                    </div>
                                </div>

                                {/* Title */}
                                <h4 className="font-display text-lg sm:text-xl text-gray-900 mb-2">
                                    {badge.title}
                                </h4>

                                {/* Description */}
                                <p className="text-xs sm:text-sm text-gray-700 leading-snug">
                                    {badge.description}
                                </p>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;
