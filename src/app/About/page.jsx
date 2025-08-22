'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import './about.css';
import Image from 'next/image';
import ourlogo from '../../../public/logo.jpg'
import yourImage from '../../../public/About/hero.jpeg'; 
import hero from '../../../public/Newfolder/about-1.jpeg';
import image1 from '../../../public/Newfolder/1.png';
import image2 from '../../../public/Newfolder/2.png';
import image3 from '../../../public/Newfolder/3.png';
import image4 from '../../../public/Newfolder/4.png';
import image5 from '../../../public/Newfolder/5.jpeg';
import image6 from '../../../public/Newfolder/6.jpeg';
import LogoMeaning from '../components/ui/logoMeaning';
import {
  FiAnchor, FiPackage, FiCheck, FiAward,
  FiTruck, FiGlobe, FiUsers, FiMapPin,
  FiUser, FiTarget,
  FiShield
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Contrast } from 'lucide-react';
import { FaEye, FaLeaf } from 'react-icons/fa';


// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const serviceItems = [
  {
    Icon: FiAnchor, 
    title: "Coastal Movement",
    desc: "Efficient domestic cargo transport via sea routes",
    bgImage: image1.src, // Use .src for Next.js Image optimization
    iconBg: null,
  },
  {
    Icon: FiPackage,
    title: "Customs Clearance",
    desc: "Handled by in-house professionals for smooth compliance",
    bgImage: image2.src,
    iconBg: null,
  },
  {
    Icon: FiCheck,
    title: "CFS Stuffing",
    desc: "Secure and organized cargo handling",
    bgImage: image5.src,
    iconBg: null,
  },
  {
    Icon: FiAward,
    title: "Marine Insurance",
    desc: "Risk-free shipping and financial security",
    bgImage: image4.src,
    iconBg: null,
  },
  {
    Icon: FiTruck,
    title: "DAP/DDP Shipments",
    desc: "Hassle-free, end-to-end international logistics",
    bgImage: image6.src,
    iconBg: null,
  },
];

const About = () => {
      const [sectionBg, setSectionBg] = useState("url('/Newfolder/3.png')");
  const timeoutRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = (bgImage) => {
    // Clear any pending timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovering(true);
    setSectionBg(`url(${bgImage})`);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Set a delay before reverting to default background
    timeoutRef.current = setTimeout(() => {
      if (!isHovering) {
        setSectionBg("url('/Newfolder/3.png')");
      }
    }, 300); // 300ms delay
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []); 

    return (
  <div className="ario-about">
    <Head>
      <title>About Us | Ario Shipping & Logistics</title>
      <script src="https://animatedicons.co/scripts/embed-animated-icons.js"></script>
      <img src={hero} alt="" />
    </Head>

    {/* HERO BANNER */}

<section 
  className="relative h-[80vh] min-h-[500px] max-h-[800px] overflow-hidden"
  style={{
    clipPath: "ellipse(71% 59% at 50% 40%)",
    WebkitClipPath: "ellipse(71% 59% at 50% 40%)" // Vendor prefix for Safari
  }}
>
  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src={hero}
      alt="Global shipping and logistics"
      fill
      priority
      quality={100}
      className="object-cover"
      style={{ zIndex: 0 }}
    />
  </div>
  
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>
  
  {/* Content Container */}
  <div className="relative h-full flex flex-col justify-center items-center text-center px-4 mx-auto" >
    {/* Main Heading - Fixed size */}
    <motion.h1
      className="text-5xl font-bold mb-6 leading-tight px-2"
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 1.1, 
        type: "spring", 
        bounce: 0.32,
        delay: 0.2
      }}
      style={{
        color: '#fff',
        textShadow: '0 2px 8px rgba(0,0,0,0.6), 0 4px 12px rgba(0,0,0,0.4)'
      }}
    >
      Empowering Global Trade
    </motion.h1>

    {/* Tagline - Fixed size with mobile wrapping */}
    <motion.div
      className="text-xl font-medium mb-8 max-w-[90vw]"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.9,
        delay: 0.45,
        type: "spring",
        bounce: 0.35,
      }}
      style={{
        color: '#fff',
        textShadow: '0 2px 4px rgba(0,0,0,0.5)',
      }}
    >
      <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-2">
        <span className="border-b-2 border-white/80 pb-1">Trust</span>,
        <span className="border-b-2 border-white/80 pb-1">Technology</span>,
        <span className="whitespace-nowrap">
          and <span className="border-b-2 border-white/80 pb-1">Tailored Logistics Solutions</span>
        </span>
      </div>
    </motion.div>
  </div>
