import styles from './ServicesSection.module.css';

const services = [
  {
    emoji: '🚗',
    name: 'Khaqan GO',
    desc: 'Affordable everyday rides. Book a comfortable sedan for your daily commute.',
    price: 'From PKR 200',
    tag: 'Most Popular',
  },
  {
    emoji: '🛵',
    name: 'Khaqan Bike',
    desc: 'Beat the traffic on two wheels. Fast, cheap, and always available.',
    price: 'From PKR 80',
    tag: 'Fastest',
  },
  {
    emoji: '🚙',
    name: 'Khaqan Prime',
    desc: 'Premium SUVs and luxury sedans for business or special occasions.',
    price: 'From PKR 450',
    tag: 'Premium',
  },
  {
    emoji: '📦',
    name: 'Khaqan Parcel',
    desc: 'Same-day delivery for packages across the city. Reliable and trackable.',
    price: 'From PKR 150',
    tag: 'Delivery',
  },
  {
    emoji: '🏢',
    name: 'Khaqan Business',
    desc: 'Corporate accounts, bulk rides, and invoicing for your entire team.',
    price: 'Custom Plans',
    tag: 'Corporate',
  },
  {
    emoji: '🚐',
    name: 'Khaqan Cargo',
    desc: 'Move heavy goods and furniture with our cargo van service across the city.',
    price: 'From PKR 800',
    tag: 'Heavy Load',
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
            From quick bike rides to luxury cars, Khaqan has a ride for every budget and occasion.
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
