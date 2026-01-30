"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./edit.module.css";

export default function EditBookingPage({ params }) {
    const router = useRouter();

    // ✅ Next.js 15: unwrap params
    const { booking_code } = React.use(params);

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(null);
    const { documentId } = React.use(params);

    console.log("PARAMS:", params);
console.log("documentId:", documentId);

    // const [bookingDocumentId, setBookingDocumentId] = useState(null);

    // 🔹 Ambil data berdasarkan booking_code
useEffect(() => {
  async function fetchBooking() {
    const res = await fetch(
      `http://localhost:1337/api/bookings/${documentId}`
    );

    const json = await res.json();

    if (!json.data) {
      alert("Booking tidak ditemukan ❌");
      router.push("/booking");
      return;
    }

    const booking = json.data;

    setFormData({
      booking_code: booking.booking_code,
      customer_name: booking.customer_name,
      customer_email: booking.customer_email,
      booking_date: booking.booking_date,
      total_price: booking.total_price,
      status_trx: booking.status_trx,
    });
  }

  fetchBooking();
}, [documentId]);


    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
    

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        try {
            let payload = {customer_name: formData.customer_name,
                            customer_email: formData.customer_email,
                            booking_code: formData.booking_code, // FLAG UTAMA
                            booking_date: formData.booking_date,
                            total_price: Number(formData.total_price) || 0,
                            status_trx: formData.status_trx}
const res = await fetch(
  `http://localhost:1337/api/bookings/${documentId}`,
  {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: payload }),
  }
);

if (!res.ok) throw new Error();


            alert("Booking berhasil diperbarui ✅");
            router.push(`/booking`);
        } catch {
            alert("Gagal memperbarui booking ❌");
        } finally {
            setLoading(false);
        }
    }

    if (!formData) {
        return (
            <div className={styles.page}>
                <div className={styles.card}>
                    <p style={{ textAlign: "center" }}>Memuat data...</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <div className={styles.card}>
                <h1 className={styles.title}>Edit Booking</h1>
                <p className={styles.subtitle}>
                    Perbarui data pemesanan perjalanan
                </p>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.field}>
                        <label className={styles.label}>Kode Booking</label>
                        <input
                            name="booking_code"
                            value={formData.booking_code || ""}
                            onChange={handleChange}
                            className={styles.input}
                            readOnly
                        />
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label}>Nama</label>
                        <input
                            name="customer_name"
                            value={formData.customer_name || ""}
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label}>Email</label>
                        <input
                            name="customer_email"
                            type="email"
                            value={formData.customer_email || ""}
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label}>Tanggal</label>
                        <input
                            name="booking_date"
                            type="date"
                            value={formData.booking_date || ""}
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label}>Total Harga</label>
                        <input
                            name="total_price"
                            type="number"
                            value={formData.total_price || 0}
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label}>Status</label>
                        <select
                            name="status_trx"
                            value={formData.status_trx || "pending"}
                            onChange={handleChange}
                            className={styles.select}
                        >
                            <option value="pending">Pending</option>
                            <option value="paid">Paid</option>
                            <option value="unpaid">Unpaid</option>
                        </select>
                    </div>

                    <div className={styles.actions}>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`${styles.button} ${styles.save}`}
                        >
                            {loading ? "Menyimpan..." : "Simpan"}
                        </button>

                        <button
                            type="button"
                            onClick={() => router.back()}
                            className={`${styles.button} ${styles.cancel}`}
                        >
                            Batal
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
