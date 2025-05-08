import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { FaSnapchat, FaTiktok, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        document.title = 'Contact Us | The Cube Restaurant & Café';
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form data:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });
            setSubmitted(false);
        }, 3000);
    };

    const [headerRef, headerInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [contactInfoRef, contactInfoInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [formRef, formInView] = useInView({
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
                        src="/images/interior/IMG_9499.PNG"
                        alt="Contact header"
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
                        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Contact Us</h1>
                        <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
                        <p className="text-xl mb-0">
                            We'd love to hear from you. Reach out for reservations, inquiries, or feedback.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info and Form Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div
                            ref={contactInfoRef}
                            initial={{ opacity: 0, x: -30 }}
                            animate={contactInfoInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-playfair font-bold mb-6 relative">
                                <span className="relative z-10">Get in Touch</span>
                                <span className="absolute bottom-0 left-0 w-16 h-1 bg-primary-500"></span>
                            </h2>

                            <div className="space-y-6 mb-12">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary-50 p-3 rounded-full">
                                        <MapPin size={24} className="text-primary-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-lg mb-1">Location</h3>
                                        <p className="text-gray-600">Mindu St, Upanga, Dar es Salaam, Tanzania</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary-50 p-3 rounded-full">
                                        <Phone size={24} className="text-primary-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-lg mb-1">Phone</h3>
                                        <p className="text-gray-600">
                                            <a href="tel:+255712345678" className="hover:text-primary-600 transition-colors">
                                                +255 766 884 884
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary-50 p-3 rounded-full">
                                        <Mail size={24} className="text-primary-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-lg mb-1">Email</h3>
                                        <p className="text-gray-600">
                                            <a href="mailto:info@the-cuberestaurant.com" className="hover:text-primary-600 transition-colors">
                                                info@the-cuberestaurant.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary-50 p-3 rounded-full">
                                        <Clock size={24} className="text-primary-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-lg mb-1">Opening Hours</h3>
                                        <p className="text-gray-600">Every day: 12:00 PM–00:00</p>
                                        <p className="text-gray-600">Fridays: 1:30 PM–00:00</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-12">
                                <h3 className="font-medium text-lg mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://www.snapchat.com/add/thecube.tz"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-100 hover:bg-yellow-400 hover:text-white p-3 rounded-full transition-colors"
                                        aria-label="Snapchat"
                                    >
                                        <FaSnapchat size={20} />
                                    </a>
                                    <a
                                        href="https://www.tiktok.com/@thecube.tz"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-100 hover:bg-black hover:text-white p-3 rounded-full transition-colors"
                                        aria-label="TikTok"
                                    >
                                        <FaTiktok size={20} />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/thecube.tz"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-100 hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white p-3 rounded-full transition-colors"
                                        aria-label="Instagram"
                                    >
                                        <FaInstagram size={20} />
                                    </a>
                                    <a
                                        href="https://twitter.com/thecube_tz"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-100 hover:bg-blue-400 hover:text-white p-3 rounded-full transition-colors"
                                        aria-label="Twitter"
                                    >
                                        <FaTwitter size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="rounded-lg overflow-hidden h-80">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63388.002522159855!2d39.2759514!3d-6.8002205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b826b47a62f%3A0x646e3113e29f7871!2sThe%20cube%20restaurant%20Mindu!5e0!3m2!1sen!2stz!4v1746261901742!5m2!1sen!2stz"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    title="The Cube Restaurant location"
                                ></iframe>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            ref={formRef}
                            initial={{ opacity: 0, x: 30 }}
                            animate={formInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-playfair font-bold mb-6">Send Us a Message</h2>

                                {submitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Message Sent Successfully!</h3>
                                        <p className="text-gray-600">
                                            Thank you for reaching out. We'll get back to you as soon as possible.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Subject *
                                                </label>
                                                <select
                                                    id="subject"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                                                >
                                                    <option value="">Select a subject</option>
                                                    <option value="Reservation">Reservation</option>
                                                    <option value="Private Event">Private Event</option>
                                                    <option value="Feedback">Feedback</option>
                                                    <option value="General Inquiry">General Inquiry</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                                            ></textarea>
                                        </div>

                                        <div>
                                            <button
                                                type="submit"
                                                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center"
                                            >
                                                <Send size={18} className="mr-2" />
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;