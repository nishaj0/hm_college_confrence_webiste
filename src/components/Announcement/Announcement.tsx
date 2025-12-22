import styles from './Announcement.module.css';

export default function Announcement() {
  return (
    <div className={styles.container}>
      <div className={styles.scrollingText}>
        📢 Abstract submission date has been extended to 30 Dec 2025! Submit your papers now! 📢
      </div>
    </div>
  );
}
