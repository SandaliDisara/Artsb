import styles from '@/styles/navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.active}>Home</li>
        <li>Selected Work</li>
        <li>About Artist</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
