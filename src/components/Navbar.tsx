// components/Navbar.tsx
import Link from 'next/link';
import Logout from './Logout';
import { useAuth } from '../AuthContext';

const Navbar: React.FC = () => {
  const { user } = useAuth();

  return (
    <nav className="navbar">
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      {!user ? (
        <>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </>
      ) : (
        <Logout />
      )}
    </nav>
  );
}

export default Navbar;
