import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

interface NavbarProps {
  scrolled: boolean;
}

const navLinks = [
  { label: 'Ride', href: '#services' },
  { label: 'Drive', href: '#drive' },
  { label: 'Safety', href: '#safety' },
  { label: 'Cities', href: '#cities' },
  { label: 'About', href: '#about' },
];

export default function Navbar({ scrolled }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={[styles.navbar, scrolled ? styles.scrolled : ''].join(' ')}>
      <div className={styles.container}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          <div className={styles.logoMark}>
            <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="18" fill="#1dbf73" />
              <path d="M10 24 L18 10 L26 24" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <circle cx="18" cy="24" r="2.5" fill="white" />
            </svg>
          </div>
          <span className={styles.logoText}>Khaqan</span>
        </a>

        {/* Desktop Nav */}
        <div className={styles.desktopNav}>
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className={styles.actions}>
          <a href="#download" className={styles.btnOutline}>Get the App</a>
          <a href="#drive" className={styles.btnPrimary}>Start Driving</a>
        </div>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className={styles.mobileCtas}>
            <a href="#download" className={styles.btnOutline} onClick={() => setMenuOpen(false)}>Get the App</a>
            <a href="#drive" className={styles.btnPrimary} onClick={() => setMenuOpen(false)}>Start Driving</a>
          </div>
        </div>
      )}
    </nav>
  );
}
