/*Event Handlers used include:
'keydown'
'mouseenter'
'mouseout'
'click'
'focus'
'scroll'
'dblclick'
'mousemove'
'mouseleave'
'cut'
*/

let typingAudio = new Audio('audio/typewriter.wav');
document.addEventListener('keydown', function() {
    typingAudio.play();
})

//Nav
const logo = document.querySelector(".logo-heading");
let bikeAudio = new Audio('audio/bikeHorn.wav');
logo.addEventListener('dblclick', function(event) {
    event.target.style.padding = "1rem";
    event.target.style.borderRadius = "2px";
    event.target.style.background = "#FEEC93";
    bikeAudio.play();
})
const navItems = document.querySelectorAll(".nav-link");
navItems.forEach((element) => {
    let blue=70;
    element.addEventListener('mousemove', function(event) {
        event.target.style.cssText= `color: rgb(243, ${blue}, 71); \
        font-weight: bold; \
        letter-spacing: 4px;`;
        blue += 5; 
    });
    element.addEventListener('mouseleave', function(event) {
        event.target.style.cssText = "color: #4C3222; font-weight: normal; letter-spacing: 2px";
        blue = 70;
    })
});

//Intro

let audio = new Audio('audio/honk.wav');
//source: https://freesound.org/people/MicktheMicGuy/sounds/434878/
let busImg = document.querySelector(".intro img");
busImg.addEventListener('click', function() {
    audio.play();
});


//Video section
let scrollAudio = new Audio("audio/scrollSound.wav");
let videoText = document.querySelector(".video-section p");
videoText.addEventListener('scroll', function() {
    console.log("Scrolling");
    scrollAudio.play();
})
let videoEl = document.querySelector(".video-section iframe");


//Content-destination section
const destContent = document.querySelector(".content-destination");
const destHeading = document.querySelector(".content-destination h2");
destHeading.textContent = "Vacation Ideas Inspiration";

let destSub = document.createElement("h3");
destSub.textContent = "Select Your Favorite Vacation Words and Press Control-x";
destSub.style.color = "#167B8E";
destSub.style.fontSize = "2rem";
destSub.style.margin = "2rem auto";
destHeading.append(destSub);

const destText = document.querySelector(".content-destination p");
destText.textContent = "adventure excitement luxury hiking camping hunting fishing boating skiing bus airplane train";
destText.textContent += " backpacking museum hotel beach bicycle cabin cruise restaurant music";
destText.textContent += " winter summer fall spring charity photography culture RV excursion hostel island journey souvenir shopping";
destText.textContent += " mountains park explore play spa gardens yoga international relax resort safari aquarium zoo schedule";
destText.textContent += " ocean swimming fitness history bed&breakfast dance golf events tennis language tour waterfall sights friends family";
destText.style.fontStyle = "italic";
destText.style.wordSpacing = "0.5rem";
let wordSpace = document.createElement("div");
wordSpace.classList.add("featured");
let red = 1;
let wordBlue = 157;
destText.append(wordSpace);
destText.addEventListener('cut', function(event) {
    const selection = document.getSelection().toString();
    let selectionP = document.createElement("p");
    selectionP.textContent = selection + " ";
    selectionP.style.color = `rgb(${red}, 142, ${wordBlue})`;
    selectionP.style.fontStyle = "normal";
    wordSpace.append(selectionP);
    red = Math.ceil(Math.random() * 200);
    wordBlue = Math.ceil(Math.random() * 200);
})
let contentDestinationImg = document.querySelector(".content-destination img");
contentDestinationImg.addEventListener('mouseenter', function (event) {
    event.target.src = "img/umbrellas.jpg";
});
contentDestinationImg.addEventListener('mouseout', function (event) {
    event.target.src = "img/destination.jpg";
});


//Content pick section
let destinations = document.getElementsByClassName("destination");
for (let i = 0; i < destinations.length; i++) {
    destinations[i].addEventListener('mouseenter', function (event) {
        event.target.style.color = "white";
        event.target.style.padding = "1rem";
        event.target.style.fontWeight = "bold";
    });
}

let sunDestination = document.querySelector(".content-pick div:first-of-type");
sunDestination.addEventListener('mouseenter', (event) => {
    event.target.style.background = "#D1671B";
    event.target.style.backgroundSize = "cover";
    event.target.style.backgroundImage = "url('img/sun.jpg')";  
});

let mountainDestination = document.querySelector(".content-pick div:nth-of-type(2)");
mountainDestination.addEventListener('mouseenter', (event) => {
    event.target.style.background = "#9AD5FC";
    event.target.style.backgroundSize = "cover";
    event.target.style.backgroundImage = "url('img/mountain.jpg')";
    event.target.style.color = "black";  
});

let islandDestination = document.querySelector(".content-pick div:nth-of-type(3)");
islandDestination.addEventListener('mouseenter', (event) => {
    event.target.style.background = "#98A522";
    event.target.style.backgroundSize = "cover";
    event.target.style.backgroundImage = "url('img/island2.jpg')";  
});

//contact section
let contact = document.getElementById("contact");
contact.style.flexDirection = "column";
contact.style.alignItems = "center";
let contactInputs = document.getElementsByTagName("input");
for (let i=0; i<contactInputs.length; i++) {
    contactInputs[i].style.margin = "2rem";
    contactInputs[i].style.padding = "1.5rem";
}
let selection = document.getElementsByTagName("select")[0];
selection.style.margin = "2rem";
let submitBtn = document.querySelector("form button");
submitBtn.style.padding = "1rem 5rem";
submitBtn.style.margin = "1rem 6rem";

const nameInput = document.querySelector('input[type="name"]');
nameInput.addEventListener('focus', (event) => {
    event.target.style.background = '#FBE340';    
  });

const phoneInput = document.querySelector('input[type="tel"]');
phoneInput.addEventListener('focus', (event) => {
    event.target.style.background = '#87C894';    
  });

const emailInput = document.querySelector('input[type="email"]');
emailInput.addEventListener('focus', (event) => {
    event.target.style.background = '#E1B5A2';    
  });

  