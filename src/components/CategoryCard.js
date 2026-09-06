import Image from 'next/image';

export default function CategoryCard({ item }) {
  return (
    <a className="category-card" href={item.href}>
      <Image className="category-card-image" src={item.image} alt="" fill sizes="(max-width: 560px) 100vw, (max-width: 960px) 50vw, 33vw" />
      <span className="category-card-tint" />
      <span className="category-card-copy">
        <strong>{item.name}</strong>
        <small>{item.desc}</small>
      </span>
    </a>
  );
}
