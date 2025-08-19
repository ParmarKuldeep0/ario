'use client';

import React, { useState, useMemo, memo } from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, ArrowRight } from 'lucide-react';
import freight from '../../../../public/Products/freight.png';
import CFS from '../../../../public/Products/CFS.png';
import costal from '../../../../public/Products/costal.png';
import custom from '../../../../public/Products/custom.png';
import insurance from '../../../../public/Products/insurance.png';
import nvocc from '../../../../public/Products/nvocc.png';
import shipments from '../../../../public/Products/shipments.png';
import pallet from '../../../../public/Products/Palletization.png';
import vessel from '../../../../public/Products/vessel.png';
import fumigation from '../../../../public/Products/fumigation.png';
import transportation from '../../../../public/Products/transportation.png';
import Image from 'next/image';
import Link from 'next/link'; 

// Utility function for className merging
const cn = (...classes) => classes.filter(Boolean).join(' ');

// Memoized TextShimmer Component
const TextShimmer = memo(({
  children,
  as: Component = 'p',
  className,
  duration = 2,
  spread = 2,
}) => {
  const MotionComponent = motion(Component);
  const dynamicSpread = useMemo(() => children.length * spread, [children, spread]);

  return (
    <MotionComponent
      className={cn(
        'relative inline-block bg-[length:250%_100%,auto] bg-clip-text',
        'text-transparent [--base-color:#a1a1aa] [--base-gradient-color:#000]',
        '[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))] [background-repeat:no-repeat,padding-box]',
        'dark:[--base-color:#71717a] dark:[--base-gradient-color:#ffffff] dark:[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]',
        className
      )}
      initial={{ backgroundPosition: '100% center' }}
      animate={{ backgroundPosition: '0% center' }}
      transition={{
        repeat: Infinity,
        duration,
        ease: 'linear',
      }}
      style={{
        '--spread': `${dynamicSpread}px`,
        backgroundImage: `var(--bg), linear-gradient(var(--base-color), var(--base-color))`,
      }}
    >
      {children}
    </MotionComponent>
  );
});

// Memoized ProductCard Component
const ProductCard = memo(({ product, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    },
  }), [index]);

  const imageVariants = useMemo(() => ({
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }), []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="overflow-hidden rounded-lg border border-gray-200/50 bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 dark:border-gray-800/50 dark:bg-gray-900/50">
        <div className="relative overflow-hidden">
          <motion.div 
            className="w-full h-64 relative overflow-hidden"
            variants={imageVariants}
            initial="hidden"
            animate={imageLoaded ? "visible" : "hidden"}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              onLoadingComplete={() => setImageLoaded(true)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 4}
            />
          </motion.div>
          
          <span className="absolute top-3 left-3 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white/80 text-gray-900 hover:bg-white/90 dark:bg-gray-900/80 dark:text-gray-50 dark:hover:bg-gray-900/90 backdrop-blur-sm">
            {product.name}
          </span>

            <Link href={`/services/${product.slug}`} passHref>
  {/* Overlay fade-in effect (slightly more visible) */}
  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
  
  {/* Slide-up button with smooth shadow and scaling */}
  <div className="absolute bottom-3 left-3 right-3 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-out">
    <button className="
      w-full inline-flex items-center justify-center 
      rounded-md text-sm font-medium transition-all 
      focus-visible:outline-none focus-visible:ring-2 
      focus-visible:ring-primary/70 focus-visible:ring-offset-2 
      disabled:opacity-50 disabled:pointer-events-none 
      ring-offset-background 
      bg-gradient-to-r from-primary to-primary/90 
      text-white hover:from-primary/90 hover:to-primary 
      shadow-md hover:shadow-lg
      h-10 py-2 px-4
      hover:scale-[1.02] active:scale-95
    ">
      View Details
      <ArrowRight className="ml-2 h-4 w-4 opacity-80 group-hover:translate-x-1 transition-transform" />
    </button>
  </div>
  
</Link>
        </div>

        <div className="p-6 bg-[#4175ff]">
          <div className="space-y-2">
            <p className="text-sm text-white uppercase tracking-wide dark:text-white">
              {product.category}
            </p>
            <p className="text-sm text-white line-clamp-2 dark:text-white">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

// Memoized ProductSection Component
const ProductSection = memo(({
  title = "Featured Services",
  subtitle = "Discover our handpicked selection of premium Services",
  products = [],
  showViewAll = true,
}) => {
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }), []);

  const headerVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }), []);

  return (
    <section className="   py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 md:mb-16"
        >
          <TextShimmer
            as="h2"
            className="text-3xl md:text-5xl font-bold mb-4"
            duration={3}
          >
            {title}
          </TextShimmer>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* First row - 4 images */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {products.slice(0, 4).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>

          {/* Second row - 4 images */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {products.slice(4, 8).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index + 4} />
            ))}
          </motion.div>

          {/* Third row - 2 centered images */}
          <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl lg:mx-auto gap-6"
        >
          {products.slice(8, 11).map((product, index) => (
            <ProductCard key={product.id} product={product} index={index + 8} />
          ))}
        </motion.div>
        </div>

        {showViewAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          />
        )}
      </div>
    </section>
  );
});

