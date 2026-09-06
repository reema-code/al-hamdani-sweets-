import Image from 'next/image';

export default function ProductCard({ item }) {
  return (
    <article className="product-card">
      <div className="product-photo-wrap">
        <Image className="product-photo" src={item.image} alt={item.name} fill sizes="(max-width: 620px) 50vw, (max-width: 960px) 33vw, 17vw" />
      </div>
      <div className="product-copy">
        <div><h3>{item.name}</h3><p>{item.desc}</p></div>
        <div className="product-buy"><strong>{item.price}</strong><a href="#contact" aria-label={`اطلب ${item.name}`}>اطلب <span>←</span></a></div>
      </div>
    </article>
  );
}
