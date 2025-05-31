
import './styles.css';
import './globals.css';
import { ReactNode, useEffect } from 'react';

export const metadata = {
  title: 'ZHFLIM Player',
  description: 'High‑end video showcase for ZHFLIM',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js');
    }
  }, []);

  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
