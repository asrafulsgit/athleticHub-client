
export function getDate(isoString) {
  const date = new Date(isoString);
  return date.toISOString().split("T")[0];
}
export function getTime(isoString) {
  const date = new Date(isoString);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });
}
  