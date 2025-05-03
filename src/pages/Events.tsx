import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Calendar, Users, Gift, Briefcase } from 'lucide-react';
import { useReservation } from '../context/ReservationContext';

interface EventType {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const EventsPage: React.FC = () => {
  const { toggleReservationPanel } = useReservation();

  useEffect(() => {
    document.title = 'Events | The Cube Restaurant & Café';
  }, []);

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [eventTypesRef, eventTypesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [privateRoomRef, privateRoomInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [upcomingRef, upcomingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const eventTypes: EventType[] = [
    {
      id: 1,
      title: 'Birthday Celebrations',
      description: 'Make your birthday special with our personalized celebration packages, including custom cakes and special menus.',
      image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      icon: <Gift size={28} className="text-primary-500" />
    },
    {
      id: 2,
      title: 'Private Dinners',
      description: 'Intimate gatherings in our private dining room, perfect for family celebrations or romantic evenings.',
      image: 'https://images.pexels.com/photos/5379707/pexels-photo-5379707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      icon: <Users size={28} className="text-primary-500" />
    },
    {
      id: 3,
      title: 'Corporate Meetings',
      description: 'Professional setting for business lunches, team dinners, or client meetings with optional AV equipment.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      icon: <Briefcase size={28} className="text-primary-500" />
    },
    {
      id: 4,
      title: 'Special Occasions',
      description: 'From anniversaries to graduations, let us help you mark life\'s important milestones with exceptional service.',
      image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      icon: <Calendar size={28} className="text-primary-500" />
    }
  ];

  return (
    <>
      {/* Header Section */}
      <section 
        ref={headerRef}
        className="relative py-20 bg-gray-900 text-white"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
            alt="Events header" 
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
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Host Your Event With Us</h1>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-xl mb-8">
              From intimate gatherings to corporate meetings, we provide the perfect setting for your special occasions
            </p>
            <button 
              onClick={toggleReservationPanel}
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-md transition-all hover:shadow-lg transform hover:-translate-y-1"
            >
              Book Your Event
            </button>
          </motion.div>
        </div>
      </section>

      {/* Event Types Section */}
      <section 
        ref={eventTypesRef}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold mb-6 relative inline-block">
              <span className="relative z-10">Our Event Services</span>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary-500"></span>
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 mb-12">
              We cater to a variety of events, providing customized services to make your occasion memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {eventTypes.map((eventType, index) => (
              <motion.div
                key={eventType.id}
                initial={{ opacity: 0, y: 30 }}
                animate={eventTypesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                  <img 
                    src={eventType.image} 
                    alt={eventType.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <div className="flex items-center mb-3">
                    <div className="mr-3">
                      {eventType.icon}
                    </div>
                    <h3 className="text-xl font-medium">{eventType.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{eventType.description}</p>
                  <button 
                    onClick={toggleReservationPanel}
                    className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center"
                  >
                    Inquire Now
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Room Section */}
      <section 
        ref={privateRoomRef}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={privateRoomInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="Private room" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                  <p className="font-medium text-gray-800">Capacity</p>
                  <p className="text-2xl font-bold text-primary-600">Up to 20 guests</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={privateRoomInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-playfair font-bold mb-6 relative">
                <span className="relative z-10">Our Private Room</span>
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-primary-500"></span>
              </h2>
              
              <p className="text-gray-700 mb-6">
                Our elegantly appointed private room offers an intimate setting for special occasions and business meetings,
                accommodating up to 20 guests in comfort and style.
              </p>
              
              <p className="text-gray-700 mb-8">
                The space can be customized to your needs, with flexible seating arrangements, optional AV equipment for 
                presentations, and personalized menu options crafted by our talented chefs.
              </p>
              
              <div className="bg-primary-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-medium mb-4">Private Room Features:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Private entrance and dedicated staff</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Customizable lighting and décor</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Optional AV equipment for presentations</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Personalized menus and beverage packages</span>
                  </li>
                </ul>
              </div>
              
              <button 
                onClick={toggleReservationPanel}
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-md transition-all hover:shadow-lg transform hover:-translate-y-1"
              >
                Reserve Private Room
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section 
        ref={upcomingRef}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold mb-6 relative inline-block">
              <span className="relative z-10">Upcoming Special Events</span>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary-500"></span>
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Join us for these special events at The Cube Restaurant & Café.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={upcomingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="md:flex">
                <div className="md:w-1/3 bg-primary-500 text-white p-6 flex flex-col justify-center items-center">
                  <p className="text-2xl font-bold">June 15</p>
                  <p className="text-sm uppercase">Friday, 7:00 PM</p>
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-medium mb-2">Wine Tasting Night</h3>
                  <p className="text-gray-600 mb-4">
                    Join us for an evening of fine wine tasting featuring selections from South Africa and Tanzania, 
                    paired with artisanal cheeses and appetizers.
                  </p>
                  <p className="text-primary-600 font-medium">Tickets: TSh 45,000 per person</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="md:flex">
                <div className="md:w-1/3 bg-secondary-500 text-white p-6 flex flex-col justify-center items-center">
                  <p className="text-2xl font-bold">June 22</p>
                  <p className="text-sm uppercase">Friday, 8:00 PM</p>
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-medium mb-2">Live Jazz Music</h3>
                  <p className="text-gray-600 mb-4">
                    Enjoy an evening of smooth jazz performed by local musicians, complemented by our special dinner menu 
                    and craft cocktails.
                  </p>
                  <p className="text-primary-600 font-medium">Cover Charge: TSh 15,000 per person</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-accent-500 text-white p-6 flex flex-col justify-center items-center">
                  <p className="text-2xl font-bold">July 10</p>
                  <p className="text-sm uppercase">Saturday, 6:30 PM</p>
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-medium mb-2">Tanzanian Cuisine Night</h3>
                  <p className="text-gray-600 mb-4">
                    Experience the rich flavors of Tanzania with our special menu featuring traditional dishes 
                    from different regions, prepared with a modern twist.
                  </p>
                  <p className="text-primary-600 font-medium">Price: TSh 35,000 per person</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inquire CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">Ready to Plan Your Event?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-primary-100">
            Contact us today to discuss your event needs and let our experienced team create a memorable experience for you and your guests.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={toggleReservationPanel}
              className="bg-white hover:bg-gray-100 text-primary-600 font-medium py-3 px-8 rounded-md transition-all hover:shadow-lg"
            >
              Book Now
            </button>
            <a 
              href="tel:+255766884884"
              className="bg-transparent hover:bg-primary-700 text-white border-2 border-white font-medium py-3 px-8 rounded-md transition-all hover:shadow-lg"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsPage;