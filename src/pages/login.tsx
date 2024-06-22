// pages/login.tsx
import Login from '../components/Login';
import Navbar from '../components/Navbar';

const LoginPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Login />
    </div>
  );
}

export default LoginPage;
