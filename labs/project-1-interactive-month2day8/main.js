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
    
    // UI renderer (define first)
    function render()   {
        msg.hidden = !visible;
        btn.textContent = visible ? "Hide message" : "Show message";
        status.textContent = visible ? "Status: Visible" : "Status: Hidden";
    }

    // logic
    function toggleVisibility() {
        visible = !visible;
        render();
    }

    // Initialization. call it here, after definition and after guard
    render();

    // Event wiring
    btn.addEventListener("click", toggleVisibility);
}

// Start the app
init();