import Header from '../components/Header';
import Logo from '../components/Logo';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { productsByCategory } from '../data/products';
import { categories } from '../data/categories';
import { testimonials } from '../data/testimonials';

const whatsappHref = '#contact';
const featured = productsByCategory.sweets;

const promises = [
  ['🚚', 'توصيل سريع', 'في دبي والشارقة'],
  ['◈', 'منتجات أصيلة', 'من المغرب'],
  ['♢', 'جودة مضمونة', 'مختارة بعناية'],
  ['♥', 'دعم عبر واتساب', 'سهل ومباشر'],
];

export default function HomePage() {
  return (
    <main>
      <Header whatsappHref={whatsappHref} />

      <section className="hero" aria-label="منتجات مغربية أصيلة في دبي">
        <div className="hero-copy">
          <p className="hero-kicker">أصالة المغرب، أقرب إليك</p>
          <h1>المغرب في كل تفصيلة</h1>
          <h2>منتجات أصيلة ... الآن في دبي</h2>
          <p>حلويات | مأكولات | شاي وقهوة | توابل | أدوات المطبخ<br />منتجات الحمام | منتجات البيت</p>
          <a className="primary-button" href={whatsappHref}>اطلب الآن عبر واتساب <b>◌</b></a>
        </div>
        <span className="hero-script">Authentic Morocco<br />Now in Dubai</span>
      </section>

      <section className="promise-strip">
        <div className="shell promise-grid">
          {promises.map(([icon, title, text]) => (
            <div className="promise" key={title}><i>{icon}</i><span><strong>{title}</strong><small>{text}</small></span></div>
          ))}
        </div>
      </section>

      <section id="collections" className="compact-section categories-section">
        <div className="shell">
          <div className="section-title"><h2>تسوّق حسب الفئة</h2><p>اكتشف مجموعاتنا المختارة</p></div>
          <div className="category-grid">{categories.map((item) => <CategoryCard key={item.name} item={item} />)}</div>
        </div>
      </section>

      <section id="products" className="compact-section featured-section">
        <div className="shell">
          <div className="section-title"><h2>مختارات الحمداني</h2><p>حلويات مغربية أصيلة</p></div>
          <a href="#collections" className="all-link">عرض جميع المنتجات ←</a>
          <div className="featured-layout">
            <div className="flourish"><span>مذاق المغرب</span><strong>يصل إلى باب منزلك</strong><b>❈</b></div>
            <div className="products-grid">{featured.map((item) => <ProductCard key={item.name} item={item} />)}</div>
          </div>
        </div>
      </section>

      <section id="story" className="hospitality">
        <div className="hospitality-image" />
        <div className="hospitality-copy"><h2>أصالة الضيافة المغربية<br />في كل مناسبة</h2><a href="#collections">اكتشف المزيد ←</a></div>
      </section>

      <section className="why-section">
        <div className="why-content">
          <h2>لماذا الحمداني؟</h2>
          <div className="why-grid">
            {promises.slice(0, 4).map(([icon, title], i) => <div key={title}><i>{icon}</i><strong>{i === 0 ? 'توصيل سريع' : i === 1 ? 'مذاق أصيل' : i === 2 ? 'تجربة تسوق سهلة' : 'منتجات مختارة بعناية'}</strong><small>{i === 0 ? 'في دبي والشارقة' : i === 1 ? 'من قلب المغرب' : i === 2 ? 'عبر واتساب' : 'من أفضل الموردين'}</small></div>)}
          </div>
        </div>
        <div className="morocco-card"><span>من المغرب<br />إلى دبي</span><small>أكثر من مجرد منتجات<br />... هي قطعة ذاكرة وجودة</small></div>
      </section>

      <section className="testimonials">
        <h2>آراء عملائنا</h2>
        <div className="shell testimonial-grid">{testimonials.map(t => <figure key={t.name}><div>★★★★★</div><blockquote>“{t.text}”</blockquote><figcaption>{t.name} - {t.location}</figcaption></figure>)}</div>
      </section>

      <section id="contact" className="newsletter"><div className="shell newsletter-inner"><div><h3>اشترك في نشرتنا الإخبارية</h3><p>احصل على آخر العروض والمنتجات الجديدة</p></div><form><input aria-label="بريدك الإلكتروني" placeholder="بريدك الإلكتروني" type="email" /><button>اشترك</button></form></div></section>

      <footer>
        <div className="shell footer-grid">
          <div className="footer-brand"><Logo /><p>منتجات مغربية أصيلة في دبي</p><div className="social">◎　f　♪</div></div>
          <div><h4>روابط سريعة</h4><a href="#">الرئيسية</a><a href="#products">منتجاتنا</a><a href="#story">من نحن</a><a href="#contact">تواصل معنا</a></div>
          <div><h4>مجموعاتنا</h4>{categories.slice(0,5).map(c => <a key={c.name} href={c.href}>{c.name}</a>)}</div>
          <div><h4>تواصل معنا</h4><a className="footer-whatsapp" href={whatsappHref}>◌ اطلب الآن عبر واتساب</a><p>دبي، الإمارات العربية المتحدة</p><p>info@alhamdani.ae</p></div>
          <div className="footer-motto">أصالة مغربية<br />في قلب دبي</div>
        </div>
        <div className="footer-bottom"><span>من المغرب ... إلى دبي</span><small>© 2026 Al Hamdani. All rights reserved.</small></div>
      </footer>
      <a className="mobile-whatsapp" href={whatsappHref}>اطلب عبر واتساب</a>
    </main>
  );
}
