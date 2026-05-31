import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const GamesShowcase = () => {
  const games = [
    {
      title: "36 Questions of Love",
      description: "Based on Arthur Aron's famous psychological study. Questions designed to accelerate intimacy and vulnerability.",
      duration: "45-90 mins",
      tier: "Free to start",
      path: "/play/36-questions",
      highlight: true
    },
    {
      title: "Compatibility Engine",
      description: "Discover where your values align and where they beautifully contrast in this deep-dive quiz.",
      duration: "20 mins",
      tier: "Flame Tier",
      path: "/play/compatibility",
      highlight: false
    },
    {
      title: "Love Language Decoder",
      description: "Stop guessing how your partner wants to be loved. Find out exactly what fills their cup.",
      duration: "15 mins",
      tier: "Flame Tier",
      path: "/play/love-language",
      highlight: false
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-plum-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif text-gold-100 mb-4">Curated Experiences</h2>
            <p className="text-plum-200 max-w-xl">
              Not just quizzes. These are guided conversations designed by psychologists to create genuine, profound connection.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex text-gold-200 border-gold-200/30">
            View All Games
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                variant={game.highlight ? 'highlight' : 'default'} 
                className="h-full flex flex-col group cursor-pointer hover:border-gold-400/50 transition-colors"
                onClick={() => window.location.href = game.path}
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="px-3 py-1 text-xs font-medium bg-plum-950/50 text-gold-200 rounded-full border border-gold-500/20">
                    {game.tier}
                  </span>
                  <span className="text-xs text-plum-300 font-medium">
                    {game.duration}
                  </span>
                </div>
                
                <h3 className="text-2xl font-serif text-gold-50 mb-3">{game.title}</h3>
                <p className="text-plum-200 text-sm leading-relaxed flex-grow mb-8">
                  {game.description}
                </p>
                
                <div className="flex items-center text-gold-300 text-sm font-medium group-hover:text-gold-100 transition-colors">
                  Play Now 
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full text-gold-200 border-gold-200/30">
            View All Games
          </Button>
        </div>
      </div>
    </section>
  );
};
