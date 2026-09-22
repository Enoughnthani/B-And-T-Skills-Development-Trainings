import React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../config';
import { LogIn, BookOpen, HelpCircle, Mail, Phone, ArrowRight } from 'lucide-react';

export default function LearnerPortal() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 mx-auto bg-[#E30613]/10 rounded-full flex items-center justify-center mb-6">
            <BookOpen size={40} className="text-[#E30613]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
            Learner Portal
          </h1>
          <p className="text-xl text-[#E30613] font-bold mb-4">
            Access your learnership materials online
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Log in to the B&T Learning Management System to access your course materials, submit
            assessments, track your progress and view your Portfolio of Evidence.
          </p>
        </div>

        {/* Login CTA */}
        <div className="bg-black text-white rounded-2xl p-10 md:p-14 text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to log in?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Use the credentials provided by your facilitator. If you haven't received login details, contact your programme coordinator.
          </p>
          <a
            href={config.lmsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E30613] text-white font-bold px-10 py-4 rounded-md hover:bg-red-700 transition-colors text-lg"
          >
            <LogIn size={22} />
            LOG IN TO LMS
          </a>
          <p className="text-xs text-gray-500 mt-4">
            You will be redirected to our secure learning platform
          </p>
        </div>

        {/* What you can do */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-black text-center mb-8">
            What you can do in the LMS
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Access Learning Materials', desc: 'Course notes, videos, and learning resources for your programme.' },
              { title: 'Submit Assessments', desc: 'Complete and upload formative and summative assessments.' },
              { title: 'Track Your Progress', desc: 'See your completion status, results, and Portfolio of Evidence.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="w-10 h-10 bg-[#E30613] text-white rounded-full flex items-center justify-center font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-black mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
          <div className="flex items-start gap-4 mb-6">
            <HelpCircle size={28} className="text-[#E30613] shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-black mb-2">Need help logging in?</h2>
              <p className="text-gray-600">
                Contact our learner support team if you have trouble accessing the LMS.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-100">
              <Mail size={20} className="text-[#E30613]" />
              <div>
                <p className="text-xs text-gray-500">Email Support</p>
                <a href={`mailto:${config.contactEmail}`} className="font-bold text-black hover:text-[#E30613]">
                  {config.contactEmail}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-100">
              <Phone size={20} className="text-[#E30613]" />
              <div>
                <p className="text-xs text-gray-500">Call or WhatsApp</p>
                <a href={`tel:${config.phone.replace(/\s/g, '')}`} className="font-bold text-black hover:text-[#E30613]">
                  {config.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Back to site */}
        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#E30613] font-medium text-sm"
          >
            ← Back to B and T Skills Development Trainings
          </Link>
        </div>
      </div>
    </div>
  );
}