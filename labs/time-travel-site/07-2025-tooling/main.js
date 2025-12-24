import { toggleMessage } from "./toggle.js";

const btn = document.querySelector("#toggle");
const msg = document.querySelector("#msg");

btn.addEventListener("click", () => {
    toggleMessage(msg);
});