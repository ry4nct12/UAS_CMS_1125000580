import BookingCard from "../components/BookingCard";
import styles from "./bookings.module.css";

export default async function BookingsPage() {
  const res = await fetch("http://localhost:1337/api/bookings", {
    cache: "no-store",
  });

  const json = await res.json();
  const bookings = json.data;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>Daftar Booking</h1>
            <p className={styles.subtitle}>
              Data pemesanan perjalanan pelanggan IJENTRAVEL
            </p>
          </div>

          <a href="/booking/create" className={styles.addButton}>
            + Booking Baru
          </a>
        </div>

        {bookings.length === 0 ? (
          <div className={styles.empty}>
            <p><strong>Belum ada booking</strong></p>
            <p>Silakan tambahkan booking baru terlebih dahulu</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {bookings.map((item) => (
              <BookingCard key={item.id} booking={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
