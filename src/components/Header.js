import Logo from './Logo';

const links = [
  { label: 'المجموعات', href: '#collections' },
  { label: 'منتجاتنا', href: '#products' },
  { label: 'المائدة المغربية', href: '#table' },
  { label: 'الحمّام المغربي', href: '#hammam-products' },
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
          <a className="icon-btn" href="#products" aria-label="انتقل إلى المنتجات">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>
          </a>
          <a className="nav-cta" href={whatsappHref}>تواصلوا معنا</a>
        </div>
      </div>
    </header>
  );
}
