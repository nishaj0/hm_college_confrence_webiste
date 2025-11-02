import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Target, Lightbulb } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const focusAreas = [
    "Automation, AI, and Machine Learning for sustainability and disaster management",
    "Climate modeling, biodiversity, and ecological resilience",
    "Ethical governance and policy frameworks for sustainable societies",
    "Digital entrepreneurship and economic inclusion",
    "Human adaptation to automation and mental well-being",
    "Cultural and literary perspectives on technology and environment",
    "Circular economy and equitable development"
  ];

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.iconWrapper}>
            <Sparkles size={32} />
          </div>
          <h2 className={styles.title}>About the Conference Theme</h2>
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className={styles.description}>
            In an era where automation reshapes human existence, achieving balance between 
            technological progress and sustainable living is one of the defining challenges of our times.
          </p>
          <p className={styles.description}>
            The <strong>International Conference on Automated Humanity and Sustainable Livelihoods</strong> seeks 
            to explore the synergy between human intelligence and artificial innovation in addressing 
            global issues such as climate change, ecological imbalance, and socio-economic vulnerability.
          </p>
          <p className={styles.description}>
            This platform brings together scientists, technologists, environmentalists, and social 
            thinkers to deliberate on how emerging technologies can empower humanity to create 
            sustainable livelihoods and foster resilience against natural and man-made disasters.
          </p>
        </motion.div>

        <motion.div
          className={styles.focusSection}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.focusHeader}>
            <Target size={28} />
            <h3>Key Focus Areas</h3>
          </div>
          <div className={styles.focusGrid}>
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                className={styles.focusItem}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <div className={styles.focusDot}></div>
                <p>{area}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.relevanceCard}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className={styles.relevanceIcon}>
            <Lightbulb size={28} />
          </div>
          <h3>Relevance of the Theme</h3>
          <p>
            The theme emphasizes that true progress lies not only in technological advancement 
            but in the ability of humanity to live harmoniously with nature, ensuring safety, 
            equity, and sustainability for generations to come.
          </p>
          <p>
            By integrating ethical innovation with compassion and inclusivity, societies can 
            move toward a future where technology empowers humanity and strengthens resilience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
