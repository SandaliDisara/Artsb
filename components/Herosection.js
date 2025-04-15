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

      <div className={styles.scrollContainer}>
        <div className={styles.scrollTrack}>
          {[...Array(2)].map((_, i) => (
            <div className={styles.imageSet} key={i}>
              <img src="/images/avatar.png" alt="Art 1" />
              <img src="/images/butters.png" alt="Art 2" />
              <img src="/images/frog.png" alt="Art 3" />
              <img src="/images/angel.png" alt="Art 4" />
              {/* <img src="/images/avatar.png" alt="Art 1 repeat" /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
