import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Procurement() {
  const fields = [
    'Company name', 'Industry', 'Number of learners', 'Number of employees',
    'Training requirement', 'Location/s', 'Expected start date', 'Preferred programme',
    'Contact person', 'Email', 'Telephone'
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6">FOR PROCUREMENT DEPARTMENTS</h1>
          <p className="text-xl text-[#E30613] font-bold mb-4">Looking For A Skills Development Training Provider?</p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We can work with organisations requiring structured training services across multiple locations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">Request a proposal by providing:</h2>
            <div className="grid grid-cols-2 gap-3">
              {fields.map((field, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E30613]"></div>
                  <span className="text-sm text-gray-700">{field}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold text-black mb-6">Quick Enquiry</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Company Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#E30613] focus:border-[#E30613] outline-none" />
              <input type="text" placeholder="Training Requirement" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#E30613] focus:border-[#E30613] outline-none" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#E30613] focus:border-[#E30613] outline-none" />
              <Link to="/contact" className="w-full bg-[#E30613] text-white font-bold py-3 rounded-md hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                SUBMIT ENQUIRY <ArrowRight size={18} />
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}