</section>

    {/* INTRO SECTION - Glassy, elevated */}
    <motion.section
      className="intro-section glass-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-90px" }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 className="section-title" variants={itemVariants}>
          Our Story
        </motion.h2>
        <div className="content-grid">
          <motion.div className="text-content" variants={itemVariants}>
            <p>
              <b className="lux-highlight">Established in August 2024,</b> Ario
              Shipping & Logistics Pvt. Ltd. has rapidly emerged as a dynamic
              and trusted name in the global logistics and maritime services
              industry. Headquartered in India and backed by an experienced team
              of professionals, Ario Shipping delivers a wide spectrum of
              customized logistics solutions to meet the ever-evolving demands
              of global commerce.
            </p>
            <p>
              <b className="lux-highlight">Our strength:</b> Comprehensive
              logistics and shipping services: Vessel Agency, Freight Forwarding
              (FCL/LCL – Sea &amp; Air for both Export and Import), and NVOCC
              Agency. All powered by agile, tech enabled infrastructure and a
              powerful network of agents and vendors.
            </p>
           
          </motion.div>
          <motion.div
  className="image-content relative w-full h-[300px] md:h-[400px]"
  variants={itemVariants}
  whileHover={{ scale: 1.042, boxShadow: "0 14px 48px #175cff33" }}
>
  <Image
    src={yourImage}
    alt="Ario Shipping & Logistics Services"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover rounded-lg"
    style={{
      borderRadius: "inherit",
    }}
    priority={true} // Ensure image loads quickly on mobile
  />
</motion.div>
        </div>
      </div>
    </motion.section>

      {/* <section 
      className="services-section"
      style={{ 
        backgroundImage: sectionBg,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease' // Smooth transition
      }}
    >
      <div className="container">
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {serviceItems.map(({ Icon, title, desc, bgImage, iconBg }, idx) => (
            <motion.div
              key={title}
              className="service-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setSectionBg(`url(${bgImage})`)}
              onMouseLeave={() => setSectionBg("url('/Newfolder/3.png')")}
            >
              <div className="service-card-overlay"></div>
              <div className="service-card-inner">
                {iconBg ? (
                  <div
                    className="service-icon"
                    style={{ backgroundImage: `url(${iconBg})` }}
                  />
                ) : (
                  <Icon className="service-icon" />
                )}
                <h3 className="service-title">{title}</h3>
                <p className="service-desc">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section> */}
<LogoMeaning />


