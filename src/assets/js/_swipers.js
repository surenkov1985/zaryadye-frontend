function fsSliders() {
	const imgSlider = document.querySelector(".fs__images_slider");

	if (!imgSlider) return;

	const imagesSlider = new Swiper(imgSlider, {
		speed: 1000,
		slidesPerView: 1,
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		// autoplay: {
		// 	delay: 5000,
		// 	disableOnInteraction: false,
		// },
		// rewind: true,
		loop: true,
		spaceBetween: 10,
		navigation: {
			prevEl: ".fs__images_slider .swiper-prev-btn",
			nextEl: ".fs__images_slider .swiper-next-btn",
		},
		pagination: {
			el: ".fs__content .swiper-pagination",
			type: "bullets",
			clickable: true,
		},
		breakpoints: {
			991: {
				// autoHeight: false
			},
		},
	});
	// $(window).on("ready", function () {
	// 	imagesSlider.update()
	// })
	const activeSlide = $(".fs__images_slide")[imagesSlider.activeIndex];

	if ($(activeSlide).hasClass("imidge_slide")) {
		if (!$(".head").not(".mobile__head").hasClass("head_light")) {
			$(".head").not(".mobile__head").not(".fixed").addClass("head_light");
			$(".fs__images_slider").addClass("light");
			$(".fs__content").addClass("light");
		}
	} else {
		$(".head").removeClass("head_light");
		$(".fs__images_slider").removeClass("light");
		$(".fs__content").removeClass("light");
	}

	imagesSlider.on("slideChange", function (slider) {
		const activeSlide = $(slider.slides)[slider.activeIndex];
		// $(slider.slides).each((i, item) => {
		// 	$(item).removeClass('is-inview')
		// })
		// $(activeSlide).addClass('is-inview')
		if ($(activeSlide).hasClass("imidge_slide")) {
			if (!$(".head").not(".mobile__head").hasClass("head_light")) {
				$(".head").not(".mobile__head").addClass("head_light");
				$(".fs__images_slider").addClass("light");
				$(".fs__content").addClass("light");
			}
		} else {
			$(".head").not(".mobile__head").removeClass("head_light");
			$(".fs__images_slider").removeClass("light");
			$(".fs__content").removeClass("light");
		}
	});
	// imagesSlider.on('beforeTransitionStart', function (slider) {
	// 	console.log(slider.activeIndex);
	// 	gsap.to(imagesSlider.slides[slider.activeIndex - 1], { opacity: 0, duration: 2 })
	// })
}

// function hallsSliders() {
// 	const hallSlider = document.querySelector(".halls__slider_images");
// 	const hallDescSlider = document.querySelector(".halls__slider_desc");
// 	const smSlider = document.querySelector(".halls__slider_small");

// 	if (!hallSlider) return;

// 	// const gsap = new Gsap();

// 	const devices = {
// 		md: 640,
// 		lg: 1025,
// 	};

// 	const isDesktop = () => window.matchMedia(`(min-width: ${devices.lg}px)`).matches;
// 	const isMob = () => window.matchMedia(`(max-width: ${devices.md - 1}px)`).matches;
// 	const isTablet = () => window.matchMedia(`(min-width: ${devices.md}px) and (max-width: ${devices.lg - 1}px)`).matches;

// 	const gallery = document.querySelector("[data-gallery]");
// 	const mainSliderNode = gallery.querySelector("[data-main-slider]");
// 	const sideSliderNode = gallery.querySelector("[data-side-slider]");

// 	const prev = gallery.querySelector("[data-prev]");
// 	const next = gallery.querySelector("[data-next]");

// 	let sliderMain = null;
// 	let sliderSide = null;

// 	let activeIndex = 0;
// 	let itemsCount = 0;

// 	let animate = false;

// 	const interleaveOffset = 0.5;

// 	const textSlides = gallery.querySelectorAll("[data-text-slide]");
// 	const titleList = gallery.querySelectorAll("[data-title]");
// 	const textList = gallery.querySelectorAll("[data-text]");
// 	const btnList = gallery.querySelectorAll(".halls__slide_link");

// 	function textToggle() {
// 		if (!titleList.length && !textList.length && !btnList.length) return;

// 		const tl = gsap.timeline({
// 			paused: true,
// 			onComplete: () => {
// 				animate = false;
// 			},
// 		});
// 		textSlides.forEach((ts) => {
// 			ts.classList.remove("active");
// 		});
// 		textSlides[activeIndex].classList.add("active");
// 		const currentTitle = textSlides[activeIndex].querySelector("[data-title]");
// 		const currentText = textSlides[activeIndex].querySelector("[data-text]");
// 		const currentBtn = textSlides[activeIndex].querySelector(".halls__slide_link");

// 		animate = true;

// 		tl.to([...titleList, ...textList, ...btnList], { opacity: 0, stagger: 0, duration: 0.2 }).fromTo(
// 			[currentTitle, currentText, currentBtn],
// 			{ opacity: 0, y: 16 },
// 			{ opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }
// 		);

// 		tl.play();
// 	}

// 	function progress(slider) {
// 		if (slider.slides.length) {
// 			for (let i = 0; i < itemsCount; i++) {
// 				const offset = slider.slides[i].progress * (slider.width * interleaveOffset);

// 				slider.slides[i].querySelector(".gallery__image").style.transform = `translate3d(${offset}px, 0, 0)`;
// 				// Array.from(slider.slides)[i].querySelector(".gallery__image").style.transform = `translate3d(${offset}px, 0, 0)`;
// 			}
// 		}
// 	}

// 	function touchStart(slider) {
// 		for (let i = 0; i < itemsCount; i++) {
// 			slider.slides[i].style.transition = "";
// 		}
// 	}

// 	function setTransition(slider, transition) {
// 		if (slider.slides.length) {
// 			for (let i = 0; i < itemsCount; i++) {
// 				slider.slides[i].style.transition = `${transition}ms`;
// 				slider.slides[i].querySelector(".gallery__image").style.transition = `${transition}ms`;
// 			}
// 		}
// 	}

// 	function slideChange(direction) {
// 		if (animate) return;

// 		if (direction === "prev") {
// 			sliderMain.slidePrev();
// 			sliderSide.slidePrev();
// 		} else if (direction === "next") {
// 			sliderMain.slideNext();
// 			sliderSide.slideNext();
// 		}
// 	}

// 	sliderMain = new Swiper(mainSliderNode, {
// 		slidesPerView: "auto",
// 		simulateTouch: false,
// 		loop: true,
// 		followFinger: false,
// 		speed: 1000,
// 		watchSlidesProgress: true,
// 		preventInteractionOnTransition: true,
// 		init: false,
// 		pagination: {
// 			el: ".halls__slider_images .pagination_tabs",
// 			type: "bullets",
// 			// clickable: true,
// 			bulletClass: "btn_tab",
// 			bulletActiveClass: "active",
// 			renderBullet: function (current, total) {
// 				const slide = Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current];

