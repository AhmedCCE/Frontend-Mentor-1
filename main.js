// All pages
let homeButton = document.getElementById("home");
let destinationButton = document.getElementById("destination");
let crewButton = document.getElementById("crew");
let techButton = document.getElementById("tech");

// homeButton.addEventListener("click", () => {
//   // Navigate to index.html in the same tab
//   location.href = "http://127.0.0.1:5500/index.html";
// });

// destinationButton.addEventListener("click", () => {
//   // Navigate to destination.html in the same tab
//   location.href = "http://127.0.0.1:5500/destination.html";
// });
// crewButton.addEventListener("click", () => {
//   // Navigate to crew.html in the same tab
//   location.href = "http://127.0.0.1:5500/crew.html";
// });
// techButton.addEventListener("click", () => {
//   // No need to use window.open() for same tab
//   location.href = "http://127.0.0.1:5500/tech.html";
// });

// if (window.location.href == "http://127.0.0.1:5500/index.html") {
//   homeButton.classList.add("active");
// } else if (window.location.href == "http://127.0.0.1:5500/destination.html") {
//   destinationButton.classList.add("active");
// } else if (window.location.href == "http://127.0.0.1:5500/crew.html") {
//   crewButton.classList.add("active");
// } else if (window.location.href == "http://127.0.0.1:5500/tech.html") {
//   techButton.classList.add("active");
// }

// main page

let iconButton = document.getElementById("iconList22");
let barIcon = document.getElementById("bar");
let closeIcon = document.getElementById("close");
let list = document.querySelector(".links");

console.log(iconButton);
iconButton.addEventListener("click", () => {
  barIcon.classList.toggle("none");
  closeIcon.classList.toggle("block");
});

barIcon.addEventListener("click", () => {
  list.classList.add("block");
});
closeIcon.addEventListener("click", () => {
  list.classList.remove("block");
});


// important note 
document.addEventListener("DOMContentLoaded", () => {
  let linksPage = document.querySelectorAll("a");

  // قراءة المعرف المخزن من localStorage وتطبيق الـ active class
  const activeLinkId = localStorage.getItem('activeLinkId');
  if (activeLinkId) {
    const activeLink = document.getElementById(activeLinkId);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }

  linksPage.forEach((a) => {
    a.addEventListener("click", (event) => {
      // تخزين معرف الرابط في localStorage
      localStorage.setItem('activeLinkId', a.id);

      // إزالة الـ active class من جميع الروابط
      linksPage.forEach((link) => link.classList.remove("active"));

      // إضافة الـ active class للرابط الذي تم النقر عليه
      a.classList.add("active");
    });
  });
});
