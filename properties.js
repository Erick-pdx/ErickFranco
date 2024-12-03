const showResumeButtons = document.querySelectorAll(".download-resume");

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
    const popupSection = event.currentTarget.parentElement.parentElement.parentElement;
    popupSection.style.display = "none";
  });
}
