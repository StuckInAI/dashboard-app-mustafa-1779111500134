import styles from './AppDownloadSection.module.css';

export default function AppDownloadSection() {
  return (
    <section className={styles.section} id="download">
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>Get the App</span>
          <h2 className={styles.title}>
            Download Khaqan
            <span className={styles.green}> for free</span>
          </h2>
          <p className={styles.sub}>
            Available on iOS and Android. Join millions of Pakistanis already
            riding smarter with Khaqan.
          </p>

          <div className={styles.storeButtons}>
            <a href="#" className={styles.storeBtn}>
              <span className={styles.storeIcon}>🍎</span>
              <div className={styles.storeText}>
                <span className={styles.storeLabel}>Download on the</span>
                <span className={styles.storeName}>App Store</span>
              </div>
            </a>
            <a href="#" className={styles.storeBtn}>
              <span className={styles.storeIcon}>▶️</span>
              <div className={styles.storeText}>
                <span className={styles.storeLabel}>Get it on</span>
                <span className={styles.storeName}>Google Play</span>
              </div>
            </a>
          </div>

          <div className={styles.appStats}>
            <div className={styles.appStat}>
              <span className={styles.appStatNum}>4.8</span>
              <div>
                <div className={styles.stars}>★★★★★</div>
                <span className={styles.appStatLabel}>App Store Rating</span>
              </div>
            </div>
            <div className={styles.appStatDiv} />
            <div className={styles.appStat}>
              <span className={styles.appStatNum}>2M+</span>
              <span className={styles.appStatLabel}>Downloads</span>
            </div>
          </div>
        </div>

        <div className={styles.phoneGroup}>
          {/* Main phone */}
          <div className={styles.phoneMain}>
            <div className={styles.phoneInner}>
              <div className={styles.appScreen}>
                <div className={styles.appHeader}>
                  <div className={styles.logoSmall}>🚘</div>
                  <span className={styles.appName}>Khaqan</span>
                </div>
                <div className={styles.mapArea}>
                  <svg width="100%" height="100%" viewBox="0 0 240 300" fill="none">
                    <rect width="240" height="300" fill="#d4edda" />
                    <line x1="0" y1="150" x2="240" y2="150" stroke="#a8d5b5" strokeWidth="10" />
                    <line x1="120" y1="0" x2="120" y2="300" stroke="#a8d5b5" strokeWidth="10" />
                    <line x1="60" y1="0" x2="60" y2="300" stroke="#c3e6cb" strokeWidth="6" />
                    <line x1="180" y1="0" x2="180" y2="300" stroke="#c3e6cb" strokeWidth="6" />
                    <circle cx="120" cy="140" r="16" fill="#1dbf73" opacity="0.25" />
                    <circle cx="120" cy="140" r="8" fill="#1dbf73" />
                    <circle cx="120" cy="140" r="3" fill="white" />
                  </svg>
                </div>
                <div className={styles.bookingBar}>
                  <div className={styles.bookingInput}>
                    <span>📍</span>
                    <span>Where to?</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative circles */}
          <div className={styles.circle1} />
          <div className={styles.circle2} />
        </div>
      </div>
    </section>
  );
}
