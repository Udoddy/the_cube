import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Star, Clock, MapPin, Phone } from 'lucide-react';
import { useReservation } from '../context/ReservationContext';
import Testimonials from '../components/Testimonials';
import FeaturedDishes from '../components/FeaturedDishes';
import DeliveryCTA from '../components/DeliveryCTA-';


const Home: React.FC = () => {
    const { toggleReservationPanel } = useReservation();

    // Hero section animation
    const [heroRef, heroInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // About section animation
    const [aboutRef, aboutInView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    // Update document title
    useEffect(() => {
        document.title = 'The Cube Restaurant & Café | Dar es Salaam, Tanzania';
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative min-h-[90vh] max-h-[90vh] flex items-center justify-center overflow-hidden"
            >
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="Restaurant interior"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="pb-16 sm:pb-20"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
                            Savor the Taste of <span className="text-primary-400">Dar es Salaam</span>
                        </h1>
                        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                            🍔 Swing by & treat yourself to a memorable dining experience! We will make your tastebuds dance with joy!
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button
                                onClick={toggleReservationPanel}
                                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-md transition-all hover:shadow-lg transform hover:-translate-y-1"
                            >
                                Make Reservation
                            </button>
                            <a
                                href="/menu"
                                rel="noopener noreferrer"
                                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-medium py-3 px-8 rounded-md transition-all hover:shadow-lg"
                            >
                                View Menu
                            </a>
                        </div>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                        <div className="flex items-center gap-3 text-sm">
                            <Clock size={20} className="text-primary-500" />
                            <div>
                                <p className="font-medium">Opening Hours</p>
                                <p className="text-gray-600">Daily: 12:00 PM - 00:00</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <MapPin size={20} className="text-primary-500" />
                            <div>
                                <p className="font-medium">Location</p>
                                <p className="text-gray-600">Mindu St, Upanga</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <Phone size={20} className="text-primary-500" />
                            <div>
                                <p className="font-medium">Reservations</p>
                                <p className="text-gray-600">+255 766 884 884</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm hidden md:flex">
                            <Star size={20} className="text-primary-500" />
                            <div>
                                <p className="font-medium">Ratings</p>
                                <p className="text-gray-600">4.8/5 from 200+ reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Delivery CTA */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 flex hidden md:flex">
                    <DeliveryCTA />
                </div>
            </section>

            {/* About Section */}
            <section className="py-12 sm:py-16 bg-neutral-50" ref={aboutRef}>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                            className="pt-4 sm:pt-8"
                        >
                            <div className="relative">
                                <img
                                    src="/images/interior/IMG_9499.PNG"
                                    alt="The Cube Restaurant Interior"
                                    className="rounded-lg shadow-xl object-cover w-full aspect-[1.68]"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} className="text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <p className="font-medium text-gray-800 mt-1">Exceptional Dining</p>
                                    <p className="text-sm text-gray-600">200+ Reviews</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-playfair font-bold mb-6 relative">
                                <span className="relative z-10">Welcome to The Cube Restaurant & Café</span>
                                <span className="absolute bottom-0 left-0 w-16 h-1 bg-primary-500"></span>
                            </h2>

                            <p className="text-gray-700 mb-6">
                                Nestled in the heart of Dar es Salaam, The Cube Restaurant & Café offers a unique blend of
                                international cuisine with a Tanzanian twist. Our chefs craft each dish with passion, using
                                only the freshest local ingredients to create unforgettable flavors.
                            </p>

                            <p className="text-gray-700 mb-8">
                                Whether you're joining us for a casual lunch, an intimate dinner, or a special celebration,
                                we promise an exceptional dining experience that will tantalize your taste buds and create
                                lasting memories.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="text-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <img src="https://img.icons8.com/ios/50/000000/restaurant.png" alt="Quality Food" className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-medium text-gray-800">Quality Food</h3>
                                </div>
                                <div className="text-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <img src="https://img.icons8.com/ios/50/000000/cocktail.png" alt="Premium Drinks" className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-medium text-gray-800">Premium Drinks</h3>
                                </div>
                                <div className="text-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <img src="https://img.icons8.com/ios/50/000000/waiter.png" alt="Great Service" className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-medium text-gray-800">Great Service</h3>
                                </div>
                            </div>

                            <div className="flex justify-center">
                            <button
                                onClick={toggleReservationPanel}
                                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-md transition-all hover:shadow-lg transform hover:-translate-y-1"
                            >
                                Book a Table
                            </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Dishes Section */}
            <FeaturedDishes />

            {/* Testimonials Section */}
            <Testimonials />

            {/* Private Events CTA */}
            <section className="py-20 relative">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/interior/IMG_9508.jpg"
                        alt="The Cube Restaurant Private Events Space"
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary-900 opacity-80"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                            Host Your Special Events With Us
                        </h2>
                        <p className="text-lg mb-8">
                            From intimate birthday celebrations to corporate gatherings, our private room offers
                            the perfect setting for your special occasions. Our dedicated team will ensure your event is memorable.
                        </p>
                        <button
                            onClick={toggleReservationPanel}
                            className="bg-white hover:bg-gray-100 text-primary-600 font-medium py-3 px-8 rounded-md transition-all hover:shadow-lg transform hover:-translate-y-1"
                        >
                            Book Private Room
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;