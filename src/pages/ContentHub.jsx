import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Newspaper, BookOpen, ArrowRight } from 'lucide-react';
import { learnerships } from '../data/learnerships';
import { news } from '../data/news';
import { blogs } from '../data/blogs';

export default function ContentHub() {
  const latestLearnerships = learnerships.slice(0, 2);
  const latestNews = news.slice(0, 2);
  const latestBlogs = blogs.slice(0, 2);

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
            Opportunities, News & Insights
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Stay informed about learnership opportunities, company news, and skills development insights.
          </p>
        </div>

        {/* Learnerships */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <GraduationCap size={32} className="text-[#E30613]" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-black">Learnership Opportunities</h2>
            </div>
            <Link to="/opportunities" className="text-[#E30613] font-bold hover:underline flex items-center gap-1 text-sm">
              VIEW ALL <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {latestLearnerships.map((item) => (
              <Link
                key={item.id}
                to={`/opportunities/${item.id}`}
                className="block bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-bold px-2 py-1 rounded ${
                    item.status === 'open' ? 'bg-green-100 text-green-700' :
                    item.status === 'coming-soon' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-200 text-gray-600'
                  }`}>
                    {item.status === 'open' ? 'OPEN' : item.status === 'coming-soon' ? 'COMING SOON' : 'CLOSED'}
                  </span>
                  <span className="text-xs text-gray-500">{item.location}</span>
                </div>
                <h3 className="font-bold text-black mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                <p className="text-xs text-gray-500 mt-3">Closes: {new Date(item.closingDate).toLocaleDateString('en-ZA')}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* News */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Newspaper size={32} className="text-[#E30613]" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-black">Latest News</h2>
            </div>
            <Link to="/news" className="text-[#E30613] font-bold hover:underline flex items-center gap-1 text-sm">
              VIEW ALL <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {latestNews.map((item) => (
              <Link
                key={item.id}
                to={`/news/${item.id}`}
                className="block bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold px-2 py-1 rounded bg-red-100 text-[#E30613]">{item.category}</span>
                  <span className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString('en-ZA')}</span>
                </div>
                <h3 className="font-bold text-black mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Blog */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <BookOpen size={32} className="text-[#E30613]" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-black">From the Blog</h2>
            </div>
            <Link to="/blog" className="text-[#E30613] font-bold hover:underline flex items-center gap-1 text-sm">
              VIEW ALL <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {latestBlogs.map((item) => (
              <Link
                key={item.id}
                to={`/blog/${item.id}`}
                className="block bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold px-2 py-1 rounded bg-black text-white">{item.category}</span>
                  <span className="text-xs text-gray-500">{item.readTime}</span>
                </div>
                <h3 className="font-bold text-black mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}