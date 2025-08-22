import React from 'react'
import { FaEnvelope, FaLinkedinIn, FaMapPin, FaPhone } from 'react-icons/fa'
import Image from 'next/image'

function Footer() {
  const shippingServices = [
    { name: "NVOCC Agency", link: "/services/nvocc-agency" },
    { name: "Vessel Agency", link: "/services/vessel-agency" },
    { name: "Freight Forwarding", link: "/services/freight-forwarding" },
    { name: "Transportation", link: "/services/transportation" },
    { name: "Coastal Movement", link: "/services/coastal-movement" },
    { name: "Customs Clearance", link: "/services/customs-clearance" },
    { name: "CFS Stuffing", link: "/services/cfs-stuffing" },
    { name: "Marine Insurance", link: "/services/marine-insurance" },
    { name: "Fumigation", link: "/services/fumigation" },
    { name: "Palletization", link: "/services/palletization" },
    { name: "DAP/DDP Shipments", link: "/services/dap-ddp-shipments" },
  ];

  const firstServicesRow = shippingServices.slice(0, 6);
  const secondServicesRow = shippingServices.slice(6);

  const companyLinks = [
    { name: "About Us", link: "/About" },
    { name: "Contact", link: "/contact" },
    { name: "CSR", link: "/csr" },
    { name: "Careers", link: "/career" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 pt-12 pb-12 overflow-hidden border-t border-gray-200">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <a href="/">
              <Image 
                src="/logo-1.png"
                alt="Ario Shipping Logo"
                width={160}
                height={60}
                className="object-contain"
              />
            </a>
          </div>
          
          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-bold tracking-tight mb-6 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent text-center">Contact</h4>
            <ul className="space-y-4">
              <li className="text-gray-600">
                <div className="flex items-start">
                  <FaMapPin className="w-5 h-5 mr-3 mt-1 text-gray-400 flex-shrink-0" />
                  <div>
                    <address className="not-italic">
                      Office# 805, 8th floor, 
                      Plan S Business Park,<br/>
                      Plot No.: D 108/1, Shiravane MIDC,Nerul, 
                      Navi Mumbai - 400 706 
                    </address>
                  </div>
                </div>
              </li>
              <li>
                <a href="mailto:info@arioshipping.com" className="text-gray-600 hover:text-black transition-colors duration-300 flex items-start">
                  <FaEnvelope className="w-5 h-5 mr-3 mt-1 text-gray-400 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-gray-700 mb-1">Email</h5>
                    <span>info@arioshipping.com</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+91 2244500487" className="text-gray-600 hover:text-black transition-colors duration-300 flex items-start">
                  <FaPhone className="w-5 h-5 mr-3 mt-1 text-gray-400 flex-shrink-0 scale-x-[-1]" />
                  <div>
                    <h5 className="font-medium text-gray-700 mb-1">Phone</h5>
                    <span>+91 2244500487</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-center justify-center space-x-4 mt-6">
                  <a 
                    href="https://www.linkedin.com/company/ario-shipping-logistics-private-limited/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/90 border border-black/10 flex items-center justify-center text-gray-600 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg"
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                  <span className="text-sm text-gray-500">Connect with us</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-12">
          {/* Logo + Services Section */}
          <div className="md:col-span-2 grid-cols-1 md:grid-cols-3 gap-8 grid">
            {/* Logo Column */}
            <div className="flex items-start">
              <a href="/">
                <Image 
                  src="/logo-1.png"
                  alt="Ario Shipping Logo"
                  width={160}
                  height={60}
                  className="object-contain mt-1"
                />
              </a>
            </div>
            
            {/* Services Columns */}
            <div>
              <h4 className="text-lg font-bold tracking-tight mb-6 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent">Services</h4>
              <ul className="space-y-3">
                {firstServicesRow.map((service, idx) => (
                  <li key={idx}>
                    <a href={service.link} className="text-gray-600 hover:text-black transition-colors duration-300 flex items-center group">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold tracking-tight mb-6 opacity-0 pointer-events-none">Services</h4>
              <ul className="space-y-3">
                {secondServicesRow.map((service, idx) => (
                  <li key={idx}>
                    <a href={service.link} className="text-gray-600 hover:text-black transition-colors duration-300 flex items-center group">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company + Contact */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company */}
            <div>
              <h4 className="text-lg font-bold tracking-tight mb-6 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent">Quick Links</h4>
              <ul className="space-y-3">
                {companyLinks.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.link} className="text-gray-600 hover:text-black transition-colors duration-300 flex items-center group">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact */}
            <div className="md:col-span-2">
              <h4 className="text-lg font-bold tracking-tight mb-6 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent">Contact</h4>
              <div className="grid grid-cols-1 gap-6">
                <ul className="space-y-4">
                  <li className="text-gray-600">
                    <div className="flex items-start">
                      <FaMapPin className="w-5 h-5 mr-3 mt-1 text-gray-400 flex-shrink-0" />
                      <div>
                        <address className="not-italic">
                          Office# 805, 8th floor, 
                          Plan S Business Park,<br/>
                          Plot No.: D 108/1, Shiravane MIDC,<br/>  Nerul, 
                          Navi Mumbai - 400 706 
                        </address>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="mailto:info@arioshipping.com" className="text-gray-600 hover:text-black transition-colors duration-300 flex items-start">
                      <FaEnvelope className="w-5 h-5 mr-3 mt-1 text-gray-400 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-gray-700 mb-1">Email</h5>
                        <span>info@arioshipping.com</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+91 2244500487" className="text-gray-600 hover:text-black transition-colors duration-300 flex items-start">
                      <FaPhone className="w-5 h-5 mr-3 mt-1 text-gray-400 flex-shrink-0 scale-x-[-1]" />
                      <div>
                        <h5 className="font-medium text-gray-700 mb-1">Phone</h5>
                        <span>+91 2244500487</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center space-x-4 mt-6">
                      <a 
                        href="https://www.linkedin.com/company/ario-shipping-logistics-private-limited/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-white/90 border border-black/10 flex items-center justify-center text-gray-600 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg"
                      >
                        <FaLinkedinIn size={18} />
                      </a>
                      <span className="text-sm text-gray-500">Connect with us</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-black/10 text-center">
          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} Ario Shipping. All rights reserved. <span><a href="https://bcsads.com/" target='_blank' rel="noopener noreferrer" className="hover:text-black">Developed By BCS Group</a></span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer