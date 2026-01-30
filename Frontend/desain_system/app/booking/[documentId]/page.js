import Link from "next/link";
import styles from "./detail.module.css";

async function getBooking(documentId) {
  const res = await fetch(
    `http://localhost:1337/api/bookings/${documentId}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const json = await res.json();

  if (!json.data) return null;

  return json.data; // ✅ langsung return object
}




export default async function BookingDetailPage({ params }) {
  const booking = await getBooking(params.documentId);

  if (!booking) {
    return (
      <div className={styles.page}>
        <div className={styles.card}>
          <p style={{ textAlign: "center" }}>
            Data booking tidak ditemukan
          </p>
        </div>
      </div>
    );
  }

  const statusClass =
    booking.status_trx === "paid"
      ? styles.paid
      : booking.status_trx === "pending"
      ? styles.pending
      : styles.unpaid;

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Detail Booking</h1>
        <p className={styles.subtitle}>
          Informasi lengkap pemesanan perjalanan
        </p>

        <div className={styles.list}>
          <div className={styles.item}>
            <span className={styles.label}>Nama</span>
            <span className={styles.value}>
              {booking.customer_name}
            </span>
          </div>

          <div className={styles.item}>
            <span className={styles.label}>Email</span>
            <span className={styles.value}>
              {booking.customer_email}
            </span>
          </div>

          <div className={styles.item}>
            <span className={styles.label}>Kode Booking</span>
            <span className={styles.value}>
              {booking.booking_code}
            </span>
          </div>

          <div className={styles.item}>
            <span className={styles.label}>
              Tanggal Keberangkatan
            </span>
            <span className={styles.value}>
              {booking.booking_date}
            </span>
          </div>

          <div className={styles.item}>
            <span className={styles.label}>Total Harga</span>
            <span className={styles.value}>
              Rp {booking.total_price.toLocaleString("id-ID")}
            </span>
          </div>

          <div className={styles.item}>
            <span className={styles.label}>Status</span>
            <span className={`${styles.status} ${statusClass}`}>
              {booking.status_trx}
            </span>
          </div>
        </div>

        <div className={styles.actions}>
          <Link href={`/booking/${booking.documentId}/edit`} className={`${styles.button} ${styles.edit}`}>
            Edit
          </Link>

          <Link href="/booking" className={`${styles.button} ${styles.back}`}>
            Kembali
          </Link>
        </div>
      </div>
    </div>
  );
}
