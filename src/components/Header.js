import Logo from './Logo';

const links = [
  { label: 'مختاراتنا', href: '#products' },
  { label: 'حكايتنا', href: '#story' },
  { label: 'الهدايا', href: '#gifts' },
  { label: 'المجموعات', href: '#collections' },
  { label: 'تواصل معنا', href: '#contact' }
];

export default function Header({ whatsappHref }) {
  return (
    <header className="topbar">
      <div className="shell header-row">
        <Logo />
        <nav className="main-nav" aria-label="التصفح الرئيسي">
          {links.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
        </nav>
        <a className="nav-cta" href={whatsappHref}>اطلب الآن <span aria-hidden="true">←</span></a>
      </div>
    </header>
  );
}
