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

      <div className={styles.artLayout}>
        <div className={styles.artItem1}>
          <img src="/images/avatar.png" alt="Art 1" />
          <p>transforming canvas into portals of introspection and wonder</p>
        </div>

        <div className={styles.artItem2}>
          <img src="/images/butters.png" alt="Art 2" />
          <p>
            invites viewers to pause, reflect, and lose themselves in stories told through color
          </p>
        </div>

        <div className={styles.artItem3}>
          <img src="/images/angel.png" alt="Art 3" />
          <p>
            With each piece, they craft a visual language that is both deeply personal and universally resonant.
          </p>
        </div>
      </div>
    </section>
  );
}
