import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { NewsBar } from '@/components/NewsBar';
import { Social } from '@/components/Social';
import './globals.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='flex flex-col'>
        <NewsBar />
        <Header />
        <Navigation />
        {children}
        <footer className='!mt-auto mb-0 bg-navBg py-3'>
          <div className='wrapper flex items-center justify-between text-small text-white'>
            <p>2023, All rights reserved</p>
            <Social />
          </div>
        </footer>
      </body>
    </html>
  );
}
