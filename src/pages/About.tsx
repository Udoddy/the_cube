import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Award, Users, ChevronsUp, Clock } from 'lucide-react';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | The Cube Restaurant & Café';
  }, []);

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* Header Section */}
      <section 
        ref={headerRef}
        className="relative py-20 bg-gray-900 top-16 z-40 text-white"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
            alt="Restaurant interior" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">About The Cube</h1>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-xl mb-0">
              A culinary haven in the heart of Dar es Salaam
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section 
        ref={storyRef}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-playfair font-bold mb-6 relative">
                <span className="relative z-10">Our Story</span>
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-primary-500"></span>
              </h2>
              <p className="text-gray-700 mb-6">
                The Cube Restaurant & Café was born from a passion for bringing exceptional dining experiences to Dar es Salaam. 
                Established in 2023, our restaurant has grown from a small café to one of the city's most beloved dining destinations.
              </p>
              <p className="text-gray-700 mb-6">
                Our founder, Chef Michael Karama, trained in Europe before returning to Tanzania with a vision to blend international 
                culinary techniques with the rich flavors of East Africa. This unique fusion has become our signature style, 
                delighting both locals and visitors from around the world.
              </p>
              <p className="text-gray-700">
                Today, The Cube continues to innovate while staying true to our core values of quality, creativity, and hospitality. 
                Every dish we serve tells a story of culinary passion and Tanzanian heritage.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Restaurant history" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="font-medium text-gray-800">Established</p>
                <p className="text-2xl font-bold text-primary-600">2023</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section 
        ref={valuesRef}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-playfair font-bold mb-6 relative inline-block">
              <span className="relative z-10">Our Values</span>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary-500"></span>
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              At The Cube, we're guided by core principles that inform everything we do, from sourcing ingredients to serving our guests.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={28} className="text-primary-500" />
              </div>
              <h3 className="text-xl font-medium mb-3">Quality</h3>
              <p className="text-gray-600">
                We source the finest ingredients, with a focus on local, seasonal, and sustainable products.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={28} className="text-primary-500" />
              </div>
              <h3 className="text-xl font-medium mb-3">Hospitality</h3>
              <p className="text-gray-600">
                Every guest is treated like family, with warm Tanzanian hospitality at the heart of our service.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChevronsUp size={28} className="text-primary-500" />
              </div>
              <h3 className="text-xl font-medium mb-3">Innovation</h3>
              <p className="text-gray-600">
                We're constantly evolving our menu, blending traditional techniques with modern creativity.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={28} className="text-primary-500" />
              </div>
              <h3 className="text-xl font-medium mb-3">Consistency</h3>
              <p className="text-gray-600">
                From your first visit to your hundredth, you can expect the same high standards every time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section 
        ref={teamRef}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-playfair font-bold mb-6 relative inline-block">
              <span className="relative z-10">Meet Our Team</span>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary-500"></span>
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              The heart and soul of The Cube is our talented team, dedicated to creating memorable dining experiences.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={teamInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-md group">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="Chef Michael Karama" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-1">Chef Michael Karama</h3>
                <p className="text-primary-600 mb-3">Founder & Executive Chef</p>
                <p className="text-gray-600">
                  With 15 years of culinary experience across Europe and Africa, Chef Michael brings a unique vision to every dish at The Cube.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md group">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="Aisha Mwenda" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-1">Aisha Mwenda</h3>
                <p className="text-primary-600 mb-3">Head Chef</p>
                <p className="text-gray-600">
                  Aisha's mastery of local Tanzanian flavors and modern cooking techniques creates the unique fusion The Cube is known for.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md group">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2318966/pexels-photo-2318966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="Daniel Mgeni" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-1">Daniel Mgeni</h3>
                <p className="text-primary-600 mb-3">Restaurant Manager</p>
                <p className="text-gray-600">
                  With an eye for detail and a passion for hospitality, Daniel ensures every guest at The Cube receives exceptional service.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">8+</p>
              <p className="text-lg">Years of Service</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">120+</p>
              <p className="text-lg">Unique Dishes</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">20K+</p>
              <p className="text-lg">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">15+</p>
              <p className="text-lg">Staff Members</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;