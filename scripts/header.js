document.addEventListener("DOMContentLoaded", () => {
    const loadComponent = async(selector, path, callback) => {
        const element = document.querySelector(selector);
        if (element) {
            const res = await fetch(path);
            const html = await res.text();
            element.innerHTML = html;

            if (callback) callback();
        }
    }
    
    loadComponent("#header", "/components/header.html", () => {
        const mobileMenu = document.getElementById("mobileMenu");
        const burgerButton = document.getElementById("burgerButton");
        const exitButton = document.getElementById("exitButton");
        
        burgerButton.addEventListener("click", () => {
            mobileMenu.classList.remove("left-[-100%]");
            burgerButton.classList.remove("hidden");
            mobileMenu.classList.add("left-0");
        });
        
        exitButton.addEventListener("click", () => {
            exitButton.classList.add("hidden");
            mobileMenu.classList.add("left-[-100%]");
            mobileMenu.classList.remove("left-0");
        });
        
        // hide on w1050
        window.addEventListener("resize", () => {
            if (window.innerWidth > 1050) {
                mobileMenu.classList.add("left-[-100%]");
                mobileMenu.classList.remove("left-0");
                burgerButton.classList.add("hidden");
            }
        });
    });
});