// 				if (current === 0) {
// 					const pagin = $(".halls__slider_images .dropdown");
// 					$(pagin)
// 						.find(".dropdown__value .value")
// 						.text($(Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current]).data("name"));
// 				}
// 				return `<span class="btn btn_tab dropdown-slider__item ${total} ${slide.classList.contains("swiper-slide-active") ? "active" : ""
// 					}" data-slide="${current}"><span class="value">${Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current].dataset.name
// 					}</span></span>`;
// 			},
// 		},
// 		on: {
// 			init: (slider) => {
// 				itemsCount = slider.slides.length || 0;
// 				textToggle();
// 				progress(slider);
// 			},
// 			progress: (slider) => {
// 				progress(slider);
// 			},
// 			touchStart: (slider) => {
// 				touchStart(slider);
// 			},
// 			setTransition: (slider, transition) => {
// 				setTransition(slider, transition);
// 			},
// 			slideChange: (slider) => {
// 				activeIndex = slider.realIndex;

// 			},
// 			slideChangeTransitionStart: () => {
// 				textToggle();
// 			},
// 			transitionStart: (slider) => {
// 				if (animate) return;
// 				if (slider.swipeDirection === "prev") {
// 					sliderSide.slidePrev();
// 				} else if (slider.swipeDirection === "next") {
// 					sliderSide.slideNext();
// 				}
// 			},
// 		},
// 	});

// 	sliderSide = new Swiper(sideSliderNode, {
// 		slidesPerView: "auto",
// 		simulateTouch: false,
// 		speed: 1000,
// 		watchSlidesProgress: true,
// 		allowTouchMove: false,
// 		preventInteractionOnTransition: true,
// 		loop: true,
// 		init: false,
// 		pagination: {
// 			el: ".halls__slider_images .pagination_tabs",
// 			type: "bullets",
// 			// clickable: true,
// 			bulletClass: "btn_tab",
// 			bulletActiveClass: "active",
// 			renderBullet: function (current, total) {
// 				const slide = Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current];

// 				if (current === 0) {
// 					const pagin = $(".halls__slider_images .dropdown");
// 					$(pagin)
// 						.find(".dropdown__value .value")
// 						.text($(Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current]).data("name"));
// 				}
// 				return `<span class="btn btn_tab dropdown-slider__item ${total} ${slide.classList.contains("swiper-slide-active") ? "active" : ""
// 					}" data-slide="${current}"><span class="value">${Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current].dataset.name
// 					}</span></span>`;
// 			},
// 		},
// 		on: {
// 			init: (slider) => {
// 				if (isDesktop()) {
// 					progress(slider);
// 				}
// 			},
// 			progress: (slider) => {
// 				if (isDesktop()) {
// 					progress(slider);
// 				}
// 			},
// 			touchStart: (slider) => {
// 				if (isDesktop()) {
// 					touchStart(slider);
// 				}
// 			},
// 			setTransition: (slider, transition) => {
// 				if (isDesktop()) {
// 					setTransition(slider, transition);
// 				}
// 			},
// 		},
// 	});
// 	$(document).on("click", ".halls .dropdown-slider__item", function (e) {
// 		console.log(e.currentTarget, animate);
// 		if (!animate) {
// 			const index = $(e.currentTarget).data("slide");
// 			sliderMain.slideTo(index);
// 			sliderSide.slideTo(index);
// 			const dropdown = $(e.currentTarget).closest(".dropdown");
// 			const value = $(e.currentTarget).find(".value").text();

// 			$(dropdown).find(".dropdown__value>.value").text(value);
// 			$(dropdown).removeClass("active");
// 		}
// 	});
// 	prev.addEventListener("click", () => {
// 		slideChange("prev");
// 		console.log(sliderMain.realIndex);
// 		const index = sliderMain.realIndex;
// 		const dropdown = $('.halls .dropdown');
// 		const activeTab = $(dropdown).find(`[data-slide=${index}]`)
// 		const value = $(activeTab).find(".value").text();

// 		$(dropdown).find(".dropdown__value>.value").text(value);

// 	});

// 	next.addEventListener("click", () => {
// 		slideChange("next");
// 		console.log(sliderMain.realIndex);
// 		const index = sliderMain.realIndex;
// 		const dropdown = $('.halls .dropdown');
// 		const activeTab = $(dropdown).find(`[data-slide=${index}]`)
// 		const value = $(activeTab).find(".value").text();

// 		$(dropdown).find(".dropdown__value>.value").text(value);
// 	});
// 	return { sliderMain, sliderSide };
// 	// const imagesSlider = new Swiper(hallSlider, {
// 	// 	// effect: 'fade',
// 	// 	slidesPerView: 1,
// 	// 	slidesPerGroup: 1,
// 	// 	// loop: true,
// 	// 	// cssMode: true,
// 	// 	// loopAddBlankSlides: true,
// 	// 	// loopAdditionalSlides: 3,
// 	// 	// effect: "creative",
// 	// 	// creativeEffect: {
// 	// 	// 	prev: {
// 	// 	// 		shadow: true,
// 	// 	// 		translate: ["-50%", 0, -1],
// 	// 	// 		opacity: 0,
// 	// 	// 	},
// 	// 	// 	next: {
// 	// 	// 		translate: ["100%", 0, 0],
// 	// 	// 	},
// 	// 	// 	limitProgress: 2,
// 	// 	// },
// 	// 	speed: 900,
// 	// 	navigation: {
// 	// 		prevEl: ".halls__slider_desc .swiper-prev-btn",
// 	// 		nextEl: ".halls__slider_desc .swiper-next-btn",
// 	// 	},
// 	// 	pagination: {
// 	// 		el: ".halls__slider_images .pagination_tabs",
// 	// 		type: "bullets",
// 	// 		clickable: true,
// 	// 		bulletClass: "btn_tab",
// 	// 		bulletActiveClass: "active",
// 	// 		renderBullet: function (current, total) {
// 	// 			const slide = Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current];

// 	// 			if (current === 0) {
// 	// 				const pagin = $(".halls__slider_images .dropdown");
// 	// 				$(pagin)
// 	// 					.find(".dropdown__value .value")
// 	// 					.text($(Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current]).data("name"));
// 	// 			}
// 	// 			return `<span class="btn btn_tab dropdown-slider__item ${total} ${
// 	// 				slide.classList.contains("swiper-slide-active") ? "active" : ""
// 	// 			}"><span class="value">${Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current].dataset.name}</span></span>`;
// 	// 		},
// 	// 	},
// 	// 	on: {
// 	// 		init: function () {
// 	// 			const pagin = $(".halls__slider_images .pagination_tabs");
// 	// 			const paginBg = $(pagin).find(".before");

// 	// 			$(".halls__slider_images .pagination_tabs").append(`<div class="before"></div>`);
// 	// 			$(".halls__slider_images .pagination_tabs .before").width($(".halls__slider_images .pagination_tabs .active").innerWidth());
// 	// 		},
// 	// 	},
// 	// });

