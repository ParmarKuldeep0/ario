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

export default function FreightForwardingPage() {
  // Services Data
  const services = [
    {
      icon: <GiCargoShip className="text-4xl text-[#003B7D]" />,
      title: "FCL Freight Forwarding",
      description: "Full Container Load services with dedicated containers, priority space arrangements, and secure handling for high-volume shipments."
    },
    {
      icon: <FaBoxes className="text-4xl text-[#003B7D]" />,
      title: "LCL Freight Forwarding",
      description: "Cost-effective Less than Container Load solutions with reliable consolidation services and scheduled sailing timelines."
    },
    {
      icon: <GiCommercialAirplane className="text-4xl text-[#003B7D]" />,
      title: "Air Freight Services",
      description: "Fast, secure air logistics with express, standard, and charter options for time-sensitive shipments."
    },
    {
      icon: <FaRoute className="text-4xl text-[#003B7D]" />,
      title: "Multimodal Transport",
      description: "Integrated sea-air and sea-land solutions for optimized routing and cost efficiency."
    },
    {
      icon: <FaFileAlt className="text-4xl text-[#003B7D]" />,
      title: "Customs Clearance",
      description: "Expert documentation and compliance support for smooth import/export processes."
    },
    {
      icon: <FaWarehouse className="text-4xl text-[#003B7D]" />,
      title: "Door-to-Door Delivery",
      description: "Complete logistics solutions from origin to final destination with real-time tracking."
    }
  ];

  // FCL Features
  const fclFeatures = [
    "Competitive ocean freight rates",
    "Secure container handling",
    "Minimal transit time",
    "Direct vessel connections",
    "Priority space arrangements",
    "Door-to-door, port-to-port, or multimodal options"
  ];

  // LCL Features
  const lclFeatures = [
    "Reliable consolidation services",
    "Scheduled sailing and delivery timelines",
    "Cost-effective global coverage",
    "End-to-end visibility",
    "Documentation support",
    "Flexible solutions for smaller volumes"
  ];

  // Air Freight Features
  const airFeatures = [
    "Express, standard, and charter options",
    "Airport-to-airport, door-to-door delivery",
    "Real-time tracking and coordination",
    "Full documentation and customs support",
    "IATA agent collaborations",
    "Time-bound deliveries"
  ];

  // Why Choose Us Data
  const features = [
    {
      icon: <FaGlobeAmericas className="text-5xl" />,
      title: "Global Network",
      description: "Strong alliances with shipping lines, airlines, and overseas agents across major trade lanes"
    },
    {
      icon: <FaClock className="text-5xl" />,
      title: "Time-Sensitive Solutions",
      description: "Precision scheduling for urgent shipments with 24/7 operational support"
    },
    {
      icon: <FaCogs className="text-5xl" />,
      title: "Custom Solutions",
      description: "Tailored logistics plans designed specifically for your cargo requirements"
    },
    {
      icon: <FaHandshake className="text-5xl" />,
      title: "Carrier Partnerships",
      description: "Strong relationships with major carriers for better routing and competitive rates"
    },
    {
      icon: <FaAnchor className="text-5xl" />,
      title: "Local Expertise",
      description: "Strong network across major ports and airports with dedicated teams"
    },
    {
      icon: <RiCustomerService2Fill className="text-5xl" />,
      title: "Dedicated Support",
      description: "Personalized account management and 24/7 customer service"
    }
  ];

  // Industries Data
  const industries = [
    { 
      name: "Retail & Consumer Goods", 
      icon: <FaShoppingCart className="text-3xl" />, 
      bgClass: "bg-blue-100", 
      textClass: "text-blue-800" 
    },
    { 
      name: "Pharmaceuticals", 
      icon: <FaPills className="text-3xl" />, 
      bgClass: "bg-green-100", 
      textClass: "text-green-800" 
    },
    { 
      name: "Agriculture", 
      icon: <FaTractor className="text-3xl" />, 
      bgClass: "bg-orange-100", 
      textClass: "text-orange-800" 
    },
    { 
      name: "Engineering & Machinery", 
      icon: <FaIndustry className="text-3xl" />, 
      bgClass: "bg-purple-100", 
      textClass: "text-purple-800" 
    },
    { 
      name: "Automotive", 
      icon: <FaCar className="text-3xl" />, 
      bgClass: "bg-yellow-100", 
      textClass: "text-yellow-800" 
    },
    { 
      name: "Electronics", 
      icon: <FaMobileAlt className="text-3xl" />, 
      bgClass: "bg-red-100", 
      textClass: "text-red-800" 
    },
    { 
      name: "Textiles & Fashion", 
      icon: <FaTshirt className="text-3xl" />, 
      bgClass: "bg-indigo-100", 
      textClass: "text-indigo-800" 
    },
    { 
      name: "Chemicals", 
      icon: <GiChemicalTank className="text-3xl" />, 
      bgClass: "bg-pink-100", 
      textClass: "text-pink-800" 
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
    <main className="relative">
      {/* Hero Section */}
      <section className="freight-hero relative h-[95vh]">
        <div className="freight-container content relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-blue-300/30 shadow-lg mb-6 animate-fadeIn">
            <GiCargoShip className="text-3xl text-blue-200 mr-2" />
            <span className="font-semibold text-blue-100 tracking-wider">  FREIGHT FORWARDING</span>
          </div>
          <h1 className="freight-hero-title">
            Smart Global Cargo Movement with <span className="text-blue-200">Precision & Speed</span>
          </h1>
          <p className="text-blue-100/90 max-w-3xl mx-auto text-lg leading-relaxed">
            Comprehensive freight forwarding solutions that connect your business to global markets seamlessly through sea and air transportation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/contact" passhref>
                <button className="freight-button-secondary">
                <FaPhoneAlt className="ml-2" />Contact Experts 
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
      <section className="freight-container relative z-20 py-12">
        <div className="freight-intro bg-white/90 p-8 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            At <strong className="text-[#013B7D]">Ario Shipping & Logistics Pvt. Ltd.</strong>, we provide comprehensive freight forwarding solutions that connect your business to global markets seamlessly. Whether it's <strong>Full Container Load (FCL)</strong>, <strong>Less than Container Load (LCL)</strong>, or <strong>Air Freight</strong>, our experienced team ensures that every shipment reaches its destination efficiently, safely, and on time.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            With access to major global trade lanes, a strong network of carriers and agents, and advanced tracking tools, we handle your cargo with the care and professionalism it deserves no matter the size, route, or complexity.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#003B7D]">150+ Global Partner Network</span>
            </div>
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#003B7D]">99.7% On-Time Performance</span>
            </div>
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#003B7D]">24/7 Cargo Tracking</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="freight-services  ">
        <div className="freight-container">
          <div className="freight-section-header">
            <div className="inline-flex items-center px-4   rounded-full bg-blue-50 border border-blue-200 text-[#003B7D] font-medium  ">
              <GiCargoCrate className="mr-2" /> OUR SERVICES
            </div>
            <h2 className="freight-section-title">
              Comprehensive <span className="text-[#003B7D]">Freight Solutions</span>
            </h2>
            <div className="freight-section-divider"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
              Our full range of freight forwarding services designed to meet all your shipping requirements with efficiency and reliability
            </p>
          </div>
          
          <div className="freight-service-grid">
            {services.map((service, index) => (
              <div key={index} className="freight-service-card">
                <div className="freight-service-content">
                  <div className="freight-service-icon">
                    {service.icon}
                  </div>
                  <h3 className="freight-service-title">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FCL Section */}
      <section className="freight-fcl bg-gray-50">
        <div className="freight-container" style={{marginTop:'120px'}}>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-[#003B7D] font-medium mb-6">
                <FaShip className="mr-2" /> FCL FREIGHT
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Full Container Load for High-Volume, High-Efficiency Logistics
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We offer FCL freight forwarding services for businesses requiring dedicated containers for their shipments. With direct vessel connections and priority space arrangements, we ensure fast and secure transportation from origin to destination.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fclFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-[#003B7D] rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Ideal for:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#003B7D] rounded-full"></div>
                      </div>
                    </div>
                    <span className="ml-3 text-gray-700">Bulk shipments requiring full container capacity</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#003B7D] rounded-full"></div>
                      </div>
                    </div>
                    <span className="ml-3 text-gray-700">High-value goods needing dedicated space</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#003B7D] rounded-full"></div>
                      </div>
                    </div>
                    <span className="ml-3 text-gray-700">Full-volume inventory movements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#003B7D] rounded-full"></div>
                      </div>
                    </div>
                    <span className="ml-3 text-gray-700">Time-sensitive shipments needing priority handling</span>
                  </li>
                </ul>
               
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LCL Section */}
      <section className="freight-lcl py-16 bg-white ">
        <div className="freight-container">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-[#003B7D] font-medium mb-6">
                <FaBoxes className="mr-2" /> LCL FREIGHT
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Flexible & Cost-Efficient Shipping for Smaller Volumes
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our LCL services provide the perfect solution when you don't need a full container. We consolidate shipments from multiple customers to optimize space and costs while maintaining reliable schedules and secure handling.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {lclFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-[#003B7D] rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Ideal for:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#003B7D] rounded-full"></div>
                      </div>
                    </div>
                    <span className="ml-3 text-gray-700">Smaller shipments that don't require full container</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#003B7D] rounded-full"></div>
                      </div>
                    </div>
                    <span className="ml-3 text-gray-700">Businesses with lower inventory turnover</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#003B7D] rounded-full"></div>
                      </div>
                    </div>
                    <span className="ml-3 text-gray-700">Cost-conscious shippers wanting to optimize logistics spend</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#003B7D] rounded-full"></div>
                      </div>
                    </div>
                    <span className="ml-3 text-gray-700">Businesses testing new markets with smaller quantities</span>
                  </li>
                </ul>
                
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Air Freight Section */}
      <section className="freight-air py-16 bg-blue-50 mb-15">
        <div className="freight-container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-[#003B7D] font-medium mb-6">
                <GiCommercialAirplane className="mr-2" /> AIR FREIGHT
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Fast, Secure & Time-Bound Air Logistics Across Borders
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                For time-sensitive shipments, our air freight solutions deliver unmatched speed and control. With trusted IATA agent collaborations, airline partnerships, strong airport handling capabilities, and customs expertise, we ensure your cargo is moved with urgency and precision.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {airFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-[#003B7D] rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Ideal for:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#003B7D] rounded-full"></div>
                      </div>
                    </div>
                    <span className="ml-3 text-gray-700">Urgent shipments requiring fastest transit times</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#003B7D] rounded-full"></div>
                      </div>
                    </div>
                    <span className="ml-3 text-gray-700">High-value or sensitive goods</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#003B7D] rounded-full"></div>
                      </div>
                    </div>
                    <span className="ml-3 text-gray-700">Perishable commodities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#003B7D] rounded-full"></div>
                      </div>
                    </div>
                    <span className="ml-3 text-gray-700">Just-in-time inventory requirements</span>
                  </li>
                </ul>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
<section className="freight-why py-16">
  <div className="freight-container">
    <div className="freight-section-header">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-300 text-[#00397D] font-medium mb-4 shadow-sm">
        <FaHandshake className="mr-2 text-[#00397D]" /> WHY CHOOSE US
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
        Your Trusted <span className="relative">
          <span className="text-blue-200 relative z-10">Freight Forwarding Partner</span>
          <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-400/30 z-0" style={{ transform: 'skewX(-15deg)' }}></span>
        </span>
      </h2>
      <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mx-auto mb-6"></div>
      <p className="text-blue-100/90 max-w-2xl mx-auto text-xl leading-relaxed font-light text-center pb-10">
        The competitive advantages that make us the preferred freight forwarding provider for global shippers
      </p>
    </div>
    
    {/* Only changed this container - everything else remains identical */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div key={index} className="freight-feature-card">
          <div className="freight-feature-icon">{feature.icon}</div>
          <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
          <p className="text-blue-100/90 leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Industries Section */}
    <section className="freight-industries  bg-gradient-to-b from-gray-50 to-white">
  <div className="freight-container">
    <div className="freight-section-header text-center">
      <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white border border-blue-100 text-[#003B7D] font-medium mb-5 shadow-sm hover:shadow-md transition-shadow duration-300">
        <FaBoxes className="mr-2 text-[#003B7D]" /> 
        <span className="tracking-wide">INDUSTRIES WE SERVE</span>
      </div>
      <h2 className="freight-section-title">
        Tailored Solutions for <span className="text-[#003B7D]">Every Industry</span>
      </h2>
      <div className="freight-section-divider mx-auto bg-blue-400"></div>
      <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-lg leading-relaxed">
        We understand each industry has unique shipping needs. Our specialized freight forwarding services are designed to handle your sector's specific requirements with precision and care.
      </p>
    </div>
    
    {/* Changed to 4-column grid */}
    <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
  </div>
</section>

      {/* CTA Section */}
      <section className="freight-cta py-12 md:py-16 px-4">
  <div className="freight-cta-content max-w-6xl mx-auto text-center">
    <div className="inline-flex text-white items-center px-3 py-1 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-blue-300/30 text-sm md:text-base text-blue-100 font-medium mb-4 md:mb-6">
      <GiEarthAmerica className="mr-2 text-blue-200" /> FREIGHT FORWARDING
    </div>
    <h2 className="freight-section-title text-white text-2xl sm:text-3xl md:text-4xl font-bold">
      Ready to <span className="text-blue-200">Optimize</span> Your Global Shipping?
    </h2>
    <p className="text-blue-100/90 max-w-2xl mx-auto mt-3 md:mt-4 text-base md:text-lg leading-relaxed">
      As an established freight forwarder with global reach and local expertise, we're positioned to optimize your supply chain with customized solutions and competitive rates.
    </p>
    <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6 md:mt-8 px-4">
      <button 
        className="freight-button-secondary py-2 px-4 text-sm md:text-base"
        onClick={handlePhoneClick}
      >
        <FaPhoneAlt className="mr-2" /> +91 2244500487
      </button>
      <button 
        className="freight-button-secondary py-2 px-4 text-sm md:text-base"
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