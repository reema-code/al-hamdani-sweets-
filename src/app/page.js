import Logo from '@/components/Logo';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const mapsHref = 'https://www.google.com/maps/search/?api=1&query=%D8%A7%D9%84%D8%AD%D9%85%D8%AF%D8%A7%D9%86%D9%8A+%D9%84%D9%84%D8%AD%D9%84%D9%88%D9%8A%D8%A7%D8%AA+%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%D9%8A%D8%A9+%D8%AF%D8%A8%D9%8A';

export default function HomePage() {
  return (
    <main>
      <header className="topbar">
        <div className="shell header-row">
          <Logo />
          <a className="nav-cta" href="#contact">اطلب الآن</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-overlay" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">حلويات مغربية أصيلة في دبي</p>
            <h1>نكهات المغرب الأصيلة، أقرب إليك في دبي.</h1>
            <p className="lead">تشكيلة مختارة من الحلويات المغربية التقليدية للضيافة، رمضان، العيد، الأعراس والهدايا.</p>
            <div className="actions">
              <a className="btn btn-orange" href="#contact">اطلب عبر واتساب</a>
              <a className="btn btn-light" href={mapsHref} target="_blank" rel="noreferrer">موقعنا على الخريطة</a>
            </div>
          </div>
          <div className="hero-card" aria-label="تشكيلة حلويات مغربية">
            <div className="arch arch-large"><span>كعب الغزال</span></div>
            <div className="mini-grid">
              <div className="arch"><span>الشباكية</span></div>
              <div className="arch"><span>الفقاص</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="shell trust-grid">
          {['حلويات مغربية أصيلة','مختارات للضيافة','طلبات المناسبات','متوفر في دبي'].map((item) => <span key={item}>✦ {item}</span>)}
        </div>
      </section>

      <section className="section cream">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow green">من المغرب إلى مائدتكم</p>
            <h2>حلويات تحمل روح المغرب</h2>
            <p>وصفات كلاسيكية بطابع أنيق، من اللوز والعسل إلى ماء الزهر والسمسم.</p>
          </div>
          <div className="products-grid">
            {products.map((item, index) => <ProductCard key={item.name} item={item} index={index} />)}
          </div>
        </div>
      </section>

      <section className="section story">
        <div className="shell split">
          <div>
            <p className="eyebrow gold">حلاوة المغرب كما نعرفها</p>
            <h2>تفاصيل صغيرة، ضيافة كبيرة.</h2>
            <p>الحلويات المغربية ليست مجرد حلوى، بل جزء من طقوس الشاي واللمة والاحتفال. صممنا هذه الصفحة لتقود الزائر بسرعة إلى الطلب أو الزيارة.</p>
            <a className="text-link light" href="#contact">تواصل معنا الآن ←</a>
          </div>
          <div className="story-pattern" aria-hidden="true"><span>✦</span><span>✦</span><span>✦</span></div>
        </div>
      </section>

      <section className="section cream">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow green">للمناسبات والهدايا</p>
            <h2>تشكيلات تناسب كل مناسبة</h2>
          </div>
          <div className="occasion-grid">
            {['رمضان','العيد','الأعراس','الضيافة','هدايا الشركات','المناسبات الخاصة'].map((item) => <div className="occasion-card" key={item}>{item}</div>)}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="shell contact-card">
          <div>
            <p className="eyebrow gold">الحمداني للحلويات المغربية</p>
            <h2>جاهز لتذوق النكهة المغربية الأصيلة؟</h2>
            <p>للطلبات والاستفسارات والمناسبات، تواصل معنا مباشرة أو افتح موقعنا على Google Maps.</p>
          </div>
          <div className="contact-actions">
            <a className="btn btn-orange" href={mapsHref} target="_blank" rel="noreferrer">افتح الموقع على Google Maps</a>
            <a className="btn btn-light" href="#">واتساب — أضف الرقم عند توفره</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-row">
          <Logo />
          <p>دبي، الإمارات العربية المتحدة</p>
        </div>
      </footer>

      <a className="mobile-whatsapp" href="#contact">اطلب عبر واتساب</a>
    </main>
  );
}
