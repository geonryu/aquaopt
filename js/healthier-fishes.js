let tabmenu = new Swiper(".section-health .content .content-box", {
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    breakpoints: {
        920: {
            on : {
                transitionStart : function() {
                    let i = tabmenu
                }
            }
        }
    }
})

tabmenu.on("slideChange", () => {
    let i = tabmenu.realIndex;
    $(".content .content-label-tit").eq(i).addClass("on").siblings().removeClass("on");
    $(".section-health .infographic-slider > div").eq(i).stop().fadeIn()
    $(".section-health .infographic-slider > div").eq(i).siblings().stop().fadeOut();
});

$(".content .content-label-tit").on("click", function() {
    let i = $(this).find("button").attr("data-tit-index");
    tabmenu.slideTo(i);
});

gsap.to(".section-health", {
    scrollTrigger : {
        trigger : ".section-health",
        start : "top bottom",
        end : "bottom top",
        onEnter: () => {
            tabmenu.autoplay.start()
        },
        onEnterBack: () => {
            tabmenu.autoplay.start()
        },
        onLeave: () => {
            tabmenu.autoplay.stop()
        },
        onLeaveBack: () => {
            tabmenu.autoplay.stop()
        },
    }
})
   