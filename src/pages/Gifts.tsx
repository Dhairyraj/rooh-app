import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/Button';
import { Gift, Clock, Sparkles } from 'lucide-react';
import { Card } from '../components/ui/Card';

export const Gifts = () => {
  const gifts = [
    {
      id: 'memory-website',
      icon: <Sparkles className="w-8 h-8 text-gold-400" />,
      title: "Memory Website",
      desc: "A permanent, beautifully designed private URL showcasing your relationship timeline, highest compatibility points, and favorite moments from the games.",
      price: "Included in Eternal Tier (₹999)"
    },
    {
      id: 'time-capsule',
      icon: <Clock className="w-8 h-8 text-gold-400" />,
      title: "Digital Time Capsule",
      desc: "Write a letter to your partner today and attach a photo. We lock it securely and automatically email it to them on your chosen future date.",
      price: "Included in Eternal Tier (₹999)"
    },
    {
      id: 'anniversary-countdown',
      icon: <Gift className="w-8 h-8 text-gold-400" />,
      title: "Anniversary Dashboard",
      desc: "Never miss a milestone. A live countdown widget to your next anniversary, complete with an automated 7-day reminder email to start planning.",
      price: "Included in Eternal Tier (₹999)"
    },
    {
      id: 'template-noor',
      icon: <Sparkles className="w-8 h-8 text-gold-400" />,
      title: "Noor Template",
      desc: "A warm, everyday love digital website template. Add your photos, names, and reasons you love them.",
      price: "Standalone (₹299)"
    },
    {
      id: 'template-junoon',
      icon: <Sparkles className="w-8 h-8 text-gold-400" />,
      title: "Junoon Template",
      desc: "A cinematic, dramatic template designed for proposals, deep confessions, and grand gestures.",
      price: "Standalone (₹299)"
    },
    {
      id: 'template-mehfil',
      icon: <Sparkles className="w-8 h-8 text-gold-400" />,
      title: "Mehfil Template",
      desc: "A festive, joyful template perfect for birthdays and major milestones with confetti and memory reels.",
      price: "Standalone (₹299)"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gifts for Couples | Rooh</title>
        <meta name="description" content="Discover the ultimate digital gifts for couples. Give the gift of a private Memory Website, Time Capsule, or Anniversary Countdown." />
      </Helmet>
      
      <div className="min-h-screen bg-plum-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif text-gold-100 mb-6">The Perfect Digital Gift</h1>
            <p className="text-plum-200 text-lg max-w-2xl mx-auto">
              Flowers wilt. Chocolates are eaten. Give an experience that fosters deep connection and creates memories that last forever.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gifts.filter(g => !g.id.startsWith('template-')).map(gift => (
              <Card key={gift.id} className="h-full flex flex-col p-8 border-gold-500/20 hover:border-gold-500/50 transition-colors bg-plum-900/50 backdrop-blur-sm">
                <div className="w-16 h-16 bg-plum-950 rounded-full flex items-center justify-center border border-plum-700 mb-6">
                  {gift.icon}
                </div>
                <h3 className="text-2xl font-serif text-gold-50 mb-4">{gift.title}</h3>
                <p className="text-plum-200 leading-relaxed mb-8 flex-grow">{gift.desc}</p>
                <div className="text-sm font-medium text-gold-300 mb-6">{gift.price}</div>
                <Button className="w-full" onClick={() => window.location.href = '/pricing'}>Gift This</Button>
              </Card>
            ))}
          </div>

          <div className="mt-24 mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-serif text-gold-100 mb-4">Cinematic Templates</h2>
            <p className="text-plum-200">Standalone digital memory websites you can buy À la carte.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Eternal */}
            <Card className="p-6 bg-plum-900/50 border-plum-700 flex flex-col h-full hover:border-gold-500/50 transition-colors">
              <div className="text-xs text-gold-400 uppercase tracking-widest font-bold mb-2">The Flagship</div>
              <h3 className="text-2xl font-serif text-gold-50 mb-2">Eternal Template</h3>
              <p className="text-plum-300 text-sm mb-6 flex-grow">Our crown jewel. Deep plum, cinematic scroll, and beautiful typography.</p>
              <div className="flex gap-2 mt-auto pt-4 border-t border-plum-800">
                <Button className="flex-1 bg-gold-500/20 text-gold-200 hover:bg-gold-500 hover:text-plum-950 border-none transition-colors" onClick={() => window.open('/demo/eternal', '_blank')}>Preview Demo</Button>
                <Button className="flex-none bg-plum-800 text-gold-100 hover:bg-plum-700 border-none px-4" onClick={() => window.location.href = '/pricing'}>₹299</Button>
              </div>
            </Card>

            {/* Noor */}
            <Card className="p-6 bg-plum-900/50 border-plum-700 flex flex-col h-full hover:border-gold-500/50 transition-colors">
              <div className="text-xs text-orange-400 uppercase tracking-widest font-bold mb-2">Everyday Love</div>
              <h3 className="text-2xl font-serif text-gold-50 mb-2">Noor Template</h3>
              <p className="text-plum-300 text-sm mb-6 flex-grow">Warm sunrise palette. Perfect for 'just because' or telling them why you love them.</p>
              <div className="flex gap-2 mt-auto pt-4 border-t border-plum-800">
                <Button className="flex-1 bg-gold-500/20 text-gold-200 hover:bg-gold-500 hover:text-plum-950 border-none transition-colors" onClick={() => window.open('/demo/noor', '_blank')}>Preview Demo</Button>
                <Button className="flex-none bg-plum-800 text-gold-100 hover:bg-plum-700 border-none px-4" onClick={() => window.location.href = '/pricing'}>₹299</Button>
              </div>
            </Card>
            
            {/* Junoon */}
            <Card className="p-6 bg-plum-900/50 border-plum-700 flex flex-col h-full hover:border-gold-500/50 transition-colors">
              <div className="text-xs text-red-400 uppercase tracking-widest font-bold mb-2">Obsession</div>
              <h3 className="text-2xl font-serif text-gold-50 mb-2">Junoon Template</h3>
              <p className="text-plum-300 text-sm mb-6 flex-grow">Dramatic and cinematic. For grand gestures, deep confessions, and proposals.</p>
              <div className="flex gap-2 mt-auto pt-4 border-t border-plum-800">
                <Button className="flex-1 bg-gold-500/20 text-gold-200 hover:bg-gold-500 hover:text-plum-950 border-none transition-colors" onClick={() => window.open('/demo/junoon', '_blank')}>Preview Demo</Button>
                <Button className="flex-none bg-plum-800 text-gold-100 hover:bg-plum-700 border-none px-4" onClick={() => window.location.href = '/pricing'}>₹299</Button>
              </div>
            </Card>

            {/* Mehfil */}
            <Card className="p-6 bg-plum-900/50 border-plum-700 flex flex-col h-full hover:border-gold-500/50 transition-colors">
              <div className="text-xs text-purple-400 uppercase tracking-widest font-bold mb-2">Milestones</div>
              <h3 className="text-2xl font-serif text-gold-50 mb-2">Mehfil Template</h3>
              <p className="text-plum-300 text-sm mb-6 flex-grow">Festive and upscale. Celebrate birthdays and anniversaries with confetti and joy.</p>
              <div className="flex gap-2 mt-auto pt-4 border-t border-plum-800">
                <Button className="flex-1 bg-gold-500/20 text-gold-200 hover:bg-gold-500 hover:text-plum-950 border-none transition-colors" onClick={() => window.open('/demo/mehfil', '_blank')}>Preview Demo</Button>
                <Button className="flex-none bg-plum-800 text-gold-100 hover:bg-plum-700 border-none px-4" onClick={() => window.location.href = '/pricing'}>₹299</Button>
              </div>
            </Card>

            {/* Modern */}
            <Card className="p-6 bg-plum-900/50 border-plum-700 flex flex-col h-full hover:border-gold-500/50 transition-colors">
              <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-2">Editorial</div>
              <h3 className="text-2xl font-serif text-gold-50 mb-2">Modern Love</h3>
              <p className="text-plum-300 text-sm mb-6 flex-grow">Minimalist, sleek, black and white with bold typography.</p>
              <div className="flex gap-2 mt-auto pt-4 border-t border-plum-800">
                <Button className="flex-1 bg-gold-500/20 text-gold-200 hover:bg-gold-500 hover:text-plum-950 border-none transition-colors" onClick={() => window.open('/demo/modern', '_blank')}>Preview Demo</Button>
                <Button className="flex-none bg-plum-800 text-gold-100 hover:bg-plum-700 border-none px-4" onClick={() => window.location.href = '/pricing'}>₹299</Button>
              </div>
            </Card>

            {/* Dreamy */}
            <Card className="p-6 bg-plum-900/50 border-plum-700 flex flex-col h-full hover:border-gold-500/50 transition-colors">
              <div className="text-xs text-blue-400 uppercase tracking-widest font-bold mb-2">Ethereal</div>
              <h3 className="text-2xl font-serif text-gold-50 mb-2">Dreamy Template</h3>
              <p className="text-plum-300 text-sm mb-6 flex-grow">Soft pastels, ethereal clouds, and romantic gentleness.</p>
              <div className="flex gap-2 mt-auto pt-4 border-t border-plum-800">
                <Button className="flex-1 bg-gold-500/20 text-gold-200 hover:bg-gold-500 hover:text-plum-950 border-none transition-colors" onClick={() => window.open('/demo/dreamy', '_blank')}>Preview Demo</Button>
                <Button className="flex-none bg-plum-800 text-gold-100 hover:bg-plum-700 border-none px-4" onClick={() => window.location.href = '/pricing'}>₹299</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gifts;
