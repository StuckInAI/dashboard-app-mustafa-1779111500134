import { Star } from 'lucide-react';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    name: 'Ayesha Malik',
    city: 'Lahore',
    rating: 5,
    text: 'Khaqan has completely changed how I commute. The drivers are always on time and the app is so easy to use. Highly recommended!',
    avatar: '👩',
    rides: '200+ rides',
  },
  {
    name: 'Hassan Raza',
    city: 'Karachi',
    rating: 5,
    text: 'Best ride-hailing service in Pakistan. Affordable prices, professional drivers, and real-time tracking. I use it every day.',
    avatar: '👨',
    rides: '350+ rides',
  },
  {
    name: 'Sana Javed',
    city: 'Islamabad',
    rating: 5,
    text: 'As a woman traveling alone, safety is my top concern. Khaqan gives me peace of mind with verified drivers and live tracking.',
    avatar: '👩‍💼',
    rides: '150+ rides',
  },
  {
    name: 'Bilal Ahmed',
    city: 'Rawalpindi',
    rating: 5,
    text: 'Switched from other apps to Khaqan 6 months ago and never looked back. The customer service is exceptional.',
    avatar: '🧑',
    rides: '420+ rides',
  },
  {
    name: 'Fatima Khan',
    city: 'Faisalabad',
    rating: 5,
    text: 'Khaqan Bike is a lifesaver during rush hours! Gets me to work in half the time. The pricing is very fair.',
    avatar: '👩‍🦱',
    rides: '180+ rides',
  },
  {
    name: 'Usman Tariq',
    city: 'Multan',
    rating: 5,
    text: 'I drive for Khaqan and the earnings are great. The app is driver-friendly and support team is always helpful.',
    avatar: '👨‍💼',
    rides: 'Driver - 600+ trips',
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
            Don&apos;t just take our word for it. Here&apos;s what our community says.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <div className={styles.stars}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="#ffc107" stroke="none" />
                ))}
              </div>
              <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
              <div className={styles.author}>
                <span className={styles.avatar}>{t.avatar}</span>
                <div>
                  <p className={styles.authorName}>{t.name}</p>
                  <p className={styles.authorMeta}>{t.city} &bull; {t.rides}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
