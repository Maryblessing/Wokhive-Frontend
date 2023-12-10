import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// app\fonts\whyte_inktrap\WhyteInktrap-Thin.woff2
const whyte = localFont({
  src: [
    {
      path: '../public/assets/fonts/whyte_inktrap/WhyteInktrap-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/whyte_inktrap/WhyteInktrap-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/whyte_inktrap/WhyteInktrap-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/whyte_inktrap/WhyteInktrap-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/whyte_inktrap/WhyteInktrap-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/whyte_inktrap/WhyteInktrap-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/whyte_inktrap/WhyteInktrap-Heavy.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/whyte_inktrap/WhyteInktrap-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-whyte',
});

// public\fonts\romela\Romela-Thin.woff
const romela = localFont({
  src: [
    {
      path: '../public/assets/fonts/romela/Romela-Thin.woff',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/romela/Romela-ExtraLight.woff',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/romela/Romela-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/romela/Romela-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/romela/Romela-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/romela/Romela-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/romela/Romela-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/romela/Romela-ExtraBold.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/romela/Romela-Black.woff',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-romela',
});

export const metadata: Metadata = {
  title: 'WokHive',
  description: 'Empower your Freelancing career with wokhive',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${whyte.variable} ${romela.variable}`}>{children}</body>
    </html>
  );
}
