import styles from './ServicesSection.module.css';

const services = [
  {
    emoji: '🚗',
    name: 'Khaqan GO',
    desc: 'Affordable everyday rides. AC comfort, verified driver, door-to-door.',
    price: 'From PKR 150',
    tag: 'Most Popular',
    tagColor: '#1dbf73',
  },
  {
    emoji: '🏎️',
    name: 'Khaqan Premium',
    desc: 'Luxury vehicles with top-rated drivers for special occasions or business travel.',
    price: 'From PKR 350',
    tag: 'Premium',
    tagColor: '#7c3aed',
  },
  {
    emoji: '🛵',
    name: 'Khaqan Bike',
    desc: 'Beat the traffic on a motorbike. Perfect for solo riders in busy city centers.',
    price: 'From PKR 80',
    tag: 'Fastest',
    tagColor: '#f59e0b',
  },
  {
    emoji: '🚐',
    name: 'Khaqan Cargo',
    desc: 'Move packages, furniture, or business goods with our reliable cargo vehicles.',
    price: 'From PKR 500',
    tag: 'Cargo',
    tagColor: '#0ea5e9',
  },
  {
    emoji: '👨\u200d👩\u200d👧',
    name: 'Khaqan Family',
    desc: 'Spacious 7-seater vehicles for family trips, airport runs, and group outings.',
    price: 'From PKR 450',
    tag: 'Family',
    tagColor: '#ec4899',
  },
  {
    emoji: '📦',
    name: 'Khaqan Parcel',
    desc: 'Send documents and parcels across the city. Fast, reliable, and tracked.',
    price: 'From PKR 120',
    tag: 'Delivery',
    tagColor: '#10b981',
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Our Services</span>
          <h2 className={styles.title}>
            A ride for every need
          </h2>
          <p className={styles.sub}>
            From budget bikes to luxury sedans — Khaqan has the perfect vehicle
            for every journey and every budget.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((svc) => (
            <div key={svc.name} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.emoji}>{svc.emoji}</span>
                <span
                  className={styles.tag}
                  style={{ background: svc.tagColor + '1a', color: svc.tagColor }}
                >
                  {svc.tag}
                </span>
              </div>
              <h3 className={styles.cardName}>{svc.name}</h3>
              <p className={styles.cardDesc}>{svc.desc}</p>
              <div className={styles.cardFooter}>
                <span className={styles.price}>{svc.price}</span>
                <a href="#download" className={styles.bookBtn}>Book Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
