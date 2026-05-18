import { ArrowRight, Star, Shield, Clock } from 'lucide-react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Background */}
      <div className={styles.heroBg}>
        <div className={styles.bgGradient} />
        <div className={styles.bgPattern} />
      </div>

      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <Star size={13} fill="#1dbf73" stroke="none" />
            <span>Trusted by 2M+ riders in Pakistan</span>
          </div>

          <h1 className={styles.headline}>
            Your Ride,
            <br />
            <span className={styles.highlight}>Anytime.</span>
            <br />
            Anywhere.
          </h1>

          <p className={styles.subtext}>
            Khaqan connects you with safe, affordable, and reliable rides across Pakistan.
            Book in seconds — get there in style.
          </p>

          <div className={styles.ctaRow}>
            <a href="#download" className={styles.btnHero}>
              Book a Ride
              <ArrowRight size={18} />
            </a>
            <a href="#drive" className={styles.btnHeroSecondary}>
              Drive with Khaqan
            </a>
          </div>

          <div className={styles.trustBar}>
            <div className={styles.trustItem}>
              <Shield size={16} className={styles.trustIcon} />
              <span>Verified Drivers</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.trustItem}>
              <Clock size={16} className={styles.trustIcon} />
              <span>Avg. 4 min pickup</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.trustItem}>
              <Star size={16} className={styles.trustIcon} fill="#1dbf73" stroke="none" />
              <span>4.8 Rating</span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className={styles.visual}>
          <div className={styles.phoneCard}>
            {/* Simulated Phone UI */}
            <div className={styles.phone}>
              <div className={styles.phoneScreen}>
                <div className={styles.mapPlaceholder}>
                  {/* Animated map dots */}
                  <svg width="100%" height="100%" viewBox="0 0 320 480" fill="none" preserveAspectRatio="xMidYMid slice">
                    <rect width="320" height="480" fill="#e8f4e8" />
                    {/* Roads */}
                    <line x1="0" y1="240" x2="320" y2="240" stroke="#c8e6c9" strokeWidth="12" />
                    <line x1="160" y1="0" x2="160" y2="480" stroke="#c8e6c9" strokeWidth="12" />
                    <line x1="0" y1="120" x2="320" y2="180" stroke="#dcedc8" strokeWidth="8" />
                    <line x1="0" y1="360" x2="320" y2="300" stroke="#dcedc8" strokeWidth="8" />
                    <line x1="80" y1="0" x2="80" y2="480" stroke="#dcedc8" strokeWidth="6" />
                    <line x1="240" y1="0" x2="240" y2="480" stroke="#dcedc8" strokeWidth="6" />
                    {/* Location pin */}
                    <circle cx="160" cy="220" r="20" fill="#1dbf73" opacity="0.2" />
                    <circle cx="160" cy="220" r="10" fill="#1dbf73" />
                    <circle cx="160" cy="220" r="4" fill="white" />
                    {/* Car icon approx */}
                    <rect x="90" y="170" width="28" height="18" rx="5" fill="#0d1b2a" />
                    <rect x="94" y="164" width="20" height="10" rx="3" fill="#2d3a4a" />
                    <circle cx="95" cy="190" r="4" fill="#555" />
                    <circle cx="113" cy="190" r="4" fill="#555" />
                    {/* ETA card */}
                    <rect x="20" y="380" width="130" height="64" rx="12" fill="white" />
                    <text x="32" y="402" fontFamily="Inter,sans-serif" fontSize="11" fill="#4a5568" fontWeight="600">Your Ride</text>
                    <text x="32" y="420" fontFamily="Inter,sans-serif" fontSize="18" fill="#0d1b2a" fontWeight="800">4 min</text>
                    <text x="32" y="437" fontFamily="Inter,sans-serif" fontSize="11" fill="#1dbf73" fontWeight="600">On the way</text>
                    {/* Price card */}
                    <rect x="170" y="380" width="130" height="64" rx="12" fill="#1dbf73" />
                    <text x="182" y="402" fontFamily="Inter,sans-serif" fontSize="11" fill="rgba(255,255,255,0.8)" fontWeight="600">Total Fare</text>
                    <text x="182" y="422" fontFamily="Inter,sans-serif" fontSize="18" fill="white" fontWeight="800">PKR 350</text>
                    <text x="182" y="437" fontFamily="Inter,sans-serif" fontSize="11" fill="rgba(255,255,255,0.9)" fontWeight="600">Economy</text>
                  </svg>
                </div>
                <div className={styles.phoneHeader}>
                  <span className={styles.phoneTime}>9:41</span>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className={styles.floatCard1}>
              <div className={styles.floatIcon}>🚗</div>
              <div>
                <p className={styles.floatLabel}>Khaqan GO</p>
                <p className={styles.floatSub}>PKR 280–350</p>
              </div>
            </div>

            <div className={styles.floatCard2}>
              <div className={styles.ratingRow}>
                {'★★★★★'.split('').map((s, i) => <span key={i} className={styles.star}>{s}</span>)}
              </div>
              <p className={styles.floatReview}>"Best ride app in Lahore!"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className={styles.statsBar}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>2M+</span>
          <span className={styles.statLabel}>Happy Riders</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.statItem}>
          <span className={styles.statNumber}>50K+</span>
          <span className={styles.statLabel}>Active Drivers</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.statItem}>
          <span className={styles.statNumber}>15+</span>
          <span className={styles.statLabel}>Cities</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.statItem}>
          <span className={styles.statNumber}>4.8★</span>
          <span className={styles.statLabel}>App Rating</span>
        </div>
      </div>
    </section>
  );
}
