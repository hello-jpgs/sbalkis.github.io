import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/short-films">Short Films</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;