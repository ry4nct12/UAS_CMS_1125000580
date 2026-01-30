"use client";

import styles from './style/home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faMoneyBillWave, faScrewdriverWrench, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/navigation';
import Navbar from './components/navbar';
import Footer from "./components/footer";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Navbar />

      <main className={styles.main}>

        <section className={styles.hero}>
          <div className={styles.overlay}>
            <h4 className={styles.subtitle}>IJENTRAVEL.CO.ID</h4>
            <h1 className={styles.title}>SOLUSI PERJALANAN WISATA ANDA DI BANYUWANGI</h1>
            <button
              className={styles.cta}
              onClick={() => router.push("/booking")}
            >
              BOOK NOW
            </button>
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.featureCard}>
            <FontAwesomeIcon icon={faCar} className="text-4xl text-blue-600 mr-4" />
            <h3>Driver Profesional</h3>
            <button>LEARN MORE</button>
          </div>

          <div className={styles.featureCard}>
            <FontAwesomeIcon icon={faMoneyBillWave} className="text-4xl text-blue-600 mr-4" />
            <h3>Harga Terbaik</h3>
            <button>LEARN MORE</button>
          </div>

          <div className={styles.featureCard}>
            <FontAwesomeIcon icon={faScrewdriverWrench} className="text-4xl text-blue-600 mr-4" />
            <h3>Armada Terawat</h3>
            <button>LEARN MORE</button>
          </div>

          <div className={styles.featureCard}>
            <FontAwesomeIcon icon={faUserTie} className="text-4xl text-blue-600 mr-4" />
            <h3>Respon Cepat</h3>
            <button>LEARN MORE</button>
          </div>
        </section>
        <Footer />

      </main>
    </>
  );
}
