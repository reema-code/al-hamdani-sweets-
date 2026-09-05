import './globals.css';

export const metadata = {
  title: 'الحمداني للحلويات المغربية | دبي',
  description: 'حلويات مغربية أصيلة في دبي — كعب الغزال، الشباكية، الفقاص، الغريبة وتشكيلات الضيافة والمناسبات.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
