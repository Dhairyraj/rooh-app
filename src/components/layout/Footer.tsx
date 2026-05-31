import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-plum-900 border-t border-plum-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-3xl font-semibold text-gold-200 mb-4 inline-block">
              Rooh
            </Link>
            <p className="text-plum-200 text-sm leading-relaxed max-w-xs">
              The most thoughtful gift you can give your partner. Deepen your bond through interactive experiences and lasting memories.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-gold-100 mb-4 tracking-wider text-sm uppercase">Play</h4>
            <ul className="space-y-3">
              <li><Link to="/play/36-questions" className="text-plum-200 hover:text-gold-200 text-sm transition-colors">36 Questions of Love</Link></li>
              <li><Link to="/play/compatibility" className="text-plum-200 hover:text-gold-200 text-sm transition-colors">Compatibility Deep Dive</Link></li>
              <li><Link to="/play/love-language" className="text-plum-200 hover:text-gold-200 text-sm transition-colors">Love Language Decoder</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gold-100 mb-4 tracking-wider text-sm uppercase">Gifts</h4>
            <ul className="space-y-3">
              <li><Link to="/gifts/memory-website" className="text-plum-200 hover:text-gold-200 text-sm transition-colors">Memory Website</Link></li>
              <li><Link to="/gifts/time-capsule" className="text-plum-200 hover:text-gold-200 text-sm transition-colors">Time Capsule</Link></li>
              <li><Link to="/pricing" className="text-plum-200 hover:text-gold-200 text-sm transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gold-100 mb-4 tracking-wider text-sm uppercase">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-plum-200 hover:text-gold-200 text-sm transition-colors">Our Story</Link></li>
              <li><Link to="/how-it-works" className="text-plum-200 hover:text-gold-200 text-sm transition-colors">How it Works</Link></li>
              <li><Link to="/contact" className="text-plum-200 hover:text-gold-200 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-plum-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-plum-400 text-xs">
            © {new Date().getFullYear()} Rooh. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-plum-400 hover:text-plum-200 text-xs transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-plum-400 hover:text-plum-200 text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
