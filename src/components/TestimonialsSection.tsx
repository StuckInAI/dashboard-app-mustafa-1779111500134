import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    name: 'Ayesha Malik',
    city: 'Lahore',
    rating: 5,
    text: 'Khaqan has completely changed how I commute. The drivers are always on time and super professional. Best ride app in Pakistan!',
    avatar: 'AM',
  },
  {
    name: 'Usman Khan',
    city: 'Islamabad',
    rating: 5,
    text: "I've tried every ride app in the country. Khaqan is hands down the most reliable. The prices are fair and the app is so easy to use.",
    avatar: 'UK',
  },
  {
    name: 'Sara Ahmed',
    city: 'Karachi',
    rating: 5,
    text: 'As a woman travelling alone, safety is my top priority. Khaqan\'s verified drivers and live tracking give me complete peace of mind.',
    avatar: 'SA',
  },
  {
    name: 'Bilal Chaudhry',
    city: 'Rawalpindi',
    rating: 5,
    text: 'The Khaqan Business account saves our company thousands every month. Centralized billing is a game-changer for corporate travel.',
    avatar: 'BC',
  },
  {
    name: 'Fatima Zahra',
    city: 'Faisalabad',
    rating: 5,
    text: 'Khaqan Bike is perfect for quick errands. Beats the traffic and costs almost nothing. I use it every single day!',
    avatar: 'FZ',
  },
  {
    name: 'Ahmed Raza',
    city: 'Multan',
    rating: 5,
    text: 'Started driving for Khaqan 6 months ago. The earnings are great and the support team is always helpful. Highly recommend!',
    avatar: 'AR',
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Testimonials</span>
          <h2 className={styles.title}>
            Loved by <span className={styles.green}>millions</span>
          </h2>
          <p className={styles.sub}>
            Don&apos;t just take our word for it — hear from our community.
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
                <div className={styles.avatar}>{t.avatar}</div>
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
