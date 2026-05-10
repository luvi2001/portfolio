'use client';

import { profile } from '@/lib/profile';

export default function About() {
  const edu = profile.education.current;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {profile.summary.description}
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Key Strengths</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Production experience with real companies and real users</li>
                  <li>Modern tech stack expertise (NestJS, Next.js, React Native)</li>
                  <li>Full project ownership from conception to deployment</li>
                  <li>Security-conscious development (RBAC, JWT, OAuth2)</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border-2 border-blue-200">
              <h4 className="text-xl font-bold text-gray-900">{edu.institution}</h4>
              <p className="text-blue-600 font-semibold text-lg mt-2">{edu.degree}</p>
              <p className="text-gray-700 mt-1">Specialization: <span className="font-semibold">{edu.specialization}</span></p>
              <p className="text-gray-700 mt-1">Expected Graduation: {edu.expectedEndYear}</p>
              <p className="text-gray-700 mt-1">Status: <span className="font-semibold">{edu.status}</span></p>
              <p className="text-gray-700 mt-3">GPA: <span className="font-bold text-blue-600">{edu.cgpa}</span></p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Experience</h3>
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-lg border-2 border-indigo-200">
              <h4 className="text-xl font-bold text-gray-900">{profile.experience[0].position}</h4>
              <p className="text-indigo-600 font-semibold">{profile.experience[0].company}</p>
              <p className="text-gray-600 text-sm mt-1">{profile.experience[0].duration}</p>
              <p className="text-gray-700 mt-3 text-sm">Worked on payment integrations, mobile apps, and desktop applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
