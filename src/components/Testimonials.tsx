import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  comment: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Maria Johnson',
    role: 'Local Resident',
    rating: 5,
    comment: 'The Cube has become my go-to place in Dar es Salaam. Their Swahili Coconut Curry is absolutely divine, and the atmosphere is perfect for both casual dining and special occasions.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    name: 'Udoddy',
    role: 'Food Lover',
    rating: 4,
    comment: 'The Cube ndo penyewe bwana! Msosi wa kushiba na Mtamu😋',
    image: 'https://images.pexels.com/photos/6975060/pexels-photo-6975060.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Business Traveler',
    rating: 5,
    comment: 'As someone who travels to Tanzania frequently for work, The Cube always delivers an exceptional dining experience. Their private room is perfect for business meetings too!',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 4,
    name: 'Sarah Mbeki',
    role: 'Food Blogger',
    rating: 4,
    comment: 'The fusion of international techniques with local Tanzanian flavors makes The Cube stand out in Dar es Salaam\'s dining scene. Their presentation is as impressive as their taste.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 5,
    name: 'Michael Wong',
    role: 'Tourist',
    rating: 5,
    comment: 'We discovered The Cube during our vacation in Tanzania and ended up going back three times! The staff made us feel welcome, and the food was consistently excellent.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section ref={ref} className="py-20 bg-gray-50 swahili-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold mb-6 relative inline-block">
            <span className="relative z-10">What Our Guests Say</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary-500"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Don't just take our word for it - hear what our valued guests have to say about their dining experience at The Cube.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="testimonial-slider"
        >
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-3 pb-6">
                <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic flex-grow">{testimonial.comment}</p>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;