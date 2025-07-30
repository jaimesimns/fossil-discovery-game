import { Fossil } from '../data/fossils';
import { FossilIllustration } from './FossilIllustration';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { X, Calendar, MapPin, BookOpen } from 'lucide-react';

interface DiscoveredFossil extends Fossil {
  discoveredAt: Date;
  triggerWord: string;
}

interface FossilGalleryProps {
  discoveredFossils: DiscoveredFossil[];
  onClose: () => void;
}

export function FossilGallery({ discoveredFossils, onClose }: FossilGalleryProps) {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-green-100 text-green-800';
      case 'uncommon': return 'bg-blue-100 text-blue-800';
      case 'rare': return 'bg-purple-100 text-purple-800';
      case 'very rare': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCollectionStats = () => {
    const rarityCount = discoveredFossils.reduce((acc, fossil) => {
      acc[fossil.rarity] = (acc[fossil.rarity] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const uniquePeriods = new Set(discoveredFossils.map(f => f.period));
    const uniqueLocations = new Set(discoveredFossils.map(f => f.location));

    return {
      total: discoveredFossils.length,
      rarityCount,
      periods: uniquePeriods.size,
      locations: uniqueLocations.size
    };
  };

  const stats = getCollectionStats();

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl border-2 border-white/50 shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 border-b border-amber-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                🏛️ My Fossil Collection
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Your personal paleontology museum
              </p>
            </div>
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="hover:bg-white/50"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Collection Stats */}
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/60 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-amber-700">{stats.total}</div>
              <div className="text-xs text-gray-600">Total Fossils</div>
            </div>
            <div className="bg-white/60 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-orange-700">{stats.periods}</div>
              <div className="text-xs text-gray-600">Time Periods</div>
            </div>
            <div className="bg-white/60 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-red-700">{stats.locations}</div>
              <div className="text-xs text-gray-600">Locations</div>
            </div>
            <div className="bg-white/60 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-purple-700">{stats.rarityCount['very rare'] || 0}</div>
              <div className="text-xs text-gray-600">Very Rare</div>
            </div>
          </div>

          {/* Rarity Breakdown */}
          <div className="mt-3 flex flex-wrap gap-2 justify-center">
            {Object.entries(stats.rarityCount).map(([rarity, count]) => (
              <Badge key={rarity} className={`${getRarityColor(rarity)} text-xs`}>
                {count} {rarity}
              </Badge>
            ))}
          </div>
        </div>

        {/* Fossil Grid */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-280px)]">
          {discoveredFossils.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-lg font-medium text-gray-600 mb-2">No fossils discovered yet!</h3>
              <p className="text-sm text-gray-500">Start typing words to begin your paleontological journey</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {discoveredFossils.map((fossil, index) => (
                <Card key={`${fossil.id}-${index}`} className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border border-white/50">
                  <CardHeader className="text-center pb-3">
                    <div className="flex justify-center mb-3">
                      <div className="relative">
                        <FossilIllustration fossil={fossil} className="transform scale-75" />
                        <div className="absolute -top-1 -right-1 bg-amber-100 rounded-full p-1">
                          <span className="text-xs">#{index + 1}</span>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-base">{fossil.name}</CardTitle>
                    <p className="text-xs text-muted-foreground italic">{fossil.scientificName}</p>
                    <div className="flex justify-center gap-1 mt-2">
                      <Badge variant="outline" className="text-xs">{fossil.period}</Badge>
                      <Badge className={`${getRarityColor(fossil.rarity)} text-xs`}>{fossil.rarity}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-2">
                    <div className="text-center bg-amber-50 rounded-lg p-2">
                      <p className="text-xs text-gray-600">
                        Found with: <span className="font-medium text-amber-700">"{fossil.triggerWord}"</span>
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-2 text-xs">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-gray-400" />
                        <span className="text-gray-600">
                          {fossil.discoveredAt.toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-gray-400" />
                        <span className="text-gray-600 truncate">{fossil.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-3 w-3 text-gray-400" />
                        <span className="text-gray-600">Size: {fossil.size}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}