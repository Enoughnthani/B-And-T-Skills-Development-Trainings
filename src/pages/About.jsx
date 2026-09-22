import React from 'react';
import { ShieldCheck, Handshake, Lightbulb, TrendingUp, Target, Award } from 'lucide-react';

export default function About() {
  const values = [
    { icon: <Award size={32} />, title: 'QUALITY', desc: 'We are committed to delivering structured and relevant training.' },
    { icon: <ShieldCheck size={32} />, title: 'INTEGRITY', desc: 'We operate professionally and transparently.' },
    { icon: <Lightbulb size={32} />, title: 'EMPOWERMENT', desc: 'We believe skills should create opportunities.' },
    { icon: <Handshake size={32} />, title: 'PARTNERSHIP', desc: 'We work collaboratively with businesses and stakeholders.' },
    { icon: <TrendingUp size={32} />, title: 'INNOVATION', desc: 'We continuously adapt our training solutions to changing workplace requirements.' },
    { icon: <Target size={32} />, title: 'IMPACT', desc: 'Our objective is meaningful development rather than training for the sake of training.' },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6">Your National Skills Development Partner</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            B and T Skills Development Trainings is a South African skills development organisation focused on helping businesses develop people while creating meaningful learning opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-black mb-4">Our Approach</h2>
            <p className="text-gray-600 mb-6">
              Our approach goes beyond simply putting learners into a classroom. We focus on the complete training journey:
            </p>
            <div className="flex flex-wrap items-center gap-2 text-sm font-bold text-[#E30613]">
              <span>Planning</span> <span>→</span>
              <span>Recruitment</span> <span>→</span>
              <span>Training</span> <span>→</span>
              <span>Workplace Learning</span> <span>→</span>
              <span>Assessment</span> <span>→</span>
              <span>Monitoring</span> <span>→</span>
              <span>Completion</span>
            </div>
          </div>
          
          <div className="bg-black text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Our Vision & Mission</h2>
            <div className="mb-6">
              <h3 className="text-[#E30613] font-bold mb-2">Vision</h3>
              <p className="text-gray-300 text-sm">To become a leading national skills development partner recognised for quality training, meaningful learner development and practical workplace solutions.</p>
            </div>
            <div>
              <h3 className="text-[#E30613] font-bold mb-2">Mission</h3>
              <p className="text-gray-300 text-sm">To develop people, support businesses and create opportunities through accessible, practical and quality-driven skills development programmes.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-extrabold text-black text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="p-6 border border-gray-100 rounded-lg shadow-sm">
              <div className="text-[#E30613] mb-4">{value.icon}</div>
              <h3 className="font-bold text-black mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}