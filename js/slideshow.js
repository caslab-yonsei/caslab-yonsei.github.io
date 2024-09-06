let slide_indices = [];
let slide_auto;
let slide_caps = [];

function init_slides(n_galleries) {
    let slides;
    slide_indices = [];
    for (let idx = 0; idx < n_galleries; idx++) {
        slide_indices.push(1);
        show_slide(idx, slide_indices[idx], true);

        slides = document.getElementsByClassName("slides-gallery-"+String(idx));
        let j_lim = slides.length;
        let dicts = [];
        for (let jdx = 0; jdx < j_lim; jdx++) {
            dicts.push(
                {
                    btn_desc: document.getElementById("slides-btn-desc-"+String(idx)+"-"+String(jdx)),
                    btn_mem: document.getElementById("slides-btn-mem-"+String(idx)+"-"+String(jdx)),
                    txt_desc: document.getElementById("slides-desc-"+String(idx)+"-"+String(jdx)),
                    txt_mem: document.getElementById("slides-mem-"+String(idx)+"-"+String(jdx)),
                    caption: document.getElementById("slides-caption-"+String(idx)+"-"+String(jdx)),
                    btnbox: document.getElementById("slides-btnbox-"+String(idx)+"-"+String(jdx))
                }
            );
        }
        slide_caps.push(dicts);
    }
    
    slide_caps.forEach((gallery, idx) => {
        gallery.forEach((image, jdx) => {
            if (image.btn_desc) image.btn_desc.addEventListener('mouseenter', () => show_caption(idx, jdx, 'desc'));
            if (image.btn_mem) image.btn_mem.addEventListener('mouseenter', () => show_caption(idx, jdx, 'mem'));
            if (image.btnbox) image.btnbox.addEventListener('mouseenter', () => {
                image.btnbox.classList.add('slide-hidden');
            });
            if (image.caption) {
                image.caption.addEventListener('mouseenter', () => {
                    image.btnbox.classList.add('slide-show');
                });
                image.caption.addEventListener('mouseleave', () => show_buttons(idx, jdx));
            }
        });
    });

    //slide_auto = setTimeout(auto_slide, 5000);
}

function show_caption(gallery, image, caption) {
    slide_caps[gallery][image].btnbox.classList.add('slide-hidden');
    slide_caps[gallery][image].caption.classList.add('slide-show');
    slide_caps[gallery][image].txt_desc.setAttribute("style", caption === 'desc' ? 'display: block' : 'display: none');
    slide_caps[gallery][image].txt_mem.setAttribute("style", caption === 'mem' ? 'display: block' : 'display: none');
}

function show_buttons(gallery, image) {
    slide_caps[gallery][image].caption.classList.remove('slide-show');
    setTimeout(() => {
        slide_caps[gallery][image].btnbox.classList.remove('slide-hidden');
    }, 500);
}


function next_slide(gallery, idx, auto=false) {
    show_slide(gallery, slide_indices[gallery] += idx, auto);
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
    /*if (!auto) {
        clearTimeout(slide_auto);
        slide_auto = setTimeout(auto_slide, 5000);
    }*/
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