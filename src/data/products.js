export const productGroups = [
  {
    id: 'sweets',
    eyebrow: 'البداية الحلوة',
    title: 'حلويات ومخبوزات مغربية',
    desc: 'ثلاث مختارات من الحلوى والضيافة المغربية تفتتح مجموعتنا.',
    products: [
      {
        name: 'الشباكية المغربية',
        desc: 'بالعسل والسمسم',
        price: 'من 65 د.إ',
        image: '/images/product-chebakia.png'
      },
      {
        name: 'تشكيلة حلويات مغربية',
        desc: 'غريبة وحلوى اللوز والشباكية',
        price: 'السعر حسب التشكيلة',
        image: '/images/category-sweets.jpg',
        position: 'center 64%'
      },
      {
        name: 'تشكيلة المناسبات',
        desc: 'حلويات ومخبوزات للّمة المغربية',
        price: 'السعر حسب التشكيلة',
        image: '/images/category-ramadan.jpg',
        position: 'center 68%'
      }
    ]
  },
  {
    id: 'tea-spices',
    eyebrow: 'من رفوف العطّار',
    title: 'الشاي والتوابل',
    desc: 'أساسيات أصيلة لجلسة أتاي ونكهة المطبخ المغربي.',
    products: [
      { name: 'شاي مغربي 4011', desc: 'لجلسة أتاي أصيلة', price: 'من 28 د.إ', image: '/images/product-tea.png' },
      { name: 'زعفران تاليوين', desc: 'خيوط أصيلة مختارة', price: 'من 45 د.إ', image: '/images/product-saffron.png' }
    ]
  },
  {
    id: 'kitchen',
    eyebrow: 'للمائدة المغربية',
    title: 'الطواجن وأدوات الشاي',
    desc: 'قطع تقليدية للتقديم وتحضير جلسة ضيافة متكاملة.',
    products: [
      { name: 'طاجين فاسي', desc: 'مزخرف يدوياً', price: 'من 120 د.إ', image: '/images/product-tajine.png' },
      { name: 'كؤوس الشاي', desc: 'طقم بنقش ذهبي', price: 'من 85 د.إ', image: '/images/product-glasses.png' },
      { name: 'براد شاي نحاسي', desc: 'مطروق بالطريقة التقليدية', price: 'السعر عبر واتساب', image: '/images/product-teapot.png' }
    ]
  },
  {
    id: 'hammam',
    eyebrow: 'طقوس العناية',
    title: 'الحمّام والجمال',
    desc: 'مختارات مغربية للعناية اليومية من مكوّنات معروفة.',
    products: [
      { name: 'زيت الأركان', desc: 'أصلي من المغرب', price: 'من 55 د.إ', image: '/images/product-argan.png' },
      { name: 'الصابون البلدي', desc: 'بزيت الأوكاليبتوس', price: 'السعر عبر واتساب', image: '/images/product-soap.png' }
    ]
  }
];

export const products = productGroups.flatMap((group) => group.products);
