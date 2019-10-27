/*Event Handlers used include:
'keydown'
'mouseenter'
'mouseout'
'click'
*/

let typingAudio = new Audio('audio/typewriter.wav');
document.addEventListener('keydown', function() {
    typingAudio.play();
})

//Intro

let audio = new Audio('audio/honk.wav');
//source: https://freesound.org/people/MicktheMicGuy/sounds/434878/
let busImg = document.querySelector(".intro img");
busImg.addEventListener('click', function() {
    audio.play();
});


//Content-destination section
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

  