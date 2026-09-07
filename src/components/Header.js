import Logo from './Logo';

const links = [
  { label: 'المجموعات', href: '#collections' },
  { label: 'الضيافة', href: '#gifts' },
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
        <a className="nav-cta" href={whatsappHref} target="_blank" rel="noreferrer">زوروا متجرنا ←</a>
      </div>
    <details className="mobile-menu"><summary>تصفّحوا المتجر <span>＋</span></summary><nav aria-label="تصفح الهاتف">{links.map(link => <a href={link.href} key={link.href}>{link.label}</a>)}<a href="#hammam">الحمّام المغربي</a></nav></details>
    </header>
  );
}
