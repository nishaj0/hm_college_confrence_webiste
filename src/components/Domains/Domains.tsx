import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Briefcase, Users, Calendar, DollarSign } from 'lucide-react';
import styles from './Domains.module.css';

const domains = [
  {
    icon: Cpu,
    title: "Science & Technology",
    color: "#00ffff",
    topics: [
      "Artificial Intelligence, Robotics, and the Future of Work",
      "Automation in Healthcare, Environment, and Sustainability",
      "Cybersecurity, Data Governance, and Digital Trust",
      "Smart Cities, IoT, and Human–Centric Urban Innovation"
    ]
  },
  {
    icon: Briefcase,
    title: "Commerce & Management",
    color: "#7c4dff",
    topics: [
      "Automation in Business Processes and Organizational Transformation",
      "Digital Economy, E-Commerce, and Global Market Dynamics",
      "Leadership, Ethics, and Corporate Governance in an Automated Era",
      "Sustainable Business Practices and Green Automation"
    ]
  },
  {
    icon: Users,
    title: "Social Sciences & Humanities",
    color: "#ff1744",
    topics: [
      "Society in Transition: Human Identity, Culture, and Digital Citizenship",
      "Education, Learning, and Human Development in the Age of Automation",
      "Policy, Law, and Human Rights in an Automated World",
      "Literature, Media, and the Narrative of Technological Futures"
    ]
  }
];

const importantDates = [
  { event: "Abstract Submission Deadline", date: "15 December 2025" },
  { event: "Notification of Acceptance", date: "16 December 2025" },
  { event: "Deadline for Fee Payment", date: "20 December 2025" },
  { event: "Full Paper Submission", date: "31 December 2025" },
  { event: "Confirmation of Acceptance", date: "02 January 2026" },
  { event: "Conference Date", date: "21, 22 January 2026" }
];

const registrationFees = [
  {
    category: "Academicians & Faculty",
    single: "₹1500",
    joint: "₹1000",
    online: "₹800"
  },
  {
    category: "Research Scholars",
    single: "₹800",
    joint: "₹600",
    online: "₹500"
  },
  {
    category: "Students",
    single: "₹500",
    joint: "₹300",
    online: "₹250"
  },
  {
    category: "Foreign Nationals",
    single: "$50",
    joint: "$30",
    online: "$30"
  }
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
              style={{ '--domain-color': domain.color } as React.CSSProperties}
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
                <div className={styles.feeDetails}>
                  <div className={styles.feeRow}>
                    <span className={styles.feeLabel}>Single Author</span>
                    <span className={styles.feeValue}>{item.single}</span>
                  </div>
                  <div className={styles.feeRow}>
                    <span className={styles.feeLabel}>Joint Authors (Each)</span>
                    <span className={styles.feeValue}>{item.joint}</span>
                  </div>
                  <div className={styles.feeRow}>
                    <span className={styles.feeLabel}>Online</span>
                    <span className={styles.feeValue}>{item.online}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
