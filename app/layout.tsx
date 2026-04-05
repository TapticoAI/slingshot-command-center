import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Slingshot Command Center — Taptico',
  description: 'Taptico Slingshot Squad Mission Control — Internal Operations Guide',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
