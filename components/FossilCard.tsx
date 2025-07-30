import { Fossil } from '../data/fossils';
import { FossilIllustration } from './FossilIllustration';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { MapPin } from 'lucide-react';

interface FossilCardProps {
  fossil: Fossil;
  triggerWord: string;
}

export function FossilCard({ fossil, triggerWord }: FossilCardProps) {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-green-100 text-green-800';
      case 'uncommon': return 'bg-blue-100 text-blue-800';
      case 'rare': return 'bg-purple-100 text-purple-800';
      case 'very rare': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white/90 backdrop-blur-sm border-2 border-white/50">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-4">
          <FossilIllustration fossil={fossil} />
        </div>
        <CardTitle className="text-xl mb-2">{fossil.name}</CardTitle>
        <p className="text-sm text-muted-foreground italic">{fossil.scientificName}</p>
        <div className="flex justify-center gap-2 mt-2">
          <Badge variant="outline">{fossil.period}</Badge>
          <Badge className={getRarityColor(fossil.rarity)}>{fossil.rarity}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Found by typing: <span className="font-medium text-primary">"{triggerWord}"</span>
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-1">Description</h4>
          <p className="text-sm text-muted-foreground">{fossil.description}</p>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <div>
            <h4 className="font-medium mb-1">Habitat</h4>
            <p className="text-sm text-muted-foreground">{fossil.habitat}</p>
          </div>
          <div>
            <h4 className="font-medium mb-1">Size</h4>
            <p className="text-sm text-muted-foreground">{fossil.size}</p>
          </div>
          <div>
            <h4 className="font-medium mb-1 flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Location
            </h4>
            <p className="text-sm text-muted-foreground">{fossil.location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}