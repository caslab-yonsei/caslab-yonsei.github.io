const carousel = document.querySelector(".carousel"),
carouselFirst = carousel.querySelectorAll(".carousel-item")[0];
carouselControls = document.querySelectorAll(".carousel-control");

let isDragStart = false;
let prevPageX, prevScrollLeft;
let firstItemWidth = carouselFirst.clientWidth + 12;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

carouselControls.forEach(btn => {
    btn.addEventListener("click", () => {
        if (carousel.scrollLeft <= 0 && btn.id === "cc-left") {
            carousel.scrollLeft = scrollWidth;
        } else if (carousel.scrollLeft >= scrollWidth && btn.id === "cc-right") {
            carousel.scrollLeft = 0;
        } else {
            carousel.scrollLeft += btn.id === "cc-left" ? -firstItemWidth : firstItemWidth;
        }
    })
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    //carousel.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
    //carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);