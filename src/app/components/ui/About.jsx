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

export default function AboutUsSection() {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  // Use once: true for smoother animation and less CPU overhead on repeated scrolls
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });

  // Parallax effect for decorative elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -34]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 34]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -12]);

  // Memoize services and stats to avoid re-creating on each render
  const services = useMemo(
    () => [
      {
        icon: <Ship className="w-6 h-6" />,
        secondaryIcon: (
          <TrendingUp className="w-4 h-4 absolute -top-1 -right-1 text-blue-300" />
        ),
        title: "Freight Forwarding",
        description:
          "FCL/LCL services across sea and air routes with reliable space availability and competitive pricing for all export and import shipments.",
        position: "left",
      },
      {
        icon: <Anchor className="w-6 h-6" />,
        secondaryIcon: (
          <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-blue-300" />
        ),
        title: "Coastal Movement",
        description:
          "Efficient and environmentally friendly coastal movement services for heavy and bulk cargo, reducing transit time and costs.",
        position: "left",
      },
     
      {
        icon: <Package className="w-6 h-6" />,
        secondaryIcon: (
          <TrendingUp className="w-4 h-4 absolute -top-1 -right-1 text-blue-300" />
        ),
        title: "CFS Stuffing",
        description:
          "Safe and organized cargo consolidation with secure packing, proper labeling, and thorough documentation.",
        position: "right",
      },
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        secondaryIcon: (
          <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-blue-300" />
        ),
        title: "Marine Insurance",
        description:
          "Comprehensive coverage protecting your cargo against unforeseen risks during transit by sea, air, or land.",
        position: "right",
      },
     ,
    ],
    []
  );

  const stats = useMemo(
    () => [
      { icon: <Award />, value: 5000, label: "Containers Shipped", suffix: "+" },
      { icon: <Users />, value: 1200, label: "Happy Clients", suffix: "+" },
      { icon: <Calendar />, value: 15, label: "Years Experience", suffix: "+" },
      { icon: <TrendingUp />, value: 98, label: "Satisfaction Rate", suffix: "%" },
    ],
    []
  );

  return (
    <section
      id="about-section"
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
            className="text-blue-600 font-medium mb-2 flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", mass: 1.1, duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4" />
            YOUR TRUSTED LOGISTICS PARTNER
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-center">
            About Ario Shipping
          </h2>
          <motion.div
            className="w-24 h-1 bg-blue-600"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.6 }}
          ></motion.div>
        </motion.div>

        <motion.p
          className="text-center max-w-2xl mx-auto mb-16 text-blue-900/80"
          variants={itemVariants}
        >
          We redefine the standards of shipping and logistics with seamless, end-to-end
          supply chain solutions tailored to your business needs. Combining efficiency,
          expertise, and global reach to deliver excellence in every shipment, across
          land, air, and sea.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Left Column */}
          <div className="space-y-16">
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
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
                  src="/about/about-hero.png"
                  alt="Ario Shipping & Logistics"
                  width={1200}  // Set actual dimensions
                  height={630}
                  className="w-full h-auto object-cover"
                  priority={true} // If it's above-the-fold
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent flex items-end justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <motion.button
                    className="bg-white text-blue-900 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium"
                    whileHover={{
                      scale: 1.045,
                      transition: { type: "spring", stiffness: 80, damping: 9 },
                    }}
                    whileTap={{ scale: 0.97, transition: { duration: 0.09 } }}
                  >
                    Our Services <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute inset-0 border-4 border-blue-300 rounded-md -m-3 z-[-1]"
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
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 bg-blue-900 text-white p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ type: "spring", stiffness: 54, damping: 13, duration: 0.8, delay: 0.5 }}
        >
          <div className="flex-1">
            <h3 className="text-2xl font-medium mb-2">Ready to transform your logistics?</h3>
            <p className="text-white/80">Let's create something efficient together.</p>
          </div>
          <motion.button
            className="bg-blue-600 hover:bg-blue-600/90 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-colors"
            whileHover={{
              scale: 1.045,
              transition: { type: "spring", stiffness: 80, damping: 9 },
            }}
            whileTap={{ scale: 0.97, transition: { duration: 0.09 } }}
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ---- ServiceItem: Add smooth hover and entry motion ----
function ServiceItem({ icon, secondaryIcon, title, description, variants, delay, direction }) {
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

// ---- StatCounter: Springy, smooth Stat counter ----
function StatCounter({ icon, value, label, suffix, delay }) {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(0, {
    stiffness: 38,
    damping: 10,
    mass: 1.2,
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value);
      setHasAnimated(true);
    }
    // Removed resetting on leaving viewport to prevent lag and flicker
  }, [isInView, value, springValue, hasAnimated]);

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  return (
    <motion.div
      className="bg-white/50 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center group hover:bg-white transition-colors duration-300"
      variants={{
        hidden: { opacity: 0, y: 22 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 50, duration: 0.61, delay },
        },
      }}
      whileHover={{ y: -5, scale: 1.028, transition: { duration: 0.22 } }}
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-200 transition-colors duration-300"
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
      >
        {icon}
      </motion.div>
      <motion.div ref={countRef} className="text-3xl font-bold text-blue-900 flex items-center">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-blue-900/70 text-sm mt-1">{label}</p>
      <motion.div className="w-10 h-0.5 bg-blue-600 mt-3 group-hover:w-16 transition-all duration-300" />
    </motion.div>
  );
}
