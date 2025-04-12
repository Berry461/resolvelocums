"use client";
import React, { useState } from 'react';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <span className="text-gray-500 text-xl">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          {children}
        </div>
      )}
    </div>
  );
};

const FAQPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
        
        <div className="space-y-2">
          <AccordionItem title="Why work locum tenens?">
            <p className="text-sm text-gray-700 mb-3">
              Providers choose to work locum tenens for a variety of reasons, including, but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
              <li>Supplemental income</li>
              <li>Change of lifestyle</li>
              <li>Ability to travel and see new places</li>
              <li>Try new practice settings</li>
              <li>Gain new clinical skills</li>
              <li>Waiting to start a fellowship</li>
            </ul>
          </AccordionItem>

          {/* Additional FAQ items can be added like this */}
          <AccordionItem title="What are the requirements to work locum tenens?">
            <p className="text-sm text-gray-700">
              Requirements typically include a valid medical license, board certification (for physicians), 
              malpractice insurance, and relevant experience in your specialty.
            </p>
          </AccordionItem>

          <AccordionItem title="How does payment work for locum tenens?">
            <p className="text-sm text-gray-700">
              Locum tenens providers are typically paid hourly or daily rates, with additional compensation 
              for travel and housing expenses. Payments are usually processed weekly or bi-weekly.
            </p>
          </AccordionItem>

          <AccordionItem title="Can I choose my assignments?">
            <p className="text-sm text-gray-700">
              Yes, one of the main benefits of locum tenens work is the ability to choose assignments that 
              match your preferences for location, duration, and practice setting.
            </p>
          </AccordionItem>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;