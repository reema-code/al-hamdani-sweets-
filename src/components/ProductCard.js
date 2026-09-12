export default function ProductCard({ item }) {
  return (
    <article className="product-card">
      <div className="product-photo-wrap">
        <img className="product-photo" src={item.image} alt={item.name} loading="lazy" />
      </div>
      <div className="product-copy">
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        <div className="product-foot">
          <strong className="product-price">{item.price}</strong>
          <a className="text-link" href="#contact">اطلب ←</a>
        </div>
      </div>
    </article>
  );
}
