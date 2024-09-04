const carousel = document.querySelector(".carousel");
firstImage = carousel.querySelectorAll(".carousel-item")[0];
arrowIcons = document.querySelector(".carousel-control");

let isDragStart = false;
let isDragging = false;
let prevPageX, prevScrollLeft, positionDiff;
let firstImgWidth = firstImage.clientWidth + 0; // add margin

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id == "left" ? -fisrtImgWidth : firstImgWidth;
    });
});

const autoSlide = () => {
    if (carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;

    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImage.clientWidth + 0; // add margin
    let valDiff = firstImgWidth - positionDiff;
    if (carousel.scrollLeft > prevScrollLeft) {
        carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDiff : -positionDiff;
    } else {
        carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDiff : -positionDiff;
    }
}

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if (!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);