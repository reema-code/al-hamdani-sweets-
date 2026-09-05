'use client';

export default function NewsletterForm() {
  return (
    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
      <input type="email" required placeholder="بريدك الإلكتروني" aria-label="البريد الإلكتروني" />
      <button type="submit">اشتراك</button>
    </form>
  );
}
