export default function ProductCard({ item, whatsappHref }) {
  const orderHref = `${whatsappHref}${encodeURIComponent(` أود طلب: ${item.name} (${item.price}).`)}`;
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
          <a className="text-link product-order" href={orderHref} target="_blank" rel="noreferrer">
            اطلب عبر واتساب <span aria-hidden="true">◉</span>
          </a>
        </div>
      </div>
    </article>
  );
}
