document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.querySelector("#add-glass");
    const resetBtn = document.querySelector("#reset-hydration");
    
    // Initialize display on load
    updateHydrationDisplay();

    // Event Listeners (DOM Interaction)
    addBtn.addEventListener("click", () => {
        let count = getStoredCount();
        if (count < 20) { // Practical limit
            count++;
            localStorage.setItem("glassCount", count);
            updateHydrationDisplay();
        }
    });

    resetBtn.addEventListener("click", () => {
        localStorage.setItem("glassCount", 0);
        updateHydrationDisplay();
    });
});

// Helper function to get data (LocalStorage)
function getStoredCount() {
    const stored = localStorage.getItem("glassCount");
    // Using Number() to avoid "any" and ensure correct type
    return stored ? Number(stored) : 0;
}

// Update the UI (Template Literals & DOM Modification)
function updateHydrationDisplay() {
    const count = getStoredCount();
    const countText = document.querySelector("#glass-count");
    const glassContainer = document.querySelector("#glass-container");
    
    // Update text
    countText.textContent = `${count} / 8 Glasses`;
    
    // Create visual glasses using a loop and Template Literals
    let glassesHTML = "";
    for (let i = 0; i < count; i++) {
        glassesHTML += `<span class="glass-icon">💧</span>`;
    }
    
    glassContainer.innerHTML = glassesHTML;

    // Optional: Add a "Goal Reached" message (Conditional Branching)
    if (count >= 8) {
        countText.classList.add("goal-reached");
        countText.innerHTML = `${count} / 8 - Goal Reached! 🎉`;
    } else {
        countText.classList.remove("goal-reached");
    }
}

