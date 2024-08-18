import './globals.css';

import type { Metadata } from 'next';
import { Homenaje, Kranky } from 'next/font/google';

import { cn } from '@/components/cn';
import { Header } from '@/components/Header';

const homenaje = Homenaje({ subsets: ['latin'], weight: '400' });
const kranky = Kranky({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-kranky',
});

export const metadata: Metadata = {
  title: 'ASafaeirad Portfolio',
  description: 'Alireza Safaeirad portfolio website.',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          homenaje.className,
          kranky.variable,
          'container mx-auto flex h-dvh flex-col',
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
