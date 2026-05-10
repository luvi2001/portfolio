'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">
            © {currentYear} Luvinson Irudhayarasu. All rights reserved.
          </p>
          <p className="text-gray-400">
            Built with <span className="text-red-500">❤</span> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
