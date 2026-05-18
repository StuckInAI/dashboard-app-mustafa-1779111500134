import { ArrowRight, TrendingUp, Clock, Award, Wallet } from 'lucide-react';
import styles from './DriveWithUsSection.module.css';

const perks = [
  { icon: Wallet, title: 'Earn More', desc: 'Keep up to 85% of every fare. Weekly payouts directly to your bank account.' },
  { icon: Clock, title: 'Flexible Hours', desc: 'Be your own boss. Drive whenever you want — full-time, part-time, or weekends.' },
  { icon: TrendingUp, title: 'Surge Bonuses', desc: 'Earn extra during peak hours and special events. Unlimited earning potential.' },
  { icon: Award, title: 'Driver Rewards', desc: 'Unlock Gold and Platinum status. Enjoy fuel discounts, insurance, and more.' },
];

export default function DriveWithUsSection() {
  return (
    <section className={styles.section} id="drive">
      <div className={styles.container}>
        <div className={styles.visual}>
          <div className={styles.visualCard}>
            <div className={styles.earningsDemo}>
              <p className={styles.earningsLabel}>This Week's Earnings</p>
              <p className={styles.earningsAmount}>PKR 18,450</p>
              <div className={styles.earningsBar}>
                {[65, 80, 45, 90, 70, 95, 60].map((h, i) => (
                  <div
                    key={i}
                    className={styles.bar}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className={styles.dayLabels}>
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                  <span key={i} className={styles.dayLabel}>{d}</span>
                ))}
              </div>
            </div>
            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <span className={styles.statVal}>47</span>
                <span className={styles.statKey}>Trips</span>
              </div>
              <div className={styles.statDiv} />
              <div className={styles.stat}>
                <span className={styles.statVal}>4.9★</span>
                <span className={styles.statKey}>Rating</span>
              </div>
              <div className={styles.statDiv} />
              <div className={styles.stat}>
                <span className={styles.statVal}>32h</span>
                <span className={styles.statKey}>Online</span>
              </div>
            </div>
            <div className={styles.driverBadge}>
              <span>🏆</span>
              <span>Gold Driver Status Unlocked!</span>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <span className={styles.badge}>Drive with Khaqan</span>
          <h2 className={styles.title}>
            Turn your car into
            <br /><span className={styles.green}>an income machine</span>
          </h2>
          <p className={styles.sub}>
            Join 50,000+ drivers across Pakistan who earn on their own terms.
            Khaqan gives you the tools, support, and freedom to build your own business.
          </p>

          <div className={styles.perks}>
            {perks.map((p) => (
              <div key={p.title} className={styles.perk}>
                <div className={styles.perkIcon}>
                  <p.icon size={18} />
                </div>
                <div>
                  <h4 className={styles.perkTitle}>{p.title}</h4>
                  <p className={styles.perkDesc}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.ctaRow}>
            <a href="#download" className={styles.btnDrive}>
              Start Driving Today <ArrowRight size={16} />
            </a>
            <p className={styles.ctaNote}>No joining fee • Free vehicle inspection</p>
          </div>
        </div>
      </div>
    </section>
  );
}
