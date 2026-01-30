export async function getBookings() {
  const res = await fetch("http://localhost:1337/api/bookings", {
    cache: "no-store",
  });
  return res.json();
}
