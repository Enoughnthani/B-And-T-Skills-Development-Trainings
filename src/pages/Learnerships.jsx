import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, ArrowRight } from 'lucide-react';

export default function Learnerships() {
  const supportList = [
    'Programme planning', 'Learner recruitment', 'Learner screening', 
    'Learner registration', 'Training delivery', 'Learner support', 
    'Workplace coordination', 'Portfolio of Evidence support', 
    'Assessment coordination', 'Progress monitoring', 
    'Completion administration', 'Reporting'
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6">LEARNERSHIPS</h1>
          <p className="text-xl text-[#E30613] font-bold mb-4">Learning That Connects People To The Workplace</p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learnerships provide a structured combination of learning and practical workplace experience. B and T Skills Development Trainings can assist organisations with the implementation of appropriate learnership projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <div className="text-[#E30613] mb-4"><GraduationCap size={40} /></div>
            <h2 className="text-2xl font-bold text-black mb-4">Employer Learnerships</h2>
            <p className="text-gray-600">For companies wanting to develop their existing employees.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <div className="text-[#E30613] mb-4"><Users size={40} /></div>
            <h2 className="text-2xl font-bold text-black mb-4">Unemployed Learnerships</h2>
            <p className="text-gray-600">For organisations wanting to create structured learning opportunities for unemployed people.</p>
          </div>
        </div>

        <div className="bg-black text-white rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Learnership Support</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {supportList.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-gray-900 p-3 rounded-lg border border-gray-800">
                <div className="w-2 h-2 rounded-full bg-[#E30613]"></div>
                <span className="text-sm text-gray-300">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#E30613] text-white font-bold px-8 py-3 rounded-md hover:bg-red-700 transition-colors">
              ENQUIRE ABOUT LEARNERSHIPS <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}