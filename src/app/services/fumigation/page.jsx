'use client'
import './page.css';
import { 
  FaLeaf,
  FaCertificate,
  FaCheckDouble,
  FaRegClock,
  FaClipboardList,
  FaTruckMoving,
  FaGlobeAmericas,
  FaRecycle,
  FaMedkit,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';
import Link from 'next/link';

export default function FumigationServices() {
  // Services Data
  const services = [
    {
      icon: <FaCertificate className="text-4xl text-[#00397D]" />,
      title: "Certified & Compliant",
      description: "ISPM-15 adherence and authorized teams ensure regulatory acceptance worldwide."
    },
    {
      icon: <FaRecycle className="text-4xl text-[#00397D]" />,
      title: "Eco-Responsible Methods",
      description: "Controlled doses, safe handling, and minimal environmental footprint."
    },
    {
      icon: <FaRegClock className="text-4xl text-[#00397D]" />,
      title: "On-Time Delivery",
      description: "Efficient processes guarantee timely turnaround for cargo readiness."
    },
    {
      icon: <FaClipboardList className="text-4xl text-[#00397D]" />,
      title: "Full Documentation",
      description: "Complete certificates for swift global movement."
    },
    {
      icon: <FaTruckMoving className="text-4xl text-[#00397D]" />,
      title: "Mobile Fumigation Teams",
      description: "Service available on-site at ports, CFS, depots, or your facility."
    },
    {
      icon: <FaMedkit className="text-4xl text-[#00397D]" />,
      title: "Pharma Compliance",
      description: "Specialized treatments for pharmaceutical shipments."
    }
  ];

  // Benefits Data
  const benefits = [
    {
      icon: <FaCertificate className="text-5xl" />,
      title: "Global Standards",
      description: "Compliant with ISPM-15 and international phytosanitary regulations"
    },
    {
      icon: <FaCheckDouble className="text-5xl" />,
      title: "Complete Protection",
      description: "Eliminates pests while preserving cargo integrity"
    },
    {
      icon: <FaRegClock className="text-5xl" />,
      title: "Fast Turnaround",
      description: "Quick treatment to keep your supply chain moving"
    },
    {
      icon: <FaClipboardList className="text-5xl" />,
      title: "Full Documentation",
      description: "All required certificates for customs clearance"
    },
    {
      icon: <FaTruckMoving className="text-5xl" />,
      title: "Mobile Service",
      description: "We come to your location for maximum convenience"
    },
    {
      icon: <FaGlobeAmericas className="text-5xl" />,
      title: "Global Coverage",
      description: "Services available at all major ports and terminals"
    }
  ];

  // Industries Data
  const industries = [
    { name: "Agricultural", icon: <FaLeaf className="text-3xl" />, bgClass: "bg-blue-100", textClass: "text-blue-800" },
    { name: "Pharmaceutical", icon: <FaMedkit className="text-3xl" />, bgClass: "bg-green-100", textClass: "text-green-800" },
    { name: "Timber Export", icon: <FaLeaf className="text-3xl" />, bgClass: "bg-yellow-100", textClass: "text-yellow-800" },
    { name: "Food Processing", icon: <FaCheckDouble className="text-3xl" />, bgClass: "bg-purple-100", textClass: "text-purple-800" },
    { name: "Textiles", icon: <FaCheckDouble className="text-3xl" />, bgClass: "bg-indigo-100", textClass: "text-indigo-800" },
    { name: "Consumer Goods", icon: <FaGlobeAmericas className="text-3xl" />, bgClass: "bg-red-100", textClass: "text-red-800" }
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
      <section className="dap-hero relative h-[90vh]">
        <div className="dap-container relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-blue-300/30 shadow-lg mb-6 animate-fadeIn">
            <FaLeaf className="text-3xl text-blue-200 mr-2" />
            <span className="font-semibold text-blue-100 tracking-wider">
              FUMIGATION SERVICES
            </span>
          </div>
          <h1 className="dap-hero-title">
            Pest-Free, Compliant &{" "}
            <span className="text-blue-200">Cargo-Ready</span>
          </h1>
          <p className="text-blue-100/90 max-w-3xl mx-auto text-lg leading-relaxed">
            Safeguard your shipments globally with certified cargo fumigation
            from Ario Shipping & Logistics Pvt. Ltd.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/contact" passHref>
              <button className="dap-button-secondary">
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
      <section className="dap-container relative z-20 py-12">
        <div className="dap-intro bg-white/90 p-8 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Moving your goods across borders?{" "}
            <strong className="text-[#00397D]">
              Fumigation isn't optional it's mandatory for most global trade.
            </strong>{" "}
            We protect your agricultural, wooden, textile, and food shipments
            from pests, pathogens, and costly customs delays.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our certified treatments ensure your cargo meets all international
            standards (ISPM-15) for wooden packaging, agricultural commodities,
            and other regulated goods.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#00397D] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#00397D]">
                ISPM-15 Compliant
              </span>
            </div>
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#00397D] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#00397D]">
                Global Acceptance
              </span>
            </div>
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#00397D] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#00397D]">
                Mobile Services
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="dap-services  ">
        <div className="dap-container">
          <div className="dap-section-header">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-[#00397D] font-medium mb-4">
              <FaCheckDouble className="mr-2" /> OUR FUMIGATION SERVICES
            </div>
            <h2 className="dap-section-title">
              Comprehensive{" "}
              <span className="text-[#00397D]">Treatment Solutions</span>
            </h2>
            <div className="dap-section-divider"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
              Our full range of fumigation services designed to meet all
              international shipping requirements
            </p>
          </div>

          <div className="dap-service-grid">
            {services.map((service, index) => (
              <div key={index} className="dap-service-card">
                <div className="dap-service-content">
                  <div className="dap-service-icon">{service.icon}</div>
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
      <section className="dap-why">
        <div className="dap-container" style={{ margin: "0 auto" }}>
          <div className="dap-section-header">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-300 text-[#00397D] font-medium mb-4 shadow-sm">
              <FaCheckDouble className="mr-2 text-[#00397D]" /> WHY CHOOSE OUR
              FUMIGATION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              The Ario Advantage for{" "}
              <span className="relative">
                <span className="text-blue-200 relative z-10">
                  Pest-Free Shipping
                </span>
                <span
                  className="absolute bottom-0 left-0 w-full h-2 bg-blue-400/30 z-0"
                  style={{ transform: "skewX(-15deg)" }}
                ></span>
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mx-auto mb-6"></div>
            <p className="text-blue-100/90 max-w-2xl mx-auto text-xl leading-relaxed font-light text-center pb-10">
              How we make international shipping compliant and worry-free for
              your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <section className="dap-industries  bg-gradient-to-b from-gray-50 to-white">
        <div className="dap-container px-4 sm:px-6">
          <div className="dap-section-header text-center">
            <div className="inline-flex items-center px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white border border-blue-100 text-[#00397D] font-medium mb-4 md:mb-5 text-sm md:text-base shadow-sm hover:shadow-md transition-shadow duration-300">
              <FaLeaf className="mr-2 text-[#00397D]" />
              <span className="tracking-wide">INDUSTRIES WE SERVE</span>
            </div>
            <h2 className="dap-section-title text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              Ideal for{" "}
              <span className="text-[#00397D]">Regulated Commodities</span>
            </h2>
            <div className="dap-section-divider mx-auto bg-blue-400 w-12 h-1 md:w-16 md:h-1.5"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 md:mt-5 text-base md:text-lg leading-relaxed px-4">
              Our fumigation solutions are trusted by businesses across
              industries that require pest-free certification for international
              trade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl ${industry.bgClass} ${industry.textClass} border border-transparent hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-md md:hover:shadow-lg transform hover:-translate-y-0.5 md:hover:-translate-y-1`}
              >
                <div className="mb-2 sm:mb-3 md:mb-4 text-2xl sm:text-3xl">
                  {industry.icon}
                </div>
                <span className="font-semibold text-center text-sm sm:text-base md:text-base">
                  {industry.name}
                </span>
                <div
                  className={`mt-2 sm:mt-3 w-6 sm:w-8 h-0.5 sm:h-1 rounded-full ${industry.bgClass.replace(
                    "bg-",
                    "bg-opacity-70 "
                  )}`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance CTA Section */}
      <section className="dap-container py-16">
        <div className="bg-blue-50 rounded-xl p-8 md:p-12 shadow-sm border border-blue-100">
          <div className="dap-section-header text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-blue-200 text-[#00397D] font-medium mb-4">
              <FaCertificate className="mr-2" /> COMPLIANCE GUARANTEE
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Global Standards, Easy Compliance
            </h2>
            <div className="w-24 h-1.5 bg-blue-400 rounded-full mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-[#00397D] text-3xl mb-3">
                <FaCheckDouble />
              </div>
              <h3 className="font-bold text-lg mb-2">ISPM-15 Certified</h3>
              <p className="text-gray-600">
                Wood packaging treatment meeting international standards
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-[#00397D] text-3xl mb-3">
                <FaClipboardList />
              </div>
              <h3 className="font-bold text-lg mb-2">Full Documentation</h3>
              <p className="text-gray-600">
                All required certificates for customs clearance
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-[#00397D] text-3xl mb-3">
                <FaGlobeAmericas />
              </div>
              <h3 className="font-bold text-lg mb-2">Global Acceptance</h3>
              <p className="text-gray-600">
                Recognized by all major importing countries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dap-cta py-16">
        <div className="dap-cta-content">
          <div className="inline-flex text-white items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-blue-300/30 text-blue-100 font-medium mb-6">
            <FaLeaf className="mr-2 text-blue-200" /> SHIP WITH CONFIDENCE
          </div>
          <h2 className="dap-section-title text-white">
            Ready to <span className="text-blue-200">Protect Your Cargo</span>{" "}
            for Global Trade?
          </h2>
          <p className="text-blue-100/90 max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
            Don't let pest concerns delay your shipments. Our certified
            fumigation services ensure your goods move smoothly across borders.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button className="dap-button-secondary" onClick={handlePhoneClick}>
              <FaPhoneAlt className="mr-2" /> +91 2244500487
            </button>

            <button className="dap-button-secondary" onClick={handleEmailClick}>
              <FaEnvelope className="mr-2" /> info@arioshipping.com
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}