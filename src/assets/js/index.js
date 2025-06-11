

import $ from "jquery" 

import { OverlayScrollbars } from "overlayscrollbars";
import Lenis from "lenis";
import { closePopup, formatValueInput,  hideFixedHeader,  maskedEmail,  openPopup,  scrollTopHide,  scrollTopShow,  ShapeOverlays, showFixedHeader, validationFormFields } from "./methods";
import Typograf from "typograf";
import Cookies from 'js-cookie';
const DARK_THEME_TIME = 19;
const LIGHT_THEME_TIME = 7;

document.addEventListener("DOMContentLoaded", function () {
	
	const isDateChecked = localStorage.getItem("isDateChecked");

	if (isDateChecked && document.querySelector("#filter_calendar")) {
		document.querySelector("#filter_calendar").classList.add("isDateChecked");
	}

	if (document.querySelector(".events__filter_form")) {
		const form = document.querySelector(".events__filter_form");
		const inputs = $(form).find("input");

		if (
			Array.from($(inputs)).some((item) => {
				return $(item).prop("checked");
			})
		) {
			$('[data-target="#filter"]').addClass("isDateChecked");
		}
	}
	if (document.querySelector(".leaders .about__desc_text")) {
		const lineHeight = parseFloat($(".leaders .about__desc_text p").css("line-height"));
		$(".leaders .about__desc_text").css({ "max-height": lineHeight * 10 + "px", height: "auto" });
	}
	$(document).on("click", ".leaders .about__more_link", function (e) {
		e.preventDefault();
		const lineHeight = parseFloat($(".leaders .about__desc_text p").css("line-height"));
		const leaders = this.closest(".leaders");
		const clampedText = leaders.querySelector(".about__desc_text");
		const tl = gsap.timeline();

		if (clampedText.offsetHeight < clampedText.scrollHeight) {
			tl.to(clampedText, { maxHeight: clampedText.scrollHeight, duration: 0.3, ease: "none" }).then(() => {
				$(this).text("Свернуть");
			});
		} else {
			tl.to(clampedText, { maxHeight: lineHeight * 10, duration: 0.3, ease: "none" }).then(() => {
				$(this).text("Читать всё");
			});
		}
	});
	if (document.querySelector(".performer .about__desc_text")) {
		const aboutText = document.querySelector(".performer .about__desc_text")
		const childs = aboutText.children
		const count = 3
		let height = 0
		Array.from(childs).forEach((item, index) => {
			if (index < count - 1) {
				height += $(item).outerHeight( true );
			} 
			if (index === count - 1) {
				height += $(item).outerHeight(  );
			} 
		})
		// for (let i = 0; i < count; i++) {
		// 	height += $(paragraphs[i]).outerHeight( true );
		// }
		const lineHeight = parseFloat($(".performer .about__desc_text p").css("line-height"));
		$(".performer .about__desc_text").css({ "max-height": height + "px", height: "auto" });
	}
	$(document).on("click", ".performer .about__more_link", function (e) {
		e.preventDefault();
		const lineHeight = parseFloat($(".performer .about__desc_text p").css("line-height"));
		const leaders = this.closest(".performer");
		const clampedText = leaders.querySelector(".about__desc_text");
		const childs = clampedText.children
		const count = 3
		let height = 0
		Array.from(childs).forEach((item, index) => {
			if (index < count - 1) {
				height += $(item).outerHeight( true );
			} 
			if (index === count - 1) {
				height += $(item).outerHeight(  );
			} 
		})
		// const paragraphs = clampedText.querySelectorAll('p')
		// const count = 3
		// let height = 0
		// for (let i = 0; i < count; i++) {
		// 	height += $(paragraphs[i]).outerHeight( true );
		// }
		const tl = gsap.timeline();

		if (clampedText.offsetHeight < clampedText.scrollHeight) {
			tl.to(clampedText, { maxHeight: clampedText.scrollHeight, duration: 0.3, ease: "none" }).then(() => {
				$(this).text("Свернуть");
			});
		} else {
			tl.to(clampedText, { maxHeight: height, duration: 0.3, ease: "none" }).then(() => {
				$(this).text("Узнать больше");
			});
		}
	});
	// locationSliders();
	const elmOverlay = document.querySelector(".shape-overlays");
	var overlay = new ShapeOverlays(elmOverlay);
	let scrollPosition = localStorage.getItem("scrollPosY") ? localStorage.getItem("scrollPosY") : 0;
	(function () {
		window.scroll = new Lenis({
			autoRaf: true,
			smooth: true,
			lerp: 0.06,
			getSpeed: true,
			multiplier: 0.6,
			scrollFromAnywhere: true,
			getDirection: true,
			prevent: (node) => {
				return !node.closest(".mobile") && ($(node).css("overflow") === "auto" || $(node).css("overflow") === "scroll");
			},
			smartphone: {
				smooth: !0,
				breakpoint: 767,
				smooth: true,
				lerp: 0.06,
			},
			tablet: {
				smooth: !0,
				breakpoint: 1024,
				smooth: true,
				lerp: 0.06,
				multiplier: 4,
			},
		});
		var minProgress = 0.3;
		var maxProgress = 0.75;
		scroll.on("scroll", (args) => {
			let posTop =
				window.pageYOffset !== undefined
					? window.pageYOffset
					: (document.documentElement || document.body.parentNode || document.body).scrollTop;
			let events = document.querySelectorAll(".events__item");
			if (posTop >= 0) {
				const head = $(".head").not(".mobile__head");
				if (scroll.direction < 0) {
					if (!$(".head.fixed").hasClass("show")) {
						showFixedHeader();
					}
				} else if (scroll.direction > 0) {
					hideFixedHeader();
				}
			} else {
				hideFixedHeader();
			}
			if (document.querySelector(".fs_index")) {
				const height = window.innerHeight;

				if (posTop >= height / 2) {
					$(".head.fixed").css({ background: "var(--clr-bg)" });
				} else {
					$(".head.fixed").css({ background: "none" });
				}
			} else {
				if (posTop >= 200) {
					$(".head.fixed").css({ background: "var(--clr-bg)" });
				} else {
					$(".head.fixed").css({ background: "none" });
				}
			}
			if (posTop >= window.innerHeight * 2) {
				if (scroll.direction < 0) {
					scrollTopHide(".scroll_top");
				} else if (scroll.direction > 0) {
					scrollTopShow(".scroll_top");
				}
			} else {
				scrollTopHide(".scroll_top");
			}

			if ($(".events__date").length) {
				if (scroll.direction < 0) {
					if ($(".head.fixed").hasClass("show")) {
						if (window.innerWidth > 991) {
							$(".events__date").css({ top: $(".head.fixed").innerHeight() + 32 + "px" });
						} else {
							$(".events__date").css({ top: $(".head.fixed").innerHeight() + "px" });
						}
					} else {
						if (window.innerWidth > 991) {
							$(".events__date").css({ top: "32px" });
						} else {
							$(".events__date").css({ top: "0px" });
						}
					}
				} else if (scroll.direction > 0) {
					if (window.innerWidth > 991) {
						$(".events__date").css({ top: "32px" });
					} else {
						$(".events__date").css({ top: "0px" });
					}
				}
			}

			scrollPosition = args.scroll.y;
			if (window.outerWidth < 576) {
				minProgress = 0.15;
				maxProgress = 0.85;
			} else {
				minProgress = 0.2;
				maxProgress = 0.75;
			}
			if (events.length) {
				const scrollTarget = window.outerHeight - window.outerHeight * minProgress;
				events.forEach((event) => {
					const preview = event.querySelector(".events__item_preview");
					if (preview && !preview.classList.contains("isView")) {
						if (+event.getBoundingClientRect().top + preview.getBoundingClientRect().height / 2 <= scrollTarget) {
							preview.classList.add("isView");
						}
					}
				});
			}
		});

		let posTop =
			window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
		let events = document.querySelectorAll(".events__item");

		if (posTop >= 0) {
			const head = $(".head").not(".mobile__head");
			if (scroll.direction < 0) {
				if (!$(".head.fixed").hasClass("show")) {
					showFixedHeader();
				}
			} else if (scroll.direction > 0) {
				hideFixedHeader();
			}
		} else {
			hideFixedHeader();
		}
		if (posTop >= window.innerHeight * 2) {
			if (scroll.direction < 0) {
				scrollTopHide(".scroll_top");
			} else if (scroll.direction > 0) {
				scrollTopShow(".scroll_top");
			}
		} else {
			scrollTopHide(".scroll_top");
		}

		if ($(".events__date").length) {
			if (scroll.direction < 0) {
				if ($(".head.fixed").hasClass("show")) {
					if (window.innerWidth > 991) {
						$(".events__date").css({ top: $(".head.fixed").innerHeight() + 32 + "px" });
					} else {
						$(".events__date").css({ top: $(".head.fixed").innerHeight() + "px" });
					}
				} else {
					if (window.innerWidth > 991) {
						$(".events__date").css({ top: "32px" });
					} else {
						$(".events__date").css({ top: "0px" });
					}
				}
			} else if (scroll.direction > 0) {
				if (window.innerWidth > 991) {
					$(".events__date").css({ top: "32px" });
				} else {
					$(".events__date").css({ top: "0px" });
				}
			}
		}

		if (window.outerWidth < 576) {
			minProgress = 0.05;
			maxProgress = 0.85;
		} else {
			minProgress = 0.05;
			maxProgress = 0.75;
		}
		// if (events.length) {
		// 	const scrollTarget = window.outerHeight - window.outerHeight * minProgress;
		// 	events.forEach((event) => {
		// 		const preview = event.querySelector(".events__item_preview");
		// 		if (preview && !preview.classList.contains("isView")) {
		// 			if (+event.getBoundingClientRect().top + preview.getBoundingClientRect().height / 2 <= scrollTarget) {
		// 				preview.classList.add("isView");
		// 			}
		// 		}
		// 	});
		// }
	})();

	const gNavItems = document.querySelectorAll(".global-menu__item");
	$(document).on("click", ".head .btn_menu", () => {
		if (overlay.isAnimating || overlay.isThemeShapeAnimating) {
			return;
		}

		let gs = gsap.timeline();
		let header = $(".head.fixed").hasClass("show") ? document.querySelector(".head.fixed") : document.querySelector("header");
		if (!$(".mobile").hasClass("show")) {
			$(".mobile").addClass("show");
			// scroll.stop();
			gs.to(".mobile", {
				opacity: 1,
				duration: 0,
			})
				.to(".mobile", {
					translateY: 0,
					duration: 1.5,
					ease: "power2.out",
				})
				.to(header, {
					opacity: 0,
					visibility: "hidden",
					duration: 0,
				})
				.to(".mobile__head", {
					opacity: 1,
					duration: 0,
				})
				.then(() => {
					$(".mobile").css({ "overflow-y": "auto" });
					$("body").addClass("hidden");
				});
			$(".mobile .animate").each((_, item) => {
				$(item).css({ opacity: 0 });
			});
			$(".mobile__contacts").css({ opacity: 0 });
			setTimeout(() => {
				$(".mobile__contacts").addClass("animate__animated animate__fadeInUpSm");
				$(".mobile .animate").each((_, item) => {
					$(item).addClass("animate__animated animate__fadeInUp");
				});
			}, 900);
		} else {
			hideMobile();
		}

		overlay.toggle();

		if (overlay.isOpened === true) {
			for (var i = 0; i < gNavItems.length; i++) {
				gNavItems[i].classList.add("is-opened");
			}
		} else {
			for (var i = 0; i < gNavItems.length; i++) {
				gNavItems[i].classList.remove("is-opened");
			}
		}
	});
	function hideMobile() {
		let gs = gsap.timeline();
		let header = $(".head.fixed").hasClass("show") ? document.querySelector(".head.fixed") : document.querySelector("header");
		overlay.toggle();
		for (var i = 0; i < gNavItems.length; i++) {
			gNavItems[i].classList.remove("is-opened");
		}
		gs.to(".mobile", {
			opacity: 0,
			duration: 0.4,
		})
			.to(".mobile", {
				translateY: "100%",
				duration: 0.2,
			})
			// .to(header, {
			// 	opacity: 1,
			// 	visibility: "visible",
			// 	duration: 0.2,
			// })
			.to(document.querySelector(".head.fixed"), {
				opacity: 1,
				visibility: "visible",
				duration: 0.2,
			})
			.to(".mobile__head", {
				opacity: 0,
				duration: 0.2,
			})
			.then(() => {
				$(".mobile").css({ "overflow-y": "hidden" });
				$(".mobile").removeClass("show");
				$("body").removeClass("hidden");
				$(".mobile__nav_sublist").removeClass("active");
				$(".mobile__contacts").removeClass("animate__animated animate__fadeInUpSm");
				$(".mobile .animate").each((_, item) => {
					$(item).removeClass("animate__animated animate__fadeInUp");
				});
			});
	}
	$(document).on("click", ".specialButton", () => {
		if (overlay.isAnimating || overlay.isThemeShapeAnimating) {
			return;
		}
		let gs = gsap.timeline();
		let header = $(".head.fixed").hasClass("show") ? document.querySelector(".head.fixed") : document.querySelector("header");
		if (!$(".mobile").hasClass("show")) {
		} else {
			hideMobile();
		}

		if (overlay.isOpened === true) {
			for (var i = 0; i < gNavItems.length; i++) {
				gNavItems[i].classList.add("is-opened");
			}
		} else {
			for (var i = 0; i < gNavItems.length; i++) {
				gNavItems[i].classList.remove("is-opened");
			}
		}
	});
	if (localStorage.getItem("startElem") && document.querySelector(`[data-scroll-id="${localStorage.getItem("startElem")}"]`)) {
		const target = document.querySelector(`[data-scroll-id="${localStorage.getItem("startElem")}"]`);
		scroll.scrollTo(target);
	}
	Array.prototype.forEach.call(document.querySelectorAll(".location_page .location__slides_container.scroll-container"), (el) => {
		const osInstance = OverlayScrollbars(el, {});
	});

	const scrollableElement = document.querySelector(".location_page .location__slides_container");
	const scrollableSlideElement = document.querySelectorAll(".location_navigation_slider.panoram");
	// Функция, которая будет вызвана при прокрутке
	if (scrollableElement) {
		let scrollableElementScrollLeft = scrollableElement.scrollLeft;
		let scrollableElementScrollTop = scrollableElement.scrollTop;
		function onHorizontalScroll() {
			// Получаем текущую горизонтальную позицию прокрутки

			const scrollLeft = scrollableElement.scrollLeft;
			if (scrollableElementScrollLeft != scrollLeft) {
				scrollableElementScrollLeft = scrollLeft;
				window.scroll.stop();
			}
		}
		// Добавляем слушатель события на прокрутку
		scrollableElement.addEventListener("scroll", onHorizontalScroll);

		scrollableElement.addEventListener("scrollend", function () {
			window.scroll.start();
		});
		scrollableElement.addEventListener("touchstart", function (e) {
			scrollableElementScrollLeft = e.touches[0].screenX;
			scrollableElementScrollTop = e.touches[0].screenY;
		});
		scrollableElement.addEventListener("touchmove", function (e) {
			const scrollLeft = e.touches[0].screenX;
			const scrollTop = e.touches[0].screenY;
			const scrollTopDiff = Math.abs(scrollTop - scrollableElementScrollTop);
			const scrollLeftDiff = Math.abs(scrollLeft - scrollableElementScrollLeft);

			if (scrollLeftDiff > scrollTopDiff) {
				scrollableElementScrollLeft = scrollLeft;
				window.scroll.stop();
			} else {
				scroll.start();
			}
		});

		scrollableElement.addEventListener("touchend", function () {
			window.scroll.start();
		});
	}

	if (scrollableSlideElement.length) {
		for (let scrollableElement of scrollableSlideElement) {
			let scrollableElementScrollLeft = scrollableElement.scrollLeft;
			function onHorizontalScroll() {
				// Получаем текущую горизонтальную позицию прокрутки

				const scrollLeft = scrollableElement.scrollLeft;
				if (scrollableElementScrollLeft != scrollLeft) {
					scrollableElementScrollLeft = scrollLeft;
					window.scroll.stop();
				}
			}
			// Добавляем слушатель события на прокрутку
			scrollableElement.addEventListener("scroll", onHorizontalScroll);

			scrollableElement.addEventListener("scrollend", function () {
				window.scroll.start();
			});

			scrollableElement.addEventListener("touchstart", function (e) {
				scrollableElementScrollLeft = e.touches[0].screenX;
				scrollableElementScrollTop = e.touches[0].screenY;
			});
			scrollableElement.addEventListener("touchmove", function (e) {
				const scrollLeft = e.touches[0].screenX;
				const scrollTop = e.touches[0].screenY;
				const scrollTopDiff = Math.abs(scrollTop - scrollableElementScrollTop);
				const scrollLeftDiff = Math.abs(scrollLeft - scrollableElementScrollLeft);

				if (scrollLeftDiff > scrollTopDiff) {
					scrollableElementScrollLeft = scrollLeft;
					window.scroll.stop();
				} else {
					window.scroll.start();
				}
			});

			scrollableElement.addEventListener("touchend", function () {
				window.scroll.start();
			});
		}
	}

	const h1 = document.querySelectorAll(".h1");
	const h2 = document.querySelectorAll(".h2");
	const h3 = document.querySelectorAll(".h3");

	for (let h of h1) {
		const rows = h.innerHTML.trim().split("<br>");
		const text = h.textContent.trim().split(" ");

		h.textContent = "";
		for (let j = 0; j < rows.length; j++) {
			const text = rows[j].split(" ");

			for (let i = 0; i < text.length; i++) {
				const container = $('<span class="title-anim-container"></span>');
				const word =
					i === text.length - 1
						? $('<span class="title-anim-content">' + text[i] + "</span>")
						: $('<span class="title-anim-content">' + text[i] + "&nbsp;</span>");

				$(word).appendTo(container);
				$(container).appendTo(h);
			}
			$("<br>").appendTo(h);
		}
	}
	for (let h of h2) {
		const rows = h.innerHTML.trim().split("<br>");
		const text = h.textContent.trim().split(" ");

		h.textContent = "";
		for (let j = 0; j < rows.length; j++) {
			const text = rows[j].split(" ");

			for (let i = 0; i < text.length; i++) {
				const container = $('<span class="title-anim-container"></span>');
				const word = $('<span class="title-anim-content">' + text[i] + "&nbsp;</span>");

				$(word).appendTo(container);
				$(container).appendTo(h);
			}
			$("<br>").appendTo(h);
		}
	}
	for (let h of h3) {
		const rows = h.innerHTML.trim().split("<br>");
		const text = h.textContent.trim().split(" ");

		h.textContent = "";
		for (let j = 0; j < rows.length; j++) {
			const text = rows[j].split(" ");

			for (let i = 0; i < text.length; i++) {
				const container = $('<span class="title-anim-container"></span>');
				const word = $('<span class="title-anim-content">' + text[i] + "&nbsp;</span>");

				$(word).appendTo(container);
				$(container).appendTo(h);
			}
			$("<br>").appendTo(h);
		}
	}

	let vh = window.innerHeight * 0.01;

	document.documentElement.style.setProperty("--vh", `${vh}px`);

	document.querySelector(".mobile").style.height = window.innerHeight + "px";

	const dropdownMultiple = document.querySelector(".filter__form_dropdown");

	if (dropdownMultiple) {
		const values = dropdownMultiple.querySelector(".dropdown__value .values"),
			valuesContainer = dropdownMultiple.querySelector(".multiple_values"),
			value = values.querySelectorAll(".value");

		if (values.getBoundingClientRect().width > valuesContainer.offsetWidth) {
			let totalCount = 0;
			const total = $('<span class="value total" style="margin-left:auto"></span>');
			$(values).append(total);

			for (let i = value.length - 1; i > 0; i--) {
				if (
					values.getBoundingClientRect().width > valuesContainer.offsetWidth ||
					valuesContainer.offsetWidth > dropdownMultiple.getBoundingClientRect().width
				) {
					values.removeChild(value[i]);
					totalCount += 1;
				}
			}

			values.querySelector(".total").textContent = "+" + totalCount;
		}
	}

	if (document.querySelector(".location__ellipse")) {
		let ellipse = document.querySelector(".location__ellipse");
		let path = ellipse.getElementsByTagName("path");
		const length = path[0].getTotalLength();
		path[0].style.strokeDasharray = length;
		path[0].style.strokeDashoffset = length;
	}

	if (document.querySelector(".location__ellipse-sm")) {
		let ellipse = document.querySelector(".location__ellipse-sm");
		let path = ellipse.getElementsByTagName("path");
		const length = path[0].getTotalLength();
		path[0].style.strokeDasharray = length;
		path[0].style.strokeDashoffset = length;
	}

	if (document.querySelector(".cafe__tabs")) {
		const pagin = $(".cafe__tabs");

		const activeTab = $(pagin).find(".active");

		$(pagin).closest(".dropdown-slider").find(".dropdown-slider__value .value").text($(activeTab).text());
	}
	const intersectionCallback = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("is-inview");
			}
		});
	};
	const intersectionOptions = {
		// root: по умолчанию window,
		// но можно задать любой элемент-контейнер
		rootMargin: "0px 0px 50px 0px",
		threshold: 0.1,
	};
	const observer = new IntersectionObserver(intersectionCallback, intersectionOptions);
	if (document.querySelectorAll(".location__path").length) {
		const locationPaths = document.querySelectorAll(".location__path");

		locationPaths.forEach((path) => {
			observer.observe(path);
		});
	}
	const eventsIntersectionCallback = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.querySelector(".events__item_preview").classList.add("isView");
			}
		});
	};
	const eventsObserver = new IntersectionObserver(eventsIntersectionCallback, intersectionOptions);
	if (document.querySelectorAll(".events__item").length) {
		const events = document.querySelectorAll(".events__item");

		events.forEach((path) => {
			eventsObserver.observe(path);
		});
	}

	const scrolledElements = document.querySelectorAll("[data-scroll]");
	scrolledElements.forEach((elem) => observer.observe(elem));

	var ZhConcertBtn = (function () {
		function loadStream() {
			if ($("[data-concert]").attr("data-concert")) {
				if ($(".zh-modal-iframe").html().trim() === "")
					$(".zh-modal-iframe").html(
						'<iframe src="' +
							$("[data-concert]").attr("data-concert") +
							'" width="100%" height="100%" marginheight="0" frameborder="0" marginwidth="0" scrolling="no" allowfullscreen></iframe>'
					);
			}
		}
		return {
			init: function () {
				loadStream();
			},
		};
	})();

	ZhConcertBtn.init();
	if ($(".head__theme input").prop("checked")) {
		if (overlay.isAnimating || overlay.isThemeShapeAnimating) return;
		$("body").addClass("dark");
		localStorage.colorTheme = "dark";
		document.cookie = "BITRIX_SM_theme=dark";
		overlay.themeToggle(10);
	}
	$(document).on("click", ".head__theme input", function (e) {
		if (overlay.isAnimating || overlay.isThemeShapeAnimating) {
			e.preventDefault();
			return;
		}
		if ($(this).prop("checked")) {
			overlay.themeToggle();
			$("body").addClass("dark");

			document.cookie = "BITRIX_SM_theme=dark";
			localStorage.colorTheme = "dark";
		} else {
			document.cookie = "BITRIX_SM_theme=light";
			localStorage.colorTheme = "light";
			overlay.themeToggle();
			$("body").removeClass("dark");
		}
	});

	let mutationObserver = new MutationObserver((mutationRecords) => {
		mutationRecords.forEach((record) => {
			const scrolledElements = document.querySelectorAll("[data-scroll]");

			scrolledElements.forEach((elem) => observer.observe(elem));
		});
	});
	const date = new Date();
	let time = date.getHours();
	let minute = date.getMinutes();

	if (window.matchMedia("(prefers-color-scheme: dark)").matches && !localStorage.hasOwnProperty("colorTheme")) {
		if (!$("body").hasClass("dark")) {
			$("body").addClass("dark");
			$(".head__theme input").prop("checked", true);
			overlay.themeToggle(1);
		}
	} else {
		if (!localStorage.hasOwnProperty("colorTheme")) {
			// //
			if (time >= DARK_THEME_TIME) {
				if (!$("body").hasClass("dark")) {
					$("body").addClass("dark");
					$(".head__theme input").prop("checked", true);
					overlay.themeToggle(1);
				}
			} else if (time >= LIGHT_THEME_TIME) {
				if ($("body").hasClass("dark")) {
					$("body").removeClass("dark");
					overlay.themeToggle(1);
					$(".head__theme input").prop("checked", false);
				}
			}
			setInterval(() => {
				const date = new Date();
				let time = date.getHours();
				let minute = date.getMinutes();

				if (time === DARK_THEME_TIME && minute === 0) {
					
					if (!$("body").hasClass("dark")) {
						$("body").addClass("dark");
						$(".head__theme input").prop("checked", true);
						overlay.themeToggle(1);
					}
				} else if (time === LIGHT_THEME_TIME && minute === 0) {
					if ($("body").hasClass("dark")) {
						$("body").removeClass("dark");
						overlay.themeToggle(1);
						$(".head__theme input").prop("checked", false);
					}
				}
			}, 60000);
			// if (!$("body").hasClass("dark")) {
			// 	if (time >= DARK_THEME_TIME) {
			// 		$("body").addClass("dark");
			// 		$(".head__theme input").prop("checked", true);
			// 		overlay.themeToggle(1);
			// 	} else if (time > LIGHT_THEME_TIME) {
			// 		$("body").removeClass("dark");
			// 	}
			// }
		} else if (localStorage.colorTheme === "light") {
			$("body").removeClass("dark");
			document.cookie = "BITRIX_SM_theme=light";
			$(".head__theme input").prop("checked", false);
		} else if (localStorage.colorTheme === "dark") {
			$("body").addClass("dark");
			document.cookie = "BITRIX_SM_theme=dark";
			$(".head__theme input").prop("checked", true);
			overlay.themeToggle(1);
		}
	}

	// наблюдать за всем, кроме атрибутов
	mutationObserver.observe(document.body, {
		childList: true, // наблюдать за непосредственными детьми
		subtree: true, // и более глубокими потомками
		characterDataOldValue: true, // передавать старое значение в колбэк
	});

	$(document).on("click", ".events__item a", function (e) {
		const target = e.target.closest(".events__item").dataset.scrollId;

		localStorage.setItem("scrollPosY", scrollPosition);
		localStorage.setItem("startElem", target.toString());
	});

	$(document).on("click", "a", function (e) {
		if (!e.target.closest(".events__item") && !e.target.closest(".back_link")) {
			localStorage.removeItem("scrollPosY");
			localStorage.removeItem("startElem");
		}
	});
});
let formData = {};
formData.sectors = [];

