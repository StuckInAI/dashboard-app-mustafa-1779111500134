import { Shield, Eye, Phone, AlertTriangle, Lock, Users } from 'lucide-react';
import styles from './SafetySection.module.css';

const safetyFeatures = [
  {
    icon: Shield,
    title: 'Verified Drivers',
    desc: 'Every driver undergoes thorough background checks, document verification, and regular re-screening.',
  },
  {
    icon: Eye,
    title: 'Real-Time Tracking',
    desc: 'Share your live location with family and friends during your trip. Always know where you are.',
  },
  {
    icon: Phone,
    title: '24/7 Emergency Support',
    desc: 'One-tap emergency button connects you to our safety team and local authorities instantly.',
  },
  {
    icon: AlertTriangle,
    title: 'Incident Reporting',
    desc: 'Report any issues directly in-app. Our team responds within minutes to ensure your safety.',
  },
  {
    icon: Lock,
    title: 'Masked Contacts',
    desc: 'Your phone number is never shared with drivers. All calls go through our secure system.',
  },
  {
    icon: Users,
    title: 'Community Standards',
    desc: 'Strict code of conduct for all drivers and riders. Violations result in immediate suspension.',
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
            We've built multiple layers of protection so you can ride with complete confidence,
            day or night, anywhere in Pakistan.
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
