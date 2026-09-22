import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function AdminPanel() {
  const [tab, setTab] = useState('learnership');
  const [form, setForm] = useState({
    title: '',
    sector: '',
    type: 'Unemployed Learnership',
    location: '',
    duration: '',
    stipend: '',
    openings: '',
    closingDate: '',
    description: '',
    requirements: '',
    outcomes: '',
    howToApply: '',
  });
  const [copied, setCopied] = useState(false);

  const generateCode = () => {
    const id = `${tab.slice(0, 3)}-${Date.now()}`;
    const reqArr = form.requirements.split('\n').filter(Boolean);
    const outArr = form.outcomes.split('\n').filter(Boolean);

    const obj = {
      id,
      title: form.title,
      sector: form.sector,
      type: form.type,
      location: form.location,
      duration: form.duration,
      stipend: form.stipend,
      openings: Number(form.openings),
      closingDate: form.closingDate,
      postedDate: new Date().toISOString().split('T')[0],
      status: 'open',
      description: form.description,
      requirements: reqArr,
      outcomes: outArr,
      howToApply: form.howToApply,
    };

    return JSON.stringify(obj, null, 2);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-black mb-4">Content Admin (Local Preview)</h1>
        <p className="text-gray-600 mb-8">
          Fill in the form below. Copy the generated JSON block and paste it into the corresponding
          data file (<code className="bg-gray-100 px-1 rounded">src/data/learnerships.js</code> or{' '}
          <code className="bg-gray-100 px-1 rounded">src/data/news.js</code>).
        </p>

        <div className="flex gap-2 mb-8">
          {['learnership', 'news', 'blog'].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-md text-sm font-bold ${
                tab === t ? 'bg-[#E30613] text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4">
          <input
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          {tab === 'learnership' && (
            <>
              <input placeholder="Sector" value={form.sector} onChange={(e) => setForm({ ...form, sector: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
              <input placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
              <input placeholder="Duration" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
              <input placeholder="Stipend" value={form.stipend} onChange={(e) => setForm({ ...form, stipend: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
              <input placeholder="Openings" type="number" value={form.openings} onChange={(e) => setForm({ ...form, openings: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
              <input placeholder="Closing Date (YYYY-MM-DD)" value={form.closingDate} onChange={(e) => setForm({ ...form, closingDate: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </>
          )}
          <textarea placeholder="Description" rows="3" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          {tab === 'learnership' && (
            <>
              <textarea placeholder="Requirements (one per line)" rows="4" value={form.requirements} onChange={(e) => setForm({ ...form, requirements: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
              <textarea placeholder="Outcomes (one per line)" rows="4" value={form.outcomes} onChange={(e) => setForm({ ...form, outcomes: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
              <textarea placeholder="How to Apply" rows="3" value={form.howToApply} onChange={(e) => setForm({ ...form, howToApply: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </>
          )}

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 bg-[#E30613] text-white font-bold px-6 py-3 rounded-md hover:bg-red-700 transition-colors"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copied!' : 'Generate & Copy JSON'}
          </button>
        </div>

        <div className="mt-8 bg-black text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <pre>{generateCode()}</pre>
        </div>
      </div>
    </div>
  );
}