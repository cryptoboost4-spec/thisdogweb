import React from 'react';

interface HeroProps {
    onNavigate: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
    return (
        <section className="relative text-center py-16 sm:py-24 md:py-36 px-4 overflow-hidden">
            {/* Enhanced Gradient background glow - Multiple layers */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-secondary/5 to-transparent pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/20 via-secondary/10 to-transparent blur-3xl pointer-events-none animate-pulse-slow" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-secondary/15 to-transparent blur-2xl pointer-events-none animate-float" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-primary/15 to-transparent blur-2xl pointer-events-none animate-float" style={{ animationDelay: '1s' }} />

            {/* Enhanced Floating Hearts - More visible and more of them */}
            <div className="hidden sm:block floating-heart" style={{ top: '10%', left: '10%', fontSize: '28px', animationDelay: '0s', animationDuration: '8s' }}>💕</div>
            <div className="floating-heart" style={{ top: '20%', right: '15%', fontSize: '32px', animationDelay: '1s', animationDuration: '10s' }}>💖</div>
            <div className="hidden md:block floating-heart" style={{ bottom: '30%', left: '20%', fontSize: '26px', animationDelay: '2s', animationDuration: '9s' }}>💗</div>
            <div className="hidden sm:block floating-heart" style={{ top: '40%', right: '25%', fontSize: '30px', animationDelay: '1.5s', animationDuration: '11s' }}>💓</div>
            <div className="floating-heart" style={{ bottom: '20%', right: '10%', fontSize: '28px', animationDelay: '0.5s', animationDuration: '10s' }}>💕</div>
            <div className="hidden md:block floating-heart" style={{ top: '60%', left: '15%', fontSize: '24px', animationDelay: '2.5s', animationDuration: '12s' }}>💖</div>
            <div className="hidden lg:block floating-heart" style={{ top: '15%', left: '35%', fontSize: '22px', animationDelay: '3s', animationDuration: '9s' }}>✨</div>
            <div className="hidden lg:block floating-heart" style={{ bottom: '40%', right: '20%', fontSize: '24px', animationDelay: '3.5s', animationDuration: '10s' }}>⭐</div>

            <div className="relative z-10">
                {/* Mobile-first heading sizes with enhanced gradient and glow */}
                <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient-shift tracking-wider drop-shadow-[0_0_30px_rgba(255,105,180,0.5)]">
                    BESTIES
                </h1>
                <h2 className="mt-4 sm:mt-6 font-display text-2xl sm:text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary px-4 leading-tight animate-fade-in">
                    Your Safety Network.<br className="sm:hidden" /> Always There When You Need It. ✨
                </h2>
                <p className="mt-6 sm:mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-text-secondary font-semibold px-4 leading-relaxed animate-fade-in-delay">
                    <span className="text-text-primary font-bold">First dates. Late nights. New places.</span><br className="hidden sm:inline" /> Your besties know you're safe — and get automatic alerts if you're not.<br className="hidden sm:inline" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">No awkward texts, no forgotten check-ins.</span> Just real friends looking out for each other. 💕
                </p>
            </div>

            {/* Epic CTA - Enhanced with mega effects */}
            <div className="relative mt-10 sm:mt-14 flex flex-col items-center justify-center gap-6 animate-slide-up">
                <a href="https://app.bestiesapp.xyz" target="_blank" rel="noopener noreferrer" className="group relative px-10 sm:px-14 py-5 sm:py-6 rounded-full bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient-shift text-white font-display text-xl sm:text-2xl md:text-3xl shadow-mega-glow hover:shadow-mega-glow transition-all duration-300 hover:scale-110 active:scale-95 overflow-hidden inline-block">
                    <span className="relative z-10 flex items-center gap-3">
                        <span>Enter App</span>
                        <span className="text-2xl sm:text-3xl group-hover:rotate-12 group-hover:scale-125 transition-all duration-300 animate-sparkle">✨</span>
                    </span>
                    {/* Multiple shine effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 translate-x-full group-hover:-translate-x-full transition-all duration-1000" />
                    {/* Enhanced pulsing glow */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary opacity-60 blur-2xl group-hover:animate-glow-pulse -z-10" />
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10" />
                </a>
                <p className="text-text-secondary text-sm sm:text-base font-bold animate-bounce-gentle bg-gradient-to-r from-primary/20 to-secondary/20 px-6 py-2 rounded-full">
                    Start protecting your besties today! 🎉
                </p>
            </div>
        </section>
    );
};

export default Hero;