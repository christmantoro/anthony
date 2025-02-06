import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/global/header';
import Footer from '@/components/global/footer';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Anthony Christmantoro',
  description: 'We bring 3000 jobs to Indonesia\'s rural counties through innovative technology.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <div >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}