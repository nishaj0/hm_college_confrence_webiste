import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Briefcase, Users, BookOpen, Calendar, DollarSign } from 'lucide-react';
import styles from './Domains.module.css';

const domains = [
  {
    icon: Cpu,
    title: "Science & Technology",
    color: "#00ffff",
    topics: [
      "AI, Machine Learning, and automation for sustainable technologies",
      "Spatial data analysis and climate modeling",
      "Human adaptation and resilience post-disaster",
      "Green chemistry and renewable materials"
    ]
  },
  {
    icon: Briefcase,
    title: "Commerce & Management",
    color: "#7c4dff",
    topics: [
      "Digital entrepreneurship and sustainable business practices",
      "Risk assessment and disaster preparedness",
      "Organizational innovation in an automated economy"
    ]
  },
  {
    icon: Users,
    title: "Humanities & Social Science",
    color: "#ff1744",
    topics: [
      "Governance, policy, and international cooperation for resilience",
      "Social inclusion and community engagement",
      "Ethical, social, and cultural aspects of technology"
    ]
  },
  {
    icon: BookOpen,
    title: "Languages & Literature",
    color: "#ffd600",
    topics: [
      "Literary reflections on automation and human identity",
      "Communication for sustainability and disaster awareness",
      "Indigenous knowledge and environmental narratives"
    ]
  }
];

const importantDates = [
  { event: "Abstract Submission", date: "[Insert Date]" },
  { event: "Paper Submission", date: "[Insert Date]" },
  { event: "Notification of Acceptance", date: "[Insert Date]" },
  { event: "Registration Deadline", date: "[Insert Date]" },
  { event: "Conference Date", date: "January 2026" }
];

const registrationFees = [
  { category: "Faculty / Academicians", fee: "₹500" },
  { category: "Research Scholars", fee: "₹300" },
  { category: "Students", fee: "₹200" },
  { category: "International Participants", fee: "$25" }
];

export default function Domains() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.domains} ref={ref}>
      <div className={styles.container}>
        {/* Domains Section */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Major Domains & Sub-Themes</h2>
          <p className={styles.subtitle}>
            Explore interdisciplinary perspectives on automation and sustainability
          </p>
        </motion.div>

        <div className={styles.domainsGrid}>
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              className={styles.domainCard}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ '--domain-color': domain.color } as any}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <domain.icon size={32} />
                </div>
                <h3>{domain.title}</h3>
              </div>
              <ul className={styles.topicsList}>
                {domain.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Important Dates */}
        <motion.div
          className={styles.datesSection}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className={styles.sectionHeader}>
            <Calendar size={32} />
            <h2>Important Dates</h2>
          </div>
          <div className={styles.datesGrid}>
            {importantDates.map((item, index) => (
              <motion.div
                key={index}
                className={styles.dateCard}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                <span className={styles.eventName}>{item.event}</span>
                <span className={styles.eventDate}>{item.date}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Registration Fees */}
        <motion.div
          className={styles.feesSection}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className={styles.sectionHeader}>
            <DollarSign size={32} />
            <h2>Registration Fee</h2>
          </div>
          <div className={styles.feesGrid}>
            {registrationFees.map((item, index) => (
              <motion.div
                key={index}
                className={styles.feeCard}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              >
                <span className={styles.category}>{item.category}</span>
                <span className={styles.fee}>{item.fee}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
