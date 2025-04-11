import styles from '@/styles/hero.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.logoBlock}>
        <h1 className={styles.logo}>ARTSB</h1>
      </div>
      <div className={styles.textBlock}>
        <p className={styles.description}>
          A Sri Lankan artist who blurs the lines between reality and dreamscapes, weaving emotion, and surrealism into every brushstroke.
        </p>
      </div>
    </section>
  );
}
