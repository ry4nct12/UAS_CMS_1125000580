"use client";

import styles from "../style/navbar.module.css";
import { useRouter } from "next/navigation";

export default function Navabout() {
  const router = useRouter();

  return (
    <nav className={styles.navabout}>
      <div className={styles.logo} onClick={() => router.push("/")}>
        IJENTRAVEL
      </div>

      <ul className={styles.navLinks}>
        <li onClick={() => router.push("/")}>Home</li>
        <li onClick={() => router.push("/card")}>Paket</li>
        <li onClick={() => router.push("/about")}>Tentang</li>
        <li onClick={() => router.push("/contact")}>Kontak</li>
      </ul>
    </nav>
  );
}

