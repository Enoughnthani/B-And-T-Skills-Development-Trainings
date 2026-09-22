import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Calendar, ArrowRight } from 'lucide-react';
import { learnerships } from '../data/learnerships';

export default function LearnershipListings() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? learnerships
    : learnerships.filter((l) => l.status === filter);

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6">Learnership Opportunities</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Current and upcoming learnership opportunities across South Africa.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {[
            { key: 'all', label: 'All' },
            { key: 'open', label: 'Open' },
            { key: 'coming-soon', label: 'Coming Soon' },
            { key: 'closed', label: 'Closed' },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === f.key
                  ? 'bg-[#E30613] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Listings */}
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500">No opportunities in this category right now.</p>
        ) : (
          <div className="space-y-6">
            {filtered.map((item) => (
              <Link
                key={item.id}
                to={`/opportunities/${item.id}`}
                className="block bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    item.status === 'open' ? 'bg-green-100 text-green-700' :
                    item.status === 'coming-soon' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-200 text-gray-600'
                  }`}>
                    {item.status === 'open' ? 'OPEN' : item.status === 'coming-soon' ? 'COMING SOON' : 'CLOSED'}
                  </span>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-red-50 text-[#E30613]">{item.type}</span>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700">{item.sector}</span>
                </div>

                <h2 className="text-2xl font-bold text-black mb-3">{item.title}</h2>
                <p className="text-gray-600 mb-4 max-w-3xl">{item.description}</p>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><MapPin size={14} /> {item.location}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {item.duration}</span>
                  <span className="flex items-center gap-1"><Users size={14} /> {item.openings} positions</span>
                  <span className="flex items-center gap-1"><Calendar size={14} /> Closes {new Date(item.closingDate).toLocaleDateString('en-ZA')}</span>
                </div>

                <span className="inline-flex items-center gap-1 text-[#E30613] font-bold text-sm">
                  VIEW DETAILS <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}