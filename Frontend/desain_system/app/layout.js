import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/app/style/global.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/lib/fontawesome";
import { Poppins } from 'next/font/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300','400','500','600','700']
});

export const metadata = {
  title: "IJENTRAVEL",
  description: "Solusi Perjalanan Wisata Anda di Banyuwangi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}


