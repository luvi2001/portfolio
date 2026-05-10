'use client';

import { profile } from '@/lib/profile';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Get In Touch</h2>
        
        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <p className="text-lg text-gray-700 mb-8 text-center">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <a href={`mailto:${profile.personal.email}`} className="text-blue-600 hover:text-blue-800 text-lg font-semibold break-all">
                {profile.personal.email}
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <a href={`tel:${profile.personal.phone}`} className="text-blue-600 hover:text-blue-800 text-lg font-semibold">
                {profile.personal.phone}
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-8 flex-wrap">
            <a href="https://github.com/luvi2001" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition font-semibold">
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/luvinson-irudhayarasu-06901b283/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
              <span>LinkedIn</span>
            </a>
            <a href={`mailto:${profile.personal.email}`} className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-semibold">
              <span>Email Me</span>
            </a>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-gray-700 text-sm">
              <span className="font-semibold">Location:</span> {profile.personal.location} | <span className="font-semibold">Timezone:</span> Asia/Colombo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
