
// State (memory)
let visible = true;

// DOM references
const btn = document.querySelector("#toggle");
const msg = document.querySelector("#msg");

// Logic (what should happen)
function updateMessageVisibility()  {
    msg.hidden = !visible;
}

function toggleVisibility() {
    visible = !visible;
    updateMessageVisibility();
}

// Event wiring (when it happens)
btn.addEventListener("click", toggleVisibility);