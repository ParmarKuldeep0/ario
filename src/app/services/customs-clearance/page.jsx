'use client'
import './page.css';
import { 
  FaFileAlt,
  FaCalculator,
  FaBoxOpen,
  FaClipboardCheck,
  FaHandshake,
  FaClock,
  FaGlobe,
  FaWarehouse,
  FaPhoneAlt,
  FaEnvelope,
  FaCar,
  FaFlask,
  FaTshirt,
  FaAppleAlt,
  FaShoppingCart,
  FaOilCan,
  FaIndustry
} from 'react-icons/fa';
import Link from 'next/link';

export default function CustomClearance() {
  // Services Data
  const services = [
    {
      icon: <FaFileAlt className="text-4xl text-[#00397E]" />,
      title: "Import/Export Clearance",
      description: "Preparation and submission of all required documentation for smooth inbound and outbound clearance."
    },
    {
      icon: <FaCalculator className="text-4xl text-[#00397E]" />,
      title: "Duty & Tax Calculation",
      description: "Expert evaluation of applicable duties, GST, IGST, and exemptions to avoid overpayment."
    },
    {
      icon: <FaBoxOpen className="text-4xl text-[#00397E]" />,
      title: "Special Cargo Handling",
      description: "Clearance of restricted, regulated, ODC/OOG, hazardous, and reefer cargo."
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-[#00397E]" />,
      title: "Incentive Scheme Support",
      description: "Assistance with EPCG, Advance License, MEIS/SEIS, and other DGFT schemes."
    },
    {
      icon: <FaHandshake className="text-4xl text-[#00397E]" />,
      title: "Regulatory Liaison",
      description: "Coordination with Customs, DGFT, FSSAI, PQ, AEO, and other governing bodies."
    },
    {
      icon: <FaFileAlt className="text-4xl text-[#00397E]" />,
      title: "Compliance Audits",
      description: "Filing of shipping bills, bill of entries, and post-clearance audit for 100% accuracy."
    }
  ];

  // Why Choose Us Data
  const features = [
    {
      icon: <FaFileAlt className="text-5xl" />,
      title: "Expert Compliance",
      description: "In-depth knowledge of customs regulations and trade agreements"
    },
    {
      icon: <FaClock className="text-5xl" />,
      title: "Time-Bound Execution",
      description: "Prompt clearance to minimize dwell time and avoid detention charges"
    },
    {
      icon: <FaGlobe className="text-5xl" />,
      title: "End-to-End Support",
      description: "From document preparation to clearance and post-clearance follow-up"
    },
    {
      icon: <FaWarehouse className="text-5xl" />,
      title: "Real-Time Tracking",
      description: "Proactive communication and digital tracking at every stage"
    },
    {
      icon: <FaGlobe className="text-5xl" />,
      title: "Pan-India Presence",
      description: "Clearance facilities at key ports including Mumbai, Mundra, and North Indian ICDs"
    },
    {
      icon: <FaHandshake className="text-5xl" />,
      title: "Custom Solutions",
      description: "Tailored services for businesses of all sizes and industries"
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
      name: "Chemicals & Pharmaceuticals", 
      icon: <FaFlask className="text-3xl" />, 
      bgClass: "bg-green-100", 
      textClass: "text-green-800" 
    },
    { 
      name: "Textiles & Garments", 
      icon: <FaTshirt className="text-3xl" />, 
      bgClass: "bg-orange-100", 
      textClass: "text-orange-800" 
    },
    { 
      name: "Agriculture & Commodities", 
      icon: <FaAppleAlt className="text-3xl" />, 
      bgClass: "bg-purple-100", 
      textClass: "text-purple-800" 
    },
    { 
      name: "FMCG & Retail", 
      icon: <FaShoppingCart className="text-3xl" />, 
      bgClass: "bg-yellow-100", 
      textClass: "text-yellow-800" 
    },
    { 
      name: "Oil, Gas & Petrochemicals", 
      icon: <FaOilCan className="text-3xl" />, 
      bgClass: "bg-red-100", 
      textClass: "text-red-800" 
    },
    { 
      name: "Electronics & Electricals", 
      icon: <FaIndustry className="text-3xl" />, 
      bgClass: "bg-indigo-100", 
      textClass: "text-indigo-800" 
    },
    { 
      name: "Industrial Machinery", 
      icon: <FaIndustry className="text-3xl" />, 
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
    <main className="relative">
      {/* Hero Section */}
      <section className="customs-hero relative h-[90vh]">
        <div className="customs-container   relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-blue-300/30 shadow-lg mb-6 animate-fadeIn">
            <FaFileAlt className="text-3xl text-blue-200 mr-2" />
            <span className="font-semibold text-blue-100 tracking-wider">
              CUSTOMS CLEARANCE SERVICES
            </span>
          </div>
          <h1 className="customs-hero-title">
            Simplifying Global Trade with{" "}
            <span className="text-blue-200">Compliance, Speed & Accuracy</span>
          </h1>
          <p className="text-blue-100/90 max-w-3xl mx-auto text-lg  leading-relaxed">
            Our team of experienced professionals ensures smooth coordination
            for customs clearance services.  
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/contact" passHref>
              <button className="customs-button-secondary">
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
      <section className="customs-container relative z-20 py-12">
        <div className="customs-intro bg-white/90 p-8 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            At{" "}
            <strong className="text-[#00397E]">
              Ario Shipping & Logistics Pvt. Ltd.
            </strong>
            , we provide comprehensive customs clearance solutions that ensure
            your goods move across borders smoothly. With a team of experienced
            customs professionals, in-depth knowledge of regulatory frameworks,
            and strong relationships with customs authorities, we're your
            trusted partner in managing the complex landscape of international
            trade compliance.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Whether you're importing raw materials, exporting finished goods, or
            managing complex supply chains, our expertise helps avoid delays,
            minimize costs, and ensure full compliance with all regulations.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#00397E] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#00397E]">
                98% First-Time Clearance Rate
              </span>
            </div>
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#00397E] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#00397E]">
                24-48 Hour Standard Clearance
              </span>
            </div>
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#00397E] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#00397E]">
                Pan-India Coverage
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="customs-services mb-15 ">
        <div className="customs-container">
          <div className="customs-section-header">
            <div className="inline-flex items-center mt-30 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-[#00397E] font-medium mb-4">
              <FaFileAlt className="mr-2" /> OUR CAPABILITIES
            </div>
            <h2 className="customs-section-title">
              Comprehensive{" "}
              <span className="text-[#00397E]">Customs Solutions</span>
            </h2>
            <div className="customs-section-divider"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
              Our full range of customs clearance services designed to meet all
              your international trade requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="customs-service-card">
                <div className="customs-service-content">
                  <div className="customs-service-icon">{service.icon}</div>
                  <h3 className="customs-service-title">{service.title}</h3>
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
      <section className="customs-why py-16">
        <div className="customs-container" style={{marginTop: '0'}}>
          <div className="customs-section-header">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-300 text-[#00397D] font-medium mb-4 shadow-sm">
              <FaHandshake className="mr-2 text-[#00397D]" /> WHY CHOOSE US
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              Your Trusted{" "}
              <span className="relative">
                <span className="text-blue-200 relative z-10">
                  Compliance Partner
                </span>
                <span
                  className="absolute bottom-0 left-0 w-full h-2 bg-blue-400/30 z-0"
                  style={{ transform: "skewX(-15deg)" }}
                ></span>
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mx-auto mb-6"></div>
            <p className="text-blue-100/90 max-w-2xl mx-auto text-xl leading-relaxed font-light text-center pb-10">
              The competitive advantages that make us the preferred customs
              clearance provider
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="customs-feature-card">
                <div className="customs-feature-icon">{feature.icon}</div>
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
      <section className="customs-industries  bg-gradient-to-b from-gray-50 to-white mt-15">
        <div className="customs-container " >
          <div className="customs-section-header text-center">
            <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white border border-blue-100 text-[#00397E] font-medium mb-5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <FaIndustry className="mr-2 text-[#00397E]" />
              <span className="tracking-wide">INDUSTRIES WE SERVE</span>
            </div>
            <h2 className="customs-section-title">
              Specialized Solutions for{" "}
              <span className="text-[#00397E]">Every Sector</span>
            </h2>
            <div className="customs-section-divider mx-auto bg-blue-400"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-lg leading-relaxed">
              Our customs clearance services are trusted by clients across
              diverse industries
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-6 rounded-xl ${industry.bgClass} ${industry.textClass} border-2 border-transparent hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-lg transform hover:-translate-y-1`}
              >
                <div className="mb-3">{industry.icon}</div>
                <span className="font-semibold text-center">
                  {industry.name}
                </span>
                <div
                  className={`mt-3 w-8 h-1 rounded-full ${industry.bgClass.replace(
                    "bg-",
                    "bg-opacity-70 "
                  )}`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="customs-cta py-16">
        <div className="customs-cta-content">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-blue-300/30 text-blue-100 font-medium mb-6">
            <FaGlobe className="mr-2 text-blue-200" /> Custom Clearance
            Solutions
          </div>
          <h2 className="customs-section-title text-white">
            Ready to <span className="text-blue-200">Streamline</span> Your
            Customs Process?
          </h2>
          <p className="text-blue-100/90 max-w-2xl  mb-12 mx-auto mt-4 text-lg leading-relaxed">
            Navigating customs regulations can be complex, but with Ario, you
            gain a reliable partner who ensures your cargo clears customs
            without delay or complications.
          </p>
          <div className="customs-cta-buttons flex justify-center gap-4">
            <button 
  className="customs-button-secondary"
  onClick={handlePhoneClick}
>
  <FaPhoneAlt className="mr-2" /> +91 2244500487
</button>

<button 
  className="customs-button-secondary"
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