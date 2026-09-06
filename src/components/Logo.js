export default function Logo() {
  return (
    <div className="logo-wrap" aria-label="الحمداني للحلويات المغربية">
      <svg className="logo-mark" viewBox="0 0 44 44" width="34" height="34" aria-hidden="true">
        <circle cx="22" cy="22" r="20" fill="none" stroke="currentColor" strokeWidth="1.4" opacity=".55" />
        <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
          <path d="M22 8 L31 15 L31 29 L22 36 L13 29 L13 15 Z" />
          <path d="M22 8 L13 15 L31 15 Z M22 36 L13 29 L31 29 Z" />
        </g>
        <circle cx="22" cy="22" r="5" fill="currentColor" />
      </svg>
      <div>
        <strong>الحمداني</strong>
        <small>للحلويات المغربية</small>
      </div>
    </div>
  );
}