{/* <div className="relative p-8 bg-white rounded-xl shadow-sm border border-gray-100 mx-auto max-w-xl mt-15">
  <div className="absolute -left-9 top-1/2 transform -translate-y-1/2">
  </div>
  <h3 className="text-xl font-bold text-center text-[#033A7D] mb-3">The Name "Ario"</h3>
  <p className="text-gray-600 mb-2">
    Represents our core duality the Purity of transparent, ethical service and the Warrior spirit we use to overcome any logistical challenge.
  </p>
</div>
 
<div className="hidden md:flex flex-row items-stretch justify-center gap-12 max-w-7xl mx-auto py-8">
 

  

  <div className="w-1/4 space-y-8 flex flex-col justify-center">


 
    <div className="relative p-8 bg-white rounded-xl shadow-sm border border-gray-100 text-right ml-auto max-w-xl">
      <div className="absolute -right-9 top-[45%] transform -translate-y-1/2">
        <div className="w-12 h-[1px] bg-[#033A7D]"></div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#033A7D] border-4 border-white"></div>
      </div>
      <h3 className="text-xl font-bold text-[#033A7D] mb-3">Foundation of Trust (Blue)</h3>
      <p className="text-gray-600 mb-2">
       The deep blue color signifies the trust, professionalism, and unwavering dependability that form the bedrock of our client relationships
      </p>
    </div>

 
    <div className="relative p-8 bg-white rounded-xl shadow-sm border border-gray-100 text-right ml-auto max-w-xs">
      <div className="absolute -right-9 top-[45%] transform -translate-y-1/2">
        <div className="w-12 h-[1px] bg-[#033A7D]"></div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#033A7D] border-4 border-white"></div>
      </div>
      <h3 className="text-xl font-bold text-[#033A7D] mb-3">Total Logistics Coverage (Aqua & White) </h3>
      <p className="text-gray-600 mb-2">
        The vibrant aqua green symbolizes our expertise in Airways and Water Ways, while the integrated white space highlights our seamless connection to Roadways.
      </p>
    </div>
  </div>
   
 
  <div className="w-2/4 flex items-center justify-center px-4 relative">
    <div className="relative">
 
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-full w-[1px] bg-gradient-to-b from-[#00C2CC] via-[#023A7C] to-gray-200"></div>
      </div>
 
    
      
      <Image
        src={ourlogo}
        alt="Ario Shipping & Logistics Services"
        className="max-w-[320px] w-full h-auto relative z-10"
        width={580}
        height={680}
      />
       <div className="relative p-8 bg-white rounded-xl shadow-sm border border-gray-100 text-left mr-auto max-w-xl">
      <div className="absolute -left-9 top-[45%] transform -translate-y-1/2"> 
      </div>
      <h3 className="text-xl font-bold text-[#023A7C] w-[300px]">A Symbol of Progress</h3>
      <p className="text-gray-600 mb-2">
        The icon’s distinct upward trajectory is a visual promise of progress and growth, demonstrating our commitment to elevating our clients' businesses.
      </p>
    </div>
    </div>
  </div>
 
  <div className="w-1/4 space-y-8 flex flex-col justify-center">
 
    <div className="relative p-8 bg-white rounded-xl shadow-sm border border-gray-100 text-left mr-auto max-w-xs">
      <div className="absolute -left-9 top-[45%] transform -translate-y-1/2">
        <div className="w-12 h-[1px] bg-[#023A7C]"></div>
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#023A7C] border-4 border-white"></div>
      </div>
      <h3 className="text-xl font-bold text-[#023A7C] mb-3">Time-Bound Precision</h3>
      <p className="text-gray-600 mb-2">
         The defined parallel lines within the icon represent our dedication to structured, efficient, and time-bound services, ensuring precision and punctuality.
      </p>
    </div>
 
    <div className="relative p-8 bg-white rounded-xl shadow-sm border border-gray-100 text-left mr-auto max-w-xs">
      <div className="absolute -left-9 top-[45%] transform -translate-y-1/2">
        <div className="w-12 h-[1px] bg-[#033A7D]"></div>
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#033A7D] border-4 border-white"></div>
      </div>
      <h3 className="text-xl font-bold text-gray-700 mb-3">Transforming Experience</h3>
      <p className="text-gray-600 mb-2">
        our promise to provide a superior, modern, and progressive logistics partnership.
      </p>
    </div>
  </div>
</div>
 
<div className="md:hidden flex flex-col items-center py-8 px-4">
 
  <div className="mb-8 max-w-[240px] w-full">
    <Image
      src={ourlogo}
      alt="Ario Shipping & Logistics Services"
      className="w-full h-auto"
      width={400}
      height={475}
    />
  </div>
 
  <div className="relative w-[1px] h-full bg-gradient-to-b from-[#00C2CC] via-[#023A7C] to-[#033A7D] my-4" style={{height: 'calc(100% - 2rem)'}}>
 
    <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#033A7D] border-4 border-white -ml-2"></div>
    <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#023A7C] border-4 border-white -ml-2"></div>
    <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#00C2CC] border-4 border-white -ml-2"></div>
    <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#033A7D] border-4 border-white -ml-2"></div>
  </div>

 
  <div className="w-full max-w-xs space-y-8 mt-8">
 
    <div className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-100 text-center">
      <h3 className="text-lg font-bold text-[#033A7D] mb-2">Foundation of Trust (Blue)</h3>
      <p className="text-gray-600 text-sm">
         The deep blue color signifies the trust, professionalism, and unwavering dependability that form the bedrock of our client relationships.
      </p>
    </div>
 
    <div className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-100 text-center">
      <h3 className="text-lg font-bold text-[#023A7C] mb-2">Total Logistics Coverage (Aqua & White)</h3>
      <p className="text-gray-600 text-sm">
       The vibrant aqua green symbolizes our expertise in Airways and Water Ways, while the integrated white space highlights our seamless connection to Roadways.
      </p>
    </div>

 
    <div className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-100 text-center">
      <h3 className="text-lg font-bold text-[#033A7D] mb-2">Time-Bound Precision</h3>
      <p className="text-gray-600 text-sm">
       The defined parallel lines within the icon represent our dedication to structured, efficient, and time-bound services, ensuring precision and punctuality.
      </p>
    </div>

 
    <div className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-100 text-center">
      <h3 className="text-lg font-bold text-gray-700 mb-2">Transforming Experience</h3>
      <p className="text-gray-600 text-sm">
        our promise to provide a superior, modern, and progressive logistics partnership.
      </p>
    </div>

    <div className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-100 text-center">
      <h3 className="text-lg font-bold text-[#033A7D] mb-2">A Symbol of Progress</h3>
      <p className="text-gray-600 text-sm">
       The icon’s distinct upward trajectory is a visual promise of progress and growth, demonstrating our commitment to elevating our clients' businesses
      </p>
    </div>

  </div>
</div>

<div className="border-t border-white space-y-10"></div> */}

    {/* UN NETWORK LUXURY */}
    <section className="network-section">
      <div className="container">
        <motion.div
          className="network-badge"
          initial={{ scale: 0.78, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 105 }}
          viewport={{ once: true }}
        >
          <span role="img" aria-label="globe">
            🌐{" "}
          </span>
          Member of UN Network
        </motion.div>
        <br></br>
        <motion.h2
          className="section-title  "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Global Collaboration and Growth
        </motion.h2>
        <div className="content-grid">
          <motion.div
            className="text-content"
            initial={{ opacity: 0, x: -46 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.63 }}
            viewport={{ once: true }}
          >
            <p>
              <b className="lux-highlight">Proud UN Network member:</b> A
              milestone in operational excellence connecting us to leading
              logistics companies worldwide.
            </p>
            <p>
              This global collaboration opens new avenues in Freight Forwarding,
              NVOCC operations, and cross-border innovation. Together, we drive
              transparency and smarter supply chains.
            </p>
          </motion.div>
          <motion.div
            className="stats-grid"
            initial={{ opacity: 0, x: 44 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="stat-item glass-card"
              whileHover={{ scale: 1.07 }}
            >
              <FiGlobe className="stat-icon" />
              <span className="stat-number">50+</span>
              <span className="stat-label">Global Partners</span>
            </motion.div>
            <motion.div
              className="stat-item glass-card"
              whileHover={{ scale: 1.07 }}
            >
              <FiUsers className="stat-icon" />
              <span className="stat-number">24/7</span>
              <span className="stat-label">Customer Support</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* MISSION / PURPOSE */}
   <section className="mission-section">
  <div className="container">
    <motion.div
      className="mission-cards"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Vision Card - Futuristic Style */}
      <motion.div
        className="mission-card vision-card"
        variants={itemVariants}
        whileHover={{ y: -8, rotateZ: -1 }}
      >
       
        <h3>
          <div className="card-icon-wrapper vision-icon">
            <FaEye  className="card-icon text-white" />
          </div>
          Our Vision
        </h3>
        <p>
          <span className="lux-highlight">
            To be the premier global shipping and logistics service provider, delivering exceptional customer experience through expertise and innovation.
          </span>
        </p>
        <div className="card-decoration vision-decoration"></div>
      </motion.div>

      {/* Mission Card - Dynamic Style */}
      <motion.div
        className="mission-card mission-card-main"
        variants={itemVariants}
        whileHover={{ y: -8, rotateZ: 1 }}
      >
       
        <h3>
          <div className="card-icon-wrapper mission-icon">
            <FiTarget className="card-icon text-white" />
          </div>
          Our Mission
        </h3>
        <p>
          <span className="lux-highlight">
            Connecting business worldwide through tailor made solutions with precision, agility and personalized support
          </span>
        </p>
        <div className="card-decoration mission-decoration"></div>
      </motion.div>

      {/* Purpose Card - Organic Style */}
      <motion.div
        className="mission-card purpose-card"
        variants={itemVariants}
        whileHover={{ y: -8 }}
      >
       
        <h3>
          <div className="card-icon-wrapper purpose-icon">
            <FiGlobe className="card-icon text-white" />
          </div>
          Our Purpose
        </h3>
        <p>
          <span className="lux-highlight">
            Strong collaborations for stakeholder success.
          </span>
        </p>
   
      </motion.div>
    </motion.div>
  </div>
