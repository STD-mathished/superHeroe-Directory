import { Swords, Zap, Flame } from 'lucide-react';
import Link from 'next/link';

export default function BattleSection() {
  return (
    <section className="w-full bg-gradient-to-br from-purple-800 via-red-600 to-yellow-400 text-white py-20 px-6 text-center relative overflow-hidden"   data-aos="fade-left">
      <div className="absolute inset-0 opacity-10 bg-cover bg-center" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-6 drop-shadow-lg">
          Enter the Battle Arena
        </h2>

        <p className="text-lg md:text-xl mb-10 font-light">
          Choose your hero, face epic rivals, and fight for justice — or domination. It's time to battle!
        </p>

        <Link href="/battle">
          <button className="flex items-center gap-3 bg-black/80 hover:bg-black px-6 py-4 rounded-full text-yellow-300 text-lg font-bold shadow-xl transition">
            <Swords className="w-5 h-5 animate-pulse" />
            Start Battle
          </button>
        </Link>
      </div>

      <div className="absolute top-10 left-10 text-white text-4xl opacity-30">⚡</div>
      <div className="absolute bottom-10 right-10 text-white text-4xl opacity-30">🔥</div>
    </section>
  );
}
