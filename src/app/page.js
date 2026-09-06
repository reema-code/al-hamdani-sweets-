import Image from 'next/image';
import Header from '../components/Header';
import Logo from '../components/Logo';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { testimonials } from '../data/testimonials';

const mapsHref = 'https://www.google.com/maps/search/?api=1&query=%D8%A7%D9%84%D8%AD%D9%85%D8%AF%D8%A7%D9%86%D9%8A+%D9%84%D9%84%D8%AD%D9%84%D9%88%D9%8A%D8%A7%D8%AA+%D8%AF%D8%A8%D9%8A';
const whatsappHref = '#contact';
const trustItems = [
  ['تُحضّر طازجة', 'نهتم بكل دفعة كما لو كانت لبيتنا'],
  ['مكوّنات مختارة', 'جودة تُذاق من أول لقمة'],
  ['وصفات أصيلة', 'نكهات تحفظ ذاكرة الضيافة'],
  ['توصيل داخل الإمارات', 'طلباتكم تصل بعناية']
];

export default function HomePage() {
  return (
    <main>
      <Header whatsappHref={whatsappHref} />

      <section className="hero">
        <div className="hero-media">
          <Image src="/images/category-sweets.jpg" alt="تشكيلة فاخرة من الحلويات المغربية" fill priority sizes="100vw" />
        </div>
        <div className="hero-shade" />
        <div className="shell hero-content">
          <p className="eyebrow">صناعة مغربية · ضيافة إماراتية</p>
          <h1>حلويات تُحضّر بحب،<br />وتُقدّم بكرم</h1>
          <p>مذاقات مغربية أصيلة، مختارة لترافق أجمل لَمّاتكم ومناسباتكم في دبي.</p>
          <div className="actions">
            <a className="btn btn-gold" href={whatsappHref}>اطلب عبر واتساب</a>
            <a className="btn btn-ghost" href="#products">اكتشف مختاراتنا</a>
          </div>
        </div>
        <div className="hero-signature">A tradition worth sharing</div>
      </section>

      <section className="trust-strip" aria-label="لماذا الحمداني">
        <div className="shell trust-grid">{trustItems.map(([title, text], index) => <div key={title}><span>0{index + 1}</span><strong>{title}</strong><small>{text}</small></div>)}</div>
      </section>

      <section id="products" className="section signature-section">
        <div className="shell">
          <div className="section-head section-head-row"><div><p className="eyebrow">من واجهة الحمداني</p><h2>مختارات الحمداني</h2></div><p>قطع مختارة بعناية، للضيافة اليومية<br />ولكل مناسبة تستحق طعماً لا يُنسى.</p></div>
          <div className="products-grid">{products.map((item) => <ProductCard key={item.name} item={item} />)}</div>
        </div>
      </section>

      <section id="story" className="section story-section">
        <div className="shell editorial-grid">
          <div className="editorial-image"><Image src="/images/hero-kitchen.jpg" alt="مائدة مغربية تعبّر عن أصالة الضيافة" fill sizes="(max-width: 820px) 100vw, 55vw" /></div>
          <div className="editorial-copy"><p className="eyebrow">أصالة تتوارثها الأجيال</p><h2>حكاية من الطعم الأصيل</h2><p>نؤمن أن الحلوى ليست مجرد مذاق؛ إنها ترحيب، وذكرى، وتفصيل جميل يجمع الأحبة. لذلك نختار وصفاتنا ومكوّناتنا بروح الصنعة المغربية وكرم الضيافة العربية.</p><span className="story-mark">من المغرب، إلى مجالسكم</span></div>
        </div>
      </section>

      <section id="gifts" className="section gifts-section">
        <div className="shell gifts-card">
          <div className="gifts-image"><Image src="/images/category-ramadan.jpg" alt="ضيافة فاخرة للمناسبات واللّمات العائلية" fill sizes="(max-width: 820px) 100vw, 58vw" /></div>
          <div className="gifts-copy"><p className="eyebrow">صُنعت للإهداء</p><h2>هدايا لكل مناسبة</h2><p>تشكيلات أنيقة لرمضان والعيد، للّمة العائلية، ولهدايا الشركات. نساعدكم في اختيار ما يليق بالمناسبة وتنسيقه بعناية.</p><div className="occasion-list"><span>رمضان والعيد</span><span>المناسبات العائلية</span><span>هدايا الشركات</span></div><a className="text-link" href={whatsappHref}>اطلب تنسيق هديتك <span>←</span></a></div>
        </div>
      </section>

      <section id="collections" className="section collections-section">
        <div className="shell"><div className="section-head"><p className="eyebrow">أكثر من الحلوى</p><h2>من الدار المغربية</h2><p>نكهات، أدوات وطقوس تكمل تجربة الضيافة.</p></div><div className="category-grid">{categories.map((item) => <CategoryCard key={item.name} item={item} />)}</div></div>
      </section>

      <section className="section testimonials-section">
        <div className="shell testimonial-row"><div className="testimonial-title"><p className="eyebrow">قالوا عنّا</p><h2>ثقة نتشرّف بها</h2></div><div className="testimonial-grid">{testimonials.slice(0, 2).map((t) => <figure className="testimonial-card" key={t.name}><blockquote>“{t.text}”</blockquote><figcaption><strong>{t.name}</strong><span>{t.location}</span></figcaption></figure>)}</div></div>
      </section>

      <section id="contact" className="order-section">
        <div className="zellij-band" aria-hidden="true" />
        <div className="shell order-inner"><div><p className="eyebrow">نكهتكم المفضّلة أقرب</p><h2>اطلب حلوياتك المفضلة اليوم</h2><p>أرسل لنا طلبك، وسنساعدك في اختيار الكمية والتشكيلة المناسبة.</p></div><a className="btn btn-gold btn-large" href={whatsappHref}>تواصل عبر واتساب <span>←</span></a></div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <div className="footer-brand"><Logo light /><p>حلويات مغربية أصيلة، تُقدّم بكرم في قلب دبي.</p></div>
          <div className="footer-col"><h4>تواصل معنا</h4><a href={whatsappHref}>واتساب</a><a href={whatsappHref}>الهاتف · عبر واتساب</a><a href="#">إنستغرام</a></div>
          <div className="footer-col"><h4>زورونا</h4><a href={mapsHref} target="_blank" rel="noreferrer">دبي، الإمارات العربية المتحدة</a><p>ساعات العمل · تُحدّث عبر واتساب</p></div>
          <div className="footer-col"><h4>روابط سريعة</h4><a href="#products">مختاراتنا</a><a href="#story">حكايتنا</a><a href="#gifts">الهدايا والمناسبات</a></div>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} الحمداني للحلويات</span><span>Al Hamdani Sweets</span></div>
      </footer>
      <a className="mobile-whatsapp" href={whatsappHref}>اطلب عبر واتساب</a>
    </main>
  );
}
