// Sample Data Array
const recipes = [
    { name: "Akara (Bean Cakes) & Pap (Akamu) or custard", 
      category: "breakfast", 
      desc: "High protein and carbs", 
      calories: 350,
      img: "images/akara2.jpg" },
    { name: "Jollof Rice with Mixed Vegetables & Grilled Fish/Chicken", 
      category: "lunch", 
      desc: " Balanced carbohydrates and protein", 
      calories: 450,
      img: "images/jollof.jpg" },
    { name: "Eba/Wheat/Fufu with Okra or Efo Riro (Spinach Soup)", 
      category: "dinner", 
      desc: " Fiber-dense and low-calorie if prepared with moderate oil", 
      calories: 300,
      img: "images/eba2.jpg" },
    { name: "Moi Moi (Steamed Bean Pudding) & Oatmeal", 
      category: "breakfast", 
      desc: "Fiber-rich and filling", 
      calories: 250,
      img: "images/moi-moi.jpg" },
    { name: "Pounded Yam with Egusi Soup", 
      category: "dinner", 
      desc: "High in carbohydrates and fats, consume in moderation",
      calories: 400,
      img: "images/pounded.jpg" },
    { name: "Fried Rice with Grilled Chicken", 
      category: "lunch", 
      desc: "Carbohydrate-heavy, best with a side of vegetables", 
      calories: 500,
      img: "images/friedrice.jpg" },
    { name: "Yam Porridge (Asaro) with Vegetables", 
      category: "dinner", 
      desc: "Carbohydrate-rich but can be balanced with added vegetables",
      calories: 350,
      img: "images/yam-porridge.jpg" },
    { name: "Boiled Yam/Plantain with Scrambled Eggs & Vegetables", 
      category: "breakfast", 
      desc: "Low in calories but can be high in carbohydrates, best with a protein-rich side", 
      calories: 300,
      img: "images/yam.jpg" },
      {
        name: "Beans and Corn Porridge (Adalu)",
        category: "lunch",
        desc: "High in carbohydrates and protein, but can be calorie-dense if prepared with a lot of oil",
        calories: 350,
        img: "images/beans-corn.jpg"
      }
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
        recipeGrid.innerHTML = ""; 
        
        data.forEach(recipe => {
            // Using Template Literals for the 3x1 Card structure
            const cardHTML = `
                <article class="recipe-card">
                    <img src="${recipe.img}" alt="${recipe.name}" loading="lazy">
                    <div class="recipe-info">
                        <span class="category-tag">${recipe.category}</span>
                        <h3>${recipe.name}</h3>
                        <p>${recipe.desc}</p>
                        <p><strong>Calories:</strong> ${recipe.calories}</p>
                    </div>
                </article>
            `;
            recipeGrid.innerHTML += cardHTML;
        });
    }
});