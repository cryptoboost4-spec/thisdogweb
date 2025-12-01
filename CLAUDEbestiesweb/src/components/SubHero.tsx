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
                <div className="relative mt-8 sm:mt-10 p-6 sm:p-8 md:p-10 bg-gradient-to-br from-orange-50 to-red-50 backdrop-blur-sm rounded-xl border-2 border-orange-200 space-y-4 sm:space-y-5 overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">

                    <div className="relative z-10">
                        <p className="text-base sm:text-lg text-gray-800 font-semibold leading-relaxed">
                            You set a check-in. If you forget to tap <span className="text-primary">"I'm Safe"</span>, Besties automatically alerts your chosen friends through <span className="text-secondary">Messenger</span> or <span className="text-secondary">WhatsApp</span>.
                        </p>
                        <div className="mt-5 sm:mt-6 pt-5 border-t-2 border-orange-200">
                            <p className="font-display text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary leading-tight">
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