'use client';

import { profile } from '@/lib/profile';
import Link from 'next/link';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profile.projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden border border-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.role && (
                  <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">Role:</span> {project.role}</p>
                )}

                {project.duration && (
                  <p className="text-sm text-gray-600 mb-3">{project.duration}</p>
                )}

                {project.repository && (
                  <a href={`https://${project.repository}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                    View on GitHub →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
