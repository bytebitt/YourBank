const mobileMenu = document.getElementById("mobileMenu");
const burgerButton = document.getElementById("burgerButton");
const exitBUtton = document.getElementById("exitButton");

burgerButton.addEventListener("click", () => {
    mobileMenu.classList.remove("left-[-100%]");
    exitBUtton.classList.remove("hidden");
    mobileMenu.classList.add("left-0");
});

exitButton.addEventListener("click", () => {
    exitBUtton.classList.add("hidden");
    mobileMenu.classList.add("left-[-100%]");
    mobileMenu.classList.remove("left-0");
});

// hide on w1050
window.addEventListener("resize", () => {
    if (window.innerWidth > 1050) {
        mobileMenu.classList.add("left-[-100%]");
        mobileMenu.classList.remove("left-0");
        exitBUtton.classList.add("hidden");
    }
});