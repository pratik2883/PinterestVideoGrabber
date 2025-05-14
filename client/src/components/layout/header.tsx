import { Link } from "wouter";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 glass-morphism shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <i className="fab fa-pinterest text-[#E60023] text-3xl"></i>
          <div>
            <h1 className="font-bold text-xl sm:text-2xl text-[#E60023]">Pinterest Downloader</h1>
            <p className="text-xs text-[#767676] hidden sm:block">Download videos in a few clicks</p>
          </div>
        </Link>
        
        <nav>
          <ul className="flex space-x-4 text-sm">
            <li><a href="#how-it-works" className="hover:text-[#E60023] transition-colors">How It Works</a></li>
            <li><a href="#faq" className="hover:text-[#E60023] transition-colors">FAQ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
