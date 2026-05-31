import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { CheckCircle2, Mail, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Rooh</title>
        <meta name="description" content="Have questions about our couples games or memory capsule? Reach out to the Rooh team." />
      </Helmet>
      
      <div className="min-h-screen bg-plum-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif text-gold-100 mb-4">Get in Touch</h1>
            <p className="text-plum-300">We'd love to hear your story or answer any questions.</p>
          </div>
          
          <AnimatePresence mode="wait">
            {!isSent ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-plum-800 p-8 rounded-2xl border border-plum-700 shadow-xl"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-plum-200 mb-2">Name</label>
                      <Input required placeholder="Your name" className="bg-plum-900 border-plum-700 w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-plum-200 mb-2">Email</label>
                      <Input required type="email" placeholder="your@email.com" className="bg-plum-900 border-plum-700 w-full" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-plum-200 mb-2">Message</label>
                    <textarea 
                      required
                      className="w-full bg-plum-900 border border-plum-700 text-plum-100 rounded-lg p-4 min-h-[150px] focus:ring-1 focus:ring-gold-500/50"
                      placeholder="How can we help?"
                    />
                  </div>
                  <Button type="submit" className="w-full h-12" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
                
                <div className="mt-8 pt-8 border-t border-plum-700 flex flex-col sm:flex-row justify-center gap-8 text-sm text-plum-400">
                  <div className="flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-2" /> hello@rooh.com
                  </div>
                  <div className="flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 mr-2" /> Usually replies in 2 hours
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-plum-800 p-12 rounded-2xl border border-gold-500/30 shadow-xl text-center"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-serif text-gold-50 mb-4">Message Sent</h3>
                <p className="text-plum-200 mb-8">Thank you for reaching out. We will get back to you shortly.</p>
                <Button variant="outline" onClick={() => setIsSent(false)}>Send Another Message</Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Contact;
