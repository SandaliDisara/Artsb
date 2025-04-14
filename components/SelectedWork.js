import styles from '@/styles/selectedWork.module.css';

export default function SelectedWork() {
  return (
    <section className={styles.section}>
    <h2 className={styles.title}>SELECTED WORK</h2>
    <p className={styles.description}>
    A curated collection of the artist’s most compelling pieces,
    reflecting their evolving style and vision. These works blend
    surreal imagery, natural elements, and emotional depth, each one
    inviting quiet reflection and connection through symbolism and storytelling.
    </p>
    <div className={styles.imageGrid}>
      <img src="/images/avatar.png" alt="Art 1" />
      <img src="/images/butters.png" alt="Art 2" />
      <img src="/images/angel.png" alt="Art 3" />
      <img src="/images/frog.png" alt="Art 4" />
    </div>
    <div className={styles.logoOverlay}>ARTSB</div>
  </section>

  );
}
