import Header from '../components/Header';
import Logo from '../components/Logo';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { products } from '../data/products';
import { categories } from '../data/categories';

const whatsappHref = 'https://www.google.com/maps/search/?api=1&query=El+Hamdani+Moroccan+Confectionery+Dubai';

const trustItems = [
  { title: 'حلاوة اللمّة', desc: 'حلويات ومخبوزات مغربية' },
  { title: 'جلسة أتاي', desc: 'شاي وتوابل وكؤوس الضيافة' },
  { title: 'من دارنا لداركم', desc: 'طواجن وأواني للمائدة' },
  { title: 'وقت للعناية', desc: 'منتجات الحمّام المغربي' }
];
const productGroups = [
  { id: 'sweets', title: 'حلويات ومخبوزات مغربية', desc: 'حلاوة تليق بجلسة أتاي ولمّة الأحباب.', items: [products[1]] },
  { id: 'kitchen', title: 'للمائدة المغربية', desc: 'من الطاجين إلى برّاد أتاي، تفاصيل تجعل للضيافة طابعها.', items: [products[3], products[7], products[4]] },
  { id: 'pantry', title: 'من خيرات المغرب', desc: 'الشاي والزعفران، تفاصيل صغيرة في وصفاتنا وطقوسنا اليومية.', items: [products[0], products[2]] },
  { id: 'hammam', title: 'طقوس الحمّام المغربي', desc: 'لحظة هدوء وعناية على الطريقة المغربية.', items: [products[5], products[6]] }
];

const giftTags = ['رمضان والعيد', 'المناسبات العائلية', 'هدايا الشركات'];

export default function HomePage() {
  return (
    <main>
      <Header whatsappHref={whatsappHref} />

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">EL HAMDANI · DUBAI</p>
            <h1>حلاوة المغرب،<br />ودفء الضيافة.</h1>
            <p className="lead">من حلويات اللمّة إلى الشاي والتوابل، ومن أواني المائدة إلى طقوس الحمّام — اكتشفوا عالم الحمداني المغربي في دبي.</p>
            <div className="actions">
              <a className="btn btn-orange" href={whatsappHref}>زوروا متجرنا</a>
              <a className="btn btn-light" href="#products">اكتشفوا منتجاتنا</a>
            </div>
          </div>
          <div className="hero-photos hero-photos-single">
            <img className="hero-photo hero-photo-main" fetchPriority="high" width="1408" height="768" src="/images/category-sweets.jpg" alt="طبق من الشباكية والغريبة والسلو مع أدوات الشاي المغربي" />
            <span className="hero-caption">A tradition worth sharing</span>
          </div>
        </div>
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

      <section id="collections" className="section cream">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow green">أكثر من الحلوى</p>
            <h2>من الدار المغربية</h2>
            <p>نكهات، أدوات وطقوس تكمل تجربة الضيافة.</p>
          </div>
          <div className="category-grid">{categories.map((item) => <CategoryCard key={item.name} item={item} />)}</div>
        </div>
      </section>

      <section id="products" className="section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow green">من واجهة الحمداني</p>
            <h2>مختارات الحمداني</h2>
            <p>قطع مختارة بعناية، للضيافة اليومية ولكل مناسبة تستحق طعمًا لا يُنسى.</p>
          </div>
          <nav className="collection-tabs" aria-label="فئات المنتجات">{productGroups.map(group => <a key={group.id} href={'#' + group.id}>{group.title}</a>)}</nav>
          {productGroups.map((group, index) => <section className="product-group" id={group.id} key={group.id} aria-labelledby={group.id + '-title'}>
            <div className="group-heading"><div><span className="group-number">0{index + 1}</span><h3 id={group.id + '-title'}>{group.title}</h3><p>{group.desc}</p></div><a className="text-link" href={whatsappHref}>استفسروا في المتجر ←</a></div>
            <div className={'products-grid count-' + group.items.length}>{group.items.map(item => <ProductCard key={item.name} item={item} contactHref={whatsappHref} />)}</div>
          </section>)}
        </div>
      </section>

      <section className="heritage-strip">
        <span>أصالة تتوارثها الأجيال</span>
      </section>

      <section id="story" className="section split-section">
        <div className="shell split">
          <img className="split-photo" src="/images/hero-kitchen.jpg" alt="مائدة طواجن مغربية بالزيتون وماء الورد وكؤوس الشاي" />
          <div>
            <h2>أصالة المائدة المغربية</h2>
            <p>للطاجين مكانه في وسط المائدة، ولأتاي وقته بعد الأكل. اكتشفوا أواني التقديم وبرّادات الشاي والكؤوس التي تمنح جلساتكم دفء البيت المغربي.</p>
            <p className="story-caption">من المغرب، إلى مجالسكم</p>
          </div>
        </div>
      </section>

      <section id="gifts" className="section gift-section">
        <div className="shell split reverse">
          <img className="split-photo" src="/images/category-ramadan.jpg" alt="مائدة إفطار رمضانية مغربية بالتمور والشاي" />
          <div>
            <p className="eyebrow gold">البيت والضيافة</p>
            <h2>للّمة طعم مغربي</h2>
            <p>من تفاصيل المائدة إلى جلسات الأهل، تستحضر الضيافة المغربية الألوان الدافئة والشاي وروح الترحيب. تصفّحوا مختاراتنا لبيوتكم ومناسباتكم.</p>
            <div className="pill-row">{giftTags.map((tag) => <span className="pill" key={tag}>{tag}</span>)}</div>
            <a className="text-link light" href={whatsappHref}>زورونا لاكتشاف المزيد ←</a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-band">
        <div className="shell contact-band-row">
          <div>
            <p className="eyebrow gold">نكهتكم المفضّلة أقرب</p>
            <h2>المغرب أقرب إليكم</h2>
            <p>زوروا الحمداني في دبي للاستفسار عن الأسعار والتوفّر واختيار منتجاتكم المفضّلة.</p>
          </div>
          <a className="btn btn-gold" href={whatsappHref}>اعثروا علينا على الخريطة ←</a>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>حلويات، مائدة، وطقوس عناية. تفاصيل مغربية تجمعنا في دبي.</p>
          </div>
          <div className="footer-col">
            <h4>تواصل معنا</h4>
            <a href={whatsappHref}>موقع المتجر على الخريطة</a>


          </div>
          <div className="footer-col">
            <h4>زورونا</h4>
            <span className="footer-text">دبي، الإمارات العربية المتحدة</span>

          </div>
          <div className="footer-col">
            <h4>روابط سريعة</h4>
            <a href="#products">مختاراتنا</a>
            <a href="#story">حكايتنا</a>
            <a href="#gifts">الهدايا والمناسبات</a>
          </div>
        </div>
        <div className="shell footer-bottom">© {new Date().getFullYear()} الحمداني · EL HAMDANI</div>
      </footer>
      <a className="mobile-whatsapp" href={whatsappHref}>زوروا متجرنا</a>
    </main>
  );
}
