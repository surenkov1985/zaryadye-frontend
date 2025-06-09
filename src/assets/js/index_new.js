import $ from "jquery";
import { fsSliders, locationSliders } from "./swipers";
import { OverlayScrollbars } from "overlayscrollbars";
import Lenis from "lenis";
import { formatValueInput, loadScript, maskedEmail, setMap, ShapeOverlays, validationFormFields } from "./methods";
import Typograf from "typograf";
import Cookies from 'js-cookie';

// Константы
const DARK_THEME_TIME = 19;
const LIGHT_THEME_TIME = 7;
const MOBILE_BREAKPOINT = 991;
const MIN_SCROLL_HEIGHT = window.innerHeight * 2;
const INTERSECTION_OPTIONS = {
    rootMargin: "0px 0px 50px 0px",
    threshold: 0.1
};

// Глобальные переменные
let scroll;
let formData = { sectors: [] };
let overlay;
let observer;

// Кэширование селекторов
const selectors = {
    mobileMenu: '.mobile',
    fixedHeader: '.head.fixed',
    eventsFilter: '.events__filter_form',
    eventsDate: '.events__date',
    scrollTop: '.scroll_top',
    shapeOverlay: '.shape-overlays',
    themeToggle: '.head__theme input',
    cookiePopup: '#Cookies_popup'
};

// Основные функции
function initComponents() {
    fsSliders();
    locationSliders();
    initScroll();
    initTheme();
    initEventHandlers();
    setupObservers();
    initTypograf();
    setupResizeHandler();
    initLazyLoad();
}

function initScroll() {
    scroll = new Lenis({
        autoRaf: true,
        smooth: true,
        lerp: 0.06,
        getSpeed: true,
        multiplier: 0.6,
        scrollFromAnywhere: true,
        getDirection: true,
        prevent: node => !node.closest(".mobile") && ["auto", "scroll"].includes($(node).css("overflow")),
        smartphone: { smooth: true, breakpoint: 767, lerp: 0.06 },
        tablet: { smooth: true, breakpoint: 1024, lerp: 0.06, multiplier: 4 }
    });

    scroll.on("scroll", handleScroll);
    handleScroll({ scroll: { y: window.pageYOffset } });
}

function handleScroll({ scroll: { y: posTop } }) {
    const direction = scroll.direction;
    const headerVisible = $(selectors.fixedHeader).hasClass("show");
    
    // Управление хедером
    if (posTop >= 0) {
        direction < 0 ? showFixedHeader() : hideFixedHeader();
    } else {
        hideFixedHeader();
    }

    // Управление кнопкой "наверх"
    if (posTop >= MIN_SCROLL_HEIGHT) {
        direction < 0 ? scrollTopHide(selectors.scrollTop) : scrollTopShow(selectors.scrollTop);
    } else {
        scrollTopHide(selectors.scrollTop);
    }

    // Позиционирование даты событий
    if ($(selectors.eventsDate).length) {
        const topValue = window.innerWidth > MOBILE_BREAKPOINT ? 
            (headerVisible ? `${$(".head.fixed").innerHeight() + 32}px` : "32px") : 
            (headerVisible ? `${$(".head.fixed").innerHeight()}px` : "0px");
        
        $(selectors.eventsDate).css({ top: topValue });
    }
}

function initTheme() {
    const date = new Date();
    const hour = date.getHours();
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (prefersDark && !localStorage.colorTheme) {
        $("body").addClass("dark");
        $(selectors.themeToggle).prop("checked", true);
        overlay?.themeToggle(1);
    } else if (!localStorage.colorTheme) {
        if (hour >= DARK_THEME_TIME) {
            $("body").addClass("dark");
            $(selectors.themeToggle).prop("checked", true);
            overlay?.themeToggle(1);
        } else if (hour >= LIGHT_THEME_TIME) {
            $("body").removeClass("dark");
            $(selectors.themeToggle).prop("checked", false);
        }
    } else {
        $(selectors.themeToggle).prop("checked", localStorage.colorTheme === "dark");
    }
}

