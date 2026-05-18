import { Shield, CheckCircle, Lock, Eye, Phone, AlertTriangle } from 'lucide-react';
import styles from './SafetySection.module.css';

const features = [
  {
    icon: Shield,
    title: 'Background-Verified Drivers',
    desc: 'Every Khaqan driver passes a rigorous background check, license verification, and vehicle inspection before going online.',
  },
  {
    icon: Eye,
    title: 'Real-Time Trip Tracking',
    desc: 'Track your ride on live map. Share trip details with friends or family with one tap.',
  },
  {
    icon: Lock,
    title: 'Privacy Protection',
    desc: 'Your personal information is encrypted. Phone numbers are masked — drivers never see your real number.',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency SOS Button',
    desc: 'One-tap SOS connects you directly to emergency services and notifies your emergency contacts instantly.',
  },
  {
    icon: CheckCircle,
    title: 'Rated & Reviewed Drivers',
    desc: 'Only drivers maintaining a 4.5+ rating stay active on the platform. Community-powered accountability.',
  },
  {
    icon: Phone,
    title: '24/7 Support',
    desc: 'Our safety team is available around the clock. Report issues instantly via in-app chat or call.',
  },
];

export default function SafetySection() {
  return (
    <section className={styles.section} id="safety">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Safety First</span>
          <h2 className={styles.title}>Your safety is our
            <span className={styles.green}> top priority</span>
          </h2>
          <p className={styles.sub}>
            At Khaqan, every feature is built with your security in mind —
            before, during, and after every trip.
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
