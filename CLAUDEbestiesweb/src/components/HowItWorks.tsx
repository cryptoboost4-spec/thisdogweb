import React from 'react';
import { HOW_IT_WORKS_DATA } from '../constants';
import type { Step } from '../types';

const StepCard: React.FC<{ step: Step; index: number }> = ({ step, index }) => (
    <div className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left bg-gradient-to-br from-white/95 to-white/80 rounded-3xl p-5 sm:p-6 shadow-soft hover:shadow-mega-glow transition-all duration-500 hover:-translate-y-3 hover:scale-105 border-2 border-accent/30 hover:border-primary/40 group overflow-hidden gradient-shimmer">
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative flex-shrink-0 font-display text-5xl sm:text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-primary via-secondary to-primary bg-size-200 animate-gradient-shift drop-shadow-[0_0_20px_rgba(255,105,180,0.4)] group-hover:scale-110 transition-transform duration-500">
            {index + 1}
        </div>
        <div className="flex-1 relative z-10">
            <h4 className="font-display text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-primary group-hover:from-primary group-hover:to-secondary transition-all duration-300">{step.title}</h4>
            <p className="mt-2 text-sm sm:text-base text-text-secondary font-semibold">{step.description}</p>
        </div>
    </div>
);

const HowItWorks: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 md:py-24 px-4 relative overflow-hidden">
            {/* Enhanced background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent pointer-events-none" />
            <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-gradient-radial from-primary/10 to-transparent blur-3xl pointer-events-none animate-pulse-slow" />

            {/* Floating decorative elements */}
            <div className="hidden lg:block floating-emoji" style={{ top: '20%', right: '8%', animationDelay: '0s' }}>🎯</div>
            <div className="hidden lg:block floating-emoji" style={{ bottom: '25%', left: '10%', animationDelay: '2s' }}>📍</div>

            <div className="relative z-10">
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-center mb-10 sm:mb-16 animate-fade-in">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient-shift drop-shadow-[0_0_25px_rgba(255,105,180,0.4)]">How Besties Works</span> ✨
                </h3>
                <div className="relative max-w-3xl mx-auto">
                    <div className="space-y-6 sm:space-y-8">
                        {HOW_IT_WORKS_DATA.map((step, index) => (
                            <StepCard key={step.title} step={step} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;