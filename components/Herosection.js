import styles from '@/styles/hero.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.titleSection}>
        <h1 className={styles.logo}>ARTSB</h1>
        <p className={styles.description}>
          A Sri Lankan artist who blurs the lines between reality and dreamscapes, weaving emotion, and surrealism into every brushstroke.
        </p>
      </div>
    </section>
  );
}
