// State
let visible = true;

//App entry point
function init() {
    // DOM references (inside init so they're checked + use together)
    const btn = document.querySelector("#toggle");
    const msg = document.querySelector("#msg");

    // Guard: stop if required elements are missing
    if (!btn || !msg) {
        console.warn("Required elements not found. Script stopped.");
        return;
    } 

    //Logic
    function updateMessageVisibility()  {
        msg.hidden = !visible;
    }

    function toggleVisibility() {
        visible = !visible;
        updateMessageVisibility();
    }

    // Event wiring
    btn.addEventListener("click", toggleVisibility);
}

// Start the app
init();