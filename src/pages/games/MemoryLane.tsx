import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Helmet } from 'react-helmet-async';
import { Lock, Plus, Image as ImageIcon, Calendar, Share2, Trash2 } from 'lucide-react';

interface Moment {
  id: string;
  date: string;
  description: string;
  imageUrl?: string;
}

export const MemoryLane = () => {
  const isEternal = localStorage.getItem('rooh_tier') === 'eternal' || localStorage.getItem('rooh_tier') === 'forever';
  
  const [moments, setMoments] = useState<Moment[]>([
    { id: '1', date: '2023-05-14', description: 'The day we first met at the coffee shop.' },
    { id: '2', date: '2023-10-20', description: 'Our first trip together to the mountains.' }
  ]);
  
  const [isAdding, setIsAdding] = useState(false);
  const [newDate, setNewDate] = useState('');
  const [newDesc, setNewDesc] = useState('');
  
  const handleAdd = () => {
    if (newDate && newDesc) {
      setMoments([...moments, { id: Date.now().toString(), date: newDate, description: newDesc }].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
      setIsAdding(false);
      setNewDate('');
      setNewDesc('');
    }
  };

  const handleDelete = (id: string) => {
    setMoments(moments.filter(m => m.id !== id));
  };

  return (
    <>
      <Helmet>
        <title>Memory Lane | Rooh</title>
        <meta name="description" content="Build a beautiful, interactive timeline of your relationship." />
      </Helmet>
      
      <div className="min-h-screen bg-plum-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center relative overflow-hidden">
        
        {!isEternal && (
          <div className="absolute inset-0 z-50 bg-plum-950/80 backdrop-blur-md flex flex-col items-center justify-center p-4">
            <div className="bg-plum-900 border border-gold-500/30 p-8 md:p-12 rounded-2xl shadow-2xl max-w-lg w-full text-center">
              <Lock className="w-12 h-12 text-gold-400 mx-auto mb-6" />
              <h2 className="text-3xl font-serif text-gold-50 mb-4">Memory Lane Builder</h2>
              <p className="text-plum-200 mb-8 leading-relaxed">
                Build a permanent, beautiful timeline of your relationship. Add photos, dates, and stories to generate a private, shareable memory website. Available exclusively on Eternal and Forever tiers.
              </p>
              <Button size="lg" className="w-full" onClick={() => window.location.href = '/pricing'}>
                Unlock Eternal Tier — ₹999
              </Button>
            </div>
          </div>
        )}

        <div className={`max-w-3xl w-full ${!isEternal ? 'blur-sm select-none opacity-50' : ''}`}>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif text-gold-100 mb-4">Your Story</h1>
            <p className="text-plum-300 mb-8">Every milestone, saved forever.</p>
            
            <div className="flex justify-center gap-4">
              <Button onClick={() => setIsAdding(true)} disabled={!isEternal}>
                <Plus className="w-4 h-4 mr-2" /> Add Moment
              </Button>
              <Button variant="outline" disabled={!isEternal}>
                <Share2 className="w-4 h-4 mr-2" /> Share Link
              </Button>
            </div>
          </div>

          <AnimatePresence>
            {isAdding && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-12"
              >
                <div className="bg-plum-800 border border-gold-500/30 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-serif text-gold-100 mb-4">New Milestone</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-plum-300 mb-1">Date</label>
                      <Input type="date" value={newDate} onChange={(e) => setNewDate(e.target.value)} className="w-full bg-plum-900 border-plum-700 text-plum-100" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-plum-300 mb-1">The Story</label>
                      <textarea 
                        value={newDesc}
                        onChange={(e) => setNewDesc(e.target.value)}
                        className="w-full bg-plum-900 border-plum-700 text-plum-100 rounded-lg p-3 min-h-[100px] focus:ring-1 focus:ring-gold-500/50"
                        placeholder="What made this day special?"
                      />
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-plum-700">
                      <button className="flex items-center text-sm text-plum-400 hover:text-gold-200 transition-colors">
                        <ImageIcon className="w-4 h-4 mr-2" /> Attach Photo (Mock)
                      </button>
                      <div className="flex gap-2">
                        <Button variant="ghost" onClick={() => setIsAdding(false)}>Cancel</Button>
                        <Button onClick={handleAdd}>Save Moment</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold-500/20 transform md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {moments.map((moment, index) => (
                <motion.div 
                  key={moment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gold-400 rounded-full transform -translate-x-1.5 md:-translate-x-1.5 shadow-[0_0_10px_rgba(212,175,55,0.5)] z-10" />
                  
                  {/* Content */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 py-2">
                    <div className={`bg-plum-900/50 border border-plum-700 p-6 rounded-xl relative group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <button onClick={() => handleDelete(moment.id)} className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-plum-500 hover:text-red-400">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className={`flex items-center text-gold-300 text-sm font-medium mb-3 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(moment.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </div>
                      <p className="text-plum-100 leading-relaxed">{moment.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
