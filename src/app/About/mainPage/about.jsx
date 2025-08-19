import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import aboutHero from '../../../../public/About/about_hero.png';
import { motion } from 'framer-motion';
import Link from 'next/link';

function About() {
  const [counters, setCounters] = useState({
    quality: 0,
    countries: 0,
    clients: 0,
    shipments: 0
  });

  const [hasCounted, setHasCounted] = useState(false); // Track if counting has started

  const targetValues = {
    quality: 100,       
    countries: 24,
    clients: 200,        
    shipments: 5000      
  };

  useEffect(() => {
    if (!hasCounted) return; // Only run if counting has been triggered
    
    const duration = 3000;  
    const interval = 50;    
    const steps = duration / interval;
    
    const animationInterval = setInterval(() => {
      setCounters(prev => ({
        quality: Math.min(prev.quality + (targetValues.quality / steps), targetValues.quality),
        countries: Math.min(prev.countries + (targetValues.countries / steps), targetValues.countries),
        clients: Math.min(prev.clients + (targetValues.clients / steps), targetValues.clients),
        shipments: Math.min(prev.shipments + (targetValues.shipments / steps), targetValues.shipments)
      }));
    }, interval);

    return () => clearInterval(animationInterval);
  }, [hasCounted]); // Dependency on hasCounted

  return (
    <div>
      <section className="bg-gray-100 py-12 sm:py-16 lg:py-24 relative overflow-hidden mt-15" id="about-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6"
              >
                Ario Shipping & Logistics Pvt. Ltd.
                <br className="hidden sm:block" />
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              >
                We redefine the standards of shipping and logistics with seamless, end-to-end supply chain solutions tailored to your business needs. As a trusted logistics provider, we combine efficiency, expertise, and global reach to deliver excellence in every shipment, across land, air, and sea.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              >
                With years of experience and an unwavering commitment to customer satisfaction, we stand as a one-stop solution for all your logistics requirements right from freight forwarding and customs clearance to domestic coastal movement and marine insurance.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link href="/About" passHref>
                  <button className="bg-[#00397D] hover:bg-[#00397D] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </Link>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 max-w-sm mx-auto lg:max-w-none">
                <Image 
                  src={aboutHero} 
                  alt="Ario Shipping & Logistics"
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Counter Section - Modified to trigger counting on view */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            onViewportEnter={() => setHasCounted(true)} // Trigger counting when component enters viewport
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }} // Only trigger once and with -100px margin
            className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100">
              <h3 className="text-4xl sm:text-5xl font-bold text-[#00397D] mb-2">
                {Math.floor(counters.quality)}%
              </h3>
              <p className="text-gray-600 font-medium">Quality Assurance</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100">
              <h3 className="text-4xl sm:text-5xl font-bold text-[#00397D] mb-2">
                {Math.floor(counters.countries)}+
              </h3>
              <p className="text-gray-600 font-medium">Countries Served</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100">
              <h3 className="text-4xl sm:text-5xl font-bold text-[#00397D] mb-2">
                {Math.floor(counters.clients)}+
              </h3>
              <p className="text-gray-600 font-medium">Satisfied Clients</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100">
              <h3 className="text-4xl sm:text-5xl font-bold text-[#00397D] mb-2">
                {Math.floor(counters.shipments).toLocaleString()}+
              </h3>
              <p className="text-gray-600 font-medium">Successful Volume</p>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="hidden lg:block absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-blue-500 opacity-10"></div>
        <div className="hidden lg:block absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-500 opacity-10"></div>
      </section>
    </div>
  );
}

export default About;