import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const DeliveryCTA: React.FC = () => {
  return (
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="fixed bottom-6 right-6 z-50"
      >
        <a
            href="tel:+255766884884"
            className="flex items-center gap-3 bg-primary-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-primary-600 transition-all transform hover:scale-105 text-sm sm:text-base sm:px-6"
        >
          <Phone size={20} className="flex-shrink-0" />
          <span className="font-medium whitespace-nowrap">Order Now: 0766 884 884</span>
        </a>
      </motion.div>
  );
};

export default DeliveryCTA;