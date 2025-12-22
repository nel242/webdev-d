const btn = document.querySelector("#toggle");
const msg = document.querySelector("#msg");

btn.addEventListener("click", () => {
  msg.hidden = !msg.hidden;
});
