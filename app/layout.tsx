import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Luvinson Irudhayarasu | Software Engineer",
  description: "Full-stack developer specializing in backend systems, API design, and cloud deployment. Experienced with NestJS, Next.js, React Native, and modern DevOps tools.",
  keywords: ["Software Engineer", "Full-Stack Developer", "NestJS", "Next.js", "React Native", "Backend Development"],
  authors: [{ name: "Luvinson Irudhayarasu" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luvinson-portfolio.vercel.app",
    title: "Luvinson Irudhayarasu | Software Engineer",
    description: "Full-stack developer specializing in backend systems, API design, and cloud deployment.",
    siteName: "Luvinson's Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
