import { useEffect, useRef } from 'react';
import styles from '@/styles/hero.module.css';
import Link from 'next/link';

export default function HeroSection() {
  const cursorRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const section = sectionRef.current;

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const showCursor = () => cursor && (cursor.style.opacity = '1');
    const hideCursor = () => cursor && (cursor.style.opacity = '0');

    if (section) {
      section.addEventListener('mousemove', moveCursor);
      section.addEventListener('mouseenter', showCursor);
      section.addEventListener('mouseleave', hideCursor);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', moveCursor);
        section.removeEventListener('mouseenter', showCursor);
        section.removeEventListener('mouseleave', hideCursor);
      }
    };
  }, []);

  return (
    <section className={styles.hero} ref={sectionRef} id="home">
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
              <Link href="/artwork/the-night-she">
              <img src="/images/avatar.webp" alt="Art 1" />
              </Link>
              <Link href="/artwork/day-dream">
              <img src="/images/butters.webp" alt="Art 2" />
              </Link>
            
              <Link href="/artwork/frog-peace">
              <img src="/images/frog.webp" alt="Art 3" />
              </Link>
              
              <Link href="/artwork/iam-free">
              <img src="/images/angel.webp" alt="Art 4" />
              </Link>
             
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Cursor (hidden by default) */}
      <div className={styles.scrollCursor} ref={cursorRef}>Scroll</div>
    </section>
  );
}
