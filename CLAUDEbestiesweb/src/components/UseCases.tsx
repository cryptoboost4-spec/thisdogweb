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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {USE_CASES_DATA.map((useCase, index) => (
                        <div
                            key={index}
                            className="relative bg-gradient-to-br from-white/95 to-white/80 rounded-3xl p-7 sm:p-9 shadow-soft hover:shadow-mega-glow transition-all duration-500 hover:-translate-y-4 hover:scale-105 border-2 border-accent/30 hover:border-primary/40 group overflow-hidden gradient-shimmer"
                        >
                            {/* Enhanced gradient glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-primary/15 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                            <div className="relative z-10">
                                {/* Emoji header */}
                                <div className="flex items-center gap-4 sm:gap-5 mb-5 sm:mb-6">
                                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-125 group-hover:shadow-glow-pink transition-all duration-500">
                                        <span className="text-4xl sm:text-5xl group-hover:animate-bounce-gentle">{useCase.emoji}</span>
                                        <div className="absolute inset-0 rounded-full border-2 border-primary/30 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500" />
                                    </div>
                                    <h4 className="font-display text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-primary group-hover:from-primary group-hover:to-secondary flex-1 transition-all duration-300">
                                        {useCase.title}
                                    </h4>
                                </div>

                                {/* Description */}
                                <p className="text-base sm:text-lg text-text-secondary font-semibold mb-5 sm:mb-6 leading-relaxed">
                                    {useCase.description}
                                </p>

                                {/* Examples */}
                                <ul className="space-y-3">
                                    {useCase.examples.map((example, exampleIndex) => (
                                        <li key={exampleIndex} className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-gradient-to-br from-primary to-secondary mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                                            <span className="text-sm sm:text-base text-text-primary font-medium leading-relaxed">
                                                {example}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
