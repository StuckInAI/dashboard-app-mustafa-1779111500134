import { useState } from 'react';
import { Save } from 'lucide-react';
import styles from './SettingsPage.module.css';
import Card from '@/components/ui/Card';

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    name: 'Admin User',
    email: 'admin@dashify.io',
    role: 'Super Admin',
    timezone: 'UTC-5',
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    orderUpdates: true,
    weeklyReport: false,
    securityAlerts: true,
  });

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className={styles.page}>
      {/* Profile Settings */}
      <Card title="Profile Settings" subtitle="Update your personal information">
        <div className={styles.form}>
          <div className={styles.avatarSection}>
            <div className={styles.avatar}>AD</div>
            <div>
              <p className={styles.avatarName}>{profile.name}</p>
              <p className={styles.avatarRole}>{profile.role}</p>
            </div>
          </div>

          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label className={styles.label}>Full Name</label>
              <input
                type="text"
                className={styles.input}
                value={profile.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setProfile({ ...profile, name: e.target.value })
                }
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Email Address</label>
              <input
                type="email"
                className={styles.input}
                value={profile.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setProfile({ ...profile, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label className={styles.label}>Role</label>
              <input
                type="text"
                className={styles.input}
                value={profile.role}
                disabled
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Timezone</label>
              <select
                className={styles.input}
                value={profile.timezone}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setProfile({ ...profile, timezone: e.target.value })
                }
              >
                <option>UTC-8</option>
                <option>UTC-7</option>
                <option>UTC-6</option>
                <option>UTC-5</option>
                <option>UTC+0</option>
                <option>UTC+1</option>
                <option>UTC+5:30</option>
                <option>UTC+8</option>
              </select>
            </div>
          </div>
        </div>
      </Card>

      {/* Notifications */}
      <Card title="Notification Preferences" subtitle="Control what you receive">
        <div className={styles.notifList}>
          {(Object.entries(notifications) as [keyof typeof notifications, boolean][]).map(([key, value]) => {
            const labels: Record<keyof typeof notifications, string> = {
              emailAlerts: 'Email Alerts',
              orderUpdates: 'Order Updates',
              weeklyReport: 'Weekly Report',
              securityAlerts: 'Security Alerts',
            };
            const descs: Record<keyof typeof notifications, string> = {
              emailAlerts: 'Receive alerts for critical system events',
              orderUpdates: 'Get notified when orders change status',
              weeklyReport: 'Weekly summary delivered every Monday',
              securityAlerts: 'Immediate alerts for suspicious activity',
            };
            return (
              <div key={key} className={styles.notifRow}>
                <div className={styles.notifInfo}>
                  <p className={styles.notifTitle}>{labels[key]}</p>
                  <p className={styles.notifDesc}>{descs[key]}</p>
                </div>
                <button
                  className={[styles.toggle, value ? styles.toggleOn : styles.toggleOff].join(' ')}
                  onClick={() => setNotifications({ ...notifications, [key]: !value })}
                >
                  <span className={styles.toggleThumb} />
                </button>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Danger Zone */}
      <Card title="Danger Zone" subtitle="Irreversible actions">
        <div className={styles.dangerRow}>
          <div>
            <p className={styles.dangerTitle}>Clear All Data</p>
            <p className={styles.dangerDesc}>Permanently delete all dashboard data and history</p>
          </div>
          <button className={styles.dangerBtn}>Clear Data</button>
        </div>
        <div className={styles.dangerRow}>
          <div>
            <p className={styles.dangerTitle}>Delete Account</p>
            <p className={styles.dangerDesc}>Remove your account and all associated information</p>
          </div>
          <button className={styles.dangerBtn}>Delete Account</button>
        </div>
      </Card>

      {/* Save Button */}
      <div className={styles.saveRow}>
        <button className={[styles.saveBtn, saved ? styles.saveBtnSuccess : ''].join(' ')} onClick={handleSave}>
          <Save size={15} />
          <span>{saved ? 'Saved!' : 'Save Changes'}</span>
        </button>
      </div>
    </div>
  );
}
