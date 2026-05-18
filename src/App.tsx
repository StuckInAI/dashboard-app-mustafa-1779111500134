import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import SafetySection from '@/components/SafetySection';
import DriveWithUsSection from '@/components/DriveWithUsSection';
import AppDownloadSection from '@/components/AppDownloadSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CitiesSection from '@/components/CitiesSection';
import Footer from '@/components/Footer';
import styles from './App.module.css';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={styles.app}>
      <Navbar scrolled={scrolled} />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <SafetySection />
      <DriveWithUsSection />
      <AppDownloadSection />
      <TestimonialsSection />
      <CitiesSection />
      <Footer />
    </div>
  );
}
