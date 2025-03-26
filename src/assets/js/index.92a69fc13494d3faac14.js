/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 7268:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ../node_modules/gsap/index.js + 2 modules
var gsap = __webpack_require__(7228);
// EXTERNAL MODULE: ../node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(2662);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);
// EXTERNAL MODULE: ../node_modules/swiper/swiper.mjs + 1 modules
var swiper = __webpack_require__(8094);
// EXTERNAL MODULE: ../node_modules/swiper/modules/index.mjs + 26 modules
var modules = __webpack_require__(6014);
;// ./assets/js/swipers.js
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }




function fsSliders() {
  var imgSlider = document.querySelector(".fs__images_slider");
  if (!imgSlider) return;
  var imagesSlider = new swiper/* default */.A(imgSlider, {
    speed: 1000,
    slidesPerView: 1,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    // autoplay: {
    // 	delay: 5000,
    // 	disableOnInteraction: false,
    // },
    // rewind: true,
    modules: [modules/* Navigation */.Vx, modules/* Pagination */.dK],
    loop: true,
    spaceBetween: 10,
    navigation: {
      prevEl: ".fs__images_slider .swiper-prev-btn",
      nextEl: ".fs__images_slider .swiper-next-btn"
    },
    pagination: {
      el: ".fs__content .swiper-pagination",
      type: "bullets",
      clickable: true
    },
    breakpoints: {
      991: {
        // autoHeight: false
      }
    }
  });
  // $(window).on("ready", function () {
  // 	imagesSlider.update()
  // })
  var activeSlide = $(".fs__images_slide")[imagesSlider.activeIndex];
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
    var activeSlide = $(slider.slides)[slider.activeIndex];
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
function locationSliders() {
  var imgSlider = document.querySelector(".location__images_slider");
  if (!imgSlider) return;
  if (!imgSlider.classList.contains("location_navigation_slider")) {
    var imagesSlider = new swiper/* default */.A(imgSlider, {
      speed: 1000,
      initialSlide: 1,
      modules: [modules/* Navigation */.Vx],
      navigation: {
        prevEl: ".location__slides_btn.first",
        nextEl: ".location__slides_btn.last"
      },
      on: {
        update: function update(slider) {
          if ($(window).width() > 768) {
            var _pos = +$(window).width() - +$(".location__path_icon").innerWidth();
            if ($(".location").hasClass("tour")) {
              $(".location__path_icon").css({
                left: "50%"
              });
            } else {
              if (slider.activeIndex == 1) {
                $(".location__slides_btn.last").addClass("active");
                $(".location__slides_btn.first").removeClass("active");
                $(".location__ellipse").addClass("active");
                $(".location__ellipse-sm").removeClass("active");
                $(".location__path_icon ").css({
                  left: "calc(50% - ".concat(_pos, "px)")
                });
              } else {
                // $(".location__path_icon svg").css({ left: `${pos / 2}px`, right: "auto" });
                $(".location__path_icon ").css({
                  left: "50%"
                });
                $(".location__slides_btn.first").addClass("active");
                $(".location__slides_btn.last").removeClass("active");
                $(".location__ellipse-sm").addClass("active");
                $(".location__ellipse").removeClass("active");
              }
            }
          } else {
            var _pos2 = +$(window).width() - +$(".location__path_icon").innerWidth();
            if ($(".location").hasClass("tour")) {
              $(".location__path_icon").css({
                left: "50%"
              });
            } else {
              if (slider.activeIndex == 1) {
                $(".location__slides_btn.last").addClass("active");
                $(".location__slides_btn.first").removeClass("active");
                $(".location__path_icon ").css({
                  left: "50%"
                });
              } else {
                // $(".location__path_icon svg").css({ left: `${pos / 2}px`, right: "auto" });
                $(".location__path_icon ").css({
                  left: "calc(50% - ".concat(_pos2, "px)")
                });
                $(".location__slides_btn.first").addClass("active");
                $(".location__slides_btn.last").removeClass("active");
              }
            }
          }
        }
      }
    });
    $(window).on("load", function () {
      imagesSlider.update();
    });
    var textSlider = new swiper/* default */.A(".location__content_slider", {
      speed: 1000,
      modules: [modules/* Navigation */.Vx],
      initialSlide: 1,
      navigation: {
        prevEl: ".location__slides_btn.first",
        nextEl: ".location__slides_btn.last"
      }
    });
    imagesSlider.on("afterInit", function () {});
    var pos = +$(window).width() - +$(".location__path_icon svg").innerWidth();
    if ($(".location").hasClass("tour")) {
      $(".location__path_icon").css({
        left: "50%"
      });
    } else {
      if (imagesSlider.activeIndex === 1) {
        $(".location__slides_btn.last").addClass("active");
        $(".location__slides_btn.first").removeClass("active");
        $(".location__ellipse").addClass("active");
        $(".location__ellipse-sm").removeClass("active");
        $(".location__path_icon ").css({
          left: "calc(50% - ".concat(pos, "px)")
        });
        // $(".location__path_icon svg").css({ left: "auto", right: `${pos / 2}px` });
      } else {
        $(".location__path_icon ").css({
          left: "50%"
        });
        $(".location__ellipse-sm").addClass("active");
        $(".location__ellipse").removeClass("active");
        $(".location__slides_btn.last").removeClass("active");
      }
    }
    imagesSlider.on("slideChange", function (slider) {
      if ($(window).width() > 768) {
        var _pos3 = +$(window).width() - +$(".location__path_icon").innerWidth();
        if ($(".location").hasClass("tour")) {
          $(".location__path_icon").css({
            left: "50%"
          });
        } else {
          if (slider.activeIndex == 1) {
            $(".location__slides_btn.last").addClass("active");
            $(".location__slides_btn.first").removeClass("active");
            $(".location__ellipse").addClass("active");
            $(".location__ellipse-sm").removeClass("active");
            $(".location__path_icon ").css({
              left: "calc(50% - ".concat(_pos3, "px)")
            });
          } else {
            // $(".location__path_icon svg").css({ left: `${pos / 2}px`, right: "auto" });
            $(".location__path_icon ").css({
              left: "50%"
            });
            $(".location__slides_btn.first").addClass("active");
            $(".location__slides_btn.last").removeClass("active");
            $(".location__ellipse-sm").addClass("active");
            $(".location__ellipse").removeClass("active");
          }
        }
      } else {
        var _pos4 = +$(window).width() - +$(".location__path_icon").innerWidth();
        if ($(".location").hasClass("tour")) {
          $(".location__path_icon").css({
            left: "50%"
          });
        } else {
          if (slider.activeIndex == 1) {
            $(".location__slides_btn.last").addClass("active");
            $(".location__slides_btn.first").removeClass("active");
            $(".location__ellipse").addClass("active");
            $(".location__ellipse-sm").removeClass("active");
            $(".location__path_icon ").css({
              left: "50%"
            });
          } else {
            // $(".location__path_icon svg").css({ left: `${pos / 2}px`, right: "auto" });
            $(".location__path_icon ").css({
              left: "calc(50% - ".concat(_pos4, "px)")
            });
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
      $(".location__path_icon").css({
        left: "50%"
      });
      $(window).resize(function () {
        var pos = +$(window).width() - +$(".location__path_icon").innerWidth();
        if ($(".location").hasClass("tour")) {
          $(".location__path_icon").css({
            left: "50%"
          });
        } else {
          if (imagesSlider.activeIndex === 1) {
            $(".location__slides_btn.last").addClass("active");
            $(".location__slides_btn.first").removeClass("active");
            $(".location__ellipse").addClass("active");
            $(".location__ellipse-sm").removeClass("active");
            $(".location__path_icon ").css({
              left: "calc(50% - ".concat($(".location__slides_btn.last").offset().left, "px)")
            });
            // $(".location__path_icon svg").css({ left: "auto", right: `${pos / 2}px` });
          } else {
            $(".location__path_icon ").css({
              left: "50%"
            });
            $(".location__ellipse-sm").addClass("active");
            $(".location__ellipse").removeClass("active");
            $(".location__slides_btn.last").removeClass("active");
          }
        }
      });
    } else {
      $(window).resize(function () {
        if ($(window).width() > 768) {
          var _pos5 = +$(window).width() - +$(".location__path_icon").innerWidth();
          if ($(".location").hasClass("tour")) {
            $(".location__path_icon").css({
              left: "50%"
            });
          } else {
            if (imagesSlider.activeIndex == 1) {
              $(".location__slides_btn.last").addClass("active");
              $(".location__slides_btn.first").removeClass("active");
              $(".location__ellipse").addClass("active");
              $(".location__ellipse-sm").removeClass("active");
              $(".location__path_icon ").css({
                left: "calc(50% - ".concat(_pos5, "px)")
              });
            } else {
              // $(".location__path_icon svg").css({ left: `${pos / 2}px`, right: "auto" });
              $(".location__path_icon ").css({
                left: "50%"
              });
              $(".location__slides_btn.first").addClass("active");
              $(".location__slides_btn.last").removeClass("active");
              $(".location__ellipse-sm").addClass("active");
              $(".location__ellipse").removeClass("active");
            }
          }
        } else {
          var _pos6 = +$(window).width() - +$(".location__path_icon").innerWidth();
          if ($(".location").hasClass("tour")) {
            $(".location__path_icon").css({
              left: "50%"
            });
          } else {
            if (imagesSlider.activeIndex == 1) {
              $(".location__slides_btn.last").addClass("active");
              $(".location__slides_btn.first").removeClass("active");
              $(".location__ellipse").addClass("active");
              $(".location__ellipse-sm").removeClass("active");
              $(".location__path_icon ").css({
                left: "50%"
              });
            } else {
              // $(".location__path_icon svg").css({ left: `${pos / 2}px`, right: "auto" });
              $(".location__path_icon ").css({
                left: "calc(50% - ".concat(_pos6, "px)")
              });
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
  var callback = function callback(mutationList, observer) {
    changeCalendarBlock();
  };
  var observer = new MutationObserver(callback);
  BXcalendars.forEach(function (item, i, arr) {
    observer.observe(item, {
      attributes: true,
      childList: true,
      subtree: false
    });
  });
}
function personSliders() {
  var persons = document.querySelectorAll(".event__person_slider");
  if (!persons.length) return;
  var _iterator = _createForOfIteratorHelper(persons),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var person = _step.value;
      var personCont = person.closest(".event__person_slider-cont");
      var slider = new Swiper(person, {
        speed: 1000,
        modules: [Navigation, Pagination],
        navigation: {
          prevEl: personCont.querySelector(".swiper-prev-btn"),
          nextEl: personCont.querySelector(".swiper-next-btn")
        },
        pagination: {
          el: personCont.querySelector(".swiper-pagination"),
          type: "bullets",
          clickable: true
        }
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function festSlider() {
  var fest = document.querySelector(".festival__slider");
  if (!fest) return;
  var festSlider = new Swiper(fest, {
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-20%", 0, -1],
        opacity: 0
      },
      next: {
        translate: ["100%", 0, 0]
      }
    },
    speed: 1000,
    modules: [Navigation, Pagination],
    navigation: {
      prevEl: ".festival__slider .swiper-prev-btn",
      nextEl: ".festival__slider .swiper-next-btn"
    },
    pagination: {
      el: ".festival .swiper-pagination",
      type: "bullets",
      clickable: true
    }
  });
}
function aboutSliders() {
  var sliders = document.querySelectorAll(".about__slider");
  var hallsSlider = document.querySelector(".about__halls_slider");
  if (!sliders.length) return;
  var aboutHallsSlider = new Swiper(hallsSlider, {
    effect: "fade",
    allowTouchMove: false,
    speed: 1000,
    autoHeight: true,
    modules: [Pagination],
    pagination: {
      el: ".about__sliders_control .dropdown-slider__tabs",
      type: "bullets",
      clickable: true,
      bulletClass: "btn_tab",
      bulletActiveClass: "active",
      renderBullet: function renderBullet(current, total) {
        var slide = Array.from(hallsSlider.querySelectorAll(".about__sliders_tab"))[current];
        var pagin = $(".about__sliders_control .dropdown-slider__tabs");
        return "<span class=\"btn btn_tab  dropdown-slider__item ".concat(total, " ").concat(slide.classList.contains("swiper-slide-active") ? "active" : "", "\"><span class=\"value\">").concat(Array.from(hallsSlider.querySelectorAll(".about__sliders_tab"))[current].dataset.name, "</span></span>");
      }
    },
    on: {
      afterInit: function afterInit() {
        var pagin = $(".about__sliders_control .dropdown-slider__tabs");
        var paginBg = $(pagin).find(".before");
        var activeTab = $(pagin).find(".active");
        $(pagin).closest(".dropdown-slider").find(".dropdown-slider__value .value").text(Array.from(hallsSlider.querySelectorAll(".about__sliders_tab"))[0].dataset.name);
        $(".about__sliders_control .dropdown-slider__tabs").append("<div class=\"before\"></div>");
        $(".about__sliders_control .dropdown-slider__tabs .before").width($(".about__sliders_control .dropdown-slider__tabs .active").innerWidth());
      }
    }
  });
  aboutHallsSlider.on("slideChange", function (slider) {
    var activeSlide = $(slider.slides)[slider.activeIndex];
    var pagin = $(".about__sliders_control .dropdown-slider__tabs");
    var paginBg = $(pagin).find(".before");
    var activeTab = $(pagin).find(".active");
    $(paginBg).css({
      width: $(activeTab).innerWidth(),
      left: $(activeTab).position().left + "px"
    });
    $(pagin).closest(".dropdown-slider").find(".dropdown-slider__value .value").text($(activeTab).text());
    scroll.stop();
    // window.scroll.update();
    window.scroll.start();
  });
  $(window).resize(function () {
    var pagin = $(".about__sliders_control .dropdown-slider__tabs");
    var paginBg = $(pagin).find(".before");
    var activeTab = $(pagin).find(".active");
    // window.scroll.update();
    window.scroll.start();
  });
  var _iterator2 = _createForOfIteratorHelper(sliders),
    _step2;
  try {
    var _loop = function _loop() {
      var slider = _step2.value;
      var sliderCont = slider.closest(".about__sliders_tab");
      var aboutSlider = new Swiper(slider, {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 4,
        speed: 1000,
        modules: [Navigation],
        navigation: {
          prevEl: sliderCont.querySelector(".description__slider_control .swiper-prev-btn"),
          nextEl: sliderCont.querySelector(".description__slider_control .swiper-next-btn")
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 4
          },
          576: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 4
          },
          767: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 4
          },
          991: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 16
          },
          1440: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 25
          }
        }
      });
      var tabs = 0;
      $(sliderCont).find(".description__slider_tabs .dropdown__item").on("click", function () {
        var before = $(this).closest(".description__slider_tabs").find(".before");
        if ($(this).hasClass("active")) return;
        tabs = $(this).data("tabs");
        $(sliderCont).find(".description__slider_tabs .dropdown__item").removeClass("active");
        $(this).addClass("active");
        $(before).css({
          left: $(this).position().left + "px"
        });
        if (tabs === 1) {
          $(slider).find("img").css({
            "aspect-ratio": "16/9"
          });
          $(slider).css({
            overflow: "hidden"
          });
          aboutSlider.params.slidesPerView = tabs;
          aboutSlider.params.autoHeight = true;
          aboutSlider.params.breakpoints = {
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 4
            },
            576: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 4
            },
            767: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 4
            },
            991: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 16
            },
            1440: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 25
            }
          };
          window.scroll.scrollTo(slider);
        } else {
          $(slider).find("img").css({
            "aspect-ratio": "auto"
          });
          $(slider).css({
            overflow: "visible"
          });
          if (window.outerWidth < 1440) tabs = 3;
          if (window.outerWidth < 767) tabs = 2;
          if (window.outerWidth < 576) tabs = 1;
          aboutSlider.params.slidesPerView = tabs;
          aboutSlider.params.autoHeight = true;
          aboutSlider.params.breakpoints = {
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 4
            },
            576: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 4
            },
            767: {
              slidesPerView: 3,
              slidesPerGroup: 1,
              spaceBetween: 4
            },
            991: {
              slidesPerView: 3,
              slidesPerGroup: 1,
              spaceBetween: 16
            },
            1440: {
              slidesPerView: 4,
              slidesPerGroup: 1,
              spaceBetween: 25
            }
          };
        }
        $(window).resize();
        aboutSlider.update();
        aboutSlider.updateSize();
        aboutHallsSlider.update();
        // window.scroll.update();/
        window.scroll.start();
      });
    };
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
function partnersSliders() {
  var sliders = document.querySelectorAll(".partners__slider");
  var hallsSlider = document.querySelector(".partners__halls_slider");
  var aboutHallsSlider = new Swiper(hallsSlider, {
    effect: "fade",
    allowTouchMove: false,
    speed: 1000,
    modules: [Pagination],
    pagination: {
      el: ".about__sliders_control .dropdown-slider__tabs",
      type: "bullets",
      clickable: true,
      bulletClass: "btn_tab",
      bulletActiveClass: "active",
      renderBullet: function renderBullet(current, total) {
        var pagin = $(".about__sliders_control .dropdown-slider__tabs");
        var slide = Array.from(hallsSlider.querySelectorAll(".about__sliders_tab"))[current];
        $(pagin).closest(".dropdown-slider").find(".dropdown-slider__value .value").text(Array.from(hallsSlider.querySelectorAll(".about__sliders_tab"))[current].dataset.name);
        return "<span class=\"btn btn_tab  dropdown-slider__item ".concat(total, " ").concat(slide.classList.contains("swiper-slide-active") ? "active" : "", "\"><span class=\"value\">").concat(Array.from(hallsSlider.querySelectorAll(".about__sliders_tab"))[current].dataset.name, "</span></span>");
      }
    },
    on: {
      afterInit: function afterInit() {
        var pagin = $(".about__sliders_control .dropdown-slider__tabs");
        var paginBg = $(pagin).find(".before");
        var activeTab = $(pagin).find(".dropdown-slider__item")[0];
        $(pagin).closest(".dropdown-slider").find(".dropdown-slider__value .value").text($(activeTab).text());
        $(".about__sliders_control .dropdown-slider__tabs").append("<div class=\"before\"></div>");
        $(".about__sliders_control .dropdown-slider__tabs .before").width($(".about__sliders_control .dropdown-slider__tabs .active").innerWidth());
      }
    }
  });
  aboutHallsSlider.on("slideChange", function (slider) {
    var activeSlide = $(slider.slides)[slider.activeIndex];
    var pagin = $(".about__sliders_control .dropdown-slider__tabs");
    var paginBg = $(pagin).find(".before");
    var activeTab = $(pagin).find(".active");
    $(paginBg).css({
      width: $(activeTab).innerWidth(),
      left: $(activeTab).position().left + "px"
    });
    $(pagin).closest(".dropdown-slider").find(".dropdown-slider__value .value").text($(activeTab).text());
  });
  $(window).resize(function () {
    var pagin = $(".about__sliders_control .dropdown-slider__tabs");
    if (!$(pagin).length) return;
    var paginBg = $(pagin).find(".before");
    var activeTab = $(pagin).find(".active");

    // $(paginBg).css({ width: $(activeTab).innerWidth(), left: $(activeTab).position().left + "px" });
  });
}
function cafeSliders() {
  var sliders = document.querySelectorAll(".partners__slider");
  var hallsSlider = document.querySelector(".partners__halls_slider.cafe_slider");

  // if (!sliders.length) return;

  var aboutHallsSlider = new Swiper(hallsSlider, {
    effect: "fade",
    allowTouchMove: false,
    speed: 1000,
    autoHeight: true,
    modules: [Pagination],
    pagination: {
      el: ".about__sliders_control .dropdown-slider__tabs",
      type: "bullets",
      clickable: true,
      bulletClass: "btn_tab",
      bulletActiveClass: "active",
      renderBullet: function renderBullet(current, total) {
        var slide = Array.from(hallsSlider.querySelectorAll(".about__sliders_tab"))[current];
        return "<span class=\"btn btn_tab  dropdown-slider__item ".concat(total, " ").concat(slide.classList.contains("swiper-slide-active") ? "active" : "", "\"><span class=\"value\">").concat(Array.from(hallsSlider.querySelectorAll(".about__sliders_tab"))[current].dataset.name, "</span></span>");
      }
    },
    on: {
      init: function init() {
        var pagin = $(".about__sliders_control .dropdown-slider__tabs");
        // const paginBg = $(pagin).find(".before");

        var activeTab = $(pagin).find(".active");
        $(pagin).closest(".dropdown-slider").find(".dropdown-slider__value .value").text($(activeTab).text());
        // $(".about__sliders_control .dropdown-slider__tabs").append(`<div class="before"></div>`);
        // $(".about__sliders_control .dropdown-slider__tabs .before").width(
        // 	$(".about__sliders_control .dropdown-slider__tabs .active").innerWidth()
        // );
      }
    }
  });
  aboutHallsSlider.on("slideChange", function (slider) {
    var activeSlide = $(slider.slides)[slider.activeIndex];
    var pagin = $(".about__sliders_control .dropdown-slider__tabs");
    // const paginBg = $(pagin).find(".before");

    var activeTab = $(pagin).find(".active");

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
    var pagin = $(".about__sliders_control .dropdown-slider__tabs");
    if (!$(pagin).length) return;
    var paginBg = $(pagin).find(".before");
    var activeTab = $(pagin).find(".active");
    $(paginBg).css({
      width: $(activeTab).innerWidth(),
      left: $(activeTab).position().left + "px"
    });
  });
  return aboutHallsSlider;
}
// EXTERNAL MODULE: ../node_modules/lenis/dist/lenis.mjs
var lenis = __webpack_require__(2596);
;// ./assets/js/methods.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function methods_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = methods_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function methods_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return methods_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? methods_arrayLikeToArray(r, a) : void 0; } }
function methods_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function methods_loadScript(_x) {
  return _loadScript.apply(this, arguments);
}
function _loadScript() {
  _loadScript = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(src) {
    var func,
      script,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          func = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
          script = document.createElement("script");
          script.src = src;
          document.body.append(script);
          if (func) script.onload = function () {
            return func();
          };
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _loadScript.apply(this, arguments);
}
function methods_setMap() {
  var mapContainers = document.querySelectorAll(".map");
  if (mapContainers.length === 0) return;
  var script = document.createElement("script");
  script.src = "../local/templates/zaryadyehall/assets/libs/buildYaMaps/script.js";
  document.body.append(script);
  try {
    ymaps.ready(function () {
      var _iterator = methods_createForOfIteratorHelper(mapContainers),
        _step;
      try {
        var _loop = function _loop() {
          var mapContainer = _step.value;
          var id = mapContainer.getAttribute("id"),
            data = mapContainer.dataset,
            mapCoord = JSON.parse(data.coord),
            mapZoom = data.zoom,
            mapTitle = data.title,
            // mapCoord2 = JSON.parse(data.coord2),
            // mapTitle2 = data.title2,
            mapCenter = ["55.75157862329463", "37.62489788352945"],
            geolocation = ymaps.geolocation;
          map = new ymaps.Map(id, {
            center: mapCoord,
            zoom: mapZoom,
            controls: []
          }), pin = new ymaps.Placemark(mapCoord, {
            hintContent: mapTitle
          }, {
            iconLayout: "default#image",
            iconImageHref: "/local/templates/zaryadyehall/assets/img/placemark.png",
            iconImageSize: [170, 190],
            iconImageOffset: [-90, -120]
          });
          map.behaviors.disable(["scrollZoom"]);
          map.geoObjects.add(pin);
          // setMapCenter();
          function setMapCenter() {
            map.setCenter(mapCenter);
            if (!mapContainer.closest(".contacts")) {
              var centerCoord = map.getGlobalPixelCenter();

              // смещаем центр карты

              if (window.innerWidth > 1200) {
                // centerCoord[0] -= 350;
                centerCoord[1] += 0;
              } else if (window.innerWidth > 991) {
                // centerCoord[0] -= 250;
                centerCoord[1] += 0;
              } else {
                centerCoord[0] -= 0;
                centerCoord[1] += 0;
              }
              map.setGlobalPixelCenter(centerCoord);
            }
          }
          ZoomLayout = ymaps.templateLayoutFactory.createClass(['<div class="map__controls section">', '<div class="container">', '<div class="sheme__sliders_scaler">', '<button id="zoom-in" class="btn btn_white btn_slider btn_splus inc">', '<svg width="19.000000" height="19.000000" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">', '<path d="M9.5 0C9.77612 0 10 0.223877 10 0.5L10 9L18.5 9C18.7761 9 19 9.22388 19 9.5C19 9.77612 18.7761 10 18.5 10L10 10L10 18.5C10 18.7761 9.77612 19 9.5 19C9.22388 19 9 18.7761 9 18.5L9 10L0.5 10C0.223877 10 0 9.77612 0 9.5C0 9.22388 0.223877 9 0.5 9L9 9L9 0.5C9 0.223877 9.22388 0 9.5 0Z" fill="currentColor" fill-opacity="1.000000" fill-rule="evenodd"></path>', "</svg>", "</button>", '<button id="zoom-out" class="btn btn_white btn_slider btn_minus dec">', '<svg width="19.000000" height="1.000000" viewBox="0 0 19 1" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">', '<path d="M0 0.5C0 0.223877 0.223877 0 0.5 0L18.5 0C18.7761 0 19 0.223877 19 0.5C19 0.776123 18.7761 1 18.5 1L0.5 1C0.223877 1 0 0.776123 0 0.5Z" fill="currentColor" fill-opacity="1.000000" fill-rule="evenodd"></path>', "</svg>", "</button>", "</div>", "</div>", "</div>"].join(""), {
            // Переопределяем методы макета, чтобы выполнять дополнительные действия
            // при построении и очистке макета.
            build: function build() {
              // Вызываем родительский метод build.
              ZoomLayout.superclass.build.call(this);

              // Привязываем функции-обработчики к контексту и сохраняем ссылки
              // на них, чтобы потом отписаться от событий.
              this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
              this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

              // Начинаем слушать клики на кнопках макета.
              $("#zoom-in").bind("click", this.zoomInCallback);
              $("#zoom-out").bind("click", this.zoomOutCallback);
            },
            clear: function clear() {
              // Снимаем обработчики кликов.
              $("#zoom-in").unbind("click", this.zoomInCallback);
              $("#zoom-out").unbind("click", this.zoomOutCallback);

              // Вызываем родительский метод clear.
              ZoomLayout.superclass.clear.call(this);
            },
            zoomIn: function zoomIn() {
              var map = this.getData().control.getMap();
              map.setZoom(map.getZoom() + 1, {
                checkZoomRange: true
              });
            },
            zoomOut: function zoomOut() {
              var map = this.getData().control.getMap();
              map.setZoom(map.getZoom() - 1, {
                checkZoomRange: true
              });
            }
          }), zoomControl = new ymaps.control.ZoomControl({
            options: {
              layout: ZoomLayout
            }
          });

          // map.controls.add(zoomControl);

          ButtonLayout = ymaps.templateLayoutFactory.createClass(['<div class="map__controls section">', '<div class="container">', '<div class="map__controls_row">', '<button class="btn btn_white btn_slider btn_size">', '<svg id="size" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">', '<g id="arr-top" >', '<path d="M20.6665 4H28.6665V12" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>', '<path d="M28.6665 4L19.3331 13.3333" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>', "</g>", '<g id="arr-bottom">', '<path d="M12.6665 28H4.6665V20" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>', '<path d="M4.6665 28L13.9998 18.6666" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>', "</g>", "</svg>", "</button>", "</div>", '<div class="sheme__sliders_scaler">', '<button id="zoom-in" class="btn btn_white btn_slider btn_splus inc">', '<svg width="19.000000" height="19.000000" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">', '<path d="M9.5 0C9.77612 0 10 0.223877 10 0.5L10 9L18.5 9C18.7761 9 19 9.22388 19 9.5C19 9.77612 18.7761 10 18.5 10L10 10L10 18.5C10 18.7761 9.77612 19 9.5 19C9.22388 19 9 18.7761 9 18.5L9 10L0.5 10C0.223877 10 0 9.77612 0 9.5C0 9.22388 0.223877 9 0.5 9L9 9L9 0.5C9 0.223877 9.22388 0 9.5 0Z" fill="currentColor" fill-opacity="1.000000" fill-rule="evenodd"></path>', "</svg>", "</button>", '<button id="zoom-out" class="btn btn_white btn_slider btn_minus dec">', '<svg width="19.000000" height="1.000000" viewBox="0 0 19 1" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">', '<path d="M0 0.5C0 0.223877 0.223877 0 0.5 0L18.5 0C18.7761 0 19 0.223877 19 0.5C19 0.776123 18.7761 1 18.5 1L0.5 1C0.223877 1 0 0.776123 0 0.5Z" fill="currentColor" fill-opacity="1.000000" fill-rule="evenodd"></path>', "</svg>", "</button>", "</div>", '<div class="map__controls_row">', '<button id="openInYaMaps" class="btn btn_white btn_calendar btn_splus inc">', '<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">', '<circle cx="16.6667" cy="15.3333" r="2.66667" stroke="currentColor" stroke-width="1.33333"/>', '<path d="M16.6667 30L24 22.6666C28.0501 18.6165 28.0501 12.05 24 7.99996C19.9499 3.94987 13.3834 3.94987 9.33333 7.99996C5.28324 12.05 5.28324 18.6165 9.33333 22.6666L16.6667 30Z" stroke="currentColor" stroke-width="1.33333" stroke-linejoin="round"/>', "</svg>", "<span>Открыть в Яндекс.Картах</span>", "</button>", '<button class="btn btn_white btn_slider btn_geo">', '<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">', '<path d="M27.3331 16C27.3331 21.8911 22.5575 26.6667 16.6664 26.6667M27.3331 16C27.3331 10.109 22.5575 5.33337 16.6664 5.33337M27.3331 16H23.3331M16.6664 26.6667C10.7754 26.6667 5.99976 21.8911 5.99976 16M16.6664 26.6667V22.6667M5.99976 16C5.99976 10.109 10.7754 5.33337 16.6664 5.33337M5.99976 16H9.99976M16.6664 5.33337V9.33337" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>', "</svg>", "</button>", "</div>", "</div>", "</div>"].join(""), {
            build: function build() {
              // Вызываем родительский метод build.
              ZoomLayout.superclass.build.call(this);

              // Привязываем функции-обработчики к контексту и сохраняем ссылки
              // на них, чтобы потом отписаться от событий.
              this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
              this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);
              this.enterFullscreenCallback = ymaps.util.bind(this.enterFullscreen, this);
              this.openInMapsCallback = ymaps.util.bind(this.openInYaMaps, this);
              this.getGeolocationCallback = ymaps.util.bind(this.getGeolocation, this);

              // Начинаем слушать клики на кнопках макета.
              $("#zoom-in").bind("click", this.zoomInCallback);
              $("#zoom-out").bind("click", this.zoomOutCallback);
              $(".btn_size").bind("click", this.enterFullscreenCallback);
              $(".btn_geo").bind("click", this.getGeolocationCallback);
              $("#openInYaMaps").bind("click", this.openInMapsCallback);
            },
            clear: function clear() {
              // Снимаем обработчики кликов.
              $("#zoom-in").unbind("click", this.zoomInCallback);
              $("#zoom-out").unbind("click", this.zoomOutCallback);
              $(".btn_geo").unbind("click", this.getGeolocationCallback);
              $(".btn_size").unbind("click", this.enterFullscreenCallback);

              // Вызываем родительский метод clear.
              ZoomLayout.superclass.clear.call(this);
            },
            zoomIn: function zoomIn() {
              var map = this.getData().control.getMap();
              map.setZoom(map.getZoom() + 1, {
                checkZoomRange: true
              });
            },
            zoomOut: function zoomOut() {
              var map = this.getData().control.getMap();
              map.setZoom(map.getZoom() - 1, {
                checkZoomRange: true
              });
            },
            enterFullscreen: function enterFullscreen() {
              if (!!map.container.isFullscreen()) {
                $(".btn_size").removeClass("active");
                map.container.exitFullscreen();
              } else {
                map.container.enterFullscreen();
                $(".btn_size").addClass("active");
              }
            },
            openInYaMaps: function openInYaMaps() {
              var mapCenter = ["55.75157862329463", "37.62489788352945"];
              var yandexMapsUrl = "https://yandex.ru/maps/?ll=".concat(mapCoord[1], ",").concat(mapCoord[0], "&z=17&l=map&pt=").concat(mapCoord[1], ",").concat(mapCoord[0], ",pm2bl");
              window.open(yandexMapsUrl, "_blank");
            },
            getGeolocation: function getGeolocation() {
              geolocation.get({
                provider: "yandex",
                // mapStateAutoApply: true,
                autoReverseGeocode: false
              }).then(function (result) {
                // Красным цветом пометим положение, вычисленное через ip.
                result.geoObjects.options.set("preset", "islands#redCircleIcon");
                result.geoObjects.get(0).properties.set({
                  balloonContentBody: "Мое местоположение"
                });
                map.geoObjects.add(result.geoObjects);
                map.setCenter(result.geoObjects.get(0).geometry.getCoordinates(), 17, {
                  duration: 300
                });
                // var myMap = this.getData().control.getMap();
                // myMap.setZoom(17, { checkZoomRange: true });
              });
            }
          }), button = new ymaps.control.Button({
            options: {
              layout: ButtonLayout
            }
          });
          map.controls.add(button, {
            position: {
              right: 0,
              top: 0
            }
          });
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  } catch (e) {
    console.log("Yandex Map is not initiated");
  }
}
var ShapeOverlays = /*#__PURE__*/function () {
  function ShapeOverlays(elm) {
    _classCallCheck(this, ShapeOverlays);
    _defineProperty(this, "themeShape", document.querySelector(".shape-overlays-theme"));
    _defineProperty(this, "themePath", this.themeShape.querySelectorAll("path"));
    this.elm = elm;
    this.path = elm.querySelectorAll("path");
    this.numPoints = 4;
    this.duration = 1200;
    this.delayPointsArray = [];
    this.delayPointsMax = 0;
    this.delayPerPath = 60;
    this.timeStart = Date.now();
    this.isOpened = false;
    this.isThemeShapeOpened = false;
    this.isAnimating = false;
    this.isThemeShapeAnimating = false;
    for (var i = 0; i < this.numPoints; i++) {
      this.delayPointsArray[i] = Math.random() * this.delayPointsMax;
    }
  }
  return _createClass(ShapeOverlays, [{
    key: "toggle",
    value: function toggle() {
      if (this.isAnimating || this.isThemeShapeAnimating) return;
      this.isAnimating = true;
      this.timeStart = Date.now();
      // for (var i = 0; i < this.numPoints; i++) {
      // 	this.delayPointsArray[i] = Math.random() * this.delayPointsMax;
      // }

      if (this.isOpened === false) {
        if (this.isThemeShapeOpened === false && localStorage.colorTheme === "dark") {
          this.open(true);
        } else {
          this.open();
        }
      } else {
        if (this.isThemeShapeOpened !== false && localStorage.colorTheme === "dark") {
          this.close(true);
        } else {
          this.close();
        }
      }
      // if (localStorage.colorTheme === "dark") {
      // 	this.themeToggle();
      // }
    }
  }, {
    key: "themeToggle",
    value: function themeToggle() {
      if (this.isAnimating || this.isThemeShapeAnimating) return;
      this.isThemeShapeAnimating = true;
      this.timeStart = Date.now();
      // for (var i = 0; i < this.numPoints; i++) {
      // 	this.delayPointsArray[i] = Math.random() * this.delayPointsMax;
      // }
      if (this.isThemeShapeOpened === false) {
        this.openTheme();
      } else {
        this.closeTheme();
      }
    }
  }, {
    key: "open",
    value: function open() {
      var withTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.isOpened = true;
      this.elm.classList.add("is-opened");
      if (withTheme) {
        this.isThemeShapeOpened = true;
        this.themeShape.classList.add("is-opened");
      }
      // this.timeStart = Date.now();
      this.renderLoop(withTheme);
    }
  }, {
    key: "close",
    value: function close() {
      var withTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.isOpened = false;
      this.elm.classList.remove("is-opened");
      if (withTheme) {
        this.isThemeShapeOpened = false;
        this.themeShape.classList.remove("is-opened");
      }
      // this.timeStart = Date.now();
      this.renderLoop(withTheme);
    }
  }, {
    key: "updatePath",
    value: function updatePath(time) {
      var withTheme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var points = [];
      var themePoints = [];
      var width = Math.max(window.innerWidth, window.innerHeight);
      for (var i = 0; i < this.numPoints; i++) {
        var myEase = Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1);
        // points[i] = (1 - ease.cubicIn(myEase)) * 100;
        // if (withTheme) {
        // 	themePoints[i] = (1 - ease.cubicIn(myEase)) * 1;
        // }
        var thisEase = i % 2 === 1 ? ease.sineOut : ease.exponentialInOut;
        points[i] = (1 - thisEase(myEase)) * 100;
        if (withTheme) {
          themePoints[i] = 1 - thisEase(myEase);
        }
      }
      var str = "";
      var themeStr = "";
      str += this.isOpened ? "M 0 0 V ".concat(points[0]) : "M 0 ".concat(points[0]);
      themeStr += this.isOpened ? "M 0 0 V ".concat(themePoints[0]) : "M 0 ".concat(themePoints[0]);
      for (var _i = 0; _i < this.numPoints - 1; _i++) {
        var p = (_i + 1) / (this.numPoints - 1) * 100;
        var cp = p - 1 / (this.numPoints - 1) * 100 / 2;
        str += "C ".concat(cp, " ").concat(points[_i], " ").concat(cp, " ").concat(points[_i + 1], " ").concat(p, " ").concat(points[_i + 1], " ");
        if (withTheme) {
          var _p = (_i + 1) / (this.numPoints - 1);
          var _cp = _p - 1 / (this.numPoints - 1) / 2;
          themeStr += "C ".concat(_cp, " ").concat(themePoints[_i], " ").concat(_cp, " ").concat(themePoints[_i + 1], " ").concat(_p, " ").concat(themePoints[_i + 1], " ");
        }
      }
      str += this.isOpened ? "V 100 H 0" : "V 0 H 0";
      themeStr += this.isOpened ? "V 1 H 0" : "V 0 H 0";
      return {
        str: str,
        themeStr: themeStr
      };
    }
  }, {
    key: "render",
    value: function render() {
      var withTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (this.isOpened) {
        for (var i = 0; i < this.path.length; i++) {
          var time = Date.now();
          var attrToTime = this.setPathAttr(time, i);
          var _this$updatePath = this.updatePath(attrToTime, withTheme),
            str = _this$updatePath.str,
            themeStr = _this$updatePath.themeStr;
          this.path[i].setAttribute("d", str);
          if (withTheme) {
            this.themePath[i].setAttribute("d", themeStr);
          }
        }
      } else {
        for (var i = 0; i < this.path.length; i++) {
          var _time = Date.now();
          // const attrToTime = time - (this.timeStart + this.delayPerPath * (this.path.length - i - 1));
          var _attrToTime = _time - (this.timeStart + this.delayPerPath * i);
          var _this$updatePath2 = this.updatePath(_attrToTime, withTheme),
            _str = _this$updatePath2.str,
            _themeStr = _this$updatePath2.themeStr;
          this.path[i].setAttribute("d", _str);
          if (withTheme) {
            this.themePath[i].setAttribute("d", _themeStr);
          }
        }
      }
    }
  }, {
    key: "renderLoop",
    value: function renderLoop() {
      var _this = this;
      var withTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.render(withTheme);
      if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
        requestAnimationFrame(function () {
          _this.renderLoop(withTheme);
        });
      } else {
        setTimeout(function () {
          _this.isAnimating = false;
        }, 700);
      }
    }
  }, {
    key: "openTheme",
    value: function openTheme() {
      this.isThemeShapeOpened = true;
      this.themeShape.classList.add("is-opened");
      this.renderThemeLoop();
    }
  }, {
    key: "closeTheme",
    value: function closeTheme() {
      this.isThemeShapeOpened = false;
      this.themeShape.classList.remove("is-opened");
      this.renderThemeLoop();
    }
  }, {
    key: "updateThemePath",
    value: function updateThemePath(time) {
      var points = [];
      for (var i = 0; i < this.numPoints; i++) {
        // points[i] = (1 - ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1))) * 1;
        var thisEase = i % 2 === 1 ? ease.sineOut : ease.exponentialInOut;
        points[i] = 1 - thisEase(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1));
      }
      var str = "";
      str += this.isThemeShapeOpened ? "M 0 0 V ".concat(points[0]) : "M 0 ".concat(points[0]);
      for (var _i2 = 0; _i2 < this.numPoints - 1; _i2++) {
        var p = (_i2 + 1) / (this.numPoints - 1);
        var cp = p - 1 / (this.numPoints - 1) / 2;
        str += "C ".concat(cp, " ").concat(points[_i2], " ").concat(cp, " ").concat(points[_i2 + 1], " ").concat(p, " ").concat(points[_i2 + 1], " ");
      }
      str += this.isThemeShapeOpened ? "V ".concat(1, " H 0") : "V 0 H 0";
      return str;
    }
  }, {
    key: "renderTheme",
    value: function renderTheme() {
      if (this.isThemeShapeOpened) {
        for (var i = 0; i < this.themePath.length; i++) {
          var attrToTime = this.setPathAttr(Date.now(), i);
          this.themePath[i].setAttribute("d", this.updateThemePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
        }
      } else {
        for (var i = 0; i < this.themePath.length; i++) {
          this.themePath[i].setAttribute("d", this.updateThemePath(Date.now() - (this.timeStart + this.delayPerPath * (this.themePath.length - i - 1))));
        }
      }
    }
  }, {
    key: "setPathAttr",
    value: function setPathAttr(time, i) {
      return time - (this.timeStart + this.delayPerPath * i);
    }
  }, {
    key: "renderThemeLoop",
    value: function renderThemeLoop() {
      var _this2 = this;
      this.renderTheme();
      if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
        requestAnimationFrame(function () {
          _this2.renderThemeLoop();
        });
      } else {
        setTimeout(function () {
          _this2.isThemeShapeAnimating = false;
        }, 500);
      }
    }
  }]);
}();
var _ShapeOverlays = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function _ShapeOverlays(elm) {
    _classCallCheck(this, _ShapeOverlays);
    _defineProperty(this, "themeShape", document.querySelector(".shape-overlays-theme"));
    _defineProperty(this, "themePath", this.themeShape.querySelectorAll("path"));
    this.elm = elm;
    this.path = elm.querySelectorAll("path");
    this.numPoints = 4;
    this.duration = 1200;
    this.delayPointsArray = [];
    this.delayPointsMax = 300;
    this.delayPerPath = 100;
    this.timeStart = Date.now();
    this.isOpened = false;
    this.isThemeShapeOpened = false;
    this.isAnimating = false;
    this.isThemeShapeAnimating = false;
    for (var i = 0; i < this.numPoints; i++) {
      this.delayPointsArray[i] = Math.random() * this.delayPointsMax;
    }
  }
  return _createClass(_ShapeOverlays, [{
    key: "toggle",
    value: function toggle() {
      if (this.isAnimating || this.isThemeShapeAnimating) return;
      this.isAnimating = true;
      this.timeStart = Date.now();
      // for (var i = 0; i < this.numPoints; i++) {
      // 	this.delayPointsArray[i] = Math.random() * this.delayPointsMax;
      // }

      if (this.isOpened === false) {
        if (this.isThemeShapeOpened === false && localStorage.colorTheme === "dark") {
          this.open(true);
        } else {
          this.open();
        }
      } else {
        if (this.isThemeShapeOpened !== false && localStorage.colorTheme === "dark") {
          this.close(true);
        } else {
          this.close();
        }
      }
      // if (localStorage.colorTheme === "dark") {
      // 	this.themeToggle();
      // }
    }
  }, {
    key: "themeToggle",
    value: function themeToggle() {
      if (this.isAnimating || this.isThemeShapeAnimating) return;
      this.isThemeShapeAnimating = true;
      this.timeStart = Date.now();
      // for (var i = 0; i < this.numPoints; i++) {
      // 	this.delayPointsArray[i] = Math.random() * this.delayPointsMax;
      // }
      if (this.isThemeShapeOpened === false) {
        this.openTheme();
      } else {
        this.closeTheme();
      }
    }
  }, {
    key: "open",
    value: function open() {
      var withTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.isOpened = true;
      this.elm.classList.add("is-opened");
      if (withTheme) {
        this.isThemeShapeOpened = true;
        this.themeShape.classList.add("is-opened");
      }
      // this.timeStart = Date.now();
      this.renderLoop(withTheme);
    }
  }, {
    key: "close",
    value: function close() {
      var withTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.isOpened = false;
      this.elm.classList.remove("is-opened");
      if (withTheme) {
        this.isThemeShapeOpened = false;
        this.themeShape.classList.remove("is-opened");
      }
      // this.timeStart = Date.now();
      this.renderLoop(withTheme);
    }
  }, {
    key: "updatePath",
    value: function updatePath(time) {
      var withTheme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var points = [];
      var themePoints = [];
      var width = Math.max(window.innerWidth, window.innerHeight);
      for (var i = 0; i < this.numPoints; i++) {
        var myEase = Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1);
        points[i] = (1 - ease.cubicIn(myEase)) * 100;
        if (withTheme) {
          themePoints[i] = (1 - ease.cubicIn(myEase)) * 1;
        }
      }
      var str = "";
      var themeStr = "";
      str += this.isOpened ? "M 0 0 V ".concat(points[0]) : "M 0 ".concat(points[0]);
      themeStr += this.isOpened ? "M 0 0 V ".concat(themePoints[0]) : "M 0 ".concat(themePoints[0]);
      for (var i = 0; i < this.numPoints - 1; i++) {
        var p = (i + 1) / (this.numPoints - 1) * 100;
        var cp = p - 1 / (this.numPoints - 1) * 100 / 2;
        str += "C ".concat(cp, " ").concat(points[i], " ").concat(cp, " ").concat(points[i + 1], " ").concat(p, " ").concat(points[i + 1], " ");
        if (withTheme) {
          var _p2 = (i + 1) / (this.numPoints - 1) * 1;
          var _cp2 = _p2 - 1 / (this.numPoints - 1) * 1 / 2;
          themeStr += "C ".concat(_cp2, " ").concat(themePoints[i], " ").concat(_cp2, " ").concat(themePoints[i + 1], " ").concat(_p2, " ").concat(themePoints[i + 1], " ");
        }
      }
      str += this.isOpened ? "V 100 H 0" : "V 0 H 0";
      themeStr += this.isOpened ? "V ".concat(1, " H 0") : "V 0 H 0";
      return {
        str: str,
        themeStr: themeStr
      };
    }
  }, {
    key: "render",
    value: function render() {
      var withTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (this.isOpened) {
        for (var i = 0; i < this.path.length; i++) {
          var time = Date.now();
          var attrToTime = this.setPathAttr(time, i);
          var _this$updatePath3 = this.updatePath(attrToTime, withTheme),
            str = _this$updatePath3.str,
            themeStr = _this$updatePath3.themeStr;
          this.path[i].setAttribute("d", str);
          if (withTheme) {
            this.themePath[i].setAttribute("d", themeStr);
          }
        }
      } else {
        for (var i = 0; i < this.path.length; i++) {
          var _time2 = Date.now();
          var _attrToTime2 = _time2 - (this.timeStart + this.delayPerPath * (this.path.length - i - 1));
          var _this$updatePath4 = this.updatePath(_attrToTime2, withTheme),
            _str2 = _this$updatePath4.str,
            _themeStr2 = _this$updatePath4.themeStr;
          this.path[i].setAttribute("d", _str2);
          if (withTheme) {
            this.themePath[i].setAttribute("d", _themeStr2);
          }
        }
      }
    }
  }, {
    key: "renderLoop",
    value: function renderLoop() {
      var _this3 = this;
      var withTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.render(withTheme);
      if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
        requestAnimationFrame(function () {
          _this3.renderLoop(withTheme);
        });
      } else {
        setTimeout(function () {
          _this3.isAnimating = false;
        }, 1000);
      }
    }
  }, {
    key: "openTheme",
    value: function openTheme() {
      this.isThemeShapeOpened = true;
      this.themeShape.classList.add("is-opened");
      this.renderThemeLoop();
    }
  }, {
    key: "closeTheme",
    value: function closeTheme() {
      this.isThemeShapeOpened = false;
      this.themeShape.classList.remove("is-opened");
      this.renderThemeLoop();
    }
  }, {
    key: "updateThemePath",
    value: function updateThemePath(time) {
      var points = [];
      for (var i = 0; i < this.numPoints; i++) {
        points[i] = (1 - ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1))) * 1;
      }
      var str = "";
      str += this.isThemeShapeOpened ? "M 0 0 V ".concat(points[0]) : "M 0 ".concat(points[0]);
      for (var i = 0; i < this.numPoints - 1; i++) {
        var p = (i + 1) / (this.numPoints - 1) * 1;
        var cp = p - 1 / (this.numPoints - 1) * 1 / 2;
        str += "C ".concat(cp, " ").concat(points[i], " ").concat(cp, " ").concat(points[i + 1], " ").concat(p, " ").concat(points[i + 1], " ");
      }
      str += this.isThemeShapeOpened ? "V ".concat(1, " H 0") : "V 0 H 0";
      return str;
    }
  }, {
    key: "renderTheme",
    value: function renderTheme() {
      if (this.isThemeShapeOpened) {
        for (var i = 0; i < this.themePath.length; i++) {
          var attrToTime = this.setPathAttr(Date.now(), i);
          this.themePath[i].setAttribute("d", this.updateThemePath(Date.now() + 70 - (this.timeStart + this.delayPerPath * i)));
        }
      } else {
        for (var i = 0; i < this.themePath.length; i++) {
          this.themePath[i].setAttribute("d", this.updateThemePath(Date.now() + 40 - (this.timeStart + this.delayPerPath * (this.themePath.length - i - 1))));
        }
      }
    }
  }, {
    key: "setPathAttr",
    value: function setPathAttr(time, i) {
      return time - (this.timeStart + this.delayPerPath * i);
    }
  }, {
    key: "renderThemeLoop",
    value: function renderThemeLoop() {
      var _this4 = this;
      this.renderTheme();
      if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
        requestAnimationFrame(function () {
          _this4.renderThemeLoop();
        });
      } else {
        setTimeout(function () {
          _this4.isThemeShapeAnimating = false;
        }, 500);
      }
    }
  }]);
}()));
function phoneMask(e) {
  var testReg = /^((8|\+7)[\- ])?(\(\d{3}\)[\- ])\d{3}[\- ]\d{2}[\- ]\d{2}$/;
  var valRegRu = /\D/gi;
  var str = formatValueInput(this, valRegRu);
  var formatStr = "";
  var rusTel = ["7", "8", "9"];
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
}
function formatValueInput(elem, regexp) {
  var str = elem.value.replace(regexp, "");
  return str;
}
function testValue(elem, reg, string) {
  if ($(elem).attr("data-reg") === "true") {
    var str = $(elem).val();
    var errElem = $(elem).closest("label").find("span.error");
    if (!str.length) {
      $(errElem).text("Заполните это поле");
      $(errElem).addClass("show");
      $(elem).addClass("error");
      $(elem).attr("data-test", "false");
    } else if (!reg.test(str)) {
      $(errClass).text(string);
      $(elem).addClass("error");
      $(elem).attr("data-test", "false");
    } else {
      $(elem).removeClass("error");
      $(elem).attr("data-test", "true");
      $(errClass).text("");
    }
  }
}
function maskedEmail(elem) {
  var regexp = /[^\w-@\.]/gi;
  var str = elem.value.replace(regexp, "");
  if (!/[\w-]/g.test(str)) {
    str = str.replace(/@/, "");
  }
  if (str.match(/@/g) && str.match(/@/g).length > 1) {
    str = str.slice(0, -1);
  }
  return str;
}
function validationFormFields(formEl) {
  var form = $(formEl);
  var inputs = $(form).find("input[data-test]");
  var testInputs = $(form).find("input[data-test=true]");
  // console.log(inputs, testInputs.length);
  // if (inputs.length === testInputs.length) {
  // 	$(form).find("input[type=submit]").attr("disabled", false);
  // } else {
  // 	$(form).find("input[type=submit]").attr("disabled", true);
  // }
}
// EXTERNAL MODULE: ../node_modules/typograf/dist/typograf.es.mjs
var typograf_es = __webpack_require__(3552);
;// ./assets/js/index.js
function js_typeof(o) { "@babel/helpers - typeof"; return js_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, js_typeof(o); }
function js_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = js_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function js_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return js_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? js_arrayLikeToArray(r, a) : void 0; } }
function js_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function js_defineProperty(e, r, t) { return (r = js_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function js_toPropertyKey(t) { var i = js_toPrimitive(t, "string"); return "symbol" == js_typeof(i) ? i : i + ""; }
function js_toPrimitive(t, r) { if ("object" != js_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != js_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






document.addEventListener("DOMContentLoaded", function () {
  fsSliders();
  var isDateChecked = localStorage.getItem("isDateChecked");
  if (isDateChecked && document.querySelector("#filter_calendar")) {
    document.querySelector("#filter_calendar").classList.add("isDateChecked");
  }
  if (document.querySelector(".events__filter_form")) {
    var form = document.querySelector(".events__filter_form");
    var inputs = jquery_default()(form).find("input");
    if (Array.from(jquery_default()(inputs)).some(function (item) {
      return jquery_default()(item).prop("checked");
    })) {
      jquery_default()('[data-target="#filter"]').addClass("isDateChecked");
    }
  }
  if (document.querySelector(".leaders .about__desc_text")) {
    var lineHeight = parseFloat(jquery_default()(".leaders .about__desc_text p").css("line-height"));
    jquery_default()(".leaders .about__desc_text").css({
      "max-height": lineHeight * 10 + "px",
      height: "auto"
    });
    //console.log($(".leaders .about__desc_text p").height());
  }
  jquery_default()(document).on("click", ".leaders .about__more_link", function (e) {
    var _this = this;
    e.preventDefault();
    var lineHeight = parseFloat(jquery_default()(".leaders .about__desc_text p").css("line-height"));
    var leaders = this.closest(".leaders");
    var clampedText = leaders.querySelector(".about__desc_text");
    var tl = gsap/* default */.Ay.timeline();
    if (clampedText.offsetHeight < clampedText.scrollHeight) {
      tl.to(clampedText, {
        maxHeight: clampedText.scrollHeight,
        duration: 0.3,
        ease: "none"
      }).then(function () {
        jquery_default()(_this).text("Свернуть");
      });
    } else {
      tl.to(clampedText, {
        maxHeight: lineHeight * 10,
        duration: 0.3,
        ease: "none"
      }).then(function () {
        jquery_default()(_this).text("Читать всё");
      });
    }
  });
  locationSliders();
  var elmOverlay = document.querySelector(".shape-overlays");
  var overlay = new ShapeOverlays(elmOverlay);
  var scrollPosition = localStorage.getItem("scrollPosY") ? localStorage.getItem("scrollPosY") : 0;
  (function () {
    window.scroll = new lenis/* default */.A({
      autoRaf: true,
      smooth: true,
      lerp: 0.06,
      getSpeed: true,
      multiplier: 0.6,
      scrollFromAnywhere: true,
      getDirection: true,
      prevent: function prevent(node) {
        return !node.closest(".mobile") && (jquery_default()(node).css("overflow") === "auto" || jquery_default()(node).css("overflow") === "scroll");
      },
      smartphone: js_defineProperty(js_defineProperty({
        smooth: !0,
        breakpoint: 767
      }, "smooth", true), "lerp", 0.06),
      tablet: js_defineProperty(js_defineProperty(js_defineProperty({
        smooth: !0,
        breakpoint: 1024
      }, "smooth", true), "lerp", 0.06), "multiplier", 4)
    });
    var minProgress = 0.3,
      maxProgress = 0.75;
    scroll.on("scroll", function (args) {
      var posTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      var events = document.querySelectorAll(".events__item");
      if (posTop >= 300) {
        var head = jquery_default()(".head").not(".mobile__head");
        if (scroll.direction < 0) {
          if (!jquery_default()(".head.fixed").hasClass("show")) {
            jquery_default()(".head.fixed").css({
              transition: "all 0.7s"
            });
            jquery_default()(".head.fixed").addClass("show");
            jquery_default()(".head.fixed").removeClass("hide");
          }
        } else if (scroll.direction > 0) {
          jquery_default()(".head.fixed").css({
            transition: "all 0.4s"
          });
          jquery_default()(".head.fixed").removeClass("show");
          jquery_default()(".head.fixed").addClass("hide");
        }
      } else {
        jquery_default()(".head.fixed").css({
          transition: "all 0.4s"
        });
        jquery_default()(".head.fixed").removeClass("show");
        jquery_default()(".head.fixed").addClass("hide");
      }
      if (posTop >= window.innerHeight * 2) {
        if (scroll.direction < 0) {
          if (jquery_default()(".scroll_top").hasClass("show")) {
            jquery_default()(".scroll_top").removeClass("show");
          }
        } else if (scroll.direction > 0) {
          if (!jquery_default()(".scroll_top").hasClass("show")) {
            jquery_default()(".scroll_top").addClass("show");
          }
        }
      } else {
        if (jquery_default()(".scroll_top").hasClass("show")) {
          jquery_default()(".scroll_top").removeClass("show");
        }
      }
      if (jquery_default()(".events__date").length) {
        if (scroll.direction < 0) {
          if (jquery_default()(".head.fixed").hasClass("show")) {
            if (window.innerWidth > 991) {
              jquery_default()(".events__date").css({
                top: jquery_default()(".head.fixed").innerHeight() + 32 + "px"
              });
            } else {
              jquery_default()(".events__date").css({
                top: jquery_default()(".head.fixed").innerHeight() + "px"
              });
            }
          } else {
            if (window.innerWidth > 991) {
              jquery_default()(".events__date").css({
                top: "32px"
              });
            } else {
              jquery_default()(".events__date").css({
                top: "0px"
              });
            }
          }
        } else if (scroll.direction > 0) {
          if (window.innerWidth > 991) {
            jquery_default()(".events__date").css({
              top: "32px"
            });
          } else {
            jquery_default()(".events__date").css({
              top: "0px"
            });
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
        var scrollTarget = window.outerHeight - window.outerHeight * minProgress;
        events.forEach(function (event) {
          var preview = event.querySelector(".events__item_preview");
          if (preview && !preview.classList.contains("isView")) {
            if (+event.getBoundingClientRect().top + preview.getBoundingClientRect().height / 2 <= scrollTarget) {
              preview.classList.add("isView");
            }
          }
        });
      }
    });
  })();
  var gNavItems = document.querySelectorAll(".global-menu__item");
  jquery_default()(document).on("click", ".head .btn_menu", function () {
    if (overlay.isAnimating || overlay.isThemeShapeAnimating) {
      return;
    }
    var gs = gsap/* default */.Ay.timeline();
    var header = jquery_default()(".head.fixed").hasClass("show") ? document.querySelector(".head.fixed") : document.querySelector("header");
    if (!jquery_default()(".mobile").hasClass("show")) {
      jquery_default()(".mobile").addClass("show");
      // scroll.stop();
      gs.to(".mobile", {
        opacity: 1,
        duration: 0
      }).to(".mobile", {
        translateY: 0,
        duration: 1.5,
        ease: "power2.out"
      }).to(header, {
        opacity: 0,
        visibility: "hidden",
        duration: 0
      }).to(".mobile__head", {
        opacity: 1,
        duration: 0
      }).then(function () {
        jquery_default()(".mobile").css({
          "overflow-y": "auto"
        });
        jquery_default()("body").addClass("hidden");
      });
      jquery_default()(".mobile .animate").each(function (_, item) {
        jquery_default()(item).css({
          opacity: 0
        });
      });
      jquery_default()(".mobile__contacts").css({
        opacity: 0
      });
      setTimeout(function () {
        jquery_default()(".mobile__contacts").addClass("animate__animated animate__fadeInUpSm");
        jquery_default()(".mobile .animate").each(function (_, item) {
          jquery_default()(item).addClass("animate__animated animate__fadeInUp");
        });
      }, 900);
    } else {
      overlay.toggle();
      for (var i = 0; i < gNavItems.length; i++) {
        gNavItems[i].classList.remove("is-opened");
      }
      gs.to(".mobile", {
        opacity: 0,
        duration: 0.4
      }).to(".mobile", {
        translateY: "100%",
        duration: 0.2
      }).to(header, {
        opacity: 1,
        visibility: "visible",
        duration: 0.2
      }).to(".mobile__head", {
        opacity: 0,
        duration: 0.2
      }).then(function () {
        jquery_default()(".mobile").css({
          "overflow-y": "hidden"
        });
        jquery_default()(".mobile").removeClass("show");
        jquery_default()("body").removeClass("hidden");
        jquery_default()(".mobile__nav_sublist").removeClass("active");
        jquery_default()(".mobile__contacts").removeClass("animate__animated animate__fadeInUpSm");
        jquery_default()(".mobile .animate").each(function (_, item) {
          jquery_default()(item).removeClass("animate__animated animate__fadeInUp");
        });
      });
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
  jquery_default()(document).on("click", ".specialButton", function () {
    if (overlay.isAnimating || overlay.isThemeShapeAnimating) {
      return;
    }
    var gs = gsap/* default */.Ay.timeline();
    var header = jquery_default()(".head.fixed").hasClass("show") ? document.querySelector(".head.fixed") : document.querySelector("header");
    if (!jquery_default()(".mobile").hasClass("show")) {} else {
      overlay.toggle();
      // scroll.update();
      // scroll.start();
      for (var i = 0; i < gNavItems.length; i++) {
        gNavItems[i].classList.remove("is-opened");
      }
      gs.to(".mobile", {
        opacity: 0,
        duration: 0.4,
        delay: 0.3
      }).to(".mobile", {
        translateY: "100%",
        duration: 0.2
      }).to(header, {
        opacity: 1,
        visibility: "visible",
        duration: 0.2
      }).to(".mobile__head", {
        opacity: 0,
        duration: 0.2
      }).then(function () {
        jquery_default()(".mobile").removeClass("show");
        jquery_default()("body").removeClass("hidden");
        jquery_default()(".mobile__nav_sublist").removeClass("active");
        jquery_default()(".mobile__contacts").removeClass("animate__animated animate__fadeInUpSm");
        jquery_default()(".mobile .animate").each(function (_, item) {
          jquery_default()(item).removeClass("animate__animated animate__fadeInUp");
        });
      });
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
  if (localStorage.getItem("startElem") && document.getElementById(localStorage.getItem("startElem"))) {
    target = document.getElementById(localStorage.getItem("startElem"));
    scroll.scrollTo(target);
  }
  var _OverlayScrollbarsGlo = OverlayScrollbarsGlobal,
    OverlayScrollbars = _OverlayScrollbarsGlo.OverlayScrollbars;
  Array.prototype.forEach.call(document.querySelectorAll(".location_page .location__slides_container.scroll-container"), function (el) {
    var osInstance = OverlayScrollbars(el, {});
  });
  var scrollableElement = document.querySelector(".location_page .location__slides_container");
  var scrollableSlideElement = document.querySelectorAll(".location_navigation_slider.panoram");
  // Функция, которая будет вызвана при прокрутке
  if (scrollableElement) {
    var onHorizontalScroll = function onHorizontalScroll() {
      // Получаем текущую горизонтальную позицию прокрутки

      var scrollLeft = scrollableElement.scrollLeft;
      if (scrollableElementScrollLeft != scrollLeft) {
        scrollableElementScrollLeft = scrollLeft;
        window.scroll.stop();
      }
    }; // Добавляем слушатель события на прокрутку
    var scrollableElementScrollLeft = scrollableElement.scrollLeft;
    var _scrollableElementScrollTop = scrollableElement.scrollTop;
    scrollableElement.addEventListener("scroll", onHorizontalScroll);
    scrollableElement.addEventListener("scrollend", function () {
      window.scroll.start();
    });
    scrollableElement.addEventListener("touchstart", function (e) {
      scrollableElementScrollLeft = e.touches[0].screenX;
      _scrollableElementScrollTop = e.touches[0].screenY;
    });
    scrollableElement.addEventListener("touchmove", function (e) {
      var scrollLeft = e.touches[0].screenX;
      var scrollTop = e.touches[0].screenY;
      var scrollTopDiff = Math.abs(scrollTop - _scrollableElementScrollTop);
      var scrollLeftDiff = Math.abs(scrollLeft - scrollableElementScrollLeft);
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
    var _iterator = js_createForOfIteratorHelper(scrollableSlideElement),
      _step;
    try {
      var _loop = function _loop() {
        var scrollableElement = _step.value;
        var scrollableElementScrollLeft = scrollableElement.scrollLeft;
        function onHorizontalScroll() {
          // Получаем текущую горизонтальную позицию прокрутки

          var scrollLeft = scrollableElement.scrollLeft;
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
          var scrollLeft = e.touches[0].screenX;
          var scrollTop = e.touches[0].screenY;
          var scrollTopDiff = Math.abs(scrollTop - scrollableElementScrollTop);
          var scrollLeftDiff = Math.abs(scrollLeft - scrollableElementScrollLeft);
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
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  var h1 = document.querySelectorAll(".h1");
  var h2 = document.querySelectorAll(".h2");
  var h3 = document.querySelectorAll(".h3");
  var _iterator2 = js_createForOfIteratorHelper(h1),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var h = _step2.value;
      var rows = h.innerHTML.trim().split("<br>");
      var text = h.textContent.trim().split(" ");
      h.textContent = "";
      for (var j = 0; j < rows.length; j++) {
        var _text = rows[j].split(" ");
        for (var _i = 0; _i < _text.length; _i++) {
          var container = jquery_default()('<span class="title-anim-container"></span>');
          var word = _i === _text.length - 1 ? jquery_default()('<span class="title-anim-content">' + _text[_i] + "</span>") : jquery_default()('<span class="title-anim-content">' + _text[_i] + "&nbsp;</span>");
          jquery_default()(word).appendTo(container);
          jquery_default()(container).appendTo(h);
        }
        jquery_default()("<br>").appendTo(h);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var _iterator3 = js_createForOfIteratorHelper(h2),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _h = _step3.value;
      var _rows = _h.innerHTML.trim().split("<br>");
      var _text2 = _h.textContent.trim().split(" ");
      _h.textContent = "";
      for (var _j = 0; _j < _rows.length; _j++) {
        var _text3 = _rows[_j].split(" ");
        for (var _i2 = 0; _i2 < _text3.length; _i2++) {
          var _container = jquery_default()('<span class="title-anim-container"></span>');
          var _word = jquery_default()('<span class="title-anim-content">' + _text3[_i2] + "&nbsp;</span>");
          jquery_default()(_word).appendTo(_container);
          jquery_default()(_container).appendTo(_h);
        }
        jquery_default()("<br>").appendTo(_h);
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  var _iterator4 = js_createForOfIteratorHelper(h3),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _h2 = _step4.value;
      var _rows2 = _h2.innerHTML.trim().split("<br>");
      var _text4 = _h2.textContent.trim().split(" ");
      _h2.textContent = "";
      for (var _j2 = 0; _j2 < _rows2.length; _j2++) {
        var _text5 = _rows2[_j2].split(" ");
        for (var _i3 = 0; _i3 < _text5.length; _i3++) {
          var _container2 = jquery_default()('<span class="title-anim-container"></span>');
          var _word2 = jquery_default()('<span class="title-anim-content">' + _text5[_i3] + "&nbsp;</span>");
          jquery_default()(_word2).appendTo(_container2);
          jquery_default()(_container2).appendTo(_h2);
        }
        jquery_default()("<br>").appendTo(_h2);
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
  document.querySelector(".mobile").style.height = window.innerHeight + "px";
  loadScript(window.location.protocol + "//api-maps.yandex.ru/2.1.79/?lang=ru_RU", setMap);
  var dropdownMultiple = document.querySelector(".filter__form_dropdown");
  if (dropdownMultiple) {
    var values = dropdownMultiple.querySelector(".dropdown__value .values"),
      valuesContainer = dropdownMultiple.querySelector(".multiple_values"),
      value = values.querySelectorAll(".value");
    if (values.getBoundingClientRect().width > valuesContainer.offsetWidth) {
      var totalCount = 0;
      var total = jquery_default()('<span class="value total" style="margin-left:auto"></span>');
      jquery_default()(values).append(total);
      for (var i = value.length - 1; i > 0; i--) {
        if (values.getBoundingClientRect().width > valuesContainer.offsetWidth || valuesContainer.offsetWidth > dropdownMultiple.getBoundingClientRect().width) {
          values.removeChild(value[i]);
          totalCount += 1;
        }
      }
      values.querySelector(".total").textContent = "+" + totalCount;
    }
  }
  if (document.querySelector(".location__ellipse")) {
    var ellipse = document.querySelector(".location__ellipse");
    var path = ellipse.getElementsByTagName("path");
    var length = path[0].getTotalLength();
    path[0].style.strokeDasharray = length;
    path[0].style.strokeDashoffset = length;
  }
  if (document.querySelector(".location__ellipse-sm")) {
    var _ellipse = document.querySelector(".location__ellipse-sm");
    var _path = _ellipse.getElementsByTagName("path");
    var _length = _path[0].getTotalLength();
    _path[0].style.strokeDasharray = _length;
    _path[0].style.strokeDashoffset = _length;
  }
  if (document.querySelector(".cafe__tabs")) {
    var pagin = jquery_default()(".cafe__tabs");
    var activeTab = jquery_default()(pagin).find(".active");
    jquery_default()(pagin).closest(".dropdown-slider").find(".dropdown-slider__value .value").text(jquery_default()(activeTab).text());
  }
  var intersectionCallback = function intersectionCallback(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-inview");
      }
    });
  };
  var intersectionOptions = {
    // root: по умолчанию window,
    // но можно задать любой элемент-контейнер
    rootMargin: "0px 0px 50px 0px",
    threshold: 0.1
  };
  var observer = new IntersectionObserver(intersectionCallback, intersectionOptions);
  if (document.querySelectorAll(".location__path").length) {
    var locationPaths = document.querySelectorAll(".location__path");
    locationPaths.forEach(function (path) {
      observer.observe(path);
    });
  }
  var scrolledElements = document.querySelectorAll("[data-scroll]");
  scrolledElements.forEach(function (elem) {
    return observer.observe(elem);
  });
  var ZhConcertBtn = function () {
    function loadStream() {
      if (jquery_default()("[data-concert]").attr("data-concert")) {
        if (jquery_default()(".zh-modal-iframe").html().trim() === "") jquery_default()(".zh-modal-iframe").html('<iframe src="' + jquery_default()("[data-concert]").attr("data-concert") + '" width="100%" height="100%" marginheight="0" frameborder="0" marginwidth="0" scrolling="no" allowfullscreen></iframe>');
      }
    }
    return {
      init: function init() {
        loadStream();
      }
    };
  }();
  ZhConcertBtn.init();
  if (jquery_default()(".head__theme input").prop("checked")) {
    if (overlay.isAnimating || overlay.isThemeShapeAnimating) return;
    jquery_default()("body").addClass("dark");
    localStorage.colorTheme = "dark";
    document.cookie = "BITRIX_SM_theme=dark";
  }
  jquery_default()(document).on("click", ".head__theme input", function (e) {
    if (overlay.isAnimating || overlay.isThemeShapeAnimating) {
      e.preventDefault();
      return;
    }
    if (jquery_default()(this).prop("checked")) {
      overlay.themeToggle();
      jquery_default()("body").addClass("dark");
      document.cookie = "BITRIX_SM_theme=dark";
      localStorage.colorTheme = "dark";
    } else {
      document.cookie = "BITRIX_SM_theme=light";
      localStorage.colorTheme = "light";
      overlay.themeToggle();
      jquery_default()("body").removeClass("dark");
    }
  });
  var mutationObserver = new MutationObserver(function (mutationRecords) {
    mutationRecords.forEach(function (record) {
      var scrolledElements = document.querySelectorAll("[data-scroll]");
      scrolledElements.forEach(function (elem) {
        return observer.observe(elem);
      });
    });
  });

  // наблюдать за всем, кроме атрибутов
  mutationObserver.observe(document.body, {
    childList: true,
    // наблюдать за непосредственными детьми
    subtree: true,
    // и более глубокими потомками
    characterDataOldValue: true // передавать старое значение в колбэк
  });
});
var formData = {};
formData.sectors = [];
jquery_default()(document).on("click", ".events__item a", function (e) {
  var target = e.target.closest(".events__item").dataset.scrollId;
  localStorage.setItem("scrollPosY", scrollPosition);
  localStorage.setItem("startElem", target.toString());
});
jquery_default()(document).on("click", ".cafe__tab", function () {
  var _this2 = this;
  if (jquery_default()(this).hasClass("active")) return;
  var pagin = jquery_default()(".cafe__tabs");
  var paginBg = jquery_default()(pagin).find(".before");
  var height = 0;
  jquery_default()(".cafe__tab").each(function (_, tab) {
    jquery_default()(tab).removeClass("active");
  });
  if (jquery_default()(this).attr("data-target") === "all") {
    jquery_default()(".cafe__sliders_tab").each(function (_, price) {
      jquery_default()(price).addClass("active");
      jquery_default()(_this2).addClass("active");
      height += jquery_default()(price).outerHeight(true) + parseFloat(jquery_default()(".cafe__sliders_tabs").css("gap")) * 2;
    });
    // scroll.update();
  } else {
    jquery_default()(".cafe__sliders_tab").each(function (_, price) {
      jquery_default()(price).removeClass("active");
      if (jquery_default()(price).attr("data-name") === jquery_default()(_this2).attr("data-target")) {
        jquery_default()(price).addClass("active");
        jquery_default()(_this2).addClass("active");
        jquery_default()(paginBg).show();
        height = jquery_default()(price).outerHeight(true);
      }
    });
    var activeTab = jquery_default()(pagin).find(".active");

    // $(paginBg).css({ width: $(activeTab).innerWidth(), left: $(activeTab).position().left + "px" });
    jquery_default()(pagin).closest(".dropdown-slider").find(".dropdown-slider__value .value").text(jquery_default()(activeTab).text());
  }
  jquery_default()(".cafe__sliders_tabs").css({
    "max-height": height + "px"
  });
});
jquery_default()(document).on("click", ".filter__form_dropdown .values .icon", function (e) {
  e.preventDefault();
  var dropdown = jquery_default()(this).closest(".dropdown");
  var dropdownList = jquery_default()(dropdown).find(".dropdown__list");
  jquery_default()(dropdown).removeClass("active");
  jquery_default()(dropdownList.find(".dropdown__label")).each(function (i, item) {
    if (jquery_default()(item).text().trim() === jquery_default()(e.target).closest(".value").text().trim()) {
      jquery_default()(item).find("input").click();
    }
  });
});
jquery_default()(document).on("submit", ".feedback__form", function (e) {
  e.preventDefault();
  var data = new FormData();
  var inputs = jquery_default()(this).find("input");
  jquery_default()(inputs).each(function (ind, input) {
    data.append(jquery_default()(input).attr("name"), jquery_default()(input).val());
  });
  if (jquery_default()(this).hasClass("ajax_form")) {
    var form = jquery_default()(this),
      action = jquery_default()(this).attr("action");
    form.find(":input[name]").not('[type="file"]').each(function () {
      var field = jquery_default()(this);
      data.append(field.attr("name"), field.val());
    });
    var filesField = form.find('input[type="file"]');
    var fileName = filesField.attr("name");
    var file = null;
    if (filesField.prop("files")) {
      file = filesField.prop("files")[0];
    }
    data.append(fileName, file);
    jquery_default().ajax({
      url: action,
      type: "POST",
      data: data,
      contentType: false,
      cache: false,
      processData: false,
      beforeSend: function beforeSend() {
        form[0].querySelectorAll("[type=submit]").forEach(function (s) {
          s.disabled = true;
        });
      },
      success: function success(data) {
        form.find("input").removeClass("error");
        try {
          data = JSON.parse(data);
          if (data["errors"]) {
            for (var i = 0; i < data["errors"].length; i++) {
              form.find('input[name="' + data["errors"][i] + '"]').addClass("error");
            }
          } else {
            jquery_default()(form).trigger("reset");
            setTimeout(function () {
              jquery_default()(form).addClass("success");
              setTimeout(function () {
                jquery_default()(form).removeClass("success");
              }, 2500);
            }, 100);
            // }
          }
        } catch (e) {} finally {
          form[0].querySelectorAll("[type=submit]").forEach(function (s) {
            s.disabled = false;
          });
        }
      }
    });
  }
});
jquery_default()(document).on("input keydown blur focusout", "input[type=tel]", function (e) {
  var label = this.closest("label");
  this.classList.remove("error");
  label.querySelector("span.error").classList.remove("show");
  var testReg = /^((8|\+7)[\- ])?(\(\d{3}\)[\- ])\d{3}[\- ]\d{2}[\- ]\d{2}$/;
  var valRegRu = /\D/gi;
  var str = formatValueInput(this, valRegRu);
  var formatStr = "";
  var rusTel = ["7", "8", "9"];
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
    jquery_default()(this).attr("data-reg", "true");
    if (this.value) {
      if (testReg.test(this.value)) {
        jquery_default()(this).attr("data-test", "true");
        formData.tel = str;
      } else {
        jquery_default()(this).attr("data-test", "false");
        this.classList.add("error");
        label.querySelector("span.error").classList.add("show");
        label.querySelector("span.error").textContent = "Введите валидный телефон";
      }
    } else {
      jquery_default()(this).attr("data-test", "false");
      this.classList.add("error");
      label.querySelector("span.error").classList.add("show");
      label.querySelector("span.error").textContent = "Поле обязательно к заполнению";
    }
  }
  if (e.type === "blur" || e.type === "focusout") {
    jquery_default()(this).attr("data-reg", "true");
    if (this.value) {
      if (testReg.test(this.value)) {
        jquery_default()(this).attr("data-test", "true");
        formData.tel = str;
      } else {
        jquery_default()(this).attr("data-test", "false");
        this.classList.add("error");
        label.querySelector("span.error").classList.add("show");
        label.querySelector("span.error").textContent = "Введите валидный телефон";
      }
    } else {
      jquery_default()(this).attr("data-test", "false");
      this.classList.add("error");
      label.querySelector("span.error").classList.add("show");
      label.querySelector("span.error").textContent = "Поле обязательно к заполнению";
    }
  }
  validationFormFields(jquery_default()(this).closest("form"));
});
jquery_default()(document).on("input keydown blur focusout", "input[type=email]", function (e) {
  var label = this.closest("label");
  this.classList.remove("error");
  label.querySelector("span.error").classList.remove("show");
  var valRegRu = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/gi;
  var str = maskedEmail(this);
  this.value = str;
  if (e.type === "keydown" && e.key === "Enter") {
    e.preventDefault();
    jquery_default()(this).attr("data-reg", "true");
    if (this.value) {
      if (valRegRu.test(this.value)) {
        formData.email = this.value;
        jquery_default()(this).attr("data-test", "true");
      } else {
        jquery_default()(this).attr("data-test", "false");
        this.classList.add("error");
        label.querySelector("span.error").classList.add("show");
        label.querySelector("span.error").textContent = "Введите валидный email";
      }
    } else {
      jquery_default()(this).attr("data-test", "false");
      this.classList.add("error");
      label.querySelector("span.error").classList.add("show");
      label.querySelector("span.error").textContent = "Поле обязательно к заполнению";
    }
  }
  if (e.type === "blur" || e.type === "focusout") {
    jquery_default()(this).attr("data-reg", "true");
    if (this.value) {
      if (valRegRu.test(this.value)) {
        jquery_default()(this).attr("data-test", "true");
        formData.email = this.value;
      } else {
        jquery_default()(this).attr("data-test", "false");
        this.classList.add("error");
        label.querySelector("span.error").classList.add("show");
        label.querySelector("span.error").textContent = "Введите валидный email";
      }
    } else {
      jquery_default()(this).attr("data-test", "false");
      this.classList.add("error");
      label.querySelector("span.error").classList.add("show");
      label.querySelector("span.error").textContent = "Поле обязательно к заполнению";
    }
  }
  validationFormFields(jquery_default()(this).closest("form"));
});
jquery_default()(document).on("input keydown focusout blur", "input[name=fio]", function (e) {
  var label = this.closest("label");
  label.querySelector("span.error").classList.remove("show");
  if (e.type === "blur" || e.type === "focusout") {
    jquery_default()(this).attr("data-reg", "true");
    if (this.value) {
      formData.fio = this.value;
      jquery_default()(this).attr("data-test", "true");
    } else {
      this.classList.add("error");
      label.querySelector("span.error").textContent = "Поле обязательно к заполнению";
      label.querySelector("span.error").classList.add("show");
      jquery_default()(this).attr("data-test", "false");
    }
  }
  validationFormFields(jquery_default()(this).closest("form"));
});
jquery_default()(document).on("input keydown focusout blur", "input[name=name]", function (e) {
  var label = this.closest("label");
  label.querySelector("span.error").classList.remove("show");
  if (e.type === "blur" || e.type === "focusout") {
    jquery_default()(this).attr("data-reg", "true");
    if (this.value) {
      formData.fio = this.value;
      jquery_default()(this).attr("data-test", "true");
    } else {
      this.classList.add("error");
      label.querySelector("span.error").textContent = "Поле обязательно к заполнению";
      label.querySelector("span.error").classList.add("show");
      jquery_default()(this).attr("data-test", "false");
    }
  }
  validationFormFields(jquery_default()(this).closest("form"));
});
window.addEventListener("resize", function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
  document.querySelector(".mobile").style.height = window.innerHeight + "px";
  var width = window.innerWidth;
  resizeScrollPath(width);
  var eventsFilter = document.querySelectorAll(".events__filter");
  if (eventsFilter.length) {
    var _iterator5 = js_createForOfIteratorHelper(eventsFilter),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var filter = _step5.value;
        if (filter.classList.contains("open")) {
          jquery_default()(filter).css({
            "max-height": jquery_default()(filter).find(".form").innerHeight() + "px"
          });
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }
  if (document.querySelector(".fs_index") && window.innerWidth < 992) {
    var slidesContainers = document.querySelectorAll(".fs__slide_content");
    var isHiddenSlides = [];
    var slidesHeights = [];
    slidesContainers.forEach(function (cont) {
      var _$$find;
      var isHiddenSlide = cont.scrollWidth > cont.offsetWidth || cont.scrollHeight > cont.offsetHeight;
      slidesHeights.push(cont.scrollHeight - cont.offsetHeight);
      var isHideTags = jquery_default()(cont).find(".fs__slide_left .tags") && jquery_default()(cont).find(".fs__slide_left .tags").css("display") == "none";
      var isHideText = jquery_default()(cont).find(".fs__slide_text p") && ((_$$find = jquery_default()(cont).find(".fs__slide_text p")) === null || _$$find === void 0 ? void 0 : _$$find.css("display")) == "none";
      if (isHiddenSlide) {
        var _$$find3;
        if (!isHideTags && isHideText) {
          var _$$find2;
          (_$$find2 = jquery_default()(cont).find(".fs__slide_left .tags")) === null || _$$find2 === void 0 || _$$find2.hide();
        }
        if (jquery_default()(cont).find(".fs__slide_text p").length && ((_$$find3 = jquery_default()(cont).find(".fs__slide_text p")) === null || _$$find3 === void 0 ? void 0 : _$$find3.css("display")) != "none" && isHideTags) {
          jquery_default()(cont).find(".fs__slide_text p").hide();
          jquery_default()(cont).find(".fs__slide_text").addClass("mt-0");
        }
        if (!jquery_default()(cont).find(".fs__slide_text p").length) {
          jquery_default()(cont).find(".fs__slide_text").addClass("mt-0");
        }
        if (isHideText && isHideTags) {
          isHiddenSlides.push(true);
        }
        //console.log($(cont).find(".fs__slide_left .tags").css("display"), $(cont).find(".fs__slide_text p"));
      } else {
        var _$$find4;
        if (!isHideTags && isHideText) {
          jquery_default()(cont).find(".fs__slide_left .tags").show();
        }
        if (jquery_default()(cont).find(".fs__slide_text p").length && ((_$$find4 = jquery_default()(cont).find(".fs__slide_text p")) === null || _$$find4 === void 0 ? void 0 : _$$find4.css("display")) != "none" && isHideTags) {
          jquery_default()(cont).find(".fs__slide_text p").show();
          jquery_default()(cont).find(".fs__slide_text").removeClass("mt-0");
        }
        if (!isHideText && !isHideTags) {
          isHiddenSlides.push(false);
        }
      }
    });
    if (isHiddenSlides.some(function (el) {
      return !!el;
    })) {
      jquery_default()(".fs_index").css({
        "min-height": window.innerHeight + Math.max.apply(Math, slidesHeights) + "px"
      });
    }
  }
});
function resizeScrollPath(width) {
  var scrollPath = document.querySelector("#scroll_lg path");
  var icon = jquery_default()(scrollPath).closest(".icon");
  if (width > 768) {
    jquery_default()(scrollPath).attr("d", "M0 ".concat(jquery_default()(icon).height() / 1.3, "C").concat(width / 2 / 1.25, " ").concat(jquery_default()(icon).height() / 1.3, " ").concat(width / 2 / 1.25, " 0 ").concat(width / 2, " 0C").concat(width / 1.7, " 0 ").concat(width / 1.7, " ").concat(jquery_default()(icon).height() / 1.33, " ").concat(width, " ").concat(jquery_default()(icon).height() / 1.33, "L").concat(width, " ").concat(jquery_default()(icon).height(), "L0 ").concat(jquery_default()(icon).height(), "L0 ").concat(jquery_default()(icon).height() / 1.3, "Z"));
  } else {
    jquery_default()(scrollPath).attr("d", "M0 ".concat(jquery_default()(icon).height() / 1.21, "C").concat(width / 2 / 1.82, " ").concat(jquery_default()(icon).height() / 1.21, " ").concat(width / 2 / 1.44, " 0 ").concat(width / 2, " 0C").concat(width / 1.53, " 0 ").concat(width / 1.38, " ").concat(jquery_default()(icon).height() / 1.25, " ").concat(width, " ").concat(jquery_default()(icon).height() / 1.25, "L").concat(width, " ").concat(jquery_default()(icon).height(), "L0 ").concat(jquery_default()(icon).height(), "L0 ").concat(jquery_default()(icon).height() / 1.21, "Z"));
  }
}
jquery_default()(document).on("click", ".search_link", function (e) {
  e.preventDefault();
  var container = jquery_default()(this).closest(".head__left_controls");
  var headTop = jquery_default()(this).closest(".head__top");
  var leftContent = jquery_default()(this).closest(".head__left_content");
  var gs = gsap/* default */.Ay.timeline();
  if (container.length) {
    // $(container).find(".search-form").addClass("show");
    // $(container).find(".links").css({ opacity: 0, visibility: "hidden", "transition-duration": "0.2s" });
    // $(container).find(".btn_menu").css({ opacity: 0, visibility: "hidden", transition: "all 0s" });
    gs.to(jquery_default()(container).find(".links"), {
      opacity: 0,
      visibility: "hidden",
      duration: 0
    });
    gs.to(jquery_default()(container).find(".btn_menu"), {
      opacity: 0,
      visibility: "hidden",
      duration: 0
    });
    if (window.innerWidth > 991) {
      gs.to(".head__center", {
        opacity: 0,
        visibility: "hidden",
        duration: 0
      });
      gs.to(".head__center .logo", {
        pointerEvents: "none",
        duration: 0
      });
      gs.to(leftContent, {
        width: "130%",
        duration: 0.2
      });
    }
    gs.to(jquery_default()(container).find(".search-form"), {
      opacity: 1,
      visibility: "visible",
      zIndex: 1,
      duration: 0.2,
      delay: 0.2
    });
  }
  if (headTop.length) {
    gs.to(jquery_default()(headTop).find(".depkult-logo"), {
      opacity: 0,
      visibility: "hidden",
      duration: 0
    });
    gs.to(jquery_default()(headTop).find(".search_link"), {
      opacity: 0,
      visibility: "hidden",
      duration: 0
    });
    gs.to(jquery_default()(headTop).find(".zh-header__center"), {
      opacity: 0,
      visibility: "hidden",
      duration: 0
    });
    gs.to(jquery_default()(headTop).find(".search-form"), {
      opacity: 1,
      visibility: "visible",
      zIndex: 1,
      duration: 0.1
    });

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
jquery_default()(document).on("click", ".head__left .close_form", function (e) {
  e.preventDefault();
  var container = jquery_default()(this).closest(".head__left_controls");
  var headTop = jquery_default()(this).closest(".head__top");
  var leftContent = jquery_default()(this).closest(".head__left_content");
  var gs = gsap/* default */.Ay.timeline();
  if (container.length) {
    // $(container).find(".search-form").removeClass("show");
    // $(container).find(".links").css({ opacity: 1, visibility: "visible", "transition-duration": "0.2s" });
    // $(container).find(".btn_menu").css({ opacity: 1, visibility: "visible", "transition-duration": "0s" });
    gs.to(jquery_default()(container).find(".search-form"), {
      opacity: 0,
      visibility: "hidden",
      zIndex: -1,
      duration: 0
    }).to(leftContent, {
      width: "100%",
      duration: 0.2
    }).to(".head__center", {
      opacity: 1,
      visibility: "visible",
      duration: 0.1
    }).to(".head__center .logo", {
      pointerEvents: "all",
      duration: 0
    }).to(jquery_default()(container).find(".links"), {
      opacity: 1,
      visibility: "visible",
      duration: 0.1
    }).to(jquery_default()(container).find(".btn_menu"), {
      opacity: 1,
      visibility: "visible",
      duration: 0.1
    });
  }
  if (headTop.length) {
    // $(headTop).find(".search-form").removeClass("show");
    // $(headTop).find(".depkult-logo").css({ opacity: 1, visibility: "visible", "transition-duration": "0.2s" });
    // $(headTop).find(".search_link").css({ opacity: 1, visibility: "visible", "transition-duration": "0.2s" });
    // $(headTop).find(".zh-header__center").css({ opacity: 0, visibility: "visible", "transition-duration": "0.2s" });
    gs.to(jquery_default()(headTop).find(".search-form"), {
      opacity: 0,
      visibility: "hidden",
      zIndex: -1,
      duration: 0.1
    });
    gs.to(jquery_default()(headTop).find(".depkult-logo"), {
      opacity: 1,
      visibility: "visible",
      duration: 0.1
    });
    gs.to(jquery_default()(headTop).find(".search_link"), {
      opacity: 1,
      visibility: "visible",
      duration: 0.1
    });
    gs.to(jquery_default()(headTop).find(".zh-header__center"), {
      opacity: 1,
      visibility: "visible",
      duration: 0.1
    });
  }
  if (window.innerWidth > 991) {
    // $(".head__center").css({ opacity: 1, visibility: "visible", "transition-duration": "0.2s" });
    // $(leftContent).css({ width: "100%" });
  }
});
jquery_default()(document).on("click", ".head__top .close_form", function (e) {
  e.preventDefault();
  var container = jquery_default()(this).closest(".head__left_controls");
  var headTop = jquery_default()(this).closest(".head__top");
  var gs = gsap/* default */.Ay.timeline();
  if (container.length) {
    // $(container).find(".search-form").removeClass("show");
    // $(container).find(".links").css({ opacity: 1, visibility: "visible", "transition-duration": "0.2s" });
    // $(container).find(".btn_menu").css({ opacity: 1, visibility: "visible", "transition-duration": "0.2s" });
    gs.to(jquery_default()(container).find(".search-form"), {
      opacity: 0,
      visibility: "hidden",
      zIndex: -1,
      duration: 0
    }).to(leftContent, {
      width: "100%",
      duration: 0.1
    }).to(".head__center", {
      opacity: 1,
      visibility: "visible",
      duration: 0.1,
      delay: 0.1
    }).to(".head__center .logo", {
      pointerEvents: "all",
      duration: 0
    }).to(jquery_default()(container).find(".links"), {
      opacity: 1,
      visibility: "visible",
      duration: 0.1,
      delay: 0.1
    }).to(jquery_default()(container).find(".btn_menu"), {
      opacity: 1,
      visibility: "visible",
      duration: 0.1,
      animationDuration: "1s",
      delay: 0.1
    });
  }
  if (headTop.length) {
    // $(headTop).find(".search-form").removeClass("show");
    // $(headTop).find(".search_link").css({ opacity: 1, visibility: "visible" });
    // $(headTop).find(".zh-header__center").css({ opacity: 1, visibility: "visible", "transition-duration": "0.2s" });
    gs.to(jquery_default()(headTop).find(".search-form"), {
      opacity: 0,
      visibility: "hidden",
      zIndex: -1,
      duration: 0.1
    });
    gs.to(jquery_default()(headTop).find(".depkult-logo"), {
      opacity: 1,
      visibility: "visible",
      duration: 0.1
    });
    gs.to(jquery_default()(headTop).find(".search_link"), {
      opacity: 1,
      visibility: "visible",
      duration: 0.1
    });
    gs.to(jquery_default()(headTop).find(".zh-header__center"), {
      opacity: 1,
      visibility: "visible",
      duration: 0.1
    });
  }
});
jquery_default()(window).on("load", function () {
  if (document.querySelector(".fs_index") && window.innerWidth < 992) {
    var slidesContainers = document.querySelectorAll(".fs__slide_content");
    var isHiddenSlides = [];
    var slidesHeights = [];
    slidesContainers.forEach(function (cont) {
      var _$$find5;
      var isHiddenSlide = cont.scrollWidth > cont.offsetWidth || cont.scrollHeight > cont.offsetHeight;
      slidesHeights.push(cont.scrollHeight - cont.offsetHeight);
      var isHideTags = jquery_default()(cont).find(".fs__slide_left .tags") && jquery_default()(cont).find(".fs__slide_left .tags").css("display") == "none";
      var isHideText = jquery_default()(cont).find(".fs__slide_text p") && ((_$$find5 = jquery_default()(cont).find(".fs__slide_text p")) === null || _$$find5 === void 0 ? void 0 : _$$find5.css("display")) == "none";
      if (isHiddenSlide) {
        var _$$find7;
        if (!isHideTags && isHideText) {
          var _$$find6;
          (_$$find6 = jquery_default()(cont).find(".fs__slide_left .tags")) === null || _$$find6 === void 0 || _$$find6.hide();
        }
        if (jquery_default()(cont).find(".fs__slide_text p").length && ((_$$find7 = jquery_default()(cont).find(".fs__slide_text p")) === null || _$$find7 === void 0 ? void 0 : _$$find7.css("display")) != "none" && isHideTags) {
          jquery_default()(cont).find(".fs__slide_text p").hide();
          jquery_default()(cont).find(".fs__slide_text").addClass("mt-0");
        }
        if (!jquery_default()(cont).find(".fs__slide_text p").length) {
          jquery_default()(cont).find(".fs__slide_text").addClass("mt-0");
        }
        if (isHideText && isHideTags) {
          isHiddenSlides.push(true);
        }
        //console.log($(cont).find(".fs__slide_left .tags").css("display"), $(cont).find(".fs__slide_text p"));
      } else {
        var _$$find8;
        if (!isHideTags && isHideText) {
          jquery_default()(cont).find(".fs__slide_left .tags").show();
        }
        if (jquery_default()(cont).find(".fs__slide_text p").length && ((_$$find8 = jquery_default()(cont).find(".fs__slide_text p")) === null || _$$find8 === void 0 ? void 0 : _$$find8.css("display")) != "none" && isHideTags) {
          jquery_default()(cont).find(".fs__slide_text p").show();
          jquery_default()(cont).find(".fs__slide_text").removeClass("mt-0");
        }
        if (!isHideText && !isHideTags) {
          isHiddenSlides.push(false);
        }
      }
    });
    if (isHiddenSlides.some(function (el) {
      return !!el;
    })) {
      jquery_default()(".fs_index").css({
        "min-height": window.innerHeight + Math.max.apply(Math, slidesHeights) + "px"
      });
    }
  }
  var scrollPath = document.querySelector("#scroll_lg path");
  var icon = jquery_default()(scrollPath).closest(".icon");
  var width = window.innerWidth;
  if (width > 768) {
    jquery_default()(scrollPath).attr("d", "M0 ".concat(jquery_default()(icon).height() / 1.3, "C").concat(width / 2 / 1.25, " ").concat(jquery_default()(icon).height() / 1.3, " ").concat(width / 2 / 1.25, " 0 ").concat(width / 2, " 0C").concat(width / 1.7, " 0 ").concat(width / 1.7, " ").concat(jquery_default()(icon).height() / 1.33, " ").concat(width, " ").concat(jquery_default()(icon).height() / 1.33, "L").concat(width, " ").concat(jquery_default()(icon).height(), "L0 ").concat(jquery_default()(icon).height(), "L0 ").concat(jquery_default()(icon).height() / 1.3, "Z"));
  } else {
    jquery_default()(scrollPath).attr("d", "M0 ".concat(jquery_default()(icon).height() / 1.21, "C").concat(width / 2 / 1.82, " ").concat(jquery_default()(icon).height() / 1.21, " ").concat(width / 2 / 1.44, " 0 ").concat(width / 2, " 0C").concat(width / 1.53, " 0 ").concat(width / 1.38, " ").concat(jquery_default()(icon).height() / 1.25, " ").concat(width, " ").concat(jquery_default()(icon).height() / 1.25, "L").concat(width, " ").concat(jquery_default()(icon).height(), "L0 ").concat(jquery_default()(icon).height(), "L0 ").concat(jquery_default()(icon).height() / 1.21, "Z"));
  }
});
jquery_default()(document).on("click", ".scroll_top_btn", function () {
  scroll.scrollTo("top");
});
jquery_default()(document).on("click", ".btn_scroll", function () {
  scroll.scrollTo(jquery_default()(this).data("target"));
});
jquery_default()(document).on("click", ".scroll_btn", function (e) {
  e.preventDefault();
  scroll.scrollTo(jquery_default()(this).attr("href"));
});
jquery_default()(document).on("click", ".btn_scaler", function () {
  var container = jquery_default()(this).closest(".sheme__sliders_tab");
  var draggable = jquery_default()(container).find(".drag");
  var scale = jquery_default()(draggable).css("scale") !== "none" ? jquery_default()(draggable).css("scale") : 1;
  var dragHeight = jquery_default()(draggable).height();
  var dragWidth = jquery_default()(draggable).width();
  if (jquery_default()(this).hasClass("inc")) {
    dragHeight += dragHeight * 0.2 - 8;
    dragWidth = dragHeight * 1.8;
    scale = +scale + 0.2;
    jquery_default()(draggable).css({
      scale: "".concat(scale)
    });
  } else if (jquery_default()(this).hasClass("dec")) {
    dragHeight -= dragHeight * 0.2 - 8;
    dragWidth = dragHeight * 1.8;
    scale = scale > 1 ? scale - 0.2 : 1;
    jquery_default()(draggable).css({
      scale: "".concat(scale)
    });
  }
});
jquery_default()(document).on("click", ".load_more", function () {
  var targetContainer = jquery_default()(".events__content").not(".cancel_content"),
    //  Контейнер, в котором хранятся элементы
    url = jquery_default()(".load_more").attr("data-url"); //  URL, из которого будем брать элементы
  if (url !== undefined) {
    jquery_default().ajax({
      type: "GET",
      url: url,
      dataType: "html",
      success: function success(data) {
        //  Удаляем старую навигацию
        jquery_default()(".events__more").remove();
        var elements = jquery_default()(data).find(".events__content").not(".cancel_content").find(".events__content_row"),
          //  Ищем элементы
          pagination = jquery_default()(data).find(".events__more.pagination"); //  Ищем навигацию
        targetContainer.append(elements); //  Добавляем посты в конец контейнера
        jquery_default()(targetContainer).find(".events__content_row").each(function (i, item) {
          jquery_default()(item).attr("id", "events_row_".concat(i));
          jquery_default()(item).find(".events__date").attr("data-scroll-target", "#events_row_".concat(i));
        });
        history.pushState({
          lastUrl: location.href
        }, null, url);
        targetContainer.append(pagination); //  добавляем навигацию следом
        // window.scroll.update();
      }
    });
  }
});
jquery_default()(document).on("click", ".load_more_news", function () {
  var targetContainer = jquery_default()("#events__content").not(".cancel_content"),
    //  Контейнер, в котором хранятся элементы
    url = jquery_default()(".load_more_news").attr("data-url"); //  URL, из которого будем брать элементы
  if (url !== undefined) {
    jquery_default().ajax({
      type: "GET",
      url: url,
      dataType: "html",
      success: function success(data) {
        //  Удаляем старую навигацию
        jquery_default()(".events__more").remove();
        var elements = jquery_default()(data).find(".news__slide"),
          //  Ищем элементы
          pagination = jquery_default()(data).find(".events__more"); //  Ищем навигацию
        targetContainer.find(".news__list").append(elements); //  Добавляем посты в конец контейнера
        targetContainer.append(pagination); //  добавляем навигацию следом
        // window.scroll.update();
      }
    });
  }
});
jquery_default()(document).on("click", ".load_more_search", function () {
  var targetContainer = jquery_default()("#events__content"); //  Контейнер, в котором хранятся элементы
  var searchForm = jquery_default()(".search__form_content");
  var url = location.origin + jquery_default()(".load_more_search").attr("data-url"); //  URL, из которого будем брать элементы
  var searchUrl = new URL(url);
  if (!searchUrl.searchParams.get("where")) {
    var where = jquery_default()(searchForm).find("input[name=where]:checked").val();
    searchUrl.searchParams.set("where", where);
  }
  if (url !== undefined) {
    jquery_default().ajax({
      type: "GET",
      url: searchUrl,
      dataType: "html",
      success: function success(data) {
        targetContainer.find(".events__more").remove();
        var elements = jquery_default()(data).find(".search_item"),
          //  Ищем элементы
          pagination = jquery_default()(data).find(".events__more"); //  Ищем навигацию
        targetContainer.find(".search__result").append(elements); //  Добавляем посты в конец контейнера
        targetContainer.append(pagination); //  добавляем навигацию следом
        if (jquery_default()(targetContainer).find(".events__content_row").length) {
          jquery_default()(targetContainer).find(".events__content_row").each(function (i, item) {
            jquery_default()(item).attr("id", "events_row_".concat(i));
            jquery_default()(item).find(".events__date").attr("data-scroll-target", "#events_row_".concat(i));
          });
        }
      }
    });
  }
});
jquery_default()(document).on("click", ".load_more_docks", function () {
  var targetContainer = jquery_default()("#events__content").not(".cancel_content"),
    //  Контейнер, в котором хранятся элементы
    url = jquery_default()(".load_more_docks").attr("data-url"); //  URL, из которого будем брать элементы
  if (url !== undefined) {
    jquery_default().ajax({
      type: "GET",
      url: url,
      dataType: "html",
      success: function success(data) {
        jquery_default()(".events__more").remove();
        var elements = jquery_default()(data).find(".docs__item"); //  Ищем элементы

        pagination = jquery_default()(data).find(".events__more"); //  Ищем навигацию
        targetContainer.find(".docs__list").append(elements); //  Добавляем посты в конец контейнера
        targetContainer.append(pagination); //  добавляем навигацию следом
      }
    });
  }
});
jquery_default()(document).on("click", ".btn_popup_show", function () {
  var target = jquery_default()(this).data("target");
  jquery_default()(target).addClass("show");
});
jquery_default()(document).on("click", ".btn_popup_close", function () {
  jquery_default()(this).closest(".location__popup").removeClass("show");
});
jquery_default()(document).on("click", ".search-popup-el-name", function () {
  jquery_default()(".search__form_content").find("input.search-suggest").val(jquery_default()(this).text());
  jquery_default()(".search__form_content").find(".submit_btn").click();
});
var js_ease = {
  exponentialIn: function exponentialIn(t) {
    return t == 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
  },
  exponentialOut: function exponentialOut(t) {
    return t == 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
  },
  exponentialInOut: function exponentialInOut(t) {
    return t == 0.0 || t == 1.0 ? t : t < 0.5 ? +0.5 * Math.pow(2.0, 20.0 * t - 10.0) : -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0;
  },
  sineOut: function sineOut(t) {
    var HALF_PI = 1.5707963267948966;
    return Math.sin(t * HALF_PI);
  },
  circularInOut: function circularInOut(t) {
    return t < 0.5 ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t)) : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
  },
  cubicIn: function cubicIn(t) {
    return t * t * t;
  },
  cubicOut: function cubicOut(t) {
    var f = t - 1.0;
    return f * f * f + 1.0;
  },
  cubicInOut: function cubicInOut(t) {
    return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
  },
  quadraticOut: function quadraticOut(t) {
    return -t * (t - 2.0);
  },
  quarticOut: function quarticOut(t) {
    return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
  }
};
jquery_default()(document).on("click", ".dropdown__value", function (e) {
  var dropdown = this.closest(".dropdown");
  jquery_default()(".dropdown").each(function (ind, drop) {
    if (drop != dropdown) {
      jquery_default()(drop).removeClass("active");
    }
  });
  if (jquery_default()(dropdown).hasClass("active")) {
    jquery_default()(dropdown).removeClass("active");
  } else {
    dropdown.classList.add("active");
  }
});
jquery_default()(document).on("change input", ".search-suggest", function () {
  if (jquery_default()(this).val()) {
    jquery_default()(this).closest("form").find("button[type=reset]").show();
  } else {
    jquery_default()(this).closest("form").find("button[type=reset]").hide();
  }
});
jquery_default()(document).on("click", ".dropdown-slider__value", function () {
  var _this3 = this;
  var dropdown = jquery_default()(this).closest(".dropdown-slider");
  jquery_default()(".dropdown-slider").each(function (ind, drop) {
    if (!jquery_default()(_this3).closest(jquery_default()(drop)).length) {
      jquery_default()(drop).removeClass("active");
    }
  });
  jquery_default()(dropdown).toggleClass("active");
});

// // Скролл вверх страницы по клику кнопки в футере

jquery_default()(document).on("click", ".scroll_top_btn", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// // Dropdown

jquery_default()(document).on("click", ".dropdown__item", function (e) {
  var dropdown = jquery_default()(this).closest(".dropdown");
  var value = jquery_default()(this).find(".value").text();
  var inputVal = jquery_default()(this).find("input").val();
  var form = jquery_default()(".aparts__filter_form");
  var formContainer = jquery_default()(form).closest(".aparts__filter");
  if (jquery_default()(dropdown).closest(".aparts__filter_control").length) {
    jquery_default()(form).find("input[name=sortby]").val(inputVal);
    jquery_default()(form).trigger("submit");
  }
  jquery_default()(dropdown).find(".dropdown__value>.value").text(value);
  jquery_default()(dropdown).removeClass("active");
});
jquery_default()(document).on("click", ".dropdown-slider__item", function () {
  var dropdown = jquery_default()(this).closest(".dropdown-slider");
  var value = jquery_default()(this).find(".value").text();
  jquery_default()(dropdown).find(".dropdown-slider__value>.value").text(value);
  jquery_default()(dropdown).removeClass("active");
});
jquery_default()(document).on("click", ".events__nav_tool", function (e) {
  var _this4 = this;
  gsap/* default */.Ay.defaults({
    ease: "none"
  });
  jquery_default()(".events__nav_tool").prop("disabled", true);
  var timeline = gsap/* default */.Ay.timeline();
  jquery_default()(".btn_filter").removeClass("active");
  jquery_default()(".events__filter").each(function (i, item) {
    if (jquery_default()(item).attr("id") != jquery_default()(_this4).data("target").replace("#", "")) {
      jquery_default()(item).removeClass("open");
      // window.scroll.update();
      window.scroll.start();
    } else {
      var targetEl = jquery_default()(_this4).data("target");
      jquery_default()(e.currentTarget).addClass("active");
      timeline.to(".events__filter", {
        overflow: "hidden",
        ease: "none",
        duration: 0
      }).to(".events__filter", {
        maxHeight: 0,
        ease: "none",
        duration: 0.2
      }).then(function () {
        // window.scroll.update();
        window.scroll.start();
        jquery_default()(".events__nav_tool").prop("disabled", false);
      });
      if (!jquery_default()(targetEl).hasClass("open")) {
        jquery_default()(targetEl).addClass("open");
        // window.scroll.update();
        window.scroll.start();
        timeline.to(targetEl, {
          maxHeight: jquery_default()(targetEl).find(".form").innerHeight(),
          ease: "none",
          duration: 0.2
        }).to(targetEl, {
          overflow: "visible",
          ease: "none",
          duration: 0,
          delay: 0.5
        }).then(function () {
          // window.scroll.update();
          window.scroll.start();
          jquery_default()(".events__nav_tool").prop("disabled", false);
        });
      } else {
        jquery_default()(e.currentTarget).removeClass("active");
        jquery_default()(targetEl).removeClass("open");
        // window.scroll.update();
        window.scroll.start();
        timeline.to(targetEl, {
          overflow: "hidden",
          ease: "none",
          duration: 0
        }).to(targetEl, {
          maxHeight: 0,
          ease: "none",
          duration: 0.2
        }).then(function () {
          // window.scroll.update();
          window.scroll.start();
          jquery_default()(".events__nav_tool").prop("disabled", false);
        });
      }
    }
  });
});
jquery_default()(document).on("click", function (e) {
  if (!e.target.closest(".dropdown")) {
    jquery_default()(".dropdown").removeClass("active");
  }
});

// // Мобильное меню

// темная тема

var date = new Date();
var time = date.getHours();
if (!localStorage.hasOwnProperty("colorTheme")) {
  // //console.log(time);
  if (!jquery_default()("body").hasClass("dark")) {
    if (time >= 19) {
      jquery_default()("body").addClass("dark");
    } else if (time > 7) {
      jquery_default()("body").removeClass("dark");
    }
  }
} else if (localStorage.colorTheme === "light") {
  jquery_default()("body").removeClass("dark");
  document.cookie = "BITRIX_SM_theme=light";
  jquery_default()(".head__theme input").prop("checked", false);
} else if (localStorage.colorTheme === "dark") {
  jquery_default()("body").addClass("dark");
  document.cookie = "BITRIX_SM_theme=dark";
  jquery_default()(".head__theme input").prop("checked", true);
}

// // For jQuery
jquery_default()(document).on("click", ".copy_buffer", function () {
  var _this5 = this;
  navigator.clipboard.writeText(this.dataset.url);
  jquery_default()(this).find(".hint").addClass("show");
  setTimeout(function () {
    jquery_default()(_this5).find(".hint").removeClass("show");
  }, 1500);
});
jquery_default()(document).on("click", ".btn_play", function () {
  var cont = this.closest(".video_container");
  var video = cont.querySelector("video");
  video.play();
  jquery_default()(this).hide();
});
jquery_default()(document).on("click", ".mobile__nav_btn", function () {
  var navEl = jquery_default()(this).closest(".mobile__nav");
  var subList = jquery_default()(navEl).find(".mobile__nav_sublist");
  jquery_default()(subList).addClass("active");
});
jquery_default()(document).on("click", ".mobile__nav_sublist .mobile__nav_title", function () {
  var navEl = jquery_default()(this).closest(".mobile__nav_sublist");
  jquery_default()(navEl).removeClass("active");
});

// // accordion

jquery_default()(document).on("click", ".accordion__title", function () {
  var accItem = this.closest(".accordion__item");
  if (!jquery_default()(accItem).hasClass("active")) {
    jquery_default()(accItem).addClass("active");
    jquery_default()(this).addClass("active");
    jquery_default()(accItem).find(".accordion__content").css({
      "max-height": jquery_default()(accItem).find(".accordion__content_desc").innerHeight() + "px"
    });
  } else {
    jquery_default()(accItem).removeClass("active");
    jquery_default()(this).removeClass("active");
    jquery_default()(accItem).find(".accordion__content").css({
      "max-height": "0px"
    });
  }
});
jquery_default()(document).on("click", ".contacts__col .accordion_btn", function () {
  var accItem = jquery_default()(this).closest(".contacts__col");
  if (!jquery_default()(accItem).hasClass("active")) {
    jquery_default()(accItem).addClass("active");
    jquery_default()(accItem).find(".contacts__col_bottom").css({
      "max-height": jquery_default()(accItem).find(".contacts__col_list").innerHeight() + "px"
    });
  } else {
    jquery_default()(accItem).removeClass("active");
    jquery_default()(accItem).find(".contacts__col_bottom").css({
      "max-height": "0px"
    });
  }
});
jquery_default()(document).on("focus", "input[type=text], input[type=email], input[type=tel], textarea", function (e) {
  var label = jquery_default()(this).closest("label");
  var placeholder = jquery_default()(label).find(".placeholder");
  jquery_default()(placeholder).addClass("active");
});
jquery_default()(document).on("blur", "input[type=text], input[type=email], input[type=tel], textarea", function (e) {
  var label = jquery_default()(this).closest("label");
  var placeholder = jquery_default()(label).find(".placeholder");
  if (!jquery_default()(this).val()) {
    jquery_default()(placeholder).removeClass("active");
  }
});
jquery_default()(document).on("mousemove", ".mobile", function (e) {
  jquery_default()("#mobile_vawe").css({
    left: e.clientX + "px"
  });
});

// // popup

jquery_default()(document).on("click", ".popup_open", function () {
  var target = jquery_default()(this).data("target");
  var popup = jquery_default()(target);
  var popupContent = jquery_default()(popup).find(".popup__content");
  jquery_default()("body").addClass("hidden");
  var timeLine = gsap/* default */.Ay.timeline();
  timeLine.to(jquery_default()(target), {
    opacity: 1,
    visibility: "visible",
    duration: 0.1,
    ease: "power1.out"
  }).to(jquery_default()(popupContent), {
    translateX: 0,
    duration: 0.1,
    ease: "power1.out"
  }).then(function () {
    scroll.stop();
  });
});
(function () {
  typograf_es/* default */.A.addRule({
    name: "common/other/typographicSmallerNames",
    handler: function handler(text) {
      return text.replace(/([А-ЯЁ]\.)\s+([А-ЯЁ]\.)/g, "$1&nbsp;$2");
    }
  });
  typograf_es/* default */.A.addRule({
    name: "common/other/typographicSmallNames",
    handler: function handler(text) {
      return text.replace(/([А-ЯЁ][а-яё]{0,2}\.)\s+([А-ЯЁ]\.)\s+([А-Я][а-я]+)/g, "$1&nbsp;$2&nbsp;$3");
    }
  });
  typograf_es/* default */.A.addRule({
    name: "common/other/typographicNdashToMdash",
    handler: function handler(text) {
      return text.replace(/\s+(-)\s+/g, "&nbsp;&mdash; ");
    }
  });
  var tp = new typograf_es/* default */.A({
    locale: ["ru", "en-US"]
  });
  tp.setSetting("common/punctuation/quote", "ru", {
    left: "«",
    right: "»",
    removeDuplicateQuotes: false
  });
  var elems = document.querySelectorAll("h1,h2,h3,h4,h5,h6,p,li,b");
  var _iterator6 = js_createForOfIteratorHelper(elems),
    _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var elem = _step6.value;
      elem.innerHTML = tp.execute(elem.innerHTML);
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
})();
jquery_default()(document).on("mouseover", ".events__item:first-child", function () {
  var row = jquery_default()(this).closest(".events__content_row");
  jquery_default()(row).addClass("hover");
});
jquery_default()(document).on("mouseout", ".events__item:first-child", function () {
  var row = jquery_default()(this).closest(".events__content_row");
  jquery_default()(row).removeClass("hover");
});
jquery_default()(document).on("submit", ".ajax_form.subscribe_form ", function (e) {
  var form = this;
  e.preventDefault();
  var action = jquery_default()(this).attr("action");
  var formData = jquery_default()(this).serialize();
  jquery_default().ajax({
    type: "POST",
    url: action,
    data: formData,
    dataType: "json",
    success: function success(response) {
      //console.log(response);
      var message;
      if (response.err_code != 0) {
        message = response.text;
      } else message = "Подписка оформлена! Пожалуйста, перейдите на свою почту, чтобы подтвердить подписку.";
      var formMessage = jquery_default()("<div class='form-message'>".concat(response.response.msg.message, "</div>"));
      jquery_default()(form).find(".form_success_title h2").text(response.response.msg.message);
      if (response.err_code != 0) {
        setTimeout(function () {
          formMessage.hide();
          formMessage.remove();
        }, 5000);
      }
    }
  });
});
jquery_default()(document).on("click", ".popup", function (e) {
  if (!e.target.closest(".popup__content") || e.target.closest(".popup_close")) {
    jquery_default()("body").removeClass("hidden");
    jquery_default()(this).find(".form_success").removeClass("show");
    jquery_default()(this).find("form").trigger("reset");
    var timeLine = gsap/* default */.Ay.timeline();
    scroll.start();
    timeLine.to(".popup__content", {
      translateX: "100%",
      duration: 0.1,
      ease: "power1.out"
    }).to(".popup", {
      opacity: 0,
      duration: 0.1,
      ease: "power1.out"
    }).to(".popup", {
      visibility: "hidden",
      duration: 0,
      ease: "power1.out"
    });
  }
});
function TranslateInit() {
  var code = TranslateGetCode();
  if (code == googleTranslateConfig.lang) {
    TranslateClearCookie();
  }
  new google.translate.TranslateElement({
    pageLanguage: googleTranslateConfig.lang
  });
}
function TranslateGetCode() {
  var lang = $.cookie("googtrans") != undefined && $.cookie("googtrans") != "null" ? $.cookie("googtrans") : googleTranslateConfig.lang;
  return lang.substr(-2);
}
function TranslateClearCookie() {
  $.cookie("googtrans", null);
  $.cookie("googtrans", null, {
    domain: "." + document.domain
  });
}
function TranslateSetCookie(code) {
  $.cookie("googtrans", "/auto/" + code);
  $.cookie("googtrans", "/auto/" + code, {
    domain: "." + document.domain
  });
}
document.addEventListener("DOMContentLoaded", function () {
  var startDate = null;
  var endDate = null;
  var startTargetPosition = jquery_default()('.calendar__day.startDate').index();
  var endTargetPosition = jquery_default()('.calendar__day.endDate').index();
  jquery_default()('.calendar__day').each(function (i, item) {
    if (jquery_default()(item).index() >= Math.min(startTargetPosition, endTargetPosition) && jquery_default()(item).index() <= Math.max(startTargetPosition, endTargetPosition)) {
      jquery_default()(item).addClass('hover');
    } else {
      jquery_default()(item).removeClass('hover');
    }
  });
  jquery_default()(document).on('click', '.month_toggle', function (e) {
    e.preventDefault();
    var inputValArr = jquery_default()('[name=DATE_ACTIVE_MONTH]').prop('checked');
    var url = new URL(location.origin + e.currentTarget.dataset.href);
    var urlParams = new URLSearchParams(url.search);
    var month = urlParams.get('month');
    var year = urlParams.get('year');
    urlParams.set('arrFilter_DATE_ACTIVE_MONTH', month);
    urlParams.set('IS_MONTH_FILTER_ACTIVE', inputValArr);
    urlParams.set('arrFilter_DATE_ACTIVE_YEAR', year);
    urlParams.set('PAGEN_1', 1);
    // const setFilter = inputValArr ? '&set_filter=Показать' : ''
    var calendar = jquery_default()('#filter_calendar');
    var oldMonths = jquery_default()(calendar).find('.calendar__form_control');
    jquery_default()(calendar).find('.loader').addClass('active');
    e.target.disabled = true;
    jquery_default()(this).css({
      'pointer-events': 'none'
    });
    // if (location.search) {

    window.history.pushState({
      lastUrl: location.href
    }, '', location.pathname + "?" + urlParams);
    // }
    // console.log(location);

    jquery_default().ajax({
      url: location.pathname + "?" + urlParams,
      success: function success(data) {
        var calendarSlide = jquery_default()(data).find('.calendar__dates_slider');
        var newMonths = jquery_default()(data).find('.calendar__form_control');
        var oldCalendarSlide = jquery_default()('.calendar__dates_slider');
        var calendarSlider = jquery_default()('.calendar__dates_slider .swiper-wrapper');
        var startTargetPosition = jquery_default()(calendarSlide).find('.calendar__day.startDate').index();
        var endTargetPosition = jquery_default()(calendarSlide).find('.calendar__day.endDate').index();
        jquery_default()(calendarSlide).find('.calendar__day').each(function (i, item) {
          if (jquery_default()(item).index() >= Math.min(startTargetPosition, endTargetPosition) && jquery_default()(item).index() <= Math.max(startTargetPosition, endTargetPosition)) {
            jquery_default()(item).addClass('hover');
          } else {
            jquery_default()(item).removeClass('hover');
          }
        });
        oldCalendarSlide.replaceWith(calendarSlide);
        oldMonths.replaceWith(newMonths);
        calendarSliders();
        e.target.disabled = false;
        jquery_default()(calendar).find('.loader').removeClass('active');
        if (inputValArr) {
          var newEvents = jquery_default()(data).find('#events__content');
          jquery_default()('#events__content').replaceWith(newEvents);
          calendarSliders();
          window.scroll.scrollTo(document.querySelector('#events__content'));
          jquery_default()(calendar).find('.loader').removeClass('active');
        }
        var observer = new ResizeObserver(function (entries, observer) {
          var _iterator7 = js_createForOfIteratorHelper(entries),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var entry = _step7.value;
              jquery_default()(".filter_calendar").css({
                'max-height': jquery_default()(".filter_calendar").find(".form").innerHeight() + "px"
              });
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        });
        observer.observe(document.querySelector(".events__filter .form"));
      }
    });
  });
  if (Array.from(jquery_default()('[name=DATE_ACTIVE_TO]')).some(function (item) {
    return jquery_default()(item).prop('checked');
  })) {
    localStorage.setItem('isDateChecked', 'true');
    document.querySelector("#filter_calendar").classList.add("isDateChecked");
  } else {
    localStorage.setItem('isDateChecked', 'false');
    document.querySelector("#filter_calendar").classList.remove("isDateChecked");
  }
  var isDateChecked = localStorage.getItem("isDateChecked");
  if (isDateChecked && document.querySelector("#filter_calendar")) {
    document.querySelector("#filter_calendar").classList.add("isDateChecked");
  }
  calendarSliders();
  jquery_default()(document).on('change', '[name=DATE_ACTIVE_TO]', function () {
    var inputValArr = jquery_default()(this).val().split(".");
    var calendar = jquery_default()('#filter_calendar');
    if (!startDate) {
      startDate = new Date(inputValArr[2], inputValArr[1] - 1, inputValArr[0]);
      jquery_default()(this).closest('.calendar__day').addClass('active startDate');
    } else if (startDate && !endDate) {
      var _Date, _Date2;
      endDate = new Date(inputValArr[2], inputValArr[1] - 1, inputValArr[0], 23, 59, 59);
      if (endDate.getTime() < startDate.getTime()) {
        endDate.setHours(0, 0, 0);
        startDate.setHours(23, 59, 59);
      }
      jquery_default()(calendar).find('.loader').addClass('active');
      jquery_default()(this).closest('.calendar__day').addClass('active endDate');
      var _target = jquery_default()('#events__content');
      var form = jquery_default()('[name=arrFilter_form]');
      var _formData = '';
      var action = jquery_default()(form).attr('action');
      if (!!jquery_default()(form).serialize()) {
        _formData = '&' + "set_filter=Показать";
      }
      var _startTargetPosition = jquery_default()('.calendar__day.startDate').index();
      var _endTargetPosition = jquery_default()(this).closest('.calendar__day').index();
      jquery_default()('.calendar__day').each(function (i, item) {
        if (jquery_default()(item).index() >= Math.min(_startTargetPosition, _endTargetPosition) && jquery_default()(item).index() <= Math.max(_startTargetPosition, _endTargetPosition)) {
          jquery_default()(item).addClass('active');
        } else {
          jquery_default()(item).removeClass('active');
        }
      });
      var url = "".concat(location.pathname, "?arrFilter_DATE_ACTIVE_TO_1=").concat((_Date = new Date(Math.min(startDate, endDate))) === null || _Date === void 0 ? void 0 : _Date.toLocaleString('ru-RU').replace(",", ""), "&arrFilter_DATE_ACTIVE_TO_2=").concat((_Date2 = new Date(Math.max(startDate, endDate))) === null || _Date2 === void 0 ? void 0 : _Date2.toLocaleString('ru-RU').replace(",", "")).concat(_formData, "&PAGEN_1=1");
      // if (location.search) {

      window.history.pushState({
        lastUrl: location.href
      }, '', url);
      // }
      jquery_default().ajax({
        url: url,
        success: function success(data) {
          var newEvents = jquery_default()(data).find('#events__content');
          _target.replaceWith(newEvents);
          calendarSliders();
          window.scroll.scrollTo(document.querySelector('#events__content'));
          jquery_default()(calendar).find('.loader').removeClass('active');
        }
      });
      jquery_default()(form).find('[name=arrFilter_DATE_ACTIVE_TO_1]').val(startDate.toLocaleString('ru-RU').replace(",", ""));
      jquery_default()(form).find('[name=arrFilter_DATE_ACTIVE_TO_2]').val(endDate.toLocaleString('ru-RU').replace(",", ""));
    } else {
      startDate = new Date(inputValArr[2], inputValArr[1] - 1, inputValArr[0]);
      endDate = null;
      jquery_default()('.calendar__day').each(function (i, item) {
        return jquery_default()(item).removeClass('active').removeClass('startDate').removeClass('endDate').removeClass('hover');
      });
      jquery_default()(this).closest('.calendar__day').addClass('active startDate');
    }
  });
  jquery_default()(document).on('mouseover mouseout', '.calendar__day', function (e) {
    if (e.type === 'mouseover') {
      jquery_default()(e.currentTarget).addClass('hover');
      if (startDate && !endDate) {
        var _startTargetPosition2 = jquery_default()('.calendar__day.startDate').index();
        var _endTargetPosition2 = jquery_default()(e.currentTarget).index();
        jquery_default()('.calendar__day').each(function (i, item) {
          if (jquery_default()(item).index() >= Math.min(_startTargetPosition2, _endTargetPosition2) && jquery_default()(item).index() <= Math.max(_startTargetPosition2, _endTargetPosition2)) {
            jquery_default()(item).addClass('hover');
          } else {
            jquery_default()(item).removeClass('hover');
          }
        });
      }
    } else {
      jquery_default()(e.currentTarget).removeClass('hover');
    }
  });
  jquery_default()(document).on('change', '[name=DATE_ACTIVE_MONTH]', function () {
    var _this6 = this;
    var inputValArr = '';
    var startDate;
    var endDate;
    var year = jquery_default()('.calendar__year_slider').data('year');
    var calendar = jquery_default()('#filter_calendar');
    if (jquery_default()(this).prop('checked')) {
      jquery_default()('[name=DATE_ACTIVE_TO]').each(function (_, item) {
        if (jquery_default()(item).val() !== jquery_default()(_this6).val()) {
          jquery_default()(item).prop('checked', false);
          jquery_default()(item).closest('.calendar__day').removeClass('active');
        }
      });
      inputValArr = jquery_default()(this).val();
      startDate = new Date(year, inputValArr - 1, 1);
      endDate = new Date(year, inputValArr, 0, 23, 59, 59);
      localStorage.setItem('isDateChecked', 'true');
      jquery_default()(this).closest('.calendar__day').addClass('active');
      jquery_default()(".btn_filter.active").addClass("isDateChecked");
    } else {
      jquery_default()(this).closest('.calendar__day').removeClass('active');
      startDate = '';
      endDate = '';
      jquery_default()(".btn_filter.active").removeClass("isDateChecked");
    }
    jquery_default()(calendar).find('.loader').addClass('active');
    var target = jquery_default()('#events__content');
    var form = jquery_default()('[name=arrFilter_form]');
    var formData = '';
    var action = jquery_default()(form).attr('action');
    if (!!jquery_default()(form).serialize()) {
      formData = "&set_filter=Показать";
    }
    var url = "".concat(location.pathname, "?arrFilter_DATE_ACTIVE_MONTH=").concat(inputValArr, "&arrFilter_DATE_ACTIVE_YEAR=").concat(year);

    // if (location.search) {

    window.history.pushState({
      lastUrl: location.href
    }, '', url);
    // }
    jquery_default().ajax({
      url: url,
      success: function success(data) {
        var newEvents = jquery_default()(data).find('#events__content');
        var newCalendar = jquery_default()(data).find('#filter_calendar');
        var startTargetPosition = jquery_default()('.calendar__day.startDate').index();
        var endTargetPosition = jquery_default()('.calendar__day.endDate').index();
        jquery_default()('.calendar__day').each(function (i, item) {
          if (jquery_default()(item).index() >= Math.min(startTargetPosition, endTargetPosition) && jquery_default()(item).index() <= Math.max(startTargetPosition, endTargetPosition)) {
            jquery_default()(item).addClass('hover');
          } else {
            jquery_default()(item).removeClass('hover');
          }
        });
        target.replaceWith(newEvents);
        calendarSliders();
        jquery_default()(calendar).find('form').replaceWith(jquery_default()(newCalendar).find('form'));
        window.scroll.scrollTo(document.querySelector('#events__content'));
        jquery_default()(calendar).find('.loader').removeClass('active');
      }
    });
    jquery_default()(form).find('[name=arrFilter_DATE_ACTIVE_TO_1]').val(startDate.toLocaleString('ru-RU').replace(",", ""));
    jquery_default()(form).find('[name=arrFilter_DATE_ACTIVE_TO_2]').val(endDate.toLocaleString('ru-RU').replace(",", ""));
  });
  jquery_default()(document).on('click', '#del_calendar_filter', function () {
    jquery_default()(".btn_filter.active").removeClass("isDateChecked");
    // $('.calendar__day.active').find('input').click()
    var calendar = jquery_default()('#filter_calendar');
    var target = jquery_default()('#events__content');
    var form = jquery_default()('[name=arrFilter_form]');
    jquery_default()('.calendar__day').each(function (i, item) {
      jquery_default()(item).removeClass('hover').removeClass('active');
    });
    jquery_default()('[name=DATE_ACTIVE_MONTH]').prop('checked', false);
    jquery_default()(calendar).find('.loader').addClass('active');
    window.history.pushState({
      lastUrl: location.href
    }, '', location.pathname);
    jquery_default().ajax({
      url: location.pathname,
      success: function success(data) {
        var newEvents = jquery_default()(data).find('#events__content');
        var newCalendar = jquery_default()(data).find('#filter_calendar');
        var startTargetPosition = jquery_default()('.calendar__day.startDate').index();
        var endTargetPosition = jquery_default()('.calendar__day.endDate').index();
        // $('.calendar__day').each((i, item) => {
        // 	if ($(item).index() >= Math.min(startTargetPosition, endTargetPosition) && $(item).index() <= Math.max(startTargetPosition, endTargetPosition)) {
        // 		$(item).addClass('hover')
        // 	} else {
        // 		$(item).removeClass('hover')
        // 	}
        // })
        target.replaceWith(newEvents);
        calendarSliders();
        jquery_default()(calendar).find('form').replaceWith(jquery_default()(newCalendar).find('form'));
        window.scroll.scrollTo(document.querySelector('#events__content'));
        jquery_default()(calendar).find('.loader').removeClass('active');
      }
    });
  });
  jquery_default()(document).on('change', '[name=SHOW_OLD]', function () {
    var form = jquery_default()('[name=arrFilter_form]');
    jquery_default()(form).find('[name=arrFilter_SHOW_OLD').val(jquery_default()(this).val());
    jquery_default()(form).find('[name=set_filter]').click();
  });
});
function calendarSliders() {
  var months = document.querySelector(".calendar__months_slider");
  var years = document.querySelector(".calendar__years_slider");
  var calendar = document.querySelector(".calendar__dates_slider");
  if (!months || !calendar) return;
  var slides = months.querySelectorAll(".swiper-slide");
  var curSlide = months.querySelector(".current");
  var curSlideIndex = Array.prototype.indexOf.call(slides, curSlide);
  var monthsSlider = new Swiper(months, {
    speed: 500,
    initialSlide: curSlideIndex,
    navigation: {}
  });
  var yearsSlider = new Swiper(years, {
    speed: 500,
    initialSlide: curSlideIndex,
    navigation: {}
  });
  var datesSlider = new Swiper(calendar, {
    speed: 500,
    initialSlide: curSlideIndex
  });
}
;// ./main.js


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			57: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, [999], function() { return __webpack_require__(4859); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [999], function() { return __webpack_require__(7268); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;