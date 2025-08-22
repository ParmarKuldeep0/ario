'use client'
import './page.css';
import { 
  FaBox,
  FaPallet,
  FaShieldAlt,
  FaWarehouse,
  FaTruck,
  FaShip,
  FaPlane,
  FaCheckCircle,
  FaClipboardList,
  FaBarcode,
  FaIndustry,
  FaShoppingBasket,
  FaFlask,
  FaCar,
  FaBoxes,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';
import Link from 'next/link';

export default function PalletizationServices() {
  // Services Data
  const services = [
    {
      icon: <FaPallet className="text-4xl text-[#00397E]" />,
      title: "Standard & Custom Palletizing",
      description: "Tailored solutions based on cargo size, weight, and transportation mode"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#00397E]" />,
      title: "ISPM-15 Certified Pallets",
      description: "Heat-treated wooden pallets compliant with international phytosanitary standards"
    },
    {
      icon: <FaBox className="text-4xl text-[#00397E]" />,
      title: "Reinforced Packaging",
      description: "Specialized protection for fragile and high-value goods"
    },
    {
      icon: <FaWarehouse className="text-4xl text-[#00397E]" />,
      title: "Stretch-Wrapping & Strapping",
      description: "Secure cargo stabilization for safe transit"
    },
    {
      icon: <FaClipboardList className="text-4xl text-[#00397E]" />,
      title: "Labeling & Barcoding",
      description: "Inventory management and tracking solutions"
    },
    {
      icon: <FaCheckCircle className="text-4xl text-[#00397E]" />,
      title: "Multi-Modal Preparation",
      description: "Palletization for air freight, sea freight, and inland transport"
    }
  ];

  // Benefits Data
  const benefits = [
    {
      icon: <FaShieldAlt className="text-5xl text-blue-400" />,
      title: "Damage Reduction",
      description: "Minimizes risk of cargo shift or breakage during handling"
    },
    {
      icon: <FaTruck className="text-5xl text-blue-400" />,
      title: "Faster Handling",
      description: "Enables quick loading/unloading with forklift or pallet jack"
    },
    {
      icon: <FaBox className="text-5xl text-blue-400" />,
      title: "Cargo Integrity",
      description: "Prevents pilferage, contamination, and exposure"
    },
    {
      icon: <FaWarehouse className="text-5xl text-blue-400" />,
      title: "Standardized Packaging",
      description: "Essential for warehouse stacking and container planning"
    },
    {
      icon: <FaShip className="text-5xl text-blue-400" />,
      title: "Global Compliance",
      description: "Meets ISPM-15 requirements for international shipping"
    },
    {
      icon: <FaBarcode className="text-5xl text-blue-400" />,
      title: "Inventory Control",
      description: "Improved tracking and management throughout supply chain"
    }
  ];

  // Industries Data
  const industries = [
    { 
      name: "FMCG & Retail", 
      icon: <FaShoppingBasket className="text-3xl" />, 
      bgClass: "bg-blue-100", 
      textClass: "text-blue-800" 
    },
    { 
      name: "Pharmaceuticals", 
      icon: <FaFlask className="text-3xl" />, 
      bgClass: "bg-green-100", 
      textClass: "text-green-800" 
    },
    { 
      name: "Electronics", 
      icon: <FaIndustry className="text-3xl" />, 
      bgClass: "bg-yellow-100", 
      textClass: "text-yellow-800" 
    },
    { 
      name: "Food & Agro", 
      icon: <FaBoxes className="text-3xl" />, 
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
      name: "Consumer Goods", 
      icon: <FaBox className="text-3xl" />, 
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
      <section className="pallet-hero relative   bg-blue-900">
        <div className="pallet-container relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-blue-300/30 shadow-lg mb-6 animate-fadeIn">
            <FaPallet className="text-3xl text-blue-200 mr-2" />
            <span className="font-semibold text-blue-100 tracking-wider">PALLETIZATION SERVICES</span>
          </div>
          <h1 className="pallet-hero-title">
            Enhancing Cargo Safety, Handling Efficiency <span className="text-blue-200">& Global Compliance</span>
          </h1>
          <p className="text-blue-100/90 max-w-3xl mx-auto text-lg leading-relaxed">
            At Ario Shipping, we optimize your shipments with professional palletization for seamless movement through supply chains worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/contact" passHref>
              <button className="pallet-button-secondary">
               <FaPhoneAlt className="ml-2" /> Get Palletization Quote  
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="pallet-container relative z-20 py-12">
        <div className="pallet-intro bg-white/90 p-8 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            At <strong className="text-[#00397E]">Ario Shipping & Logistics Pvt. Ltd.</strong>, we understand that successful global logistics begins with how your cargo is packed and prepared. Our palletization services ensure your shipments are handled safely, efficiently, and in full compliance with international standards.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Palletization is more than stacking goods—it's about optimizing space, improving security, and reducing transit damage. We prepare your cargo for seamless movement through supply chains, ports, customs, and final delivery.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#00397E] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#00397E]">ISPM-15 Certified Pallets</span>
            </div>
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#00397E] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#00397E]">Multi-Modal Preparation</span>
            </div>
            <div className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 bg-[#00397E] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#00397E]">Damage Reduction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pallet-services py-16 bg-gray-50">
        <div className="pallet-container">
          <div className="pallet-section-header">
           <div className="text-center">
  <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-[#00397E] font-medium mb-4">
              <FaPallet className="mr-2" /> OUR SERVICES
            </div>
            </div>
            <h2 className="pallet-section-title text-center">
              Comprehensive <span className="text-[#00397E]">Palletization Solutions</span>
            </h2>
            <div className="pallet-section-divider"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg leading-relaxed text-center">
              Professional palletization services for all your shipping needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="pallet-service-card">
                <div className="pallet-service-content">
                  <div className="pallet-service-icon">
                    {service.icon}
                  </div>
                  <h3 className="pallet-service-title">{service.title}</h3>
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
      <section className="pallet-benefits py-16 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="pallet-container" style={{marginTop: '0'}}>
          <div className="pallet-section-header">
            <div className="text-center">
  <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-[#00397E] font-medium mb-4">
              <FaCheckCircle className="mr-2 text-[#00397E]" /> WHY PALLETIZATION MATTERS
            </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              Key Benefits of <span className="relative">
                <span className="text-blue-200 relative z-10">Professional Palletization</span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-400/30 z-0" style={{ transform: 'skewX(-15deg)' }}></span>
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mx-auto mb-6"></div>
            <p className="text-blue-100/90 max-w-2xl mx-auto text-xl leading-relaxed font-light text-center pb-10">
              How proper palletization enhances your supply chain efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="pallet-benefit-card">
                <div className="pallet-benefit-icon">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-blue-100/90 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="pallet-container py-16">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-blue-50 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#00397E] mb-4">Our Palletization Process</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-[#00397E] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-700">Assessment of cargo type, dimensions, and weight</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-[#00397E] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-700">Selection of appropriate pallet type and size</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-[#00397E] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-700">Strategic stacking and load distribution</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-[#00397E] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-700">Secure wrapping and strapping</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-[#00397E] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-700">Labeling and documentation</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-[#00397E] p-8 md:p-12 flex flex-col justify-center">
              <div className="max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Ario for Palletization?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaShieldAlt className="h-5 w-5 text-blue-200" />
                    </div>
                    <p className="ml-3 text-blue-50">Expert handling across all cargo types</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaCheckCircle className="h-5 w-5 text-blue-200" />
                    </div>
                    <p className="ml-3 text-blue-50">Compliant materials meeting ISPM-15 standards</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaTruck className="h-5 w-5 text-blue-200" />
                    </div>
                    <p className="ml-3 text-blue-50">Integrated with your logistics workflow</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaClipboardList className="h-5 w-5 text-blue-200" />
                    </div>
                    <p className="ml-3 text-blue-50">Complete documentation support</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaPlane className="h-5 w-5 text-blue-200" />
                    </div>
                    <p className="ml-3 text-blue-50">Time-sensitive execution for urgent shipments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="pallet-industries py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="pallet-container" >
          <div className="pallet-section-header text-center">
            <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white border border-blue-100 text-[#00397E] font-medium mb-5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <FaIndustry className="mr-2 text-[#00397E]" /> 
              <span className="tracking-wide">INDUSTRIES WE SERVE</span>
            </div>
            <h2 className="pallet-section-title">
              Palletization for <span className="text-[#00397E]">Diverse Sectors</span>
            </h2>
            <div className="pallet-section-divider mx-auto bg-blue-400"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-lg leading-relaxed">
              Custom palletization solutions tailored to your industry requirements
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
      <section className="pallet-cta py-16 bg-blue-700">
        <div className="pallet-cta-content">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-blue-300/30 text-blue-100 font-medium mb-6">
            <FaPallet className="mr-2 text-blue-200" /> READY TO PALLETIZE
          </div>
          <h2 className="pallet-cta-title">
            Optimize Your <span className="text-blue-200">Cargo Handling</span>
          </h2>
          <p className="text-blue-100/90 max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
            Our palletization services ensure your shipments are secure, compliant, and ready for global success.
          </p>
          <div className="pallet-cta-buttons flex gap-4 justify-center mt-8">
           <button 
  className="pallet-button-secondary"
  onClick={handlePhoneClick}
>
  <FaPhoneAlt className="mr-2" /> +91 2244500487
</button>

<button 
  className="pallet-button-secondary"
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