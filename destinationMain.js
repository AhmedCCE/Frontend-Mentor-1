// destination page

let ulLists = document.querySelectorAll(".ullis");
let h1Txt = document.getElementById("h1txt");
let pTxt = document.getElementById("ptxt");
let imgPlanets = document.getElementById("imga");
let destance = document.querySelector(".t2");
let time = document.querySelector(".s2");

const objDestination = {
  1: {
    H1: "Mars",
    Para: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
  the tallest planetary mountain in our solar system. It’s two and a half times 
  the size of Everest!`,
    imgPath: "./assets/destination/image-mars.png",
    distance: "225 mil. km",
    time: "9 months",
  },
  0: {
    H1: "Moon",
    Para: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
  regain perspective and come back refreshed. While you’re there, take in some history 
  by visiting the Luna 2 and Apollo 11 landing sites.`,
    imgPath: "./assets/destination/image-moon.png",
    distance: "384,400 km",
    time: "3 days",
  },
  2: {
    H1: "Europa",
    Para: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
  winter lover’s dream. With an icy surface, it’s perfect for a bit of 
  ice skating, curling, hockey, or simple relaxation in your snug 
  wintery cabin.`,
    imgPath: "./assets/destination/image-europa.png",
    distance: "628 mil. km",
    time: "3 years",
  },
  3: {
    H1: "Titan",
    Para: `The only moon known to have a dense atmosphere other than Earth, Titan 
  is a home away from home (just a few hundred degrees colder!). As a 
  bonus, you get striking views of the Rings of Saturn.`,
    imgPath: "./assets/destination/image-titan.png",
    distance: "1.6 bil. km",
    time: "7 years",
  },
  H1: ["Moon", "Mars", "Europa", "Titan"],
};
ulLists.forEach((li) => {
  li.addEventListener("click", () => {
    let indexNumber = objDestination.H1.indexOf(li.innerHTML);
    for (let i = 0; i < objDestination.H1.length; i++) {
      if (indexNumber !== -1) {
        h1Txt.innerHTML = objDestination[indexNumber].H1;
        pTxt.innerHTML = objDestination[indexNumber].Para;
        imgPlanets.setAttribute("src", objDestination[indexNumber].imgPath);
        destance.innerHTML = objDestination[indexNumber].distance;
        time.innerHTML = objDestination[indexNumber].time;
      }
    }
  });
});
let ul = document.getElementById("ul");

ul.addEventListener("click", (event) => {
  const targetElement = event.target;
  for (const li of ul.children) {
    li.classList.remove("active");
  }
  for (const li of ul.children) {
    if (targetElement === li) {
      targetElement.classList.add("active");
    }
  }
});
