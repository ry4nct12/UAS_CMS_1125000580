export default function StatusBadge({ status }) {
  const styles = {
    paid: "bg-green-100 text-green-700",
    pending: "bg-orange-100 text-orange-700",
    cancel: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${
        styles[status] || "bg-slate-100 text-slate-600"
      }`}
    >
      {status?.toUpperCase()}
    </span>
  );
}
