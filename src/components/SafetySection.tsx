import { Shield, Eye, Phone, MapPin, Star, Lock } from 'lucide-react';
import styles from './SafetySection.module.css';

const safetyFeatures = [
  {
    icon: Shield,
    title: 'Driver Verification',
    desc: 'Every driver undergoes rigorous background checks, CNIC verification, and vehicle inspection before joining Khaqan.',
  },
  {
    icon: Eye,
    title: 'Real-time Tracking',
    desc: 'Share your live trip with family and friends. Track every second of your journey on the map.',
  },
  {
    icon: Phone,
    title: '24/7 Support',
    desc: 'Our safety team is available around the clock. One tap to reach emergency services directly from the app.',
  },
  {
    icon: MapPin,
    title: 'Safe Zones',
    desc: 'Designated pickup and drop-off points in high-traffic areas for added safety and convenience.',
  },
  {
    icon: Star,
    title: 'Rating System',
    desc: 'Two-way ratings keep our community accountable. Drivers with low ratings are removed from the platform.',
  },
  {
    icon: Lock,
    title: 'Secure Payments',
    desc: 'All in-app transactions are encrypted and secure. Your financial data is never shared with drivers.',
  },
];

export default function SafetySection() {
  return (
    <section className={styles.section} id="safety">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Safety First</span>
          <h2 className={styles.title}>
            Your safety is our{' '}
            <span className={styles.green}>top priority</span>
          </h2>
          <p className={styles.sub}>
            We&apos;ve built multiple layers of safety features so you can ride with complete confidence.
          </p>
        </div>

        <div className={styles.grid}>
          {safetyFeatures.map((feature) => (
            <div key={feature.title} className={styles.card}>
              <div className={styles.iconWrap}>
                <feature.icon size={22} className={styles.icon} />
              </div>
              <div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
