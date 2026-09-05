export default function CategoryCard({ item }) {
  return (
    <a className="category-card" href={item.href} style={{ backgroundImage: `url(${item.image})` }}>
      <span className="category-card-tint" />
      <span className="category-card-copy">
        <strong>{item.name}</strong>
        <small>{item.desc}</small>
      </span>
    </a>
  );
}
