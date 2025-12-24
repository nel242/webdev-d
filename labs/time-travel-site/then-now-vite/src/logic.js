export function flip(value) {
  console.log("flip called, value:", value);
  msg.hidden = !msg.hidden;
  return !value;
}