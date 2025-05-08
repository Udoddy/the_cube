import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'food' | 'interior' | 'events';
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt: 'Seafood Platter', category: 'food' },
  { id: 2, src: '/images/interior/IMG_9499.PNG', alt: 'Restaurant Interior', category: 'interior' },
  { id: 3, src: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt: 'Elegant Dining Area', category: 'interior' },
  { id: 4, src: 'https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt: 'Dessert Selection', category: 'food' },
  { id: 5, src: 'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt: 'Private Event', category: 'events' },
  { id: 6, src: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt: 'Pasta Dish', category: 'food' },
  { id: 7, src: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt: 'Cozy Corner', category: 'interior' },
  { id: 8, src: 'https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt: 'Fresh Fruit Dessert', category: 'food' },
  { id: 9, src: 'https://images.pexels.com/photos/3217156/pexels-photo-3217156.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt: 'Birthday Celebration', category: 'events' },
  { id: 10, src: 'https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt: 'Burger and Fries', category: 'food' },
  { id: 11, src: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt: 'Bar Area', category: 'interior' },
  { id: 12, src: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt: 'Corporate Event', category: 'events' },
];

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'food' | 'interior' | 'events'>('all');
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(galleryImages);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    document.title = 'Gallery | The Cube Restaurant & Café';
  }, []);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(image => image.category === activeFilter));
    }
  }, [activeFilter]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      {/* Header Section */}
      <section className="relative py-20 bg-gray-900 top-16 z-40 text-white">
        <div className="absolute inset-0 z-0">
          <img
              src="/images/interior/IMG_9499.PNG"
              alt="Gallery header"
              className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Our Gallery</h1>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-xl mb-0">
              A visual journey through The Cube's culinary creations and ambiance
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={ref} className="py-20">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeFilter === 'all' 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter('food')}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeFilter === 'food' 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              Food
            </button>
            <button
              onClick={() => setActiveFilter('interior')}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeFilter === 'interior' 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              Interior
            </button>
            <button
              onClick={() => setActiveFilter('events')}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeFilter === 'events' 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              Events
            </button>
          </div>

          {/* Gallery Grid */}
          <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
          >
            {filteredImages.map((image) => (
                <motion.div
                    key={image.id}
                    className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
                    variants={itemVariants}
                    onClick={() => setSelectedImage(image)}
                >
                  {/* Aspect ratio container */}
                  <div className="relative aspect-[1.68] w-full">
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="bg-primary-500 text-white text-sm font-medium px-3 py-1 rounded-full">
            View
          </span>
                    </div>
                  </div>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-4">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;