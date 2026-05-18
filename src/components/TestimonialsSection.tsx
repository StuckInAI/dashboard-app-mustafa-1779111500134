import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    name: 'Ayesha Malik',
    city: 'Lahore',
    avatar: '👩',
    rating: 5,
    text: 'Khaqan has completely changed how I commute. The drivers are always polite and the cars are clean. Best ride app in Pakistan!',
  },
  {
    name: 'Usman Tariq',
    city: 'Karachi',
    avatar: '👨',
    rating: 5,
    text: 'Super fast pickup, very affordable. I use Khaqan every single day for work. Never going back to rickshaws!',
  },
  {
    name: 'Sana Hussain',
    city: 'Islamabad',
    avatar: '👩‍💼',
    rating: 5,
    text: 'The safety features give me so much peace of mind. I can share my live location with my family. Highly recommended!',
  },
  {
    name: 'Ahmed Raza',
    city: 'Rawalpindi',
    avatar: '🧔',
    rating: 5,
    text: 'As a driver, Khaqan has helped me earn so much more. Flexible hours and weekly payouts. Life changing!',
  },
  {
    name: 'Fatima Zahra',
    city: 'Faisalabad',
    avatar: '👩‍🎓',
    rating: 5,
    text: 'Affordable, safe, and always on time. Khaqan is the best thing to happen to commuters in Pakistan.',
  },
  {
    name: 'Bilal Khan',
    city: 'Multan',
    avatar: '👨‍💻',
    rating: 5,
    text: 'The app is so easy to use and the fare estimates are always accurate. Zero hidden charges. Love it!',
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Testimonials</span>
          <h2 className={styles.title}>
            Loved by riders
            <br /><span className={styles.green}>across Pakistan</span>
          </h2>
          <p className={styles.sub}>
            Don&apos;t just take our word for it. Here&apos;s what our community has to say.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <div className={styles.stars}>
                {'★'.repeat(t.rating)}
              </div>
              <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
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
