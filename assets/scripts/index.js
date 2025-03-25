// DOM Elements
const time = document.getElementById("time");
const greet = document.getElementById("greetings");
const nameEle = document.getElementById("name");
const quote = document.getElementById("quote");
const hero = document.querySelector(".hero");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const brsLogo = document.querySelector(".brs-logo");
const footer = document.querySelector("footer");

// Random quotes
const quotes = [
    "I may not win immediately, but definitely.",
    "Never give up. You are much more capable than what you think.",
    "Sleep like a child, work like a machine, eat like a lion.",
    "The world is like a book. If you only stay in your hometown, then you might just read a single page.",
    "We have to be crazy enough to think that it's possible."
];

// Random background images
const images = [
    "./assets/images/landing-page-1.jpeg",
    "./assets/images/landing-page-2.webp",
    "./assets/images/landing-page-4.jpeg",
    "./assets/images/landing-page-3.webp",
    "./assets/images/landing-page-5.jpeg",
];

// Funtion to change time dynamically.
function changeTime() {
    const dateTime = new Date();
    const hrs = dateTime.getHours();
    const mins = dateTime.getMinutes();
    const secs = dateTime.getSeconds();
    const ampm = hrs < 12 ? "AM" : "PM";

    time.innerHTML = `${hrs % 12}:${mins}:${secs} ${ampm}`;

    if(hrs < 12) {
        greet.innerHTML = "Good Morning";
    } else if(hrs >= 12 && hrs < 16) {
        greet.innerHTML = "Good Afternoon";
    } else {
        greet.innerHTML = "Good Evening";
    }
}

setInterval(changeTime, 1000);

// Function to set the name in the local storage
function setName(e) {
    if(e.key == "Enter" || e.code == "Enter") {
        e.preventDefault();
        localStorage.setItem("name", nameEle.innerText);
        getName();
    }
}

// Function to get the name from the local storage
function getName() {
    if(localStorage.getItem("name") == "" || localStorage.getItem("name") == null || localStorage.getItem("name") == "[Enter Name]") {
        nameEle.innerHTML = "[Enter Name]";
    } else {
        nameEle.innerHTML = localStorage.getItem("name");
    }
}

getName();

// Function to handle mouse click
function mouseClicked() {
    localStorage.setItem("name", "[Enter Name]");
    getName();
}

// Event listeners
nameEle.addEventListener("click", mouseClicked);
nameEle.addEventListener("keypress", setName);

document.addEventListener("click", (e) => {
    if(e.target !== nameEle) {
        if(nameEle.innerText != "")
            localStorage.setItem("name", nameEle.innerText);
        else 
            localStorage.setItem("name", "[Enter Name]");
    }
});

red.addEventListener("click", () => {
    brsLogo.style.backgroundColor = "red";
    footer.style.backgroundColor = "red";
});

green.addEventListener("click", () => {
    brsLogo.style.backgroundColor = "green";
    footer.style.backgroundColor = "green";
});

blue.addEventListener("click", () => {
    brsLogo.style.backgroundColor = "darkblue";
    footer.style.backgroundColor = "darkblue";
});

// Pick the random quotes and background images
const ind = Math.floor(Math.random()*10) % 5;
quote.textContent = quotes[ind];
hero.style.backgroundImage = `url(${images[ind]})`;