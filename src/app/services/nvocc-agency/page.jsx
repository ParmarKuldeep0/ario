'use client'
import './page.css';
import { 
  FaShip, 
  FaBoxes, 
  FaFileAlt, 
  FaRoute, 
  FaHandshake, 
  FaGlobeAmericas, 
  FaClock, 
  FaCogs, 
  FaWarehouse, 
  FaAnchor, 
  FaPhoneAlt, 
  FaEnvelope,
  FaShoppingCart,
  FaCar,
  FaIndustry,
  FaTshirt,
  FaTractor,
  FaFlask,
  FaMobileAlt,
  FaPills,
  FaChair
} from 'react-icons/fa';
import { 
  GiCargoShip, 
  GiCargoCrate, 
  GiShipWheel, 
  GiEarthAmerica, 
  GiCommercialAirplane, 
  GiCargoCrane,
  GiChemicalTank,
  GiMedicinePills
} from 'react-icons/gi';
import { RiCustomerService2Fill } from 'react-icons/ri';
import Link from 'next/link';

export default function NVOCCAgencyPage() {
  // Services Data
  const services = [
    {
      icon: <FaShip className="text-4xl text-[#00397E]" />,
      title: "Container Space Management",
      description: "We lease container space from leading shipping lines and offer it under our own Bill of Lading for better control and flexibility in your shipping operations."
    },
    {
      icon: <GiCargoCrane className="text-4xl text-[#00397E]" />,
      title: "Cargo Consolidation",
      description: "Efficient management of LCL and FCL shipments with meticulous care, speed, and accuracy to optimize your shipping costs."
    },
    {
      icon: <FaFileAlt className="text-4xl text-[#00397E]" />,
      title: "Documentation & Compliance",
      description: "Full compliance with international shipping regulations including HBL issuance, customs clearance, and all necessary documentation."
    },
    {
      icon: <FaRoute className="text-4xl text-[#00397E]" />,
      title: "Door-to-Door Services",
      description: "Comprehensive port-to-port and door-to-door services across multiple geographies with real-time tracking and updates."
    },
    {
      icon: <FaHandshake className="text-4xl text-[#00397E]" />,
      title: "Carrier Partnerships",
      description: "Strong relationships with major shipping lines for better routing, competitive rates, and priority space allocation."
    },
    {
      icon: <GiCommercialAirplane className="text-4xl text-[#00397E]" />,
      title: "Multimodal Solutions",
      description: "Integrated sea-air and sea-land solutions for time-sensitive shipments requiring faster transit times."
    }
  ];

  // Features Data
  const features = [
    {
      icon: <FaGlobeAmericas className="text-5xl" />,
      title: "Global Expertise",
      description: "Decades of collective experience in international ocean freight across all major trade lanes"
    },
    {
      icon: <FaClock className="text-5xl" />,
      title: "Operational Excellence",
      description: "Precision scheduling and quick turnaround times with 24/7 operational support"
    },
    {
      icon: <FaCogs className="text-5xl" />,
      title: "Custom Solutions",
      description: "Tailored logistics plans designed specifically for your cargo requirements"
    },
    {
      icon: <FaWarehouse className="text-5xl" />,
      title: "Advanced Technology",
      description: "Real-time tracking, digital documentation, and API integrations for seamless operations"
    },
    {
      icon: <FaAnchor className="text-5xl" />,
      title: "Local Presence",
      description: "Strong network across Mumbai, Mundra, Chennai, and Northern ICDs with dedicated teams"
    },
    {
      icon: <RiCustomerService2Fill className="text-5xl" />,
      title: "Dedicated Support",
      description: "Personalized account management and 24/7 customer service for all your needs"
    }
  ];

  // Industries Data with React Icons
  const industries = [
    { 
      name: "Consumer Goods", 
      icon: <FaShoppingCart className="text-3xl" />, 
      bgClass: "bg-blue-100", 
      textClass: "text-blue-800" 
    },
    { 
      name: "Automotive", 
      icon: <FaCar className="text-3xl" />, 
      bgClass: "bg-green-100", 
      textClass: "text-green-800" 
    },
    { 
      name: "Industrial Machinery", 
      icon: <FaIndustry className="text-3xl" />, 
      bgClass: "bg-orange-100", 
      textClass: "text-orange-800" 
    },
    { 
      name: "Textiles & Apparel", 
      icon: <FaTshirt className="text-3xl" />, 
      bgClass: "bg-purple-100", 
      textClass: "text-purple-800" 
    },
    { 
      name: "Agriculture", 
      icon: <FaTractor className="text-3xl" />, 
      bgClass: "bg-yellow-100", 
      textClass: "text-yellow-800" 
    },
    { 
      name: "Chemicals (DG)", 
      icon: <GiChemicalTank className="text-3xl" />, 
      bgClass: "bg-red-100", 
      textClass: "text-red-800" 
    },
    { 
      name: "Electronics", 
      icon: <FaMobileAlt className="text-3xl" />, 
      bgClass: "bg-indigo-100", 
      textClass: "text-indigo-800" 
    },
    { 
      name: "Pharmaceuticals", 
      icon: <GiMedicinePills className="text-3xl" />, 
      bgClass: "bg-pink-100", 
      textClass: "text-pink-800" 
    },
    { 
      name: "Furniture", 
      icon: <FaChair className="text-3xl" />, 
      bgClass: "bg-amber-100", 
      textClass: "text-amber-800" 
    },
    { 
      name: "General Cargo", 
      icon: <GiCargoCrate className="text-3xl" />, 
      bgClass: "bg-teal-100", 
      textClass: "text-teal-800" 
    }
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
    <main className=" relative"  >
      {/* Hero Section */}
      <section className="nvocc-hero relative "  >
        <div className="nvocc-container relative z-10 ">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-blue-300/30 shadow-lg mb-6 animate-fadeIn">
            <GiCargoShip className="text-3xl text-blue-200 mr-2" />
            <span className="font-semibold text-blue-100 tracking-wider"> NVOCC SERVICES</span>
          </div>
          <h1 className="nvocc-hero-title">
            Global Ocean Freight <span className="text-blue-200">Simplified</span>
          </h1>
          <p className="text-blue-100/90 max-w-3xl mx-auto text-lg leading-relaxed">
            Comprehensive Non-Vessel Operating Common Carrier Solutions with the reliability of a global network and the flexibility of a local partner
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
         <Link href="/contact" passhref>
            <button className="nvocc-button-secondary">
             <FaPhoneAlt className="ml-2" /> Contact Experts 
            </button>
         </Link>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute bottom-20 left-10 w-20 h-20 rounded-full bg-blue-400 opacity-20 animate-float1"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-white opacity-10 animate-float2"></div>
        <div className="absolute bottom-1/3 right-20 w-24 h-24 rounded-full bg-blue-300 opacity-15 animate-float3"></div>
      </section>

      {/* Intro Section */}
      <section className="nvocc-container relative z-20 py-12">
        <div className="nvocc-intro bg-white/90 p-8 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            At <strong className="text-[#00397E]">Ario Shipping & Logistics Pvt. Ltd.</strong>, we specialize in <strong>end-to-end NVOCC services</strong> that empower businesses with reliable, cost-effective ocean freight solutions backed by our global network and local expertise.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Whether you're managing <strong>FCL</strong>, <strong>LCL</strong>, or specialized cargo shipments, our experienced team ensures seamless coordination across documentation, customs clearance, and transportation with <strong>real-time visibility</strong> at every step.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#0F4582] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#00397E]">150+ Global Partner Network</span>
            </div>
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#0F4582] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#00397E]">99.7% On-Time Performance</span>
            </div>
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#0F4582] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#00397E]">24/7 Customer Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="nvocc-services py-16">
        <div className="nvocc-container">
          <div className="nvocc-section-header ">
            <div className="text-center">
  <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-[#00397E] text-[#00397E] font-medium mb-4">
    <GiCargoCrate className="mr-2" /> CORE SERVICES
  </div>
</div>
            <h2 className="nvocc-section-title text-center">
              Comprehensive <span className="text-[#00397E]">NVOCC Solutions</span>
            </h2>
            <div className="nvocc-section-divider"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
              Our full range of NVOCC services designed to meet all your ocean freight requirements with efficiency and reliability
            </p>
          </div>
          
          <div className="nvocc-service-grid pt-15">
            {services.map((service, index) => (
              <div key={index} className="nvocc-service-card">
                <div className="nvocc-service-content">
                  <div className="nvocc-service-icon">
                    {service.icon}
                  </div>
                  <h3 className="nvocc-service-title">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-[#00397E]">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-300 text-blue-800 font-medium mb-4 shadow-sm">
        <svg className="w-5 h-5 mr-2 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
        WHY CHOOSE US
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Your Trusted <span className="relative inline-block">
          <span className="text-blue-200 relative z-10">Ocean Freight Partner</span>
          <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-400/30 z-0" style={{ transform: 'skewX(-15deg)' }}></span>
        </span>
      </h2>
      <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mx-auto mb-6"></div>
      <p className="text-blue-100/90 max-w-2xl mx-auto text-xl leading-relaxed font-light">
        Discover the competitive advantages that make us the preferred NVOCC provider for global shippers
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 shadow-lg hover:shadow-blue-500/10">
          <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-300 mb-4">
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
          <p className="text-blue-100/90 leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Industries Section */}
      <section className="nvocc-industries py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="nvocc-container">
          <div className="nvocc-section-header text-center">
            <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white border border-blue-100 text-[#00397E] font-medium mb-5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <FaBoxes className="mr-2 text-[#00397E]" /> 
              <span className="tracking-wide">INDUSTRIES WE SERVE</span>
            </div>
            <h2 className="nvocc-section-title">
              Tailored Solutions for <span className="text-[#00397E]">Every Industry</span>
            </h2>
            <div className="nvocc-section-divider mx-auto bg-blue-400"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-lg leading-relaxed">
              We understand each industry has unique shipping needs. Our specialized NVOCC services are designed to handle your sector's specific requirements with precision and care.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center justify-center p-6 rounded-xl ${industry.bgClass} ${industry.textClass} border-2 border-transparent hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-lg transform hover:-translate-y-1`}
              >
                <div className="mb-3">
                  {industry.icon}
                </div>
                <span className="font-semibold text-center">{industry.name}</span>
                <div className={`mt-3 w-8 h-1 rounded-full ${industry.bgClass.replace('bg-', 'bg-opacity-70 ')}`}></div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
           
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="nvocc-cta py-16">
        <div className="nvocc-cta-content">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-blue-300/30 text-blue-100 font-medium mb-6">
            <GiEarthAmerica className="mr-2 text-blue-200" /> GLOBAL SHIPPING SOLUTIONS
          </div>
          <h2 className="nvocc-section-title text-white">
            Ready to <span className="text-blue-200">Streamline</span> Your Ocean Freight?
          </h2>
          <p className="text-blue-100/90 max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
            As an established NVOCC with global reach and local expertise, we're positioned to optimize your ocean freight operations with customized solutions and competitive rates.
          </p>
          <div className="nvocc-cta-buttons">
         
            <button 
  className="nvocc-button-secondary"
  onClick={handlePhoneClick}
>
  <FaPhoneAlt className="mr-2" /> +91 2244500487
</button>

<button 
  className="nvocc-button-secondary"
  onClick={handleEmailClick}
>
  <FaEnvelope className="mr-2" /> info@arioshipping.com
</button>
          </div>
        </div>
      </section>
    </main>
  );
}