// 	// const descSlider = new Swiper(hallDescSlider, {
// 	// 	allowTouchMove: false,
// 	// 	speed: 900,
// 	// 	effect: "fade",
// 	// 	fadeEffect: {
// 	// 		crossFade: true,
// 	// 	},
// 	// 	slidesPerView: 1,
// 	// 	slidesPerGroup: 1,
// 	// 	// navigation: {
// 	// 	// 	prevEl: ".halls__slider_desc .swiper-prev-btn",
// 	// 	// 	nextEl: ".halls__slider_desc .swiper-next-btn",
// 	// 	// },
// 	// 	// loop: true,
// 	// 	// cssMode: true,
// 	// 	// pagination: {
// 	// 	// 	el: ".halls__slider_images .pagination_tabs",
// 	// 	// 	type: "bullets",
// 	// 	// 	clickable: true,
// 	// 	// 	bulletClass: "btn_tab",
// 	// 	// 	bulletActiveClass: "active",
// 	// 	// 	renderBullet: function (current, total) {
// 	// 	// 		const slide = Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current];

// 	// 	// 		if (current === 0) {
// 	// 	// 			const pagin = $(".halls__slider_images .dropdown");
// 	// 	// 			$(pagin)
// 	// 	// 				.find(".dropdown__value .value")
// 	// 	// 				.text($(Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current]).data("name"));
// 	// 	// 		}
// 	// 	// 		return `<span class="btn btn_tab dropdown-slider__item ${total} ${slide.classList.contains("swiper-slide-active") ? "active" : ""
// 	// 	// 			}"><span class="value">${Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current].dataset.name}</span></span>`;
// 	// 	// 	},
// 	// 	// },
// 	// 	// loopAdditionalSlides: true,
// 	// 	// loopAdditionalSlides: 3,

// 	// 	// rewind: true,
// 	// 	// navigation: {
// 	// 	// 	prevEl: ".halls__slider_desc .swiper-prev-btn",
// 	// 	// 	nextEl: ".halls__slider_desc .swiper-next-btn",
// 	// 	// },
// 	// });
// 	// descSlider.update();
// 	// const smallSlider = new Swiper(smSlider, {
// 	// 	allowTouchMove: false,
// 	// 	// initialSlide: 1,
// 	// 	slidesPerView: 1,
// 	// 	slidesPerGroup: 1,
// 	// 	// loopAdditionalSlides: true,
// 	// 	// loopAdditionalSlides: 3,
// 	// 	// rewind: true,
// 	// 	// loop: true,
// 	// 	speed: 700,
// 	// 	// cssMode: true,
// 	// 	// navigation: {
// 	// 	// 	prevEl: ".halls__slider_desc .swiper-prev-btn",
// 	// 	// 	nextEl: ".halls__slider_desc .swiper-next-btn",
// 	// 	// },
// 	// 	// pagination: {
// 	// 	// 	el: ".halls__slider_images .pagination_tabs",
// 	// 	// 	type: "bullets",
// 	// 	// 	clickable: true,
// 	// 	// 	bulletClass: "btn_tab",
// 	// 	// 	bulletActiveClass: "active",
// 	// 	// 	renderBullet: function (current, total) {
// 	// 	// 		const slide = Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current];

// 	// 	// 		if (current === 0) {
// 	// 	// 			const pagin = $(".halls__slider_images .dropdown");
// 	// 	// 			$(pagin)
// 	// 	// 				.find(".dropdown__value .value")
// 	// 	// 				.text($(Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current]).data("name"));
// 	// 	// 		}
// 	// 	// 		return `<span class="btn btn_tab dropdown-slider__item ${total} ${slide.classList.contains("swiper-slide-active") ? "active" : ""
// 	// 	// 			}"><span class="value">${Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current].dataset.name}</span></span>`;
// 	// 	// 	},
// 	// 	// },
// 	// });

// 	// imagesSlider.on('slideChange', function () {

// 	// })

// 	// hallDescSlider.querySelector(".swiper-next-btn").addEventListener("click", function (e) {
// 	// 	imagesSlider.slideNext();
// 	// 	smallSlider.slideNext();
// 	// });

// 	// imagesSlider.on("slideChange", function (slider) {
// 	// 	const activeSlide = $(slider.slides)[slider.activeIndex];
// 	// 	const pagin = $(".halls__slider_images .pagination_tabs");
// 	// 	const paginBg = $(pagin).find(".before");

// 	// 	const activeTab = $(pagin).find(".active");

// 	// 	$(paginBg).css({ width: $(activeTab).innerWidth(), left: $(activeTab).position().left + "px" });
// 	// 	$(pagin).closest(".dropdown").find(".dropdown__value .value").text($(activeTab).text());

// 	// 	descSlider.slideTo(slider.activeIndex);
// 	// 	smallSlider.slideTo(slider.activeIndex);
// 	// 	// smallSlider.slideTo(!!(slider.slides.length > slider.activeIndex + 1) ? slider.activeIndex : 0);
// 	// });

// 	// $(window).resize(function () {
// 	// 	const pagin = $(".halls__slider_images .pagination_tabs");
// 	// 	const paginBg = $(pagin).find(".before");

// 	// 	const activeTab = $(pagin).find(".active");

// 	// 	$(paginBg).css({ width: $(activeTab).innerWidth(), left: $(activeTab).position().left + "px" });
// 	// });
// 	// return descSlider;
// }

// function newsSlider() {
// 	const news = document.querySelector(".news__slider");

// 	if (!news) return;

// 	const newsSlider = new Swiper(news, {
// 		slidesPerView: 1,
// 		slidesPerGroup: 1,
// 		spaceBetween: 8,
// 		navigation: {
// 			nextEl: ".news .swiper-next-btn",
// 			prevEl: ".news .swiper-prev-btn",
// 		},
// 		pagination: {
// 			el: ".news .swiper-pagination",
// 			type: "bullets",
// 			clickable: true,
// 		},
// 		breakpoints: {
// 			576: {
// 				slidesPerView: 2,
// 				spaceBetween: 4,
// 			},
// 			769: {
// 				slidesPerView: 2,
// 				spaceBetween: 8,
// 			},
// 			991: {
// 				slidesPerView: 3,
// 				spaceBetween: 12,
// 			},
// 			1200: {
// 				slidesPerView: 3,
// 				spaceBetween: 24,
// 			},
// 			1441: {
// 				slidesPerView: 3,
// 				spaceBetween: 32,
// 			},
// 		},
// 	});
// }

