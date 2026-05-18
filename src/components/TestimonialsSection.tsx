import { Star } from 'lucide-react';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    name: 'Ayesha Khan',
    role: 'Daily Commuter, Lahore',
    avatar: 'AK',
    rating: 5,
    text: '"Khaqan has completely changed how I commute. Drivers are always on time, the fare is transparent, and I feel safe every single ride. Best app in Pakistan!"',
    color: '#e8f8f0',
  },
  {
    name: 'Bilal Ahmed',
    role: 'Business Traveler, Karachi',
    avatar: 'BA',
    rating: 5,
    text: '"I use Khaqan Business for client meetings. The cars are clean, drivers are professional, and I always arrive on time. It\'s become essential for my work."',
    color: '#eff6ff',
  },
  {
    name: 'Sana Mirza',
    role: 'University Student, Islamabad',
    avatar: 'SM',
    rating: 5,
    text: '"As a student, Khaqan GO is super affordable. I feel safe sharing my live location with family and the SOS feature gives my parents peace of mind."',
    color: '#fdf4ff',
  },
  {
    name: 'Tariq Hassan',
    role: 'Driver Partner, Rawalpindi',
    avatar: 'TH',
    rating: 5,
    text: '"I\'ve been driving with Khaqan for 2 years. The earnings are great, payouts are on time, and the support team always helps when I need them. Love it!"',
    color: '#fffbeb',
  },
  {
    name: 'Nadia Farooq',
    role: 'Entrepreneur, Faisalabad',
    avatar: 'NF',
    rating: 5,
    text: '"I use Khaqan Parcel for my small business deliveries. It\'s fast, reliable, and tracked. My customers love same-day delivery and so do I!"',
    color: '#fef2f2',
  },
  {
    name: 'Usman Ali',
    role: 'IT Professional, Lahore',
    avatar: 'UA',
    rating: 5,
    text: '"The app is beautifully designed and super easy to use. I booked my first ride in under 2 minutes. The driver tracking is incredibly accurate."',
    color: '#f0fdf4',
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Testimonials</span>
          <h2 className={styles.title}>
            Loved by riders &
            <span className={styles.green}> drivers across Pakistan</span>
          </h2>
          <p className={styles.sub}>
            Real stories from real people — join the Khaqan community today.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card} style={{ '--card-color': t.color } as React.CSSProperties}>
              <div className={styles.stars}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="#ffc107" stroke="none" />
                ))}
              </div>
              <p className={styles.text}>{t.text}</p>
              <div className={styles.author}>
                <div className={styles.avatar} style={{ background: t.color }}>
                  <span className={styles.avatarText}>{t.avatar}</span>
                </div>
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.role}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
