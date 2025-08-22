'use client'
import './page.css';
import { 
  FaTruck,
  FaRoad,
  FaShippingFast,
  FaTemperatureLow,
  FaClock,
  FaMapMarkedAlt,
  FaEye,
  FaShieldAlt,
  FaMoneyBillWave,
  FaHandshake,
  FaCar,
  FaShoppingBag,
  FaFlask,
  FaTshirt,
  FaAppleAlt,
  FaBoxOpen,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';
import Link from 'next/link';

export default function TransportationServices() {
  // Services Data
  const services = [
    {
      icon: <FaTruck className="text-4xl text-[#0F4582]" />,
      title: "FTL & PTL Services",
      description: "Full Truck Load and Part Truck Load solutions optimized for cost and efficiency"
    },
    {
      icon: <FaShippingFast className="text-4xl text-[#0F4582]" />,
      title: "Containerized Transport",
      description: "20', 40', ISO Tanks, and Reefer containers with specialized handling"
    },
    {
      icon: <FaBoxOpen className="text-4xl text-[#0F4582]" />,
      title: "Bonded & Non-Bonded Movements",
      description: "Secure transport under customs supervision or general freight movement"
    },
    {
      icon: <FaRoad className="text-4xl text-[#0F4582]" />,
      title: "Last-Mile & First-Mile Delivery",
      description: "Precision pickup and delivery solutions for seamless logistics"
    },
    {
      icon: <FaTemperatureLow className="text-4xl text-[#0F4582]" />,
      title: "Port to ICD/Factory Movement",
      description: "Efficient cargo flow between ports, inland depots and manufacturing units"
    },
    {
      icon: <FaClock className="text-4xl text-[#0F4582]" />,
      title: "Time-Sensitive Deliveries",
      description: "Priority planning for urgent, high-value or perishable shipments"
    }
  ];

  // Why Choose Us Data
  const features = [
    {
      icon: <FaMapMarkedAlt className="text-5xl" />,
      title: "Pan-India Reach",
      description: "Coverage across all major trade zones and transport corridors"
    },
    {
      icon: <FaEye className="text-5xl" />,
      title: "Cargo Visibility",
      description: "GPS-enabled vehicles with real-time tracking updates"
    },
    {
      icon: <FaTruck className="text-5xl" />,
      title: "Flexible Fleet Options",
      description: "Diverse vehicles including trailers, flatbeds, tankers and reefers"
    },
    {
      icon: <FaMoneyBillWave className="text-5xl" />,
      title: "Cost-Effective Planning",
      description: "Route optimization and cargo consolidation to reduce costs"
    },
    {
      icon: <FaShieldAlt className="text-5xl" />,
      title: "Safety Compliance",
      description: "Trained professionals ensuring cargo safety and regulatory adherence"
    },
    {
      icon: <FaHandshake className="text-5xl" />,
      title: "Integrated Logistics",
      description: "Seamless connection with our freight and customs services"
    }
  ];

  // Industries Data
  const industries = [
    { 
      name: "Automotive & Engineering", 
      icon: <FaCar className="text-3xl" />, 
      bgClass: "bg-blue-100", 
      textClass: "text-blue-800" 
    },
    { 
      name: "FMCG & Retail", 
      icon: <FaShoppingBag className="text-3xl" />, 
      bgClass: "bg-green-100", 
      textClass: "text-green-800" 
    },
    { 
      name: "Chemical & Pharma", 
      icon: <FaFlask className="text-3xl" />, 
      bgClass: "bg-purple-100", 
      textClass: "text-purple-800" 
    },
    { 
      name: "Textiles & Lifestyle", 
      icon: <FaTshirt className="text-3xl" />, 
      bgClass: "bg-orange-100", 
      textClass: "text-orange-800" 
    },
    { 
      name: "Agriculture", 
      icon: <FaAppleAlt className="text-3xl" />, 
      bgClass: "bg-yellow-100", 
      textClass: "text-yellow-800" 
    },
    { 
      name: "ODC & Project Cargo", 
      icon: <FaTruck className="text-3xl" />, 
      bgClass: "bg-red-100", 
      textClass: "text-red-800" 
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
      <section className="cfs-hero relative ">
        <div className="cfs-container relative z-10">
          <div className="inline-flex items-center mt-40 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-blue-300/30 shadow-lg mb-6 animate-fadeIn">
            <FaTruck className="text-3xl text-blue-200 mr-2" />
            <span className="font-semibold text-blue-100 tracking-wider">TRANSPORTATION SERVICES</span>
          </div>
          <h1 className="cfs-hero-title">
            Seamless, Safe & Strategic <span className="text-blue-200">Movement of Goods</span> Across India and Beyond
          </h1>
          <p className="text-blue-100/90 max-w-3xl mx-auto text-lg leading-relaxed">
            At Ario Shipping, we don't just move goods - we deliver reliability, visibility and efficiency with our comprehensive transportation solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/contact" passHref>
              <button className="cfs-button-secondary">
                <FaPhoneAlt className="ml-2" /> Get Transport Quote 
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
      <section className="cfs-container relative z-20 py-12">
        <div className="cfs-intro bg-white/90 p-8 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            At <strong className="text-[#0F4582]">Ario Shipping & Logistics Pvt. Ltd.</strong>, we understand that transportation is the backbone of logistics. It's not just about moving goods from point A to point B - it's about doing it with speed, safety, cost-efficiency, and complete visibility.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Whether you're transporting goods to a local warehouse, an inland container depot, a coastal port, or delivering them to a customer's doorstep across the country, Ario ensures timely and secure delivery with unmatched precision and coordination.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#0F4582] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#0F4582]">1000+ Vehicles in Network</span>
            </div>
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#0F4582] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#0F4582]">99.5% On-Time Delivery</span>
            </div>
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#0F4582] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#0F4582]">Pan-India Coverage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="cfs-services mb-15 ">
        <div className="cfs-container">
          <div className="cfs-section-header">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-[#0F4582] font-medium mb-4">
              <FaTruck className="mr-2" /> OUR SERVICES
            </div>
            <h2 className="cfs-section-title">
              Comprehensive <span className="text-[#0F4582]">Transport Solutions</span>
            </h2>
            <div className="cfs-section-divider"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
              Our complete range of inland transportation services designed for efficiency and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="cfs-service-card">
                <div className="cfs-service-content">
                  <div className="cfs-service-icon">
                    {service.icon}
                  </div>
                  <h3 className="cfs-service-title">{service.title}</h3>
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
      <section className="cfs-why ">
        <div className="cfs-container"  style={{marginTop: '0'}}>
          <div className="cfs-section-header">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-300 text-[#00397D] font-medium mb-4 shadow-sm">
              <FaShieldAlt className="mr-2 text-[#00397D]" /> WHY CHOOSE ARIO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              Your Reliable <span className="relative">
                <span className="text-blue-200 relative z-10">Transport Partner</span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-400/30 z-0" style={{ transform: 'skewX(-15deg)' }}></span>
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mx-auto mb-6"></div>
            <p className="text-blue-100/90 max-w-2xl mx-auto text-xl leading-relaxed font-light text-center pb-10">
              What makes us the preferred choice for inland transportation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="cfs-feature-card">
                <div className="cfs-feature-icon">{feature.icon}</div>
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
      <section className="cfs-industries  bg-gradient-to-b from-gray-50 to-white">
        <div className="cfs-container">
          <div className="cfs-section-header text-center">
            <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white border border-blue-100 text-[#0F4582] font-medium mb-5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <FaTruck className="mr-2 text-[#0F4582]" /> 
              <span className="tracking-wide">INDUSTRIES WE SERVE</span>
            </div>
            <h2 className="cfs-section-title">
              Specialized Transport for <span className="text-[#0F4582]">Diverse Sectors</span>
            </h2>
            <div className="cfs-section-divider mx-auto bg-blue-400"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-lg leading-relaxed">
              We provide customized transport solutions across multiple industries
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7">
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
      <section className="cfs-cta  ">
        <div className="cfs-cta-content">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-blue-300/30 text-blue-100 font-medium mb-6">
            <FaRoad className="mr-2 text-blue-200" /> ON THE ROAD EXCELLENCE
          </div>
          <h2 className="cfs-section-title text-white">
            Ready to <span className="text-blue-200">Optimize</span> Your Cargo Movement?
          </h2>
          <p className="text-blue-100/90 max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
            With our pan-India network and diverse fleet options, we're equipped to handle all your transportation needs with precision and care.
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