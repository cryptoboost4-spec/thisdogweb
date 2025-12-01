import React from 'react';

const SubHero: React.FC = () => {
    return (
        <section className="py-16 sm:py-20 md:py-28 text-center px-4 relative overflow-hidden">
            {/* Enhanced Background gradient with multiple layers */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-primary/10 to-secondary/10 pointer-events-none" />
            <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-primary/15 to-transparent blur-3xl pointer-events-none animate-pulse-slow" />
            <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-secondary/15 to-transparent blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '1s' }} />

            {/* Floating emojis */}
            <div className="hidden md:block floating-emoji" style={{ top: '15%', left: '10%', animationDelay: '0s' }}>💬</div>
            <div className="hidden md:block floating-emoji" style={{ top: '20%', right: '12%', animationDelay: '1.5s' }}>📱</div>
            <div className="hidden lg:block floating-emoji" style={{ bottom: '25%', left: '8%', animationDelay: '2s' }}>🏠</div>

            <div className="max-w-4xl mx-auto relative z-10">
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-text-primary leading-tight px-4 mb-5 sm:mb-6 animate-fade-in">
                    Your besties always say <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient-shift drop-shadow-[0_0_20px_rgba(255,105,180,0.4)]">"text me when you get home"</span>...
                </h3>
                <p className="text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold px-4 mb-8 sm:mb-10 animate-fade-in-delay">
                    Now they don't have to rely on you remembering. ✨
                </p>
                <div className="relative mt-8 sm:mt-10 p-8 sm:p-10 md:p-12 bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-sm rounded-3xl shadow-soft-hover border-2 border-primary/30 space-y-5 sm:space-y-6 overflow-hidden group hover:shadow-mega-glow transition-all duration-500 hover:-translate-y-2 gradient-shimmer">
                    {/* Enhanced animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-secondary/20 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-radial from-primary/20 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                    <div className="relative z-10">
                        <p className="text-lg sm:text-xl text-text-primary font-bold leading-relaxed">
                            You set a check-in. If you forget to tap <span className="text-primary">"I'm Safe"</span>, Besties automatically alerts your chosen friends through <span className="text-secondary">Messenger</span> or <span className="text-secondary">WhatsApp</span>.
                        </p>
                        <div className="mt-6 sm:mt-8 pt-6 border-t-2 border-primary/30 group-hover:border-primary/50 transition-colors duration-300">
                            <p className="font-display text-2xl sm:text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient-shift leading-tight drop-shadow-[0_0_15px_rgba(255,105,180,0.3)]">
                                No fear. No stress.<br />Just besties looking after besties. 💕✨
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubHero;