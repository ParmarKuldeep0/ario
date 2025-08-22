'use client'
import './page.css';
import { 
  FaBoxes,
  FaBoxOpen,
  FaClipboardCheck,
  FaClock,
  FaCogs,
  FaShippingFast,
  FaTruck,
  FaWarehouse,
  FaWeightHanging,
  FaPallet,
  FaShieldAlt,
  FaChartLine,
  FaIndustry,
  FaTshirt,
  FaCar,
  FaFlask,
  FaShoppingBasket,
  FaLeaf,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';
import Link from 'next/link';

export default function CFSStuffingServices() {
  // Services Data
  const services = [
    {
      icon: <FaBoxes className="text-4xl text-[#00397E]" />,
      title: "Export & Import Stuffing",
      description: "Professional container loading services for both export and import cargo with full compliance"
    },
    {
      icon: <FaWeightHanging className="text-4xl text-[#00397E]" />,
      title: "Cargo Segregation",
      description: "Careful sorting based on commodity type, packaging, weight and fragility"
    },
    {
      icon: <FaTruck className="text-4xl text-[#00397E]" />,
      title: "Container Inspection",
      description: "Thorough checking of empty containers for cleanliness and suitability"
    },
    {
      icon: <FaPallet className="text-4xl text-[#00397E]" />,
      title: "Systematic Loading",
      description: "Uniform weight distribution and secure cargo placement for safe transit"
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-[#00397E]" />,
      title: "Documentation Handling",
      description: "Complete stuffing reports, EIRs and customs documentation processing"
    },
    {
      icon: <FaCogs className="text-4xl text-[#00397E]" />,
      title: "Customs Coordination",
      description: "Smooth inspection and clearance with customs officials and CHAs"
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

  // Why Choose Us Data
  const features = [
    {
      icon: <FaClock className="text-5xl" />,
      title: "Time-Bound Operations",
      description: "Precision stuffing to avoid port delays and detention charges"
    },
    {
      icon: <FaShieldAlt className="text-5xl" />,
      title: "Expert Cargo Handling",
      description: "Trained professionals for industrial, pharma, chemical and fragile goods"
    },
    {
      icon: <FaChartLine className="text-5xl" />,
      title: "Custom Loading Plans",
      description: "Optimized space utilization based on cargo specifications"
    },
    {
      icon: <FaWarehouse className="text-5xl" />,
      title: "Pan-India Presence",
      description: "Facilities in Mumbai, Mundra and major North Indian ICDs"
    },
    {
      icon: <FaShippingFast className="text-5xl" />,
      title: "Integrated Logistics",
      description: "Seamless connection with our freight and customs services"
    },
    {
      icon: <FaBoxOpen className="text-5xl" />,
      title: "Compliance Assurance",
      description: "Full adherence to customs, shipping line and port regulations"
    }
  ];

  // Industries Data
  const industries = [
    { 
      name: "Textiles & Garments", 
      icon: <FaTshirt className="text-3xl" />, 
      bgClass: "bg-blue-100", 
      textClass: "text-blue-800" 
    },
    { 
      name: "Engineering Goods", 
      icon: <FaCogs className="text-3xl" />, 
      bgClass: "bg-green-100", 
      textClass: "text-green-800" 
    },
    { 
      name: "Agro Commodities", 
      icon: <FaLeaf className="text-3xl" />, 
      bgClass: "bg-yellow-100", 
      textClass: "text-yellow-800" 
    },
    { 
      name: "Chemicals & Pharma", 
      icon: <FaFlask className="text-3xl" />, 
      bgClass: "bg-purple-100", 
      textClass: "text-purple-800" 
    },
    { 
      name: "Automotive", 
      icon: <FaCar className="text-3xl" />, 
      bgClass: "bg-red-100", 
      textClass: "text-red-800" 
    },
    { 
      name: "FMCG & Retail", 
      icon: <FaShoppingBasket className="text-3xl" />, 
      bgClass: "bg-orange-100", 
      textClass: "text-orange-800" 
    }
  ];

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="cfs-hero relative  bg-[url('/Products/CFS.png')] pt-24 md:pt-32">
        <div className="cfs-container header-section relative z-10" >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-blue-300/30 shadow-lg mb-6 animate-fadeIn">
            <FaBoxOpen className="text-3xl text-blue-200 mr-2" />
            <span className="font-semibold text-blue-100 tracking-wider">CFS STUFFING SERVICES</span>
          </div>
          <h1 className="cfs-hero-title">
            Optimized Container Loading with <span className="text-blue-200">Efficiency, Accuracy & Compliance</span>
          </h1>
          <p className="text-blue-100/90 max-w-3xl mx-auto text-lg leading-relaxed">
            Professional CFS stuffing services ensuring proper cargo handling, segregation and sealing for safe international shipments.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/contact" passHref>
              <button className="cfs-button-secondary">
                <FaPhoneAlt className="ml-2" />Get CFS Quote 
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
      <section className="cfs-container relative z-20 py-12   ">
        <div className="cfs-intro bg-white/90 p-8 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            At <strong className="text-[#00397E]">Ario Shipping & Logistics Pvt. Ltd.</strong>, we offer efficient and secure CFS stuffing services for both export and import cargo. We ensure proper cargo handling, segregation, lashing, and sealing with full compliance to customs and safety standards.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            From factory dispatch to final container loading at the CFS, our dedicated team manages every detail to guarantee accuracy in stuffing, cargo safety, documentation compliance, and time-bound operations.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#00397E] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#00397E]">100% Compliance</span>
            </div>
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#00397E] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#00397E]">Pan-India CFS Network</span>
            </div>
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#00397E] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#00397E]">Specialized Cargo Handling</span>
            </div>
          </div>
        </div>

        {/* What is CFS Stuffing Section */}
        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h3 className="text-xl font-bold text-[#00397E] mb-3 flex items-center">
            <FaBoxOpen className="mr-2" /> What is CFS Stuffing?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            CFS Stuffing refers to the process of loading export cargo into shipping containers at an authorized Container Freight Station before dispatching it to the port for export. This is especially important for LCL (Less than Container Load) cargo or when exporters prefer to avoid the hassle of factory stuffing.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="cfs-services  bg-gray-50 mt-30 mb-30">
        <div className="cfs-container">
          <div className="cfs-section-header">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-[#00397E] font-medium mb-4">
              <FaBoxes className="mr-2" /> OUR SERVICES
            </div>
            <h2 className="cfs-section-title">
              Comprehensive <span className="text-[#00397E]">CFS Stuffing Solutions</span>
            </h2>
            <div className="cfs-section-divider"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
              Our complete range of container stuffing services designed for efficiency and cargo safety
            </p>
          </div>
          
          <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-15">
            {services.map((service, index) => (
              <div key={index} className="cfs-service-card bg-white">
                <div className="cfs-service-content">
                  <div className="cfs-service-icon">
                    {service.icon}
                  </div>
                  <h3 className="cfs-service-title  ">{service.title}</h3>
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
      <section className="cfs-why  bg-[url('/cfs-why-bg.jpg')] bg-cover bg-center">
        <div className="cfs-container" style={{margin: '0 auto'}}>
          <div className="cfs-section-header">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-300 text-[#00397D] font-medium mb-4 shadow-sm">
              <FaShieldAlt className="mr-2 text-[#00397D]" /> WHY CHOOSE ARIO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              Precision Container Loading <span className="relative">
                <span className="text-blue-200 relative z-10">Done Right</span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-400/30 z-0" style={{ transform: 'skewX(-15deg)' }}></span>
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mx-auto mb-6"></div>
            <p className="text-blue-100/90 max-w-2xl mx-auto text-xl leading-relaxed font-light text-center pb-10">
              What makes us the preferred choice for CFS stuffing operations
            </p>
          </div>
          
          <div className="grid cards grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="cfs-feature-card bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="cfs-feature-icon">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-blue-100/90 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Services Section */}
      <section className="  bg-white">
        <div className="cfs-container">
          <div className="cfs-section-header text-center mt-35 ">
            <h2 className="cfs-section-title">
              Integrated with Our <span className="text-[#00397E]">Other Logistics Services</span>
            </h2>
            <div className="cfs-section-divider mx-auto bg-blue-400"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-lg leading-relaxed">
              Our CFS Stuffing services work seamlessly with our broader logistics offerings
            </p>
          </div>
          
          <div className="mt-12 cards grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <FaShippingFast className="text-2xl text-[#00397E] mr-3" />
                <h3 className="text-xl font-bold text-[#00397E]">Freight Forwarding</h3>
              </div>
              <p className="text-gray-700">
                Complete FCL/LCL sea freight solutions with major shipping lines
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <FaTruck className="text-2xl text-[#00397E] mr-3" />
                <h3 className="text-xl font-bold text-[#00397E]">Cargo Transportation</h3>
              </div>
              <p className="text-gray-700">
                Reliable movement of goods from origin to CFS and beyond
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <FaClipboardCheck className="text-2xl text-[#00397E] mr-3" />
                <h3 className="text-xl font-bold text-[#00397E]">Customs Clearance</h3>
              </div>
              <p className="text-gray-700">
                Expert documentation handling and regulatory compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="cfs-industries   bg-gradient-to-b from-gray-50 to-white mt-40 mb-45">
        <div className="cfs-container">
          <div className="cfs-section-header text-center">
            <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white border border-blue-100 text-[#00397E] font-medium mb-5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <FaIndustry className="mr-2 text-[#00397E]" /> 
              <span className="tracking-wide">INDUSTRIES WE SERVE</span>
            </div>
            <h2 className="cfs-section-title">
              Specialized Stuffing for <span className="text-[#00397E]">Diverse Sectors</span>
            </h2>
            <div className="cfs-section-divider mx-auto bg-blue-400"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-lg leading-relaxed">
              We provide customized stuffing solutions across multiple industries
            </p>
          </div>
          
          <div className="mt-12 cards grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7">
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
      <section className="cfs-cta py-16 bg-[url('/cfs-cta-bg.jpg')]">
        <div className="cfs-cta-content">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-blue-300/30 text-blue-100 font-medium mb-6">
            <FaBoxOpen className="mr-2 text-blue-200" /> CONTAINER STUFFING EXCELLENCE
          </div>
          <h2 className="cfs-section-title text-white">
            Need Professional <span className="text-blue-200">CFS Stuffing</span> Services?
          </h2>
          <p className="text-blue-100/90 max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
            With our pan-India network and specialized cargo handling, we ensure your goods are loaded safely and compliantly for international shipping.
          </p>
          <div className="cfs-cta-buttons flex gap-4 justify-center mt-8">
            <button 
  className="cfs-button-secondary"
  onClick={handlePhoneClick}
>
  <FaPhoneAlt className="mr-2" /> +91 2244500487
</button>

<button 
  className="cfs-button-secondary"
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