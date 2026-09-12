export default function ProductCard({ item, whatsappHref }) {
  return (
    <article className="product-card">
      <div className="product-photo-wrap"><img className="product-photo" src={item.image} alt={item.name} loading="lazy" /></div>
      <div className="product-copy">
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        <div className="product-meta"><span className="price">{item.price || 'السعر عند الطلب'}</span><a href={whatsappHref} target="_blank" rel="noreferrer" aria-label={`اطلب ${item.name} عبر واتساب`}>اطلب الآن ←</a></div>
      </div>
    </article>
  );
}
