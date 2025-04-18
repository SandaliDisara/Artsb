import styles from '@/styles/aboutArtist.module.css';

export default function AboutArtist() {
  return (
    <section className={styles.section} id="about">
    <h2 className={styles.title}>ABOUT ARTIST</h2>
    <p className={styles.description}>
    I am a Sri Lankan artist, gradually carving my space in the creative industry
    through passion, persistence, and a deep love for visual storytelling.
    From a young age, art has been my safe space—what began as playful sketches quickly
    became a lifelong companion. Without formal training, I developed my skills through years
    of practice, observation, and exploration, allowing my creativity to grow naturally.
    As I experimented with different forms, I discovered the quiet magic that exists between
    emotion and creation, leading me to the surreal, symbolic style I embrace today.
    Inspired by nature, spirit, and the human experience, my work is deeply personal
    yet open for interpretation, inviting others to find connection, emotion, and imagination within each piece.
    </p>
  
    <div className={styles.imageContainer}>
  <img src="/images/bimasha.png" alt="Artist" className={styles.artistImage} />
  <div className={styles.fullNameOverlay}>
    BIMASHA VIDANAGAMA
  </div>
</div>
  </section>
  
  );
}
