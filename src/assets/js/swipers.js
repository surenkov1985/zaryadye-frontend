import Swiper from "swiper";
import $ from "jquery"
// import { gsap } from "gsap";

export const fsSliders = () => {
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
			$(".head").not(".mobile__head").addClass("head_light");
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
		console.log('change');
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
	return imagesSlider;
};

export function locationSliders() {
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
		imagesSlider.on("afterInit", function () {});
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

export function changeCalendarBlock() {
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

export function changeCalendar() {
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

export function personSliders() {
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

export function festSlider() {
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

export function aboutSliders() {
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

				return `<span class="btn btn_tab  dropdown-slider__item ${total} ${
					slide.classList.contains("swiper-slide-active") ? "active" : ""
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

export function partnersSliders() {
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
				return `<span class="btn btn_tab  dropdown-slider__item ${total} ${
					slide.classList.contains("swiper-slide-active") ? "active" : ""
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

export function cafeSliders() {
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
				return `<span class="btn btn_tab  dropdown-slider__item ${total} ${
					slide.classList.contains("swiper-slide-active") ? "active" : ""
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
