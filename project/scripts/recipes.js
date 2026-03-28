// Sample Data Array
const recipes = [
    { name: "Green Smoothie", category: "breakfast", desc: "Energy for the day.", img: "images/smoothie.jpg" },
    { name: "Quinoa Bowl", category: "lunch", desc: "Protein-packed lunch.", img: "images/quinoa.jpg" },
    { name: "Salmon & Asparagus", category: "dinner", desc: "Light and nutritious.", img: "images/salmon.jpg" },
    { name: "Avocado Toast", category: "breakfast", desc: "Healthy fats.", img: "images/avocado.jpg" }
];

document.addEventListener("DOMContentLoaded", () => {
    const recipeGrid = document.querySelector("#recipe-grid");
    const filterButtons = document.querySelectorAll(".filter-btn");

    // Initial Display: Show all
    renderRecipes(recipes);

    // Filter Button Logic
    filterButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            // Remove active class from all, add to clicked
            filterButtons.forEach(btn => btn.classList.remove("active"));
            e.target.classList.add("active");

            const filter = e.target.dataset.category;

            // Conditional filtering using Array Method
            const filteredData = filter === "all" 
                ? recipes 
                : recipes.filter(item => item.category === filter);

            renderRecipes(filteredData);
        });
    });

    function renderRecipes(data) {
        recipeGrid.innerHTML = ""; // Clear existing cards
        
        data.forEach(recipe => {
            // Using Template Literals for the 3x1 Card structure
            const cardHTML = `
                <article class="recipe-card">
                    <img src="${recipe.img}" alt="${recipe.name}" loading="lazy">
                    <div class="recipe-info">
                        <span class="category-tag">${recipe.category}</span>
                        <h3>${recipe.name}</h3>
                        <p>${recipe.desc}</p>
                    </div>
                </article>
            `;
            recipeGrid.innerHTML += cardHTML;
        });
    }
});