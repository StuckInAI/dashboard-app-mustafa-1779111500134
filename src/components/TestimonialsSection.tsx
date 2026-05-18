import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    name: 'Ayesha Mahmood',
    city: 'Lahore',
    avatar: '👩',
    rating: 5,
    text: 'Khaqan has completely changed how I commute. The drivers are always on time and so professional. I feel safe every single ride!',
    rides: '200+ rides',
  },
  {
    name: 'Hassan Raza',
    city: 'Karachi',
    avatar: '👨',
    rating: 5,
    text: 'Switched from other apps and never looked back. Prices are fair, the app is super smooth, and customer support actually helps.',
    rides: '150+ rides',
  },
  {
    name: 'Sana Tariq',
    city: 'Islamabad',
    avatar: '👩‍💼',
    rating: 5,
    text: 'As a working woman, safety is my top concern. Khaqan\'s verified drivers and live tracking give me complete peace of mind.',
    rides: '80+ rides',
  },
  {
    name: 'Bilal Ahmed',
    city: 'Faisalabad',
    avatar: '🧑',
    rating: 5,
    text: 'The Khaqan Business account has saved our company so much time. Monthly invoicing and driver tracking — exactly what we needed.',
    rides: '500+ rides',
  },
  {
    name: 'Fatima Khan',
    city: 'Rawalpindi',
    avatar: '👧',
    rating: 5,
    text: 'I love how quick it is to book a ride. Within 3 minutes I have a driver at my door. Best app in Pakistan, no doubt!',
    rides: '120+ rides',
  },
  {
    name: 'Usman Sheikh',
    city: 'Multan',
    avatar: '👴',
    rating: 5,
    text: 'Even at my age, the app is very easy to use. My grandchildren helped me set it up and now I use it daily. Wonderful service!',
    rides: '60+ rides',
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Testimonials</span>
          <h2 className={styles.title}>
            Loved by riders <span className={styles.green}>across Pakistan</span>
          </h2>
          <p className={styles.sub}>
            Real stories from real riders. Join millions who trust Khaqan for their daily journeys.
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
                  <p className={styles.authorMeta}>{t.city} · {t.rides}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
