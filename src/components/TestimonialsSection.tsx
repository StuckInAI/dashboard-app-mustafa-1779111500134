import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    name: 'Ayesha Khan',
    city: 'Lahore',
    avatar: '👩',
    rating: 5,
    text: 'Khaqan is honestly the best ride-hailing app in Pakistan. Always on time, drivers are super polite, and the prices are unbeatable!',
  },
  {
    name: 'Muhammad Ali',
    city: 'Karachi',
    avatar: '👨',
    rating: 5,
    text: 'I use Khaqan every day for my office commute. The app is smooth, booking is instant, and I feel safe every single ride.',
  },
  {
    name: 'Sana Mirza',
    city: 'Islamabad',
    avatar: '👩‍💼',
    rating: 5,
    text: 'As a woman, safety matters most to me. Khaqan\'s SOS feature and verified drivers give me so much peace of mind.',
  },
  {
    name: 'Usman Tariq',
    city: 'Rawalpindi',
    avatar: '🧑‍💻',
    rating: 5,
    text: 'Switched from another app and never looked back. Khaqan has better drivers, better prices, and a way smoother experience.',
  },
  {
    name: 'Fatima Zahra',
    city: 'Faisalabad',
    avatar: '👩‍🦱',
    rating: 5,
    text: 'The driver rating system is brilliant. Every driver I\'ve had has been professional and the cars are always clean!',
  },
  {
    name: 'Bilal Chaudhry',
    city: 'Multan',
    avatar: '👨‍🦰',
    rating: 5,
    text: 'PKR 280 from my home to the office — I was shocked. Khaqan is genuinely affordable without compromising on quality.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>What Riders Say</span>
          <h2 className={styles.title}>
            Loved by <span className={styles.green}>millions</span> across Pakistan
          </h2>
          <p className={styles.sub}>
            Don&apos;t just take our word for it. Here&apos;s what real Khaqan riders are saying.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <div className={styles.stars}>
                {'★'.repeat(t.rating)}
              </div>
              <p className={styles.quote}>&ldquo;{t.text}&rdquo;</p>
              <div className={styles.author}>
                <span className={styles.avatar}>{t.avatar}</span>
                <div>
                  <p className={styles.authorName}>{t.name}</p>
                  <p className={styles.authorCity}>{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
