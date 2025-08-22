"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import logo from '../../../public/logo.jpg'
import Image from "next/image";
import './header.css'

const Header = ({ isLoading = false }) => { 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const services = [
    { name: "NVOCC Agency" },
    { name: "Vessel Agency" },
    { name: "Freight Forwarding" },
    { name: "Coastal Movement" },
    { name: "Transportation" },
    { name: "Customs Clearance" },
    { name: "CFS Stuffing" },
    { name: "Marine Insurance" },
    { name: "Fumigation" },
    { name: "Palletization" },
    { name: "DAP/DDP Shipments" }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (hamburgerRef.current && hamburgerRef.current.contains(event.target)) {
        return;
      }

      if (mobileMenuRef.current && mobileMenuRef.current.contains(event.target)) {
        return;
      }

      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
      }

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      setOpenDropdown(null);
    }
  };

  const handleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleMobileDropdown = () => {
    setOpenDropdown(prev => prev === "mobileServices" ? null : "mobileServices");
  };

  const createSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  if (isLoading) return null;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-30">
          {/* Logo - Centered on mobile, left on desktop */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src={logo}
                alt="Company Logo"
                width={70}
                height={70}
                priority
                className="h-31 w-10 md:h-51 md:w-21 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
              <Link href="/" className="px-2 py-1 text-gray-700 hover:text-blue-500 transition-colors duration-200 text-sm lg:text-base">
                Home
              </Link>
              <Link href="/About" className="px-2 py-1 text-gray-700 hover:text-blue-500 transition-colors duration-200 text-sm lg:text-base">
                About  
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative services" ref={dropdownRef}>
                <button
                  className="px-2 py-1 text-gray-700 hover:text-blue-500 transition-colors duration-200 flex items-center text-sm lg:text-base"
                  onMouseEnter={() => setOpenDropdown("services")}
                  onClick={() => handleDropdown("services")}
                  aria-expanded={openDropdown === "services"}
                  aria-haspopup="true"
                >
                  Services
                  <svg
                    className="w-3 h-3 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`absolute left-1/2   bg-white shadow-xl rounded-md  z-50 border border-gray-100 ${
                    openDropdown === "services" ? "block" : "hidden"
                  }`}
                  onMouseLeave={() => setOpenDropdown(null)}
                  style={{
                    transform: 'translateX(-50%)',
                    width: 'min(90vw, 220px)',
                    maxHeight: '70vh',
                    overflowY: 'auto'
                  }}
                >
                  <div className="px-1">
                    
                    <ul className="py-1">
                      {services.map((service) => (
                        <li key={service.name}>
                          <Link
  href={`/services/${createSlug(service.name)}`}
  className="flex items-center px-2 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-50 transition-colors text-sm md:text-base"
>
  <span>{service.name}</span>
</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <Link href="/csr" className="px-2 py-1 text-gray-700 hover:text-blue-500 transition-colors duration-200 text-sm lg:text-base">
                CSR
              </Link>
              <Link href="/career" className="px-2 py-1 text-gray-700 hover:text-blue-500 transition-colors duration-200 text-sm lg:text-base">
                Career
              </Link>
              <Link href="/contact" className="px-2 py-1 text-gray-700 hover:text-blue-500 transition-colors duration-200 text-sm lg:text-base">
                Contact
              </Link>
            </div>
          </nav>

          {/* CTA Button - Right side on desktop */}
          <div className="hidden md:flex items-center justify-end flex-shrink-0 ml-4">
            <Link href="/contact" passHref>
              <button 
                className="px-4 py-2 bg-[#00397D] text-white rounded-md hover:bg-[#00397D] transition-colors text-sm lg:text-base whitespace-nowrap"
              >
                Get a Quote
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
              {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              ref={hamburgerRef}
              className="text-gray-700 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-screen overflow-y-auto' : 'max-h-0 overflow-hidden'
          }`}
          ref={mobileMenuRef}
          style={{
            height: mobileMenuOpen ? 'calc(100vh - 4rem)' : '0'
          }}
        >
          <nav className="flex flex-col px-4 py-2 space-y-2">
            <Link
              href="/"
              className="py-3 px-3 text-gray-700 hover:text-blue-500 transition-colors duration-200 rounded-md"
              onClick={handleMobileLinkClick}
            >
              Home
            </Link>

            <Link
              href="/About"
              className="py-3 px-3 text-gray-700 hover:text-blue-500 transition-colors duration-200 rounded-md"
              onClick={handleMobileLinkClick}
            >
              About  
            </Link>

            {/* Mobile Services Dropdown */}
            <div ref={mobileDropdownRef} className="mb-2">
              <button
                className="w-full flex justify-between items-center py-3 px-3 text-gray-700 hover:text-blue-500 transition-colors duration-200 rounded-md"
                onClick={handleMobileDropdown}
              >
                <span>Services</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      openDropdown === "mobileServices"
                        ? "M5 15l7-7 7 7"
                        : "M19 9l-7 7-7-7"
                    }
                  />
                </svg>
              </button>
              <div
                className={`pl-4 transition-all duration-300 ${
                  openDropdown === "mobileServices" ? 'max-h-[1000px] overflow-y-auto' : 'max-h-0 overflow-hidden'
                }`}
                style={{
                  maxHeight: openDropdown === "mobileServices" ? '400px' : '0'
                }}
              >
                <ul className="py-1">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={`/services/${createSlug(service.name)}`}
                        className="block py-3 px-3 text-gray-600 hover:text-blue-500 rounded-md"
                        onClick={handleMobileLinkClick}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href="/csr"
              className="py-3 px-3 text-gray-700 hover:text-blue-500 transition-colors duration-200 rounded-md"
              onClick={handleMobileLinkClick}
            >
              CSR
            </Link>
            <Link
              href="/career"
              className="py-3 px-3 text-gray-700 hover:text-blue-500 transition-colors duration-200 rounded-md"
              onClick={handleMobileLinkClick}
            >
              Career
            </Link>
            <Link
              href="/contact"
              className="py-3 px-3 text-gray-700 hover:text-blue-500 transition-colors duration-200 rounded-md"
              onClick={handleMobileLinkClick}
            >
              Contact
            </Link>

            {/* Mobile CTA Button */}
            <div className="mt-2 mb-4">
              <Link href="/contact" passHref>
                <button 
                  className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  onClick={handleMobileLinkClick}
                >
                  Get a Quote
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;