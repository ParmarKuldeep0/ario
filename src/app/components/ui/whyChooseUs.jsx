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
        icon: <Ship className="w-6 h-6" />,
        secondaryIcon: (
          <TrendingUp className="w-4 h-4 absolute -top-1 -right-1 text-blue-300" />
        ),
        title: "Integrated Logistics Expertise",
        description:
          "A full spectrum of logistics services under one roof.",
        position: "left",
      },
      {
        icon: <Anchor className="w-6 h-6" />,
        secondaryIcon: (
          <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-blue-300" />
        ),
        title: "Global Network",
        description:
          "Strong connections with carriers, agents, and customs across key global markets.",
        position: "left",
      },
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        secondaryIcon: (
          <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-blue-300" />
        ),
        title: "Customer-Centric Approach",
        description:
          "Tailored solutions that align with your supply chain goals.",
        position: "right",
      },
      {
        icon: <Package className="w-6 h-6" />,
        secondaryIcon: (
          <TrendingUp className="w-4 h-4 absolute -top-1 -right-1 text-blue-300" />
        ),
        title: "Technology-Drivens",
        description:
          "Real-time tracking and smart logistics tools to keep you in control.",
        position: "right",
      },
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
          <motion.span
            className="text-[#00397D] font-medium mb-2 flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", mass: 1.1, duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4" />
            WHY CHOOSE ARIO
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-center">
            Our Competitive Advantages
          </h2>
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
          We stand out in the logistics industry through our commitment to excellence,
          innovative solutions, and customer-first approach that delivers measurable results.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Left Column */}
          <div className="space-y-16">
            {benefits
              .filter((benefit) => benefit.position === "left")
              .map((benefit, index) => (
                <BenefitItem
                  key={`left-${index}`}
                  icon={benefit.icon}
                  secondaryIcon={benefit.secondaryIcon}
                  title={benefit.title}
                  description={benefit.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div className="relative w-full max-w-l" style={{height: "300px"}} variants={itemVariants}>
              <motion.div
                className="rounded-md overflow-hidden shadow-xl h-full"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 58,
                  damping: 13,
                  duration: 0.8,
                  delay: 0.3,
                }}
                whileHover={{ scale: 1.025, transition: { duration: 0.24 } }}
              >
                <Image
                  src="/About/image.png"
                  alt="Ario Shipping Advantages"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 border-4 border-[#14E7D4] rounded-md -m-3 z-[-1]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 40, damping: 17, duration: 0.8, delay: 0.6 }}
              ></motion.div>
              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-8 w-16 h-16 rounded-full bg-blue-600/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 21, damping: 14, duration: 1, delay: 0.9 }}
                style={{ y: y1 }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full bg-blue-400/15"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 21, damping: 14, duration: 1, delay: 1.1 }}
                style={{ y: y2 }}
              ></motion.div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-16">
            {benefits
              .filter((benefit) => benefit.position === "right")
              .map((benefit, index) => (
                <BenefitItem
                  key={`right-${index}`}
                  icon={benefit.icon}
                  secondaryIcon={benefit.secondaryIcon}
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
        
      </motion.div>
    </section>
  );
}

// ---- BenefitItem: Add smooth hover and entry motion ----
function BenefitItem({ icon, secondaryIcon, title, description, variants, delay, direction }) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay, type: "spring", stiffness: 44, damping: 12 }}
      whileHover={{ y: -7, scale: 1.02, transition: { duration: 0.27 } }}
    >
      <motion.div
        className="flex items-center gap-3 mb-3"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 57, damping: 13, duration: 0.6, delay: delay + 0.22 }}
      >
        <motion.div
          className="text-blue-600 bg-blue-100 p-3 rounded-lg transition-colors duration-300 group-hover:bg-blue-200 relative"
          whileHover={{ rotate: [0, -7, 7, -3, 0], transition: { duration: 0.45, ease: "easeInOut" } }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="text-xl font-medium text-blue-900 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm text-blue-900/80 leading-relaxed pl-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.44, delay: delay + 0.33 }}
      >
        {description}
      </motion.p>
      <motion.div
        className="mt-3 pl-12 flex items-center text-blue-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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