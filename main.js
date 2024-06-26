let homeButton = document.getElementById("home");
let destinationButton = document.getElementById("destination");
let crewButton = document.getElementById("crew");
let techButton = document.getElementById("tech");
console.log(crewButton);

homeButton.addEventListener("click", () => {
  window.open("http://127.0.0.1:5500/index.html", "_blank");
});
destinationButton.addEventListener("click", () => {
  window.open("http://127.0.0.1:5500/destination.html", "_blank");
});
crewButton.addEventListener("click", () => {
  window.open("http://127.0.0.1:5500/crew.html", "_blank");
});
techButton.addEventListener("click", () => {
  window.open("http://127.0.0.1:5500/tech.html", "_blank");
});
