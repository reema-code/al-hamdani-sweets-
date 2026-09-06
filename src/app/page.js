import Header from '../components/Header';
import Logo from '../components/Logo';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import NewsletterForm from '../components/NewsletterForm';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { testimonials } from '../data/testimonials';

const mapsHref = 'https://www.google.com/maps/search/?api=1&query=%D8%A7%D9%84%D8%AD%D9%85%D8%AF%D8%A7%D9%86%D9%8A+%D9%84%D9%84%D8%AD%D9%84%D9%88%D9%8A%D8%A7%D8%AA+%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%D9%8A%D8%A9+%D8%AF%D8%A8%D9%8A';
const whatsappHref = `https://wa.me/?text=${encodeURIComponent('مرحباً، أود الاستفسار عن منتجات الحمداني.')}`;

const productGroups = {
  sweets: products.filter((item) => item.group === 'sweets'),
  tea: products.filter((item) => item.group === 'tea'),
  kitchen: products.filter((item) => item.group === 'kitchen'),
  hammam: products.filter((item) => item.group === 'hammam')
};

function ProductGroup({ id, eyebrow, title, intro, items, tone = '' }) {
  return (
    <section id={id} className={`section product-section ${tone}`}>
      <div className="shell">
        <div className="section-head compact-head">
          <p className="eyebrow green">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{intro}</p>
        </div>
        <div className="products-grid">{items.map((item) => <ProductCard key={item.name} item={item} />)}</div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main id="top">
      <Header whatsappHref={whatsappHref} />

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">اختيارات مغربية للمائدة والبيت والعناية</p>
            <h1>روح المغرب، أقرب إليكم في دبي</h1>
            <p className="lead">من الحلويات والخبز المغربي إلى الشاي والتوابل، ومن الطواجن وأطقم الشاي إلى مستلزمات الحمّام المغربي — اكتشفوا اختيارات الحمداني للمائدة والبيت والعناية.</p>
            <div className="actions">
              <a className="btn btn-orange" href={whatsappHref} target="_blank" rel="noreferrer">اطلب عبر واتساب</a>
              <a className="btn btn-light" href="#products">شاهد المنتجات</a>
            </div>
          </div>
          <div className="hero-photos" aria-label="منتجات مغربية متنوعة">
            <img className="hero-photo hero-photo-main" src="/images/hero-souk.jpg" alt="محل بقالة مغربي تقليدي بالزيتون والليمون والمخللات" width="1170" height="874" fetchPriority="high" />
            <img className="hero-photo" src="/images/hero-hammam.jpg" alt="منتجات الحمام المغربي الطبيعية: غاسول وصابون بلدي وزيت أركان" width="1566" height="1005" />
            <img className="hero-photo" src="/images/hero-kitchen.jpg" alt="مائدة مغربية بالطواجن التقليدية" width="1000" height="666" />
          </div>
        </div>
      </section>

      <nav className="trust-strip" aria-label="روابط المجموعات"><div className="shell trust-grid">{[
        ['حلويات ومخبوزات', '#products'], ['المؤونة والشاي والتوابل', '#tea-products'], ['الطواجن وأطقم الشاي', '#kitchen-products'], ['الجمال والحمّام', '#hammam-products']
      ].map(([item, href]) => <a key={item} href={href}>✦ {item}</a>)}</div></nav>

      <section id="collections" className="section cream">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow green">تسوق حسب المجموعة</p>
            <h2>كل ما يحتاجه بيت مغربي</h2>
            <p>من مائدة الشاي إلى الحمام المغربي، وصولاً إلى ديكور المنزل — تشكيلة تجمع كل تفاصيل البيت المغربي الأصيل.</p>
          </div>
          <div className="category-grid">{categories.map((item) => <CategoryCard key={item.name} item={item} />)}</div>
        </div>
      </section>

      <ProductGroup
        id="products"
        eyebrow="حلويات مغربية"
        title="حلاوة الضيافة المغربية"
        intro="نبدأ بما يليق بالمائدة المغربية: حلويات تقليدية للتقديم مع الشاي وفي المناسبات."
        items={productGroups.sweets}
      />

      <section id="kitchen" className="section split-section">
        <div className="shell split">
          <img className="split-photo" src="/images/section-tea.jpg" alt="طقوس صب الشاي المغربي التقليدية" />
          <div>
            <p className="eyebrow gold">طقوس الشاي</p>
            <h2>الشاي الأخضر، بروح الضيافة المغربية.</h2>
            <p>الشاي في المغرب ليس مجرد مشروب، بل طقس كامل — نعناع طازج، سكر، وصب من علٍ ليتشكل الرغوة المثالية. نقدّم الشاي، النعناع المجفف، وأطقم البرّاد والكؤوس لإحياء هذه الطقوس في بيتك.</p>
            <a className="text-link" href="#tea-products">تسوّق الشاي والتوابل ←</a>
          </div>
        </div>
      </section>

      <ProductGroup
        id="tea-products"
        eyebrow="الشاي والتوابل"
        title="نكهات من المطبخ المغربي"
        intro="شاي المائدة وتوابل مختارة من المنتجات المتوفرة في مجموعتنا."
        items={productGroups.tea}
        tone="cream"
      />

      <ProductGroup
        id="kitchen-products"
        eyebrow="المائدة والتقديم"
        title="أوانٍ لطقوس الضيافة"
        intro="طاجين التقديم والبرّاد والكؤوس المغربية لإكمال المائدة."
        items={productGroups.kitchen}
      />

      <section id="hammam" className="section hammam-section">
        <div className="shell split reverse">
          <img className="split-photo" src="/images/section-hammam.jpg" alt="حمام مغربي تقليدي بالزليج والفوانيس" />
          <div>
            <p className="eyebrow gold">الحمام المغربي والجمال</p>
            <h2>طقس الحمام المغربي، كما يجب أن يكون.</h2>
            <p>صابون بلدي أسود، غاسول الأطلس، وزيت الأركان الأصلي المعصور على البارد — منتجات طبيعية 100% من المغرب، لتجربة حمام مغربي أصيلة في منزلك.</p>
            <a className="text-link light" href="#hammam-products">تسوّق منتجات الحمّام ←</a>
          </div>
        </div>
      </section>

      <ProductGroup
        id="hammam-products"
        eyebrow="العناية المغربية"
        title="أساسيات طقوس الحمّام"
        intro="منتجات العناية المتوفرة ضمن تشكيلة الحمّام المغربي."
        items={productGroups.hammam}
        tone="cream"
      />

      <section id="contact" className="section delivery-section">
        <div className="shell delivery-card" style={{ backgroundImage: "url('/images/section-delivery.jpg')" }}>
          <div className="delivery-tint" />
          <div className="delivery-copy">
            <p className="eyebrow gold">التوصيل في دبي</p>
            <h2>نوصّل طلبك أينما كنت في دبي.</h2>
            <p>اطلب عبر واتساب، ونحن نجهّز طلبك ونوصله بسرعة إلى باب منزلك — أو تفضّل بزيارتنا مباشرة.</p>
            <div className="contact-actions">
              <a className="btn btn-orange" href={whatsappHref} target="_blank" rel="noreferrer">استفسر عن التوصيل</a>
              <a className="btn btn-light" href={mapsHref} target="_blank" rel="noreferrer">موقعنا على الخريطة</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow green">آراء عملائنا</p>
            <h2>قالوا عنا</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((t) => (
              <figure className="testimonial-card" key={t.name}>
                <blockquote>“{t.text}”</blockquote>
                <figcaption><strong>{t.name}</strong><span>{t.location}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="shell newsletter-row">
          <div>
            <p className="eyebrow gold">النشرة البريدية</p>
            <h2>كن أول من يعرف بوصولاتنا الجديدة</h2>
            <p>حلويات المواسم، منتجات جديدة وعروض حصرية — مباشرة إلى بريدك.</p>
          </div>
          <NewsletterForm />
        </div>

        <div className="shell footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>دبي، الإمارات العربية المتحدة</p>
          </div>
          <div className="footer-col">
            <h4>المتجر</h4>
            <a href="#collections">المجموعات</a>
            <a href="#products">الأكثر مبيعاً</a>
            <a href="#kitchen">المطبخ والشاي</a>
            <a href="#hammam">الحمام المغربي</a>
          </div>
          <div className="footer-col">
            <h4>خدمة العملاء</h4>
            <a href="#contact">التوصيل في دبي</a>
            <a href="#contact">تواصل معنا</a>
          </div>
          <div className="footer-col">
            <h4>تابعنا</h4>
            <a href={whatsappHref} target="_blank" rel="noreferrer">واتساب</a>
            <a href={mapsHref} target="_blank" rel="noreferrer">موقعنا على الخريطة</a>
          </div>
        </div>
        <div className="shell footer-bottom">© {new Date().getFullYear()} الحمداني — كل الحقوق محفوظة</div>
      </footer>
      <a className="mobile-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">اطلب عبر واتساب</a>
    </main>
  );
}
