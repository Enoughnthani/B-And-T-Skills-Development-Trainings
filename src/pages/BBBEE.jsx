import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function BBBEE() {
  const services = [
    'Learning and implementation', 'Skills programmes', 'Occupational qualifications', 
    'Employee development', 'Unemployed learner programmes', 'Workplace-based learning', 
    'Internships where applicable', 'Youth development', 'Training project administration', 
    'Learner recruitment', 'Learner monitoring', 'Training documentation', 'Project reporting'
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black text-white rounded-2xl overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
                Turn Skills Development Into <span className="text-[#E30613]">Meaningful Workforce Development</span>
              </h1>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Skills Development is one of the elements within the B-BBEE framework, and the applicable requirements can vary depending on the entity and sector code.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                B and T Skills Development Trainings works with businesses to implement structured training initiatives that can support their Skills Development strategies.
              </p>
              
              <div className="bg-gray-900 border border-gray-700 p-4 rounded-lg mb-8 text-sm text-gray-300 italic">
                "We assist organisations to implement structured Skills Development initiatives that may qualify for recognition under the applicable B-BBEE requirements, subject to the relevant Codes, Sector Codes and verification requirements."
              </div>

              <Link to="/contact" className="bg-[#E30613] text-white font-bold px-8 py-3 rounded-md hover:bg-red-700 transition-colors self-start flex items-center gap-2">
                REQUEST A PROPOSAL <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="bg-[#E30613] p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-6">Our B-BBEE-related services include:</h2>
              <ul className="space-y-3 text-white/90">
                {services.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}