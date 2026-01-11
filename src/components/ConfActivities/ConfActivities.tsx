import { motion } from 'framer-motion';
import styles from './ConfActivities.module.css';

const images = [
  '/conf-activities/WhatsApp Image 2026-01-08 at 10.20.51 AM.jpeg',
  '/conf-activities/WhatsApp Image 2026-01-08 at 10.20.52 AM (1).jpeg',
  '/conf-activities/WhatsApp Image 2026-01-08 at 10.20.52 AM (2).jpeg',
  '/conf-activities/WhatsApp Image 2026-01-08 at 10.20.52 AM.jpeg',
  '/conf-activities/WhatsApp Image 2026-01-08 at 10.21.48 AM.jpeg',
  '/conf-activities/WhatsApp Image 2026-01-08 at 10.21.49 AM.jpeg',
  '/conf-activities/WhatsApp Image 2026-01-08 at 10.21.56 AM.jpeg',
  '/conf-activities/WhatsApp Image 2026-01-08 at 10.21.57 AM (1).jpeg',
  '/conf-activities/WhatsApp Image 2026-01-08 at 10.21.57 AM.jpeg',
];

export default function ConfActivities() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Conference Activities</h2>
      <div className={styles.carousel}>
        <motion.div
          className={styles.track}
          animate={{
            x: ['-50%', '0%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...images, ...images].map((src, index) => (
            <div key={index} className={styles.card}>
              <a href={src} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%', cursor: 'pointer' }}>
                <img src={src} alt={`Conference Activity ${index + 1}`} className={styles.image} />
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
