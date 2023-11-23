const scrollBanner = document.querySelector("#scrollBanner");
const rigthButton = document.querySelector(".fa-caret-right");
const leftButton = document.querySelector(".fa-caret-left");

var scrollPerClick = document.querySelector(".carrossel__banner").clientWidth;

scrollPosition = 0;

rigthButton.addEventListener("click", () => {

    if (scrollPosition <= scrollBanner.scrollWidth - (scrollBanner.clientWidth * 2)) {

        scrollBanner.scrollTo({
            top: 0,
            left: (scrollPosition += scrollPerClick),
            behavior: "smooth",
        });
    }else{
        scrollBanner.scrollTo({
            top: 0,
            left: scrollPosition = 0,
            behavior: "smooth",
        });
    }
})

leftButton.addEventListener("click", () => {
    scrollBanner.scrollTo({
        top: 0,
        left: (scrollPosition -= scrollPerClick),
        behavior: "smooth",
    });

    if (scrollPosition < 0 ) {
        scrollPosition = 0
    }
})