</section>


    {/* VALUES */}
    <section className="values-section">
  <div className="container">
    <motion.h2
      className="section-title"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Our Core Values
    </motion.h2>
    <motion.div
      className="values-grid grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="value-card glass-card p-4 md:p-6"
        variants={itemVariants}
        whileHover={{ y: -9 }}
      >
        <div className="value-icon text-xl md:text-2xl mb-3 md:mb-4">
          <FiUsers />
        </div>
        <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Customer</h3>
        <p className="text-sm md:text-base">
          Our competent people are focused on delivering solutions most effectively,
          consistently and as promised, creating delightful customer experience.
        </p>
      </motion.div>
      
      <motion.div
        className="value-card glass-card p-4 md:p-6"
        variants={itemVariants}
        whileHover={{ y: -9 }}
      >
        <div className="value-icon text-xl md:text-2xl mb-3 md:mb-4">
          <FiAward />
        </div>
        <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Excellence</h3>
        <p className="text-sm md:text-base">
          Excellence for us is a journey and continuous improvement of people, 
          processes and systems are central to achieving this.
        </p>
      </motion.div>
      
      <motion.div
        className="value-card glass-card p-4 md:p-6"
        variants={itemVariants}
        whileHover={{ y: -9 }}
      >
        <div className="value-icon text-xl md:text-2xl mb-3 md:mb-4">
          <FiShield />
        </div>
        <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Trust</h3>
        <p className="text-sm md:text-base">
          We believe in the power of trust in building relationship and we have 
          an unwavering commitment to long term stakeholder relationship.
        </p>
      </motion.div>
      
      <motion.div
        className="value-card glass-card p-4 md:p-6"
        variants={itemVariants}
        whileHover={{ y: -9 }}
      >
        <div className="value-icon text-xl md:text-2xl mb-3 md:mb-4">
          <FaLeaf />
        </div>
        <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Sustainability</h3>
        <p className="text-sm md:text-base">
          We recognize the urgency of climate health and are committed to 
          building a sustainable and planet sensitive long term business.
        </p>
      </motion.div>
    </motion.div>
  </div>
