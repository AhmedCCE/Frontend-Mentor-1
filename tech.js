const techObj = {
  1: {
    name: "Launch vehicle",
    images: {
      portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
      landscape: "./assets/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  2: {
    name: "Spaceport",
    images: {
      portrait: "./assets/technology/image-spaceport-portrait.jpg",
      landscape: "./assets/technology/image-spaceport-landscape.jpg",
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  3: {
    name: "Space capsule",
    images: {
      portrait: "./assets/technology/image-space-capsule-portrait.jpg",
      landscape: "./assets/technology/image-space-capsule-landscape.jpg",
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },

  technology: [1, 2, 3],
};
let arrButtons = document.querySelectorAll(".list1");
let img = document.getElementById("imgag");
let lookAname = document.getElementById("h1txt");
let para = document.getElementById("paratxt");
let divs = document.getElementById("numbers");

let currentScreenType = window.innerWidth > 1000 ? "large" : "small";
const updateImageSource = () => {
  if (currentScreenType === "large") {
    img.setAttribute("src", techObj[1].images.portrait);
  } else {
    img.setAttribute("src", techObj[1].images.landscape);
  }
};
const checkScreenSizeAndReload = () => {
  if (window.innerWidth > 1000 && currentScreenType !== "large") {
    currentScreenType = "large";
    location.reload();
  } else if (window.innerWidth <= 1000 && currentScreenType !== "small") {
    currentScreenType = "small";
    location.reload();
  }
};
// Initialize image source on load
updateImageSource();
// Add event listener to handle resize
window.addEventListener("resize", checkScreenSizeAndReload);



arrButtons.forEach((button) => {
  button.addEventListener("click", () => {
    for (let i = 0; i < arrButtons.length; i++) {
      if (Number(button.innerHTML) === techObj.technology[i]) {
        button.classList.add("acttlist");
        let indexNumber = techObj.technology[i];
        if (window.innerWidth > 1000) {
          img.setAttribute("src", techObj[indexNumber].images.portrait);
        } else {
          img.setAttribute("src", techObj[indexNumber].images.landscape);
        }
        lookAname.innerHTML = techObj[indexNumber].name;
        para.innerHTML = techObj[indexNumber].description;
      }
    }
  });
});

divs.addEventListener("click", (event) => {
  const targetElement = event.target;
  for (const button of divs.children) {
    button.classList.remove("acttlist");
  }
  for (const button of divs.children) {
    if (targetElement == button) {
      targetElement.classList.add("acttlist");
    }
  }
});

// divs.onclick = (event) => {
//   const targetElement = event.target;
//   for (const button of divs.children) {
//     button.classList.remove("acttlist");
//   }
//   for (const button of divs.children) {
//     if (targetElement == button) {
//       targetElement.classList.add("acttlist");
//     }
//   }
// };
