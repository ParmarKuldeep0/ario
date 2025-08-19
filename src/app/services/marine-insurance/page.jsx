'use client'
import './page.css';
import { 
  FaShieldAlt,
  FaShip,
  FaPlane,
  FaTruck,
  FaWarehouse,
  FaFileContract,
  FaHandshake,
  FaChartLine,
  FaFlask,
  FaTshirt,
  FaCar,
  FaAppleAlt,
  FaBoxes,
  FaPhoneAlt,
  FaEnvelope,
  FaAnchor
} from 'react-icons/fa';
import Link from 'next/link';

export default function MarineInsuranceServices() {
  // Coverage Data
  const coverages = [
    {
      icon: <FaShieldAlt className="text-4xl text-[#00397E]" />,
      title: "All-Risk Coverage",
      description: "Protection against natural disasters, fire, theft, and handling damage"
    },
    {
      icon: <FaFileContract className="text-4xl text-[#00397E]" />,
      title: "Institute Cargo Clauses",
      description: "ICC A (all-risk), ICC B (named perils), and ICC C (basic coverage) options"
    },
    {
      icon: <FaWarehouse className="text-4xl text-[#00397E]" />,
      title: "Warehouse-to-Warehouse",
      description: "Coverage from seller's warehouse to buyer's warehouse including all transit points"
    },
    {
      icon: <FaShip className="text-4xl text-[#00397E]" />,
      title: "Custom Coverage Extensions",
      description: "Additional protection for war, strikes, riots and civil commotion (SRCC)"
    },
    {
      icon: <FaHandshake className="text-4xl text-[#00397E]" />,
      title: "Open & Specific Policies",
      description: "Flexible options for regular shipments or one-time consignments"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#00397E]" />,
      title: "Third-Party Liability",
      description: "Coverage for legal liabilities arising from cargo-related damages"
    }
  ];

  // Value Proposition Data
  const values = [
    {
      icon: <FaShieldAlt className="text-5xl text-blue-400" />,
      title: "Trusted Insurance Partners",
      description: "IRDAI-registered companies with fast claim processing"
    },
    {
      icon: <FaChartLine className="text-5xl text-blue-400" />,
      title: "Expert Consultation",
      description: "Guidance in selecting optimal coverage for your shipment"
    },
    {
      icon: <FaHandshake className="text-5xl text-blue-400" />,
      title: "Competitive Premiums",
      description: "Cost-effective rates with maximum coverage benefits"
    },
    {
      icon: <FaFileContract className="text-5xl text-blue-400" />,
      title: "Integrated Documentation",
      description: "Seamless coordination with freight and customs services"
    },
    {
      icon: <FaShieldAlt className="text-5xl text-blue-400" />,
      title: "Fast Claim Assistance",
      description: "Efficient claim filing and processing support"
    },
    {
      icon: <FaShip className="text-5xl text-blue-400" />,
      title: "Global Coverage",
      description: "Protection for shipments across all transport modes worldwide"
    }
  ];

  // Industries Data
  const industries = [
    { 
      name: "Engineering & Machinery", 
      icon: <FaCar className="text-3xl" />, 
      bgClass: "bg-blue-100", 
      textClass: "text-blue-800" 
    },
    { 
      name: "Pharmaceuticals & Chemicals", 
      icon: <FaFlask className="text-3xl" />, 
      bgClass: "bg-green-100", 
      textClass: "text-green-800" 
    },
    { 
      name: "Agro Commodities & Food", 
      icon: <FaAppleAlt className="text-3xl" />, 
      bgClass: "bg-yellow-100", 
      textClass: "text-yellow-800" 
    },
    { 
      name: "Textiles & Apparel", 
      icon: <FaTshirt className="text-3xl" />, 
      bgClass: "bg-purple-100", 
      textClass: "text-purple-800" 
    },
    { 
      name: "Automotive & Parts", 
      icon: <FaCar className="text-3xl" />, 
      bgClass: "bg-red-100", 
      textClass: "text-red-800" 
    },
    { 
      name: "Industrial Raw Materials", 
      icon: <FaBoxes className="text-3xl" />, 
      bgClass: "bg-orange-100", 
      textClass: "text-orange-800" 
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
      <section className="marine-hero relative  bg-blue-900">
        <div className="marine-container relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-blue-300/30 shadow-lg mb-6 animate-fadeIn">
            <FaShieldAlt className="text-3xl text-blue-200 mr-2" />
            <span className="font-semibold text-blue-100 tracking-wider">
              MARINE INSURANCE SERVICES
            </span>
          </div>
          <h1 className="marine-hero-title">
            Safeguarding Your Shipments with{" "}
            <span className="text-blue-200">Confidence and Assurance</span>
          </h1>
          <p className="text-blue-100/90 max-w-3xl mx-auto text-lg leading-relaxed">
            At Ario Shipping, we provide comprehensive Marine Insurance to
            protect your cargo from unforeseen circumstances during transit by
            sea, air, or land.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/contact" passHref>
              <button className="marine-button-secondary">
               <FaPhoneAlt className="ml-2" /> Get Insurance Quote  
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="marine-container relative z-20 py-12">
        <div className="marine-intro bg-white/90 p-8 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            At{" "}
            <strong className="text-[#00397E]">
              Ario Shipping & Logistics Pvt. Ltd.
            </strong>
            , we understand that international trade comes with inherent risks
            ranging from natural calamities to human errors, theft, and cargo
            damage. Marine Insurance provides financial protection against these
            uncertainties throughout your cargo's journey.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            While shipping lines have limited liability, our marine insurance
            offers comprehensive coverage tailored to your shipment's unique
            needs, giving you peace of mind whether you're exporting, importing,
            or trading goods globally.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#00397E] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#00397E]">
                All Transport Modes Covered
              </span>
            </div>
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#00397E] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#00397E]">
                Warehouse-to-Warehouse Protection
              </span>
            </div>
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#00397E] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#00397E]">
                Fast Claim Processing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="marine-services  bg-gray-50">
        <div className="marine-container">
          <div className="marine-section-header">
            <div className="text-center">
  <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-[#00397E] font-medium mb-4">
              <FaShieldAlt className="mr-2" /> OUR COVERAGE
            </div>
            </div>
            <h2 className="marine-section-title text-center" >
              Comprehensive{" "}
              <span className="text-[#00397E]">Insurance Protection</span>
            </h2>
            <div className="marine-section-divider"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
              Flexible marine insurance solutions designed to mitigate risks
              throughout your supply chain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[30px]" >
            {coverages.map((coverage, index) => (
              <div key={index} className="marine-service-card">
                <div className="marine-service-content">
                  <div className="marine-service-icon">{coverage.icon}</div>
                  <h3 className="marine-service-title">{coverage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {coverage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="marine-why  bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="marine-container" style={{ margin: "0 auto" }}>
          <div className="marine-section-header">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-[#00397D] font-medium mb-4">
                <FaShieldAlt className="mr-2 text-[#00397D]" /> OUR VALUE
                PROPOSITION
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              Why Choose Ario for{" "}
              <span className="relative">
                <span className="text-blue-200 relative z-10">
                  Marine Insurance
                </span>
                <span
                  className="absolute bottom-0 left-0 w-full h-2 bg-blue-400/30 z-0"
                  style={{ transform: "skewX(-15deg)" }}
                ></span>
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mx-auto mb-6"></div>
            <p className="text-blue-100/90 max-w-2xl mx-auto text-xl leading-relaxed font-light text-center pb-10">
              We go beyond basic coverage to provide strategic risk management
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="marine-feature-card">
                <div className="marine-feature-icon">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {value.title}
                </h3>
                <p className="text-blue-100/90 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Insure Section */}
      <section className="marine-container py-16">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-blue-50 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#00397E] mb-4">
                When Should You Insure Your Cargo?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-[#00397E] rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-700">
                    Shipping high-value or fragile goods
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-[#00397E] rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-700">
                    Moving shipments through volatile regions or congested ports
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-[#00397E] rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-700">
                    Using multimodal transport (Sea + Air + Land)
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-[#00397E] rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-700">
                    Exporting/importing bulk commodities
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-[#00397E] rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-700">
                    Working under CIF or DDP trade terms
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-[#00397E] p-8 md:p-12 flex flex-col justify-center">
              <div className="max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Key Benefits of Marine Insurance
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaShieldAlt className="h-5 w-5 text-blue-200" />
                    </div>
                    <p className="ml-3 text-blue-50">
                      Financial protection against physical loss or damage
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaChartLine className="h-5 w-5 text-blue-200" />
                    </div>
                    <p className="ml-3 text-blue-50">
                      Risk mitigation for unpredictable events
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaHandshake className="h-5 w-5 text-blue-200" />
                    </div>
                    <p className="ml-3 text-blue-50">
                      Enhanced credibility with buyers and banks
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaFileContract className="h-5 w-5 text-blue-200" />
                    </div>
                    <p className="ml-3 text-blue-50">
                      Compliance with international trade requirements
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaShip className="h-5 w-5 text-blue-200" />
                    </div>
                    <p className="ml-3 text-blue-50">
                      Peace of mind throughout the supply chain
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="marine-industries bg-gradient-to-b from-gray-50 to-white">
        <div className="marine-container">
          <div className="marine-section-header text-center">
            <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white border border-blue-100 text-[#00397E] font-medium mb-5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <FaShieldAlt className="mr-2 text-[#00397E]" />
              <span className="tracking-wide">INDUSTRIES WE SERVE</span>
            </div>
            <h2 className="marine-section-title">
              Specialized Insurance for{" "}
              <span className="text-[#00397E]">Diverse Sectors</span>
            </h2>
            <div className="marine-section-divider mx-auto bg-blue-400"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-lg leading-relaxed">
              We provide customized marine insurance solutions across multiple
              industries
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7">
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
      <section className="marine-cta py-16 bg-blue-700">
        <div className="marine-cta-content">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-blue-300/30 text-blue-100 font-medium mb-6">
            <FaAnchor className="mr-2 text-blue-200" /> Marine Insurance Services
          </div>
          <h2 className="marine-cta-title">
            Ready to <span className="text-blue-200">Secure</span> Your
            Shipments?
          </h2>
          <p className="text-blue-100/90 max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
            With our marine insurance solutions, trade with confidence knowing
            your cargo is protected against unforeseen risks throughout its
            journey.
          </p>
          <div className="marine-cta-buttons flex gap-4 justify-center mt-8">
            <button
              className="marine-button-secondary"
              onClick={handlePhoneClick}
            >
              <FaPhoneAlt className="mr-2" /> +91 2244500487
            </button>

            <button
              className="marine-button-secondary"
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