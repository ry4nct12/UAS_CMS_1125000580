"use client";

import { useState } from "react";
import Link from "next/link";

export default function BookingCard({ booking }) {
    const [showDelete, setShowDelete] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        setLoading(true);

        try {
            await fetch(
                `http://localhost:1337/api/bookings/${booking.documentId}`,
                { method: "DELETE" }
            );

            window.location.reload(); // refresh list
        } catch (err) {
            alert("Gagal menghapus booking");
            setLoading(false);
        }
    };

    return (
        <>
            <div style={styles.card}>
                {/* Header */}
                <div style={styles.header}>
                    <div>
                        <p style={styles.name}>{booking.customer_name}</p>
                        <p style={styles.email}>{booking.customer_email}</p>
                    </div>

                    <span
                        style={{
                            ...styles.status,
                            ...(booking.status_trx === "paid"
                                ? styles.paid
                                : booking.status_trx === "pending"
                                ? styles.pending
                                : styles.unpaid),
                        }}
                    >
                        {booking.status_trx}
                    </span>
                </div>

                {/* Body */}
                <div style={styles.body}>
                    <p>
                        <strong>Kode Booking:</strong> {booking.booking_code}
                    </p>
                    <p>
                        <strong>Tanggal:</strong> {booking.booking_date}
                    </p>
                    <p style={styles.price}>
                        Rp {booking.total_price.toLocaleString("id-ID")}
                    </p>
                </div>

                {/* Actions */}
                <div style={styles.actions}>
                    <Link href={`/booking/${booking.documentId}`} style={styles.button}>
                        Detail
                    </Link>

                    <Link
                        href={`/booking/${booking.documentId}/edit`}
                        style={{ ...styles.button, ...styles.edit }}
                    >
                        Edit
                    </Link>

                    <button
                        onClick={() => setShowDelete(true)}
                        style={{ ...styles.button, ...styles.delete }}
                    >
                        Delete
                    </button>
                </div>
            </div>

            {/* ===== POPUP DELETE ===== */}
            {showDelete && (
                <div style={styles.overlay}>
                    <div style={styles.modal}>
                        <h4 style={{ marginBottom: 8 }}>Hapus Booking?</h4>
                        <p style={{ fontSize: 14 }}>
                            Data booking <strong>{booking.booking_code}</strong> akan dihapus permanen.
                        </p>

                        <div style={styles.modalActions}>
                            <button
                                onClick={() => setShowDelete(false)}
                                style={styles.cancel}
                            >
                                Batal
                            </button>

                            <button
                                onClick={handleDelete}
                                disabled={loading}
                                style={styles.confirm}
                            >
                                {loading ? "Menghapus..." : "Hapus"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

/* =========================
   STYLE OBJECT
   ========================= */
const styles = {
    card: {
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        padding: "24px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.06)",
    },

    header: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "16px",
    },

    name: {
        fontSize: "18px",
        fontWeight: "600",
        color: "#0f172a",
    },

    email: {
        fontSize: "14px",
        color: "#64748b",
    },

    status: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "12px",
        padding: "6px 12px",
        borderRadius: "15px",
        fontWeight: "600",
        textTransform: "uppercase",
    },

    paid: { backgroundColor: "#dcfce7", color: "#166534" },
    pending: { backgroundColor: "#FEF9C3", color: "#854D0E" },
    unpaid: { backgroundColor: "#fee2e2", color: "#991b1b" },

    body: {
        fontSize: "14px",
        color: "#334155",
        lineHeight: "1.6",
    },

    price: {
        marginTop: "8px",
        fontWeight: "700",
        color: "#0284c7",
    },

    actions: {
        display: "flex",
        gap: "12px",
        marginTop: "20px",
    },

    button: {
        fontSize: "13px",
        fontWeight: "600",
        padding: "8px 18px",
        borderRadius: "999px",
        border: "none",
        cursor: "pointer",
        backgroundColor: "#e0f2fe",
        color: "#0369a1",
        textDecoration: "none",
    },

    edit: {
        backgroundColor: "#ffedd5",
        color: "#9a3412",
    },

    delete: {
        backgroundColor: "#fee2e2",
        color: "#991b1b",
    },

    /* ===== MODAL ===== */
    overlay: {
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
    },

    modal: {
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "12px",
        width: "320px",
    },

    modalActions: {
        display: "flex",
        justifyContent: "flex-end",
        gap: "10px",
        marginTop: "16px",
    },

    cancel: {
        padding: "6px 14px",
        borderRadius: "8px",
        border: "1px solid #d1d5db",
        background: "#fff",
        cursor: "pointer",
    },

    confirm: {
        padding: "6px 14px",
        borderRadius: "8px",
        border: "none",
        background: "#dc2626",
        color: "#fff",
        cursor: "pointer",
    },
};
