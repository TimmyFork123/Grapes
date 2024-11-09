import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Block Blast</h3>
            <p className="text-sm text-gray-300">
              Experience the ultimate puzzle challenge that combines strategy and speed.
              Join over 5 million players in this award-winning game.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="https://iblockblast.com/game" className="hover:text-purple-400 transition">Play Now</a>
              </li>
              <li>
                <a href="https://iblockblast.com/features" className="hover:text-purple-400 transition">Features</a>
              </li>
              <li>
                <a href="https://iblockblast.com/how-to-play" className="hover:text-purple-400 transition">How to Play</a>
              </li>
              <li>
                <a href="https://iblockblast.com/testimonials" className="hover:text-purple-400 transition">Reviews</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@iblockblast.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (415) 555-0123</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">
                  535 Mission Street<br />
                  San Francisco, CA 94105
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <ul className="flex space-x-4">
              <li>
                <a 
                  href="https://iblockblast.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a 
                  href="https://iblockblast.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a 
                  href="https://iblockblast.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition"
                  aria-label="YouTube"
                >
                  <Youtube className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
