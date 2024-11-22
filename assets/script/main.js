document.addEventListener('DOMContentLoaded', function () {
    const accordeonButtons = document.querySelectorAll('.accordeon_btn');
    const paddingBottom = 70;

    function updateButtonContent(button, isExpanded) {
        if (window.innerWidth <= 900) {
            if (isExpanded) {
                button.innerHTML = 'Свернуть список<img src="./assets/image/icons/black-arrow-top.svg" alt="">';
            } else {
                button.innerHTML = 'Развернуть список<img src="./assets/image/icons/black-arrow-down.svg" alt="">';
            }
        } else {
            if (isExpanded) {
                button.innerHTML = 'Свернуть список<img src="./assets/image/icons/arrow-up.svg" alt="">';
            } else {
                button.innerHTML = 'Развернуть список<img src="./assets/image/icons/arrow-down.svg" alt="">';
            }
        }
    }

    

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

    let smoother = ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.0,
        effects: true,
    });
    let assortLinks = document.querySelectorAll('.assortLink');
    let aboutMeLinks = document.querySelectorAll('.aboutMeLink');
    let etapsLinks = document.querySelectorAll('.etapsLink');
    let reviewsLinks = document.querySelectorAll('.reviewsLink');
    let contactsLinks = document.querySelectorAll('.contactsLink');
    let siteLinks = document.querySelectorAll('.siteLink');
    assortLinks.forEach((assortLink) => {
        assortLink.addEventListener('click', (e) => {
            e.preventDefault();
            smoother.scrollTo('.goods_sec', true, 'top top')
        })
    })
    aboutMeLinks.forEach((aboutMeLink) => {
        aboutMeLink.addEventListener('click', (e) => {
            e.preventDefault();
            smoother.scrollTo('.why_us', true, 'top top')
        })
    })
    etapsLinks.forEach((etapsLink) => {
        etapsLink.addEventListener('click', (e) => {
            e.preventDefault();
            smoother.scrollTo('.stages_sec', true, 'top top')
        })
    })
    reviewsLinks.forEach((reviewsLink) => {
        reviewsLink.addEventListener('click', (e) => {
            e.preventDefault();
            smoother.scrollTo('.review_sec', true, 'top top')
        })
    })
    contactsLinks.forEach((contactsLink) => {
        contactsLink.addEventListener('click', (e) => {
            e.preventDefault();
            smoother.scrollTo('.main_footer', true, 'top top')
        })
    })
    siteLinks.forEach((siteLink) => {
        siteLink.addEventListener('click', (e) => {
            e.preventDefault();
            smoother.scrollTo('.main_footer', true, 'top top')
        })
    })

    let mm = gsap.matchMedia();
    const timeline = gsap.timeline();

    mm.add('(min-width: 1439px)', () => {


        gsap.set('.main_header', {opacity:0}) 
        gsap.set('.main__content-catalog', {opacity:0, y: -65})
        gsap.set('.main__content-text', {opacity:0})
        gsap.set('.main__content-button.button-order', {opacity:0})

        gsap.fromTo('.main__content-title', {opacity: 0, clipPath: 'inset(0 100% 0 0)'},{opacity: 1, duration:1.5, clipPath: 'inset(0 0% 0 0)'})
        gsap.to('.main__content-catalog', {opacity:1, duration:1.5, y:0, delay:.8 }, 0)
        gsap.to('.main__content-button.button-order', {opacity:1, duration: .7, delay: 3}, 0)
        gsap.to('.main_header', {opacity: 1, duration:1, delay:3}, 0)
        gsap.to('.main__content-text', {opacity: 1, duration:1, delay:3}, 0)
        
        gsap.fromTo('.merch__content', {y:-1000, scale:.8,} ,
            {   y:0,
                scale:1,
                scrollTrigger: {
                    trigger: '.merch',
                    scrub: 2,
                    start: 'top center',
                    end: 'top top',
                },
               
            }
        )

        gsap.fromTo('.why-us__content-list', { clipPath: 'inset(0 100% 0 0)', opacity: 0}, {
            opacity:1,
            duration: 2.5,
            clipPath: 'inset(0 0% 0 0)',
            scrollTrigger: {
                trigger: '.why-us',
                start: 'top center',
                end: 'top top',
            },
        })

        gsap.fromTo('.cooperate_btn.why-us', {opacity:0}, {
            opacity:1,
            scrollTrigger: {
                trigger: '.why-us',
            },
            delay:3.5,
            duration:1.5
        }

        )
        






        gsap.set('.main_hero_bot', { opacity: 0, })
        gsap.set('.image_hero', { opacity: 0, x: -100 })
        gsap.set('.hero_background_4', { opacity: 0 })
        gsap.set('.main_hero_specs', { opacity: 0 })
        gsap.set('.main_hero_top', { height: 0 })

        timeline.to('.image_hero', { opacity: 1, opacity: 1, duration: 2.5, x: 0 })
        timeline.to('.main_hero_bot', { opacity: 1, duration: 1, delay: 2 }, 0)
        timeline.fromTo('.main_hero_specs', { x: -100, }, { x: 0, opacity: 1, duration: 1.5, delay: 2 }, 0)
        timeline.to('.main_hero_top', { height: 'auto', duration: 1.6, delay: 3.5, onComplete: () => ScrollTrigger.refresh() }, 0);

        gsap.fromTo('.good_gsap_1',
            {
                opacity: 0,
                clipPath: 'inset(0 100% 0 0)'
            },
            {
                duration: 1,
                opacity: 1,
                clipPath: 'inset(0 0% 0 0)',
                scrollTrigger: {
                    trigger: '.goods_sec',
                    start: '200px center',
                }
            }
        );
        gsap.fromTo('.good_gsap_2',
            {
                opacity: 0,
                clipPath: 'inset(0 100% 0 0)'
            },
            {
                delay: 0.5,
                duration: 1,
                opacity: 1,
                clipPath: 'inset(0 0% 0 0)',
                scrollTrigger: {
                    trigger: '.goods_sec',
                    start: '200px center',
                }
            }, 0
        );
        gsap.fromTo('.good_gsap_3',
            {

                opacity: 0,
                clipPath: 'inset(0 100% 0 0)'
            },
            {
                delay: 1,
                duration: 1,
                opacity: 1,
                clipPath: 'inset(0 0% 0 0)',
                scrollTrigger: {
                    trigger: '.goods_sec',
                    start: '200px center',
                }
            }, 0
        );
        gsap.fromTo('.good_gsap_4',
            {

                opacity: 0,
                clipPath: 'inset(0 100% 0 0)'
            },
            {
                delay: 1.5,
                duration: 1,
                opacity: 1,
                clipPath: 'inset(0 0% 0 0)',
                scrollTrigger: {
                    trigger: '.goods_sec',
                    start: '200px center',
                }
            }, 0
        );


        gsap.fromTo('.advan_img', { scale: 1.2, }, {
            scale: 1,
            duration: .5,
            scrollTrigger: {
                trigger: '.why_us',
                start: '200px center',
            }
        })

        gsap.fromTo('.advan_img', { scale: 1, }, {
            delay: .5,
            scale: 1.2,
            duration: .5,
            scrollTrigger: {
                trigger: '.why_us',
                start: '200px center',
            }
        }, 0)
        gsap.fromTo('.advan_img', { scale: 1.2, }, {
            delay: 1,
            scale: 1,
            duration: .5,
            scrollTrigger: {
                trigger: '.why_us',
                start: '200px center',
            }
        }, 0)



        gsap.fromTo('.img_gsap_1', { opacity: 0 }, {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: '.stages_sec',
                start: '200px center',
            }
        })
        gsap.fromTo('.img_gsap_2', { opacity: 0 }, {
            delay: .5,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: '.stages_sec',
                start: '200px center',
            }
        }, 0)
        gsap.fromTo('.img_gsap_3', { opacity: 0 }, {
            delay: 1,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: '.stages_sec',
                start: '200px center',
            }
        }, 0)
        gsap.fromTo('.img_gsap_4', { opacity: 0 }, {
            delay: 1.5,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: '.stages_sec',
                start: '200px center',
            }
        }, 0)
        gsap.fromTo('.request_btn', { opacity: 0, scale: 1.1 }, {
            scale: .9,
            delay: 2,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: '.stages_sec',
                start: '200px center',
            }
        }, 0)
        gsap.fromTo('.request_btn', { scale: .9 }, {
            scale: 1,
            delay: 2.8,
            duration: 1,
            scrollTrigger: {
                trigger: '.stages_sec',
                start: '200px center',
            }
        }, 0)



    })




    accordeonButtons.forEach(button => {
        button.addEventListener('click', function () {
            const merchItem = button.closest('.merch_item');
            const merchSpecsWrapp = merchItem.querySelector('.merch_specs_wrapp');
            const isExpanded = merchSpecsWrapp.classList.contains('active');

            if (isExpanded) {
                merchSpecsWrapp.style.maxHeight = '0px';
                merchSpecsWrapp.classList.remove('active');
            } else {
                const totalHeight = merchSpecsWrapp.scrollHeight + paddingBottom;
                merchSpecsWrapp.style.maxHeight = totalHeight + 'px';
                merchSpecsWrapp.classList.add('active');
            }

            updateButtonContent(button, !isExpanded);
        });

        const merchItem = button.closest('.merch_item');
        const merchSpecsWrapp = merchItem.querySelector('.merch_specs_wrapp');
        const isExpanded = merchSpecsWrapp.classList.contains('active');
        updateButtonContent(button, isExpanded);
    });

    window.addEventListener('resize', () => {
        accordeonButtons.forEach(button => {
            const merchItem = button.closest('.merch_item');
            const merchSpecsWrapp = merchItem.querySelector('.merch_specs_wrapp');
            const isExpanded = merchSpecsWrapp.classList.contains('active');
            updateButtonContent(button, isExpanded);
        });
    });


    const burgerBtn = document.querySelector('.burger_open')
    const burgerMenu = document.querySelector('.burger_menu')
    const stopScroll = document.querySelector('body')

    burgerBtn.addEventListener('click', () => {
        burgerMenu.classList.toggle('open')
        stopScroll.classList.toggle('open')
    })

    new Swiper('.merch__content.slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            prevEl: '.merch__swiper-navigation_prev',
            nextEl: '.merch__swiper-navigation_next'
        },
        speed: 500,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
        }
    })


    var swiper = new Swiper('.goods_all.slider', {
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            prevEl: '.prev_pic',
            nextEl: '.next_pic'
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },

        on: {
            init: function () {
                updatePagination(this);
            },
            slideChange: function () {
                updatePagination(this);
            }
        }

    });

    function updatePagination(swiper) {
        var currentSlide = document.querySelector('.current-slide');
        var totalSlides = document.querySelector('.total-slides');
        currentSlide.textContent = ('0' + (swiper.realIndex + 1)).slice(-2);
        totalSlides.textContent = ('0' + swiper.slides.length).slice(-2);
    };

    var swiperReviews = new Swiper('.review_slide', {
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            prevEl: '.prev_btn',
            nextEl: '.next_btn'
        },
        pagination: {
            el: '.swiper-pagination-custom-2.mine',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return `<span class="current-slide-2">${('0' + current).slice(-2)}</span>/<span class="total-slides-2">${('0' + total).slice(-2)}</span>`;
            }
        },
        on: {
            init: function () {
                updatePaginationReviews(this);
            },
            slideChange: function () {
                updatePaginationReviews(this);
            }
        },

        breakpoints: {
            1300: {
                slidesPerView: 4,
            },

            1000: {
                slidesPerView: 3,
            },

            640: {
                slidesPerView: 2,
            },
            200: {
                slidesPerView: 1,
            },

        },
    });

    function updatePaginationReviews(swiper) {
        var currentSlide = document.querySelector('.current-slide-2');
        var totalSlides = document.querySelector('.total-slides-2');
        currentSlide.textContent = ('0' + (swiper.realIndex + 1)).slice(-2);
        totalSlides.textContent = ('0' + swiper.slides.length).slice(-2);
    }


    Fancybox.bind("[data-fancybox]", {});


    const forms = document.querySelectorAll(".form");
    if (forms) {
        if (forms.length > 1) {
            forms.forEach((form) => changePlaceholder(form));
        } else {
            changePlaceholder(forms, true);
        }

        function changePlaceholder(form, flag = false) {
            let labels;
            if (!flag) {
                labels = form?.querySelectorAll(".callback-popup__label");
            } else {
                labels = form[0]?.querySelectorAll(".callback-popup__label");
            }

            if (labels) {
                labels.forEach((label) => {
                    const p = label.querySelector(".callback-popup__label-text");
                    const input = label.querySelector(".callback-popup__inp");
                    label.addEventListener("click", function () {
                        p.style.display = "none";
                    });
                    label.addEventListener("mouseout", function () {
                        if (input.value === "") {
                            p.style.display = "block";
                        }
                    });
                });
            }
        }
    }





});



