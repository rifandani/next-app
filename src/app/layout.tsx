import { ThemeProvider } from '#shared/components/providers/theme-provider';
import { Toaster } from '#shared/components/ui/toaster';
import { inter, robotoMono } from '#shared/utils/fonts';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { twJoin } from 'tailwind-merge';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Next.js 13 App Template',
    template: '%s | App Template',
  },
  description: 'Bulletproof Next.js 13 App Template',
  openGraph: {
    title: 'Next.js 13 App Template',
    description: 'Bulletproof Next.js 13 App Template',
    images: [`/api/og`],
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={twJoin(`font-mono`, inter.variable, robotoMono.variable)}
      >
        <ThemeProvider
          storageKey="app-theme"
          attribute="class"
          defaultTheme="system"
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
