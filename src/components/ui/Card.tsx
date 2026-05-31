import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'glass' | 'highlight';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-plum-800 border border-plum-700/50',
      glass: 'bg-plum-900/40 backdrop-blur-md border border-gold-200/10',
      highlight: 'bg-gradient-to-br from-plum-800 to-plum-900 border border-gold-400/30',
    };

    return (
      <motion.div
        ref={ref}
        className={cn('rounded-2xl p-6 md:p-8 shadow-xl', variants[variant], className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
