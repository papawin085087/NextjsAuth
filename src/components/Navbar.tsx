import Link from 'next/link';
import Logout from './Logout';
import { useAuth } from '../AuthContext';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  const { user } = useAuth();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          MyStore
        </Link>
        <ul className={styles.navLinks}>
          <li className={styles.navItem}>
            <Link href="/products" className={styles.navLink}>
              Products
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/cart" className={styles.navLink}>
              Cart
            </Link>
          </li>
          {!user ? (
            <>
              <li className={styles.navItem}>
                <Link href="/login" className={styles.navLink}>Login</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/register" className={styles.navLink}>Register</Link>
              </li>
            </>
          ) : (
            <li className={styles.navItem}>
              <Logout />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
