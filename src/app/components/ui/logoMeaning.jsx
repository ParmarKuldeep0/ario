"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import {
  Ship,
  Plane,
  Globe,
  Anchor,
  ShieldCheck,
  FileText,
  Package,
  Box,
  Truck,
  CheckCircle,
  ArrowRight,
  Zap,
  TrendingUp,
  Award,
  Users,
  Calendar,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
} from "framer-motion";

// --- Motion variants with smoothing springs ---
const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 54,
      damping: 12.5,
      staggerChildren: 0.18,
      delayChildren: 0.22,
    },
  },
};
const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 62,
      damping: 15,
      duration: 0.65,
      ease: [0.39, 0.575, 0.565, 1],
    },
  },
};

export default function WhyChooseUsSection() {
  const sectionRef = useRef(null);

  // Use once: true for smoother animation and less CPU overhead on repeated scrolls
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Parallax effect for decorative elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -34]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 34]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -12]);

  // Memoize services to avoid re-creating on each render
  const benefits = useMemo(
    () => [
      {
        
        title: "Foundation of Trust (Blue)",
        description:
          " The deep blue color signifies the trust, professionalism, and unwavering dependability that form the bedrock of our client relationships.",
        position: "left",
      },
      {
       
        title: "Total Logistics Coverage (Aqua & White)",
        description:
          "The vibrant aqua green symbolizes our expertise in Airways and Water Ways, while the integrated white space highlights our seamless connection to Roadways.",
        position: "left",
      },
      {
        
        title: "Time-Bound Precision",
        description:
          "The defined parallel lines within the icon represent our dedication to structured, efficient, and time-bound services, ensuring precision and punctuality.",
        position: "right",
      },
      {
        
        title: "Transforming Experience",
        description:
          "our promise to provide a superior, modern, and progressive logistics partnership.",
        position: "right",
      },
      {
        
        title: "A Symbol of Progress",
        description:
          "The icon’s distinct upward trajectory is a visual promise of progress and growth, demonstrating our commitment to elevating our clients' businesses.",
        position: "bottom",
      }
    ],
    []
  );

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className="w-full py-24 px-4 bg-gradient-to-b from-blue-50 to-white text-blue-900 overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-200/5 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
        transition={{ type: "spring", stiffness: 33, damping: 18 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-300/5 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
        transition={{ type: "spring", stiffness: 33, damping: 18 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-blue-600/30"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-blue-400/30"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col items-center mb-6"
          variants={itemVariants}
        >
           
           <h2 className="text-3xl font-bold text-[#00397D] mb-4">The Name "Ario" </h2>
         
         
          <motion.div
            className="w-24 h-1 bg-[#00397D]"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.6 }}
          ></motion.div>
        </motion.div>

        <motion.p
          className="text-center max-w-2xl mx-auto mb-16 text-[#00397D]"
          variants={itemVariants}
        >
           Represents our core duality the Purity of transparent, ethical service and the Warrior spirit we use to overcome any logistical challenge.

        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Left Column */}
          <div className="space-y-16">
            {benefits
              .filter((benefit) => benefit.position === "left")
              .map((benefit, index) => (
                <BenefitItem
                  key={`left-${index}`}
  
                  title={benefit.title}
                  description={benefit.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>

          {/* Center Image */}
           
                <Image
                  src="/logo-1.png"
                  alt="Ario Shipping Advantages"
                  width={250}
                  height={50}
                  className=" h-[350px]  mx-auto"
                />
              

          {/* Right Column */}
          <div className="space-y-16">
            {benefits
              .filter((benefit) => benefit.position === "right")
              .map((benefit, index) => (
                <BenefitItem
                  key={`right-${index}`}
                   
                  title={benefit.title}
                  description={benefit.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>

        {/* CTA Section */}
        
       {/* Bottom benefit item - visible on all screens */}
<div className="flex justify-center mt-12 md:mt-16">
  {benefits
    .filter((benefit) => benefit.position === "bottom")
    .map((benefit, index) => (
      <BenefitItem
        key={`bottom-${index}`}
        icon={benefit.icon}
        secondaryIcon={benefit.secondaryIcon}
        title={benefit.title}
        description={benefit.description}
        variants={itemVariants}
        delay={index * 0.2}
        direction="center"
        className="max-w-md text-center"
      />
    ))}
</div>
      </motion.div>
    </section>
  );
}

// ---- BenefitItem: Add smooth hover and entry motion ----
// ---- BenefitItem: Add smooth hover and entry motion ----
function BenefitItem({ 
  icon, 
  secondaryIcon, 
  title, 
  description, 
  variants, 
  delay, 
  direction,
  className = "" 
}) {
  return (
    <motion.div
      className={`flex flex-col group ${className}`} // Added className here
      variants={variants}
      transition={{ delay, type: "spring", stiffness: 44, damping: 12 }}
      whileHover={{ y: -7, scale: 1.02, transition: { duration: 0.27 } }}
    >
      <motion.div
        className="flex items-center gap-3 mb-3 justify-center" // Added justify-center
        initial={{ x: direction === "left" ? -20 : direction === "right" ? 20 : 0, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 57, damping: 13, duration: 0.6, delay: delay + 0.22 }}
      >
         
       <h3 className="text-xl font-medium text-blue-900 text-center sm:text-left group-hover:text-blue-600 transition-colors duration-300">
  {title}
</h3>

      </motion.div>
      <motion.p
        className="text-sm text-blue-900/80 leading-relaxed px-4 text-center" // Changed from pl-12 to px-4 and added text-center
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.44, delay: delay + 0.33 }}
      >
        {description}
      </motion.p>
      <motion.div
        className="mt-3 flex items-center text-blue-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 justify-center" // Removed pl-12, added justify-center
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
      >
        <span className="flex items-center gap-1">
          Learn more <ArrowRight className="w-3 h-3" />
        </span>
      </motion.div>
    </motion.div>
  );
}