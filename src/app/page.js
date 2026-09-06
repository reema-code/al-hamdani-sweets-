import Header from '../components/Header';
import Logo from '../components/Logo';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import NewsletterForm from '../components/NewsletterForm';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { testimonials } from '../data/testimonials';

const mapsHref = 'https://www.google.com/maps/search/?api=1&query=%D8%A7%D9%84%D8%AD%D9%85%D8%AF%D8%A7%D9%86%D9%8A+%D9%84%D9%84%D8%AD%D9%84%D9%88%D9%8A%D8%A7%D8%AA+%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%D9%8A%D8%A9+%D8%AF%D8%A8%D9%8A';
const whatsappHref = '#contact';

export default function HomePage() {
  return (
    <main>
      <Header whatsappHref={whatsappHref} />

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">وجهتك المغربية الأولى في دبي</p>
            <h1>حلويات تُحضّر بحب، وتُقدّم بكرم</h1>
            <p className="lead">حلويات ومخبوزات، شاي وتوابل، أدوات مطبخ وطواجن، منتجات حمام مغربي وجمال، وتحف للمنزل والديكور — مختارة بعناية وموصّلة أينما كنت في دبي.</p>
            <div className="actions">
              <a className="btn btn-orange" href={whatsappHref}>اطلب عبر واتساب</a>
              <a className="btn btn-light" href="#collections">تصفح المجموعات</a>
            </div>
          </div>
          <div className="hero-photos" aria-label="منتجات مغربية متنوعة">
            <img className="hero-photo hero-photo-main" src="/images/hero-souk.jpg" alt="محل بقالة مغربي تقليدي بالزيتون والليمون والمخللات" />
            <img className="hero-photo" src="/images/hero-hammam.jpg" alt="منتجات الحمام المغربي الطبيعية: غاسول وصابون بلدي وزيت أركان" />
            <img className="hero-photo" src="/images/hero-kitchen.jpg" alt="مائدة مغربية بالطواجن التقليدية" />
          </div>
        </div>
      </section>

      <section className="trust-strip"><div className="shell trust-grid">{['منتجات مغربية أصيلة', 'تشكيلة من كل الفئات', 'توصيل في دبي', 'طلب سهل عبر واتساب'].map((item) => <span key={item}>✦ {item}</span>)}</div></section>

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

      <section id="products" className="section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow gold">الأكثر طلباً</p>
            <h2>مختارات تحمل روح المغرب</h2>
            <p>من كعب الغزال إلى كأس الشاي الأخضر — القطع الأكثر طلباً لدى عملائنا.</p>
          </div>
          <div className="products-grid">{products.map((item) => <ProductCard key={item.name} item={item} />)}</div>
        </div>
      </section>

      <section id="kitchen" className="section split-section">
        <div className="shell split">
          <img className="split-photo tajine-photo" src="/images/product-tajine.png" alt="طاجين تقديم مغربي مزخرف باللون الأزرق" />
          <div>
            <p className="eyebrow gold">الطاجين المغربي</p>
            <h2>طاجين أصيل، لمائدة تحكي حكاية.</h2>
            <p>طاجين خزفي مغربي مزخرف يدوياً بنقوش زرقاء أصيلة، صُمّم ليضفي على التقديم لمسة دافئة من روح المغرب ويجعل كل مائدة أكثر تميزاً.</p>
            <a className="text-link" href="#products">تسوق الطواجن ←</a>
          </div>
        </div>
      </section>

      <section id="hammam" className="section hammam-section">
        <div className="shell split reverse">
          <img className="split-photo" src="/images/section-hammam.jpg" alt="حمام مغربي تقليدي بالزليج والفوانيس" />
          <div>
            <p className="eyebrow gold">الحمام المغربي والجمال</p>
            <h2>طقس الحمام المغربي، كما يجب أن يكون.</h2>
            <p>صابون بلدي أسود، غاسول الأطلس، وزيت الأركان الأصلي المعصور على البارد — منتجات طبيعية 100% من المغرب، لتجربة حمام مغربي أصيلة في منزلك.</p>
            <a className="text-link light" href="#products">تسوق منتجات الحمام ←</a>
          </div>
        </div>
      </section>

      <section id="contact" className="section delivery-section">
        <div className="shell delivery-card" style={{ backgroundImage: "url('/images/section-delivery.jpg')" }}>
          <div className="delivery-tint" />
          <div className="delivery-copy">
            <p className="eyebrow gold">التوصيل في دبي</p>
            <h2>نوصّل طلبك أينما كنت في دبي.</h2>
            <p>اطلب عبر واتساب، ونحن نجهّز طلبك ونوصله بسرعة إلى باب منزلك — أو تفضّل بزيارتنا مباشرة.</p>
            <div className="contact-actions">
              <a className="btn btn-orange" href={whatsappHref}>اطلب عبر واتساب</a>
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
            <a href="#contact">سياسة الخصوصية</a>
            <a href="#contact">الشروط والأحكام</a>
          </div>
          <div className="footer-col">
            <h4>تابعنا</h4>
            <a href={whatsappHref}>واتساب</a>
            <a href="#" target="_blank" rel="noreferrer">إنستغرام</a>
            <a href={mapsHref} target="_blank" rel="noreferrer">موقعنا على الخريطة</a>
          </div>
        </div>
        <div className="shell footer-bottom">© {new Date().getFullYear()} الحمداني — كل الحقوق محفوظة</div>
      </footer>
      <a className="mobile-whatsapp" href={whatsappHref}>اطلب عبر واتساب</a>
    </main>
  );
}
