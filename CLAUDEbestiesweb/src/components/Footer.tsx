import React from 'react';
import { Button } from './common/Button';
import { EmailForm } from './common/EmailForm';

interface FooterProps {
    onNavigate: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="py-16 sm:py-20 md:py-32 text-center bg-gradient-to-b from-primary/5 to-secondary/5 mt-12 sm:mt-16">
            <div className="container mx-auto px-4">
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-text-primary px-4 mb-3 sm:mb-4">
                    Your besties have your back — make it automatic.
                </h3>
                <p className="max-w-2xl mx-auto text-base sm:text-lg text-text-secondary font-semibold px-4 mb-8 sm:mb-10">
                    Join the waitlist and be the first to know when we launch! 💕
                </p>
                <div className="w-full max-w-md mx-auto px-4">
                    <EmailForm />
                </div>
                <div className="mt-6 flex items-center justify-center gap-2 text-text-secondary text-sm font-medium">
                    <button onClick={onNavigate} className="text-primary hover:text-secondary transition-colors font-semibold underline decoration-2 decoration-primary/30 hover:decoration-secondary/50">
                        Vote on Our Logo
                    </button>
                </div>
                 <p className="mt-12 sm:mt-16 text-sm sm:text-base text-text-secondary font-semibold">© {new Date().getFullYear()} Besties. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;