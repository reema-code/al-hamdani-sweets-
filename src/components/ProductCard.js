import Image from 'next/image';

export default function ProductCard({ item }) {
  return (
    <article className="product-card">
      <div className="product-photo-wrap">
        <Image className="product-photo" src={item.image} alt={item.name} fill sizes="(max-width: 560px) 50vw, (max-width: 960px) 50vw, 33vw" />
      </div>
      <div className="product-copy">
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        <a className="text-link" href="#contact">أضِفه إلى طلبك</a>
      </div>
    </article>
  );
}
