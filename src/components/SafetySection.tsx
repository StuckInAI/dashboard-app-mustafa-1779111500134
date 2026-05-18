import { Shield, Eye, Phone, UserCheck, Lock, AlertTriangle } from 'lucide-react';
import styles from './SafetySection.module.css';

const features = [
  {
    icon: UserCheck,
    title: 'Driver Verification',
    desc: 'All drivers undergo comprehensive background checks, document verification, and in-person training before they can drive.',
  },
  {
    icon: Eye,
    title: 'Real-Time Tracking',
    desc: 'Share your live trip with family or friends. Monitor every turn on our real-time map.',
  },
  {
    icon: Phone,
    title: 'SOS Emergency Button',
    desc: 'One tap connects you to our 24/7 safety team and local emergency services instantly.',
  },
  {
    icon: Shield,
    title: 'Ride Insurance',
    desc: 'Every trip is covered by our comprehensive ride insurance policy for both riders and drivers.',
  },
  {
    icon: Lock,
    title: 'Anonymous Calling',
    desc: 'Your personal phone number is never shared with drivers. All calls are masked and encrypted.',
  },
  {
    icon: AlertTriangle,
    title: 'Incident Reporting',
    desc: 'Report any safety concern directly in the app. Our team responds within 2 hours, 24/7.',
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
            Khaqan is built with safety at its core. Every feature, every policy,
            every driver — designed to protect you.
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