$(document).on("click", ".cafe__tab", function () {
	if ($(this).hasClass("active")) return;

	const pagin = $(".cafe__tabs");
	const paginBg = $(pagin).find(".before");
	let height = 0;

	$(".cafe__tab").each((_, tab) => {
		$(tab).removeClass("active");
	});

	if ($(this).attr("data-target") === "all") {
		$(".cafe__sliders_tab").each((_, price) => {
			$(price).addClass("active");
			$(this).addClass("active");

			height += $(price).outerHeight(true) + parseFloat($(".cafe__sliders_tabs").css("gap")) * 2;
		});
		// scroll.update();
	} else {
		$(".cafe__sliders_tab").each((_, price) => {
			$(price).removeClass("active");
			if ($(price).attr("data-name") === $(this).attr("data-target")) {
				$(price).addClass("active");
				$(this).addClass("active");
				$(paginBg).show();
				height = $(price).outerHeight(true);
			}
		});
		const activeTab = $(pagin).find(".active");

		// $(paginBg).css({ width: $(activeTab).innerWidth(), left: $(activeTab).position().left + "px" });
		$(pagin).closest(".dropdown-slider").find(".dropdown-slider__value .value").text($(activeTab).text());
	}

	$(".cafe__sliders_tabs").css({ "max-height": height + "px" });
});
$(document).on("click", ".filter__form_dropdown .values .icon", function (e) {
	e.preventDefault();
	const dropdown = $(this).closest(".dropdown");
	const dropdownList = $(dropdown).find(".dropdown__list");
	$(dropdown).removeClass("active");
	$(dropdownList.find(".dropdown__label")).each((i, item) => {
		if ($(item).text().trim() === $(e.target).closest(".value").text().trim()) {
			$(item).find("input").click();
		}
	});
});
$(document).on("submit", ".feedback__form", function (e) {
	e.preventDefault();

	const data = new FormData();
	const inputs = $(this).find("input");
	$(inputs).each((ind, input) => {
		data.append($(input).attr("name"), $(input).val());
	});

	if ($(this).hasClass("ajax_form")) {
		var form = $(this),
			action = $(this).attr("action");

		form.find(":input[name]")
			.not('[type="file"]')
			.each(function () {
				var field = $(this);
				data.append(field.attr("name"), field.val());
			});
		var filesField = form.find('input[type="file"]');
		var fileName = filesField.attr("name");
		var file = null;
		if (filesField.prop("files")) {
			file = filesField.prop("files")[0];
		}
		data.append(fileName, file);
		$.ajax({
			url: action,
			type: "POST",
			data: data,
			contentType: false,
			cache: false,
			processData: false,
			beforeSend: function () {
				form[0].querySelectorAll("[type=submit]").forEach((s) => {
					s.disabled = true;
				});
			},
			success: function (data) {
				form.find("input").removeClass("error");

				try {
					data = JSON.parse(data);
					if (data["errors"]) {
						for (var i = 0; i < data["errors"].length; i++) {
							form.find('input[name="' + data["errors"][i] + '"]').addClass("error");
						}
					} else {
						$(form).trigger("reset");
						setTimeout(() => {
							$(form).addClass("success");

							setTimeout(() => {
								$(form).removeClass("success");
							}, 2500);
						}, 100);
						// }
					}
				} catch (e) {
				} finally {
					form[0].querySelectorAll("[type=submit]").forEach((s) => {
						s.disabled = false;
					});
				}
			},
		});
	}
});
$(document).on("input keydown blur focusout", "input[type=tel]", function (e) {
	const label = this.closest("label");
	this.classList.remove("error");
	label.querySelector("span.error").classList.remove("show");
	let testReg = /^((8|\+7)[\- ])?(\(\d{3}\)[\- ])\d{3}[\- ]\d{2}[\- ]\d{2}$/;

	let valRegRu = /\D/gi;
	let str = formatValueInput(this, valRegRu);
	let formatStr = "";

	let rusTel = ["7", "8", "9"];

	if (rusTel.indexOf(str[0]) > -1) {
		if (str[0] === "7") {
			formatStr = "+" + str[0];
		} else if (str[0] === "8") {
			formatStr = str[0];
		} else {
			formatStr = "+7" + str[0];
		}

		if (str.length > 1) {
			formatStr += " (" + str.slice(1, 4);
		}

		if (str.length >= 5) {
			formatStr += ") " + str.slice(4, 7);
		}

		if (str.length >= 8) {
			formatStr += " " + str.slice(7, 9);
		}

		if (str.length >= 10) {
			formatStr += " " + str.slice(9, 11);
		}
	} else {
		if (str.length >= 1) formatStr = "+" + str;
	}

	this.value = formatStr;

	if (e.type === "keydown" && e.key === "Enter") {
		e.preventDefault();
		$(this).attr("data-reg", "true");
		if (this.value) {
			if (testReg.test(this.value)) {
				$(this).attr("data-test", "true");
				formData.tel = str;
			} else {
				$(this).attr("data-test", "false");
				this.classList.add("error");
				label.querySelector("span.error").classList.add("show");
				label.querySelector("span.error").textContent = "Введите валидный телефон";
			}
		} else {
			$(this).attr("data-test", "false");
			this.classList.add("error");
			label.querySelector("span.error").classList.add("show");
			label.querySelector("span.error").textContent = "Поле обязательно к заполнению";
		}
	}

	if (e.type === "blur" || e.type === "focusout") {
		$(this).attr("data-reg", "true");
		if (this.value) {
			if (testReg.test(this.value)) {
				$(this).attr("data-test", "true");
				formData.tel = str;
			} else {
				$(this).attr("data-test", "false");
				this.classList.add("error");
				label.querySelector("span.error").classList.add("show");
				label.querySelector("span.error").textContent = "Введите валидный телефон";
			}
		} else {
			$(this).attr("data-test", "false");
			this.classList.add("error");
			label.querySelector("span.error").classList.add("show");
			label.querySelector("span.error").textContent = "Поле обязательно к заполнению";
		}
	}

	validationFormFields($(this).closest("form"));
});
$(document).on("input keydown blur focusout", "input[type=email]", function (e) {
	const label = this.closest("label");
	this.classList.remove("error");
	label.querySelector("span.error").classList.remove("show");
	let valRegRu = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/gi;
	let str = maskedEmail(this);
	this.value = str;

	if (e.type === "keydown" && e.key === "Enter") {
		e.preventDefault();
		$(this).attr("data-reg", "true");
		if (this.value) {
			if (valRegRu.test(this.value)) {
				formData.email = this.value;
				$(this).attr("data-test", "true");
			} else {
				$(this).attr("data-test", "false");
				this.classList.add("error");
				label.querySelector("span.error").classList.add("show");
				label.querySelector("span.error").textContent = "Введите валидный email";
			}
		} else {
			$(this).attr("data-test", "false");
			this.classList.add("error");
			label.querySelector("span.error").classList.add("show");
			label.querySelector("span.error").textContent = "Поле обязательно к заполнению";
		}
	}

	if (e.type === "blur" || e.type === "focusout") {
		$(this).attr("data-reg", "true");
		if (this.value) {
			if (valRegRu.test(this.value)) {
				$(this).attr("data-test", "true");
				formData.email = this.value;
			} else {
				$(this).attr("data-test", "false");
				this.classList.add("error");
				label.querySelector("span.error").classList.add("show");
				label.querySelector("span.error").textContent = "Введите валидный email";
			}
		} else {
			$(this).attr("data-test", "false");
			this.classList.add("error");
			label.querySelector("span.error").classList.add("show");
			label.querySelector("span.error").textContent = "Поле обязательно к заполнению";
		}
	}

	validationFormFields($(this).closest("form"));
});
$(document).on("input keydown focusout blur", "input[name=fio]", function (e) {
	const label = this.closest("label");
	label.querySelector("span.error").classList.remove("show");

	if (e.type === "blur" || e.type === "focusout") {
		$(this).attr("data-reg", "true");
		if (this.value) {
			formData.fio = this.value;
			$(this).attr("data-test", "true");
		} else {
			this.classList.add("error");
			label.querySelector("span.error").textContent = "Поле обязательно к заполнению";
			label.querySelector("span.error").classList.add("show");
			$(this).attr("data-test", "false");
		}
	}

	validationFormFields($(this).closest("form"));
});
$(document).on("input keydown focusout blur", "input[name=name]", function (e) {
	const label = this.closest("label");
	label.querySelector("span.error").classList.remove("show");

	if (e.type === "blur" || e.type === "focusout") {
		$(this).attr("data-reg", "true");
		if (this.value) {
			formData.fio = this.value;
			$(this).attr("data-test", "true");
		} else {
			this.classList.add("error");
			label.querySelector("span.error").textContent = "Поле обязательно к заполнению";
			label.querySelector("span.error").classList.add("show");
			$(this).attr("data-test", "false");
		}
	}

	validationFormFields($(this).closest("form"));
});
window.addEventListener("resize", () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty("--vh", `${vh}px`);
	document.querySelector(".mobile").style.height = window.innerHeight + "px";
	let width = window.innerWidth;

	resizeScrollPath(width);

	const eventsFilter = document.querySelectorAll(".events__filter");

	if (eventsFilter.length) {
		for (let filter of eventsFilter) {
			if (filter.classList.contains("open")) {
				$(filter).css({ "max-height": $(filter).find(".form").innerHeight() + "px" });
			}
		}
	}
});

