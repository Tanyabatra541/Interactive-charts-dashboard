import './globals.css';
import React from 'react';
import Navigation from './components/navigation'; // Import the navigation bar

export const metadata = {
  title: 'Chart Dashboard',
  description: 'Interactive Chart Dashboard',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        {/* Add Navigation Bar */}
        <Navigation />
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
