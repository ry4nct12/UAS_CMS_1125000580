"use client";
import { useState } from "react";
import styles from "./../style/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok, faFacebook, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Terima kasih ${formData.name}, ulasan Anda sudah terkirim!`);
    setFormData({ name: "", message: "" });
  }

  return (
    <footer className={styles.footer}>

      <div className={styles.left}>
        <h2 className={styles.title}>IJENTRAVEL</h2>
        <p className={styles.desc}>
          Jelajahi Banyuwangi dengan perjalanan yang nyaman, aman, dan penuh kesan. Armada terbaik dan sopir profesional siap menemani setiap langkah liburan Anda!
        </p>
        <div className={styles.socialContainer}>
          <a href="https://www.instagram.com/rynctr/" target="_blank" className={styles.social}>
            <i className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram} /></i>
          </a>

          <a href="https://tiktok.com/" target="_blank" className={styles.social}>
            <i className="fab fa-tiktok"><FontAwesomeIcon icon={faTiktok} /></i>
          </a>

          <a href="https://facebook.com/" target="_blank" className={styles.social}>
            <i className="fab fa-facebook"><FontAwesomeIcon icon={faFacebook} /></i>
          </a>

          <a href="https://wa.me/6285755416452" target="_blank" className={styles.social}>
            <i className="fab fa-whatsapp"><FontAwesomeIcon icon={faWhatsapp} /></i>
          </a>

          <a href="https://youtube.com/" target="_blank" className={styles.social}>
            <i className="fab fa-youtube"><FontAwesomeIcon icon={faYoutube} /></i>
          </a>
        </div>
      </div>

      <div className={styles.reviewCard}>
        <h3 className={styles.reviewTitle}>Ulasan</h3>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Nama Anda</label>
            <input
              type="text"
              name="name"
              className={styles.input}
              placeholder="Masukkan nama Anda"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Ulasan</label>
            <textarea
              name="message"
              className={styles.textarea}
              placeholder="Tulis ulasan Anda..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.button}>
            Kirim Ulasan
          </button>
        </form>
      </div>
    </footer>
  );
}
