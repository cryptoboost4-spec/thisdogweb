import React from 'react';

const SubHero: React.FC = () => {
    return (
        <section className="py-16 sm:py-20 md:py-28 text-center px-4 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-primary/5 to-secondary/5 pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-text-primary leading-tight px-4 mb-5 sm:mb-6">
                    Your besties always say <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">"text me when you get home"</span>...
                </h3>
                <p className="text-xl sm:text-2xl text-primary font-bold px-4 mb-8 sm:mb-10">
                    Now they don't have to rely on you remembering.
                </p>
                <div className="relative mt-8 sm:mt-10 p-8 sm:p-10 md:p-12 bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-sm rounded-3xl shadow-soft-hover border-2 border-primary/20 space-y-5 sm:space-y-6 overflow-hidden group">
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10">
                        <p className="text-lg sm:text-xl text-text-primary font-bold leading-relaxed">
                            You set a check-in. If you forget to tap <span className="text-primary">"I'm Safe"</span>, Besties automatically alerts your chosen friends through <span className="text-secondary">Messenger</span> or <span className="text-secondary">WhatsApp</span>.
                        </p>
                        <div className="mt-6 sm:mt-8 pt-6 border-t-2 border-accent/20">
                            <p className="font-display text-2xl sm:text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary leading-tight">
                                No fear. No stress.<br />Just besties looking after besties. 💕
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubHero;