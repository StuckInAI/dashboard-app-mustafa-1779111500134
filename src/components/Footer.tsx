import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import styles from './Footer.module.css';

const footerLinks = [
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Press', 'Blog', 'Investors'],
  },
  {
    title: 'Services',
    links: ['Khaqan GO', 'Khaqan Business', 'Khaqan Bike', 'Khaqan Parcel', 'Khaqan Cargo'],
  },
  {
    title: 'Drivers',
    links: ['Drive with Khaqan', 'Requirements', 'Earnings', 'Insurance', 'Driver Support'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Safety', 'Accessibility', 'Contact Us', 'Report Issue'],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer} id="about">
      <div className={styles.container}>
        {/* Top */}
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logoRow}>
              <div className={styles.logoMark}>
                <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="18" fill="#1dbf73" />
                  <path d="M10 24 L18 10 L26 24" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <circle cx="18" cy="24" r="2.5" fill="white" />
                </svg>
              </div>
              <span className={styles.logoText}>Khaqan</span>
            </div>
            <p className={styles.brandDesc}>
              Pakistan's most trusted ride-hailing platform.
              Safe, affordable, and always reliable.
            </p>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <MapPin size={15} className={styles.contactIcon} />
                <span>Lahore, Punjab, Pakistan</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={15} className={styles.contactIcon} />
                <span>+92 300 KHAQAN (542726)</span>
              </div>
              <div className={styles.contactItem}>
                <Mail size={15} className={styles.contactIcon} />
                <span>hello@khaqanride.pk</span>
              </div>
            </div>
            <div className={styles.socials}>
              <a href="#" className={styles.socialBtn}><Facebook size={17} /></a>
              <a href="#" className={styles.socialBtn}><Twitter size={17} /></a>
              <a href="#" className={styles.socialBtn}><Instagram size={17} /></a>
              <a href="#" className={styles.socialBtn}><Youtube size={17} /></a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.title} className={styles.linkCol}>
              <h4 className={styles.colTitle}>{col.title}</h4>
              {col.links.map((link) => (
                <a key={link} href="#" className={styles.link}>{link}</a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2024 Khaqan Ride-Hailing Service. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