</section>

  {  /* PARTNERS */}
    {/* CLIENT NETWORK SECTION */}
<section className="client-network-section py-20 bg-gradient-to-b from-blue-50 to-white">
  <div className="container mx-auto px-4">
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#003980] mb-4">
        Our Trusted Network
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Collaborating with industry leaders to deliver exceptional service
      </p>
    </motion.div>

    {/* Logo Grid */}
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {[
        { src: '/carousel/ario_1.png', alt: 'Client 1' },
        { src: '/carousel/ario_2.png', alt: 'Client 2' },
        { src: '/carousel/ario_3.png', alt: 'Client 3' },
        { src: '/carousel/ario_4.png', alt: 'Client 4' },
        { src: '/carousel/ario_5.png', alt: 'Client 5' },
        { src: '/carousel/ario_6.png', alt: 'Client 6' },
        { src: '/carousel/ario_7.png', alt: 'Client 7' },
        { src: '/carousel/ario_8.png', alt: 'Client 8' },
        { src: '/carousel/ario_9.png', alt: 'Client 9' },

      ].map((client, index) => (
        <motion.div
          key={index}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center h-40"
          variants={itemVariants}
          whileHover={{ 
            y: -8,
            boxShadow: "0 10px 25px -5px rgba(0, 58, 128, 0.1)"
          }}
        >
          <Image
            src={client.src}
            alt={client.alt}
            width={160}
            height={80}
            unoptimized = {true}
            className="object-contain h-auto max-h-40 w-auto  transition-all duration-300"
          />
        </motion.div>
      ))}
    </motion.div>
    
    
  </div>
