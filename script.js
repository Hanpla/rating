const main = document.querySelector("main");
const thankYou = document.querySelector(".thank-you");
const submitBtn = document.querySelector(".submit");
const rating = document.querySelector(".rating");
const rates = document.querySelectorAll(".btn");

submitBtn.addEventListener("click", () => {
    thankYou.classList.remove("hidden");
    main.style.display = "none";
})


rates.forEach(rate => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
    })
});