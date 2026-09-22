import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HRManagers() {
  const support = [
    'Training programme planning', 'Learner coordination', 'Learning implementation',
    'Workplace learning', 'Training administration', 'Programme monitoring',
    'Learner documentation', 'Progress reporting', 'Completion tracking'
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6">FOR HR & SDF MANAGERS</h1>
          <p className="text-xl text-[#E30613] font-bold mb-4">Skills Development Made Easier</p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We can support your HR and Skills Development team with the following:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {support.map((item, index) => (
            <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
              <CheckCircle2 size={20} className="text-[#E30613] shrink-0" />
              <span className="text-sm font-medium text-gray-800">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-[#E30613] text-white rounded-2xl p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">LET US HELP YOU IMPLEMENT YOUR TRAINING PLAN</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#E30613] font-bold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
            GET IN TOUCH <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}