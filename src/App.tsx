import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { RoohRadio } from './components/ui/RoohRadio';

// Lazy loading all pages for performance
const Home = React.lazy(() => import('./pages/Home'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const About = React.lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Contact = React.lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const HowItWorks = React.lazy(() => import('./pages/HowItWorks').then(m => ({ default: m.HowItWorks })));
const Gifts = React.lazy(() => import('./pages/Gifts').then(m => ({ default: m.Gifts })));
const Blog = React.lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })));
const Dashboard = React.lazy(() => import('./pages/Dashboard').then(m => ({ default: m.Dashboard })));

// Templates
const Noor = React.lazy(() => import('./pages/templates/Noor').then(m => ({ default: m.Noor })));
const Junoon = React.lazy(() => import('./pages/templates/Junoon').then(m => ({ default: m.Junoon })));
const Mehfil = React.lazy(() => import('./pages/templates/Mehfil').then(m => ({ default: m.Mehfil })));
const Eternal = React.lazy(() => import('./pages/templates/Eternal').then(m => ({ default: m.Eternal })));
const Modern = React.lazy(() => import('./pages/templates/Modern').then(m => ({ default: m.Modern })));
const Dreamy = React.lazy(() => import('./pages/templates/Dreamy').then(m => ({ default: m.Dreamy })));
const DemoViewer = React.lazy(() => import('./pages/templates/DemoViewer').then(m => ({ default: m.DemoViewer })));

// Stub
const CreateStub = React.lazy(() => import('./pages/CreateStub').then(m => ({ default: m.CreateStub })));

// Games
const GamesHub = React.lazy(() => import('./pages/games/GamesHub').then(m => ({ default: m.GamesHub })));
const ThirtySixQuestions = React.lazy(() => import('./pages/games/ThirtySixQuestions').then(m => ({ default: m.ThirtySixQuestions })));
const Compatibility = React.lazy(() => import('./pages/games/Compatibility').then(m => ({ default: m.Compatibility })));
const LoveLanguage = React.lazy(() => import('./pages/games/LoveLanguage').then(m => ({ default: m.LoveLanguage })));
const IntimacyJar = React.lazy(() => import('./pages/games/IntimacyJar').then(m => ({ default: m.IntimacyJar })));
const MemoryLane = React.lazy(() => import('./pages/games/MemoryLane').then(m => ({ default: m.MemoryLane })));
const TimeCapsule = React.lazy(() => import('./pages/games/TimeCapsule').then(m => ({ default: m.TimeCapsule })));
const AnniversaryCountdown = React.lazy(() => import('./pages/games/AnniversaryCountdown').then(m => ({ default: m.AnniversaryCountdown })));
const WouldYouRather = React.lazy(() => import('./pages/games/WouldYouRather').then(m => ({ default: m.WouldYouRather })));
const UnsentLetter = React.lazy(() => import('./pages/games/UnsentLetter').then(m => ({ default: m.UnsentLetter })));
const RelationshipBingo = React.lazy(() => import('./pages/games/RelationshipBingo').then(m => ({ default: m.RelationshipBingo })));
const TwoTruths = React.lazy(() => import('./pages/games/TwoTruths').then(m => ({ default: m.TwoTruths })));
const FiveYearVision = React.lazy(() => import('./pages/games/FiveYearVision').then(m => ({ default: m.FiveYearVision })));

const FallbackLoader = () => (
  <div className="min-h-screen bg-plum-950 flex flex-col items-center justify-center">
    <div className="w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-plum-900 text-gold-50 font-sans">
          <Navbar />
          <RoohRadio />
          <main className="flex-grow">
            <Suspense fallback={<FallbackLoader />}>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/gifts" element={<Gifts />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/dashboard" element={<Dashboard />} />
                
                {/* Templates & Demo */}
                <Route path="/templates/noor" element={<Noor />} />
                <Route path="/templates/junoon" element={<Junoon />} />
                <Route path="/templates/mehfil" element={<Mehfil />} />
                <Route path="/templates/eternal" element={<Eternal />} />
                <Route path="/templates/modern" element={<Modern />} />
                <Route path="/templates/dreamy" element={<Dreamy />} />
                
                <Route path="/demo/:templateId" element={<DemoViewer />} />
                <Route path="/create" element={<CreateStub />} />
                
                {/* Games */}
                <Route path="/play" element={<GamesHub />} />
                <Route path="/play/36-questions" element={<ThirtySixQuestions />} />
                <Route path="/play/compatibility" element={<Compatibility />} />
                <Route path="/play/love-language" element={<LoveLanguage />} />
                <Route path="/play/intimacy-jar" element={<IntimacyJar />} />
                <Route path="/play/memory-lane" element={<MemoryLane />} />
                <Route path="/play/time-capsule" element={<TimeCapsule />} />
                <Route path="/play/anniversary-countdown" element={<AnniversaryCountdown />} />
                <Route path="/play/would-you-rather" element={<WouldYouRather />} />
                <Route path="/play/unsent-letter" element={<UnsentLetter />} />
                <Route path="/play/relationship-bingo" element={<RelationshipBingo />} />
                <Route path="/play/two-truths" element={<TwoTruths />} />
                <Route path="/play/five-year-vision" element={<FiveYearVision />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
