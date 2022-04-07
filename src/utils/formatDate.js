export default function formatDate(ISOString) {
  let dateTime = new Date(ISOString);
  let date = dateTime.toLocaleString("en-GB").slice(0, -3);
  return date;
}
