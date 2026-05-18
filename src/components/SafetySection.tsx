import { Shield, Eye, Phone, MapPin, Star, Lock } from 'lucide-react';
import styles from './SafetySection.module.css';

const safetyFeatures = [
  {
    icon: Shield,
    title: 'Verified Drivers',
    desc: 'Every driver undergoes background checks, license verification, and vehicle inspection before joining Khaqan.',
  },
  {
    icon: Eye,
    title: 'Live Trip Tracking',
    desc: 'Share your trip details with family and friends. Track your ride in real-time from pickup to drop-off.',
  },
  {
    icon: Phone,
    title: '24/7 Support',
    desc: 'Our safety team is available round the clock. One tap to call emergency services directly from the app.',
  },
  {
    icon: MapPin,
    title: 'Safe Zones',
    desc: 'Designated pickup and drop-off zones in malls, hospitals, and transport hubs for added security.',
  },
  {
    icon: Star,
    title: 'Rating System',
    desc: 'Two-way ratings keep our community accountable. Only the best drivers stay active on the platform.',
  },
  {
    icon: Lock,
    title: 'Secure Payments',
    desc: 'All in-app payments are encrypted and secure. Your financial data is never shared with drivers.',
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
            We&apos;ve built multiple layers of protection so you can ride with complete peace of mind.
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
