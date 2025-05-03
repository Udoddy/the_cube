import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const DeliveryCTA: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary-50 rounded-xl p-8 sm:p-10 shadow-sm overflow-hidden"
        >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    {/* Video Container */}
                    <div className="relative w-24 h-24 flex-shrink-0">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-contain"
                        >
                            <source src="/images/illustrations/courier.mov" type="video/quicktime" />
                            {/* Fallback for browsers that don't support .mov */}
                            <source src="/images/illustrations/courier.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-gray-900">Fast Food Delivery</h3>
                        <p className="text-gray-600">Get your favorite meals delivered to your doorstep</p>
                    </div>
                </div>

                <a
                    href="tel:+255766884884"
                    className="flex items-center gap-3 bg-primary-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary-600 transition-all transform hover:-translate-y-1 min-w-[220px] justify-center"
                >
                    <Phone size={2} />
                    <span className="font-medium">+255 766 884 884</span>
                </a>
            </div>
        </motion.div>
    );
};

export default DeliveryCTA;