function resizeScrollPath(width) {
	const scrollPath = document.querySelector("#scroll_lg path");
	const icon = $(scrollPath).closest(".icon");

	if (width > 768) {
		$(scrollPath).attr(
			"d",
			`M0 ${$(icon).height() / 1.3}C${width / 2 / 1.25} ${$(icon).height() / 1.3} ${width / 2 / 1.25} 0 ${width / 2} 0C${width / 1.7} 0 ${
				width / 1.7
			} ${$(icon).height() / 1.33} ${width} ${$(icon).height() / 1.33}L${width} ${$(icon).height()}L0 ${$(icon).height()}L0 ${
				$(icon).height() / 1.3
			}Z`
		);
	} else {
		$(scrollPath).attr(
			"d",
			`M0 ${$(icon).height() / 1.21}C${width / 2 / 1.82} ${$(icon).height() / 1.21} ${width / 2 / 1.44} 0 ${width / 2} 0C${width / 1.53} 0 ${
				width / 1.38
			} ${$(icon).height() / 1.25} ${width} ${$(icon).height() / 1.25}L${width} ${$(icon).height()}L0 ${$(icon).height()}L0 ${
				$(icon).height() / 1.21
			}Z`
		);
	}
}

$(document).on("click", ".search_link", function (e) {
	e.preventDefault();

	const container = $(this).closest(".head__left_controls");
	const headTop = $(this).closest(".head__top");
	const leftContent = $(this).closest(".head__left_content");
	const gs = gsap.timeline();

	if (container.length) {
		// $(container).find(".search-form").addClass("show");
		// $(container).find(".links").css({ opacity: 0, visibility: "hidden", "transition-duration": "0.2s" });
		// $(container).find(".btn_menu").css({ opacity: 0, visibility: "hidden", transition: "all 0s" });
		gs.to($(container).find(".links"), { opacity: 0, visibility: "hidden", duration: 0 });
		gs.to($(container).find(".btn_menu"), {
			opacity: 0,
			visibility: "hidden",
			duration: 0,
		});
		if (window.innerWidth > 991) {
			gs.to(".head__center", {
				opacity: 0,
				visibility: "hidden",
				duration: 0,
			});
			gs.to(".head__center .logo", {
				pointerEvents: "none",
				duration: 0,
			});
			gs.to(leftContent, {
				width: "130%",
				duration: 0.2,
			});
		}
		gs.to($(container).find(".search-form"), {
			opacity: 1,
			visibility: "visible",
			zIndex: 1,
			duration: 0.2,
			delay: 0.2,
		});
	}

	if (headTop.length) {
		gs.to($(headTop).find(".depkult-logo"), { opacity: 0, visibility: "hidden", duration: 0 });
		gs.to($(headTop).find(".search_link"), { opacity: 0, visibility: "hidden", duration: 0 });
		gs.to($(headTop).find(".zh-header__center"), { opacity: 0, visibility: "hidden", duration: 0 });
		gs.to($(headTop).find(".search-form"), { opacity: 1, visibility: "visible", zIndex: 1, duration: 0.1 });

		// $(headTop).find(".search-form").addClass("show");
		// $(headTop).find(".depkult-logo").css({ opacity: 0, visibility: "hidden", "transition-duration": "0.2s" });
		// $(headTop).find(".zh-header__center").css({ opacity: 0, visibility: "hidden", "transition-duration": "0.2s" });

		// $(headTop).find(".search_link").css({ opacity: 0, visibility: "hidden", "transition-duration": "0.2s" });
	}

	if (window.innerWidth > 991) {
		// $(".head__center").css({ opacity: 0, visibility: "hidden", "transition-duration": "0.2s" });
		// $(leftContent).css({ width: "130%" });
	}
});

