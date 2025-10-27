import { Link } from "react-router";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-950 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Logo and Address */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" className="h-10" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Villa No. 45, Street 12, Khalifa City,
              <br />
              Abu Dhabi, United Arab Emirates
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-3 sm:items-center lg:items-start">
            <Link
              to="/get-started"
              className="text-gray-300 hover:text-green-500 transition-colors duration-200 text-sm"
            >
              Get started
            </Link>
            <Link
              to="/privacy"
              className="text-gray-300 hover:text-green-500 transition-colors duration-200 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/#reviews"
              className="text-gray-300 hover:text-green-500 transition-colors duration-200 text-sm"
            >
              Reviews
            </Link>
          </div>

          {/* Social Media */}
          <div className="space-y-4 lg:justify-self-end">
            <h3 className="text-sm font-medium text-gray-400">Follow us on</h3>
            <div className="flex space-x-4">
              <Link
                to="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-500 flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-500 flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-500 flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-500 flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <a
            href="mailto:Demostipo1@statcoachlive.com"
            className="text-gray-300 hover:text-green-500 transition-colors duration-200 text-sm"
          >
            Demostipo1@statcoachlive.com
          </a>
          <p className="text-gray-400 text-sm">
            © 2025 Statcoach. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
