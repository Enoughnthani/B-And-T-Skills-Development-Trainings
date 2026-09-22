import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Briefcase } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white text-black font-bold text-2xl px-2 py-1 rounded-sm">B&T</div>
              <div className="flex flex-col leading-tight">
                <span className="text-[#E30613] font-bold text-sm tracking-wider">SKILLS DEVELOPMENT</span>
                <span className="text-white font-bold text-xs tracking-wider">TRAININGS</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Developing People. Strengthening Businesses. Creating Opportunities.
            </p>
            <p className="text-gray-500 text-xs">
              © 2026 B and T Skills Development Trainings. All Rights Reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-[#E30613] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#E30613] transition-colors">About Us</Link></li>
              <li><Link to="/our-difference" className="hover:text-[#E30613] transition-colors">Our Difference</Link></li>
              <li><Link to="/services" className="hover:text-[#E30613] transition-colors">Services</Link></li>
              <li><Link to="/bbbee" className="hover:text-[#E30613] transition-colors">B-BBEE Solutions</Link></li>
              <li><Link to="/learnerships" className="hover:text-[#E30613] transition-colors">Learnerships</Link></li>
              <li><Link to="/footprint" className="hover:text-[#E30613] transition-colors">National Footprint</Link></li>
              <li><Link to="/contact" className="hover:text-[#E30613] transition-colors">Contact</Link></li>
              <li><Link to="/opportunities" className="hover:text-[#E30613] transition-colors">Opportunities</Link></li>
              <li><Link to="/news" className="hover:text-[#E30613] transition-colors">News</Link></li>
              <li><Link to="/blog" className="hover:text-[#E30613] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/corporate-training" className="hover:text-[#E30613] transition-colors">Corporate Training</Link></li>
              <li><Link to="/occupational-training" className="hover:text-[#E30613] transition-colors">Occupational Training</Link></li>
              <li><Link to="/learnerships" className="hover:text-[#E30613] transition-colors">Learnerships</Link></li>
              <li><Link to="/bbbee" className="hover:text-[#E30613] transition-colors">B-BBEE Skills Development</Link></li>
              <li><Link to="/industries" className="hover:text-[#E30613] transition-colors">Industries</Link></li>
              <li><Link to="/hr-managers" className="hover:text-[#E30613] transition-colors">HR & SDF Managers</Link></li>
              <li><Link to="/procurement" className="hover:text-[#E30613] transition-colors">Procurement</Link></li>
              <li><Link to="/partnerships" className="hover:text-[#E30613] transition-colors">B-BBEE Partnerships</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#E30613] mt-0.5 shrink-0" />
                <span>299 Burger Street, Pretoria North, 0182</span>
              </li>
              <li className="flex items-start gap-3">
                <Users size={18} className="text-[#E30613] mt-0.5 shrink-0" />
                <span>012 004 1175 | 078 513 45 11</span>
              </li>
              <li className="flex items-start gap-3">
                <Briefcase size={18} className="text-[#E30613] mt-0.5 shrink-0" />
                <span>info@btsdtrainings.co.za</span>
              </li>
            </ul>
            <Link to="/contact" className="inline-block mt-6 bg-[#E30613] text-white font-bold px-6 py-2 rounded-md hover:bg-red-700 transition-colors text-sm">
              GET IN TOUCH
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>National Footprint | South Africa</p>
          <p className="mt-2 md:mt-0 italic text-gray-400">Skills Today. Opportunities Tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}