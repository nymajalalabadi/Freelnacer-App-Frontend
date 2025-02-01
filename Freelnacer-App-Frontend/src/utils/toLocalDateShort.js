export default function toLocalDateShort(date) {
    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",});
  }
  