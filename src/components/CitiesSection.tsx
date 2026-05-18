import styles from './CitiesSection.module.css';

const cities = [
  { name: 'Lahore', emoji: '🏙️', rides: '800K+', status: 'Active' },
  { name: 'Karachi', emoji: '🌊', rides: '600K+', status: 'Active' },
  { name: 'Islamabad', emoji: '🏛️', rides: '400K+', status: 'Active' },
  { name: 'Rawalpindi', emoji: '🕌', rides: '250K+', status: 'Active' },
  { name: 'Faisalabad', emoji: '🏭', rides: '180K+', status: 'Active' },
  { name: 'Multan', emoji: '🌹', rides: '120K+', status: 'Active' },
  { name: 'Peshawar', emoji: '🏔️', rides: '90K+', status: 'Active' },
  { name: 'Quetta', emoji: '⛺', rides: '60K+', status: 'Active' },
  { name: 'Sialkot', emoji: '⚽', rides: '50K+', status: 'Active' },
  { name: 'Gujranwala', emoji: '🌾', rides: '45K+', status: 'Active' },
  { name: 'Hyderabad', emoji: '🎭', rides: '40K+', status: 'Active' },
  { name: 'Abbottabad', emoji: '🌲', rides: '20K+', status: 'Coming Soon' },
];

export default function CitiesSection() {
  return (
    <section className={styles.section} id="cities">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Our Coverage</span>
          <h2 className={styles.title}>
            Operating in <span className={styles.green}>15+ cities</span>
            <br />across Pakistan
          </h2>
          <p className={styles.sub}>
            Khaqan is expanding fast. If we\'re not in your city yet, we\'re coming soon!
          </p>
        </div>

        <div className={styles.grid}>
          {cities.map((city) => (
            <div key={city.name} className={styles.card}>
              <span className={styles.emoji}>{city.emoji}</span>
              <div className={styles.cityInfo}>
                <span className={styles.cityName}>{city.name}</span>
                <span className={styles.cityRides}>{city.rides} rides</span>
              </div>
              <span
                className={styles.status}
                style={{
                  background: city.status === 'Active' ? '#e8f8f0' : '#fff3cd',
                  color: city.status === 'Active' ? '#1dbf73' : '#d97706',
                }}
              >
                {city.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
