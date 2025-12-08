import { MapPin, Phone, Globe, Mail, Calendar } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Venue</h3>
            <div className={styles.info}>
              <MapPin size={20} />
              <div>
                <p>HM College of Science & Technology</p>
                <p>Alukkal, Manjeri</p>
                <p>Kerala, India</p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Contact</h3>
            <div className={styles.info}>
              <Phone size={20} />
              <a href="tel:04832767077">04832767077</a>
            </div>
            <div className={styles.info}>
              <Mail size={20} />
              <a href="mailto:hmcmanjeri@gmail.com">
                hmcmanjeri@gmail.com
              </a>
            </div>
            <div className={styles.info}>
              <Globe size={20} />
              <a href="https://www.hmcollegemanjeri.ac.in" target="_blank" rel="noopener noreferrer">
                www.hmcollegemanjeri.ac.in
              </a>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Conference</h3>
            <div className={styles.info}>
              <Calendar size={20} />
              <p>January 2026</p>
            </div>
            <p className={styles.description}>
              Two-Day International Multidisciplinary Conference on Automated Humanity
              and Future Directions
            </p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <nav className={styles.links}>
              <a href="#about">About</a>
              <a href="#domains">Domains</a>
              <a href="#registration">Registration</a>
              <a href="#about">Important Dates</a>
            </nav>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2025 HM College of Science & Technology, Manjeri. All rights reserved.
          </p>
          <p className={styles.credits}>
            Website Designed by the Department of IT & AI
          </p>
        </div>
      </div>

      <div className={styles.gradient}></div>
    </footer>
  );
}
