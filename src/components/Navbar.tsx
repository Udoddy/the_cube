import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
      >
        <nav
            ref={navbarRef}
            className={`fixed top-0 left-0 right-0 z-50 min-h-16 ${isScrolled ? 'bg-white' : 'bg-white/70'} backdrop-blur-sm shadow-md transition-colors duration-300`}
        >
          <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-800">
                <img
                    src="/images/thecube_landscap-transparent.png"
                    alt="The Cube Restaurant & Café"
                    className="h-8 sm:h-10 lg:h-12"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link to="/menu" className="text-gray-600 hover:text-gray-900">Our Menu</Link>
              <Link to="/gallery" className="text-gray-600 hover:text-gray-900">Gallery</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
              <div className="md:hidden transition-all">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link
                      to="/"
                      className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                      to="/menu"
                      className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                  >
                    Our Menu
                  </Link>
                  <Link
                      to="/gallery"
                      className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                  >
                    Gallery
                  </Link>
                  <Link
                      to="/contact"
                      className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>
          )}
        </nav>
      </motion.div>
  );
}

export default Navbar;