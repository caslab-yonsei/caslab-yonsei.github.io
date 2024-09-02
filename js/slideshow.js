let slide_indices = [];

function init_slides(n_galleries) {
    slide_indices = [];
    for (let idx = 0; idx < n_galleries; idx++) {
        slide_indices.push(1);
    }
}

function next_slide(gallery, idx) {
    show_slide(gallery, slide_indices[gallery] += idx);
}

function current_slide(gallery, idx) {
    show_slide(gallery, slide_indices[gallery] = idx);
}

function show_slide(gallery, idx) {
    let i;
    let slides = document.getElementsByClassName("slides-"+String(gallery));
    let dots = document.getElementsByClassName("slides-dot-"+String(gallery));
    if (idx > slides.length) {slide_indices[gallery] = 1;}
    if (idx < 1) {slide_indices[gallery] = slides.length;}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slide-active", "");
    }
    slides[slide_indices[gallery]].style.display = "block";
    dots[slide_indices[gallery]].className += " slide-active";
}