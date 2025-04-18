var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove: false,
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    mousewheel: {
        forceToAxis: true, // Enables vertical scrolling inside slides
        releaseOnEdges: true, // Allows scrolling when at slide edges
    },
    keyboard: {
        enabled: true, // Enables keyboard navigation
    },
});

swiper.sliderMove = function (s, e) {
    console.log(s);
};

function Navigate(indx) {
    for (let i of document.querySelectorAll(".Links li")) {
        i.classList.remove("activeLink");
    }
    Array.from(document.querySelectorAll(".Links li"))[indx].classList.add("activeLink");
    swiper.slideTo(indx, 1000, true);
}

// Enable scrolling within the Contact Me slide
document.querySelector(".swiper-slide.contactMe").addEventListener("wheel", function (event) {
    event.stopPropagation(); // Prevents Swiper from blocking scroll events
});
