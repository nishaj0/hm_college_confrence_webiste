import { motion } from 'framer-motion';
import { Calendar, MapPin, Globe } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>HIMICON</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Globe size={16} />
                <span>International Conference</span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Automated Humanity &amp;
            <span className="gradient-text"> Future Directions</span>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Automation and Humanity in Transition: Policies, Practices, Prospects and Future Directions Towards a Better World Order
          </motion.p>

          <motion.div
            className={styles.info}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className={styles.infoItem}>
              <Calendar size={20} />
              <span>21–22 Jan 2026 (Hybrid Mode)</span>
            </div>
            <div className={styles.infoItem}>
              <MapPin size={20} />
              <span>HM College of Science & Technology, Manjeri</span>
            </div>
          </motion.div>

          <motion.div
            className={styles.organizers}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className={styles.organizersContent}>
              <p>Organized by</p>
              <h3>HM College of Science & Technology, Manjeri & MAKA College of Social Science</h3>
              <p className={styles.affiliation}>In collaboration with WVSU Philippines & Jamia Nadwiyya Edavanna</p>
            </div>
            <img src="/logo/logo.jpg" alt="Organizers" className={styles.logo} />
          </motion.div>

          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <a href="#registration" className={styles.primaryBtn}>
              Register Now
            </a>
            <a href="#about" className={styles.secondaryBtn}>
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.gradientOverlay}></div>
    </section>
  );
}
