"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./create.module.css";

export default function CreateBookingPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const payload = {
      customer_name: form.customer_name.value,
      customer_email: form.customer_email.value,
      booking_date: form.booking_date.value,
      total_price: Number(form.total_price.value),
      status_trx: "pending",
      booking_code: `BOOK-${Date.now()}`,
    };

    try {
      const res = await fetch("http://localhost:1337/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: payload }),
      });

      if (!res.ok) throw new Error("Gagal membuat booking");

      alert("Booking berhasil dibuat 🙌");
      router.push("/booking");
    } catch (error) {
      alert("Terjadi kesalahan saat menyimpan data");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Buat Booking Baru</h1>
        <p className={styles.subtitle}>
          Silakan isi data pemesanan perjalanan Anda
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Nama Lengkap</label>
            <input
              name="customer_name"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input
              name="customer_email"
              type="email"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>
              Tanggal Keberangkatan
            </label>
            <input
              name="booking_date"
              type="date"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Total Harga</label>
            <input
              name="total_price"
              type="number"
              required
              className={styles.input}
            />
          </div>

          <button
            disabled={loading}
            className={styles.button}
          >
            {loading ? "Menyimpan..." : "Booking Sekarang"}
          </button>
        </form>
      </div>
    </div>
  );
}