function initEventHandlers() {
    // Мобильное меню
    $(document)
        .on("click", ".head .btn_menu", toggleMobileMenu)
        .on("click", ".specialButton", hideMobile)
        .on("click", ".mobile__nav_btn", () => $(this).closest(".mobile__nav").find(".mobile__nav_sublist").addClass("active"))
        .on("click", ".mobile__nav_sublist .mobile__nav_title", () => $(this).closest(".mobile__nav_sublist").removeClass("active"));

    // Скролл
    $(document)
        .on("click", ".scroll_top_btn", () => scroll.scrollTo("top"))
        .on("click", ".btn_scroll", function() { scroll.scrollTo($(this).data("target")); })
        .on("click", ".scroll_btn", function(e) { 
            e.preventDefault(); 
            scroll.scrollTo($(this).attr("href")); 
        });

    // Формы
    $(document)
        .on("submit", ".feedback__form", handleFormSubmit)
        .on("input keydown blur focusout", "input[type=tel]", handlePhoneInput)
        .on("input keydown blur focusout", "input[type=email]", handleEmailInput)
        .on("input keydown focusout blur", "input[name=fio], input[name=name]", handleNameInput);
}
function handleFormSubmit (e) {
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
}
function handlePhoneInput (e) {
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
}
function handleEmailInput (e) {
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
}
function handleNameInput(e){
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
}
function setupObservers() {
    // observer = new IntersectionObserver(intersectionCallback, INTERSECTION_OPTIONS);
    // const eventsObserver = new IntersectionObserver(eventsIntersectionCallback, INTERSECTION_OPTIONS);

    // document.querySelectorAll(".location__path, [data-scroll]").forEach(path => observer.observe(path));
    // document.querySelectorAll(".events__item").forEach(item => eventsObserver.observe(item));
}

function initTypograf() {
    Typograf.addRule({ name: "common/other/typographicSmallerNames", handler: text => text.replace(/([А-ЯЁ]\.)\s+([А-ЯЁ]\.)/g, "$1&nbsp;$2") });
    Typograf.addRule({ name: "common/other/typographicSmallNames", handler: text => text.replace(/([А-ЯЁ][а-яё]{0,2}\.)\s+([А-ЯЁ]\.)\s+([А-Я][а-я]+)/g, "$1&nbsp;$2&nbsp;$3") });
    Typograf.addRule({ name: 'ru/dash/withNbsp', index: '-1', handler: text => text.replace(/(\s)-(\s)/g, '$1&nbsp;&mdash; $2') });

    const tp = new Typograf({ locale: ['ru', 'en-US'] });
    tp.setSetting('common/punctuation/quote', 'ru', { left: '«', right: '»', removeDuplicateQuotes: true });
    tp.disableRule('common/punctuation/quote');
    
    document.querySelectorAll("h1,h2,h3,h4,a,h6,p,li,b").forEach(elem => {
        elem.innerHTML = tp.execute(elem.innerHTML);
    });
}

