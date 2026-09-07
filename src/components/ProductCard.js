export default function ProductCard({ item, contactHref }) {
  return <article className="product-card">
    <div className="product-photo-wrap"><img className="product-photo" src={item.image} alt={item.name} loading="lazy" width="600" height="600" /></div>
    <div className="product-copy"><h4>{item.name}</h4><p>{item.desc}</p><div className="product-bottom"><span className="product-price">{item.price || 'السعر عند الاستفسار'}</span><a className="text-link" href={contactHref}>استفسروا ←</a></div></div>
  </article>;
}
