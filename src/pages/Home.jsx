import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Users, GraduationCap, Briefcase, Monitor, Award, Target, Calendar, Newspaper } from 'lucide-react';
import { news } from '../data/news';

export default function Home() {
  const services = [
    { icon: <Award size={32} className="text-[#E30613]" />, title: 'B-BBEE Skills Development', desc: 'Training solutions designed to support organisations implementing their Skills Development strategies.' },
    { icon: <GraduationCap size={32} className="text-[#E30613]" />, title: 'Learnerships', desc: 'Structured learning programmes combining theoretical learning with practical workplace experience.' },
    { icon: <Briefcase size={32} className="text-[#E30613]" />, title: 'Occupational Training', desc: 'Occupationally directed programmes designed around workplace competence.' },
    { icon: <Users size={32} className="text-[#E30613]" />, title: 'Corporate Training', desc: 'Practical training programmes designed around the needs of employees and organisations.' },
    { icon: <Monitor size={32} className="text-[#E30613]" />, title: 'Workplace Learning', desc: 'Structured practical learning, workplace activities and evidence-based development.' },
    { icon: <Target size={32} className="text-[#E30613]" />, title: 'Youth Development', desc: 'Programmes supporting the development of unemployed and employed young people.' },
  ];

  return (
    <div>
      <section className="relative bg-white">
        <div className="bg-[#E30613] text-white text-center py-2 text-sm font-medium">
          Developing People. Strengthening Businesses. Creating Opportunities.
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2">
            <div className="px-6 py-16 lg:py-24 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight mb-6">
                DEVELOPING PEOPLE.<br />
                <span className="text-[#E30613]">STRENGTHENING BUSINESSES.</span><br />
                CREATING OPPORTUNITIES.
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                National Skills Development & B-BBEE Training Solutions
              </h2>
              <p className="text-gray-600 mb-8 max-w-lg">
                B and T Skills Development Trainings provides comprehensive skills development, learnership, occupational training and workplace learning solutions to businesses across South Africa.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-[#E30613] text-white font-bold px-8 py-3 rounded-md hover:bg-red-700 transition-colors flex items-center gap-2">
                  REQUEST A PROPOSAL <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="border-2 border-black text-black font-bold px-8 py-3 rounded-md hover:bg-gray-50 transition-colors">
                  TALK TO OUR TEAM
                </Link>
              </div>
            </div>

            <div className="relative h-64 lg:h-auto bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000"
                alt="Corporate Training"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-black text-white py-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm font-medium">
              <div className="flex items-center gap-2"><MapPin size={18} className="text-[#E30613]" /> National Footprint</div>
              <div className="flex items-center gap-2"><Users size={18} className="text-[#E30613]" /> Corporate Training</div>
              <div className="flex items-center gap-2"><GraduationCap size={18} className="text-[#E30613]" /> Learnerships</div>
              <div className="flex items-center gap-2"><Briefcase size={18} className="text-[#E30613]" /> Occupational Training</div>
              <div className="flex items-center gap-2"><Monitor size={18} className="text-[#E30613]" /> Workplace Learning</div>
              <div className="flex items-center gap-2"><Award size={18} className="text-[#E30613]" /> B-BBEE Solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#E30613]/10 rounded-full flex items-center justify-center">
                  <Newspaper size={20} className="text-[#E30613]" />
                </div>
                <span className="text-sm font-bold text-[#E30613] tracking-wider uppercase">
                  Latest News
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-black">
                What's Happening at B and T
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl">
                Company announcements, industry insights and updates from across South Africa.
              </p>
            </div>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-[#E30613] font-bold hover:underline whitespace-nowrap shrink-0"
            >
              VIEW ALL NEWS <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                to={`/news/${item.id}`}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all flex flex-col"
              >
                {/* Colored top strip */}
                <div className="h-1 bg-[#E30613]" />

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold px-2 py-1 rounded bg-red-50 text-[#E30613]">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(item.date).toLocaleDateString('en-ZA', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-black mb-3 group-hover:text-[#E30613] transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {item.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-1 text-[#E30613] font-bold text-sm mt-auto">
                    READ MORE <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Optional: CTA below the cards */}
          <div className="mt-12 bg-black text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Interested in our latest learnership opportunities?
              </h3>
              <p className="text-gray-300 text-sm">
                New intakes open throughout the year. Browse current openings.
              </p>
            </div>
            <Link
              to="/opportunities"
              className="inline-flex items-center gap-2 bg-[#E30613] text-white font-bold px-6 py-3 rounded-md hover:bg-red-700 transition-colors whitespace-nowrap shrink-0"
            >
              VIEW OPPORTUNITIES <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">Skills Development Solutions Built Around Your Business</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At B and T Skills Development Trainings, we understand that every organisation has different workforce requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#E30613] transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-[#E30613] font-bold hover:underline">
              VIEW ALL SERVICES <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-black mb-12 text-center">Our Training Process</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { num: '01', title: 'Consult', desc: 'We understand your company requirements.' },
              { num: '02', title: 'Assess', desc: 'We identify appropriate development opportunities.' },
              { num: '03', title: 'Design', desc: 'We develop a suitable training solution.' },
              { num: '04', title: 'Implement', desc: 'We coordinate the agreed programme.' },
              { num: '05', title: 'Monitor', desc: 'We monitor learner and programme progress.' },
              { num: '06', title: 'Report', desc: 'We provide comprehensive reporting.' },
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-xl font-bold text-[#E30613] mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-black mb-1">{step.title}</h3>
                <p className="text-xs text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}