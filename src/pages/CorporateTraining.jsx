import React from 'react';
import { Briefcase, Users, Monitor, Settings } from 'lucide-react';

export default function CorporateTraining() {
  const categories = [
    { 
      title: 'Business & Administration', 
      icon: <Briefcase size={28} className="text-[#E30613]" />,
      items: ['Business Administration', 'Office Administration', 'Business Analysis', 'Records Management', 'Administrative Skills'] 
    },
    { 
      title: 'Management & Leadership', 
      icon: <Users size={28} className="text-[#E30613]" />,
      items: ['Leadership', 'Supervision', 'Team Management', 'Performance Management', 'Conflict Management', 'Communication'] 
    },
    { 
      title: 'Customer Service', 
      icon: <Monitor size={28} className="text-[#E30613]" />,
      items: ['Customer Service', 'Telephone Etiquette', 'Email Etiquette', 'Customer Relationship Management', 'Professional Communication'] 
    },
    { 
      title: 'Microsoft & Digital Skills', 
      icon: <Settings size={28} className="text-[#E30613]" />,
      items: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Digital Literacy', 'Office Productivity'] 
    },
    { 
      title: 'Workplace Skills', 
      icon: <Users size={28} className="text-[#E30613]" />,
      items: ['Communication', 'Time Management', 'Teamwork', 'Problem Solving', 'Workplace Professionalism'] 
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6">CORPORATE TRAINING</h1>
          <p className="text-xl text-[#E30613] font-bold mb-4">Develop The People Who Drive Your Business</p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Training can be customised according to the needs of your organisation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <div className="mb-4">{cat.icon}</div>
              <h2 className="text-xl font-bold text-black mb-4">{cat.title}</h2>
              <ul className="space-y-2">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E30613]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}