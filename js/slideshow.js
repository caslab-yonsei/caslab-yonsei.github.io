let slide_indices = [];
let slide_auto;
let slide_caps = [];
let slide_gesture = { x: [], y: [] };
let slide_tolerance = 100;

function init_slides() {
    let n_galleries = document.querySelectorAll(".slideshow-container").length;
    let slides;
    slide_indices = [];
    for (let idx = 0; idx < n_galleries; idx++) {
        slide_indices.push(1);
        show_slide(idx, slide_indices[idx], true);

        slides = document.getElementsByClassName("slides-gallery-"+String(idx));
        let j_lim = slides.length;
        let dicts = [];
        let n_images = slides.length;
        for (let jdx = 0; jdx < j_lim; jdx++) {
            dicts.push(
                {
                    btn_desc: document.getElementById("slides-btn-desc-"+String(idx)+"-"+String(jdx)),
                    btn_mem: document.getElementById("slides-btn-mem-"+String(idx)+"-"+String(jdx)),
                    txt_desc: document.getElementById("slides-desc-"+String(idx)+"-"+String(jdx)),
                    txt_mem: document.getElementById("slides-mem-"+String(idx)+"-"+String(jdx)),
                    caption: document.getElementById("slides-caption-"+String(idx)+"-"+String(jdx)),
                    btnbox: document.getElementById("slides-btnbox-"+String(idx)+"-"+String(jdx)),
                    wrapper: document.getElementById("slides-gallery-"+String(idx)),
                    showbtn: null,
                }
            );
        }
        slide_caps.push(dicts);
        if (n_images > 10) {
            Array.from(slides).forEach((slide, s_index) => {
                let numbox = document.getElementById("slide-number-"+String(idx)+"-"+String(s_index)).setAttribute("style", "display: block");
                numbox.textContent += ' / '+String(n_images);
            });
        }
    }
    
    slide_caps.forEach((gallery, idx) => {
        gallery.forEach((image, jdx) => {
            if (image.btn_desc) image.btn_desc.addEventListener('mouseenter', () => {
                if (image.btnbox.matches(".slide-visible")) {
                    //console.log("btn_desc mouseenter show_caption");
                    show_caption(idx, jdx, 'desc')
                }
            });
            if (image.btn_mem) image.btn_mem.addEventListener('mouseenter', () => {
                if (image.btnbox.matches(".slide-visible")) {
                    //console.log("btn_mem mouseenter show_caption");
                    show_caption(idx, jdx, 'mem');
                }
            });
            image.caption.addEventListener('mouseleave', () => {
                if (image.caption.matches(".slide-show") && !image.caption.matches(".transitioning") && image.caption.matches(".ready")) {
                    //console.log("caption mouseleave show_buttons");
                    show_buttons(idx, jdx);
                }
            });
            image.caption.addEventListener('mousemove', () => {
                if (image.caption.matches(".slide-show") && !image.caption.matches(".transitioning") && !image.caption.matches(".ready")) {
                    //console.log("caption mousemove ready");
                    image.caption.classList.add('ready');
                }
            });
            image.caption.addEventListener('transitionend', () => {
                //console.log("caption transitionend");
                image.caption.classList.remove('transitioning');
            });
            image.wrapper.addEventListener('mousemove', () => {
                if (image.caption.matches('.slide-show') && !image.caption.matches(".transitioning") ) {
                    if (!image.caption.matches(':hover') && !isAnyChildHovered(image.caption)) {
                        //console.log("wrapper !caption>:hover show_buttons");
                        show_buttons(idx, jdx);
                    }
                }
            });
            image.wrapper.addEventListener('mouseleave', () => {
                //console.log("wrapper mouseleave");
                show_buttons(idx, jdx);
            });
        });
    });

    //slide_auto = setTimeout(auto_slide, 5000);
}

function isAnyChildHovered(container) {
    const children = container.querySelectorAll('*'); // select all descendants
    for (let child of children) {
        if (child.matches(':hover')) {
            return true; // a child is hovered
        }
    }
    return false; // no children are hovered
}

function show_caption(gallery, image, caption) {
    let slide = slide_caps[gallery][image];
    slide.caption.classList.add('slide-show', 'transitioning');
    slide.caption.classList.remove('ready');
    if (slide.txt_desc) slide.txt_desc.setAttribute("style", caption === 'desc' ? 'display: block' : 'display: none');
    if (slide.txt_mem) slide.txt_mem.setAttribute("style", caption === 'mem' ? 'display: block' : 'display: none');
    slide.btnbox.classList.add('slide-hidden');
    slide.btnbox.classList.remove('slide-visible');
}

function show_buttons(gallery, image) {
    let slide = slide_caps[gallery][image];
    slide.caption.classList.remove('slide-show', 'ready');
    clearTimeout(slide.showbtn);
    slide.showbtn = setTimeout(() => {
        slide.btnbox.classList.remove('slide-hidden');
        slide.btnbox.classList.add('slide-visible');
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
    slides[slide_indices[gallery]-1].setAttribute("style", "display: flex");
    if (slides.length > 1 && slides.length <= 10) {
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