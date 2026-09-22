import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, Truck, ShoppingCart, Factory, Landmark, Building2, Sprout, ArrowRight } from 'lucide-react';

export default function Industries() {
  const industries = [
    { icon: <HardHat size={32} className="text-[#E30613]" />, title: 'Mining', desc: 'Workforce development and occupational training.' },
    { icon: <Truck size={32} className="text-[#E30613]" />, title: 'Logistics & Transport', desc: 'Training for transport, warehousing and distribution environments.' },
    { icon: <ShoppingCart size={32} className="text-[#E30613]" />, title: 'Retail', desc: 'Customer service, administration, sales and management.' },
    { icon: <Factory size={32} className="text-[#E30613]" />, title: 'Manufacturing', desc: 'Employee development, administration and supervisory training.' },
    { icon: <Landmark size={32} className="text-[#E30613]" />, title: 'Financial Services', desc: 'Business administration, customer service and workplace skills.' },
    { icon: <Building2 size={32} className="text-[#E30613]" />, title: 'Construction', desc: 'Workplace and occupational development.' },
    { icon: <Sprout size={32} className="text-[#E30613]" />, title: 'Agriculture', desc: 'Skills development for agricultural organisations.' },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6">TRAINING ACROSS MULTIPLE INDUSTRIES</h1>
          <p className="text-xl text-[#E30613] font-bold mb-4">Sector-Relevant Skills Development</p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We deliver structured training programmes tailored to the operational realities of each industry we serve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all group">
              <div className="mb-6">{industry.icon}</div>
              <h2 className="text-2xl font-bold text-black mb-3 group-hover:text-[#E30613] transition-colors">{industry.title}</h2>
              <p className="text-gray-600 leading-relaxed">{industry.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-black text-white rounded-2xl p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Don't see your industry? We can build a custom training solution.
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#E30613] text-white font-bold px-8 py-3 rounded-md hover:bg-red-700 transition-colors">
            TALK TO OUR TEAM <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}