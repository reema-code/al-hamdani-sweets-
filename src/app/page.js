import Header from '../components/Header';
import Logo from '../components/Logo';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { testimonials } from '../data/testimonials';

const whatsapp = (message = 'مرحباً، أود الاستفسار عن منتجات الحمداني') =>
  `https://wa.me/?text=${encodeURIComponent(message)}`;

const groups = [
  { id: 'sweets', kicker: 'من المخبز المغربي', title: 'حلويات ومخبوزات', copy: 'مذاقات الضيافة المغربية المحبوبة، مختارة للّمة اليومية والمناسبات.', items: ['الشباكية'] },
  { id: 'pantry', kicker: 'أساسيات الدار', title: 'الشاي والتوابل والمواد الغذائية', copy: 'نكهات أصيلة تعيد إلى مطبخكم تفاصيل الدار المغربية.', items: ['شاي أخضر مغربي 4011', 'زعفران تاليوين'] },
  { id: 'kitchen', kicker: 'للمائدة والمطبخ', title: 'الطواجن وأدوات التقديم', copy: 'قطع عملية وجميلة لطقوس الطهي والضيافة.', items: ['طاجين تقديم فاسي', 'أكواب الشاي المغربي', 'براد شاي نحاسي'] },
  { id: 'hammam', kicker: 'طقس العناية المغربي', title: 'الحمّام والجمال', copy: 'عناية مغربية أصيلة بمكوّنات طبيعية وطقوس متوارثة.', items: ['الصابون البلدي', 'زيت الأركان الأصلي'] }
];

function ProductSection({ group }) {
  const selected = group.items.map((name) => products.find((product) => product.name === name)).filter(Boolean);
  return (
    <section id={group.id} className="product-section">
      <div className="shell">
        <header className="section-heading">
          <div><span className="kicker">{group.kicker}</span><h2>{group.title}</h2></div>
          <p>{group.copy}</p>
        </header>
        <div className={`products-grid products-${selected.length}`}>
          {selected.map((item) => <ProductCard key={item.name} item={item} whatsappHref={whatsapp(`مرحباً، أود طلب ${item.name}`)} />)}
        </div>
        <a className="collection-link" href={whatsapp(`مرحباً، أود رؤية مجموعة ${group.title}`)} target="_blank" rel="noreferrer">عرض المجموعة <span>←</span></a>
      </div>
    </section>
  );
}