function locationSliders() {
	const imgSlider = document.querySelector(".location__images_slider");

	if (!imgSlider) return;
	if (!imgSlider.classList.contains("location_navigation_slider")) {
		const imagesSlider = new Swiper(imgSlider, {
			speed: 1000,
			initialSlide: 1,
			navigation: {
				prevEl: ".location__slides_btn.first",
				nextEl: ".location__slides_btn.last",
			},
			on: {
				update: function (slider) {
					if ($(window).width() > 768) {
						const pos = +$(window).width() - +$(".location__path_icon").innerWidth();
						if ($(".location").hasClass("tour")) {
							$(".location__path_icon").css({ left: "50%" });
						} else {
							if (slider.activeIndex == 1) {
								$(".location__slides_btn.last").addClass("active");
								$(".location__slides_btn.first").removeClass("active");
								$(".location__ellipse").addClass("active");
								$(".location__ellipse-sm").removeClass("active");
								$(".location__path_icon ").css({ left: `calc(50% - ${pos}px)` });
							} else {
								// $(".location__path_icon svg").css({ left: `${pos / 2}px`, right: "auto" });
								$(".location__path_icon ").css({ left: "50%" });
								$(".location__slides_btn.first").addClass("active");
								$(".location__slides_btn.last").removeClass("active");
								$(".location__ellipse-sm").addClass("active");
								$(".location__ellipse").removeClass("active");
							}
						}
					} else {
						const pos = +$(window).width() - +$(".location__path_icon").innerWidth();
						if ($(".location").hasClass("tour")) {
							$(".location__path_icon").css({ left: "50%" });
						} else {
							if (slider.activeIndex == 1) {
								$(".location__slides_btn.last").addClass("active");
								$(".location__slides_btn.first").removeClass("active");
								$(".location__path_icon ").css({ left: "50%" });
							} else {
								// $(".location__path_icon svg").css({ left: `${pos / 2}px`, right: "auto" });
								$(".location__path_icon ").css({ left: `calc(50% - ${pos}px)` });
								$(".location__slides_btn.first").addClass("active");
								$(".location__slides_btn.last").removeClass("active");
							}
						}
					}
				},
			},
		});
		$(window).on("load", function () {
			imagesSlider.update();
		});
		const textSlider = new Swiper(".location__content_slider", {
			speed: 1000,

			initialSlide: 1,
			navigation: {
				prevEl: ".location__slides_btn.first",
				nextEl: ".location__slides_btn.last",
			},
		});
		imagesSlider.on("afterInit", function () { });
		const pos = +$(window).width() - +$(".location__path_icon svg").innerWidth();

		if ($(".location").hasClass("tour")) {
			$(".location__path_icon").css({ left: "50%" });
		} else {
			if (imagesSlider.activeIndex === 1) {
				$(".location__slides_btn.last").addClass("active");
				$(".location__slides_btn.first").removeClass("active");
				$(".location__ellipse").addClass("active");
				$(".location__ellipse-sm").removeClass("active");
				$(".location__path_icon ").css({ left: `calc(50% - ${pos}px)` });
				// $(".location__path_icon svg").css({ left: "auto", right: `${pos / 2}px` });
			} else {
				$(".location__path_icon ").css({ left: "50%" });
				$(".location__ellipse-sm").addClass("active");
				$(".location__ellipse").removeClass("active");
				$(".location__slides_btn.last").removeClass("active");
			}
		}
		imagesSlider.on("slideChange", function (slider) {
			if ($(window).width() > 768) {
				const pos = +$(window).width() - +$(".location__path_icon").innerWidth();

				if ($(".location").hasClass("tour")) {
					$(".location__path_icon").css({ left: "50%" });
				} else {
					if (slider.activeIndex == 1) {
						$(".location__slides_btn.last").addClass("active");
						$(".location__slides_btn.first").removeClass("active");
						$(".location__ellipse").addClass("active");
						$(".location__ellipse-sm").removeClass("active");
						$(".location__path_icon ").css({ left: `calc(50% - ${pos}px)` });
					} else {
						// $(".location__path_icon svg").css({ left: `${pos / 2}px`, right: "auto" });
						$(".location__path_icon ").css({ left: "50%" });
						$(".location__slides_btn.first").addClass("active");
						$(".location__slides_btn.last").removeClass("active");
						$(".location__ellipse-sm").addClass("active");
						$(".location__ellipse").removeClass("active");
					}
				}
			} else {
				const pos = +$(window).width() - +$(".location__path_icon").innerWidth();

				if ($(".location").hasClass("tour")) {
					$(".location__path_icon").css({ left: "50%" });
				} else {
					if (slider.activeIndex == 1) {
						$(".location__slides_btn.last").addClass("active");
						$(".location__slides_btn.first").removeClass("active");
						$(".location__ellipse").addClass("active");
						$(".location__ellipse-sm").removeClass("active");
						$(".location__path_icon ").css({ left: "50%" });
					} else {
						// $(".location__path_icon svg").css({ left: `${pos / 2}px`, right: "auto" });
						$(".location__path_icon ").css({ left: `calc(50% - ${pos}px)` });
						$(".location__slides_btn.first").addClass("active");
						$(".location__slides_btn.last").removeClass("active");
						$(".location__ellipse-sm").addClass("active");
						$(".location__ellipse").removeClass("active");
					}
				}
			}
		});

		if ($(".location").hasClass("tour")) {
			// const pos = +$(window).width() - +$(".location__slides_btn.last").offset().left;
			$(".location__path_icon").css({ left: `50%` });
			$(window).resize(function () {
				const pos = +$(window).width() - +$(".location__path_icon").innerWidth();

				if ($(".location").hasClass("tour")) {
					$(".location__path_icon").css({ left: "50%" });
				} else {
					if (imagesSlider.activeIndex === 1) {
						$(".location__slides_btn.last").addClass("active");
						$(".location__slides_btn.first").removeClass("active");
						$(".location__ellipse").addClass("active");
						$(".location__ellipse-sm").removeClass("active");
						$(".location__path_icon ").css({ left: `calc(50% - ${$(".location__slides_btn.last").offset().left}px)` });
						// $(".location__path_icon svg").css({ left: "auto", right: `${pos / 2}px` });
					} else {
						$(".location__path_icon ").css({ left: "50%" });
						$(".location__ellipse-sm").addClass("active");
						$(".location__ellipse").removeClass("active");
						$(".location__slides_btn.last").removeClass("active");
					}
				}
			});
		} else {
			$(window).resize(function () {
				if ($(window).width() > 768) {
					const pos = +$(window).width() - +$(".location__path_icon").innerWidth();

					if ($(".location").hasClass("tour")) {
						$(".location__path_icon").css({ left: "50%" });
					} else {
						if (imagesSlider.activeIndex == 1) {
							$(".location__slides_btn.last").addClass("active");
							$(".location__slides_btn.first").removeClass("active");
							$(".location__ellipse").addClass("active");
							$(".location__ellipse-sm").removeClass("active");
							$(".location__path_icon ").css({ left: `calc(50% - ${pos}px)` });
						} else {
							// $(".location__path_icon svg").css({ left: `${pos / 2}px`, right: "auto" });
							$(".location__path_icon ").css({ left: "50%" });
							$(".location__slides_btn.first").addClass("active");
							$(".location__slides_btn.last").removeClass("active");
							$(".location__ellipse-sm").addClass("active");
							$(".location__ellipse").removeClass("active");
						}
					}
				} else {
					const pos = +$(window).width() - +$(".location__path_icon").innerWidth();

					if ($(".location").hasClass("tour")) {
						$(".location__path_icon").css({ left: "50%" });
					} else {
						if (imagesSlider.activeIndex == 1) {
							$(".location__slides_btn.last").addClass("active");
							$(".location__slides_btn.first").removeClass("active");
							$(".location__ellipse").addClass("active");
							$(".location__ellipse-sm").removeClass("active");
							$(".location__path_icon ").css({ left: "50%" });
						} else {
							// $(".location__path_icon svg").css({ left: `${pos / 2}px`, right: "auto" });
							$(".location__path_icon ").css({ left: `calc(50% - ${pos}px)` });
							$(".location__slides_btn.first").addClass("active");
							$(".location__slides_btn.last").removeClass("active");
							$(".location__ellipse-sm").addClass("active");
							$(".location__ellipse").removeClass("active");
						}
					}
				}
			});
		}

		return imagesSlider;
	}
}

