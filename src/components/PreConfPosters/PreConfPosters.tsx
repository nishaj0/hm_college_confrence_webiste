import { motion } from 'framer-motion';
import styles from './PreConfPosters.module.css';

const images = Array.from({ length: 8 }, (_, i) => `/pre-conf-posters/image${i + 1}.jpeg`);

export default function PreConfPosters() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Pre-Conference</h2>
      <div className={styles.carousel}>
        <motion.div
          className={styles.track}
          animate={{
            x: ['0%', '-50%'],
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
                <img src={src} alt={`Poster ${index + 1}`} className={styles.image} />
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
