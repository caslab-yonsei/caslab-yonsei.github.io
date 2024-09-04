const carousel = document.querySelector(".carousel");
const carouselBtn = document.querySelectorAll(".carousel-wrapper .carousel-control")
const firstItemWidth = carousel.querySelector(".carousel-item").offsetWidth;

let isDragging = false;
let startX, startScrollLeft;

carouselBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstItemWidth : firstItemWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);