// function locationNavigationSliders() {
// 	const imgSliders = document.querySelector(".location_navigation_sliders");

// 	if (!imgSliders) return;

// 	const imagesSlides = document.querySelectorAll(".location__images_slider");

// 	const imagesSliders = new Swiper(imgSliders, {
// 		speed: 1000,
// 		effect: "fade",
// 		allowTouchMove: false,
// 		navigation: {
// 			prevEl: ".location__control_sheme-tab .location_tab[data-target=panoram]",
// 			nextEl: ".location__control_sheme-tab .location_tab[data-target=sheme]",
// 		},
// 		on: {
// 			afterInit: function (el) {
// 				const locationImages = imgSliders.querySelectorAll(".location__images_slider");
// 				if (locationImages.length) {
// 					const activeIndexName = imgSliders.querySelectorAll(".location__images_slider")[el.activeIndex].dataset.name;
// 					console.log(111);
// 					$(".location__control_tabs .dropdown-slider").each((i, drop) => {
// 						if ($(drop).data("name") == activeIndexName) {
// 							$(drop).show();
// 						} else {
// 							$(drop).hide();
// 						}
// 					});
// 				}
// 			},
// 		},
// 	});
// 	imagesSliders.init();
// 	for (let image of imagesSlides) {
// 		let imgSlider = new Swiper(image.querySelector(".swiper"), {
// 			speed: 1000,
// 			effect: "fade",
// 			allowTouchMove: false,
// 			pagination: {
// 				el: `.location__control_tabs .dropdown-slider[data-name=${image.dataset.name}] .dropdown-slider__tabs`,
// 				type: "bullets",
// 				clickable: true,
// 				bulletClass: "btn_tab",
// 				bulletActiveClass: "active",
// 				renderBullet: function (current, total) {
// 					const slide = Array.from(image.querySelectorAll(".swiper-slide"))[current];

// 					return `<span class="btn btn_tab dropdown-slider__item ${total} ${
// 						slide.classList.contains("swiper-slide-active") ? "active" : ""
// 					}"><span class="value">${Array.from(image.querySelectorAll(".swiper-slide"))[current].dataset.name}</span></span>`;
// 				},
// 			},
// 		});
// 	}

// 	imagesSliders.on("slideChange", function (slider) {
// 		const activeIndexName = slider.slides[slider.activeIndex].dataset.name;

// 		$(".location__control_tabs .dropdown-slider").each((i, drop) => {
// 			if ($(drop).data("name") == activeIndexName) {
// 				$(drop).show();
// 			} else {
// 				$(drop).hide();
// 			}
// 		});
// 	});
// }

function calendarSliders() {
	const months = document.querySelector(".calendar__months_slider");
	const years = document.querySelector(".calendar__years_slider");
	const calendar = document.querySelector(".calendar__dates_slider");

	if (!months || !calendar) return;

	const slides = months.querySelectorAll(".swiper-slide");
	const curSlide = months.querySelector(".current");
	let curSlideIndex = Array.prototype.indexOf.call(slides, curSlide);

	const monthsSlider = new Swiper(months, {
		speed: 500,
		initialSlide: curSlideIndex,
		navigation: {},
	});
	const yearsSlider = new Swiper(years, {
		speed: 500,
		initialSlide: curSlideIndex,
		navigation: {},
	});
	const datesSlider = new Swiper(calendar, {
		speed: 500,
		initialSlide: curSlideIndex,
	});
}

function changeCalendarBlock() {
	var el = $('[id ^= "filter_calendar"]'); // найдем div с календарем
	var links = el.find(".calendar__day"); // найдем элементы отображающие дни
	var date = new Date();
	for (var i = 0; i < links.length; i++) {
		var atrDate = links[i].attributes["data-date"].value;
		var d = date.valueOf();
		var g = links[i].innerHTML;
		if (date - atrDate > 24 * 60 * 60 * 1000) {
			// меняем класс у элемента отображающего день, который меньше по дате чем текущий день
			$('[data-date="' + atrDate + '"]').addClass("bx-calendar-date-hidden disables");
		}
	}
}

function changeCalendar() {
	changeCalendarBlock();
	// следит за изменением календаря
	var BXcalendars = BX.findChildrenByClassName(document, "bx-calendar-cell-block", true);
	// создаем экземпляр наблюдателя с указанной функцией колбэка
	const callback = function (mutationList, observer) {
		changeCalendarBlock();
	};
	const observer = new MutationObserver(callback);
	BXcalendars.forEach(function (item, i, arr) {
		observer.observe(item, { attributes: true, childList: true, subtree: false });
	});
}

function eventSlider() {
	const eventPicture = document.querySelector(".fs__picture_slider");

	if (!eventPicture) return;

	const slider = new Swiper(eventPicture, {
		speed: 700,

		navigation: {
			prevEl: ".fs__picture_slider .swiper-prev-btn",
			nextEl: ".fs__picture_slider .swiper-next-btn",
		},
		pagination: {
			el: ".fs__picture .swiper-pagination",
			type: "bullets",
			clickable: true,
		},
		breakpoints: {
			576: {
				speed: 700,
			},
			768: {
				speed: 800,
			},
			991: {
				speed: 900,
			},
			1200: {
				speed: 1000,
			},
		},
	});
}

function personSliders() {
	const persons = document.querySelectorAll(".event__person_slider");

	if (!persons.length) return;

	for (let person of persons) {
		const personCont = person.closest(".event__person_slider-cont");

		const slider = new Swiper(person, {
			speed: 1000,
			navigation: {
				prevEl: personCont.querySelector(".swiper-prev-btn"),
				nextEl: personCont.querySelector(".swiper-next-btn"),
			},
			pagination: {
				el: personCont.querySelector(".swiper-pagination"),
				type: "bullets",
				clickable: true,
			},
		});
	}
}

function personalSlider() {
	const personal = document.querySelector(".personal__slider");

	if (!personal) return;

	const slider = new Swiper(personal, {
		speed: 1000,
		autoplay: {
			delay: 5000,
		},
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		navigation: {
			prevEl: ".personal__slider_control .swiper-prev-btn",
			nextEl: ".personal__slider_control .swiper-next-btn",
		},
	});

	return slider;
}

function festSlider() {
	const fest = document.querySelector(".festival__slider");

	if (!fest) return;

	const festSlider = new Swiper(fest, {
		effect: "creative",
		creativeEffect: {
			prev: {
				shadow: true,
				translate: ["-20%", 0, -1],
				opacity: 0,
			},
			next: {
				translate: ["100%", 0, 0],
			},
		},
		speed: 1000,
		navigation: {
			prevEl: ".festival__slider .swiper-prev-btn",
			nextEl: ".festival__slider .swiper-next-btn",
		},
		pagination: {
			el: ".festival .swiper-pagination",
			type: "bullets",
			clickable: true,
		},
	});
}

// function descSlider() {
// 	const desc = document.querySelector(".description__slider");

// 	if (!desc) return;

