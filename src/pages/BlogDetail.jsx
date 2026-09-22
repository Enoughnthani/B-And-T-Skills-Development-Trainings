import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { blogs } from '../data/blogs';

export default function BlogDetail() {
  const { id } = useParams();
  const item = blogs.find((b) => b.id === id);

  if (!item) return <Navigate to="/blog" replace />;

  return (
    <div className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#E30613] mb-8 text-sm">
          <ArrowLeft size={16} /> Back to all articles
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-black text-white">{item.category}</span>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Calendar size={12} /> {new Date(item.date).toLocaleDateString('en-ZA')}
          </span>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Clock size={12} /> {item.readTime}
          </span>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <User size={12} /> {item.author}
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