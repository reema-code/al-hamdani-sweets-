export default function Logo() {
  return (
    <a className="logo-wrap" href="#top" aria-label="الحمداني، EL HAMDANI، MOROCCAN SWEETS">
      <svg className="logo-mark" viewBox="0 0 52 52" width="42" height="42" aria-hidden="true">
        <circle cx="26" cy="26" r="24" fill="#173f38" />
        <circle cx="26" cy="26" r="20.5" fill="none" stroke="#e8b95f" strokeWidth="1" opacity=".9" />
        <g transform="translate(4 4)" fill="none" stroke="#e8b95f" strokeWidth="1.7" strokeLinejoin="round">
          <path d="M22 8 L31 15 L31 29 L22 36 L13 29 L13 15 Z" />
          <path d="M22 8 L13 15 L31 15 Z M22 36 L13 29 L31 29 Z" />
        </g>
        <circle cx="26" cy="26" r="4.5" fill="#e8b95f" />
      </svg>
      <div>
        <strong>الحمداني</strong>
        <span>EL HAMDANI</span>
        <small>MOROCCAN SWEETS</small>
      </div>
    </a>
  );
}
