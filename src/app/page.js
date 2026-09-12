import Header from '../components/Header';
import Logo from '../components/Logo';
import SectionMark from '../components/SectionMark';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { productGroups } from '../data/products';
import { categories } from '../data/categories';
import { testimonials } from '../data/testimonials';

const whatsappHref = `https://wa.me/?text=${encodeURIComponent('مرحباً الحمداني، أود الاستفسار عن المنتجات المغربية المتوفرة لديكم.')}`;

const trustItems = [
  { title: 'تُحضّر طازجة', desc: 'نهتم بكل دفعة كما لو كانت لبيتنا' },
  { title: 'مكوّنات مختارة', desc: 'جودة تُذاق من أول لقمة' },
  { title: 'وصفات أصيلة', desc: 'نكهات تحفظ ذاكرة الضيافة' },
  { title: 'توصيل داخل الإمارات', desc: 'طلباتكم تصل بعناية' }
];

const giftTags = ['رمضان والعيد', 'المناسبات العائلية', 'هدايا الشركات'];

export default function HomePage() {
  return (
    <main>
      <Header whatsappHref={whatsappHref} />

      <section className="hero">
        <img className="hero-photo" src="/images/category-sweets.jpg" alt="مائدة حلويات مغربية تضم الشباكية والغريبة وحلوى اللوز" fetchPriority="high" />
        <div className="hero-tint" />
        <div className="shell hero-content">
          <p className="eyebrow">صناعة مغربية · ضيافة إماراتية</p>
          <h1>حلويات تُحضّر بحب، وتُقدّم بكرم.</h1>
          <p className="lead">مذاقات مغربية أصيلة، مختارة لترافق أجمل لمّاتكم ومناسباتكم في دبي.</p>
          <div className="actions">
            <a className="btn btn-orange" href={whatsappHref} target="_blank" rel="noreferrer">اطلب عبر واتساب</a>
            <a className="btn btn-outline" href="#products">اكتشف مختاراتنا</a>
          </div>
        </div>
        <span className="hero-caption">A tradition worth sharing</span>
      </section>

      <section className="trust-strip">
        <div className="shell trust-grid">
          {trustItems.map((item, i) => (
            <div className="trust-item" key={item.title}>
              <span className="trust-num">{String(i + 1).padStart(2, '0')}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="section">
        <div className="shell">
          <div className="section-head">
            <SectionMark />
            <p className="eyebrow green">من واجهة الحمداني في دبي</p>
            <h2>مختارات الحمداني</h2>
            <p>نبدأ بحلوياتنا المغربية، ثم نأخذكم إلى الشاي والتوابل والطواجن وطقوس الحمّام.</p>
          </div>
          <div className="product-groups">
            {productGroups.map((group, index) => (
              <section className={`product-group${index === 0 ? ' featured-products' : ''}`} key={group.id} aria-labelledby={`${group.id}-title`}>
                <div className="group-head">
                  <p className="eyebrow green">{group.eyebrow}</p>
                  <h3 id={`${group.id}-title`}>{group.title}</h3>
                  <p>{group.desc}</p>
                </div>
                <div className={`products-grid count-${group.products.length}`}>
                  {group.products.map((item) => <ProductCard key={item.name} item={item} />)}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="section cream">
        <div className="shell">
          <div className="section-head">
            <SectionMark />
            <p className="eyebrow green">أكثر من الحلوى</p>
            <h2>من الدار المغربية</h2>
            <p>نكهات، أدوات وطقوس تكمل تجربة الضيافة.</p>
          </div>
          <div className="category-grid">{categories.map((item) => <CategoryCard key={item.name} item={item} />)}</div>
        </div>
      </section>

      <section className="heritage-strip" style={{ backgroundImage: "url('/images/category-kitchen.jpg')" }} aria-label="مجموعة من الطواجن المغربية المزخرفة">
        <span>طواجن مغربية للمطبخ والمائدة</span>
      </section>

      <section id="story" className="section split-section">
        <div className="shell split">
          <img className="split-photo" src="/images/hero-kitchen.jpg" alt="مائدة طواجن مغربية بالزيتون وماء الورد وكؤوس الشاي" />
          <div>
            <SectionMark />
            <p className="eyebrow green">على المائدة المغربية</p>
            <h2>الطاجين كما نعرفه في الدار</h2>
            <p>تجتمع الخضار والزيتون والتوابل في طاجين الفخار، ويصل الطبق إلى المائدة محتفظاً بدفئه ونكهته. نوفر قطعاً مغربية للتقديم والطبخ بروح المائدة الأصيلة.</p>
            <p className="story-caption">من المطبخ المغربي، إلى موائدكم في دبي</p>
          </div>
        </div>
      </section>

      <section id="gifts" className="section gift-section">
        <div className="shell split reverse">
          <img className="split-photo" src="/images/category-ramadan.jpg" alt="مائدة إفطار رمضانية مغربية بالتمور والشاي" />
          <div>
            <SectionMark light />
            <p className="eyebrow gold">مائدة رمضان المغربية</p>
            <h2>ضيافة الإفطار تجمعنا</h2>
            <p>تمور وشاي وحريرة وحلويات ومخبوزات تجتمع على مائدة الإفطار. نساعدكم في تنسيق تشكيلة رمضان والعيد بما يناسب عدد الضيوف والمناسبة.</p>
            <div className="pill-row">{giftTags.map((tag) => <span className="pill" key={tag}>{tag}</span>)}</div>
            <a className="text-link light" href={whatsappHref} target="_blank" rel="noreferrer">اطلب تنسيق هديتك ←</a>
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="shell">
          <div className="section-head">
            <SectionMark />
            <p className="eyebrow green">قالوا عنّا</p>
            <h2>ثقة نتشرّف بها</h2>
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

      <div className="zellige-strip" role="img" aria-label="تفصيل من زليج مغربي تقليدي" />

      <section id="contact" className="contact-band">
        <div className="shell contact-band-row">
          <div>
            <p className="eyebrow gold">نكهتكم المفضّلة أقرب</p>
            <h2>اطلب مختاراتك المغربية اليوم</h2>
            <p>أرسل لنا طلبك، وسنساعدك في اختيار الحلويات أو منتجات الدار المغربية المناسبة.</p>
          </div>
          <a className="btn btn-gold" href={whatsappHref} target="_blank" rel="noreferrer">تواصل عبر واتساب ←</a>
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
      <a className="mobile-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">اطلب عبر واتساب</a>
    </main>
  );
}
