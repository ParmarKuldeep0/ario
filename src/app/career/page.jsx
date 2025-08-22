'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import './career.css';
import {
  FaChartLine,
  FaHandshake,
  FaUserTie,
  FaGlobe,
  FaHeart,
  FaMapMarkerAlt,
  FaClock,
  FaSearch,
  FaRocket,
  FaLightbulb,
  FaBriefcase,
  FaUsers,
  FaShippingFast,
  FaFileUpload
} from 'react-icons/fa';

const Careers = () => {
  const [activeTab, setActiveTab] = useState('why-ario');
  const [fileName, setFileName] = useState('');

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <motion.section 
        className="hero-section relative w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-image-container">
          <Image
            src="/career/bg.png"
            alt="Ario Shipping Careers"
            fill
            priority
            className="hero-image"
          /> 
        </div>
        <div className="hero-content px-6 py-12 md:py-24"></div>
      </motion.section>

      {/* Intro Section */}
      <motion.section 
        className="intro-section py-16 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#003980] mb-8"
            variants={fadeIn}
          >
            Navigate Your Future at Ario Shipping
          </motion.h2>
          <div className="grid text-center md:gap-16">
            <motion.p 
              className="text-lg  md:text-xl text-gray-700 leading-relaxed"
              variants={fadeIn}
            >
              As a fast-growing name in global shipping and logistics, we're looking for passionate, innovative individuals ready to take on challenges and grow with us.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Main Content Tabs */}
      <section className="main-content py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="tabs-header flex justify-center space-x-4 mb-12">
            <button 
              className={`tab-btn px-6 py-3 text-lg font-medium rounded-lg transition-colors ${activeTab === 'why-ario' ? 'active bg-[#003980] text-white' : 'bg-white text-[#003980] hover:bg-gray-100'}`}
              onClick={() => setActiveTab('why-ario')}
            >
              Why Ario?
            </button>
            <button 
              className={`tab-btn px-6 py-3 text-lg font-medium rounded-lg transition-colors ${activeTab === 'apply-now' ? 'active bg-[#003980] text-white' : 'bg-white text-[#003980] hover:bg-gray-100'}`}
              onClick={() => setActiveTab('apply-now')}
            >
              Apply Now
            </button>
          </div>

          <div className="tab-content bg-white rounded-xl shadow-md p-8">
            {activeTab === 'why-ario' && (
              <motion.div 
                className="why-ario-content grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                {/* First three cards */}
                {[
                  {
                    icon: <FaChartLine className="icon" />,
                    title: "Professional Growth",
                    desc: "Gain hands-on experience with global logistics operations, cross-border trade solutions, and client management that accelerates your development."
                  },
                  {
                    icon: <FaHandshake className="icon" />,
                    title: "Inclusive Culture",
                    desc: "Our culture of respect, collaboration, and diversity encourages every team member to share ideas and contribute meaningfully."
                  },
                  {
                    icon: <FaUserTie className="icon" />,
                    title: "Leadership & Mentorship",
                    desc: "Learn from industry leaders through strategic mentorship and knowledge-sharing that prepares you for long-term success."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="benefit-card p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all"
                    variants={fadeIn}
                    whileHover={{ y: -5 }}
                  >
                    <div className="benefit-icon text-[#003980] text-3xl mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-[#003980]">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}

                {/* Last two cards - centered together */}
                <motion.div 
                  className="grid md:grid-cols-2 gap-6 md:col-span-2 lg:col-span-3 lg:mx-auto lg:w-2/3 rounded-lg overflow-hidden"
                >
                  <motion.div
                    className="benefit-card p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all"
                    variants={fadeIn}
                    whileHover={{ y: -5 }}
                  >
                    <FaGlobe className="icon text-[#003980] text-3xl mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-[#003980]">Global Footprint</h3>
                    <p className="text-gray-600">With operations across India and upcoming global expansions...</p>
                  </motion.div>
                  <motion.div
                    className="benefit-card p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all"
                    variants={fadeIn}
                    whileHover={{ y: -5 }}
                  >
                    <FaHeart className="icon text-[#003980] text-3xl mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-[#003980]">Employee-Centric</h3>
                    <p className="text-gray-600">Competitive compensation, performance rewards...</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}

            {activeTab === 'apply-now' && (
              <motion.div 
                className="apply-content"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold text-[#003980] mb-8 text-center"
                  variants={fadeIn}
                >
                  Join Our Team
                </motion.h3>
                <form
                  className="max-w-3xl mx-auto"
                  action="https://formsubmit.co/info@arioshipping.com"
                  method="POST"
                  encType="multipart/form-data"
                >
                  <input type="hidden" name="_subject" value="New career application from Ario Shipping" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://arioshipping.com" />
                  <input type="text" name="_honey" style={{display: 'none'}} />

                  <div className="form-grid grid md:grid-cols-2 gap-6 mb-8">
                    <div className="form-group">
                      <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required 
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="position" className="block text-gray-700 mb-2 font-medium">Position *</label>
                      <input 
                        type="text" 
                        id="position" 
                        name="position" 
                        required 
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                        placeholder="Which position are you applying for?"
                      />
                    </div>
                    <div className="form-group md:col-span-2">
                      <label htmlFor="experience" className="block text-gray-700 mb-2 font-medium">Experience *</label>
                      <input 
                        type="text" 
                        id="experience" 
                        name="experience" 
                        required 
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                        placeholder="Years of relevant experience"
                      />
                    </div>
                    <div className="form-group md:col-span-2">
                      <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message (Optional)</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows="4"
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                        placeholder="Tell us why you're interested in joining Ario Shipping..."
                      ></textarea>
                    </div>
                    <div className="form-group file-upload md:col-span-2 relative">
                      <label htmlFor="resume" className="block text-gray-700 mb-2 font-medium">Resume/CV *</label>
                      <div className="upload-box border-2 border-dashed rounded-lg p-6 text-center transition-colors border-gray-300 hover:border-blue-500">
                        <input 
                          type="file" 
                          id="resume" 
                          name="attachment" 
                          accept=".pdf,.doc,.docx"
                          required 
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                          onChange={handleFileChange}
                        />
                        <div className="flex flex-col items-center justify-center space-y-2 pointer-events-none">
                          <FaFileUpload className="text-3xl text-[#003980]" />
                          <span className="text-gray-600">
                            {fileName || "Drag & drop your resume or click to browse"}
                          </span>
                          <span className="text-sm text-gray-500">PDF or Word documents only (Max 5MB)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button 
                      type="submit" 
                      className="submit-btn bg-[#003980] hover:bg-[#002a5d] text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <motion.section 
        className="culture-section py-16 px-6 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#003980] mb-12 text-center"
            variants={fadeIn}
          >
            Our Work Culture
          </motion.h2>
          <motion.div 
            className="culture-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={fadeIn}
          >
            {[
              {
                icon: <FaGlobe className="icon" />,
                title: "Global Perspective",
                desc: "Work with international clients and gain exposure to global trade practices"
              },
              {
                icon: <FaRocket className="icon" />,
                title: "Fast-Paced Growth",
                desc: "Be part of our rapid expansion and scaling journey"
              },
              {
                icon: <FaHandshake className="icon" />,
                title: "Team Collaboration",
                desc: "Work with supportive colleagues who value teamwork"
              },
              {
                icon: <FaLightbulb className="icon" />,
                title: "Innovation",
                desc: "Bring your ideas to improve our processes and services"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="culture-card p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all"
                variants={fadeIn}
                whileHover={{ y: -10 }}
              >
                <div className="culture-icon text-[#003980] text-4xl mb-5">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3 text-[#003980]">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Careers;