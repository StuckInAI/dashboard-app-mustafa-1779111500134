import styles from './ServicesSection.module.css';

const services = [
  {
    emoji: '🚗',
    name: 'Khaqan GO',
    desc: 'Affordable everyday rides. AC car, professional driver, lowest fares.',
    price: 'From PKR 280',
    tag: 'Most Popular',
    tagColor: '#1dbf73',
  },
  {
    emoji: '🚙',
    name: 'Khaqan XL',
    desc: 'Spacious SUV for groups and large luggage. Up to 6 passengers.',
    price: 'From PKR 420',
    tag: 'Group Rides',
    tagColor: '#3b82f6',
  },
  {
    emoji: '🏍️',
    name: 'Khaqan Bike',
    desc: 'Beat the traffic with our motorbike service. Fast, cheap, and convenient.',
    price: 'From PKR 80',
    tag: 'Fastest',
    tagColor: '#f59e0b',
  },
  {
    emoji: '📦',
    name: 'Khaqan Parcel',
    desc: 'Send packages across the city in hours. Real-time tracking included.',
    price: 'From PKR 150',
    tag: 'New',
    tagColor: '#8b5cf6',
  },
  {
    emoji: '🏢',
    name: 'Khaqan Business',
    desc: 'Corporate accounts with centralized billing, reporting and priority support.',
    price: 'Custom Plans',
    tag: 'Enterprise',
    tagColor: '#ef4444',
  },
  {
    emoji: '🚛',
    name: 'Khaqan Cargo',
    desc: 'Heavy goods transport for businesses. Pickup trucks and vans available.',
    price: 'From PKR 800',
    tag: 'Business',
    tagColor: '#0d1b2a',
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Our Services</span>
          <h2 className={styles.title}>
            Every ride, every need —{' '}
            <span className={styles.green}>covered</span>
          </h2>
          <p className={styles.sub}>
            From daily commutes to corporate travel, Khaqan has the perfect ride for every occasion.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((s) => (
            <div key={s.name} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.cardEmoji}>{s.emoji}</span>
                <span
                  className={styles.cardTag}
                  style={{ background: s.tagColor + '18', color: s.tagColor }}
                >
                  {s.tag}
                </span>
              </div>
              <h3 className={styles.cardName}>{s.name}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <div className={styles.cardFooter}>
                <span className={styles.cardPrice}>{s.price}</span>
                <span className={styles.cardArrow}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
