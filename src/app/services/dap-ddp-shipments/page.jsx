'use client'
import './page.css';
import { 
  FaGlobeAmericas, 
  FaHandshake, 
  FaFileAlt, 
  FaBoxes, 
  FaRoute, 
  FaWarehouse, 
  FaShieldAlt,
  FaEye,
  FaUsers,
  FaCalculator,
  FaTruck,
  FaPhoneAlt,
  FaEnvelope,
  FaShip,
  FaPlane,
  FaMoneyBillWave,
  FaShippingFast
} from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';
import Link from 'next/link';

export default function DAPDDPPage() {
  // Services Data
  const services = [
    {
      icon: <FaShip className="text-4xl text-[#00397F]" />,
      title: "Global Freight Forwarding",
      description: "FCL/LCL services via sea and air with end-to-end coordination for seamless cargo movement."
    },
    {
      icon: <FaFileAlt className="text-4xl text-[#00397F]" />,
      title: "Customs Clearance",
      description: "Expert handling of origin and destination customs procedures including documentation and compliance."
    },
    {
      icon: <FaTruck className="text-4xl text-[#00397F]" />,
      title: "Inland Transportation",
      description: "Coordinated trucking and rail services from port to final delivery point."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#00397F]" />,
      title: "Cargo Insurance",
      description: "Comprehensive risk management solutions for your shipments."
    },
    {
      icon: <FaEye className="text-4xl text-[#00397F]" />,
      title: "Real-Time Tracking",
      description: "24/7 visibility of your shipments with status updates at every milestone."
    },
    {
      icon: <FaUsers className="text-4xl text-[#00397F]" />,
      title: "Local Agent Handling",
      description: "Dedicated professionals at both origin and destination for smooth coordination."
    }
  ];

  // Benefits Data
  const benefits = [
    {
      icon: <FaHandshake className="text-5xl" />,
      title: "Zero Hassle for Buyer",
      description: "End-to-end responsibility means no worries about documentation, customs, or local transport"
    },
    {
      icon: <FaMoneyBillWave className="text-5xl" />,
      title: "Cost Control",
      description: "Predictable pricing with no hidden costs or surprise charges"
    },
    {
      icon: <FaShippingFast className="text-5xl" />,
      title: "Tailored Delivery",
      description: "Customized strategies for warehouse, retail, factory or remote destinations"
    },
    {
      icon: <FaCalculator className="text-5xl" />,
      title: "Duty & Tax Management",
      description: "Full management of import taxes and duties under DDP terms"
    },
    {
      icon: <RiCustomerService2Fill className="text-5xl" />,
      title: "Dedicated Support",
      description: "Personalized account management and 24/7 customer service"
    },
    {
      icon: <FaGlobeAmericas className="text-5xl" />,
      title: "Global Network",
      description: "Strong alliances with overseas agents, customs brokers, and transport providers"
    }
  ];

  // Industries Data
  const industries = [
    { name: "E-commerce & Retail", icon: <FaBoxes className="text-3xl" />, bgClass: "bg-blue-100", textClass: "text-blue-800" },
    { name: "Pharmaceuticals", icon: <FaShieldAlt className="text-3xl" />, bgClass: "bg-green-100", textClass: "text-green-800" },
    { name: "Automotive", icon: <FaTruck className="text-3xl" />, bgClass: "bg-yellow-100", textClass: "text-yellow-800" },
    { name: "Machinery", icon: <FaShip className="text-3xl" />, bgClass: "bg-purple-100", textClass: "text-purple-800" },
    { name: "FMCG", icon: <FaBoxes className="text-3xl" />, bgClass: "bg-orange-100", textClass: "text-orange-800" },
    { name: "Agro Products", icon: <FaRoute className="text-3xl" />, bgClass: "bg-red-100", textClass: "text-red-800" },
    { name: "Electronics", icon: <FaEye className="text-3xl" />, bgClass: "bg-indigo-100", textClass: "text-indigo-800" },
    { name: "Medical Devices", icon: <RiCustomerService2Fill className="text-3xl" />, bgClass: "bg-pink-100", textClass: "text-pink-800" }
  ];

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="dap-hero relative  ">
        <div className="dap-container header-section relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-blue-300/30 shadow-lg mb-6 animate-fadeIn">
            <FaShip className="text-3xl text-blue-200 mr-2" />
            <span className="font-semibold text-blue-100 tracking-wider">DAP/DDP SHIPMENTS</span>
          </div>
          <h1 className="dap-hero-title">
            Seamless Global Deliveries <span className="text-blue-200">From Origin to Final Destination</span>
          </h1>
          <p className="text-blue-100/90 max-w-3xl mx-auto text-lg leading-relaxed">
            Simplify global trade with our reliable DAP and DDP shipment services - complete door-to-door solutions that handle everything from freight forwarding to final delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/contact" passHref>
              <button className="dap-button-secondary">
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
      <section className="dap-container relative z-20 py-12">
        <div className="dap-intro bg-white/90 p-8 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            At <strong className="text-[#00397F]">Ario Shipping & Logistics Pvt. Ltd.</strong>, we simplify global trade with our reliable <strong>DAP (Delivered At Place)</strong> and <strong>DDP (Delivered Duty Paid)</strong> shipment services. These end-to-end delivery solutions are designed for businesses looking for smooth, hassle-free international cargo movement without getting involved in customs procedures, import formalities, or last-mile delivery logistics.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            From the moment your cargo leaves the factory gate until it reaches your buyer's doorstep, Ario takes full ownership of the logistics process, including freight forwarding, customs clearance, duties/taxes (for DDP), and inland transportation ensuring a complete door-to-door experience.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#00397F] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#00397F]">End-to-End Responsibility</span>
            </div>
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#00397F] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#00397F]">Customs Expertise</span>
            </div>
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#00397F] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#00397F]">Global Coverage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Incoterms Explanation Section */}
      <section className="dap-container py-16">
        <div className="dap-section-header">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-[#00397F] font-medium mb-4">
            <FaFileAlt className="mr-2" /> UNDERSTANDING DAP & DDP
          </div>
          <h2 className="dap-section-title">
            Key Differences Between <span className="text-[#00397F]">DAP & DDP</span>
          </h2>
          <div className="dap-section-divider"></div>
        </div>

        <div className="grid cards md:grid-cols-2 gap-8 mt-12">
          {/* DAP Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-100">
            <div className="bg-[#00397F] px-6 py-4">
              <h3 className="text-xl font-bold text-white">DAP (Delivered At Place)</h3>
            </div>
            <div className="p-6">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 bg-[#00397F] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-gray-700">Seller handles transportation to agreed destination</p>
              </div>
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 bg-[#00397F] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-gray-700">Buyer responsible for import clearance and duties</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 bg-[#00397F] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-gray-700">Goods delivered ready for unloading at destination</p>
              </div>
            </div>
          </div>

          {/* DDP Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-100">
            <div className="bg-[#00397F] px-6 py-4">
              <h3 className="text-xl font-bold text-white">DDP (Delivered Duty Paid)</h3>
            </div>
            <div className="p-6">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 bg-[#00397F] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-gray-700">Seller handles all transportation and customs</p>
              </div>
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 bg-[#00397F] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-gray-700">Seller pays all import duties and taxes</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 bg-[#00397F] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-gray-700">Goods delivered fully cleared at buyer's location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="dap-services  ">
        <div className="dap-container">
          <div className="dap-section-header">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-[#00397F] font-medium mb-4">
              <FaBoxes className="mr-2" /> OUR DAP/DDP SERVICES
            </div>
            <h2 className="dap-section-title">
              Comprehensive <span className="text-[#00397F]">End-to-End Solutions</span>
            </h2>
            <div className="dap-section-divider"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
              Our full range of services designed to provide complete door-to-door delivery under DAP and DDP terms
            </p>
          </div>
          
          <div className="dap-service-grid cards">
            {services.map((service, index) => (
              <div key={index} className="dap-service-card">
                <div className="dap-service-content">
                  <div className="dap-service-icon">
                    {service.icon}
                  </div>
                  <h3 className="dap-service-title">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="dap-why  ">
        <div className="dap-container" style={{margin: '0 auto'}}>
          <div className="dap-section-header">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-300 text-blue-800 font-medium mb-4 shadow-sm">
              <FaHandshake className="mr-2 text-blue-700" /> WHY CHOOSE OUR DAP/DDP
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              The Ario Advantage for <span className="relative">
                <span className="text-blue-200 relative z-10">Simplified Global Trade</span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-400/30 z-0" style={{ transform: 'skewX(-15deg)' }}></span>
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mx-auto mb-6"></div>
            <p className="text-blue-100/90 max-w-2xl mx-auto text-xl leading-relaxed font-light text-center pb-10">
              How we make international shipping simpler and more reliable for your business
            </p>
          </div>
          
          <div className="grid cards grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="dap-feature-card">
                <div className="dap-feature-icon">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-blue-100/90 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="dap-industries   bg-gradient-to-b from-gray-50 to-white">
        <div className="dap-container">
          <div className="dap-section-header text-center">
            <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white border border-blue-100 text-[#00397F] font-medium mb-5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <FaBoxes className="mr-2 text-blue-500" /> 
              <span className="tracking-wide">INDUSTRIES WE SERVE</span>
            </div>
            <h2 className="dap-section-title">
              Ideal for a Wide Range of <span className="text-[#00397F]">Businesses</span>
            </h2>
            <div className="dap-section-divider mx-auto bg-blue-400"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-lg leading-relaxed">
              Our DAP/DDP solutions are trusted by businesses across industries that value simplicity and reliability in their global supply chain.
            </p>
          </div>
          
          <div className="mt-12 cards grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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

      {/* Value Promise Section */}
      <section className="dap-container py-16">
        <div className="bg-blue-50 rounded-xl p-8 md:p-12 shadow-sm border border-blue-100">
          <div className="dap-section-header text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-blue-200 text-[#00397F] font-medium mb-4">
              <FaHandshake className="mr-2" /> OUR VALUE PROMISE
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Commitment to Excellence</h2>
            <div className="w-24 h-1.5 bg-blue-400 rounded-full mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-[#00397F] text-3xl mb-3">
                <FaGlobeAmericas />
              </div>
              <h3 className="font-bold text-lg mb-2">Timely Delivery</h3>
              <p className="text-gray-600">At committed locations as per agreed schedules</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-[#00397F] text-3xl mb-3">
                <FaMoneyBillWave />
              </div>
              <h3 className="font-bold text-lg mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">No hidden costs or surprise charges</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-[#00397F] text-3xl mb-3">
                <FaFileAlt />
              </div>
              <h3 className="font-bold text-lg mb-2">Trade Compliance</h3>
              <p className="text-gray-600">Adherence to international trade regulations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-[#00397F] text-3xl mb-3">
                <RiCustomerService2Fill />
              </div>
              <h3 className="font-bold text-lg mb-2">Dedicated Support</h3>
              <p className="text-gray-600">Personalized service and shipment visibility</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dap-cta py-16">
        <div className="dap-cta-content">
          <div className="inline-flex text-white items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-blue-300/30 text-blue-100 font-medium mb-6">
            <FaGlobeAmericas className="mr-2 text-blue-200" /> GO BEYOND SHIPPING
          </div>
          <h2 className="dap-section-title text-white">
            Choose <span className="text-blue-200">Peace of Mind</span> for Your Global Trade
          </h2>
          <p className="text-blue-100/90 max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
            In today's fast-paced global trade environment, buyers increasingly prefer DDP and DAP shipments for simplicity and reliability. Let Ario Shipping handle your end-to-end logistics with professional, scalable solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button className="dap-button-secondary">
              <FaPhoneAlt className="mr-2" /> +91 2244500487
            </button>
            <button className="dap-button-secondary">
              <FaEnvelope className="mr-2" /> info@arioshipping.com
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}