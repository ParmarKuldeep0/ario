'use client'
import './page.css';
import { 
  FaShip, 
  FaAnchor, 
  FaCompass, 
  FaWater, 
  FaPortrait,
  FaFileAlt,
  FaUsers,
  FaClock,
  FaChartLine,
  FaHandshake,
  FaPhoneAlt,
  FaEnvelope,
  FaWarehouse,
  FaTruck,
  FaBoxes,
  FaClipboardCheck,
  FaSync,
  FaTools,
  FaGlobeAmericas,
  FaOilCan,
  FaCar
} from 'react-icons/fa';
import { GiCargoShip, GiShipWheel, GiSailboat } from 'react-icons/gi';
import Link from 'next/link';

export default function VesselAgencyPage() {
  // Services Data
  const services = [
    {
      icon: <GiShipWheel className="text-4xl text-[#00397E]" />,
      title: "Port Call Management",
      description: "End-to-end coordination of vessel port calls including berth arrangements, pilotage, tug services, and port formalities."
    },
    {
      icon: <FaPortrait className="text-4xl text-[#00397E]" />,
      title: "Customs & Immigration",
      description: "Professional handling of all customs clearance, immigration procedures, and port health requirements."
    },
    {
      icon: <FaBoxes className="text-4xl text-[#00397E]" />,
      title: "Cargo Operations",
      description: "Supervision of loading/unloading operations, stowage planning, and cargo documentation."
    },
    {
      icon: <FaUsers className="text-4xl text-[#00397E]" />,
      title: "Crew Support",
      description: "Crew changes, shore passes, medical assistance, and other crew welfare services."
    },
    {
      icon: <FaWarehouse className="text-4xl text-[#00397E]" />,
      title: "Bunkering & Provisions",
      description: "Arrangement of fuel, lubricants, fresh water, and vessel provisions at competitive prices."
    },
    {
      icon: <FaTools className="text-4xl text-[#00397E]" />,
      title: "Technical Support",
      description: "Coordination of repairs, spare parts delivery, and technical services while in port."
    }
  ];

  // Features Data
  const features = [
    {
      icon: <FaCompass className="text-5xl" />,
      title: "24/7 Port Coverage",
      description: "Round-the-clock support at all major ports with local expertise"
    },
    {
      icon: <FaChartLine className="text-5xl" />,
      title: "Operational Efficiency",
      description: "Minimize port turnaround time with our proven processes"
    },
    {
      icon: <FaGlobeAmericas className="text-5xl" />,
      title: "Global Network",
      description: "Partnerships with leading shipowners and port agents worldwide"
    },
    {
      icon: <FaClipboardCheck className="text-5xl" />,
      title: "Compliance Expertise",
      description: "Ensuring full adherence to maritime regulations and port requirements"
    },
    {
      icon: <FaSync className="text-5xl" />,
      title: "Real-Time Reporting",
      description: "Transparent communication with daily operational updates"
    },
    {
      icon: <FaHandshake className="text-5xl" />,
      title: "Trusted Partner",
      description: "20+ years of reliable vessel agency services"
    }
  ];

  // Vessel Types Data
  const vesselTypes = [
    { name: "Container Ships", icon: <GiCargoShip />, color: "bg-blue-100 text-blue-800" },
    { name: "Bulk Carriers", icon: <FaShip />, color: "bg-amber-100 text-amber-800" },
    { name: "Tankers", icon: <FaOilCan />, color: "bg-purple-100 text-purple-800" },
    { name: "Ro-Ro Vessels", icon: <FaCar />, color: "bg-green-100 text-green-800" },
    { name: "General Cargo", icon: <FaBoxes />, color: "bg-orange-100 text-orange-800" },
    { name: "Reefers", icon: <GiSailboat />, color: "bg-red-100 text-red-800" },
    { name: "LNG Carriers", icon: <FaWater />, color: "bg-indigo-100 text-indigo-800" },
    { name: "Cruise Ships", icon: <FaShip />, color: "bg-pink-100 text-pink-800" }
  ];

  const handlePhoneClick = () => {
  window.location.href = 'tel:+912244500487';
  // or window.open('tel:+912244500487', '_blank');
};

const handleEmailClick = () => {
  window.location.href = 'mailto:info@arioshipping.com';
  // or window.open('mailto:info@arioshipping.com', '_blank');
};


  return (
    <main>
      {/* Hero Section */}
      <section className="vessel-hero">
        <div className="vessel-container">
          <div className="vessel-hero-badge">
            <FaAnchor className="mr-2" />
            <span> VESSEL AGENTS</span>
          </div>
          <h1 className="vessel-hero-title">
            Seamless Port Operations <span className="text-blue-200">Worldwide</span>
          </h1>
          <p className="vessel-hero-subtitle">
            Comprehensive vessel agency services ensuring efficient port calls, regulatory compliance, and optimal turnaround times at all major ports.
          </p>
          <div className="vessel-hero-buttons">
            <Link href="/contact" passhref>
                <button className="vessel-button-secondary">
                <FaPhoneAlt className=" mr-2" /> Contact Our Agents  
                </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
<section class="relative py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
  <div class="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('/images/wave-pattern.svg')] bg-repeat"></div>
  <div class="container mx-auto px-4 max-w-6xl">
    <div class="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform transition-all hover:shadow-2xl">
      <div class="absolute top-0 left-0 right-0 h-1 bg-[gradient-to-r from-blue-500 to-blue-700]"></div>
      
      <div class="p-10 md:p-12 lg:p-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Your <span class="text-[#00397E] relative inline-block">
            Trusted Port Agent
            <span class="absolute bottom-0 left-0 w-full h-2 bg-blue-100 opacity-50 -z-10 transform -rotate-1"></span>
          </span> in India
        </h2>
        
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="relative pl-6">
            <div class="absolute left-0 top-0 w-1 h-full bg-[#17EED0] rounded-full"></div>
            <p class="text-gray-700 leading-relaxed text-lg">
             As vessel agents we provide <strong class="text-[#00397E] font-semibold"> complete port agency services for all vessel types at major Indian ports including JNPT, Mundra & Kandla.</strong>
            </p>
          </div>
          <div class="relative pl-6">
            <div class="absolute left-0 top-0 w-1 h-full bg-[#17EED0] rounded-full"></div>
            <p class="text-gray-700 leading-relaxed text-lg">
              Our team of <strong class="text-[#00397E] font-semibold">maritime professionals</strong> handles all aspects of port call management, ensuring compliance with regulations while minimizing costs and turnaround time.
            </p>
          </div>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div class="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all">
            <div class="text-4xl font-bold text-[#00397E] mb-2">24/7</div>
            <div class="text-gray-600 font-medium uppercase tracking-wider text-sm">Port Support</div>
            <div class="mt-4 w-12 h-1 bg-[#17EED0] rounded-full"></div>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all">
            <div class="text-4xl font-bold text-[#00397E] mb-2">99%</div>
            <div class="text-gray-600 font-medium uppercase tracking-wider text-sm">On-Time Berthing</div>
            <div class="mt-4 w-12 h-1 bg-[#17EED0] rounded-full"></div>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all">
            <div class="text-4xl font-bold text-[#00397E] mb-2">50+</div>
            <div class="text-gray-600 font-medium uppercase tracking-wider text-sm">Ports Covered</div>
            <div class="mt-4 w-12 h-1 bg-[#17EED0] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section class="py-16 bg-white">
  <div class="container mx-auto px-4">
 
    <div class="text-center mb-12">
      <div class="inline-flex items-center bg-blue-50 text-[#00397E] px-5 py-2 rounded-full font-medium mb-4">
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"/>
        </svg>
        OUR SERVICES
      </div>
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Complete <span class="text-[#00397E]">Vessel Agency Solutions</span>
      </h2>
      <p class="max-w-2xl mx-auto text-gray-600">
        Professional services designed to optimize your port operations and ensure regulatory compliance
      </p>
      <div class="mx-auto w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-6"></div>
    </div>
    
 
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {services.map((service) => (  
        <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div class="p-6">
            <div class="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
               {service.icon}  
              <svg class="w-6 h-6 text-[#00397E]" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-800 mb-2">
              {service.title} 
          
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
                {service.description}  
            </p>
          </div>
        </div>
     ))} 
    </div>
  </div>
</section>

      {/* Why Choose Us Section */}
     <section className="vessel-why   bg-[#00397E]">
  <div className="vessel-container"  >
    <div className="vessel-section-header text-center mb-12">
      <div className="vessel-section-badge inline-flex items-center bg-blue-800 bg-opacity-30 text-[#00397D] px-5 py-2 rounded-full font-medium mb-4">
        <FaHandshake className="mr-2 text-[#00397D]" /> WHY CHOOSE US
      </div>
      <h2 className="vessel-section-title text-3xl md:text-4xl font-bold text-white mb-3">
        The <span className="text-blue-200">Maritime Advantage</span>
      </h2>
      <p className="vessel-section-description text-blue-100 max-w-2xl mx-auto">
        What sets us apart as your preferred vessel agent
      </p>
    </div>
    
    {/* Fixed 3-column grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="vessel-feature-card bg-blue-800 bg-opacity-20 rounded-xl p-8 border border-blue-700 hover:bg-opacity-30 transition-all"
        >
          <div className="vessel-feature-icon text-3xl text-blue-200 mb-5">
            {feature.icon}
          </div>
          <h3 className="vessel-feature-title text-xl font-bold text-white mb-3">
            {feature.title}
          </h3>
          <p className="vessel-feature-description text-blue-100">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Vessel Types Section */}
      <section className="vessel-types py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <div className="text-center mb-12">
      <div className="inline-flex items-center bg-blue-100 text-[#00397E] px-5 py-2 rounded-full font-medium mb-4">
        <FaShip className="mr-2" /> VESSEL TYPES
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Expertise Across <span className="text-[#00397E]">All Vessel Classes</span>
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600">
        We have extensive experience handling diverse vessel types with specialized protocols for each category.
      </p>
    </div>

    {/* Vessel Types Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {vesselTypes.map((vessel, index) => (
        <div
          key={index}
          className={`vessel-type-card ${vessel.color} p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300`}
        >
          <div className="vessel-type-icon text-4xl mb-4 flex justify-center">
            {vessel.icon}
          </div>
          <h3 className="vessel-type-name font-semibold text-gray-800 text-lg">
            {vessel.name}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* CTA Section */}
      <section className="vessel-cta">
        <div className="vessel-container">
          <div className="vessel-cta-content">
            <div className="vessel-cta-badge">
              <FaCompass className="mr-2" /> READY TO SERVE
            </div>
            <h2 className="vessel-cta-title">
              Need a <span className="text-blue-200">Reliable Port Agent</span> ?
            </h2>
            <p className="vessel-cta-description">
              Contact our team of vessel agency specialists for efficient port call arrangements and seamless operations.
            </p>
            <div className="vessel-cta-buttons">
              
              <button 
  className="vessel-button-secondary"
  onClick={handlePhoneClick}
>
  <FaPhoneAlt className="mr-2" /> +91 2244500487
</button>

<button 
  className="vessel-button-secondary"
  onClick={handleEmailClick}
>
  <FaEnvelope className="mr-2" /> info@arioshipping.com
</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}