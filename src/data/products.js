const contact = '#contact';

export const productGroups = [
  {
    id: 'sweets', title: 'حلويات ومخبوزات مغربية',
    intro: 'نكهات مغربية محبوبة تُقدَّم مع الشاي وفي المناسبات.',
    items: [
      { name: 'الشباكية', desc: 'حلوى مغربية تقليدية مزيّنة بالسمسم.', image: '/images/product-chebakia.png', href: contact }
    ]
  },
  {
    id: 'table', title: 'للمائدة المغربية',
    intro: 'قطع تقليدية تجمع التقديم الأنيق ودفء الضيافة المغربية.',
    items: [
      { name: 'طاجين تقديم فاسي', desc: 'طاجين خزفي مزخرف للتقديم على المائدة.', image: '/images/product-tajine.png', href: contact },
      { name: 'برّاد شاي نحاسي', desc: 'برّاد مغربي بنقوش تقليدية لتحضير الشاي وتقديمه.', image: '/images/product-teapot.png', href: contact },
      { name: 'كؤوس الشاي المغربي', desc: 'طقم كؤوس مزخرفة لمائدة الشاي المغربية.', image: '/images/product-glasses.png', href: contact }
    ]
  },
  {
    id: 'pantry', title: 'من خيرات المغرب',
    intro: 'أساسيات مختارة من خزانة المطبخ المغربي.',
    items: [
      { name: 'شاي أخضر مغربي 4011', desc: 'الشاي الأخضر المستخدم في تحضير أتاي المغربي.', image: '/images/product-tea.png', href: contact },
      { name: 'زعفران تاليوين', desc: 'خيوط زعفران من منطقة تاليوين المغربية.', image: '/images/product-saffron.png', href: contact }
    ]
  },
  {
    id: 'hammam-products', title: 'طقوس الحمّام المغربي',
    intro: 'عناية مغربية أصيلة لروتين الحمّام في المنزل.',
    items: [
      { name: 'الصابون البلدي', desc: 'الصابون الأسود، خطوة أساسية في طقس الحمّام المغربي.', image: '/images/product-soap.png', href: contact },
      { name: 'زيت الأركان', desc: 'زيت أركان مغربي للعناية بالبشرة والشعر.', image: '/images/product-argan.png', href: contact }
    ]
  }
];
