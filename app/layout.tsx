import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { inter, romela, whyte } from '@/config/fonts';
import { FreelancerOnboardingProvider } from '@/context/FreelancerOnboardingContext';
import { ClientOnboardingProvider } from '@/context/ClientOnboardingContext';

export const metadata: Metadata = {
  title: 'WokHive',
  description: 'Empower your Freelancing career with wokhive',
  keywords: ['freelancing, jobs, remote jobs, work from home, wokhive'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${whyte.variable} ${romela.variable} min-w-[340px]`}>
        <FreelancerOnboardingProvider>
          <ClientOnboardingProvider>{children}</ClientOnboardingProvider>
        </FreelancerOnboardingProvider>
      </body>
    </html>
  );
}
