'use client'
import Head from 'next/head';
import { useState } from 'react';
import { 
  FaLeaf, 
  FaHandsHelping, 
  FaUserShield, 
  FaGlobeAmericas,
  FaCheck,
  FaArrowRight,
  FaFileDownload,
  FaQuoteLeft,
  FaShip
} from 'react-icons/fa'; 

export default function CSRPage() {
  const [activeTab, setActiveTab] = useState('environment');

  return (
    <>
      <Head>
        <title>Corporate Social Responsibility | Ario Shipping</title>
        <meta name="description" content="Ario Shipping's commitment to sustainability, community, and ethical business practices" />
      </Head>

      {/* Hero Section with 310px bottom push */}
      <section 
        className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-blue-900 overflow-hidden "
        style={{ position: "relative",  clipPath: "ellipse(71% 59% at 50% 40%)" }}
      >
        <div className="absolute inset-0">
          <img 
            src="/csr/csr.png" 
            alt="Ocean waves" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto "  >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Corporate Social <span className="text-blue-200">Responsibility</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Charting a sustainable course for people, planet, and prosperity
          </p>
          <div className="mt-12">
            <button 
              onClick={() => document.getElementById('philosophy').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-800 hover:bg-blue-100 font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center mx-auto"
            >
              <span>Explore Our Commitment</span>
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      {/* Philosophy Section with adjusted padding */}
      <section id="philosophy" className="pt-[150px] pb-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#003980] font-semibold uppercase tracking-wider text-sm">OUR APPROACH</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Sustainability Through <span className="text-[#003980]">Innovation</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-8">
                At Ario Shipping, we believe responsible maritime logistics can drive positive change. Our CSR strategy integrates environmental stewardship, social impact, and ethical governance into every aspect of our operations.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <StatCard 
                  icon={<FaShip className="text-[#003980] text-2xl" />} 
                  value="150+" 
                  label="Community Projects" 
                  color="blue"
                />
                <StatCard 
                  icon={<FaLeaf className="text-green-600 text-2xl" />} 
                  value="35" 
                  label="Eco-Friendly Vessels" 
                  color="green"
                />
                <StatCard 
                  icon={<FaGlobeAmericas className="text-amber-600 text-2xl" />} 
                  value="12" 
                  label="Countries Reached" 
                  color="amber"
                />
                <StatCard 
                  icon={<FaUserShield className="text-purple-600 text-2xl" />} 
                  value="5K+" 
                  label="Lives Impacted" 
                  color="purple"
                />
              </div>
            </div>
            
            <div className="relative h-80 md:h-full group">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl overflow-hidden shadow-xl transform group-hover:rotate-1 transition-all duration-300">
                <img 
                  src="/csr/csr2.png" 
                  alt="Ario Shipping CSR Team" 
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg w-3/4 transform group-hover:-translate-y-2 transition-all duration-300">
                <h3 className="font-bold text-gray-900 mb-2">Our 2030 Sustainability Goals</h3>
                <p className="text-sm text-gray-600">
                  Committed to 40% emission reduction and $10M community investment by 2030.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas with reduced padding */}
      
    </>
  );
}

// Reusable Stat Card Component
function StatCard({ icon, value, label, color }) {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-100',
    green: 'bg-green-50 border-green-100',
    amber: 'bg-amber-50 border-amber-100',
    purple: 'bg-purple-50 border-purple-100'
  };
  
  return (
    <div className={`${colorClasses[color]} p-4 rounded-xl border text-center transition-all hover:shadow-md`}>
      <div className="flex justify-center mb-2">
        {icon}
      </div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

// Reusable List Item Component
function CSRListItem({ text }) {
  return (
    <li className="flex items-start">
      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
        <FaCheck className="text-green-600 text-xs" />
      </div>
      <span className="text-gray-700">{text}</span>
    </li>
  );
}