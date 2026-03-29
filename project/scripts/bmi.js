document.addEventListener("DOMContentLoaded", () => {
    const calculateBtn = document.querySelector("#calculate-btn");
    
    if (calculateBtn) {
        calculateBtn.addEventListener("click", () => {
            const weight = parseFloat(document.querySelector("#weight").value);
            const height = parseFloat(document.querySelector("#height").value);
            const resultDisplay = document.querySelector("#bmi-result");

            // Validation: Ensure numbers are positive
            if (!weight || !height || weight <= 0 || height <= 0) {
                resultDisplay.innerHTML = `<p style="color: red;">Please enter valid numbers.</p>`;
                return;
            }

            // Calculation: BMI = kg / m^2 (height converted to meters)
            const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
            let category = "";
            let color = "";

            // Conditional Branching for Categories
            if (bmi < 18.5) {
                category = "Underweight";
                color = "#2196F3"; // Blue
            } else if (bmi < 25) {
                category = "Healthy Weight";
                color = "#2E7D32"; // Green
            } else if (bmi < 30) {
                category = "Overweight";
                color = "#FBC02D"; // Yellow
            } else {
                category = "Obese";
                color = "#D32F2F"; // Red
            }

            // Output using Template Literals
            resultDisplay.innerHTML = `
                <div class="bmi-card" style="border-top: 5px solid ${color}; padding: 10px; background: #fff;">
                    <p>Your BMI is <strong>${bmi}</strong></p>
                    <p>Status: <span style="color: ${color}; font-weight: bold;">${category}</span></p>
                     <p class="disclaimer">Note: BMI is a general indicator and does not account for muscle mass or body composition.</p>

                </div>
            `;
        });
    }
});