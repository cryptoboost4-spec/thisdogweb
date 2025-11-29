import React from 'react';
import { USE_CASES_DATA } from '../constants';

const UseCases: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 md:py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-center text-text-primary mb-3 sm:mb-4">
                    When You Need Your Besties
                </h3>
                <p className="text-center text-base sm:text-lg text-text-secondary font-semibold mb-10 sm:mb-16 px-4 max-w-2xl mx-auto">
                    Life happens. Whether it's a first date, a night out, or just walking home — your besties have got your back.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {USE_CASES_DATA.map((useCase, index) => (
                        <div
                            key={index}
                            className="bg-surface-light rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-2 border-2 border-white group"
                        >
                            {/* Emoji header */}
                            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                                <div className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-200">
                                    {useCase.emoji}
                                </div>
                                <h4 className="font-display text-xl sm:text-2xl text-text-primary flex-1">
                                    {useCase.title}
                                </h4>
                            </div>

                            {/* Description */}
                            <p className="text-sm sm:text-base text-text-secondary font-semibold mb-4 sm:mb-5">
                                {useCase.description}
                            </p>

                            {/* Examples */}
                            <ul className="space-y-2 sm:space-y-3">
                                {useCase.examples.map((example, exampleIndex) => (
                                    <li key={exampleIndex} className="flex items-start gap-2 sm:gap-3">
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-br from-primary to-secondary mt-2 flex-shrink-0"></div>
                                        <span className="text-sm sm:text-base text-text-primary font-medium">
                                            {example}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
