import { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { FossilCard } from '../components/FossilCard';
import { FossilGallery } from '../components/FossilGallery';
import { PaleontologyBackground } from '../components/PaleontologyBackground';
import { getRandomFossil, type Fossil } from '../data/fossils';
import { Search, Sparkles, Globe, BookOpen, Trophy } from 'lucide-react';

interface DiscoveredFossil extends Fossil {
  discoveredAt: Date;
  triggerWord: string;
}

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [currentFossil, setCurrentFossil] = useState<Fossil | null>(null);
  const [triggerWord, setTriggerWord] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [discoveredFossils, setDiscoveredFossils] = useState<DiscoveredFossil[]>([]);
  const [showGallery, setShowGallery] = useState(false);
  const [isNewDiscovery, setIsNewDiscovery] = useState(false);

  const handleDiscoverFossil = () => {
    if (!inputValue.trim()) return;
    
    setIsGenerating(true);
    setTriggerWord(inputValue.trim());
    
    // Simulate loading time for better UX
    setTimeout(() => {
      const newFossil = getRandomFossil();
      setCurrentFossil(newFossil);
      
      // Check if this fossil has been discovered before
      const alreadyDiscovered = discoveredFossils.some(f => f.id === newFossil.id);
      
      if (!alreadyDiscovered) {
        const discoveredFossil: DiscoveredFossil = {
          ...newFossil,
          discoveredAt: new Date(),
          triggerWord: inputValue.trim()
        };
        setDiscoveredFossils(prev => [...prev, discoveredFossil]);
        setIsNewDiscovery(true);
      } else {
        setIsNewDiscovery(false);
      }
      
      setIsGenerating(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleDiscoverFossil();
    }
  };

  const getCollectionProgress = () => {
    const totalFossils = 15; // Based on our fossils data
    const discovered = discoveredFossils.length;
    const percentage = Math.round((discovered / totalFossils) * 100);
    return { discovered, total: totalFossils, percentage };
  };

  const progress = getCollectionProgress();

  return (
    <div className="min-h-screen relative">
      <PaleontologyBackground />
      
      <div className="relative z-10 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 pt-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h1 className="text-4xl font-bold text-gray-800">
                🦴 Global Fossil Discovery
              </h1>
              <Globe className="h-8 w-8 text-amber-600 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Type any word to discover amazing fossils from around the world! 🌍
            </p>
            <p className="text-sm text-gray-600">
              From T-Rex teeth to ancient ammonites, explore Earth's incredible fossil record
            </p>
            <div className="flex items-center justify-center gap-2 mt-2 text-xs text-gray-500">
              <span>🦕 Dinosaurs</span>
              <span>•</span>
              <span>🐚 Marine Life</span>
              <span>•</span>
              <span>🌿 Ancient Plants</span>
              <span>•</span>
              <span>🦴 Megafauna</span>
            </div>
          </div>

          {/* Collection Progress & Gallery Button */}
          <div className="max-w-md mx-auto mb-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border-2 border-white/50 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-amber-600" />
                  <span className="font-medium text-sm text-gray-700">Collection Progress</span>
                </div>
                <Button
                  onClick={() => setShowGallery(true)}
                  variant="outline"
                  size="sm"
                  className="text-xs bg-amber-50 hover:bg-amber-100 border-amber-200"
                >
                  <Trophy className="h-3 w-3 mr-1" />
                  View Gallery
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-amber-400 to-orange-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${progress.percentage}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-600 font-medium">
                  {progress.discovered}/{progress.total}
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-1 text-center">
                {progress.percentage}% of fossils discovered
              </div>
            </div>
          </div>

          {/* Input Section */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Type any word to dig up fossils..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pl-10 bg-white/80 backdrop-blur-sm border-2 border-amber-200 focus:border-amber-400"
                  disabled={isGenerating}
                />
              </div>
              <Button 
                onClick={handleDiscoverFossil}
                disabled={!inputValue.trim() || isGenerating}
                className="px-6 bg-amber-600 hover:bg-amber-700 border-2 border-amber-700"
              >
                {isGenerating ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Excavating...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    <span>Discover</span>
                  </div>
                )}
              </Button>
            </div>
          </div>

          {/* Fossil Display */}
          {currentFossil && (
            <div className="mb-8">
              <div className="text-center mb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {isNewDiscovery ? '🎉 New Discovery!' : '🔍 Fossil Found!'}
                  </h2>
                  {isNewDiscovery && (
                    <Badge className="bg-green-100 text-green-800 animate-pulse">
                      +1 Collection
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-gray-600">
                  You've {isNewDiscovery ? 'discovered a new fossil' : 'found a fossil'} from {currentFossil.location}!
                </p>
                {!isNewDiscovery && (
                  <p className="text-xs text-amber-600 mt-1">
                    This specimen is already in your collection 📚
                  </p>
                )}
              </div>
              <FossilCard fossil={currentFossil} triggerWord={triggerWord} />
            </div>
          )}

          {/* Instructions */}
          {!currentFossil && (
            <div className="text-center text-gray-700 max-w-2xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-2 border-white/50 shadow-lg">
                <h3 className="font-semibold mb-3 flex items-center justify-center gap-2">
                  🏛️ How to Excavate Fossils:
                </h3>
                <div className="space-y-2 text-sm">
                  <p>🔍 Type any word in the search box above</p>
                  <p>⚡ Click "Discover" or press Enter to start your excavation</p>
                  <p>🦴 Uncover incredible fossils from prehistoric Earth!</p>
                  <p>📚 Build your personal fossil collection and gallery</p>
                </div>
                <div className="mt-4 text-xs text-gray-600 bg-amber-50 rounded-lg p-3">
                  <p className="font-medium mb-2">🌟 Featured Discoveries Include:</p>
                  <div className="grid grid-cols-2 gap-1 text-left">
                    <p>• T-Rex teeth from Montana</p>
                    <p>• Archaeopteryx from Germany</p>
                    <p>• Megalodon teeth worldwide</p>
                    <p>• Opalized fossils from Australia</p>
                    <p>• Amber specimens from Dominican Republic</p>
                    <p>• Ancient life from the Burgess Shale</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="text-center mt-12 text-sm text-gray-600">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-white/40">
              <p className="flex items-center justify-center gap-2 mb-2">
                <span>🌍</span>
                Featuring fossils from every continent on Earth
                <span>🦕</span>
              </p>
              <p className="text-xs text-gray-500">
                From 550-million-year-old Ediacaran life to Ice Age megafauna
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fossil Gallery Modal */}
      {showGallery && (
        <FossilGallery
          discoveredFossils={discoveredFossils}
          onClose={() => setShowGallery(false)}
        />
      )}
    </div>
  );
}