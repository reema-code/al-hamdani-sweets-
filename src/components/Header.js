import Logo from './Logo';

const links = [
  { label: 'المجموعات', href: '#collections' },
  { label: 'الأكثر مبيعاً', href: '#products' },
  { label: 'المطبخ', href: '#kitchen' },
  { label: 'الحمام المغربي', href: '#hammam' },
  { label: 'المنزل', href: '#collections' },
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
        <div className="header-actions">
          <a className="icon-btn" href="#products" aria-label="بحث">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>
          </a>
          <a className="icon-btn" href="#contact" aria-label="السلة">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 8h14l-1 13H6L5 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></svg>
          </a>
          <a className="nav-cta" href={whatsappHref} target="_blank" rel="noreferrer">اطلب عبر واتساب</a>
        </div>
      </div>
    </header>
  );
}
