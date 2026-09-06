export default function Logo({ light = false }) {
  return (
    <div className={`logo-wrap${light ? ' logo-light' : ''}`} aria-label="الحمداني للحلويات — Al Hamdani Sweets">
      <svg className="logo-mark" viewBox="0 0 52 52" width="42" height="42" aria-hidden="true">
        <path d="M26 2 33 12l12-1-1 12 8 8-10 7-1 12-12-3-10 7-6-11-12-2 4-12-6-10 11-5 4-12 11 6Z" fill="none" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M26 11 33 18 40 26 33 34 26 41 19 34 12 26 19 18Z" fill="none" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="26" cy="26" r="5" fill="currentColor"/>
      </svg>
      <div className="wordmark">
        <strong>الحمداني <span>للحلويات</span></strong>
        <small>AL HAMDANI SWEETS</small>
      </div>
    </div>
  );
}
