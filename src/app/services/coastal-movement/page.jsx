'use client'
import './page.css';
import { 
  FaShip, 
  FaBoxes, 
  FaRoute, 
  FaLeaf, 
  FaClock, 
  FaWarehouse,
  FaAnchor,
  FaPhoneAlt,
  FaEnvelope,
  FaTruck,
  FaTrain,
  FaIndustry,
  FaShoppingBasket,
  FaCar,
  FaBuilding,
  FaFlask,
  FaAppleAlt,
  FaWater,
  FaFileAlt,
  FaGlobe,
  FaMapMarkerAlt,
  FaExchangeAlt,
  FaThumbsUp
} from 'react-icons/fa';
import Link from 'next/link';
import { GiFruitBowl } from 'react-icons/gi';

export default function CoastalMovementPage() {
  // Services Data
  const services = [
    {
      icon: <FaShip className="text-4xl text-[#003B7D]" />,
      title: "Containerized Cargo Transportation",
      description: "FCL and LCL shipments through coastal vessels with reliable scheduling and competitive rates."
    },
    {
      icon: <FaBoxes className="text-4xl text-[#003B7D]" />,
      title: "Bulk Cargo Handling",
      description: "Specialized solutions for dry and liquid bulk movement tailored for specific commodities."
    },
    {
      icon: <FaRoute className="text-4xl text-[#003B7D]" />,
      title: "Short Sea Shipping",
      description: "Flexible routes between regional ports for faster turnaround times."
    },
    {
      icon: <FaWater className="text-4xl text-[#003B7D]" />,
      title: "Feeder Services",
      description: "Efficient transshipment support for import/export cargo connecting to mainline services."
    },
    {
      icon: <FaTruck className="text-4xl text-[#003B7D]" />,
      title: "Multimodal Connectivity",
      description: "Seamless integration with road and rail for efficient last-mile delivery."
    },
    {
      icon: <FaFileAlt className="text-4xl text-[#003B7D]" />,
      title: "End-to-End Documentation",
      description: "Comprehensive support for regulatory compliance, coastal shipping bills, and port formalities."
    }
  ];

  // Features Data
  const features = [
    {
      icon: <FaLeaf className="text-5xl" />,
      title: "Environmental Sustainability",
      description: "Coastal shipping has a lower carbon footprint, supporting eco-friendly supply chains."
    },
    {
      icon: <FaClock className="text-5xl" />,
      title: "Improved Reliability",
      description: "Sea routes are less affected by road traffic or seasonal disruptions."
    },
    {
      icon: <FaGlobe className="text-5xl" />,
      title: "Vast Coastline Coverage",
      description: "Leveraging India's extensive coastline and strategic ports."
    },
    {
      icon: <FaWarehouse className="text-5xl" />,
      title: "Cost Efficiency",
      description: "Moving goods via sea is often more economical for bulk shipments."
    },
    {
      icon: <FaAnchor className="text-5xl" />,
      title: "Infrastructure Relief",
      description: "Reduces pressure on land transport infrastructure."
    },
    {
      icon: <FaThumbsUp className="text-5xl" />,
      title: "Strategic Positioning",
      description: "Operational bases in Mumbai, Mundra, and expanding to Cochin."
    }
  ];

  // Industries Data
  const industries = [
    {
      name: "Agriculture & Agri-commodities",
      icon: <FaAppleAlt className="text-3xl" />,
      bgClass: "bg-green-100",
      textClass: "text-green-800",
    },
    {
      name: "Steel & Cement",
      icon: <FaBuilding className="text-3xl" />,
      bgClass: "bg-gray-100",
      textClass: "text-gray-800",
    },
    {
      name: "FMCG & Consumer Goods",
      icon: <FaShoppingBasket className="text-3xl" />,
      bgClass: "bg-blue-100",
      textClass: "text-blue-800",
    },
    {
      name: "Automotive Parts",
      icon: <FaCar className="text-3xl" />,
      bgClass: "bg-red-100",
      textClass: "text-red-800",
    },
    {
      name: "Petrochemicals",
      icon: <FaFlask className="text-3xl" />,
      bgClass: "bg-yellow-100",
      textClass: "text-yellow-800",
    },
    {
      name: "Industrial Raw Materials",
      icon: <FaIndustry className="text-3xl" />,
      bgClass: "bg-orange-100",
      textClass: "text-orange-800",
    },
    
    {
      name: "Perishable Foods",
      icon: <GiFruitBowl  className="text-3xl" />,
      bgClass: "bg-teal-100",
      textClass: "text-teal-800",
    },
    {
      name: "Building Materials",
      icon: <FaBuilding className="text-3xl" />,
      bgClass: "bg-amber-100",
      textClass: "text-amber-800",
    },
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
      <section className="coastal-hero relative " >
        <div className="coastal-container relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-blue-300/30 shadow-lg mb-6 animate-fadeIn">
            <FaShip className="text-3xl text-blue-200 mr-2" />
            <span className="font-semibold text-blue-100 tracking-wider">COASTAL SHIPPING SOLUTIONS</span>
          </div>
          <h1 className="coastal-hero-title">
            Connecting India's <span className="text-blue-200">Coastlines</span>
          </h1>
          <p className="text-blue-100/90 max-w-3xl mx-auto text-lg leading-relaxed">
            Reliable, cost-effective & sustainable logistics solutions leveraging India's vast coastline to streamline domestic cargo transportation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/contact" passhref>
                <button className="coastal-button-secondary">
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
      <section className="coastal-container relative z-20 py-12">
        <div className="coastal-intro bg-white/90 p-8 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            At <strong className="text-[#003B7D]">Ario Shipping & Logistics Pvt. Ltd.</strong>, our coastal movement services are designed to streamline domestic cargo transportation by sea, offering a smarter, greener, and more efficient alternative to traditional land-based freight.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Leveraging India's vast coastline and strategic ports, we help businesses move cargo seamlessly between western, eastern, and southern corridors reducing congestion, costs, and transit time.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#003B7D] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#003B7D]">30% Cost Reduction</span>
            </div>
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#003B7D] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#003B7D]">40% Lower Emissions</span>
            </div>
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#003B7D] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#003B7D]">Pan-India Coverage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="coastal-services  ">
        <div className="coastal-container" style={{margin: '0 auto'}}>
          <div className="coastal-section-header">
            <div className="text-center">
  <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-[#003B7D] font-medium mb-4">
              <FaBoxes className="mr-2" /> OUR CAPABILITIES
            </div>
            </div>
            <h2 className="coastal-section-title text-center ">
              Coastal Shipping <span className="text-[#003B7D]">Services</span>
            </h2>
            <div className="coastal-section-divider"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
              Comprehensive solutions tailored for efficient movement of goods along India's coastline
            </p>
          </div>
          
          <div className="coastal-service-grid">
            {services.map((service, index) => (
              <div key={index} className="coastal-service-card">
                <div className="coastal-service-content">
                  <div className="coastal-service-icon">
                    {service.icon}
                  </div>
                  <h3 className="coastal-service-title">{service.title}</h3>
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
     <section className="coastal-why py-16">
  <div className="coastal-container" style={{margin: '0 auto'}}>
    <div className="coastal-section-header">
      <div className="text-center">
  <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-[#00397D] font-medium mb-4">
        <FaAnchor className="mr-2 text-[#00397D]" /> WHY COASTAL SHIPPING
      </div>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
        The Smart <span className="relative">
          <span className="text-blue-200 relative z-10">Logistics Choice</span>
          <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-400/30 z-0" style={{ transform: 'skewX(-15deg)' }}></span>
        </span>
      </h2>
      <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mx-auto mb-6"></div>
      <p className="text-blue-100/90 max-w-2xl mx-auto text-xl leading-relaxed font-light text-center pb-10">
        Advantages that make coastal movement a superior alternative to road and rail
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div key={index} className="coastal-feature-card">
          <div className="coastal-feature-icon">{feature.icon}</div>
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
      <section className="coastal-industries py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="coastal-container">
          <div className="coastal-section-header text-center">
            <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white border border-blue-100 text-[#003B7D] font-medium mb-5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <FaBoxes className="mr-2 text-[#003B7D]" /> 
              <span className="tracking-wide">INDUSTRIES WE SERVE</span>
            </div>
            <h2 className="coastal-section-title">
              Tailored Solutions for <span className="text-[#003B7D]">Diverse Sectors</span>
            </h2>
            <div className="coastal-section-divider mx-auto bg-blue-400"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-lg leading-relaxed">
              Our coastal movement services cater to a wide range of industries that benefit from regional sea-based transport.
            </p>
          </div>
          
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
      <section className="coastal-cta py-16">
        <div className="coastal-cta-content">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-blue-300/30 text-blue-100 font-medium mb-6">
            <FaGlobe className="mr-2 text-blue-200" /> SUSTAINABLE LOGISTICS
          </div>
          <h2 className="coastal-section-title text-white">
            Ready to <span className="text-blue-200">Transform</span> Your Domestic Logistics?
          </h2>
          <p className="text-blue-100/90 max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
            Discover how coastal shipping can reduce costs, lower emissions, and improve reliability for your domestic cargo movements.
          </p>
          <div className="coastal-cta-buttons">
           
              <button 
                  className="coastal-button-secondary"
                  onClick={handlePhoneClick}
                >
                  <FaPhoneAlt className="mr-2" /> +91 2244500487
                </button>

                <button 
                  className="coastal-button-secondary"
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