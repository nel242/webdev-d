// State
let visible = true;

//App entry point
function init() {
    // DOM references (inside init so they're checked + use together)
    const btn = document.querySelector("#toggle");
    const msg = document.querySelector("#msg");
    const status = document.querySelector("#status");

    // Guard: stop if required elements are missing
    if (!btn || !msg || !status) {
        console.warn("Required elements not found. Script stopped.");
        return;
    } 
    
    //Logic
    function updateMessageVisibility()  {
        msg.hidden = !visible;
    }

    function updateButtonText() {
        btn.textContent = visible ? "Hide message" : "Show message";
    }

    function updateStatusText() {
        status.textContent = visible ? "Status: Visible" : "Status: Hidden";
    }

    function toggleVisibility() {
        visible = !visible;
        updateMessageVisibility();
        updateButtonText();
        updateStatusText();
    }

    // update the button text
    updateButtonText();
    
    // update the status text
    updateStatusText();

    // Event wiring
    btn.addEventListener("click", toggleVisibility);
}

// Start the app
init();