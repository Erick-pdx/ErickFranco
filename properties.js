const showResumeButtons = document.querySelectorAll(".preview-resume");

for (const showResumeButton of showResumeButtons) {
  showResumeButton.addEventListener("click", (event) => {
    const popupSection = event.currentTarget.parentElement.nextElementSibling;
    popupSection.style.display = "block";
  });
}

const closeResumeButtons = document.querySelectorAll(".close-popup-button");

for (const closeResumeButton of closeResumeButtons) {
  closeResumeButton.addEventListener("click", (event) => {
    console.log(event.target);
    const popupSection =
      event.currentTarget.parentElement.parentElement.parentElement;
    popupSection.style.display = "none";
  });
}

function downloadResume() {
  const link = document.createElement("a");
  link.href = "/images/Erick Franco's Resume (1).pdf";
  link.download = "Erick Franco's Resume.pdf";
  link.click();
}

const contactForm = document.getElementById("Contact");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Form submitted successfully!");
});

contactForm.addEventListener("reset", () => {
  alert("Form reset!");
});