// Default products data
const defaultProducts = [
  {
    id: 1,
    name: "NVOCC Agency",
    slug: "nvocc-agency",
    description: "Reliable Non-Vessel Operating Common Carrier (NVOCC) services with global connectivity and local expertise. We handle container booking, documentation, and end-to-end cargo movement for smooth, cost-effective logistics solutions.",
     
    image: nvocc,
  },
   {
    id: 9,
    name: "Vessel Agency",
    slug: "vessel-agency",
    description: "Professional vessel agency services at Indian ports, covering berthing, cargo handling, customs formalities, and crew assistance with 24/7 operations for quick turnaround.",
    
    image: vessel,
  },
  {
    id: 2,
    name: "Freight Forwarding",
    slug: "freight-forwarding",
    description: "Expertise in FCL/LCL – Sea & Air (Export & Import) freight forwarding. Our global network ensures reliable space, competitive pricing, and end-to-end management for urgent air freight or economical ocean shipments.",
    
    image: freight,
  },
  
  {
    id: 8,
    name: "Customs Clearance",
    slug: "customs-clearance",
    description: "Hassle-free customs clearance by our in-house team. We manage document preparation and regulatory compliance, streamlining import and export processes smoothly.",
     image: custom,
  },

    {
    id: 11,
    name: 'Transportation',
    slug: 'transportation',
    description: "Efficient and reliable transportation solutions for cargo movement. Our experienced team ensures safe and timely delivery to meet your logistics needs.",
    image: transportation,
    isNew: true,
  },

  {
    id: 4,
    name: "CFS Stuffing",
    slug: "cfs-stuffing",
    description: "Safe and organized cargo consolidation at our Container Freight Stations (CFS). We ensure secure packing, correct labeling, and documentation for compliance with shipping regulations.",
 
    image: CFS,
    isNew: true,
  },
  {
    id: 5,
    name: "Marine Insurance",
    slug: "marine-insurance",
    description: "Comprehensive marine insurance coverage designed to protect your cargo against unforeseen risks across sea, air, or land routes, ensuring peace of mind for every shipment.",
  
    image: insurance,
    isNew: true,
  },
  {
    id: 6,
    name: "Palletization",
    slug: "palletization",
    description: "Professional palletization services to enhance cargo safety and manageability. We use quality materials and proven techniques to reduce damage risk during international transit.",
 
    image: pallet,
    isNew: true,
  },
  {
    id: 7,
    name: "DAP/DDP Shipments",
    slug: "dap-ddp-shipments",
    description: "End-to-end solutions for DAP (Delivered at Place) and DDP (Delivered Duty Paid) shipments, including customs handling and door-to-door service for hassle-free international deliveries.",
    
    image: shipments,
    isNew: true,
  },
  {
    id: 3,
    name: "Coastal Movement",
    slug: "coastal-movement",
    description: "Efficient and eco-friendly domestic coastal shipping services, ideal for heavy and bulk cargo. Our coastal solutions help reduce transit time, lower costs, and ease the burden on roadways and rail.",
    
    image: costal,
  },
  
 
  {
    id: 10,
    name: "Fumigation",
    slug: "fumigation",
    description: "Certified fumigation services for export cargo to meet global phytosanitary standards. We ensure your goods are free from pests and contaminants for smooth customs clearance.",
 
    image: fumigation,
    isNew: true,
  },

];

// Demo Component
const ProductSectionDemo = () => (
  <div className="min-h-screen bg-background">
    <ProductSection
      title="Featured Services"
      subtitle="Discover our handpicked selection of premium Service crafted with excellence"
      products={defaultProducts}
      showViewAll={true}
    />
  </div>
);

export default ProductSectionDemo;