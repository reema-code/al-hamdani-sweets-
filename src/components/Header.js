import Logo from './Logo';

const links = [
  { label: 'المجموعات', href: '#collections' },
  { label: 'المطبخ والطواجن', href: '#kitchen' },
  { label: 'الحمّام والجمال', href: '#hammam' },
  { label: 'التوصيل', href: '#delivery' }
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
        <a className="nav-cta" href={whatsappHref} target="_blank" rel="noreferrer">تواصل عبر واتساب</a>
        <details className="mobile-menu"><summary aria-label="فتح القائمة"><i /><i /><i /></summary><nav>{links.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}<a href={whatsappHref}>واتساب</a></nav></details>
      </div>
    </header>
  );
}
