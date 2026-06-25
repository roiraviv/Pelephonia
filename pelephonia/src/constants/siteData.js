export const CONTACT = {
  phone: '04-1234567',
  phoneHref: 'tel:041234567',
  whatsapp: 'https://wa.me/972501234567',
  address: 'הרצל 29, חדרה',
  googleReviews: 'https://www.google.com/maps',
  hours: {
    weekdays: "א'-ה' 10:00-19:00",
    friday: "ו' 10:00-14:00",
  },
}

export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=1920&q=80',
  aboutVideo: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80',
  categories: {
    phones: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=600&q=80',
    service: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=600&q=80',
    computers: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
    accessories: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=600&q=80',
  },
}

export const NAV_LINKS = [
  { label: 'דף הבית', href: '#home' },
  { label: 'מכשירי סלולר', href: '#phones' },
  { label: 'אביזרים', href: '#accessories' },
  { label: 'קריאת שירות', href: '#service' },
  { label: 'אודות', href: '#about' },
  { label: 'צור קשר', href: '#contact' },
]

export const HERO_FEATURES = [
  { icon: 'cpu', title: 'שבבי ביצוע מתקדמים', subtitle: 'Advanced chips' },
  { icon: 'camera', title: 'מצלמה מעולה', subtitle: 'Excellent camera' },
  { icon: 'battery', title: 'סוללה חזקה', subtitle: 'Powerful battery' },
]

export const TRUST_BADGES = [
  { icon: 'shield-check', title: 'חלפים מקוריים', subtitle: 'Original parts' },
  { icon: 'wrench', title: 'טכנאים מומחים', subtitle: 'Expert technicians' },
  { icon: 'zap', title: 'תיקון מהיר', subtitle: 'Fast repair' },
  { icon: 'award', title: 'אחריות על כל תיקון', subtitle: 'Warranty' },
]

export const TESTIMONIALS = [
  {
    name: 'יוסי כהן',
    text: 'תיקנו לי מסך שבור תוך שעה. שירות מקצועי ואדיב, ממליץ בחום!',
    rating: 5,
  },
  {
    name: 'מיכל לוי',
    text: 'קניתי אייפון משומש במצב מעולה. המחיר הוגן והמכשיר עובד כמו חדש.',
    rating: 5,
  },
  {
    name: 'דוד אברהם',
    text: 'הטכנאים יודעים את העבודה. תיקנו לי בעיית טעינה שלא הצליחו לפתור במקום אחר.',
    rating: 5,
  },
  {
    name: 'שרה גולדשטיין',
    text: 'מעבדה מקצועית עם ציוד מתקדם. קיבלתי אחריות מלאה על התיקון.',
    rating: 5,
  },
]

export const CATEGORIES = [
  {
    id: 'phones',
    title: 'מכשירי סלולר',
    image: IMAGES.categories.phones,
    href: '#phones',
    buttonText: 'לצפייה במוצרים',
  },
  {
    id: 'service',
    title: 'קריאת שירות',
    image: IMAGES.categories.service,
    href: '#service',
    buttonText: 'פתחו קריאה',
  },
  {
    id: 'computers',
    title: 'מחשבים',
    image: IMAGES.categories.computers,
    href: '#computers',
    buttonText: 'לצפייה במוצרים',
  },
  {
    id: 'accessories',
    title: 'אביזרים',
    image: IMAGES.categories.accessories,
    href: '#accessories',
    buttonText: 'לצפייה במוצרים',
  },
]