</section>



    {/* LEADERSHIP */}
    <section className="leadership-section">
  <div className="container max-w-6xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.63 }}
        viewport={{ once: true }}
      >
        Leadership Team
      </motion.h2>
      
      <motion.p
        className="text-xl text-[#003980] font-medium mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.72, delay: 0.24 }}
        viewport={{ once: true }}
      >
        Guided by Vision, Driven by Expertise
      </motion.p>

<div className="flex justify-center mb-12">
  <motion.div
    className="bg-blue-50 p-8 rounded-xl border border-blue-100 shadow-md w-full max-w-2xl"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.48 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="flex items-center mb-4">
      <div className="bg-[#003980] text-white p-2 rounded-lg mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-[#003980]">Ario Pro: Our Leadership Philosophy</h3>
    </div>
    
    <p className="text-gray-700 mb-6 leading-relaxed text-left text-lg">
      At the core of our philosophy is <span className="font-bold text-[#003980]">"Ario Pro"</span> - our promise of professionalism, reliability, and personalized excellence.
    </p>
    
    <ul className="space-y-4">
      {[
        "End-to-end logistics, detailed and dedicated",
        "Transparent, proactive, and timely in every engagement",
        "Not just moving cargo - building trust for long-term partnerships"
      ].map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-[#003980] mr-3 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </span>
          <span className="text-gray-700 text-lg">{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
</div>
      {/* Improved Leadership Names List */}
      <motion.div
        className="mt-6 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.72, delay: 0.36 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900">Ms. Anita Nair</h3>
            <p className="text-gray-600">Director</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900">Ms. Tarannum Falke</h3>
            <p className="text-gray-600">Manager Sales and Marketing</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900">Mr. Mohit Chhablani</h3>
            <p className="text-gray-600">Executive - Sales & Marketing</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900">Ms. Minal Lokhande</h3>
            <p className="text-gray-600">Executive - Finance & Accounts</p>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Rest of the content remains the same */}
   
 
    {/* Expansion Section */}
    <motion.div
      className="bg-white p-8 rounded-xl shadow-md border border-gray-100 mb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.55 }}
      viewport={{ once: true }}
    >
      <motion.h3
        className="text-2xl font-bold text-gray-900 mb-4"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Strategic Presence & Regional Expansion
      </motion.h3>
      
      <motion.p
        className="text-gray-700 mb-8 leading-relaxed"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Since incorporation in 2024, Ario Shipping has grown under
        forward-thinking leaders with deep expertise and market
        awareness.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          {
            label: "Mumbai",
            desc: "Corporate headquarters in India's financial capital",
          },
          {
            label: "Mundra",
            desc: "Key port location in Gujarat trade belt",
          },
          {
            label: "North India",
            desc: "Connecting to ICDs for inland reach",
          },
          { 
            label: "Cochin", 
            desc: "Base for South Indian market" 
          },
        ].map(({ label, desc }, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            <div className="text-[#003980] mb-3">
              <FiMapPin className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-lg text-gray-900 mb-2">{label}</h4>
            <p className="text-gray-600">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </div>
</section>
    {/* CTA SECTION */}
    <motion.section
    className="cta-section"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.63 }}
    viewport={{ once: true }}
  >
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.67 }}
        viewport={{ once: true }}
      >
        Ready to experience the Ario difference?
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.68, delay: 0.18 }}
        viewport={{ once: true }}
      >
        Partner with Ario Shipping & Logistics Pvt. Ltd. for world-class
        shipping, innovation, and trust.
      </motion.p>

      <Link href="/contact" passHref legacyBehavior>
        <motion.a
          className="cta-button"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.36,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.07,
            boxShadow: "0 0 20px 5px rgba(255, 215, 107, 0.67), 0 0 40px 14px rgba(23, 92, 255, 0.47)",
          }}
          whileTap={{ 
            scale: 0.98,
            boxShadow: "0 0 10px 2px rgba(255, 215, 107, 0.5)"
          }}
        >
          Contact Our Team
        </motion.a>
      </Link>
    </div>
  </motion.section>
  </div>

    );
  }
export default About;