$(document).on("click", ".head__left .close_form", function (e) {
	e.preventDefault();

	const container = $(this).closest(".head__left_controls");
	const headTop = $(this).closest(".head__top");
	const leftContent = $(this).closest(".head__left_content");
	const gs = gsap.timeline();

	if (container.length) {
		// $(container).find(".search-form").removeClass("show");
		// $(container).find(".links").css({ opacity: 1, visibility: "visible", "transition-duration": "0.2s" });
		// $(container).find(".btn_menu").css({ opacity: 1, visibility: "visible", "transition-duration": "0s" });
		gs.to($(container).find(".search-form"), {
			opacity: 0,
			visibility: "hidden",
			zIndex: -1,
			duration: 0,
		})
			.to(leftContent, {
				width: "100%",
				duration: 0.2,
			})
			.to(".head__center", {
				opacity: 1,
				visibility: "visible",
				duration: 0.1,
			})
			.to(".head__center .logo", {
				pointerEvents: "all",
				duration: 0,
			})
			.to($(container).find(".links"), { opacity: 1, visibility: "visible", duration: 0.1 })
			.to($(container).find(".btn_menu"), {
				opacity: 1,
				visibility: "visible",
				duration: 0.1,
			});
	}

	if (headTop.length) {
		// $(headTop).find(".search-form").removeClass("show");
		// $(headTop).find(".depkult-logo").css({ opacity: 1, visibility: "visible", "transition-duration": "0.2s" });
		// $(headTop).find(".search_link").css({ opacity: 1, visibility: "visible", "transition-duration": "0.2s" });
		// $(headTop).find(".zh-header__center").css({ opacity: 0, visibility: "visible", "transition-duration": "0.2s" });
		gs.to($(headTop).find(".search-form"), { opacity: 0, visibility: "hidden", zIndex: -1, duration: 0.1 });
		gs.to($(headTop).find(".depkult-logo"), { opacity: 1, visibility: "visible", duration: 0.1 });
		gs.to($(headTop).find(".search_link"), { opacity: 1, visibility: "visible", duration: 0.1 });
		gs.to($(headTop).find(".zh-header__center"), { opacity: 1, visibility: "visible", duration: 0.1 });
	}
	if (window.innerWidth > 991) {
		// $(".head__center").css({ opacity: 1, visibility: "visible", "transition-duration": "0.2s" });
		// $(leftContent).css({ width: "100%" });
	}
});

