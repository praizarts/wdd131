// Data Object Array (Objects & Arrays)
const projectData = [
  {
    title: "Balanced Nutrition",
    text: "Eating a balanced diet with fruits, vegetables, proteins, and whole grains helps your body function properly and boosts your energy levels throughout the day.",
    footer: "Tip: Eat more natural foods daily",
    image: "images/fruits-2.jpg"
  },
  {
    title: "Regular Exercise",
    text: "Engaging in physical activity like walking, jogging, or home workouts for at least 30 minutes a day improves heart health and keeps your body fit.",
    footer: "Tip: Stay active every day",
    image: "images/exercise.jpg"
  },
  {
    title: "Stay Hydrated",
    text: "Drinking enough water supports digestion, improves skin health, and helps regulate body temperature. Aim for at least 6–8 glasses daily.",
    footer: "Tip: Carry a water bottle",
    image: "images/hydrated.jpg"
  },
  {
    title: "Quality Sleep",
    text: "Getting 7–9 hours of sleep each night allows your body to rest, repair, and recharge, improving focus and overall well-being.",
    footer: "Tip: Maintain a sleep routine",
    image: "images/sleep.jpg"
  },
  {
    title: "Mental Wellness",
    text: "Managing stress through relaxation, meditation, or hobbies helps maintain emotional balance and improves overall mental health.",
    footer: "Tip: Take breaks and relax",
    image: "images/mental.jpg"
  },
  {
    title: "Personal Hygiene",
    text: "Maintaining good hygiene like regular handwashing and bathing prevents infections and promotes overall health and confidence.",
    footer: "Tip: Clean habits matter",
    image: "images/clean.jpg"
  }
];

// Initialize Page
document.addEventListener("DOMContentLoaded", () => {
    updateVisitStats();
    renderCards(projectData);
});

// LocalStorage Logic 
function updateVisitStats() {
    const messageElement = document.querySelector("#visit-message");
    const lastVisit = window.localStorage.getItem("last-visit-date");
    const now = Date.now();

    if (!lastVisit) {
        messageElement.textContent = `Welcome! This is your first time here.`;
    } else {
        const daysSince = Math.floor((now - Number(lastVisit)) / 86400000);
        messageElement.textContent = `Welcome back! It has been ${daysSince} day(s) since your last visit.`;
    }
    
    window.localStorage.setItem("last-visit-date", now.toString());
}

// DOM Manipulation & Template Literals 
const container = document.getElementById("cardContainer");

projectData.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${item.image}" alt="${item.title}">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.text}</p>
    </div>
    <div class="card-footer">
      <small>${item.footer}</small>
    </div>
  `;

  container.appendChild(card);
});

// Get Dates Logic 
document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;

