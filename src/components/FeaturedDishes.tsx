import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  prepTime: string;
  category: string;
}

const featuredDishes: Dish[] = [
  {
    id: 1,
    name: 'Grilled Salmon Fillet',
    description: 'Fresh Atlantic salmon served with seasonal vegetables and lemon butter sauce.',
    price: 'TSh 28,000',
    image: 'https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    prepTime: '20 min',
    category: 'Main Course'
  },
  {
    id: 2,
    name: 'Swahili Coconut Curry',
    description: 'Traditional Tanzanian curry with coconut milk, aromatic spices, and your choice of protein.',
    price: 'TSh 22,000',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    prepTime: '25 min',
    category: 'Local Cuisine'
  },
  {
    id: 3,
    name: 'Wagyu Beef Burger',
    description: 'Premium wagyu beef patty with truffle mayo, caramelized onions, and aged cheddar.',
    price: 'TSh 25,000',
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    prepTime: '18 min',
    category: 'Burgers'
  },
  {
    id: 4,
    name: 'Mango Passion Cheesecake',
    description: 'Creamy cheesecake with a Tanzania-inspired mango and passion fruit topping.',
    price: 'TSh 15,000',
    image: 'https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    prepTime: '10 min',
    category: 'Dessert'
  }
];

const FeaturedDishes: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold mb-6 relative inline-block">
            <span className="relative z-10">Featured Dishes</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary-500"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our chefs take pride in creating memorable dishes that combine international techniques with local flavors.
            Here are some of our most popular creations.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {featuredDishes.map((dish) => (
            <motion.div
              key={dish.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              variants={itemVariants}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-medium px-2 py-1">
                  {dish.category}
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-playfair font-semibold text-lg">{dish.name}</h3>
                  <span className="font-medium text-primary-600">{dish.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{dish.description}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock size={14} className="mr-1" />
                  <span>Prep time: {dish.prepTime}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a 
            href="https://menu.the-cuberestaurant.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-md transition-all hover:shadow-lg transform hover:-translate-y-1 inline-block"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;