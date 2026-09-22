import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import { news } from '../data/news';

export default function NewsDetail() {
  const { id } = useParams();
  const item = news.find((n) => n.id === id);

  if (!item) return <Navigate to="/news" replace />;

  return (
    <div className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/news" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#E30613] mb-8 text-sm">
          <ArrowLeft size={16} /> Back to all news
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-50 text-[#E30613]">{item.category}</span>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Calendar size={12} /> {new Date(item.date).toLocaleDateString('en-ZA')}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-8">{item.title}</h1>

        <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
          {item.content}
        </article>
      </div>
    </div>
  );
}