export default function ProductCard({ item }) {
  return (
    <article className="product-card">
      <div className="product-photo-wrap">
        <img className="product-photo" src={item.image} alt={item.name} loading="lazy" />
      </div>
      <div className="product-copy">
        <h3>{item.name}</h3>
        <strong className="product-price">{item.price}</strong>
        <div className="product-actions"><button aria-label="أضف إلى السلة">🛒</button><a href="#contact">اطلب عبر واتساب　◌</a></div>
      </div>
    </article>
  );
}
