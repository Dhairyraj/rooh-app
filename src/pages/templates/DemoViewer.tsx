import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Check } from 'lucide-react';
import { Button } from '../../components/ui/Button';

// Dynamically import templates to avoid circular deps or giant bundles
const templates = {
  noor: React.lazy(() => import('../templates/Noor').then(m => ({ default: m.Noor }))),
  junoon: React.lazy(() => import('../templates/Junoon').then(m => ({ default: m.Junoon }))),
  mehfil: React.lazy(() => import('../templates/Mehfil').then(m => ({ default: m.Mehfil }))),
  eternal: React.lazy(() => import('../templates/Eternal').then(m => ({ default: m.Eternal }))),
  modern: React.lazy(() => import('../templates/Modern').then(m => ({ default: m.Modern }))),
  dreamy: React.lazy(() => import('../templates/Dreamy').then(m => ({ default: m.Dreamy })))
};

export const DemoViewer = () => {
  const { templateId } = useParams<{ templateId: string }>();
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleBuy = () => {
    setIsProcessing(true);
    // Mock Auth & Checkout
    setTimeout(() => {
      setIsProcessing(false);
      setSuccess(true);
      setTimeout(() => {
        window.location.href = `/create?template=${templateId}&unlocked=true`;
      }, 1500);
    }, 1500);
  };

  if (!templateId || !(templateId in templates)) {
    return <div className="min-h-screen flex items-center justify-center bg-plum-950 text-gold-50">Template not found.</div>;
  }

  const TemplateComponent = templates[templateId as keyof typeof templates];

  return (
    <div className="relative min-h-screen">
      {/* Template Rendered in Demo Mode */}
      <React.Suspense fallback={<div className="min-h-screen bg-plum-950 flex items-center justify-center"><div className="w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        <TemplateComponent isDemo={true} />
      </React.Suspense>

      {/* Floating Demo Banner */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', damping: 20 }}
        className="fixed bottom-4 left-4 right-4 z-[100] md:bottom-8 md:left-1/2 md:-translate-x-1/2 md:w-[600px] md:right-auto"
      >
        <div className="bg-plum-950/90 backdrop-blur-xl border border-gold-500/30 p-4 rounded-2xl shadow-[0_0_40px_rgba(212,175,55,0.15)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center text-gold-50">
            <Sparkles className="w-5 h-5 text-gold-400 mr-3 shrink-0" />
            <span className="text-sm font-medium">✨ This is a live demo —<br className="sm:hidden"/> Personalise this for your story</span>
          </div>
          <Button 
            className="w-full sm:w-auto whitespace-nowrap bg-gradient-to-r from-gold-500 to-gold-400 text-plum-950 border-none animate-pulse hover:animate-none hover:scale-105 transition-transform shadow-lg shadow-gold-500/20"
            onClick={handleBuy}
            disabled={isProcessing || success}
          >
            {isProcessing ? 'Processing...' : success ? <><Check className="w-4 h-4 mr-2" /> Unlocked</> : 'Make It Mine — ₹299'}
          </Button>
        </div>
      </motion.div>

      {/* Full screen loading overlay for mock checkout */}
      <AnimatePresence>
        {isProcessing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-plum-950/80 backdrop-blur-sm"
          >
            <div className="bg-plum-900 border border-plum-700 p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center">
              <div className="w-12 h-12 border-4 border-gold-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
              <h3 className="text-xl font-serif text-gold-50 mb-2">Simulating Checkout...</h3>
              <p className="text-plum-300 text-sm">Authenticating and processing ₹299</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
