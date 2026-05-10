'use client';

import { profile } from '@/lib/profile';

export default function Skills() {
  const skillCategories = [
    { name: 'Languages', skills: profile.skills.languages },
    { name: 'Frontend', skills: profile.skills.frontend },
    { name: 'Backend', skills: profile.skills.backend },
    { name: 'Databases', skills: profile.skills.databases },
    { name: 'DevOps', skills: profile.skills.devOps },
    { name: 'Tools & Others', skills: profile.skills.tools },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Key Differentiators</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Production experience with real companies",
              "Modern tech stack expertise",
              "Full project ownership & deployment",
              "Security-conscious development",
              "Performance optimization skills",
              "ML integration capabilities"
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
