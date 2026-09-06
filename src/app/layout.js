import './globals.css';

export const metadata = {
  title: 'الحمداني للحلويات | Al Hamdani Sweets Dubai',
  description: 'حلويات مغربية أصيلة وهدايا للمناسبات، مختارة بعناية ومقدّمة بكرم في دبي.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f2b26',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
