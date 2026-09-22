import React from 'react';
import { Link } from 'react-router-dom';
import { Award, GraduationCap, Briefcase, Users, Monitor, Target, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: <Award size={40} className="text-[#E30613]" />, title: 'B-BBEE Skills Development', desc: 'Training solutions designed to support organisations implementing their Skills Development strategies.', link: '/bbbee' },
    { icon: <GraduationCap size={40} className="text-[#E30613]" />, title: 'Learnerships', desc: 'Structured learning programmes combining theoretical learning with practical workplace experience.', link: '/learnerships' },
    { icon: <Briefcase size={40} className="text-[#E30613]" />, title: 'Occupational Training', desc: 'Occupationally directed programmes designed around workplace competence.', link: '/corporate-training' },
    { icon: <Users size={40} className="text-[#E30613]" />, title: 'Corporate Training', desc: 'Practical training programmes designed around the needs of employees and organisations.', link: '/corporate-training' },
    { icon: <Monitor size={40} className="text-[#E30613]" />, title: 'Workplace Learning', desc: 'Structured practical learning, workplace activities and evidence-based development.', link: '/corporate-training' },
    { icon: <Target size={40} className="text-[#E30613]" />, title: 'Youth Development', desc: 'Programmes supporting the development of unemployed and employed young people.', link: '/learnerships' },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6">Skills Development Solutions Built Around Your Business</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            At B and T Skills Development Trainings, we understand that every organisation has different workforce requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all group flex flex-col">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-[#E30613] transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed flex-grow">{service.desc}</p>
              <Link to={service.link} className="mt-6 inline-flex items-center gap-2 text-[#E30613] font-bold hover:underline">
                LEARN MORE <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}