// 	const descSlider = new Swiper(desc, {
// 		slidesPerView: 1,
// 		slidesPerGroup: 1,
// 		spaceBetween: 4,
// 		speed: 1000,
// 		navigation: {
// 			prevEl: ".description__sliders .description__slider_control .swiper-prev-btn",
// 			nextEl: ".description__sliders .description__slider_control .swiper-next-btn",
// 		},
// 		breakpoints: {
// 			320: {
// 				slidesPerView: 1,
// 				slidesPerGroup: 1,
// 				spaceBetween: 4,
// 			},
// 			576: {
// 				slidesPerView: 2,
// 				slidesPerGroup: 1,
// 				spaceBetween: 4,
// 			},
// 			767: {
// 				slidesPerView: 3,
// 				slidesPerGroup: 1,
// 				spaceBetween: 4,
// 			},
// 			991: {
// 				slidesPerView: 3,
// 				slidesPerGroup: 1,
// 				spaceBetween: 16,
// 			},
// 			1440: {
// 				slidesPerView: 4,
// 				slidesPerGroup: 1,
// 				spaceBetween: 25,
// 			},
// 		},
// 	});

// 	$(document).on("click", ".description__sliders .description__slider_tabs .dropdown__item", function () {
// 		const before = $(this).closest(".description__slider_tabs").find(".before");

// 		if ($(this).hasClass("active")) return;

// 		let tabs = $(this).data("tabs");

// 		$(".description__sliders .description__slider_tabs .dropdown__item").removeClass("active");

// 		$(this).addClass("active");

// 		$(before).css({ left: $(this).position().left + "px" });

// 		if (tabs === 1) {
// 			$(desc).find("img").css({ "aspect-ratio": "16/8.5" });
// 			$(desc).css({ overflow: "hidden" });
// 			descSlider.params.slidesPerView = tabs;
// 			descSlider.params.autoHeight = true;
// 			descSlider.params.breakpoints = {
// 				320: {
// 					slidesPerView: 1,
// 					slidesPerGroup: 1,
// 					spaceBetween: 4,
// 				},
// 				576: {
// 					slidesPerView: 1,
// 					slidesPerGroup: 1,
// 					spaceBetween: 4,
// 				},
// 				767: {
// 					slidesPerView: 1,
// 					slidesPerGroup: 1,
// 					spaceBetween: 4,
// 				},
// 				991: {
// 					slidesPerView: 1,
// 					slidesPerGroup: 1,
// 					spaceBetween: 16,
// 				},
// 				1440: {
// 					slidesPerView: 1,
// 					slidesPerGroup: 1,
// 					spaceBetween: 25,
// 				},
// 			};
// 			window.scroll.scrollTo(desc);
// 		} else {
// 			$(desc).css({ overflow: "visible" });
// 			$(desc).find("img").css({ "aspect-ratio": "auto" });

// 			if (window.outerWidth < 1440) tabs = 3;

// 			if (window.outerWidth < 767) tabs = 2;
// 			if (window.outerWidth < 576) tabs = 1;

// 			descSlider.params.slidesPerView = tabs;
// 			descSlider.params.autoHeight = true;
// 			descSlider.params.breakpoints = {
// 				320: {
// 					slidesPerView: 1,
// 					slidesPerGroup: 1,
// 					spaceBetween: 4,
// 				},
// 				576: {
// 					slidesPerView: 2,
// 					slidesPerGroup: 1,
// 					spaceBetween: 4,
// 				},
// 				767: {
// 					slidesPerView: 3,
// 					slidesPerGroup: 1,
// 					spaceBetween: 4,
// 				},
// 				991: {
// 					slidesPerView: 3,
// 					slidesPerGroup: 1,
// 					spaceBetween: 16,
// 				},
// 				1440: {
// 					slidesPerView: 4,
// 					slidesPerGroup: 1,
// 					spaceBetween: 25,
// 				},
// 			};
// 		}

// 		descSlider.update();
// 		descSlider.updateSize();
// 	});
// }

// function historySliders() {
// 	const history = document.querySelector(".history__sliders");

// 	if (!history) return;

// 	const desc = history.querySelector(".history__desc_slider"),
// 		images = history.querySelector(".history__images_slider"),
// 		dates = history.querySelector(".history__dates_slider"),
// 		imageSliders = history.querySelectorAll(".history__images");

// 	let datesSlider = new Swiper(dates, {
// 		speed: 1000,
// 		slidesPerView: 1,
// 		spaceBetween: 4,
// 		navigation: {
// 			prevEl: ".history__dates .swiper-prev-btn",
// 			nextEl: ".history__dates .swiper-next-btn",
// 		},
// 		freeMode: true,
// 		breakpoints: {
// 			320: { slidesPerView: 1, spaceBetween: 4 },
// 			576: { slidesPerView: 1, spaceBetween: 4 },
// 			769: {
// 				slidesPerView: 3,
// 				spaceBetween: 4,
// 			},
// 			991: { slidesPerView: 4, spaceBetween: 8 },
// 			1200: {
// 				slidesPerView: 4,
// 				spaceBetween: 16,
// 			},
// 			1441: { slidesPerView: 6, spaceBetween: 32 },
// 		},
// 	});

// 	let imagesSlider = new Swiper(images, {
// 		speed: 1000,
// 		fadeEffect: {
// 			crossFade: true,
// 		},
// 		// thumbs: {
// 		// 	swiper: datesSlider,
// 		// },
// 	});

// 	for (let [i, image] of imageSliders.entries()) {
// 		let slider = new Swiper(image.querySelector(".swiper"), {
// 			speed: 1000,
// 			// effect: "slide",

// 			navigation: {
// 				prevEl: `.history__desc .swiper-nav-${i} .swiper-prev-btn`,
// 				nextEl: `.history__desc .swiper-nav-${i} .swiper-next-btn`,
// 			},
// 			pagination: {
// 				el: image.querySelector(".swiper-pagination"),
// 				type: "bullets",
// 				clickable: true,
// 			},
// 		});
// 	}

// 	let descSlider = new Swiper(desc, {
// 		speed: 1000,
// 		effect: "fade",
// 		fadeEffect: {
// 			crossFade: true,
// 		},
// 		// thumbs: {
// 		// 	swiper: datesSlider,
// 		// },
// 	});
// 	// datesSlider.on("slideChange", function (slider) {
// 	// 	const activeSlide = slider.activeIndex;

// 	// 	imagesSlider.slideTo(activeSlide);
// 	// 	descSlider.slideTo(activeSlide);
// 	// });
// 	$(".history__dates_slide").each((i, date) => {
// 		console.log(i);

// 		if (i !== 0) {
// 			$(date).removeClass("active");
// 		} else {
// 			$(date).addClass("active");
// 		}
// 	});
// 	$(document).on("click", ".history__dates_slide", function (e) {
// 		const ariaLabel = $(this).attr("aria-label");
// 		const slideIndex = ariaLabel.split("/")[0].trim();
// 		console.log(slideIndex);

// 		imagesSlider.slideTo(slideIndex - 1);
// 		descSlider.slideTo(slideIndex - 1);
// 		datesSlider.slideTo(slideIndex - 1);
// 		$(".history__dates_slide").each((i, date) => {
// 			if (i !== slideIndex - 1) {
// 				$(date).removeClass("active");
// 			} else {
// 				$(date).addClass("active");
// 			}
// 		});
// 		// const activeSlide = slider.activeIndex;

