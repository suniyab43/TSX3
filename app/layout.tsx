
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'ZHFLIM Player',
  description: 'High‑end video showcase for ZHFLIM',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
