import React from 'react';
import { MapPin, Users, Briefcase } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6">LET'S TALK ABOUT YOUR SKILLS DEVELOPMENT REQUIREMENTS</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Whether you need a corporate training programme, learnerships, occupational training or a national Skills Development project, our team is ready to discuss your requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">CONTACT B AND T</h2>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#E30613]/10 rounded-full flex items-center justify-center text-[#E30613]">
                  <Users size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Telephone / WhatsApp</p>
                  <p className="font-medium text-black">012 004 1175 | 078 513 45 11</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#E30613]/10 rounded-full flex items-center justify-center text-[#E30613]">
                  <Briefcase size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-black">info@btsdtrainings.co.za</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#E30613]/10 rounded-full flex items-center justify-center text-[#E30613]">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Head Office</p>
                  <p className="font-medium text-black">299 Burger Street, Pretoria North, 0182</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-black mt-10 mb-4">ENQUIRY OPTIONS</h3>
            <div className="flex flex-wrap gap-2">
              {['Corporate Training', 'Learnerships', 'B-BBEE Skills Development', 'Occupational Training', 'Workplace Learning', 'B-BBEE Partnership', 'Other'].map((opt) => (
                <span key={opt} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm border border-gray-200">
                  {opt}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold text-black mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#E30613] focus:border-[#E30613] outline-none" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#E30613] focus:border-[#E30613] outline-none" />
              <input type="tel" placeholder="Telephone" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#E30613] focus:border-[#E30613] outline-none" />
              <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#E30613] focus:border-[#E30613] outline-none text-gray-600">
                <option>Select Enquiry Type</option>
                <option>Corporate Training</option>
                <option>Learnerships</option>
                <option>B-BBEE Skills Development</option>
                <option>Occupational Training</option>
                <option>Workplace Learning</option>
                <option>B-BBEE Partnership</option>
                <option>Other</option>
              </select>
              <textarea rows="4" placeholder="Your Message" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#E30613] focus:border-[#E30613] outline-none"></textarea>
              <button type="button" className="w-full bg-[#E30613] text-white font-bold py-3 rounded-md hover:bg-red-700 transition-colors">
                SUBMIT ENQUIRY
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}