import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Sri Ram S | Developer & Chess Enthusiast',
  description: 'Portfolio of Sri Ram S, a B.Tech IT student and developer with expertise in Next.js, React, and Japanese language skills.',
  openGraph: {
    title: 'Sri Ram S | Developer & Chess Enthusiast',
    description: 'Portfolio of Sri Ram S, a B.Tech IT student and developer with expertise in Next.js, React, and Japanese language skills.',
    url: 'https://sriram.dev',
    siteName: 'Sri Ram S Portfolio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
