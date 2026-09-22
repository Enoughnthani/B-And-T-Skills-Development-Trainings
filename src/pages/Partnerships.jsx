import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Handshake, Users, GraduationCap, Briefcase, Award, FileText, CheckCircle2 } from 'lucide-react';

export default function Partnerships() {
  const steps = [
    { icon: <Users size={24} />, label: 'B-BBEE Consultant', desc: 'Identifies client requirement' },
    { icon: <Briefcase size={24} />, label: 'B and T', desc: 'Develops training solution' },
    { icon: <GraduationCap size={24} />, label: 'Learner Recruitment', desc: 'Suitable learners identified' },
    { icon: <Award size={24} />, label: 'Training', desc: 'Programme delivered' },
    { icon: <Handshake size={24} />, label: 'Workplace Learning', desc: 'Practical development' },
    { icon: <CheckCircle2 size={24} />, label: 'Assessment', desc: 'Relevant assessment processes' },
    { icon: <FileText size={24} />, label: 'Documentation', desc: 'Project evidence and records' },
    { icon: <Users size={24} />, label: 'Client', desc: 'Receives project outcome/reporting' },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6">PARTNER WITH B AND T</h1>
          <p className="text-xl text-[#E30613] font-bold mb-4">Your Skills Development Implementation Partner</p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            B-BBEE consultants often manage multiple corporate clients that require structured Skills Development interventions. B and T Skills Development Trainings can work alongside consultants as the training implementation partner.
          </p>
        </div>

        <h2 className="text-3xl font-extrabold text-black text-center mb-12">THE PARTNERSHIP MODEL</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center relative">
              <div className="w-12 h-12 mx-auto bg-[#E30613] text-white rounded-full flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <div className="absolute top-2 right-3 text-xs font-bold text-gray-300">0{index + 1}</div>
              <h3 className="font-bold text-black mb-2">{step.label}</h3>
              <p className="text-xs text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-black text-white rounded-2xl p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Are you a B-BBEE consultant looking for a reliable training implementation partner?
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#E30613] text-white font-bold px-8 py-3 rounded-md hover:bg-red-700 transition-colors">
            BECOME A PARTNER <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}