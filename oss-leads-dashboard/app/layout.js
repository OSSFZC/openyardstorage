import './globals.css';
import { CLIENT_NAME } from '@/lib/config';
import { withBase } from '@/lib/base';

export const metadata = {
  title: { default: `${CLIENT_NAME} Leads`, template: `%s · ${CLIENT_NAME} Leads` },
  icons: { icon: withBase('/favicon.png') },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
