import { Helmet } from 'react-helmet-async';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Settings, LogOut, Award, Clock, Heart, Share2, Sparkles } from 'lucide-react';

export const Dashboard = () => {
  const tier = localStorage.getItem('rooh_tier') || 'spark';
  
  const getTierDisplay = () => {
    switch (tier) {
      case 'spark': return { name: 'Spark Tier (Free)', color: 'text-plum-400' };
      case 'flame': return { name: 'Flame Tier', color: 'text-orange-400' };
      case 'eternal': return { name: 'Eternal Tier', color: 'text-gold-400' };
      case 'forever': return { name: 'Forever Tier', color: 'text-gold-300' };
      default: return { name: 'Spark Tier (Free)', color: 'text-plum-400' };
    }
  };

  const handleShare = () => {
    const text = "I found this beautiful platform called Rooh. It's designed to help us reconnect and create a private digital memory capsule. I think we should try it tonight. ❤️";
    const url = "https://rooh.com";
    window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, '_blank');
  };

  const tierInfo = getTierDisplay();

  return (
    <>
      <Helmet>
        <title>Dashboard | Rooh</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <div className="min-h-screen bg-plum-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h1 className="text-3xl font-serif text-gold-50 mb-2">Welcome Back</h1>
              <div className="flex items-center text-sm font-medium">
                <span className="text-plum-300 mr-2">Current Plan:</span>
                <span className={tierInfo.color}>{tierInfo.name}</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button variant="outline" className="border-plum-700 text-plum-300">
                <Settings className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="border-plum-700 text-plum-300">
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-plum-900/50 border-plum-800">
              <Heart className="w-8 h-8 text-gold-500 mb-4" />
              <div className="text-3xl font-serif text-gold-50 mb-1">2</div>
              <div className="text-sm text-plum-300">Experiences Completed</div>
            </Card>
            <Card className="p-6 bg-plum-900/50 border-plum-800">
              <Award className="w-8 h-8 text-gold-500 mb-4" />
              <div className="text-3xl font-serif text-gold-50 mb-1">85%</div>
              <div className="text-sm text-plum-300">Highest Compatibility</div>
            </Card>
            <Card className="p-6 bg-plum-900/50 border-plum-800">
              <Clock className="w-8 h-8 text-gold-500 mb-4" />
              <div className="text-3xl font-serif text-gold-50 mb-1">0</div>
              <div className="text-sm text-plum-300">Time Capsules Sealed</div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-xl font-serif text-gold-100 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                <div className="bg-plum-900/30 p-4 rounded-xl border border-plum-800 flex justify-between items-center">
                  <div>
                    <div className="text-gold-50 font-medium mb-1">36 Questions of Love</div>
                    <div className="text-xs text-plum-400">Set 1 Completed • 2 days ago</div>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => window.location.href = '/play/36-questions'}>Continue</Button>
                </div>
                <div className="bg-plum-900/30 p-4 rounded-xl border border-plum-800 flex justify-between items-center">
                  <div>
                    <div className="text-gold-50 font-medium mb-1">Compatibility Engine</div>
                    <div className="text-xs text-plum-400">Completed • 5 days ago</div>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => window.location.href = '/play/compatibility'}>View Results</Button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {tier === 'spark' && (
                <Card className="p-8 bg-gradient-to-br from-plum-800 to-plum-900 border-gold-500/30 text-center">
                  <Sparkles className="w-10 h-10 text-gold-400 mx-auto mb-4" />
                  <h3 className="text-xl font-serif text-gold-50 mb-3">Upgrade Your Experience</h3>
                  <p className="text-sm text-plum-200 mb-6 leading-relaxed">
                    Unlock the rest of the 36 Questions, full compatibility reports, and your permanent Memory Website.
                  </p>
                  <Button className="w-full" onClick={() => window.location.href = '/pricing'}>
                    View Plans
                  </Button>
                </Card>
              )}
              
              <Card className="p-8 border-plum-700 bg-plum-900/40 text-center">
                <Share2 className="w-10 h-10 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-serif text-gold-50 mb-3">Invite Your Partner</h3>
                <p className="text-sm text-plum-200 mb-6 leading-relaxed">
                  Send a beautifully crafted invitation to start your Rooh journey together tonight.
                </p>
                <Button variant="outline" className="w-full border-green-500/50 text-green-400 hover:bg-green-500/10" onClick={handleShare}>
                  Share via WhatsApp
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
