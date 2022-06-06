const rouletteAnim = (elem, num) => {
    let trackLen = $(elem).height() / 2;
    $(elem).stop().animate({
        top: -trackLen
    }, 450, "linear", () => {
        $(elem).css("top", 0);
        let stopAndGo = $(elem).css("top");
        stopAndGo = parseInt(stopAndGo);
        let checkAnim = $(elem).prev().is(":animated");

        if (stopAndGo <= -trackLen && checkAnim) {
            rouletteAnim(elem);
        } else {
            $(elem).stop().animate({
                top: -trackLen / 10 * num
            }, 550, "linear");
        }
    });
}

const resetRoulette = () => {
    $(".year-count div span").css("top", 0)
}

const setTarget = (year) => {
    setTimeout(function () {
        rouletteAnim(`.year-count div:nth-child(1) span`, Number(year[0]));
    }, 0);
    setTimeout(function () {
        rouletteAnim(`.year-count div:nth-child(2) span`, Number(year[1]));
    }, 100);
    setTimeout(function () {
        rouletteAnim(`.year-count div:nth-child(3) span`, Number(year[2]));
    }, 200);
    setTimeout(function () {
        rouletteAnim(`.year-count div:nth-child(4) span`, Number(year[3]));
    }, 300);
}

const getTarget = (elem) => {
    const targetYear = $(elem).attr("data-year");
    setTarget(targetYear);
}

const setSwiper = () => {}
let dotsSwiper = new Swiper(".milestones .indicates", {
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,
    on: {
        slideChange: () => {
            getTarget(".history .dot.swiper-slide-next");
        }
    },
    // autoplay: {
    //     delay: 4500,
    //     disableOnInteraction: false,
    // },
});

const setTrigger = () => {
    gsap.to(".section-milestones", {
        scrollTrigger: {
            trigger: ".section-milestones",
            start: "top 30%",
            end: "bottom top",
            toggleActions: "play none play reverse",
            onEnter: ({
                progress,
                direction,
                isActive
            }) => {
                // dotsSwiper.autoplay.start()
                getTarget(".history .dot.swiper-slide-active");
            },
            onEnterBack: () => {
                // dotsSwiper.autoplay.start()
            },
            onLeave: () => {
                // dotsSwiper.autoplay.stop()
            },
            onLeaveBack: () => {
                // dotsSwiper.autoplay.stop()
            },
            toggleClass: {
                targets: ".section-milestones",
                className: "active"
            }
        },
    })
}

const init = () => {
    dotsSwiper.autoplay.stop()
    setTrigger();
}

init();