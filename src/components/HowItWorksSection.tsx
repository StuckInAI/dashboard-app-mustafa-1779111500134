import styles from './HowItWorksSection.module.css';

const steps = [
  {
    number: '01',
    emoji: '📱',
    title: 'Download the App',
    desc: 'Get the Khaqan app from the App Store or Google Play. Sign up in under 2 minutes.',
  },
  {
    number: '02',
    emoji: '📍',
    title: 'Enter Your Destination',
    desc: 'Type your drop-off location. Instantly see fare estimates and available drivers near you.',
  },
  {
    number: '03',
    emoji: '✅',
    title: 'Match with a Driver',
    desc: 'Get matched with a verified, top-rated driver nearby. Track their arrival in real-time.',
  },
  {
    number: '04',
    emoji: '🚀',
    title: 'Enjoy the Ride',
    desc: 'Sit back, relax, and arrive safely. Rate your driver and pay cashlessly in-app.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.badge}>How It Works</span>
          <h2 className={styles.title}>Riding with Khaqan
            <br /><span className={styles.green}>is simple</span>
          </h2>
          <p className={styles.desc}>
            From download to destination in minutes. No cash needed, no hassle —
            just seamless rides across Pakistan's major cities.
          </p>
          <a href="#download" className={styles.ctaBtn}>Download for Free</a>
        </div>

        <div className={styles.right}>
          {steps.map((step, i) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepLeft}>
                <div className={styles.stepNum}>{step.number}</div>
                {i < steps.length - 1 && <div className={styles.connector} />}
              </div>
              <div className={styles.stepBody}>
                <span className={styles.stepEmoji}>{step.emoji}</span>
                <div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
