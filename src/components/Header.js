import Logo from './Logo';

const links = [
  { label: 'المجموعات', href: '#collections' },
  { label: 'الهدايا', href: '#gifts' },
  { label: 'حكايتنا', href: '#story' },
  { label: 'مختاراتنا', href: '#products' },
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
        <a className="nav-cta" href={whatsappHref} target="_blank" rel="noreferrer">اطلب الآن ←</a>
      </div>
    </header>
  );
}
