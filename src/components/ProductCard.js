export default function ProductCard({ item }) {
  const productHref = `https://wa.me/?text=${encodeURIComponent(`مرحباً الحمداني، أود الاستفسار عن ${item.name}.`)}`;

  return (
    <article className="product-card">
      <div className="product-photo-wrap">
        <img
          className="product-photo"
          src={item.image}
          alt={item.name}
          loading="lazy"
          style={item.position ? { objectPosition: item.position } : undefined}
        />
      </div>
      <div className="product-copy">
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        <div className="product-foot">
          <strong className="product-price">{item.price}</strong>
          <a className="text-link" href={productHref} target="_blank" rel="noreferrer" aria-label={`استفسر عن ${item.name} عبر واتساب`}>استفسر ←</a>
        </div>
      </div>
    </article>
  );
}