$(document).on("click", ".head__top .close_form", function (e) {
	e.preventDefault();

	const container = $(this).closest(".head__left_controls");
	const headTop = $(this).closest(".head__top");
	const gs = gsap.timeline();

	if (container.length) {
		// $(container).find(".search-form").removeClass("show");
		// $(container).find(".links").css({ opacity: 1, visibility: "visible", "transition-duration": "0.2s" });
		// $(container).find(".btn_menu").css({ opacity: 1, visibility: "visible", "transition-duration": "0.2s" });
		gs.to($(container).find(".search-form"), {
			opacity: 0,
			visibility: "hidden",
			zIndex: -1,
			duration: 0,
		})
			.to(leftContent, {
				width: "100%",
				duration: 0.1,
			})
			.to(".head__center", {
				opacity: 1,
				visibility: "visible",
				duration: 0.1,
				delay: 0.1,
			})
			.to(".head__center .logo", {
				pointerEvents: "all",
				duration: 0,
			})
			.to($(container).find(".links"), { opacity: 1, visibility: "visible", duration: 0.1, delay: 0.1 })
			.to($(container).find(".btn_menu"), {
				opacity: 1,
				visibility: "visible",
				duration: 0.1,
				animationDuration: "1s",
				delay: 0.1,
			});
	}

	if (headTop.length) {
		// $(headTop).find(".search-form").removeClass("show");
		// $(headTop).find(".search_link").css({ opacity: 1, visibility: "visible" });
		// $(headTop).find(".zh-header__center").css({ opacity: 1, visibility: "visible", "transition-duration": "0.2s" });
		gs.to($(headTop).find(".search-form"), { opacity: 0, visibility: "hidden", zIndex: -1, duration: 0.1 });
		gs.to($(headTop).find(".depkult-logo"), { opacity: 1, visibility: "visible", duration: 0.1 });
		gs.to($(headTop).find(".search_link"), { opacity: 1, visibility: "visible", duration: 0.1 });
		gs.to($(headTop).find(".zh-header__center"), { opacity: 1, visibility: "visible", duration: 0.1 });
	}
});

