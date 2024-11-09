"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoImage, LogoText } from "../logo";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handlePlayClick = () => {
    router.push("/?play=true#game");
  };

  return (
    <header className="fixed top-0 w-full bg-[#4267B2]/95 backdrop-blur-sm text-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <LogoImage className="h-8 w-8" />
            <LogoText className="w-auto h-8" />
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={handlePlayClick}
              className="hover:text-purple-300 transition"
            >
              Play Now
            </button>
            <Link href="#features" className="hover:text-purple-300 transition">
              Features
            </Link>
            <Link href="#how-to-play" className="hover:text-purple-300 transition">
              How to Play
            </Link>
            <Link href="#testimonials" className="hover:text-purple-300 transition">
              Reviews
            </Link>
            <Link href="#faq" className="hover:text-purple-300 transition">
              FAQ
            </Link>
          </nav>

          <div className="hidden md:flex space-x-4">
            <button 
              onClick={handlePlayClick}
              className="bg-[#FFD700] hover:bg-[#E67E22] text-[#2C3E50] font-bold px-6 py-2 rounded-full transition"
            >
              Play Now
            </button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={handlePlayClick}
                className="hover:text-purple-300 transition"
              >
                Play Now
              </button>
              <Link href="#features" className="hover:text-purple-300 transition">
                Features
              </Link>
              <Link href="#how-to-play" className="hover:text-purple-300 transition">
                How to Play
              </Link>
              <Link href="#testimonials" className="hover:text-purple-300 transition">
                Reviews
              </Link>
              <Link href="#faq" className="hover:text-purple-300 transition">
                FAQ
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
