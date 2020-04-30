/* -- SELECTORS -- */
const cards = document.querySelectorAll(".card");
const contents = document.querySelector(".content");
const navBar = document.querySelector(".responsive_header");
const burger = document.querySelector(".burger");

/* -- EVENT LISTENERS -- */
cards.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.children[1].classList.remove("hidden");
    })
    card.addEventListener("mouseout", () => {
        card.children[1].classList.add("hidden");
    })
});

burger.addEventListener("click", () => {
    navBar.classList.toggle("active");
})

window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
        navBar.classList.remove("active");
    }
})