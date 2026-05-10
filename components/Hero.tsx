'use client';

import { profile } from '@/lib/profile';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-6">
          {profile.personal.fullName}
        </h1>
        <p className="text-2xl text-blue-600 font-semibold mb-4">
          {profile.personal.title}
        </p>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          {profile.summary.description}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {profile.summary.specializations.slice(0, 3).map((spec, i) => (
            <span key={i} className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              {spec}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-6 mb-12">
          <a href={`mailto:${profile.personal.email}`} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Get in Touch
          </a>
          <a href={profile.personal.profileLinks.github} target="_blank" rel="noopener noreferrer" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            GitHub Profile
          </a>
        </div>

        <div className="flex justify-center gap-4 text-gray-600">
          <span>📍 {profile.personal.location}</span>
          <span>📧 {profile.personal.email}</span>
          <span>📱 {profile.personal.phone}</span>
        </div>
      </div>
    </section>
  );
}
