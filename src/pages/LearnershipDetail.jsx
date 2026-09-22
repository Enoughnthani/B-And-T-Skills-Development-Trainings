import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, Clock, Users, Calendar, ArrowLeft, CheckCircle2, Award, Mail } from 'lucide-react';
import { learnerships } from '../data/learnerships';

export default function LearnershipDetail() {
  const { id } = useParams();
  const item = learnerships.find((l) => l.id === id);

  if (!item) return <Navigate to="/opportunities" replace />;

  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/opportunities" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#E30613] mb-8 text-sm">
          <ArrowLeft size={16} /> Back to all opportunities
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${
            item.status === 'open' ? 'bg-green-100 text-green-700' :
            item.status === 'coming-soon' ? 'bg-yellow-100 text-yellow-700' :
            'bg-gray-200 text-gray-600'
          }`}>
            {item.status === 'open' ? 'OPEN' : item.status === 'coming-soon' ? 'COMING SOON' : 'CLOSED'}
          </span>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-red-50 text-[#E30613]">{item.type}</span>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700">{item.sector}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-6">{item.title}</h1>

        {/* Key Facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 p-6 rounded-xl mb-10">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</p>
            <p className="font-bold text-black flex items-center gap-1"><MapPin size={14} /> {item.location}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Duration</p>
            <p className="font-bold text-black flex items-center gap-1"><Clock size={14} /> {item.duration}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Openings</p>
            <p className="font-bold text-black flex items-center gap-1"><Users size={14} /> {item.openings}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Closes</p>
            <p className="font-bold text-black flex items-center gap-1"><Calendar size={14} /> {new Date(item.closingDate).toLocaleDateString('en-ZA')}</p>
          </div>
        </div>

        {/* Description */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-black mb-3">About this Learnership</h2>
          <p className="text-gray-700 leading-relaxed">{item.description}</p>
        </section>

        {/* Stipend */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-black mb-3">Stipend</h2>
          <p className="text-gray-700">{item.stipend}</p>
        </section>

        {/* Requirements */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-black mb-4">Requirements</h2>
          <ul className="space-y-2">
            {item.requirements.map((req, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 size={18} className="text-[#E30613] mt-0.5 shrink-0" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Outcomes */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-black mb-4">What you'll gain</h2>
          <ul className="space-y-2">
            {item.outcomes.map((out, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <Award size={18} className="text-[#E30613] mt-0.5 shrink-0" />
                <span>{out}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* How to Apply */}
        <section className="bg-black text-white rounded-xl p-8">
          <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Mail size={20} /> How to Apply
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">{item.howToApply}</p>
          {item.status === 'open' && (
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#E30613] text-white font-bold px-6 py-3 rounded-md hover:bg-red-700 transition-colors">
              CONTACT US <ArrowLeft size={16} className="rotate-180" />
            </Link>
          )}
        </section>
      </div>
    </div>
  );
}