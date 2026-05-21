// Page fade-in animation
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 1s";
        document.body.style.opacity = "1";
    }, 200);
});

// Search box typing effect
const searchBox = document.querySelector("main input");

const suggestions = [
    "Pizza",
    "Burger",
    "Biryani",
    "Chinese",
    "South Indian",
    "Ice Cream",
    "Cake",
    "Rolls"
];

let i = 0;

function changePlaceholder() {
    searchBox.placeholder = "Search for " + suggestions[i];
    i = (i + 1) % suggestions.length;
}

setInterval(changePlaceholder, 2000);

// Search focus glow animation
searchBox.addEventListener("focus", () => {
    searchBox.style.background = "#e7f1ff";
});

searchBox.addEventListener("blur", () => {
    searchBox.style.background = "#fff";
});
