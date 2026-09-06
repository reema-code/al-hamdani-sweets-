import './globals.css';

export const metadata = {
  title: 'الحمداني | متجر مغربي أصيل في دبي',
  description: 'كل ما هو مغربي أصيل في دبي — حلويات ومخبوزات، شاي وتوابل، أدوات المطبخ والطواجن، منتجات الحمام المغربي والجمال، وتحف للمنزل والديكور.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
