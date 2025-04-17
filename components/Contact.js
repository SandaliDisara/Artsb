import styles from '@/styles/contact.module.css';

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>LET'S GET IN TOUCH</h2>
      <div className={styles.contactTable}>
        <div className={styles.row}><p>ARTSBLANKA@GMAIL.COM</p></div>
        <div className={styles.row}><p>+94 725 412 886</p></div>
        <div className={styles.row}><p>TIKTOK - @ITHINKIPAINT</p></div>
        <div className={styles.row}><p>INSTAGRAM - @ARTSBLK</p></div>
      </div>
    </section>
  );
}
