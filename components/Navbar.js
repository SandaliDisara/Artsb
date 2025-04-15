import styles from '@/styles/navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navItems}>
        <li className={styles.active}>HOME</li>
        <li>SELECTED WORK</li>
        <li>ABOUT ARTIST</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
}