function setupResizeHandler() {
    const handleResize = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
        $(selectors.mobileMenu).height(window.innerHeight);
        resizeScrollPath(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
}

function initLazyLoad() {
    if (!document.querySelector(".fs_index") || window.innerWidth >= MOBILE_BREAKPOINT) return;
    
    const slidesContainers = document.querySelectorAll(".fs__slide_content");
    const heights = [];
    let needAdjustment = false;

    slidesContainers.forEach(cont => {
        const tags = $(cont).find(".fs__slide_left .tags");
        const text = $(cont).find(".fs__slide_text p");
        const isHidden = cont.scrollWidth > cont.offsetWidth || cont.scrollHeight > cont.offsetHeight;
        
        if (isHidden) {
            if (tags.length && tags.css("display") !== "none") tags.hide();
            if (text.length && text.css("display") !== "none") {
                text.hide();
                $(cont).find(".fs__slide_text").addClass("mt-0");
            }
            needAdjustment = true;
        }
        
        heights.push(cont.scrollHeight - cont.offsetHeight);
    });

    if (needAdjustment) {
        $(".fs_index").css({ "min-height": window.innerHeight + Math.max(...heights) + "px" });
    }
}

// Вспомогательные функции
function toggleMobileMenu() {
    if (!overlay) return;
    
    const gs = gsap.timeline();
    const header = $(selectors.fixedHeader).hasClass("show") ? 
        document.querySelector(selectors.fixedHeader) : 
        document.querySelector("header");

    if (!$(".mobile").hasClass("show")) {
        // Показать мобильное меню
        gs.to(".mobile", { opacity: 1, duration: 0 })
          .to(".mobile", { translateY: 0, duration: 1.5, ease: "power2.out" })
          .to(header, { opacity: 0, visibility: "hidden", duration: 0 })
          .to(".mobile__head", { opacity: 1, duration: 0 })
          .then(() => {
              $(".mobile").css({ "overflow-y": "auto" });
              $("body").addClass("hidden");
          });
    } else {
        // Скрыть мобильное меню
        hideMobile();
    }

    overlay.toggle();
    document.querySelectorAll(".global-menu__item").forEach(item => {
        item.classList.toggle("is-opened", overlay.isOpened);
    });
}

function hideMobile() {
    const gs = gsap.timeline();
    const header = $(selectors.fixedHeader).hasClass("show") ? 
        document.querySelector(selectors.fixedHeader) : 
        document.querySelector("header");

    gs.to(".mobile", { opacity: 0, duration: 0.4 })
      .to(".mobile", { translateY: "100%", duration: 0.2 })
      .to(document.querySelector(selectors.fixedHeader), { opacity: 1, visibility: "visible", duration: 0.2 })
      .to(".mobile__head", { opacity: 0, duration: 0.2 })
      .then(() => {
          $(".mobile").css({ "overflow-y": "hidden" }).removeClass("show");
          $("body").removeClass("hidden");
          $(".mobile__nav_sublist").removeClass("active");
          $(".mobile .animate").removeClass("animate__animated animate__fadeInUp");
          $(".mobile__contacts").removeClass("animate__animated animate__fadeInUpSm");
      });
}

function resizeScrollPath(width) {
    const scrollPath = document.querySelector("#scroll_lg path");
    if (!scrollPath) return;
    
    const icon = $(scrollPath).closest(".icon");
    const height = $(icon).height();
    
    if (width > 768) {
        scrollPath.setAttribute("d", `M0 ${height / 1.3}C${width / 2 / 1.25} ${height / 1.3} ${width / 2 / 1.25} 0 ${width / 2} 0C${width / 1.7} 0 ${width / 1.7} ${height / 1.33} ${width} ${height / 1.33}L${width} ${height}L0 ${height}L0 ${height / 1.3}Z`);
    } else {
        scrollPath.setAttribute("d", `M0 ${height / 1.21}C${width / 2 / 1.82} ${height / 1.21} ${width / 2 / 1.44} 0 ${width / 2} 0C${width / 1.53} 0 ${width / 1.38} ${height / 1.25} ${width} ${height / 1.25}L${width} ${height}L0 ${height}L0 ${height / 1.21}Z`);
    }
}

function scrollTopHide(selector) {
    $(selector).removeClass("show");
}

function scrollTopShow(selector) {
    $(selector).addClass("show");
}

function showFixedHeader() {
    $(selectors.fixedHeader).addClass("show").removeClass("hide");
}

function hideFixedHeader() {
    $(selectors.fixedHeader).removeClass("show").addClass("hide");
}

// Инициализация при загрузке документа
document.addEventListener("DOMContentLoaded", () => {
    // Инициализация основных компонентов
    overlay = new ShapeOverlays(document.querySelector(selectors.shapeOverlay));
    initComponents();

    // Проверка куки
    // if ($_modx?.user?.id === 1 && $.cookie['isCookieClosed'] !== 'true') {
    //     $(selectors.cookiePopup).show();
    // }
});