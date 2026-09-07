import Header from '../components/Header';
import Logo from '../components/Logo';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { testimonials } from '../data/testimonials';

const whatsappHref = '#contact';

const trustItems = [
  { title: 'تُحضّر طازجة', desc: 'نهتم بكل دفعة كما لو كانت لبيتنا' },
  { title: 'مكوّنات مختارة', desc: 'جودة تُذاق من أول لقمة' },
  { title: 'وصفات أصيلة', desc: 'نكهات تحفظ ذاكرة الضيافة' },
  { title: 'توصيل داخل الإمارات', desc: 'طلباتكم تصل بعناية' }
];

const giftOccasions = ['رمضان والعيد', 'المناسبات العائلية', 'هدايا الشركات'];

export default function HomePage() {
  const [leadTestimonial, ...supportTestimonials] = testimonials;

  return (
    <main>
      <Header whatsappHref={whatsappHref} />

      <section className="hero">
        <div className="hero-panel">
          <div className="shell hero-panel-inner">
            <h1>حلويات تُحضّر بحب، وتُقدّم بكرم.</h1>
            <p className="lead">مذاقات مغربية أصيلة، مختارة لترافق أجمل لمّاتكم ومناسباتكم في دبي.</p>
            <div className="actions">
              <a className="btn btn-brass" href={whatsappHref}>اطلب عبر واتساب</a>
              <a className="btn btn-outline" href="#products">اكتشف مختاراتنا</a>
            </div>
          </div>
        </div>
        <div className="hero-photo-bleed">
          <img src="/images/category-sweets.jpg" alt="طبق من الشباكية والغريبة والسلو مع أدوات الشاي المغربي" />
          <span className="hero-caption">A tradition worth sharing</span>
        </div>
      </section>

      <section className="trust-strip">
        <div className="shell trust-row divider-list">
          {trustItems.map((item) => (
            <div className="trust-chip" key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="collections" className="section cream">
        <div className="shell">
          <div className="section-head">
            <h2>من الدار المغربية</h2>
            <p>نكهات، أدوات وطقوس تكمل تجربة الضيافة.</p>
          </div>
          <div className="category-grid">
            {categories.map((item, i) => <CategoryCard key={item.name} item={item} featured={i === 0} />)}
          </div>
        </div>
      </section>

      <section id="products" className="section">
        <div className="shell">
          <div className="section-head">
            <h2>مختارات الحمداني</h2>
            <p>قطع مختارة بعناية، للضيافة اليومية ولكل مناسبة تستحق طعمًا لا يُنسى.</p>
          </div>
          <div className="products-grid">{products.map((item) => <ProductCard key={item.name} item={item} />)}</div>
        </div>
      </section>

      <section className="heritage-strip" style={{ backgroundImage: "url('/images/category-kitchen.jpg')" }}>
        <span>أصالة تتوارثها الأجيال</span>
      </section>

      <section id="story" className="section split-section">
        <div className="shell split">
          <img className="split-photo" src="/images/hero-kitchen.jpg" alt="مائدة طواجن مغربية بالزيتون وماء الورد وكؤوس الشاي" />
          <div>
            <h2>حكاية من الطعم الأصيل</h2>
            <p>نؤمن أن الحلوى ليست مجرد مذاق؛ إنها ترحيب، وذكرى، وتفصيل جميل يجمع الأحبة. لذلك نختار وصفاتنا ومكوّناتنا بروح الصنعة المغربية وكرم الضيافة العربية.</p>
            <p className="story-caption">من المغرب، إلى مجالسكم</p>
          </div>
        </div>
      </section>

      <section id="gifts" className="section gift-section">
        <div className="shell split reverse">
          <img className="split-photo" src="/images/category-ramadan.jpg" alt="مائدة إفطار رمضانية مغربية بالتمور والشاي" />
          <div>
            <h2>هدايا لكل مناسبة</h2>
            <p>تشكيلات أنيقة لرمضان والعيد، للّمة العائلية، ولهدايا الشركات. نساعدكم في اختيار ما يليق بالمناسبة وتنسيقه بعناية.</p>
            <div className="divider-list">
              {giftOccasions.map((tag, i) => (
                <span className="tag-chip" key={tag}>
                  {i > 0 && <span className="dot">◆</span>}
                  <strong>{tag}</strong>
                </span>
              ))}
            </div>
            <a className="text-link light" href={whatsappHref}>اطلب تنسيق هديتك</a>
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="shell">
          <div className="section-head">
            <h2>ثقة نتشرّف بها</h2>
          </div>
          <div className="testimonial-feature">
            <figure className="testimonial-lead">
              <blockquote>“{leadTestimonial.text}”</blockquote>
              <figcaption><strong>{leadTestimonial.name}</strong><span>{leadTestimonial.location}</span></figcaption>
            </figure>
            <div className="testimonial-support">
              {supportTestimonials.map((t) => (
                <figure key={t.name}>
                  <blockquote>“{t.text}”</blockquote>
                  <figcaption><strong>{t.name}</strong><span>{t.location}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-band">
        <div className="shell contact-band-row">
          <div>
            <h2>اطلب حلوياتك المفضلة اليوم</h2>
            <p>أرسل لنا طلبك، وسنساعدك في اختيار الكمية والتشكيلة المناسبة.</p>
          </div>
          <a className="btn btn-brass" href={whatsappHref}>تواصل عبر واتساب</a>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>حلويات مغربية أصيلة، تُقدّم بكرم في قلب دبي.</p>
          </div>
          <div className="footer-col">
            <h4>تواصل معنا</h4>
            <a href={whatsappHref}>واتساب</a>
            <a href={whatsappHref}>الهاتف · عبر واتساب</a>
            <a href="#" target="_blank" rel="noreferrer">إنستغرام</a>
          </div>
          <div className="footer-col">
            <h4>زورونا</h4>
            <span className="footer-text">دبي، الإمارات العربية المتحدة</span>
            <span className="footer-text">ساعات العمل · تُحدّث عبر واتساب</span>
          </div>
          <div className="footer-col">
            <h4>روابط سريعة</h4>
            <a href="#products">مختاراتنا</a>
            <a href="#story">حكايتنا</a>
            <a href="#gifts">الهدايا والمناسبات</a>
          </div>
        </div>
        <div className="shell footer-bottom">© {new Date().getFullYear()} الحمداني للحلويات · Al Hamdani Sweets</div>
      </footer>
      <a className="mobile-whatsapp" href={whatsappHref}>اطلب عبر واتساب</a>
    </main>
  );
}
