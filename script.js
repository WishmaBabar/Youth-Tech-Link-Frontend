// Youth Tech Link - script.js

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
}

// Optional: Auto-close nav on link click (for mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("show");
  });
});
