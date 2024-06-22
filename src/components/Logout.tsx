// components/Logout.tsx
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

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
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