// 		// imagesSlider.slideTo(activeSlide);
// 		// descSlider.slideTo(activeSlide);
// 	});
// 	// imagesSlider.on("slideChange", function (slider) {
// 	// 	const activeSlide = slider.activeIndex;

// 	// 	descSlider.slideTo(activeSlide);
// 	// });
// 	return descSlider;
// }
 
// function organSliders() {
// 	const organ = document.querySelector(".organ__sliders");

// 	if (!organ) return;

// 	const desc = organ.querySelector(".organ__desc_slider"),
// 		images = organ.querySelector(".organ__images_slider");

// 	let imagesSlider = new Swiper(images, {
// 		speed: 700,
// 		fadeEffect: {
// 			crossFade: true,
// 		},
// 		slidesPerView: 1,
// 		navigation: {
// 			prevEl: ".organ__sliders .swiper-prev-btn",
// 			nextEl: ".organ__sliders .swiper-next-btn",
// 		},
// 	});

// 	let descSlider = new Swiper(desc, {
// 		speed: 700,
// 		fadeEffect: {
// 			crossFade: true,
// 		},
// 		// effect: "fade",
// 		slidesPerView: 1,
// 		spaceBetween: 30,
// 		navigation: {
// 			prevEl: ".organ__sliders .swiper-prev-btn",
// 			nextEl: ".organ__sliders .swiper-next-btn",
// 		},
// 	});
// 	return descSlider;
// }

// function awardsSlider() {
// 	const news = document.querySelector(".awards__slider");

// 	if (!news) return;

// 	const newsSlider = new Swiper(news, {
// 		slidesPerView: 1,
// 		slidesPerGroup: 1,
// 		spaceBetween: 8,
// 		navigation: {
// 			nextEl: ".awards .swiper-next-btn",
// 			prevEl: ".awards .swiper-prev-btn",
// 		},
// 		pagination: {
// 			el: ".awards .swiper-pagination",
// 			type: "bullets",
// 			clickable: true,
// 		},
// 		breakpoints: {
// 			576: {
// 				slidesPerView: 2,
// 				spaceBetween: 24,
// 			},
// 			769: {
// 				slidesPerView: 2,
// 				spaceBetween: 24,
// 			},
// 			991: {
// 				slidesPerView: 3,
// 				spaceBetween: 24,
// 			},
// 			1200: {
// 				slidesPerView: 3,
// 				spaceBetween: 24,
// 			},
// 			1441: {
// 				slidesPerView: 3,
// 				spaceBetween: 32,
// 			},
// 		},
// 	});
// }

function aboutSliders() {
	const sliders = document.querySelectorAll(".about__slider");
	const hallsSlider = document.querySelector(".about__halls_slider");

	if (!sliders.length) return;

	const aboutHallsSlider = new Swiper(hallsSlider, {
		effect: "fade",
		allowTouchMove: false,
		speed: 1000,
		autoHeight: true,
		pagination: {
			el: ".about__sliders_control .dropdown-slider__tabs",
			type: "bullets",
			clickable: true,
			bulletClass: "btn_tab",
			bulletActiveClass: "active",
			renderBullet: function (current, total) {
				const slide = Array.from(hallsSlider.querySelectorAll(".about__sliders_tab"))[current];
				const pagin = $(".about__sliders_control .dropdown-slider__tabs");

				return `<span class="btn btn_tab  dropdown-slider__item ${total} ${slide.classList.contains("swiper-slide-active") ? "active" : ""
					}"><span class="value">${Array.from(hallsSlider.querySelectorAll(".about__sliders_tab"))[current].dataset.name}</span></span>`;
			},
		},
		on: {
			afterInit: function () {
				const pagin = $(".about__sliders_control .dropdown-slider__tabs");
				const paginBg = $(pagin).find(".before");

				const activeTab = $(pagin).find(".active");

				$(pagin)
					.closest(".dropdown-slider")
					.find(".dropdown-slider__value .value")
					.text(Array.from(hallsSlider.querySelectorAll(".about__sliders_tab"))[0].dataset.name);
				$(".about__sliders_control .dropdown-slider__tabs").append(`<div class="before"></div>`);
				$(".about__sliders_control .dropdown-slider__tabs .before").width(
					$(".about__sliders_control .dropdown-slider__tabs .active").innerWidth()
				);
			},
		},
	});

	aboutHallsSlider.on("slideChange", function (slider) {
		const activeSlide = $(slider.slides)[slider.activeIndex];
		const pagin = $(".about__sliders_control .dropdown-slider__tabs");
		const paginBg = $(pagin).find(".before");

		const activeTab = $(pagin).find(".active");

		$(paginBg).css({ width: $(activeTab).innerWidth(), left: $(activeTab).position().left + "px" });
		$(pagin).closest(".dropdown-slider").find(".dropdown-slider__value .value").text($(activeTab).text());

		scroll.stop();
		// window.scroll.update();
		window.scroll.start();
	});

	$(window).resize(function () {
		const pagin = $(".about__sliders_control .dropdown-slider__tabs");
		const paginBg = $(pagin).find(".before");

		const activeTab = $(pagin).find(".active");
		// window.scroll.update();
		window.scroll.start();
	});

	for (let slider of sliders) {
		const sliderCont = slider.closest(".about__sliders_tab");

		const aboutSlider = new Swiper(slider, {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 4,
			speed: 1000,
			navigation: {
				prevEl: sliderCont.querySelector(".description__slider_control .swiper-prev-btn"),
				nextEl: sliderCont.querySelector(".description__slider_control .swiper-next-btn"),
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					slidesPerGroup: 1,
					spaceBetween: 4,
				},
				576: {
					slidesPerView: 2,
					slidesPerGroup: 1,
					spaceBetween: 4,
				},
				767: {
					slidesPerView: 3,
					slidesPerGroup: 1,
					spaceBetween: 4,
				},
				991: {
					slidesPerView: 3,
					slidesPerGroup: 1,
					spaceBetween: 16,
				},
				1440: {
					slidesPerView: 4,
					slidesPerGroup: 1,
					spaceBetween: 25,
				},
			},
		});
		let tabs = 0;
		$(sliderCont)
			.find(".description__slider_tabs .dropdown__item")
			.on("click", function () {
				const before = $(this).closest(".description__slider_tabs").find(".before");

				if ($(this).hasClass("active")) return;

				tabs = $(this).data("tabs");

				$(sliderCont).find(".description__slider_tabs .dropdown__item").removeClass("active");

				$(this).addClass("active");

				$(before).css({ left: $(this).position().left + "px" });

				if (tabs === 1) {
					$(slider).find("img").css({ "aspect-ratio": "16/9" });
					$(slider).css({ overflow: "hidden" });
					aboutSlider.params.slidesPerView = tabs;
					aboutSlider.params.autoHeight = true;
					aboutSlider.params.breakpoints = {
						320: {
							slidesPerView: 1,
							slidesPerGroup: 1,
							spaceBetween: 4,
						},
						576: {
							slidesPerView: 1,
							slidesPerGroup: 1,
							spaceBetween: 4,
						},
						767: {
							slidesPerView: 1,
							slidesPerGroup: 1,
							spaceBetween: 4,
						},
						991: {
							slidesPerView: 1,
							slidesPerGroup: 1,
							spaceBetween: 16,
						},
						1440: {
							slidesPerView: 1,
							slidesPerGroup: 1,
							spaceBetween: 25,
						},
					};
					window.scroll.scrollTo(slider);
				} else {
					$(slider).find("img").css({ "aspect-ratio": "auto" });
					$(slider).css({ overflow: "visible" });

					if (window.outerWidth < 1440) tabs = 3;

					if (window.outerWidth < 767) tabs = 2;
					if (window.outerWidth < 576) tabs = 1;

					aboutSlider.params.slidesPerView = tabs;
					aboutSlider.params.autoHeight = true;
					aboutSlider.params.breakpoints = {
						320: {
							slidesPerView: 1,
							slidesPerGroup: 1,
							spaceBetween: 4,
						},
						576: {
							slidesPerView: 2,
							slidesPerGroup: 1,
							spaceBetween: 4,
						},
						767: {
							slidesPerView: 3,
							slidesPerGroup: 1,
							spaceBetween: 4,
						},
						991: {
							slidesPerView: 3,
							slidesPerGroup: 1,
							spaceBetween: 16,
						},
						1440: {
							slidesPerView: 4,
							slidesPerGroup: 1,
							spaceBetween: 25,
						},
					};
				}
				$(window).resize();
				aboutSlider.update();
				aboutSlider.updateSize();
				aboutHallsSlider.update();
				// window.scroll.update();/
				window.scroll.start();
			});
	}
}

