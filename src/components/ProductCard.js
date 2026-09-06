export default function ProductCard({ item }) {
  return (
    <article className="product-card">
      <div className="product-photo-wrap">
        <img className="product-photo" src={item.image} alt={item.name} loading="lazy" />
      </div>
      <div className="product-copy">
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        <a className="text-link" href="#contact">اطلب عبر واتساب</a>
      </div>
    </article>
  );
}
