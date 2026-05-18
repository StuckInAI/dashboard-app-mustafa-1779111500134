import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    name: 'Ayesha Malik',
    city: 'Lahore',
    avatar: '👩',
    rating: 5,
    text: 'Khaqan is the best ride-hailing app I\'ve used in Pakistan. Always on time, clean cars, and very professional drivers. Highly recommended!',
  },
  {
    name: 'Ahmed Raza',
    city: 'Karachi',
    avatar: '👨',
    rating: 5,
    text: 'I use Khaqan every day for my office commute. The prices are fair and the drivers are always polite. Customer support is also excellent.',
  },
  {
    name: 'Sana Hussain',
    city: 'Islamabad',
    avatar: '👩\u200d💼',
    rating: 5,
    text: 'As a working woman, safety is my top priority. Khaqan\'s verification process and real-time tracking give me complete peace of mind.',
  },
  {
    name: 'Bilal Khan',
    city: 'Rawalpindi',
    avatar: '🧑',
    rating: 5,
    text: 'Switched from another app and never looked back. Khaqan\'s surge pricing is way more reasonable and drivers actually show up!',
  },
  {
    name: 'Fatima Sheikh',
    city: 'Faisalabad',
    avatar: '👩\u200d🎓',
    rating: 5,
    text: 'The student discount is amazing! I save so much on my daily university commute. The app is also very easy to use.',
  },
  {
    name: 'Usman Ali',
    city: 'Multan',
    avatar: '👨\u200d💻',
    rating: 5,
    text: 'I drive for Khaqan part-time and the earnings are great. The platform is fair, payouts are on time, and the support team is responsive.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Testimonials</span>
          <h2 className={styles.title}>
            Loved by millions
            <span className={styles.green}> across Pakistan</span>
          </h2>
          <p className={styles.sub}>
            Don\'t just take our word for it — here\'s what our riders and drivers have to say.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <div className={styles.stars}>
                {'★'.repeat(t.rating)}
              </div>
              <p className={styles.review}>{t.text}</p>
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