function Editorial({ type, image, eyebrow, title, copy, children }) {
  return (
    <section className={`editorial editorial-${type}`}>
      <div className="shell editorial-grid">
        <div className="editorial-image"><img src={image} alt={title} loading="lazy" /></div>
        <div className="editorial-copy"><span className="kicker">{eyebrow}</span><h2>{title}</h2><p>{copy}</p>{children}</div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      <Header whatsappHref={whatsapp()} />
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker">منتجات مغربية أصيلة في دبي</p>
            <h1>المغرب <em>أقرب إليك</em></h1>
            <p className="lead">وجهتكم للمنتجات المغربية المختارة: حلويات ومخبوزات، مواد غذائية، شاي وتوابل، طواجن وأدوات المطبخ، منتجات الحمّام والجمال، ولمسات للمنزل.</p>
            <div className="actions">
              <a className="btn btn-primary" href="#collections">تصفّح المنتجات</a>
              <a className="btn btn-outline" href={whatsapp()} target="_blank" rel="noreferrer">اطلب عبر واتساب</a>
            </div>
            <div className="hero-note"><span>دبي</span><p>اختيارات مغربية تصل إلى بابكم داخل دبي</p></div>
          </div>
          <figure className="hero-visual">
            <img src="/images/hero-souk.jpg" alt="تشكيلة متنوعة من المنتجات والأواني المغربية" />
            <figcaption><b>مختارات من المغرب</b><span>للمطبخ، المائدة والبيت</span></figcaption>
          </figure>
        </div>
      </section>

      <div className="zellige-line" aria-hidden="true" />

      <section id="collections" className="collections section-pad">
        <div className="shell">
          <header className="section-heading intro-heading">
            <div><span className="kicker">كل ما تحبّونه من المغرب</span><h2>تسوّق حسب المجموعة</h2></div>
            <p>من نكهات المائدة إلى طقوس العناية وتفاصيل المنزل — اكتشفوا مجموعاتنا المختارة بعناية في دبي.</p>
          </header>
          <div className="category-grid">{categories.map((item, index) => <CategoryCard key={item.name} item={item} featured={index < 2} />)}</div>
        </div>
      </section>

      <ProductSection group={groups[0]} />

      <Editorial type="tea" image="/images/section-tea.jpg" eyebrow="لحظة مغربية كل يوم" title="الشاي حكاية ضيافة" copy="كأس الشاي المغربي أكثر من مشروب؛ لحظة هادئة تجمع الأهل والأصدقاء، بنكهة النعناع وكرم التقديم.">
        <a className="inline-link" href="#pantry">اكتشف الشاي والتوابل ←</a>
      </Editorial>

      <ProductSection group={groups[1]} />

      <Editorial type="kitchen" image="/images/hero-kitchen.jpg" eyebrow="من قلب المطبخ المغربي" title="الطاجين… طهي على مهل" copy="قطعة تحمل ذاكرة المطبخ المغربي، تحفظ النكهة وتحوّل اجتماع العائلة حول المائدة إلى طقس دافئ.">
        <a className="inline-link" href="#kitchen">شاهد أدوات المطبخ ←</a>
      </Editorial>

      <ProductSection group={groups[2]} />

      <Editorial type="hammam" image="/images/section-hammam.jpg" eyebrow="عناية من الطبيعة" title="طقوس الحمّام المغربي" copy="الصابون البلدي وزيت الأركان في طقس بسيط ومتوارث، يمنح البشرة والشعر عناية أصيلة من المغرب.">
        <a className="inline-link" href="#hammam">اكتشف مجموعة العناية ←</a>
      </Editorial>

      <ProductSection group={groups[3]} />

      <section id="delivery" className="delivery">
        <div className="shell delivery-grid">
          <img src="/images/section-delivery.jpg" alt="توصيل منتجات الحمداني داخل دبي" loading="lazy" />
          <div><span className="kicker">من المغرب إلى بابكم</span><h2>منتجاتكم المغربية في دبي</h2><p>اختاروا ما تحبّون من مجموعاتنا، وأرسلوا طلبكم. نؤكد التفاصيل والتوصيل معكم مباشرة عبر واتساب.</p><a className="btn btn-terracotta" href={whatsapp('مرحباً، أود الاستفسار عن التوصيل داخل دبي')} target="_blank" rel="noreferrer">استفسر عن التوصيل</a></div>
        </div>
      </section>

      <section id="testimonials" className="testimonials section-pad">
        <div className="shell"><header className="center-heading"><span className="kicker">من زبائننا</span><h2>كلمات نعتز بها</h2></header><div className="testimonial-grid">{testimonials.slice(0, 3).map((item) => <figure key={item.name}><blockquote>“{item.text}”</blockquote><figcaption><b>{item.name}</b><span>{item.location}</span></figcaption></figure>)}</div></div>
      </section>

      <section className="newsletter">
        <div className="shell newsletter-row"><div><span className="kicker">رسائل قليلة، واختيارات تستحق</span><h2>جديد الحمداني إلى بريدك</h2></div><form><label className="sr-only" htmlFor="email">البريد الإلكتروني</label><input id="email" type="email" placeholder="بريدك الإلكتروني" /><button type="submit">اشترك</button></form></div>
      </section>

      <footer id="contact">
        <div className="shell footer-grid">
          <div className="footer-brand"><Logo /><p>متجر للمنتجات المغربية الأصيلة في دبي، من نكهات الدار إلى تفاصيلها الجميلة.</p></div>
          <nav><h3>استكشف</h3><a href="#collections">المجموعات</a><a href="#kitchen">المطبخ والطواجن</a><a href="#hammam">الحمّام والجمال</a></nav>
          <div><h3>تواصل</h3><a href={whatsapp()} target="_blank" rel="noreferrer">واتساب</a><span>دبي، الإمارات العربية المتحدة</span><span>التوصيل داخل دبي</span></div>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} الحمداني</span><span>منتجات مغربية أصيلة في دبي</span></div>
      </footer>
      <a className="floating-whatsapp" href={whatsapp()} target="_blank" rel="noreferrer" aria-label="تواصل مع الحمداني عبر واتساب"><span>واتساب</span> ◉</a>
    </main>
  );
}
