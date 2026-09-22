import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Award, Cog, Users, Target, ClipboardCheck } from 'lucide-react';

export default function OccupationalTraining() {
  const focusAreas = [
    { icon: <Award size={28} className="text-[#E30613]" />, title: 'Occupational Qualifications', desc: 'Aligned to QCTO/SAQA occupational qualification standards.' },
    { icon: <Cog size={28} className="text-[#E30613]" />, title: 'Occupational Skills Programmes', desc: 'Focused skills programmes built around specific job functions.' },
    { icon: <Users size={28} className="text-[#E30613]" />, title: 'Practical Training', desc: 'Hands-on learning that builds real workplace capability.' },
    { icon: <Target size={28} className="text-[#E30613]" />, title: 'Workplace Learning', desc: 'Structured development within the actual work environment.' },
    { icon: <ClipboardCheck size={28} className="text-[#E30613]" />, title: 'Simulations', desc: 'Realistic workplace scenarios for safe, effective practice.' },
    { icon: <CheckCircle2 size={28} className="text-[#E30613]" />, title: 'Competence-based Learning', desc: 'Learning structured around demonstrating competence.' },
    { icon: <Award size={28} className="text-[#E30613]" />, title: 'Assessment Preparation', desc: 'Preparing learners for formal assessment and moderation.' },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6">QCTO / OCCUPATIONAL TRAINING</h1>
          <p className="text-xl text-[#E30613] font-bold mb-4">Preparing For The Future Of Skills Development</p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            South Africa's qualifications environment continues to evolve toward occupational qualifications.
          </p>
        </div>

        <div className="bg-gray-50 border-l-4 border-[#E30613] p-6 md:p-8 rounded-r-xl mb-16">
          <h2 className="text-xl font-bold text-black mb-3">Important Industry Update</h2>
          <p className="text-gray-700 leading-relaxed">
            In June 2026, government reported further transitional arrangements for affected legacy qualifications and indicated that occupational qualifications would continue under existing QCTO/SAQA processes.
          </p>
        </div>

        <h2 className="text-3xl font-extrabold text-black text-center mb-12">
          B and T is positioning itself for this changing environment through:
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {focusAreas.map((area, index) => (
            <div key={index} className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mt-1 shrink-0">{area.icon}</div>
              <div>
                <h3 className="font-bold text-black mb-2">{area.title}</h3>
                <p className="text-sm text-gray-600">{area.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black text-white rounded-2xl p-10 md:p-12 text-center">
          <p className="text-lg md:text-xl text-gray-300 italic mb-8 max-w-3xl mx-auto">
            "We are committed to expanding our occupational training portfolio in line with the evolving South African skills development environment."
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#E30613] text-white font-bold px-8 py-3 rounded-md hover:bg-red-700 transition-colors">
            ENQUIRE ABOUT OCCUPATIONAL TRAINING <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}