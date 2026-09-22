import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogs } from '../data/blogs';

export default function BlogList() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6">Insights & Guides</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Practical articles on skills development, learnerships, and B-BBEE.
          </p>
        </div>

        <div className="space-y-6">
          {blogs.map((item) => (
            <Link
              key={item.id}
              to={`/blog/${item.id}`}
              className="block bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-black text-white">{item.category}</span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Calendar size={12} /> {new Date(item.date).toLocaleDateString('en-ZA')}
                </span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Clock size={12} /> {item.readTime}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-black mb-3">{item.title}</h2>
              <p className="text-gray-600 mb-4">{item.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-[#E30613] font-bold text-sm">
                READ ARTICLE <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}