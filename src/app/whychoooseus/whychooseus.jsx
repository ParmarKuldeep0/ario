"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import "./whychooseus.css"; // Your existing CSS file
import Link from "next/link";

export default function CareersSection() {
  return (
    <section className="careers-curved-section relative h-96 flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/carrer/hero.jpg"
          alt="Shipping containers at port"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title text-white mb-4"
        >
          Join Our Shipping Team
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="section-subtitle text-white pb-5"
        >
          Be part of a global logistics leader
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/career" passHref>
            <button className="cta-button">
              Explore Careers
            </button>
          
          </Link>
        </motion.div>
      </div>
    </section>
  );
}