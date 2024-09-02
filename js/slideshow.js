let slide_indices = [];

function init_slides(n_galleries) {
    slide_indices = [];
    for (let idx = 0; idx < n_galleries; idx++) {
        slide_indices.push(1);
        show_slide(idx, slide_indices[idx]);
    }
    setTimeout(auto_slide, 2000);
}

function next_slide(gallery, idx) {
    show_slide(gallery, slide_indices[gallery] += idx);
}

function current_slide(gallery, idx) {
    show_slide(gallery, slide_indices[gallery] = idx);
}

function auto_slide() {
    for (let idx = 0; idx < n_galleries; idx++) {
        next_slide(idx, 1);
    }
    setTimeout(auto_slide, 2000);
}

function show_slide(gallery, idx) {
    let i;
    let slides = document.getElementsByClassName("slides-gallery-"+String(gallery));
    let dots;
    if (slides.length > 1) dots = document.getElementsByClassName("slides-dot-"+String(gallery));
    if (idx > slides.length) {slide_indices[gallery] = 1;}
    if (idx < 1) {slide_indices[gallery] = slides.length;}
    for (i = 0; i < slides.length; i++) {
        slides[i].setAttribute("style", "display: none");
    }
    if (slides.length > 1) {
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" slide-active", "");
        }
    }
    slides[slide_indices[gallery]-1].setAttribute("style", "display:block");
    if (slides.length > 1) dots[slide_indices[gallery]-1].className += " slide-active";
}