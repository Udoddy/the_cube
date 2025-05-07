import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Info, Clock } from 'lucide-react';
import { useReservation } from '../context/ReservationContext';

interface MenuItem {
  id: number;
  name: string;
  price: string;
  description: string;
  image?: string;
  prepTime: string;
}

interface MenuSection {
  id: string;
  title: string;
  prepTime: string;
  items: MenuItem[];
}

const menuSections: MenuSection[] = [
  {
    id: 'specials',
    title: 'Specials',
    prepTime: '10 min',
    items: [
      {
        id: 1,
        name: 'Crispy Prawns with Fries',
        price: '15,000 TZS',
        description: 'Prawns, fries, sauce',
        image: 'https://images.pexels.com/photos/3843225/pexels-photo-3843225.jpeg',
        prepTime: '10 min'
      },
      {
        id: 2,
        name: 'Hummus',
        price: '15,000 TZS',
        description: 'Traditional hummus, pita bread',
        image: 'https://images.pexels.com/photos/1618898/pexels-photo-1618898.jpeg',
        prepTime: '10 min'
      },
      {
        id: 3,
        name: 'Mac & Cheese',
        price: '15,000 TZS',
        description: 'Creamy macaroni, cheese, choice of beef or chicken',
        image: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg',
        prepTime: '10 min'
      },
      {
        id: 4,
        name: 'The Cube Fries',
        price: '17,000 TZS',
        description: 'Chicken tender, seasoned fries, sauce',
        image: 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg',
        prepTime: '10 min'
      }
    ]
  },
  {
    id: 'burgers',
    title: 'Burgers',
    prepTime: '12 min',
    items: [
      {
        id: 1,
        name: 'Beef Smash Burger',
        price: 'Single: 12,000 TZS, Double: 15,000 TZS',
        description: 'Beef patty, sauce, pickles, cheese, lettuce, onion',
        image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
        prepTime: '12 min'
      },
      {
        id: 2,
        name: 'Chicken Tender Burger',
        price: '13,000 TZS',
        description: 'Deep-fried chicken tender, coleslaw, pickles, sauce, cheese',
        image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg',
        prepTime: '12 min'
      },
      {
        id: 3,
        name: 'Hot Smash Burger',
        price: '15,000 TZS',
        description: 'Single beef patty, hot sauce, lettuce, jalapeño, cheese',
        image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg',
        prepTime: '12 min'
      }
    ]
  },
  {
    id: 'pizza',
    title: 'Pizza',
    prepTime: '15 min',
    items: [
      {
        id: 1,
        name: 'Chicken Pizza',
        price: '20,000 TZS',
        description: 'Chicken, mozzarella, sauce',
        image: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg',
        prepTime: '15 min'
      },
      {
        id: 2,
        name: 'Beef Pizza',
        price: '20,000 TZS',
        description: 'Beef, mozzarella, sauce',
        image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg',
        prepTime: '15 min'
      },
      {
        id: 3,
        name: 'Margarita Pizza',
        price: '15,000 TZS',
        description: 'Tomato, mozzarella, basil',
        image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg',
        prepTime: '15 min'
      }
    ]
  },
  {
    id: 'kisinia',
    title: 'Platters/Kisinia',
    prepTime: '20 min',
    items: [
      {
        id: 1,
        name: 'Platter 1',
        price: '35,000 TZS',
        description: 'Mixed mishkaki, chips, sausage',
        image: 'https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg',
        prepTime: '20 min'
      },
      {
        id: 2,
        name: 'Seafood Platter',
        price: '50,000 TZS',
        description: 'Mixed seafood, chips, sauce',
        image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg',
        prepTime: '20 min'
      }
    ]
  },
  {
    id: 'choma',
    title: 'Choma',
    prepTime: '12 min',
    items: [
      {
        id: 1,
        name: 'Peri Peri',
        price: '14,000 TZS',
        description: 'Peri peri spiced grill',
        image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg',
        prepTime: '12 min'
      },
      {
        id: 2,
        name: 'Sekela',
        price: '14,000 TZS',
        description: 'Traditional grilled meat',
        image: 'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg',
        prepTime: '12 min'
      }
    ]
  },
  {
    id: 'drinks',
    title: 'Drinks',
    prepTime: '5 min',
    items: [
      {
        id: 1,
        name: 'Coffee',
        price: '3,000 - 6,000 TZS',
        description: 'Various coffee options available',
        image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg',
        prepTime: '5 min'
      },
      {
        id: 2,
        name: 'Fresh Juices',
        price: '4,000 TZS',
        description: 'Selection of fresh fruit juices',
        image: 'https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg',
        prepTime: '5 min'
      },
      {
        id: 3,
        name: 'Soft Drinks',
        price: '2,500 TZS',
        description: 'Coke, Sprite, Fanta, etc.',
        image: 'https://images.pexels.com/photos/2789328/pexels-photo-2789328.jpeg',
        prepTime: '2 min'
      }
    ]
  }
];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const { toggleReservationPanel } = useReservation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    document.title = 'Menu | The Cube Restaurant & Café';
  }, []);

  const filteredSections = activeCategory === 'all'
      ? menuSections
      : menuSections.filter(section => section.id === activeCategory);

  return (
      <>
        {/* Header Section */}
        <section className="py-8 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-2">Our Menu</h1>
              <p className="text-lg font-playfair italic mb-4 text-primary-400">
                Think? We Eat Outside The Box!
              </p>
              <button
                  onClick={toggleReservationPanel}
                  className="bg-primary-400 hover:bg-primary-500 text-white font-medium py-2 px-6 rounded-md transition-all hover:shadow-lg transform hover:-translate-y-1"
              >
                Make Reservation
              </button>
            </div>
          </div>
        </section>

        {/* Scrollable Menu Categories */}
        <section className="py-4 bg-white sticky top-0 z-30 shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto space-x-4 scroll-smooth hide-scrollbar">
              <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-4 py-1 sm:px-6 sm:py-2 rounded-full transition-colors whitespace-nowrap ${
                      activeCategory === 'all'
                          ? 'bg-primary-400 text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-secondary-400'
                  }`}
              >
                All
              </button>
              {menuSections.map(section => (
                  <button
                      key={section.id}
                      onClick={() => setActiveCategory(section.id)}
                      className={`px-4 py-1 sm:px-6 sm:py-2 rounded-full transition-colors whitespace-nowrap ${
                          activeCategory === section.id
                              ? 'bg-primary-400 text-white'
                              : 'bg-gray-100 hover:bg-gray-200 text-secondary-400'
                      }`}
                  >
                    {section.title}
                  </button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Sections */}
        <section ref={ref} className="py-12">
          <div className="container mx-auto px-4">
            {filteredSections.map((section, index) => (
                <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="mb-16 last:mb-0"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-3xl font-playfair font-bold text-secondary-400">{section.title}</h2>
                    <div className="flex items-center text-secondary-400">
                      <Clock size={16} className="mr-1" />
                      <span className="text-sm">{section.prepTime}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {section.items.map((item) => (
                        <motion.div
                            key={item.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                            whileHover={{ y: -5 }}
                        >
                          {item.image && (
                              <div className="relative h-48 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <button
                                    onClick={() => setSelectedItem(item)}
                                    className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                                    aria-label="Show item details"
                                >
                                  <Info size={20} className="text-primary-400" />
                                </button>
                              </div>
                          )}
                          <div className="p-4">
                            <h3 className="text-xl font-medium text-secondary-400 mb-1">{item.name}</h3>
                            <p className="text-sm text-primary-400 font-medium mb-2">{item.price}</p>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                          </div>
                        </motion.div>
                    ))}
                  </div>
                </motion.div>
            ))}
          </div>
        </section>

        {/* Item Details Modal */}
        {selectedItem && (
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedItem(null)}
            >
              <div
                  className="bg-white rounded-lg max-w-2xl w-full overflow-hidden"
                  onClick={e => e.stopPropagation()}
              >
                {selectedItem.image && (
                    <img
                        src={selectedItem.image}
                        alt={selectedItem.name}
                        className="w-full h-64 object-cover"
                    />
                )}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-medium text-secondary-400">{selectedItem.name}</h3>
                    <button
                        onClick={() => setSelectedItem(null)}
                        className="text-gray-400 hover:text-gray-600"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-primary-400 font-medium mb-4">{selectedItem.price}</p>
                  <p className="text-gray-600 mb-4">{selectedItem.description}</p>
                  <div className="flex items-center text-gray-500">
                    <Clock size={16} className="mr-1" />
                    <span className="text-sm">Preparation time: {selectedItem.prepTime}</span>
                  </div>
                </div>
              </div>
            </div>
        )}

        <style>
          {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
        </style>
      </>
  );
};

export default Menu;