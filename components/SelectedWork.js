import styles from '@/styles/selectedWork.module.css';
import Link from 'next/link';

export default function SelectedWork() {
  return (
    <section className={styles.section}  id="selected">
      <h2 className={styles.title}>SELECTED WORK</h2>
      <p className={styles.description}>
        A curated collection of the artist’s most compelling pieces,
        reflecting their evolving style and vision. These works blend
        surreal imagery, natural elements, and emotional depth, each one
        inviting quiet reflection and connection through symbolism and storytelling.
      </p>

      <div className={styles.imageGrid}>
        <Link href="/artwork/the-night-she">
          <img src="/images/avatar.webp" alt="Art 1" />
        </Link>
        <Link href="/artwork/day-dream">
          <img src="/images/butters.webp" alt="Art 2" />
        </Link>
        <Link href="/artwork/iam-free">
        <img src="/images/angel.webp" alt="Art 3" />
        </Link>
        <img src="/images/frog.webp" alt="Art 4" />
      </div>

      <div className={styles.logoOverlay}>ARTSB</div>
    </section>
  );
}
