export default function SectionMark({ light }) {
  return (
    <svg className={`section-mark${light ? ' light' : ''}`} viewBox="0 0 44 44" width="22" height="22" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
        <path d="M22 8 L31 15 L31 29 L22 36 L13 29 L13 15 Z" />
        <path d="M22 8 L13 15 L31 15 Z M22 36 L13 29 L31 29 Z" />
      </g>
      <circle cx="22" cy="22" r="5" fill="currentColor" />
    </svg>
  );
}
