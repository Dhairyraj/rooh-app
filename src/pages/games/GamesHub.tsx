import { Card } from '../../components/ui/Card';
import { ArrowRight } from 'lucide-react';

export const GamesHub = () => {
  const games = [
    { title: "36 Questions of Love", path: "/play/36-questions", desc: "The famous psychological study." },
    { title: "Compatibility Engine", path: "/play/compatibility", desc: "Deep-dive into your shared values." },
    { title: "Love Language Decoder", path: "/play/love-language", desc: "Learn how to love and be loved." },
    { title: "Intimacy Jar", path: "/play/intimacy-jar", desc: "100+ deep questions across 5 categories." },
    { title: "Memory Lane", path: "/play/memory-lane", desc: "Build a beautiful interactive timeline." },
    { title: "Time Capsule", path: "/play/time-capsule", desc: "Write a message for tomorrow, today." },
    { title: "Anniversary Countdown", path: "/play/anniversary-countdown", desc: "Live countdowns and automated reminders." },
    { title: "Would You Rather", path: "/play/would-you-rather", desc: "Test your preferences side-by-side." },
    { title: "The Unsent Letter", path: "/play/unsent-letter", desc: "A guided love letter writing experience." },
    { title: "Relationship Bingo", path: "/play/relationship-bingo", desc: "Mark your milestones on a shared board." },
    { title: "Two Truths & A Lie", path: "/play/two-truths", desc: "Spot the lie in this playful challenge." },
    { title: "The 5 Year Vision", path: "/play/five-year-vision", desc: "Align your futures. Discover where you overlap." }
  ];

  return (
    <div className="min-h-screen bg-plum-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif text-gold-100 mb-4 text-center">Experiences Library</h1>
        <p className="text-plum-300 text-center mb-12">Choose your path to deeper connection.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {games.map(game => (
            <Card 
              key={game.title}
              className="cursor-pointer hover:border-gold-500/50 transition-colors group"
              onClick={() => window.location.href = game.path}
            >
              <h3 className="text-xl font-serif text-gold-50 mb-2">{game.title}</h3>
              <p className="text-plum-200 text-sm mb-6">{game.desc}</p>
              <div className="flex items-center text-gold-400 text-sm font-medium group-hover:text-gold-200 transition-colors">
                Play Now <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
