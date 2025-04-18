import { useState } from 'react';
import styles from '@/styles/navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.nav}>
      <div className={styles.desktopNav}>
        <ul className={styles.navItems}>
          <li className={styles.active}><a href="#home">HOME</a></li>
          <li><a href="#selected">SELECTED WOR</a>K</li>
          <li><a href="#about">ABOUT ARTIST</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>

      <div className={styles.mobileNav}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>

        {menuOpen && (
          <ul className={styles.mobileMenu}>
            <li>HOME</li>
            <li>SELECTED WORK</li>
            <li>ABOUT ARTIST</li>
            <li>CONTACT</li>
          </ul>
        )}
      </div>
    </nav>
  );
}
