import { Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm"  data-aos="fade-down">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-red-500 font-bold text-xl">
          <Sparkles className="w-6 h-6" />
          <span>HeroVerse</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          <a href="#" className="text-red-500">Home</a>
          <a href="#" className="hover:text-red-500 transition">Reviews</a>
          <a href="#" className="hover:text-red-500 transition">Battle</a>
        </nav>

        {/* Share button */}
        <button className="border border-gray-300 px-4 py-2 rounded text-sm hover:bg-gray-100 transition">
          Share
        </button>
      </div>
    </header>
    )
}