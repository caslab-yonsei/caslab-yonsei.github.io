const carousel = document.querySelector(".carousel");
const carouselBtn = document.querySelectorAll(".carousel-wrapper .carousel-control")
const firstItemWidth = carousel.querySelector(".carousel-item").offsetWidth;

let isDragging = false;
let startX, startScrollLeft;

carouselBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.id === "left") {
            if (carousel.scrollLeft === 0) {
                carousel.scrollLeft = carousel.scrollWidth - (3 * carousel.offsetwidth);
            } else carousel.scrollLeft -= firstItemWidth;
        } else {
            if (carousel.scrollLeft === carousel.scrollWidth - carousel.offsetWidth) {
                carousel.scrollLeft = 0;
            } else carousel.scrollLeft += firstItemWidth;
        }
        carousel.scrollLeft += btn.id === "left" ? -firstItemWidth : firstItemWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX || e.touches[0].pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - ((e.pageX || e.touches[0].pageX) - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    if (carousel.scrollLeft === 0) {
        carousel.scrollLeft = carousel.scrollWidth - (3 * carousel.offsetWidth);
    } else if (carousel.scrollLeft === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.scrollLeft = 0;
    }
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
//carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchleave", dragStop);

//carousel.addEventListener("scroll", infiniteScroll);