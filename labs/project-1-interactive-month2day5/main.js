let visible = true;

// DOM references
const btn = document.querySelector("#toggle");
const msg = document.querySelector("#msg");

// App entry point
 function init() {
    
    // Guard: stop if required elements are missing
    if (!btn || !msg)   {
        console.warn("Required elements not found. Script stopped.");
        return;
    }
}

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

//Start the app
init();