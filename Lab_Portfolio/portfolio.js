// Show more projects when the button is clicked
const showMoreBtn = document.getElementById("show-more-btn");
const extraProjects = document.getElementById("extra-projects");
showMoreBtn.addEventListener("click", function () {
  // Toggle display of the extra projects
  if (extraProjects.style.display === "none") {
    extraProjects.style.display = "block";
    showMoreBtn.textContent = "Show Less";
  } else {
    extraProjects.style.display = "none";
    showMoreBtn.textContent = "Show More";
  }
});
// Form submission functionality
const contactForm = document.getElementById("contact-form");
const formResponse = document.getElementById("form-response");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // Show a thank-you message
  formResponse.style.display = "block";
});
