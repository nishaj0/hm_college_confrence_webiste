import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Mail, Send } from 'lucide-react';
import styles from './Registration.module.css';

export default function Registration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="registration" className={styles.registration} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.iconWrapper}>
            <Send size={32} />
          </div>
          <h2 className={styles.title}>Call for Papers</h2>
          <p className={styles.subtitle}>
            Original and unpublished research papers are invited in alignment with the conference theme and sub-themes
          </p>
        </motion.div>

        <div className={styles.contentGrid}>
          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.cardIcon}>
              <FileText size={28} />
            </div>
            <h3>Submit Your Paper</h3>
            <p>
              All accepted papers will be published in the Conference Proceedings with ISBN.
              Papers should address the conference themes and contribute to the discourse on 
              automated humanity and sustainable livelihoods.
            </p>
            <div className={styles.guidelines}>
              <h4>Submission Guidelines:</h4>
              <ul>
                <li>Original and unpublished work only</li>
                <li>Aligned with conference themes</li>
                <li>Follow standard academic format</li>
                <li>Include abstract and keywords</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className={styles.formCard}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.formHeader}>
              <h3>Registration & Submission</h3>
              <p>Complete the form below to register and submit your paper</p>
            </div>
            
            {/* Embedded Google Form - Replace with actual form URL */}
            <div className={styles.formEmbed}>
              {/* TODO: Replace the src URL below with your actual Google Form embed URL */}
              {/* To get the embed URL: Open your Google Form > Send > Embed HTML > Copy the src URL */}
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSc_EXAMPLE_FORM_ID/viewform?embedded=true"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Conference Registration Form"
              >
                Loading form...
              </iframe>
            </div>

            <div className={styles.alternateContact}>
              <div className={styles.orDivider}>
                <span>OR</span>
              </div>
              <div className={styles.emailContact}>
                <Mail size={24} />
                <div>
                  <p>Email your submission to:</p>
                  <a href="mailto:conference@hmcollegemanjeri.com">
                    conference@hmcollegemanjeri.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* <motion.div
          className={styles.publicationCard}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className={styles.publicationIcon}>
            <Award size={32} />
          </div>
          <h3>Publication Benefits</h3>
          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <span className={styles.checkmark}>✓</span>
              <p>Published in Conference Proceedings with ISBN</p>
            </div>
            <div className={styles.benefit}>
              <span className={styles.checkmark}>✓</span>
              <p>Opportunity to present at the international conference</p>
            </div>
            <div className={styles.benefit}>
              <span className={styles.checkmark}>✓</span>
              <p>Networking with global researchers and scholars</p>
            </div>
            <div className={styles.benefit}>
              <span className={styles.checkmark}>✓</span>
              <p>Certificate of participation and presentation</p>
            </div>
          </div>
        </motion.div> */}

        <motion.div
          className={styles.committeeSection}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3>Theme Conceptualization & Research Committee</h3>
          <div className={styles.committees}>
            <div className={styles.committee}>Internal Quality Assurance Cell (IQAC), HMC</div>
            <div className={styles.committee}>Research & Publishing Committee, HMC</div>
            <div className={styles.committee}>Staff Council and Staff Club, HMC</div>
          </div>
          <p className={styles.committeeNote}>
            Their interdisciplinary insights have shaped a theme that connects technology, 
            sustainability, and resilience, inspiring meaningful dialogue and innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
