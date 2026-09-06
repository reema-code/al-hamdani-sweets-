import Header from '../components/Header';
import Logo from '../components/Logo';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { productGroups } from '../data/products';
import { categories } from '../data/categories';

const mapsHref = 'https://www.google.com/maps/search/?api=1&query=%D8%A7%D9%84%D8%AD%D9%85%D8%AF%D8%A7%D9%86%D9%8A+%D9%84%D9%84%D8%AD%D9%84%D9%88%D9%8A%D8%A7%D8%AA+%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%D9%8A%D8%A9+%D8%AF%D8%A8%D9%8A';

export default function HomePage() {
  return (
    <main id="top">
      <Header whatsappHref="#contact" />

      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-background" src="/images/hero-souk.jpg" alt="منتجات مغربية متنوعة في متجر تقليدي" fetchPriority="high" />
        <div className="hero-overlay" />
        <div className="shell hero-content">
          <p className="eyebrow">EL HAMDANI · DUBAI</p>
          <h1 id="hero-title">روح المغرب، أقرب إليكم في دبي</h1>
          <p className="lead">من الحلويات والخبز المغربي إلى الشاي والتوابل، ومن الطواجن وأطقم الشاي إلى مستلزمات الحمّام المغربي — اكتشفوا اختيارات الحمداني للمائدة والبيت والعناية.</p>
          <div className="actions">
            <a className="btn btn-orange" href="#products">تسوّقوا المنتجات</a>
            <a className="btn btn-light" href="#collections">اكتشفوا مجموعاتنا</a>
          </div>
        </div>
      </section>

      <nav id="collections" className="collection-nav" aria-label="مجموعات المنتجات">
        <div className="shell collection-nav-inner">
          {categories.map((category) => <a key={category.name} href={category.href}>{category.name}</a>)}
          <a href="#hammam-products">الجمال والحمّام</a>
        </div>
      </nav>

      <section className="section collections-section">
        <div className="shell">
          <div className="section-head"><p className="eyebrow green">تسوّقوا حسب المجموعة</p><h2>المغرب، بتفاصيله كلّها</h2><p>اختيارات للمائدة والمطبخ والعناية، إلى جانب الحلويات والمواد الغذائية المغربية.</p></div>
          <div className="category-grid">{categories.map((item) => <CategoryCard key={item.name} item={item} />)}</div>
        </div>
      </section>

      <div id="products" className="product-showcase">
        {productGroups.map((group, index) => (
          <section id={group.id} className={`section product-section ${index % 2 ? 'tinted' : ''}`} key={group.id}>
            <div className="shell">
              <div className="product-section-head">
                <div><p className="eyebrow green">من متجر الحمداني</p><h2>{group.title}</h2><p>{group.intro}</p></div>
                <a className="collection-link" href="#collections">عرض المجموعة <span aria-hidden="true">←</span></a>
              </div>
              <div className="products-grid">{group.items.map((item) => <ProductCard key={item.name} item={item} />)}</div>
            </div>
          </section>
        ))}
      </div>

      <section id="other-collections" className="section editorial tea-editorial">
        <div className="shell split">
          <img className="split-photo" src="/images/section-tea.jpg" alt="برّاد وكؤوس لتقديم الشاي المغربي" loading="lazy" />
          <div><p className="eyebrow gold">الشاي والضيافة</p><h2>جلسة أتاي بروح مغربية</h2><p>اختاروا الشاي والبرّاد والكؤوس المزخرفة لتكتمل جلسة الضيافة المغربية في بيتكم.</p><a className="text-link" href="#table">شاهدوا مختارات المائدة ←</a></div>
        </div>
      </section>

      <section className="section editorial hammam-editorial">
        <div className="shell split reverse">
          <img className="split-photo" src="/images/section-hammam.jpg" alt="فضاء حمّام مغربي تقليدي" loading="lazy" />
          <div><p className="eyebrow gold">العناية المغربية</p><h2>طقوس الحمّام في المنزل</h2><p>ابدؤوا بالصابون البلدي، ثم أكملوا روتين العناية بزيت الأركان المغربي.</p><a className="text-link light" href="#hammam-products">شاهدوا منتجات الحمّام ←</a></div>
        </div>
      </section>

      <section id="contact" className="section delivery-section">
        <div className="shell delivery-card">
          <div><p className="eyebrow gold">التوصيل</p><h2>متاح داخل دبي</h2><p>للاستفسار عن المنتجات المتاحة وأسعارها ورسوم التوصيل، تواصلوا مع المتجر مباشرة أو اعثروا علينا على الخريطة.</p></div>
          <a className="btn btn-orange" href={mapsHref} target="_blank" rel="noreferrer">موقعنا على الخريطة</a>
        </div>
      </section>

      <footer>
        <div className="shell newsletter-row">
          <div><p className="eyebrow gold">ابقوا على تواصل</p><h2>تابعوا جديد الحمداني</h2><p>تواصلوا مع المتجر لمعرفة المنتجات الجديدة وتوفّرها.</p></div>
          <a className="btn btn-orange" href={mapsHref} target="_blank" rel="noreferrer">اعثروا علينا</a>
        </div>
        <div className="shell footer-grid">
          <div className="footer-brand"><Logo footer /><p>دبي، الإمارات العربية المتحدة</p></div>
          <div className="footer-col"><h4>المتجر</h4><a href="#collections">المجموعات</a><a href="#sweets">الحلويات والمخبوزات</a><a href="#table">المائدة المغربية</a><a href="#pantry">خيرات المغرب</a></div>
          <div className="footer-col"><h4>العناية والزيارة</h4><a href="#hammam-products">الحمّام المغربي</a><a href="#contact">معلومات التوصيل</a><a href={mapsHref} target="_blank" rel="noreferrer">الموقع على الخريطة</a></div>
        </div>
        <div className="shell footer-bottom">© {new Date().getFullYear()} EL HAMDANI · الحمداني</div>
      </footer>
    </main>
  );
}
