"use client";
import { useState } from "react";
import Link from "next/link";

export default function ArioAccordion() {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const faqItems = [
    {
      id: "item1",
      question: "What shipping services does Ario provide?",
      answer: "Ario Shipping offers comprehensive logistics solutions including international freight forwarding, air cargo, ocean shipping (FCL/LCL), customs clearance, warehousing, and last-mile delivery services tailored to your business needs."
    },
    
    {
      id: "item3",
      question: "What factors determine shipping rates?",
      answer: "Our rates are calculated based on destination, package dimensions/weight, service urgency, and any special handling requirements. We offer competitive pricing with volume discounts for regular customers."
    },
    {
      id: "item4",
      question: "What documents are required for international shipping?",
      answer: "Required documents vary by destination but typically include commercial invoice, packing list, certificate of origin, and any required permits. Our team will guide you through all documentation requirements for your specific shipment."
    },
    {
      id: "item5",
      question: "How does Ario handle customs clearance?",
      answer: "Our certified customs brokers manage the entire clearance process, including document preparation, duty/tax calculation, and regulatory compliance. We maintain strong relationships with customs authorities worldwide to ensure smooth clearance."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-900 mb-3">Frequently Asked Questions</h2>
        <p className="text-lg text-[#00397D]">Everything you need to know about Ario Shipping services</p>
      </div>
      
      <div className="space-y-4">
        {faqItems.map((item) => (
          <div 
            key={item.id} 
            className={`border border-blue-100 rounded-xl overflow-hidden transition-all duration-200 ${activeId === item.id ? 'shadow-md' : 'shadow-sm'}`}
          >
            <button
              className={`w-full p-6 text-left flex justify-between items-center transition-colors duration-200 ${activeId === item.id ? 'bg-[#00387F] text-white' : 'bg-white hover:bg-blue-50 text-blue-900'}`}
              onClick={() => toggleAccordion(item.id)}
            >
              <span className="text-lg font-semibold">{item.question}</span>
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${activeId === item.id ? 'transform rotate-180 text-white' : 'text-blue-600'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`px-6 overflow-hidden transition-all duration-300 ${activeId === item.id ? 'max-h-96 py-6 bg-blue-50' : 'max-h-0'}`}
            >
              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-600 mb-4">Still have questions?</p>
        <Link href="/contact" passhref>
          <button className="bg-[#00397D] hover:bg-[#00397D] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
            Contact Our Support Team
          </button>
        
        </Link>
      </div>
    </div>
  );
}