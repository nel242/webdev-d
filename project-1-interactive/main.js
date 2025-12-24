// main.js refactored
/*
// --- State (memory)
let visible = true; 

// --- DOM references (grab elements once) 
const btn = document.querySelector("#toggle");
const msg = document.querySelector("#msg");

// --- logic (pure-ish: takes state, returns next state + DOM  change)
btn.addEventListener("click", () => {
    visible = !visible; // Flipping the state. State update

    // --- Event (wires trigger to logic)
    msg.hidden = !visible; // Changes the page based on state
});
*/

/*
How your 4-line flow appears in this code (real production mapping)

Event → runs logic: btn.addEventListener("click", toggleMessage)

Logic → checks/uses state: inside toggleMessage(), it uses visible to decide what to do

State → decides behavior: visible = !visible determines whether the message should be shown/hidden next

Behavior → updates the DOM: msg.hidden = !visible
*/

// Production upgrade. The state to be derived from the DOM, which avoids
// mismatch if HTML changes.

const btn = document.querySelector("#toggle");
const msg = document.querySelector("#msg");

function toggleMessage() {
    console.log("Inside of function");
    const isHidden = msg.hidden // state read from DOM
    msg.hidden = !isHidden;     // behavior updates DOM
}

btn.addEventListener("click", toggleMessage);