function partnersSliders() {
	const sliders = document.querySelectorAll(".partners__slider");
	const hallsSlider = document.querySelector(".partners__halls_slider");

	const aboutHallsSlider = new Swiper(hallsSlider, {
		effect: "fade",
		allowTouchMove: false,
		speed: 1000,
		pagination: {
			el: ".about__sliders_control .dropdown-slider__tabs",
			type: "bullets",
			clickable: true,
			bulletClass: "btn_tab",
			bulletActiveClass: "active",
			renderBullet: function (current, total) {
				const pagin = $(".about__sliders_control .dropdown-slider__tabs");
				const slide = Array.from(hallsSlider.querySelectorAll(".about__sliders_tab"))[current];
				$(pagin)
					.closest(".dropdown-slider")
					.find(".dropdown-slider__value .value")
					.text(Array.from(hallsSlider.querySelectorAll(".about__sliders_tab"))[current].dataset.name);
				return `<span class="btn btn_tab  dropdown-slider__item ${total} ${slide.classList.contains("swiper-slide-active") ? "active" : ""
					}"><span class="value">${Array.from(hallsSlider.querySelectorAll(".about__sliders_tab"))[current].dataset.name}</span></span>`;
			},
		},
		on: {
			afterInit: function () {
				const pagin = $(".about__sliders_control .dropdown-slider__tabs");
				const paginBg = $(pagin).find(".before");

				const activeTab = $(pagin).find(".dropdown-slider__item")[0];
				$(pagin).closest(".dropdown-slider").find(".dropdown-slider__value .value").text($(activeTab).text());
				$(".about__sliders_control .dropdown-slider__tabs").append(`<div class="before"></div>`);
				$(".about__sliders_control .dropdown-slider__tabs .before").width(
					$(".about__sliders_control .dropdown-slider__tabs .active").innerWidth()
				);
			},
		},
	});

	aboutHallsSlider.on("slideChange", function (slider) {
		const activeSlide = $(slider.slides)[slider.activeIndex];
		const pagin = $(".about__sliders_control .dropdown-slider__tabs");
		const paginBg = $(pagin).find(".before");

		const activeTab = $(pagin).find(".active");

		$(paginBg).css({ width: $(activeTab).innerWidth(), left: $(activeTab).position().left + "px" });
		$(pagin).closest(".dropdown-slider").find(".dropdown-slider__value .value").text($(activeTab).text());
	});

	$(window).resize(function () {
		const pagin = $(".about__sliders_control .dropdown-slider__tabs");

		if (!$(pagin).length) return;

		const paginBg = $(pagin).find(".before");

		const activeTab = $(pagin).find(".active");

		// $(paginBg).css({ width: $(activeTab).innerWidth(), left: $(activeTab).position().left + "px" });
	});
}

function cafeSliders() {
	const sliders = document.querySelectorAll(".partners__slider");
	const hallsSlider = document.querySelector(".partners__halls_slider.cafe_slider");

	// if (!sliders.length) return;

	const aboutHallsSlider = new Swiper(hallsSlider, {
		effect: "fade",
		allowTouchMove: false,
		speed: 1000,
		autoHeight: true,
		pagination: {
			el: ".about__sliders_control .dropdown-slider__tabs",
			type: "bullets",
			clickable: true,
			bulletClass: "btn_tab",
			bulletActiveClass: "active",
			renderBullet: function (current, total) {
				const slide = Array.from(hallsSlider.querySelectorAll(".about__sliders_tab"))[current];
				return `<span class="btn btn_tab  dropdown-slider__item ${total} ${slide.classList.contains("swiper-slide-active") ? "active" : ""
					}"><span class="value">${Array.from(hallsSlider.querySelectorAll(".about__sliders_tab"))[current].dataset.name}</span></span>`;
			},
		},
		on: {
			init: function () {
				const pagin = $(".about__sliders_control .dropdown-slider__tabs");
				// const paginBg = $(pagin).find(".before");

				const activeTab = $(pagin).find(".active");

				$(pagin).closest(".dropdown-slider").find(".dropdown-slider__value .value").text($(activeTab).text());
				// $(".about__sliders_control .dropdown-slider__tabs").append(`<div class="before"></div>`);
				// $(".about__sliders_control .dropdown-slider__tabs .before").width(
				// 	$(".about__sliders_control .dropdown-slider__tabs .active").innerWidth()
				// );
			},
		},
	});

	aboutHallsSlider.on("slideChange", function (slider) {
		const activeSlide = $(slider.slides)[slider.activeIndex];
		const pagin = $(".about__sliders_control .dropdown-slider__tabs");
		// const paginBg = $(pagin).find(".before");

		const activeTab = $(pagin).find(".active");

		// $(paginBg).css({ width: $(activeTab).innerWidth(), left: $(activeTab).position().left + "px" });
		$(pagin).closest(".dropdown-slider").find(".dropdown-slider__value .value").text($(activeTab).text());
	});

	$(document).on("click", ".all_menu", function () {
		aboutHallsSlider.params.slidesPerView = aboutHallsSlider.slides.length;
		aboutHallsSlider.params.slidesPerGroup = aboutHallsSlider.slides.length;

		aboutHallsSlider.update();
		aboutHallsSlider.updateSize();
	});

	$(window).resize(function () {
		const pagin = $(".about__sliders_control .dropdown-slider__tabs");

		if (!$(pagin).length) return;

		const paginBg = $(pagin).find(".before");

		const activeTab = $(pagin).find(".active");

		$(paginBg).css({ width: $(activeTab).innerWidth(), left: $(activeTab).position().left + "px" });
	});

	return aboutHallsSlider;
}
