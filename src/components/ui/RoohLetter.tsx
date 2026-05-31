import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';
import { Input } from './Input';

export const RoohLetter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);
      // Mock Resend integration
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1000);
    }
  };

  return (
    <div className="w-full bg-plum-900 border-y border-gold-500/20 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-plum-800/50 to-transparent pointer-events-none" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="w-16 h-16 bg-plum-950 rounded-full border border-gold-500/30 flex items-center justify-center mx-auto mb-6 shadow-xl">
          <Mail className="w-8 h-8 text-gold-400" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-serif text-gold-50 mb-4">The Rooh Letter</h2>
        <p className="text-plum-200 mb-10 max-w-xl mx-auto leading-relaxed">
          Get one profound love prompt every week—a question to ask, a ritual to try, or a reminder of what actually matters.
        </p>

        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-plum-950 border-plum-700 h-14"
              />
              <Button type="submit" disabled={isSubmitting} className="h-14 px-8 whitespace-nowrap">
                {isSubmitting ? 'Joining...' : (
                  <span className="flex items-center">Subscribe <ArrowRight className="w-4 h-4 ml-2" /></span>
                )}
              </Button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-500/10 border border-green-500/30 p-6 rounded-2xl max-w-md mx-auto flex items-center justify-center text-green-400"
            >
              <CheckCircle2 className="w-6 h-6 mr-3" />
              <span className="font-medium">Welcome to the inner circle. Check your inbox.</span>
            </motion.div>
          )}
        </AnimatePresence>
        
        <p className="text-xs text-plum-500 mt-6">We respect your inbox. Zero spam, unsubscribe anytime.</p>
      </div>
    </div>
  );
};
