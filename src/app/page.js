import Header from '../components/Header';
import Image from 'next/image';
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
        <div className="zellij-corner zellij-corner-top" aria-hidden="true" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">من المغرب إلى داركم في دبي</p>
            <h1>نكهة الدار المغربية، أقرب إليكم.</h1>
            <p className="lead">من حلاوة الشباكية وعطر أتاي بالنعناع، إلى زليج المائدة وأسرار الحمّام المغربي. ننتقي لكم ما نحبه في بيوتنا، ونوصّله إلى بابكم في دبي.</p>
            <div className="actions">
              <a className="btn btn-orange" href={whatsappHref}>ابدأ طلبك عبر واتساب</a>
              <a className="btn btn-light" href="#collections">اكتشف التشكيلة</a>
            </div>
          </div>
          <div className="hero-photos" aria-label="منتجات مغربية متنوعة">
            <div className="hero-photo hero-photo-main"><Image src="/images/hero-souk.jpg" alt="منتجات مغربية من الزيتون والليمون المصير" fill priority sizes="(max-width: 960px) 100vw, 48vw" /></div>
            <div className="hero-photo hero-photo-secondary"><Image src="/images/hero-hammam.jpg" alt="غاسول وصابون بلدي وزيت أركان" fill sizes="(max-width: 960px) 50vw, 24vw" /></div>
            <div className="hero-photo hero-photo-secondary"><Image src="/images/hero-kitchen.jpg" alt="مائدة مغربية بالطواجن التقليدية" fill sizes="(max-width: 960px) 50vw, 24vw" /></div>
          </div>
        </div>
      </section>

      <section className="trust-strip"><div className="shell trust-grid">{['مختارات أصلية من المغرب', 'كل احتياجات الدار', 'توصيل إلى أنحاء دبي', 'طلب سريع عبر واتساب'].map((item) => <span key={item}>✦ {item}</span>)}</div></section>

      <section id="collections" className="section cream">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow green">تسوق حسب المجموعة</p>
            <h2>تفاصيل صغيرة تصنع دفء الدار</h2>
            <p>مائدة عامرة، أتاي في البرّاد، وعناية من خيرات المغرب — مجموعات مختارة لتجدوا كل ما تحبونه بسهولة.</p>
          </div>
          <div className="category-grid">{categories.map((item) => <CategoryCard key={item.name} item={item} />)}</div>
        </div>
      </section>

      <section id="products" className="section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow gold">الأكثر طلباً</p>
            <h2>المفضّلات التي تعودون إليها</h2>
            <p>نكهات مألوفة وقطع تحكي حكاية الصنعة المغربية؛ هذه أكثر اختيارات زبائننا طلباً.</p>
          </div>
          <div className="products-grid">{products.map((item) => <ProductCard key={item.name} item={item} />)}</div>
        </div>
      </section>

      <section id="kitchen" className="section split-section">
        <div className="shell split">
          <Image className="split-photo" src="/images/section-tea.jpg" alt="طقوس صب الشاي المغربي التقليدية" width={1200} height={800} sizes="(max-width: 960px) 100vw, 50vw" />
          <div>
            <p className="eyebrow gold">طقوس الشاي</p>
            <h2>كأس أتاي… وترحاب من القلب.</h2>
            <p>في المغرب، لا تكتمل اللّمّة من دون أتاي. شاي أخضر ونعناع عطِر، يُصبّان في كؤوس منقوشة ليبدأ الحديث. اخترنا لكم لوازم الطقس كاملة، من البرّاد إلى آخر كأس.</p>
            <a className="text-link" href="#products">اكتشف ركن الشاي والتوابل ←</a>
          </div>
        </div>
      </section>

      <section id="hammam" className="section hammam-section">
        <div className="shell split reverse">
          <Image className="split-photo" src="/images/section-hammam.jpg" alt="حمام مغربي تقليدي بالزليج والفوانيس" width={1200} height={800} sizes="(max-width: 960px) 100vw, 50vw" />
          <div>
            <p className="eyebrow gold">الحمام المغربي والجمال</p>
            <h2>عناية مغربية توارثنا أسرارها.</h2>
            <p>صابون بلدي، غاسول الأطلس وزيت أركان أصلي — ثلاث خطوات بسيطة تمنحكم طقساً دافئاً للعناية، بخيرات قادمة من المغرب.</p>
            <a className="text-link light" href="#products">اكتشف ركن الحمّام ←</a>
          </div>
        </div>
      </section>

      <section id="contact" className="section delivery-section">
        <div className="shell delivery-card" style={{ backgroundImage: "url('/images/section-delivery.jpg')" }}>
          <div className="delivery-tint" />
          <div className="delivery-copy">
            <p className="eyebrow gold">التوصيل في دبي</p>
            <h2>من رفوفنا إلى باب داركم.</h2>
            <p>أرسلوا قائمتكم عبر واتساب، وسنتولى تجهيزها بعناية وتوصيلها في دبي. ويمكنكم دائماً زيارتنا واختيار ما تحبون بأنفسكم.</p>
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
