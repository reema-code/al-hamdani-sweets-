export const productLibrary = {
  chebakia: { name: 'الشباكية المغربية', desc: 'بالعسل والسمسم', price: 'من 65 د.إ', image: '/images/product-chebakia.png' },
  tea: { name: 'شاي مغربي 4011', desc: 'لجلسة أتاي أصيلة', price: 'من 28 د.إ', image: '/images/product-tea.png' },
  saffron: { name: 'زعفران تاليوين', desc: 'خيوط أصيلة مختارة', price: 'من 45 د.إ', image: '/images/product-saffron.png' },
  tajine: { name: 'طاجين فاسي', desc: 'مزخرف يدوياً', price: 'من 120 د.إ', image: '/images/product-tajine.png' },
  glasses: { name: 'كؤوس الشاي', desc: 'طقم بنقش ذهبي', price: 'من 85 د.إ', image: '/images/product-glasses.png' },
  soap: { name: 'الصابون البلدي', desc: 'أسود طبيعي بالأوكاليبتوس', price: 'من 38 د.إ', image: '/images/product-soap.png' },
  argan: { name: 'زيت الأركان', desc: 'أصلي من المغرب', price: 'من 55 د.إ', image: '/images/product-argan.png' },
  teapot: { name: 'براد شاي نحاسي', desc: 'مطروق يدوياً', price: 'من 95 د.إ', image: '/images/product-teapot.png' }
};

export const productsByCategory = {
  sweets: ['chebakia', 'tea', 'saffron'],
  pantry: ['argan', 'saffron', 'tea'],
  tea: ['tea', 'saffron', 'glasses'],
  kitchen: ['tajine', 'glasses', 'teapot'],
  home: ['soap', 'argan', 'teapot'],
  ramadan: ['chebakia', 'tajine', 'soap']
};

export const products = Object.values(productLibrary);
