// Scroll reveal animations
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(section => {
  observer.observe(section);
});
function openLightbox(img) {
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = img.src;
}
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
function openProject(projectId) {
  document.getElementById("portfolio").style.display = "none"; // hide portfolio
  document.querySelectorAll(".project-detail").forEach(sec => sec.style.display = "none"); // hide all details
  document.getElementById(projectId).style.display = "block"; // show selected project
}

function goHome() {
  document.querySelectorAll(".project-detail").forEach(sec => sec.style.display = "none"); // hide details
  document.getElementById("portfolio").style.display = "block"; // show portfolio
}
function zoomImage(img) {
  // If already zoomed, remove zoom
  if (img.classList.contains("zoomed")) {
    img.classList.remove("zoomed");
  } else {
    // Remove zoom from other images
    document.querySelectorAll(".portfolio-gallery img").forEach(el => el.classList.remove("zoomed"));
    img.classList.add("zoomed");
  }
}
