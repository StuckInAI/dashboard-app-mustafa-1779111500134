import styles from './ServicesSection.module.css';

const services = [
  {
    emoji: '🚗',
    name: 'Khaqan GO',
    desc: 'Affordable everyday rides for solo travelers. Fast, reliable, and budget-friendly.',
    badge: 'Most Popular',
    badgeColor: '#1dbf73',
    from: 'From PKR 250',
  },
  {
    emoji: '🚙',
    name: 'Khaqan XL',
    desc: 'Spacious SUVs for groups of up to 6. Perfect for families and airport trips.',
    badge: null,
    from: 'From PKR 400',
  },
  {
    emoji: '⭐',
    name: 'Khaqan Premium',
    desc: 'Luxury sedans with top-rated, professional drivers for a premium experience.',
    badge: 'Executive',
    badgeColor: '#d97706',
    from: 'From PKR 650',
  },
  {
    emoji: '🏍️',
    name: 'Khaqan Bike',
    desc: 'Beat the traffic with our fast and affordable motorcycle service.',
    badge: 'Fastest',
    badgeColor: '#3b82f6',
    from: 'From PKR 120',
  },
  {
    emoji: '📦',
    name: 'Khaqan Parcel',
    desc: 'Send packages across the city within hours. Reliable same-day delivery.',
    badge: null,
    from: 'From PKR 180',
  },
  {
    emoji: '🏢',
    name: 'Khaqan Business',
    desc: 'Corporate ride management with monthly billing and detailed reporting.',
    badge: 'B2B',
    badgeColor: '#7c3aed',
    from: 'Custom Pricing',
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Our Services</span>
          <h2 className={styles.title}>
            A ride for <span className={styles.green}>every need</span>
          </h2>
          <p className={styles.sub}>
            From daily commutes to corporate travel, Khaqan has the perfect
            option for every journey.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s) => (
            <div key={s.name} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.serviceEmoji}>{s.emoji}</span>
                {s.badge && (
                  <span
                    className={styles.serviceBadge}
                    style={{ background: (s.badgeColor || '#1dbf73') + '20', color: s.badgeColor || '#1dbf73' }}
                  >
                    {s.badge}
                  </span>
                )}
              </div>
              <h3 className={styles.serviceName}>{s.name}</h3>
              <p className={styles.serviceDesc}>{s.desc}</p>
              <div className={styles.serviceFooter}>
                <span className={styles.price}>{s.from}</span>
                <a href="#download" className={styles.bookBtn}>Book Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
