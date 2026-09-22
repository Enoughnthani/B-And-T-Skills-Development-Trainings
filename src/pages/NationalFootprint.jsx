import React from 'react';
import { MapPin } from 'lucide-react';

export default function NationalFootprint() {
  const provinces = [
    'Gauteng', 'KwaZulu-Natal', 'Western Cape', 'Eastern Cape', 
    'Limpopo', 'Mpumalanga', 'Free State', 'North West', 'Northern Cape'
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6">TRAINING ACROSS SOUTH AFRICA</h1>
          <p className="text-xl text-[#E30613] font-bold mb-4">One Training Partner. A National Reach.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              B and T Skills Development Trainings is positioned to support organisations across South Africa. Whether you have 20 learners at one site or a national workforce across multiple provinces, we can structure your training project around your requirements.
            </p>
            <div className="flex flex-wrap gap-3">
              {provinces.map((province) => (
                <span key={province} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:bg-[#E30613] hover:text-white transition-colors cursor-pointer">
                  {province}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center h-96 relative overflow-hidden">
            <div className="text-center">
              <MapPin size={64} className="text-[#E30613] mx-auto mb-4" />
              <p className="text-gray-500 font-medium">Interactive Map of South Africa</p>
              <p className="text-sm text-gray-400 mt-2">(Replace with SVG map)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}