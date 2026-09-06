export default function Logo({ footer = false }) {
  return (
    <a className={`logo-wrap${footer ? ' footer-logo' : ''}`} href="#top" aria-label="الحمداني، EL HAMDANI، MOROCCAN SWEETS — الصفحة الرئيسية">
      <img src="/logo-horizontal.svg" alt="الحمداني — EL HAMDANI — MOROCCAN SWEETS" />
    </a>
  );
}
