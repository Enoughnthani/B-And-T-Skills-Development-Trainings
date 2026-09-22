import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function OurDifference() {
  const journey = [
    { from: 'Training', to: 'Skills' },
    { from: 'Skills', to: 'Workplace Competence' },
    { from: 'Workplace Competence', to: 'Business Value' },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6">TRAINING IS ONLY THE BEGINNING</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            At B and T, our objective is not simply to deliver training days. We focus on the complete learner and business journey.
          </p>
        </div>

        {/* Journey Section */}
        <div className="bg-black text-white rounded-2xl p-10 md:p-16 mb-16">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-6 text-center">
            {journey.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-500 uppercase tracking-widest mb-2">From</span>
                  <span className="text-2xl font-bold text-gray-300">{step.from}</span>
                  <ArrowDown size={24} className="text-[#E30613] mt-4 lg:hidden" />
                  <span className="text-xs text-gray-500 uppercase tracking-widest mt-4 lg:mt-6 mb-2">To</span>
                  <span className={`text-2xl font-bold ${index === journey.length - 1 ? 'text-[#E30613]' : 'text-white'}`}>
                    {step.to}
                  </span>
                </div>
                {index < journey.length - 1 && (
                  <ArrowRight size={32} className="text-[#E30613] hidden lg:block mt-6" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Explanation Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <div className="w-12 h-12 bg-[#E30613] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
            <h3 className="text-xl font-bold text-black mb-3">Beyond Training Days</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We measure our success not by attendance registers, but by the practical capability that learners take back into the workplace.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <div className="w-12 h-12 bg-[#E30613] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
            <h3 className="text-xl font-bold text-black mb-3">Workplace Competence</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our programmes are structured around the actual demands of the workplace — so learning translates into real performance.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <div className="w-12 h-12 bg-[#E30613] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
            <h3 className="text-xl font-bold text-black mb-3">Business Value</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Skills development should contribute to the business — improved productivity, retention, transformation and growth.
            </p>
          </div>
        </div>

        <div className="bg-[#E30613] text-white rounded-2xl p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to move beyond training for the sake of training?
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#E30613] font-bold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
            START THE CONVERSATION <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}