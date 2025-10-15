let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let current = 0;

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add("hidden");
        dots[i].classList.remove("opacity-100");
        dots[i].classList.add("opacity-50");
    }
    slides[index].classList.remove("hidden");
    dots[index].classList.remove("opacity-50");
    dots[index].classList.add("opacity-100");
}

document.getElementById("next").onclick = function () {
    current = (current + 1) % slides.length;
    showSlide(current);
};

document.getElementById("prev").onclick = function () {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
};

for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = function () {
        current = i;
        showSlide(current);
    };
}

setInterval(function () {
    current = (current + 1) % slides.length;
    showSlide(current);
}, 3000);

showSlide(current);