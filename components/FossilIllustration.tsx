import { Fossil } from '../data/fossils';

interface FossilIllustrationProps {
  fossil: Fossil;
  className?: string;
}

export function FossilIllustration({ fossil, className = "" }: FossilIllustrationProps) {
  const { illustration } = fossil;
  
  const renderFossilShape = () => {
    const baseProps = {
      style: {
        background: `linear-gradient(135deg, ${illustration.primaryColor}, ${illustration.secondaryColor})`,
      },
      className: "relative overflow-hidden"
    };

    switch (illustration.shape) {
      case 'spiral':
        return (
          <div {...baseProps} className={`${baseProps.className} w-24 h-24 rounded-full border-4 border-white shadow-lg`}>
            <div className="absolute inset-2 border-2 border-white/30 rounded-full">
              <div className="absolute inset-2 border-2 border-white/20 rounded-full">
                <div className="absolute inset-2 border-2 border-white/10 rounded-full"></div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg">🐚</div>
          </div>
        );
      
      case 'branching':
        return (
          <div {...baseProps} className={`${baseProps.className} w-24 h-24 rounded-lg border-4 border-white shadow-lg`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1 h-16 bg-white/40 rounded-full"></div>
              <div className="absolute w-12 h-1 bg-white/40 rounded-full top-4"></div>
              <div className="absolute w-8 h-1 bg-white/40 rounded-full top-8"></div>
              <div className="absolute w-10 h-1 bg-white/40 rounded-full bottom-4"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg">🌿</div>
          </div>
        );
      
      case 'segmented':
        return (
          <div {...baseProps} className={`${baseProps.className} w-24 h-24 rounded-xl border-4 border-white shadow-lg`}>
            <div className="absolute inset-2 flex flex-col gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-2 bg-white/30 rounded-full"></div>
              ))}
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg">🦐</div>
          </div>
        );
      
      case 'circular':
        return (
          <div {...baseProps} className={`${baseProps.className} w-24 h-24 rounded-full border-4 border-white shadow-lg`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-white/40 rounded-full"></div>
                ))}
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg">🪨</div>
          </div>
        );
      
      case 'elongated':
        return (
          <div {...baseProps} className={`${baseProps.className} w-16 h-32 rounded-full border-4 border-white shadow-lg`}>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <div className="w-8 h-1 bg-white/40 rounded-full"></div>
              <div className="w-6 h-1 bg-white/40 rounded-full"></div>
              <div className="w-8 h-1 bg-white/40 rounded-full"></div>
              <div className="w-4 h-1 bg-white/40 rounded-full"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg">🦴</div>
          </div>
        );
      
      default:
        return (
          <div {...baseProps} className={`${baseProps.className} w-24 h-24 rounded-lg border-4 border-white shadow-lg`}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg">🗿</div>
          </div>
        );
    }
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {renderFossilShape()}
    </div>
  );
}