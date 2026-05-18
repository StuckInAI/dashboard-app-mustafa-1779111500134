import styles from './ServicesSection.module.css';

const services = [
  {
    emoji: '🚗',
    name: 'Khaqan GO',
    desc: 'Affordable everyday rides. Fast pickup, comfortable cars.',
    price: 'From PKR 200',
    tag: 'Most Popular',
  },
  {
    emoji: '🏎️',
    name: 'Khaqan Prime',
    desc: 'Premium sedans and SUVs for a first-class experience.',
    price: 'From PKR 450',
    tag: 'Premium',
  },
  {
    emoji: '🛵',
    name: 'Khaqan Bike',
    desc: 'Beat the traffic with quick, affordable bike rides.',
    price: 'From PKR 80',
    tag: 'Fastest',
  },
  {
    emoji: '📦',
    name: 'Khaqan Parcel',
    desc: 'Same-day parcel delivery across the city.',
    price: 'From PKR 150',
    tag: 'Delivery',
  },
  {
    emoji: '🚌',
    name: 'Khaqan Share',
    desc: 'Share rides with others heading your way. Save more.',
    price: 'From PKR 120',
    tag: 'Eco-Friendly',
  },
  {
    emoji: '🚛',
    name: 'Khaqan Cargo',
    desc: 'Move heavy items and goods with our cargo vehicles.',
    price: 'From PKR 800',
    tag: 'Heavy Loads',
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Our Services</span>
          <h2 className={styles.title}>
            Every ride, every need —
            <br /><span className={styles.green}>we&apos;ve got you covered</span>
          </h2>
          <p className={styles.sub}>
            From daily commutes to cargo deliveries, Khaqan offers a full suite
            of mobility solutions built for Pakistan.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s) => (
            <div key={s.name} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.emoji}>{s.emoji}</span>
                <span className={styles.tag}>{s.tag}</span>
              </div>
              <h3 className={styles.cardName}>{s.name}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <div className={styles.cardFooter}>
                <span className={styles.price}>{s.price}</span>
                <a href="#download" className={styles.bookBtn}>Book Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
