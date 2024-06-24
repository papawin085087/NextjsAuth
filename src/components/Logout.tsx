import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import styles from '../styles/Navbar.module.css';

const Logout: React.FC = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logout successful");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
