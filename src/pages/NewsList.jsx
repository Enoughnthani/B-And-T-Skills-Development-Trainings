import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { news } from '../data/news';

export default function NewsList() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6">News & Announcements</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Updates from B and T Skills Development Trainings.
          </p>
        </div>

        <div className="space-y-6">
          {news.map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className="block bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-50 text-[#E30613]">{item.category}</span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Calendar size={12} /> {new Date(item.date).toLocaleDateString('en-ZA')}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-black mb-3">{item.title}</h2>
              <p className="text-gray-600 mb-4">{item.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-[#E30613] font-bold text-sm">
                READ MORE <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}