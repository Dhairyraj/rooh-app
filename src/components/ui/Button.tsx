import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum-400 disabled:pointer-events-none disabled:opacity-50';

    const variants = {
      primary:
        'bg-plum-900 text-gold-100 hover:bg-plum-800 shadow-sm border border-plum-800',
      secondary:
        'bg-gold-200 text-plum-900 hover:bg-gold-300 shadow-sm border border-gold-300',
      outline:
        'border border-plum-900/20 bg-transparent text-plum-900 hover:bg-plum-50',
      ghost: 'hover:bg-plum-50 text-plum-900 hover:text-plum-900',
    };

    const sizes = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-12 px-8 text-base',
      lg: 'h-14 px-10 text-lg',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children as React.ReactNode}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
