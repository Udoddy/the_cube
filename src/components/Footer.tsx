import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FaSnapchat, FaTiktok, FaInstagram, FaTwitter } from 'react-icons/fa';
import Logo from './Logo';
import { useReservation } from '../context/ReservationContext';

const Footer: React.FC = () => {
  const { toggleReservationPanel } = useReservation();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <Logo height={60} />
            </div>
            <p className="text-gray-400 mb-6">
              The Cube Restaurant and Cafe offers a memorable dining experience in the heart of Dar es Salaam. 
              Swing by & treat yourself to dishes that will make your tastebuds dance with joy!
            </p>
            <div className="flex space-x-4">
              <a href="https://www.snapchat.com/add/thecube.tz" target="_blank" rel="noopener noreferrer" aria-label="Snapchat">
                <FaSnapchat className="text-gray-400 hover:text-yellow-400 text-xl transition-colors" />
              </a>
              <a href="https://www.tiktok.com/@thecube.tz" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FaTiktok className="text-gray-400 hover:text-pink-500 text-xl transition-colors" />
              </a>
              <a href="https://www.instagram.com/thecube.tz" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-gray-400 hover:text-purple-500 text-xl transition-colors" />
              </a>
              <a href="https://twitter.com/thecube_tz" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="text-gray-400 hover:text-blue-400 text-xl transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-semibold mb-6 relative pb-2">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Mindu St, Upanga, Dar es Salaam, Tanzania</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-500 flex-shrink-0" />
                <a href="tel:+255712345678" className="text-gray-400 hover:text-white transition-colors">
                  +255 766 884 884
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-500 flex-shrink-0" />
                <a href="mailto:info@the-cuberestaurant.com" className="text-gray-400 hover:text-white transition-colors">
                  info@the-cuberestaurant.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-primary-500 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Every day: 12:00 PM–00:00</p>
                  <p>Fridays: 1:30 PM–00:00</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-semibold mb-6 relative pb-2">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a 
                  href="https://menu.the-cuberestaurant.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                 Our Menu
                </a>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-semibold mb-6 relative pb-2">
              <span className="relative z-10">Reservations</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-500"></span>
            </h3>
            <p className="text-gray-400 mb-6">
              Book a table for an unforgettable dining experience or reserve our private room for special events.
            </p>
            <button 
              onClick={toggleReservationPanel}
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-6 rounded transition-all hover:shadow-lg w-full"
            >
              Make Reservation
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} The Cube Restaurant & Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;