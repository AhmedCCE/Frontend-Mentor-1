const crewObj = {
  0: {
    name: "Douglas Hurley",
    images: {
      png: "./assets/crew/image-douglas-hurley.png",
      webp: "./assets/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  1: {
    name: "Mark Shuttleworth",
    images: {
      png: "./assets/crew/image-mark-shuttleworth.png",
      webp: "./assets/crew/image-mark-shuttleworth.webp",
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  2: {
    name: "Victor Glover",
    images: {
      png: "./assets/crew/image-victor-glover.png",
      webp: "./assets/crew/image-victor-glover.webp",
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  3: {
    name: "Anousheh Ansari",
    images: {
      png: "./assets/crew/image-anousheh-ansari.png",
      webp: "./assets/crew/image-anousheh-ansari.webp",
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
  crew: [0, 1, 2, 3],
};

let arrList = document.querySelectorAll(".list");
let namee = document.getElementById("name");
let role = document.getElementById("role");
let para = document.getElementById("para");
let img = document.getElementById("imaga");
let ul = document.getElementById("ullist");
console.log(arrList);
arrList.forEach((li) => {
  li.addEventListener("click", () => {
    for (let i = 0; i < crewObj.crew.length; i++) {
      if (Number(li.getAttribute("lista")) === crewObj.crew[i]) {
        namee.innerHTML = crewObj[i].name;
        role.innerHTML = crewObj[i].role;
        para.innerHTML = crewObj[i].bio;
        img.setAttribute("src", crewObj[i].images.png);
      }
    }
  });
});
// ul.addEventListener("click", (event) => {
//   const elementNow = event.target;
//   for (const li of ul.children) {
//     li.classList.remove("acttlist");
//   }
//   for (let li of ul.children) {
//     if (elementNow === li) {
//       elementNow.classList.add("acttlist");
//     }
//   }
// });
ul.addEventListener("click", (event) => {
    const targetElement = event.target;
    for (const li of ul.children) {
      li.classList.remove("acttlist");
    }
    for (const li of ul.children) {
      if (targetElement === li) {
        targetElement.classList.add("acttlist");
      }
    }
  });