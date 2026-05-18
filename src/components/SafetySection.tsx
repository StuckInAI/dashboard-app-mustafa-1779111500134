import { Shield, Eye, Phone, MapPin, Star, Lock } from 'lucide-react';
import styles from './SafetySection.module.css';

const features = [
  {
    icon: Shield,
    title: 'Driver Background Checks',
    desc: 'Every driver undergoes thorough criminal background checks and identity verification before joining.',
  },
  {
    icon: Eye,
    title: 'Real-Time Trip Tracking',
    desc: 'Share your live trip location with family and friends. Know exactly where you are at all times.',
  },
  {
    icon: Phone,
    title: 'SOS Emergency Button',
    desc: 'One-tap SOS button connects you instantly to emergency services and our 24/7 safety team.',
  },
  {
    icon: MapPin,
    title: 'Safe Pickup & Drop',
    desc: 'Designated safe zones at major locations. Drivers are rated and reviewed after every trip.',
  },
  {
    icon: Star,
    title: 'Two-Way Rating System',
    desc: 'Riders and drivers rate each other after every trip, ensuring mutual accountability and respect.',
  },
  {
    icon: Lock,
    title: 'Secure Payments',
    desc: 'All transactions are encrypted. Pay cashlessly with confidence through our secure payment system.',
  },
];

export default function SafetySection() {
  return (
    <section className={styles.section} id="safety">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Safety First</span>
          <h2 className={styles.title}>
            Your safety is our
            <br /><span className={styles.green}>top priority</span>
          </h2>
          <p className={styles.sub}>
            We&apos;ve built multiple layers of safety features to ensure every
            Khaqan ride is secure, transparent, and trustworthy.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.iconWrap}>
                <f.icon size={22} className={styles.icon} />
              </div>
              <div>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardDesc}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
