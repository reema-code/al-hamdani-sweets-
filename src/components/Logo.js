export default function Logo() {
  return <a className="logo-wrap" href="#" aria-label="الحمداني — EL HAMDANI MOROCCAN SWEETS">
    <svg className="logo-mark" viewBox="0 0 80 80" width="52" height="52" aria-hidden="true">
      <path d="M40 3 51 14 66 14 66 29 77 40 66 51 66 66 51 66 40 77 29 66 14 66 14 51 3 40 14 29 14 14 29 14Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <g fill="currentColor">
        <path d="m40 12 8 14-8 9-8-9Z"/><path d="m68 40-14 8-9-8 9-8Z"/><path d="m40 68-8-14 8-9 8 9Z"/><path d="m12 40 14-8 9 8-9 8Z"/>
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="1.3"><path d="m22 22 14 4-10 10Z"/><path d="m58 22-4 14-10-10Z"/><path d="m58 58-14-4 10-10Z"/><path d="m22 58 4-14 10 10Z"/></g>
      <path d="m40 35 5 5-5 5-5-5Z" fill="currentColor" />
    </svg>
    <span className="logo-type"><strong>الحمداني</strong><span className="logo-latin" dir="ltr">EL HAMDANI</span><small dir="ltr">MOROCCAN SWEETS</small></span>
  </a>;
}
