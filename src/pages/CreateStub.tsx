import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Settings, Image as ImageIcon, Type, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const CreateStub = () => {
  const [searchParams] = useSearchParams();
  const template = searchParams.get('template') || 'noor';
  const unlocked = searchParams.get('unlocked') === 'true';

  return (
    <>
      <Helmet>
        <title>Builder | Rooh</title>
      </Helmet>

      <div className="min-h-screen bg-plum-950 flex flex-col md:flex-row font-sans">
        
        {/* Sidebar */}
        <div className="w-full md:w-80 bg-plum-900 border-r border-plum-800 flex flex-col h-screen sticky top-0 overflow-y-auto">
          <div className="p-6 border-b border-plum-800">
            <div className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-2">Rooh Builder</div>
            <h1 className="text-2xl font-serif text-gold-50 capitalize">{template} Template</h1>
            {unlocked && (
              <div className="mt-4 flex items-center text-green-400 text-sm bg-green-400/10 p-2 rounded-lg border border-green-400/20">
                <Sparkles className="w-4 h-4 mr-2 shrink-0" /> Premium Unlocked
              </div>
            )}
          </div>

          <div className="flex-1 p-6 space-y-8">
            <div>
              <h3 className="text-plum-300 text-sm font-medium mb-4 flex items-center uppercase tracking-widest"><Type className="w-4 h-4 mr-2" /> Content</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-plum-400 mb-1 block uppercase">Partner Names</label>
                  <input type="text" className="w-full bg-plum-950 border border-plum-800 rounded p-2 text-gold-50" defaultValue="Aisha & Rohan" />
                </div>
                <div>
                  <label className="text-xs text-plum-400 mb-1 block uppercase">The Moment I Knew</label>
                  <textarea className="w-full bg-plum-950 border border-plum-800 rounded p-2 text-gold-50 h-24" defaultValue="It was a Tuesday..."></textarea>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-plum-300 text-sm font-medium mb-4 flex items-center uppercase tracking-widest"><ImageIcon className="w-4 h-4 mr-2" /> Media</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="aspect-square bg-plum-950 border border-plum-800 border-dashed rounded flex flex-col items-center justify-center text-plum-500 hover:text-gold-400 hover:border-gold-400 cursor-pointer transition-colors">
                  <ImageIcon className="w-6 h-6 mb-2" />
                  <span className="text-xs">Upload</span>
                </div>
                <div className="aspect-square bg-plum-950 border border-plum-800 border-dashed rounded flex flex-col items-center justify-center text-plum-500 hover:text-gold-400 hover:border-gold-400 cursor-pointer transition-colors">
                  <ImageIcon className="w-6 h-6 mb-2" />
                  <span className="text-xs">Upload</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-plum-300 text-sm font-medium mb-4 flex items-center uppercase tracking-widest"><Settings className="w-4 h-4 mr-2" /> Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-plum-200">Public URL</span>
                  <div className="w-10 h-5 bg-gold-500 rounded-full flex items-center p-1 justify-end">
                    <div className="w-3 h-3 bg-plum-950 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-plum-800">
            <Button className="w-full bg-gold-500 hover:bg-gold-400 text-plum-950 border-none font-bold">
              Publish Memory
            </Button>
          </div>
        </div>

        {/* Live Preview Pane */}
        <div className="flex-1 bg-black hidden md:flex items-center justify-center relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-plum-900/80 backdrop-blur text-gold-50 text-xs px-3 py-1 rounded-full border border-plum-700 flex items-center z-10">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" /> Live Preview
          </div>
          
          {/* Iframe wrapper for scale */}
          <div className="w-[375px] h-[812px] bg-plum-950 rounded-[3rem] border-8 border-plum-800 overflow-hidden shadow-2xl relative">
            <iframe 
              src={`/demo/${template}`} 
              className="w-full h-full border-none pointer-events-none"
              title="Preview"
            />
          </div>
        </div>
      </div>
    </>
  );
};
