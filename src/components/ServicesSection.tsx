import { Car, Bike, Package, Truck, ArrowRight } from 'lucide-react';
import styles from './ServicesSection.module.css';

const services = [
  {
    icon: Car,
    name: 'Khaqan GO',
    desc: 'Affordable everyday rides in comfortable sedans. Perfect for daily commutes.',
    price: 'From PKR 200',
    color: '#1dbf73',
    bg: '#e8f8f0',
  },
  {
    icon: Bike,
    name: 'Khaqan Bike',
    desc: 'Beat the traffic with our fast and economical bike rides across the city.',
    price: 'From PKR 80',
    color: '#3b82f6',
    bg: '#eff6ff',
  },
  {
    icon: Package,
    name: 'Khaqan Parcel',
    desc: 'Send packages and documents across the city with same-day delivery.',
    price: 'From PKR 150',
    color: '#f59e0b',
    bg: '#fffbeb',
  },
  {
    icon: Truck,
    name: 'Khaqan Cargo',
    desc: 'Move large items and furniture with our fleet of cargo vehicles.',
    price: 'From PKR 800',
    color: '#8b5cf6',
    bg: '#f5f3ff',
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Our Services</span>
          <h2 className={styles.title}>
            Everything you need,{' '}
            <span className={styles.green}>one app</span>
          </h2>
          <p className={styles.sub}>
            From quick bike rides to cargo deliveries — Khaqan has a solution for every journey.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.name} className={styles.card}>
              <div
                className={styles.iconWrap}
                style={{ background: service.bg }}
              >
                <service.icon size={26} style={{ color: service.color }} />
              </div>
              <h3 className={styles.cardTitle}>{service.name}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
              <div className={styles.cardFooter}>
                <span className={styles.price}>{service.price}</span>
                <span className={styles.learnMore}>
                  Learn more <ArrowRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
