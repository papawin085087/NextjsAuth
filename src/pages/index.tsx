import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Logout from "../components/Logout";
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Welcome to My Next.js Firebase App</h1>
      </div>
    </div>
  );
}
