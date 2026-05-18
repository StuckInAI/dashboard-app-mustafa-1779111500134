import { Car, Bike, Package, ShoppingBag, Truck, Star } from 'lucide-react';
import styles from './ServicesSection.module.css';

const services = [
  {
    icon: Car,
    emoji: '🚗',
    name: 'Khaqan GO',
    desc: 'Affordable everyday rides for solo travelers. Fast, safe, and budget-friendly.',
    price: 'From PKR 280',
    tag: 'Most Popular',
    tagColor: '#1dbf73',
    color: '#e8f8f0',
  },
  {
    icon: Car,
    emoji: '🚙',
    name: 'Khaqan Business',
    desc: 'Premium rides in AC cars for business travelers, professionals, and comfort lovers.',
    price: 'From PKR 450',
    tag: 'Premium',
    tagColor: '#3b82f6',
    color: '#eff6ff',
  },
  {
    icon: Bike,
    emoji: '🏍️',
    name: 'Khaqan Bike',
    desc: 'Beat the traffic on a motorbike. Perfect for short trips in busy city streets.',
    price: 'From PKR 120',
    tag: 'Fastest',
    tagColor: '#f59e0b',
    color: '#fffbeb',
  },
  {
    icon: Package,
    emoji: '📦',
    name: 'Khaqan Parcel',
    desc: 'Send packages and documents across the city in under an hour. Tracked delivery.',
    price: 'From PKR 200',
    tag: 'Delivery',
    tagColor: '#8b5cf6',
    color: '#f5f3ff',
  },
  {
    icon: ShoppingBag,
    emoji: '🛒',
    name: 'Khaqan Groceries',
    desc: 'Get fresh groceries and daily essentials delivered straight to your door.',
    price: 'Free delivery over PKR 1000',
    tag: 'New',
    tagColor: '#ef4444',
    color: '#fef2f2',
  },
  {
    icon: Truck,
    emoji: '🚛',
    name: 'Khaqan Cargo',
    desc: 'Move furniture, appliances, and heavy goods with our cargo vehicle fleet.',
    price: 'From PKR 800',
    tag: 'Heavy Load',
    tagColor: '#64748b',
    color: '#f8fafc',
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Our Services</span>
          <h2 className={styles.sectionTitle}>Everything you need,
            <span className={styles.green}> in one app</span>
          </h2>
          <p className={styles.sectionSubtext}>
            Khaqan offers a complete suite of mobility and delivery services across Pakistan.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((svc) => (
            <div key={svc.name} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.iconBox} style={{ background: svc.color }}>
                  <span className={styles.emoji}>{svc.emoji}</span>
                </div>
                <span className={styles.tag} style={{ background: svc.tagColor + '18', color: svc.tagColor }}>
                  {svc.tag}
                </span>
              </div>
              <h3 className={styles.cardTitle}>{svc.name}</h3>
              <p className={styles.cardDesc}>{svc.desc}</p>
              <p className={styles.cardPrice}>{svc.price}</p>
              <a href="#download" className={styles.cardCta}>Book Now →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
