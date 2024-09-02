let slide_indices = [];
let slide_auto;

function init_slides(n_galleries) {
    slide_indices = [];
    for (let idx = 0; idx < n_galleries; idx++) {
        slide_indices.push(1);
        show_slide(idx, slide_indices[idx]);
    }
    slide_auto = setTimeout(auto_slide, 5000);
}

function next_slide(gallery, idx) {
    show_slide(gallery, slide_indices[gallery] += idx);
}

function current_slide(gallery, idx) {
    show_slide(gallery, slide_indices[gallery] = idx);
}

function auto_slide() {
    let slides;
    for (let idx = 0; idx < slide_indices.length; idx++) {
        slides = document.getElementsByClassName("slides-gallery-"+String(idx));
        if (elementIsVisibleInViewport(slides[slide_indices[idx]-1])) {
            next_slide(idx, 1, true);
        }
    }
    slide_auto = setTimeout(auto_slide, 5000);
}

function show_slide(gallery, idx, auto=false) {
    let i;
    let slides = document.getElementsByClassName("slides-gallery-"+String(gallery));
    let dots;
    if (idx > slides.length) {slide_indices[gallery] = 1;}
    if (idx < 1) {slide_indices[gallery] = slides.length;}
    for (i = 0; i < slides.length; i++) {
        slides[i].setAttribute("style", "display: none");
    }
    slides[slide_indices[gallery]-1].setAttribute("style", "display:block");
    if (slides.length > 1) {
        dots = document.getElementsByClassName("slides-dot-"+String(gallery));
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" slide-active", "");
        }
        dots[slide_indices[gallery]-1].className += " slide-active";
    }
    if (!auto) {
        clearTimeout(slide_auto);
        slide_auto = setTimeout(auto_slide, 5000);
    }
}

const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
      ? ((top > 0 && top < innerHeight) ||
          (bottom > 0 && bottom < innerHeight)) &&
          ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  };