export default function ProductCard({ item }) {
  return (
    <article className="product-card">
      <div className="product-photo-wrap">
        <img className="product-photo" src={item.image} alt={item.name} loading="lazy" width="600" height="500" />
      </div>
      <div className="product-copy">
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        <a className="text-link" href={item.href}>استفسروا عن المنتج</a>
      </div>
    </article>
  );
}
