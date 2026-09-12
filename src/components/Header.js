import Logo from './Logo';

const links = [
  { label: 'الرئيسية', href: '#' },
  { label: 'منتجاتنا', href: '#collections' },
  { label: 'من المغرب إلى دبي', href: '#story' },
  { label: 'من نحن', href: '#story' },
  { label: 'تواصل معنا', href: '#contact' }
];

export default function Header({ whatsappHref }) {
  return (
    <header className="topbar">
      <div className="shell header-row">
        <Logo />
        <nav className="main-nav" aria-label="التصفح الرئيسي">
          {links.map((link) => (
            <a key={link.label} href={link.href}>{link.label}</a>
          ))}
        </nav>
        <div className="header-actions"><button className="search" aria-label="بحث">⌕</button><a className="nav-cta" href={whatsappHref}>◌ اطلب عبر واتساب</a><span className="language">EN</span><button className="menu" aria-label="فتح القائمة">☰</button></div>
      </div>
    </header>
  );
}
