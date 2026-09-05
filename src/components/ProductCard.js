export default function ProductCard({ item, index }) {
  return (
    <article className="product-card">
      <div className={`product-art art-${(index % 6) + 1}`} aria-hidden="true">
        <span>✦</span>
      </div>
      <div className="product-copy">
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        <a className="text-link" href="#contact">اطلب عبر واتساب</a>
      </div>
    </article>
  );
}