$(window).on("load", function () {
	if (document.querySelector(".fs_index") && window.innerWidth < 992) {
		const slidesContainers = document.querySelectorAll(".fs__slide_content");
		const isHiddenSlides = [];
		const slidesHeights = [];
		slidesContainers.forEach((cont) => {
			const isHiddenSlide = cont.scrollWidth > cont.offsetWidth || cont.scrollHeight > cont.offsetHeight;
			slidesHeights.push(cont.scrollHeight - cont.offsetHeight);
			const isHideTags = $(cont).find(".fs__slide_left .tags") && $(cont).find(".fs__slide_left .tags").css("display") == "none";
			const isHideText = $(cont).find(".fs__slide_text p") && $(cont).find(".fs__slide_text p")?.css("display") == "none";
			if (isHiddenSlide) {
				if (!isHideTags && isHideText) {
					$(cont).find(".fs__slide_left .tags")?.hide();
				}
				if ($(cont).find(".fs__slide_text p").length && $(cont).find(".fs__slide_text p")?.css("display") != "none" && isHideTags) {
					$(cont).find(".fs__slide_text p").hide();
					$(cont).find(".fs__slide_text").addClass("mt-0");
				}

				if (!$(cont).find(".fs__slide_text p").length) {
					$(cont).find(".fs__slide_text").addClass("mt-0");
				}

				if (isHideText && isHideTags) {
					isHiddenSlides.push(true);
				}
			} else {
				if (!isHideTags && isHideText) {
					$(cont).find(".fs__slide_left .tags").show();
				}
				if ($(cont).find(".fs__slide_text p").length && $(cont).find(".fs__slide_text p")?.css("display") != "none" && isHideTags) {
					$(cont).find(".fs__slide_text p").show();
					$(cont).find(".fs__slide_text").removeClass("mt-0");
				}

				if (!isHideText && !isHideTags) {
					isHiddenSlides.push(false);
				}
			}
		});
		if (isHiddenSlides.some((el) => !!el)) {
			$(".fs_index").css({ "min-height": window.innerHeight + Math.max(...slidesHeights) + "px" });
		}
	}

	const scrollPath = document.querySelector("#scroll_lg path");
	const icon = $(scrollPath).closest(".icon");
	let width = window.innerWidth;

	if (width > 768) {
		$(scrollPath).attr(
			"d",
			`M0 ${$(icon).height() / 1.3}C${width / 2 / 1.25} ${$(icon).height() / 1.3} ${width / 2 / 1.25} 0 ${width / 2} 0C${width / 1.7} 0 ${
				width / 1.7
			} ${$(icon).height() / 1.33} ${width} ${$(icon).height() / 1.33}L${width} ${$(icon).height()}L0 ${$(icon).height()}L0 ${
				$(icon).height() / 1.3
			}Z`
		);
	} else {
		$(scrollPath).attr(
			"d",
			`M0 ${$(icon).height() / 1.21}C${width / 2 / 1.82} ${$(icon).height() / 1.21} ${width / 2 / 1.44} 0 ${width / 2} 0C${width / 1.53} 0 ${
				width / 1.38
			} ${$(icon).height() / 1.25} ${width} ${$(icon).height() / 1.25}L${width} ${$(icon).height()}L0 ${$(icon).height()}L0 ${
				$(icon).height() / 1.21
			}Z`
		);
	}
});
$(document).on("click", ".scroll_top_btn", function () {
	scroll.scrollTo("top");
});
$(document).on("click", ".btn_scroll", function () {
	scroll.scrollTo($(this).data("target"));
});
$(document).on("click", ".scroll_btn", function (e) {
	e.preventDefault();
	scroll.scrollTo($(this).attr("href"));
});

$(document).on("click", ".btn_scaler", function () {
	const container = $(this).closest(".sheme__sliders_tab");
	const draggable = $(container).find(".drag");
	let scale = $(draggable).css("scale") !== "none" ? $(draggable).css("scale") : 1;
	let dragHeight = $(draggable).height();
	let dragWidth = $(draggable).width();

	if ($(this).hasClass("inc")) {
		dragHeight += dragHeight * 0.2 - 8;
		dragWidth = dragHeight * 1.8;
		scale = +scale + 0.2;

		$(draggable).css({ scale: `${scale}` });
	} else if ($(this).hasClass("dec")) {
		dragHeight -= dragHeight * 0.2 - 8;
		dragWidth = dragHeight * 1.8;
		scale = scale > 1 ? scale - 0.2 : 1;

		$(draggable).css({ scale: `${scale}` });
	}
});

