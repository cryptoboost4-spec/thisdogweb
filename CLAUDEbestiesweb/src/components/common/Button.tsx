import React from 'react';
import { Icon } from './Icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'disabled';
    iconLeft?: string;
    iconRight?: string;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', iconLeft, iconRight, children, className, ...props }) => {
    // Mobile-first: smaller padding on mobile, larger on desktop
    const baseClasses = 'relative font-display text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center gap-2 overflow-hidden group';

    const variantClasses = {
        primary: 'bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient-shift text-white shadow-mega-glow hover:shadow-mega-glow',
        secondary: 'bg-gradient-to-br from-white/90 to-white/70 text-primary border-2 border-primary/40 hover:border-primary shadow-soft hover:shadow-soft-hover hover:bg-gradient-to-br hover:from-accent/30 hover:to-accent/20',
        disabled: 'bg-text-secondary/30 text-text-primary/50 cursor-not-allowed shadow-none hover:scale-100',
    };

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            disabled={variant === 'disabled'}
            {...props}
        >
            {/* Shimmer effect on primary button */}
            {variant === 'primary' && (
                <>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-60 blur-xl -z-10 group-hover:animate-glow-pulse" />
                </>
            )}
            {iconLeft && <Icon name={iconLeft} className="text-xl sm:text-2xl group-hover:rotate-12 transition-transform duration-300" />}
            <span className="relative z-10">{children}</span>
            {iconRight && <Icon name={iconRight} className="text-xl sm:text-2xl group-hover:rotate-12 transition-transform duration-300" />}
        </button>
    );
};