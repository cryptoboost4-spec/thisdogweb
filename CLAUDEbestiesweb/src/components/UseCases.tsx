import React from 'react';
import { USE_CASES_DATA } from '../constants';

const UseCases: React.FC = () => {
    return (
        <section className="py-16 sm:py-20 md:py-28 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
            <div className="max-w-6xl mx-auto">
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-center text-text-primary mb-4 sm:mb-5">
                    When You Need Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Besties</span>
                </h3>
                <p className="text-center text-lg sm:text-xl text-text-secondary font-semibold mb-12 sm:mb-16 px-4 max-w-3xl mx-auto leading-relaxed">
                    Life happens. Whether it's a <span className="text-primary font-bold">first date</span>, a <span className="text-primary font-bold">night out</span>, or just <span className="text-primary font-bold">walking home</span> — your besties have got your back. 💕
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {USE_CASES_DATA.map((useCase, index) => (
                        <div
                            key={index}
                            className="relative bg-surface-light rounded-2xl p-7 sm:p-9 shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-2 border-2 border-accent/20 group overflow-hidden"
                        >
                            {/* Gradient glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            <div className="relative z-10">
                                {/* Emoji header */}
                                <div className="flex items-center gap-4 sm:gap-5 mb-5 sm:mb-6">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-4xl sm:text-5xl">{useCase.emoji}</span>
                                    </div>
                                    <h4 className="font-display text-xl sm:text-2xl text-text-primary flex-1 group-hover:text-primary transition-colors duration-300">
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
