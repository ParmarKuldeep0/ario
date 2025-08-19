'use client'
import React from 'react';
import { MdEmail } from 'react-icons/md';

function EmailFloat() {
  const email = "info@arioshipping.com";
  const subject = "Inquiry about Ario Shipping Services";
  const body = "Hello Ario Shipping Team,\n\nI would like to inquire about your services.\n\nBest regards,";

  const handleEmailClick = (e) => {
    e.preventDefault();
    
    // Create mailto URL
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // First try to open mailto link directly
    // This works better than window.open for mailto links
    const mailtoLink = document.createElement('a');
    mailtoLink.href = mailtoUrl;
    mailtoLink.click();

    // Set a longer timeout to check if mail client opened
    setTimeout(() => {
      // If we're still here after 2 seconds, open Gmail
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Create a temporary link element for Gmail
      const gmailLink = document.createElement('a');
      gmailLink.href = gmailUrl;
      gmailLink.target = '_blank';
      gmailLink.rel = 'noopener noreferrer';
      document.body.appendChild(gmailLink);
      gmailLink.click();
      document.body.removeChild(gmailLink);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleEmailClick}
        className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
        aria-label="Email Ario Shipping"
      >
        <div className="animate-bounce hover:animate-none">
          <MdEmail className="text-3xl group-hover:text-blue-100 transition-colors duration-300" />
        </div>
        
        <span className="absolute right-full mr-3 px-3 py-1 bg-white text-blue-800 text-sm font-medium rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Email Us
        </span>
      </button>
    </div>
  );
}

export default EmailFloat;