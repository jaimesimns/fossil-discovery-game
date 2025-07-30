export function PaleontologyBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50" />

      {/* Paleontology Icons */}
      <div className="absolute inset-0">
        {/* Dinosaur Icons */}
        <div className="absolute top-10 left-10 text-6xl opacity-10 animate-bounce-slow">
          🦕
        </div>
        <div className="absolute top-1/3 right-16 text-5xl opacity-10 animate-bounce-slow" style={{ animationDelay: '1s' }}>
          🦖
        </div>

        {/* Fossil Bones */}
        <div className="absolute bottom-1/4 left-1/4 text-5xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}>
          🦴
        </div>

        {/* Ammonite Shell */}
        <div className="absolute top-1/2 left-8 text-5xl opacity-10 animate-spin-slow" style={{ animationDelay: '0.5s' }}>
          🐚
        </div>

        {/* Shovel - Archaeological Feel */}
        <div className="absolute top-16 right-10 text-6xl opacity-10 animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
          🪏
        </div>

        {/* Scattered Additional Icons */}
        <div className="absolute bottom-20 right-20 text-4xl opacity-10 animate-pulse" style={{ animationDelay: '3s' }}>
          🐚
        </div>
        <div className="absolute bottom-16 left-16 text-4xl opacity-10 animate-bounce-slow" style={{ animationDelay: '4s' }}>
          🦴
        </div>

        {/* Subtle Dot Patterns (Still relevant as particles) */}
        <div className="absolute top-20 left-1/2 w-2 h-2 bg-amber-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-40 left-3/4 w-1 h-1 bg-orange-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-32 right-1/3 w-1.5 h-1.5 bg-red-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2.5s' }} />
        <div className="absolute top-3/4 left-20 w-1 h-1 bg-yellow-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '3.5s' }} />

        {/* Sediment Layers */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
          <div className="h-4 bg-gradient-to-r from-amber-200 to-orange-200" />
          <div className="h-3 bg-gradient-to-r from-orange-200 to-red-200" />
          <div className="h-5 bg-gradient-to-r from-red-200 to-pink-200" />
          <div className="h-4 bg-gradient-to-r from-pink-200 to-purple-200" />
          <div className="h-6 bg-gradient-to-r from-purple-200 to-blue-200" />
          <div className="h-4 bg-gradient-to-r from-blue-200 to-teal-200" />
          <div className="h-6 bg-gradient-to-r from-teal-200 to-green-200" />
        </div>

        {/* Rock Formation Pattern */}
        <div className="absolute top-0 left-0 right-0 h-16 opacity-10">
          <div className="h-2 bg-gradient-to-r from-stone-300 to-slate-300" />
          <div className="h-3 bg-gradient-to-r from-slate-300 to-gray-300" />
          <div className="h-2 bg-gradient-to-r from-gray-300 to-neutral-300" />
          <div className="h-4 bg-gradient-to-r from-neutral-300 to-stone-300" />
          <div className="h-3 bg-gradient-to-r from-stone-300 to-slate-300" />
          <div className="h-2 bg-gradient-to-r from-slate-300 to-gray-300" />
        </div>
      </div>
    </div>
  );
}
