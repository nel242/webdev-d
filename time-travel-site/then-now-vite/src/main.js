// Vite is being used only as a dev server for now.


import { flip } from "./logic.js";

let visible = true;

const btn = document.querySelector("#toggle");
const msg = document.querySelector("#msg");

console.log("main.js loaded");
console.log( {btn, msg} );

btn.addEventListener("click", () => {
    visible = flip(visible);
    msg.hidden = !visible;
});