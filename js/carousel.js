const obfrs = document.querySelectorAll(".obfuscator")
obfrs.forEach((obfr) => {
    let obfs = "";
    obfr.parentElement.setAttribute("href", "mai"+obfs+"lto:"+obfr.parentElement.innerText);
});

const carousel = document.querySelector(".carousel");
if (carousel && carousel.querySelectorAll(".carousel-item").length > 0)
{
    const carouselFirst = carousel.querySelectorAll(".carousel-item")[0];
    carouselControls = document.querySelectorAll(".carousel-control");

    let isDragStart = false;
    let isDragging = false;
    let prevPageX, prevScrollLeft, positionDiff;
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
        });
    });

    const autoSlide = () => {
        if (carousel.scrollLeft == scrollWidth || carousel.scrollLeft == 0) return;
        
        positionDiff = Math.abs(positionDiff);
        let valDiff = (firstItemWidth - positionDiff) % firstItemWidth;

        if (carousel.scrollLeft > prevScrollLeft) {
            carousel.scrollLeft += positionDiff % firstItemWidth > firstItemWidth / 3 ? valDiff : -positionDiff;
        } else {
            carousel.scrollLeft -= positionDiff % firstItemWidth > firstItemWidth / 3 ? valDiff : -positionDiff;
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
}