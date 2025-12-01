import React from 'react';
import { USE_CASES_DATA } from '../constants';

const UseCases: React.FC = () => {
    return (
        <section className="py-16 sm:py-20 md:py-28 px-4 bg-gradient-to-b from-transparent via-primary/10 to-transparent relative overflow-hidden">
            {/* Enhanced background effects */}
            <div className="absolute top-1/2 left-1/3 w-[700px] h-[700px] bg-gradient-radial from-secondary/10 to-transparent blur-3xl pointer-events-none animate-pulse-slow" />

            {/* Floating decorative elements */}
            <div className="hidden lg:block floating-emoji" style={{ top: '12%', right: '10%', animationDelay: '0s' }}>🌙</div>
            <div className="hidden lg:block floating-emoji" style={{ bottom: '20%', left: '8%', animationDelay: '1.5s' }}>🚗</div>

            <div className="max-w-6xl mx-auto relative z-10">
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-center mb-4 sm:mb-5 animate-fade-in">
                    When You Need Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient-shift drop-shadow-[0_0_20px_rgba(255,105,180,0.4)]">Besties</span> ✨
                </h3>
                <p className="text-center text-lg sm:text-xl text-text-secondary font-bold mb-12 sm:mb-16 px-4 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
                    Life happens. Whether it's a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">first date</span>, a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">night out</span>, or just <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">walking home</span> — your besties have got your back. 💕
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {USE_CASES_DATA.map((useCase, index) => {
                        const colors = [
                            { bg: 'from-blue-50 to-indigo-50', border: 'border-blue-200', iconBg: 'from-blue-100 to-indigo-100' },
                            { bg: 'from-rose-50 to-pink-50', border: 'border-rose-200', iconBg: 'from-rose-100 to-pink-100' },
                            { bg: 'from-purple-50 to-fuchsia-50', border: 'border-purple-200', iconBg: 'from-purple-100 to-fuchsia-100' },
                            { bg: 'from-amber-50 to-orange-50', border: 'border-amber-200', iconBg: 'from-amber-100 to-orange-100' }
                        ];
                        const color = colors[index % colors.length];

                        return (
                        <div
                            key={index}
                            className={`relative bg-gradient-to-br ${color.bg} rounded-xl p-6 sm:p-7 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border ${color.border} group`}
                        >
                            <div className="relative z-10">
                                {/* Emoji header */}
                                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${color.iconBg} flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-sm`}>
                                        <span className="text-3xl sm:text-4xl">{useCase.emoji}</span>
                                    </div>
                                    <h4 className="font-display text-lg sm:text-xl text-gray-900 flex-1">
                                        {useCase.title}
                                    </h4>
                                </div>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-gray-700 font-medium mb-4 leading-relaxed">
                                    {useCase.description}
                                </p>

                                {/* Examples */}
                                <ul className="space-y-2">
                                    {useCase.examples.map((example, exampleIndex) => (
                                        <li key={exampleIndex} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-primary to-secondary mt-1.5 flex-shrink-0"></div>
                                            <span className="text-xs sm:text-sm text-gray-700 font-medium leading-snug">
                                                {example}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