$(document).on("click", ".load_more", function () {
	var targetContainer = $(".events__content").not(".cancel_content"), //  Контейнер, в котором хранятся элементы
		targetElements = $(targetContainer).find(".events__content_row"),
		url = $(".load_more").attr("data-url"); //  URL, из которого будем брать элементы
	if (url !== undefined) {
		$.ajax({
			type: "GET",
			url: url,
			dataType: "html",
			success: function (data) {
				//  Удаляем старую навигацию

				$(".events__more").remove();
				var elements = $(data).find(".events__content").not(".cancel_content").find(".events__content_row"), //  Ищем элементы
					pagination = $(data).find(".events__more.pagination"); //  Ищем навигацию
				//  Добавляем посты в конец контейнера
				const firstElemTime = $(elements)[0];
				const repeatRows = $(targetElements).filter((i, el) => {
					return $(el).data("time-row") === $(firstElemTime).data("time-row");
				});
				if ($(repeatRows)[0]) {
					const items = $(repeatRows[0]).find(".events__list");
					$(items).append($(firstElemTime).find(".events__item"));
					const notRepeatRows = $(elements).filter((i, el) => {
						return $(el).data("time-row") !== $(firstElemTime).data("time-row");
					});
					targetContainer.append(notRepeatRows);
					$(targetContainer)
						.find(".events__content_row")
						.each((i, item) => {
							$(item).attr("id", `events_row_${i}`);
							$(item).find(".events__date").attr("data-scroll-target", `#events_row_${i}`);
						});
				} else {
					targetContainer.append(elements);
					$(targetContainer)
						.find(".events__content_row")
						.each((i, item) => {
							$(item).attr("id", `events_row_${i}`);
							$(item).find(".events__date").attr("data-scroll-target", `#events_row_${i}`);
						});
				}

				const eventsIntersectionCallback = (entries, observer) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.querySelector(".events__item_preview").classList.add("isView");
						}
					});
				};
				const intersectionOptions = {
					// root: по умолчанию window,
					// но можно задать любой элемент-контейнер
					rootMargin: "0px 0px 50px 0px",
					threshold: 0.1,
				};
				const eventsObserver = new IntersectionObserver(eventsIntersectionCallback, intersectionOptions);
				if (document.querySelectorAll(".events__item").length) {
					const events = document.querySelectorAll(".events__item");

					events.forEach((path) => {
						eventsObserver.observe(path);
					});
				}
				history.pushState(
					{
						lastUrl: location.href,
					},
					null,
					url
				);
				targetContainer.append(pagination); //  добавляем навигацию следом
				// window.scroll.update();
			},
		});
	}
});

$(document).on("click", ".load_more_news", function () {
	var targetContainer = $("#events__content").not(".cancel_content"), //  Контейнер, в котором хранятся элементы
		url = $(".load_more_news").attr("data-url"); //  URL, из которого будем брать элементы
	if (url !== undefined) {
		$.ajax({
			type: "GET",
			url: url,
			dataType: "html",
			success: function (data) {
				//  Удаляем старую навигацию
				$(".events__more").remove();
				var elements = $(data).find(".news__slide"), //  Ищем элементы
					pagination = $(data).find(".events__more"); //  Ищем навигацию
				targetContainer.find(".news__list").append(elements); //  Добавляем посты в конец контейнера
				targetContainer.append(pagination); //  добавляем навигацию следом
				// window.scroll.update();
			},
		});
	}
});

$(document).on("click", ".load_more_search", function () {
	var targetContainer = $("#events__content"); //  Контейнер, в котором хранятся элементы
	const searchForm = $(".search__form_content");
	let url = location.origin + $(".load_more_search").attr("data-url"); //  URL, из которого будем брать элементы
	let searchUrl = new URL(url);

	if (!searchUrl.searchParams.get("where")) {
		let where = $(searchForm).find("input[name=where]:checked").val();
		searchUrl.searchParams.set("where", where);
	}
	if (url !== undefined) {
		$.ajax({
			type: "GET",
			url: searchUrl,
			dataType: "html",
			success: function (data) {
				targetContainer.find(".events__more").remove();
				var elements = $(data).find(".search_item"), //  Ищем элементы
					pagination = $(data).find(".events__more"); //  Ищем навигацию
				targetContainer.find(".search__result").append(elements); //  Добавляем посты в конец контейнера
				targetContainer.append(pagination); //  добавляем навигацию следом
				if ($(targetContainer).find(".events__content_row").length) {
					$(targetContainer)
						.find(".events__content_row")
						.each((i, item) => {
							$(item).attr("id", `events_row_${i}`);
							$(item).find(".events__date").attr("data-scroll-target", `#events_row_${i}`);
						});
				}
				history.pushState(
					{
						lastUrl: location.href,
					},
					null,
					url
				);
			},
		});
	}
});

$(document).on("click", ".load_more_docks", function () {
	var targetContainer = $("#events__content").not(".cancel_content"), //  Контейнер, в котором хранятся элементы
		url = $(".load_more_docks").attr("data-url"); //  URL, из которого будем брать элементы
	if (url !== undefined) {
		$.ajax({
			type: "GET",
			url: url,
			dataType: "html",
			success: function (data) {
				$(".events__more").remove();
				var elements = $(data).find(".docs__item"); //  Ищем элементы

				// pagination = $(data).find(".events__more"); //  Ищем навигацию
				targetContainer.find(".docs__list").append(elements); //  Добавляем посты в конец контейнера
				// if ($(pagination).length) {
				targetContainer.append($(data).find(".events__more")); //  добавляем навигацию следом
				// }
			},
		});
	}
});

$(document).on("click", ".btn_popup_show", function () {
	const target = $(this).data("target");
	$(target).addClass("show");
});

$(document).on("click", ".btn_popup_close", function () {
	$(this).closest(".location__popup").removeClass("show");
});

$(document).on("click", ".search-popup-el-name", function () {
	$(".search__form_content").find("input.search-suggest").val($(this).text());
	$(".search__form_content").find(".submit_btn").click();
});

$(document).on("click", ".dropdown__value", function (e) {
	const dropdown = this.closest(".dropdown");

	$(".dropdown").each((ind, drop) => {
		if (drop != dropdown) {
			$(drop).removeClass("active");
		}
	});

	if ($(dropdown).hasClass("active")) {
		$(dropdown).removeClass("active");
	} else {
		dropdown.classList.add("active");
	}
});

$(document).on("change input", ".search-suggest", function () {
	if ($(this).val()) {
		$(this).closest("form").find("button[type=reset]").show();
	} else {
		$(this).closest("form").find("button[type=reset]").hide();
	}
});

$(document).on("click", ".dropdown-slider__value", function () {
	const dropdown = $(this).closest(".dropdown-slider");

	$(".dropdown-slider").each((ind, drop) => {
		if (!$(this).closest($(drop)).length) {
			$(drop).removeClass("active");
		}
	});

	$(dropdown).toggleClass("active");
});

// // Скролл вверх страницы по клику кнопки в футере

$(document).on("click", ".scroll_top_btn", function () {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});

// // Dropdown

$(document).on("click", ".dropdown__item", function (e) {
	const dropdown = $(this).closest(".dropdown");
	const value = $(this).find(".value").text();
	const inputVal = $(this).find("input").val();
	const form = $(".aparts__filter_form");
	const formContainer = $(form).closest(".aparts__filter");

	if ($(dropdown).closest(".aparts__filter_control").length) {
		$(form).find("input[name=sortby]").val(inputVal);
		$(form).trigger("submit");
	}

	$(dropdown).find(".dropdown__value>.value").text(value);
	$(dropdown).removeClass("active");
});

$(document).on("click", ".dropdown-slider__item", function () {
	const dropdown = $(this).closest(".dropdown-slider");
	const value = $(this).find(".value").text();

	$(dropdown).find(".dropdown-slider__value>.value").text(value);
	$(dropdown).removeClass("active");
});

$(document).on("click", ".events__nav_tool", function (e) {
	gsap.defaults({
		ease: "none",
	});
	if (!e.currentTarget.classList.contains("btn_filter")) return;
	$(".events__nav_tool.btn_filter").prop("disabled", true);
	let timeline = gsap.timeline();
	$(".btn_filter").removeClass("active");
	$(".events__filter").each((i, item) => {
		if ($(item).attr("id") != $(this).data("target").replace("#", "")) {
			$(item).removeClass("open");
			// window.scroll.update();
			window.scroll.start();
		} else {
			const targetEl = $(this).data("target");

			$(e.currentTarget).addClass("active");
			timeline
				.to(".events__filter", { overflow: "hidden", ease: "none", duration: 0 })
				.to(".events__filter", { maxHeight: 0, ease: "none", duration: 0.2 })
				.then(() => {
					// window.scroll.update();
					window.scroll.start();
					$(".events__nav_tool").prop("disabled", false);
				});

			if (!$(targetEl).hasClass("open")) {
				$(targetEl).addClass("open");
				// window.scroll.update();
				window.scroll.start();
				timeline
					.to(targetEl, { maxHeight: $(targetEl).find(".form").innerHeight(), ease: "none", duration: 0.2 })
					.to(targetEl, { overflow: "visible", ease: "none", duration: 0, delay: 0.5 })
					.then(() => {
						// window.scroll.update();
						window.scroll.start();
						$(".events__nav_tool").prop("disabled", false);
					});
			} else {
				$(e.currentTarget).removeClass("active");
				$(targetEl).removeClass("open");
				// window.scroll.update();
				window.scroll.start();
				timeline
					.to(targetEl, { overflow: "hidden", ease: "none", duration: 0 })
					.to(targetEl, { maxHeight: 0, ease: "none", duration: 0.2 })
					.then(() => {
						// window.scroll.update();
						window.scroll.start();
						$(".events__nav_tool").prop("disabled", false);
					});
			}
		}
	});
});

