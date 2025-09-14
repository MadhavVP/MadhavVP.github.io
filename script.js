document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });

    // Close menu after clicking (on mobile)
    document.querySelector("nav ul").classList.remove("show");
  });
});

// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

const coursesList = document.querySelector('.courses-list');
const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Find the corresponding courses list in the same card
    const card = btn.closest('.academic-card');
    const coursesList = card.querySelector('.courses-list');

    // Toggle the show class
    coursesList.classList.toggle('show');

    // Update aria-expanded for accessibility
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !expanded);

    // Optionally rotate the chevron
    if (!expanded) {
      btn.querySelector('i').style.transform = 'rotate(180deg)';
    } else {
      btn.querySelector('i').style.transform = 'rotate(0deg)';
    }
  });
});