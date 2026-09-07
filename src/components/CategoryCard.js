export default function CategoryCard({ item }) {
  return (
    <a className={`category-card${item.image ? "" : " category-wordmark"}`} href={item.href} style={item.image ? { backgroundImage: `url(${item.image})` } : undefined}>
      <span className="category-card-tint" />{!item.image && <span className="category-decoration" aria-hidden="true">حلاوة<br />اللمّة</span>}
      <span className="category-card-copy">
        <strong>{item.name}</strong>
        <small>{item.desc}</small>
      </span>
    </a>
  );
}