$(document).on("click", ".btn_favourite", function (e) {
	const eventsitem = e.currentTarget.closest(".events__item");
	const event = e.currentTarget.dataset.id;
	let eventId = null
	if (eventsitem) {
		eventId = eventsitem.dataset.id;
	} else if (event) {
		eventId = event;
	}
		if (Cookies.get("favourites_events")) {
			const eventsCookie = Cookies.get("favourites_events")?.split(",");
			if (!eventsCookie.length) {
				eventsCookie.push(eventId);

				e.currentTarget.classList.add("active");
			} else {
				const searhedIndex = eventsCookie.indexOf(eventId);
				if (searhedIndex !== -1) {
					eventsCookie.splice(searhedIndex, 1);

					e.currentTarget.classList.remove("active");
				} else {
					eventsCookie.push(eventId);
					e.currentTarget.classList.add("active");
				}
			}
			const eventsCookieString = eventsCookie.join(",");
			Cookies.set("favourites_events", eventsCookieString);
		} else {
			const eventsCookie = [];
			eventsCookie.push(eventId);
			e.currentTarget.classList.add("active");
			const eventsCookieString = eventsCookie.join(",");
			Cookies.set("favourites_events", eventsCookieString);
		}
});

$(document).on("click", function (e) {
	if (!e.target.closest(".dropdown")) {
		$(".dropdown").removeClass("active");
	}
});

// // Мобильное меню

// темная тема

// // For jQuery
$(document).on("click", ".copy_buffer", function () {
	navigator.clipboard.writeText(this.dataset.url);

	$(this).find(".hint").addClass("show");

	setTimeout(() => {
		$(this).find(".hint").removeClass("show");
	}, 1500);
});

$(document).on("click", ".btn_play", function () {
	const cont = this.closest(".video_container");
	const video = cont.querySelector("video");

	video.play();
	$(this).hide();
});

$(document).on("click", ".mobile__nav_btn", function () {
	const navEl = $(this).closest(".mobile__nav");
	const subList = $(navEl).find(".mobile__nav_sublist");

	$(subList).addClass("active");
});

$(document).on("click", ".mobile__nav_sublist .mobile__nav_title", function () {
	const navEl = $(this).closest(".mobile__nav_sublist");

	$(navEl).removeClass("active");
});

// // accordion

$(document).on("click", ".accordion__title", function () {
	const accItem = this.closest(".accordion__item");

	if (!$(accItem).hasClass("active")) {
		$(accItem).addClass("active");
		$(this).addClass("active");

		$(accItem)
			.find(".accordion__content")
			.css({ "max-height": $(accItem).find(".accordion__content_desc").innerHeight() + "px" });
	} else {
		$(accItem).removeClass("active");
		$(this).removeClass("active");
		$(accItem).find(".accordion__content").css({ "max-height": "0px" });
	}
});

$(document).on("click", ".contacts__col .accordion_btn", function () {
	const accItem = $(this).closest(".contacts__col");

	if (!$(accItem).hasClass("active")) {
		$(accItem).addClass("active");

		$(accItem)
			.find(".contacts__col_bottom")
			.css({ "max-height": $(accItem).find(".contacts__col_list").innerHeight() + "px" });
	} else {
		$(accItem).removeClass("active");
		$(accItem).find(".contacts__col_bottom").css({ "max-height": "0px" });
	}
});

$(document).on("focus", "input[type=text], input[type=email], input[type=tel], textarea", function (e) {
	const label = $(this).closest("label");
	const placeholder = $(label).find(".placeholder");

	$(placeholder).addClass("active");
});

$(document).on("blur", "input[type=text], input[type=email], input[type=tel], textarea", function (e) {
	const label = $(this).closest("label");
	const placeholder = $(label).find(".placeholder");

	if (!$(this).val()) {
		$(placeholder).removeClass("active");
	}
});

$(document).on("mousemove", ".mobile", function (e) {
	$("#mobile_vawe").css({ left: e.clientX + "px" });
});

// // popup

$(document).on("click", ".popup_open", function () {
	const target = $(this).data("target");
	openPopup(target)
});

$(document).on("click", ".popup", function (e) {
	if (!e.target.closest(".popup__content") || e.target.closest(".popup_close")) {
		$(this).find(".form_success").removeClass("show");
		$(this).find("form").trigger("reset");
		closePopup()
	}
});

(function () {
	Typograf.addRule({
		name: "common/other/typographicSmallerNames",
		handler: function (text) {
			return text.replace(/([А-ЯЁ]\.)\s+([А-ЯЁ]\.)/g, "$1&nbsp;$2");
		},
	});
	Typograf.addRule({
		name: "common/other/typographicSmallNames",
		handler: function (text) {
			return text.replace(/([А-ЯЁ][а-яё]{0,2}\.)\s+([А-ЯЁ]\.)\s+([А-Я][а-я]+)/g, "$1&nbsp;$2&nbsp;$3");
		},
	});
	Typograf.addRule({
		name: 'ru/dash/withNbsp',
		index: '-1', // Важно выполнять после других правил тире
		handler(text) {
			// Заменяем " - " на "&nbsp;—&nbsp;"
			return text.replace(/(\s)-(\s)/g, '$1&nbsp;&mdash; $2');
		}
	});
	Typograf.prototype.addCustomRule = function(rule) {
		this._rules = this._rules || [];
		this._rules.push(rule);
	  };
	
	 Typograf.addRule({
		name: 'common/other/skipUnbalancedQuotesOnly',
		handler: function (text) {
			
			// Считаем количество открывающих и закрывающих кавычек-ёлочек
			const openCount = (text.match(/«/g) || []).length;
			const closeCount = (text.match(/»/g) || []).length;
			
			// // Если кавычек нет или они сбалансированы — оставляем текст как есть
			if (openCount === closeCount) {
				return text;
			}

			if ((text.match(/"([^„“]+)"/g) || []).length) {
				
				return text.replace(/"([^"„“]+)"/g, '«$1»');
			}
			text = text.replace(/"([^"„“]+)"/g, '«$1»');
        
			// Шаг 2: Возвращаем немецкие кавычки, если они были внутри заменённых
			// text = text.replace(/«([^»]*)„([^»]*)“([^»]*)»/g, '«$1„$2“$3»');
			// Если баланс нарушен — тоже оставляем без изменений
			// (или можно вывести предупреждение в консоль)
			console.warn('Обнаружены несбалансированные кавычки-ёлочки:', text);
			return text;
		}  
	});
	const tp = new Typograf({ locale: ['ru', 'en-US'] });
	tp.setSetting('common/punctuation/quote', 'ru', {
		left: '«', 
		right: '»',
		removeDuplicateQuotes: true
	  });
	  tp.disableRule('common/punctuation/quote');
	var elems = document.querySelectorAll("h1,h2,h3,h4,a,h6,p,li,b");
	for (let elem of elems) {
		elem.innerHTML = tp.execute(elem.innerHTML);
	}
})();


$(document).on("mouseover", ".events__item:first-child", function () {
	const row = $(this).closest(".events__content_row");

	$(row).addClass("hover");
});

$(document).on("mouseout", ".events__item:first-child", function () {
	const row = $(this).closest(".events__content_row");

	$(row).removeClass("hover");
});

$(document).on("submit", ".ajax_form.subscribe_form ", function (e) {
	const form = this;
	e.preventDefault();
	const action = $(this).attr("action");
	const formData = $(this).serialize();
	$.ajax({
		type: "POST",
		url: action,
		data: formData,
		dataType: "json",
		success: function (response) {
			
			let message;
			if (response.err_code != 0) {
				message = response.text;
			} else {
				message = "Подписка оформлена! Пожалуйста, перейдите на свою почту, чтобы подтвердить подписку.";
			}
			var formMessage = $(`<div class='form-message'>${response.response.msg.message}</div>`);
			$(form).find(".form_success_title h2").text(response.response.msg.message);
			if (response.response.msg.text === "NO-OK") {
				$(form).find(".form_success_icon").css({ display: "none" });
			} else {
				$(form).find(".form_success_icon").css({ display: "flex" });
			}
			if (response.err_code != 0) {
				setTimeout(function () {
					formMessage.hide();
					formMessage.remove();
				}, 5000);
			}
		},
	});
});




