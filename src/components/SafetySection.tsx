import { Shield, Eye, Phone, MapPin, Star, Lock } from 'lucide-react';
import styles from './SafetySection.module.css';

const features = [
  {
    icon: Shield,
    title: 'Driver Background Checks',
    desc: 'Every driver undergoes rigorous criminal background verification before joining our platform.',
  },
  {
    icon: Eye,
    title: 'Real-Time Trip Monitoring',
    desc: 'Our safety team monitors every ride 24/7. Any deviation from route triggers an instant alert.',
  },
  {
    icon: Phone,
    title: 'Emergency SOS Button',
    desc: 'One tap connects you to emergency services and shares your live location with trusted contacts.',
  },
  {
    icon: MapPin,
    title: 'Share Your Trip',
    desc: 'Share live trip tracking with family and friends so they always know where you are.',
  },
  {
    icon: Star,
    title: 'Two-Way Ratings',
    desc: 'Both riders and drivers rate each trip. Low-rated users are removed from the platform.',
  },
  {
    icon: Lock,
    title: 'Masked Phone Numbers',
    desc: 'Your personal number is never shared. All calls go through our encrypted relay system.',
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
            We&apos;ve built multiple layers of protection into every single ride,
            so you can travel with complete peace of mind.
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
