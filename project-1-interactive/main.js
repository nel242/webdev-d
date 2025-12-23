let visible = true; //This is the state

const btn = document.querySelector("#toggle");
const msg = document.querySelector("#msg");

btn.addEventListener("click", () => {
    visible = !visible; // Flipping the state
    msg.hidden = !visible; // Changes the page based on state
});