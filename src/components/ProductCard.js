export default function ProductCard({ item }) {
  const orderHref = `https://wa.me/?text=${encodeURIComponent(`مرحباً، أود الاستفسار عن ${item.name} لدى الحمداني.`)}`;

  return (
    <article className="product-card">
      <div className="product-photo-wrap">
        <img className="product-photo" src={item.image} alt={item.name} loading="lazy" />
      </div>
      <div className="product-copy">
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        <div className="product-meta">
          {item.price ? <strong dir="ltr">{item.price} AED</strong> : <strong>السعر عند الطلب</strong>}
          {item.unit && <span>{item.unit}</span>}
        </div>
        <a className="product-order" href={orderHref} target="_blank" rel="noreferrer" aria-label={`الاستفسار عن ${item.name} عبر واتساب`}>
          اطلب عبر واتساب
        </a>
      </div>
    </article>
  );
}
