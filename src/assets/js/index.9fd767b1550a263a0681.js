/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 6321:
/***/ (function() {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// const worker = new Worker('/local/templates/zaryadyehall/assets/js/worker.js');
// console.log(worker);
// Выбираем элементы
// const h1 = document.querySelectorAll(".h1");
// const h2 = document.querySelectorAll(".h2");
// const h3 = document.querySelectorAll(".h3");

// // Функция для отправки данных в Worker
// function processTextElements(elements, className) {
//     elements.forEach((element) => {
//         const rows = element.innerHTML.trim().split("<br>");
//         worker.postMessage({ rows, className });
//     });
// }

// // Отправляем данные в Worker для обработки
// processTextElements(h1, 'h1');
// processTextElements(h2, 'h2');
// processTextElements(h3, 'h3');

// // Обработка результата от Worker
// worker.onmessage = function(event) {
//     const { processedRows, className } = event.data;
// console.log(processedRows, className);

//     const elements = document.querySelectorAll(`.${className}`);
//     elements.forEach((element, index) => {
//         // element.innerHTML = processedRows[index];
//     });
// };

document.addEventListener("DOMContentLoaded", function () {
  fsSliders();
  var isDateChecked = localStorage.getItem("isDateChecked");
  if (isDateChecked && document.querySelector("#filter_calendar")) {
    document.querySelector("#filter_calendar").classList.add("isDateChecked");
  }
  if (document.querySelector(".events__filter_form")) {
    var form = document.querySelector(".events__filter_form");
    var inputs = $(form).find("input");
    if (Array.from($(inputs)).some(function (item) {
      return $(item).prop("checked");
    })) {
      $('[data-target="#filter"]').addClass("isDateChecked");
    }
  }
  if (document.querySelector(".leaders .about__desc_text")) {
    var lineHeight = parseFloat($(".leaders .about__desc_text p").css("line-height"));
    $(".leaders .about__desc_text").css({
      "max-height": lineHeight * 10 + "px",
      height: "auto"
    });
    //console.log($(".leaders .about__desc_text p").height());
  }
  $(document).on("click", ".leaders .about__more_link", function (e) {
    var _this = this;
    e.preventDefault();
    var lineHeight = parseFloat($(".leaders .about__desc_text p").css("line-height"));
    var leaders = this.closest(".leaders");
    var clampedText = leaders.querySelector(".about__desc_text");
    var tl = gsap.timeline();
    if (clampedText.offsetHeight < clampedText.scrollHeight) {
      tl.to(clampedText, {
        maxHeight: clampedText.scrollHeight,
        duration: 0.3,
        ease: "none"
      }).then(function () {
        $(_this).text("Свернуть");
      });
    } else {
      tl.to(clampedText, {
        maxHeight: lineHeight * 10,
        duration: 0.3,
        ease: "none"
      }).then(function () {
        $(_this).text("Читать всё");
      });
    }
  });
  locationSliders();
  var elmOverlay = document.querySelector(".shape-overlays");
  var overlay = new ShapeOverlays(elmOverlay);
  var scrollPosition = localStorage.getItem("scrollPosY") ? localStorage.getItem("scrollPosY") : 0;
  (function () {
    window.scroll = new Lenis({
      autoRaf: true,
      smooth: true,
      lerp: 0.06,
      getSpeed: true,
      multiplier: 0.6,
      scrollFromAnywhere: true,
      getDirection: true,
      prevent: function prevent(node) {
        return !node.closest(".mobile") && ($(node).css("overflow") === "auto" || $(node).css("overflow") === "scroll");
      },
      smartphone: _defineProperty(_defineProperty({
        smooth: !0,
        breakpoint: 767
      }, "smooth", true), "lerp", 0.06),
      tablet: _defineProperty(_defineProperty(_defineProperty({
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
        var head = $(".head").not(".mobile__head");
        if (scroll.direction < 0) {
          if (!$(".head.fixed").hasClass("show")) {
            $(".head.fixed").css({
              transition: "all 0.7s"
            });
            $(".head.fixed").addClass("show");
            $(".head.fixed").removeClass("hide");
          }
        } else if (scroll.direction > 0) {
          $(".head.fixed").css({
            transition: "all 0.4s"
          });
          $(".head.fixed").removeClass("show");
          $(".head.fixed").addClass("hide");
        }
      } else {
        $(".head.fixed").css({
          transition: "all 0.4s"
        });
        $(".head.fixed").removeClass("show");
        $(".head.fixed").addClass("hide");
      }
      if (posTop >= window.innerHeight * 2) {
        if (scroll.direction < 0) {
          if ($(".scroll_top").hasClass("show")) {
            $(".scroll_top").removeClass("show");
          }
        } else if (scroll.direction > 0) {
          if (!$(".scroll_top").hasClass("show")) {
            $(".scroll_top").addClass("show");
          }
        }
      } else {
        if ($(".scroll_top").hasClass("show")) {
          $(".scroll_top").removeClass("show");
        }
      }
      if ($(".events__date").length) {
        if (scroll.direction < 0) {
          if ($(".head.fixed").hasClass("show")) {
            if (window.innerWidth > 991) {
              $(".events__date").css({
                top: $(".head.fixed").innerHeight() + 32 + "px"
              });
            } else {
              $(".events__date").css({
                top: $(".head.fixed").innerHeight() + "px"
              });
            }
          } else {
            if (window.innerWidth > 991) {
              $(".events__date").css({
                top: "32px"
              });
            } else {
              $(".events__date").css({
                top: "0px"
              });
            }
          }
        } else if (scroll.direction > 0) {
          if (window.innerWidth > 991) {
            $(".events__date").css({
              top: "32px"
            });
          } else {
            $(".events__date").css({
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
  $(document).on("click", ".head .btn_menu", function () {
    if (overlay.isAnimating || overlay.isThemeShapeAnimating) {
      return;
    }
    var gs = gsap.timeline();
    var header = $(".head.fixed").hasClass("show") ? document.querySelector(".head.fixed") : document.querySelector("header");
    if (!$(".mobile").hasClass("show")) {
      $(".mobile").addClass("show");
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
        $(".mobile").css({
          "overflow-y": "auto"
        });
        $("body").addClass("hidden");
      });
      $(".mobile .animate").each(function (_, item) {
        $(item).css({
          opacity: 0
        });
      });
      $(".mobile__contacts").css({
        opacity: 0
      });
      setTimeout(function () {
        $(".mobile__contacts").addClass("animate__animated animate__fadeInUpSm");
        $(".mobile .animate").each(function (_, item) {
          $(item).addClass("animate__animated animate__fadeInUp");
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
        $(".mobile").css({
          "overflow-y": "hidden"
        });
        $(".mobile").removeClass("show");
        $("body").removeClass("hidden");
        $(".mobile__nav_sublist").removeClass("active");
        $(".mobile__contacts").removeClass("animate__animated animate__fadeInUpSm");
        $(".mobile .animate").each(function (_, item) {
          $(item).removeClass("animate__animated animate__fadeInUp");
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
  $(document).on("click", ".specialButton", function () {
    if (overlay.isAnimating || overlay.isThemeShapeAnimating) {
      return;
    }
    var gs = gsap.timeline();
    var header = $(".head.fixed").hasClass("show") ? document.querySelector(".head.fixed") : document.querySelector("header");
    if (!$(".mobile").hasClass("show")) {} else {
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
        $(".mobile").removeClass("show");
        $("body").removeClass("hidden");
        $(".mobile__nav_sublist").removeClass("active");
        $(".mobile__contacts").removeClass("animate__animated animate__fadeInUpSm");
        $(".mobile .animate").each(function (_, item) {
          $(item).removeClass("animate__animated animate__fadeInUp");
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
    var _iterator = _createForOfIteratorHelper(scrollableSlideElement),
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
            scroll.start();
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
  var _iterator2 = _createForOfIteratorHelper(h1),
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
          var container = $('<span class="title-anim-container"></span>');
          var word = _i === _text.length - 1 ? $('<span class="title-anim-content">' + _text[_i] + "</span>") : $('<span class="title-anim-content">' + _text[_i] + "&nbsp;</span>");
          $(word).appendTo(container);
          $(container).appendTo(h);
        }
        $("<br>").appendTo(h);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var _iterator3 = _createForOfIteratorHelper(h2),
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
          var _container = $('<span class="title-anim-container"></span>');
          var _word = $('<span class="title-anim-content">' + _text3[_i2] + "&nbsp;</span>");
          $(_word).appendTo(_container);
          $(_container).appendTo(_h);
        }
        $("<br>").appendTo(_h);
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  var _iterator4 = _createForOfIteratorHelper(h3),
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
          var _container2 = $('<span class="title-anim-container"></span>');
          var _word2 = $('<span class="title-anim-content">' + _text5[_i3] + "&nbsp;</span>");
          $(_word2).appendTo(_container2);
          $(_container2).appendTo(_h2);
        }
        $("<br>").appendTo(_h2);
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
      var total = $('<span class="value total" style="margin-left:auto"></span>');
      $(values).append(total);
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
    var pagin = $(".cafe__tabs");
    var activeTab = $(pagin).find(".active");
    $(pagin).closest(".dropdown-slider").find(".dropdown-slider__value .value").text($(activeTab).text());
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
      if ($("[data-concert]").attr("data-concert")) {
        if ($(".zh-modal-iframe").html().trim() === "") $(".zh-modal-iframe").html('<iframe src="' + $("[data-concert]").attr("data-concert") + '" width="100%" height="100%" marginheight="0" frameborder="0" marginwidth="0" scrolling="no" allowfullscreen></iframe>');
      }
    }
    return {
      init: function init() {
        loadStream();
      }
    };
  }();
  ZhConcertBtn.init();
  if ($(".head__theme input").prop("checked")) {
    if (overlay.isAnimating || overlay.isThemeShapeAnimating) return;
    $("body").addClass("dark");
    localStorage.colorTheme = "dark";
    document.cookie = "BITRIX_SM_theme=dark";
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
$(document).on("click", ".events__item a", function (e) {
  var target = e.target.closest(".events__item").dataset.scrollId;
  console.log(target);
  localStorage.setItem("scrollPosY", scrollPosition);
  localStorage.setItem("startElem", target.toString());
});
$(document).on("click", ".cafe__tab", function () {
  var _this2 = this;
  if ($(this).hasClass("active")) return;
  var pagin = $(".cafe__tabs");
  var paginBg = $(pagin).find(".before");
  var height = 0;
  $(".cafe__tab").each(function (_, tab) {
    $(tab).removeClass("active");
  });
  if ($(this).attr("data-target") === "all") {
    $(".cafe__sliders_tab").each(function (_, price) {
      $(price).addClass("active");
      $(_this2).addClass("active");
      height += $(price).outerHeight(true) + parseFloat($(".cafe__sliders_tabs").css("gap")) * 2;
    });
    // scroll.update();
  } else {
    $(".cafe__sliders_tab").each(function (_, price) {
      $(price).removeClass("active");
      if ($(price).attr("data-name") === $(_this2).attr("data-target")) {
        $(price).addClass("active");
        $(_this2).addClass("active");
        $(paginBg).show();
        height = $(price).outerHeight(true);
      }
    });
    var activeTab = $(pagin).find(".active");

    // $(paginBg).css({ width: $(activeTab).innerWidth(), left: $(activeTab).position().left + "px" });
    $(pagin).closest(".dropdown-slider").find(".dropdown-slider__value .value").text($(activeTab).text());
  }
  $(".cafe__sliders_tabs").css({
    "max-height": height + "px"
  });
});
$(document).on("click", ".filter__form_dropdown .values .icon", function (e) {
  e.preventDefault();
  var dropdown = $(this).closest(".dropdown");
  var dropdownList = $(dropdown).find(".dropdown__list");
  $(dropdown).removeClass("active");
  $(dropdownList.find(".dropdown__label")).each(function (i, item) {
    if ($(item).text().trim() === $(e.target).closest(".value").text().trim()) {
      $(item).find("input").click();
    }
  });
});
$(document).on("submit", ".feedback__form", function (e) {
  e.preventDefault();
  var data = new FormData();
  var inputs = $(this).find("input");
  $(inputs).each(function (ind, input) {
    data.append($(input).attr("name"), $(input).val());
  });
  if ($(this).hasClass("ajax_form")) {
    var form = $(this),
      action = $(this).attr("action");
    form.find(":input[name]").not('[type="file"]').each(function () {
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
            $(form).trigger("reset");
            setTimeout(function () {
              $(form).addClass("success");
              setTimeout(function () {
                $(form).removeClass("success");
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
$(document).on("input keydown blur focusout", "input[type=tel]", function (e) {
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
  var label = this.closest("label");
  this.classList.remove("error");
  label.querySelector("span.error").classList.remove("show");
  var valRegRu = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/gi;
  var str = maskedEmail(this);
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
  var label = this.closest("label");
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
  var label = this.closest("label");
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
window.addEventListener("resize", function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
  document.querySelector(".mobile").style.height = window.innerHeight + "px";
  var width = window.innerWidth;
  resizeScrollPath(width);
  var eventsFilter = document.querySelectorAll(".events__filter");
  if (eventsFilter.length) {
    var _iterator5 = _createForOfIteratorHelper(eventsFilter),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var filter = _step5.value;
        if (filter.classList.contains("open")) {
          $(filter).css({
            "max-height": $(filter).find(".form").innerHeight() + "px"
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
      var isHideTags = $(cont).find(".fs__slide_left .tags") && $(cont).find(".fs__slide_left .tags").css("display") == "none";
      var isHideText = $(cont).find(".fs__slide_text p") && ((_$$find = $(cont).find(".fs__slide_text p")) === null || _$$find === void 0 ? void 0 : _$$find.css("display")) == "none";
      if (isHiddenSlide) {
        var _$$find3;
        if (!isHideTags && isHideText) {
          var _$$find2;
          (_$$find2 = $(cont).find(".fs__slide_left .tags")) === null || _$$find2 === void 0 || _$$find2.hide();
        }
        if ($(cont).find(".fs__slide_text p").length && ((_$$find3 = $(cont).find(".fs__slide_text p")) === null || _$$find3 === void 0 ? void 0 : _$$find3.css("display")) != "none" && isHideTags) {
          $(cont).find(".fs__slide_text p").hide();
          $(cont).find(".fs__slide_text").addClass("mt-0");
        }
        if (!$(cont).find(".fs__slide_text p").length) {
          $(cont).find(".fs__slide_text").addClass("mt-0");
        }
        if (isHideText && isHideTags) {
          isHiddenSlides.push(true);
        }
        //console.log($(cont).find(".fs__slide_left .tags").css("display"), $(cont).find(".fs__slide_text p"));
      } else {
        var _$$find4;
        if (!isHideTags && isHideText) {
          $(cont).find(".fs__slide_left .tags").show();
        }
        if ($(cont).find(".fs__slide_text p").length && ((_$$find4 = $(cont).find(".fs__slide_text p")) === null || _$$find4 === void 0 ? void 0 : _$$find4.css("display")) != "none" && isHideTags) {
          $(cont).find(".fs__slide_text p").show();
          $(cont).find(".fs__slide_text").removeClass("mt-0");
        }
        if (!isHideText && !isHideTags) {
          isHiddenSlides.push(false);
        }
      }
    });
    if (isHiddenSlides.some(function (el) {
      return !!el;
    })) {
      $(".fs_index").css({
        "min-height": window.innerHeight + Math.max.apply(Math, slidesHeights) + "px"
      });
    }
  }
});
function resizeScrollPath(width) {
  var scrollPath = document.querySelector("#scroll_lg path");
  var icon = $(scrollPath).closest(".icon");
  if (width > 768) {
    $(scrollPath).attr("d", "M0 ".concat($(icon).height() / 1.3, "C").concat(width / 2 / 1.25, " ").concat($(icon).height() / 1.3, " ").concat(width / 2 / 1.25, " 0 ").concat(width / 2, " 0C").concat(width / 1.7, " 0 ").concat(width / 1.7, " ").concat($(icon).height() / 1.33, " ").concat(width, " ").concat($(icon).height() / 1.33, "L").concat(width, " ").concat($(icon).height(), "L0 ").concat($(icon).height(), "L0 ").concat($(icon).height() / 1.3, "Z"));
  } else {
    $(scrollPath).attr("d", "M0 ".concat($(icon).height() / 1.21, "C").concat(width / 2 / 1.82, " ").concat($(icon).height() / 1.21, " ").concat(width / 2 / 1.44, " 0 ").concat(width / 2, " 0C").concat(width / 1.53, " 0 ").concat(width / 1.38, " ").concat($(icon).height() / 1.25, " ").concat(width, " ").concat($(icon).height() / 1.25, "L").concat(width, " ").concat($(icon).height(), "L0 ").concat($(icon).height(), "L0 ").concat($(icon).height() / 1.21, "Z"));
  }
}
$(document).on("click", ".search_link", function (e) {
  e.preventDefault();
  var container = $(this).closest(".head__left_controls");
  var headTop = $(this).closest(".head__top");
  var leftContent = $(this).closest(".head__left_content");
  var gs = gsap.timeline();
  if (container.length) {
    // $(container).find(".search-form").addClass("show");
    // $(container).find(".links").css({ opacity: 0, visibility: "hidden", "transition-duration": "0.2s" });
    // $(container).find(".btn_menu").css({ opacity: 0, visibility: "hidden", transition: "all 0s" });
    gs.to($(container).find(".links"), {
      opacity: 0,
      visibility: "hidden",
      duration: 0
    });
    gs.to($(container).find(".btn_menu"), {
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
    gs.to($(container).find(".search-form"), {
      opacity: 1,
      visibility: "visible",
      zIndex: 1,
      duration: 0.2,
      delay: 0.2
    });
  }
  if (headTop.length) {
    gs.to($(headTop).find(".depkult-logo"), {
      opacity: 0,
      visibility: "hidden",
      duration: 0
    });
    gs.to($(headTop).find(".search_link"), {
      opacity: 0,
      visibility: "hidden",
      duration: 0
    });
    gs.to($(headTop).find(".zh-header__center"), {
      opacity: 0,
      visibility: "hidden",
      duration: 0
    });
    gs.to($(headTop).find(".search-form"), {
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
$(document).on("click", ".head__left .close_form", function (e) {
  e.preventDefault();
  var container = $(this).closest(".head__left_controls");
  var headTop = $(this).closest(".head__top");
  var leftContent = $(this).closest(".head__left_content");
  var gs = gsap.timeline();
  if (container.length) {
    // $(container).find(".search-form").removeClass("show");
    // $(container).find(".links").css({ opacity: 1, visibility: "visible", "transition-duration": "0.2s" });
    // $(container).find(".btn_menu").css({ opacity: 1, visibility: "visible", "transition-duration": "0s" });
    gs.to($(container).find(".search-form"), {
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
    }).to($(container).find(".links"), {
      opacity: 1,
      visibility: "visible",
      duration: 0.1
    }).to($(container).find(".btn_menu"), {
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
    gs.to($(headTop).find(".search-form"), {
      opacity: 0,
      visibility: "hidden",
      zIndex: -1,
      duration: 0.1
    });
    gs.to($(headTop).find(".depkult-logo"), {
      opacity: 1,
      visibility: "visible",
      duration: 0.1
    });
    gs.to($(headTop).find(".search_link"), {
      opacity: 1,
      visibility: "visible",
      duration: 0.1
    });
    gs.to($(headTop).find(".zh-header__center"), {
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
$(document).on("click", ".head__top .close_form", function (e) {
  e.preventDefault();
  var container = $(this).closest(".head__left_controls");
  var headTop = $(this).closest(".head__top");
  var gs = gsap.timeline();
  if (container.length) {
    // $(container).find(".search-form").removeClass("show");
    // $(container).find(".links").css({ opacity: 1, visibility: "visible", "transition-duration": "0.2s" });
    // $(container).find(".btn_menu").css({ opacity: 1, visibility: "visible", "transition-duration": "0.2s" });
    gs.to($(container).find(".search-form"), {
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
    }).to($(container).find(".links"), {
      opacity: 1,
      visibility: "visible",
      duration: 0.1,
      delay: 0.1
    }).to($(container).find(".btn_menu"), {
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
    gs.to($(headTop).find(".search-form"), {
      opacity: 0,
      visibility: "hidden",
      zIndex: -1,
      duration: 0.1
    });
    gs.to($(headTop).find(".depkult-logo"), {
      opacity: 1,
      visibility: "visible",
      duration: 0.1
    });
    gs.to($(headTop).find(".search_link"), {
      opacity: 1,
      visibility: "visible",
      duration: 0.1
    });
    gs.to($(headTop).find(".zh-header__center"), {
      opacity: 1,
      visibility: "visible",
      duration: 0.1
    });
  }
});
$(window).on("load", function () {
  if (document.querySelector(".fs_index") && window.innerWidth < 992) {
    var slidesContainers = document.querySelectorAll(".fs__slide_content");
    var isHiddenSlides = [];
    var slidesHeights = [];
    slidesContainers.forEach(function (cont) {
      var _$$find5;
      var isHiddenSlide = cont.scrollWidth > cont.offsetWidth || cont.scrollHeight > cont.offsetHeight;
      slidesHeights.push(cont.scrollHeight - cont.offsetHeight);
      var isHideTags = $(cont).find(".fs__slide_left .tags") && $(cont).find(".fs__slide_left .tags").css("display") == "none";
      var isHideText = $(cont).find(".fs__slide_text p") && ((_$$find5 = $(cont).find(".fs__slide_text p")) === null || _$$find5 === void 0 ? void 0 : _$$find5.css("display")) == "none";
      if (isHiddenSlide) {
        var _$$find7;
        if (!isHideTags && isHideText) {
          var _$$find6;
          (_$$find6 = $(cont).find(".fs__slide_left .tags")) === null || _$$find6 === void 0 || _$$find6.hide();
        }
        if ($(cont).find(".fs__slide_text p").length && ((_$$find7 = $(cont).find(".fs__slide_text p")) === null || _$$find7 === void 0 ? void 0 : _$$find7.css("display")) != "none" && isHideTags) {
          $(cont).find(".fs__slide_text p").hide();
          $(cont).find(".fs__slide_text").addClass("mt-0");
        }
        if (!$(cont).find(".fs__slide_text p").length) {
          $(cont).find(".fs__slide_text").addClass("mt-0");
        }
        if (isHideText && isHideTags) {
          isHiddenSlides.push(true);
        }
        //console.log($(cont).find(".fs__slide_left .tags").css("display"), $(cont).find(".fs__slide_text p"));
      } else {
        var _$$find8;
        if (!isHideTags && isHideText) {
          $(cont).find(".fs__slide_left .tags").show();
        }
        if ($(cont).find(".fs__slide_text p").length && ((_$$find8 = $(cont).find(".fs__slide_text p")) === null || _$$find8 === void 0 ? void 0 : _$$find8.css("display")) != "none" && isHideTags) {
          $(cont).find(".fs__slide_text p").show();
          $(cont).find(".fs__slide_text").removeClass("mt-0");
        }
        if (!isHideText && !isHideTags) {
          isHiddenSlides.push(false);
        }
      }
    });
    if (isHiddenSlides.some(function (el) {
      return !!el;
    })) {
      $(".fs_index").css({
        "min-height": window.innerHeight + Math.max.apply(Math, slidesHeights) + "px"
      });
    }
  }
  var scrollPath = document.querySelector("#scroll_lg path");
  var icon = $(scrollPath).closest(".icon");
  var width = window.innerWidth;
  if (width > 768) {
    $(scrollPath).attr("d", "M0 ".concat($(icon).height() / 1.3, "C").concat(width / 2 / 1.25, " ").concat($(icon).height() / 1.3, " ").concat(width / 2 / 1.25, " 0 ").concat(width / 2, " 0C").concat(width / 1.7, " 0 ").concat(width / 1.7, " ").concat($(icon).height() / 1.33, " ").concat(width, " ").concat($(icon).height() / 1.33, "L").concat(width, " ").concat($(icon).height(), "L0 ").concat($(icon).height(), "L0 ").concat($(icon).height() / 1.3, "Z"));
  } else {
    $(scrollPath).attr("d", "M0 ".concat($(icon).height() / 1.21, "C").concat(width / 2 / 1.82, " ").concat($(icon).height() / 1.21, " ").concat(width / 2 / 1.44, " 0 ").concat(width / 2, " 0C").concat(width / 1.53, " 0 ").concat(width / 1.38, " ").concat($(icon).height() / 1.25, " ").concat(width, " ").concat($(icon).height() / 1.25, "L").concat(width, " ").concat($(icon).height(), "L0 ").concat($(icon).height(), "L0 ").concat($(icon).height() / 1.21, "Z"));
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
  var container = $(this).closest(".sheme__sliders_tab");
  var draggable = $(container).find(".drag");
  var scale = $(draggable).css("scale") !== "none" ? $(draggable).css("scale") : 1;
  var dragHeight = $(draggable).height();
  var dragWidth = $(draggable).width();
  if ($(this).hasClass("inc")) {
    dragHeight += dragHeight * 0.2 - 8;
    dragWidth = dragHeight * 1.8;
    scale = +scale + 0.2;
    $(draggable).css({
      scale: "".concat(scale)
    });
  } else if ($(this).hasClass("dec")) {
    dragHeight -= dragHeight * 0.2 - 8;
    dragWidth = dragHeight * 1.8;
    scale = scale > 1 ? scale - 0.2 : 1;
    $(draggable).css({
      scale: "".concat(scale)
    });
  }
});
$(document).on("click", ".load_more", function () {
  var targetContainer = $(".events__content").not(".cancel_content"),
    //  Контейнер, в котором хранятся элементы
    url = $(".load_more").attr("data-url"); //  URL, из которого будем брать элементы
  if (url !== undefined) {
    $.ajax({
      type: "GET",
      url: url,
      dataType: "html",
      success: function success(data) {
        //  Удаляем старую навигацию
        $(".events__more").remove();
        var elements = $(data).find(".events__content").not(".cancel_content").find(".events__content_row"),
          //  Ищем элементы
          pagination = $(data).find(".events__more.pagination"); //  Ищем навигацию
        targetContainer.append(elements); //  Добавляем посты в конец контейнера
        $(targetContainer).find(".events__content_row").each(function (i, item) {
          $(item).attr("id", "events_row_".concat(i));
          $(item).find(".events__date").attr("data-scroll-target", "#events_row_".concat(i));
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
$(document).on("click", ".load_more_news", function () {
  var targetContainer = $("#events__content").not(".cancel_content"),
    //  Контейнер, в котором хранятся элементы
    url = $(".load_more_news").attr("data-url"); //  URL, из которого будем брать элементы
  if (url !== undefined) {
    $.ajax({
      type: "GET",
      url: url,
      dataType: "html",
      success: function success(data) {
        //  Удаляем старую навигацию
        $(".events__more").remove();
        var elements = $(data).find(".news__slide"),
          //  Ищем элементы
          pagination = $(data).find(".events__more"); //  Ищем навигацию
        targetContainer.find(".news__list").append(elements); //  Добавляем посты в конец контейнера
        targetContainer.append(pagination); //  добавляем навигацию следом
        // window.scroll.update();
      }
    });
  }
});
$(document).on("click", ".load_more_search", function () {
  var targetContainer = $("#events__content"); //  Контейнер, в котором хранятся элементы
  var searchForm = $(".search__form_content");
  var url = location.origin + $(".load_more_search").attr("data-url"); //  URL, из которого будем брать элементы
  var searchUrl = new URL(url);
  if (!searchUrl.searchParams.get("where")) {
    var where = $(searchForm).find("input[name=where]:checked").val();
    searchUrl.searchParams.set("where", where);
  }
  if (url !== undefined) {
    $.ajax({
      type: "GET",
      url: searchUrl,
      dataType: "html",
      success: function success(data) {
        targetContainer.find(".events__more").remove();
        var elements = $(data).find(".search_item"),
          //  Ищем элементы
          pagination = $(data).find(".events__more"); //  Ищем навигацию
        targetContainer.find(".search__result").append(elements); //  Добавляем посты в конец контейнера
        targetContainer.append(pagination); //  добавляем навигацию следом
        if ($(targetContainer).find(".events__content_row").length) {
          $(targetContainer).find(".events__content_row").each(function (i, item) {
            $(item).attr("id", "events_row_".concat(i));
            $(item).find(".events__date").attr("data-scroll-target", "#events_row_".concat(i));
          });
        }
      }
    });
  }
});
$(document).on("click", ".load_more_docks", function () {
  var targetContainer = $("#events__content").not(".cancel_content"),
    //  Контейнер, в котором хранятся элементы
    url = $(".load_more_docks").attr("data-url"); //  URL, из которого будем брать элементы
  if (url !== undefined) {
    $.ajax({
      type: "GET",
      url: url,
      dataType: "html",
      success: function success(data) {
        $(".events__more").remove();
        var elements = $(data).find(".docs__item"); //  Ищем элементы

        pagination = $(data).find(".events__more"); //  Ищем навигацию
        targetContainer.find(".docs__list").append(elements); //  Добавляем посты в конец контейнера
        targetContainer.append(pagination); //  добавляем навигацию следом
      }
    });
  }
});
$(document).on("click", ".btn_popup_show", function () {
  var target = $(this).data("target");
  $(target).addClass("show");
});
$(document).on("click", ".btn_popup_close", function () {
  $(this).closest(".location__popup").removeClass("show");
});
$(document).on("click", ".search-popup-el-name", function () {
  $(".search__form_content").find("input.search-suggest").val($(this).text());
  $(".search__form_content").find(".submit_btn").click();
});
var ease = {
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
$(document).on("click", ".dropdown__value", function (e) {
  var dropdown = this.closest(".dropdown");
  $(".dropdown").each(function (ind, drop) {
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
  var _this3 = this;
  var dropdown = $(this).closest(".dropdown-slider");
  $(".dropdown-slider").each(function (ind, drop) {
    if (!$(_this3).closest($(drop)).length) {
      $(drop).removeClass("active");
    }
  });
  $(dropdown).toggleClass("active");
});

// // Скролл вверх страницы по клику кнопки в футере

$(document).on("click", ".scroll_top_btn", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// // Dropdown

$(document).on("click", ".dropdown__item", function (e) {
  var dropdown = $(this).closest(".dropdown");
  var value = $(this).find(".value").text();
  var inputVal = $(this).find("input").val();
  var form = $(".aparts__filter_form");
  var formContainer = $(form).closest(".aparts__filter");
  if ($(dropdown).closest(".aparts__filter_control").length) {
    $(form).find("input[name=sortby]").val(inputVal);
    $(form).trigger("submit");
  }
  $(dropdown).find(".dropdown__value>.value").text(value);
  $(dropdown).removeClass("active");
});
$(document).on("click", ".dropdown-slider__item", function () {
  var dropdown = $(this).closest(".dropdown-slider");
  var value = $(this).find(".value").text();
  $(dropdown).find(".dropdown-slider__value>.value").text(value);
  $(dropdown).removeClass("active");
});
$(document).on("click", ".events__nav_tool", function (e) {
  var _this4 = this;
  gsap.defaults({
    ease: "none"
  });
  $(".events__nav_tool").prop("disabled", true);
  var timeline = gsap.timeline();
  $(".btn_filter").removeClass("active");
  $(".events__filter").each(function (i, item) {
    if ($(item).attr("id") != $(_this4).data("target").replace("#", "")) {
      $(item).removeClass("open");
      // window.scroll.update();
      window.scroll.start();
    } else {
      var targetEl = $(_this4).data("target");
      $(e.currentTarget).addClass("active");
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
        $(".events__nav_tool").prop("disabled", false);
      });
      if (!$(targetEl).hasClass("open")) {
        $(targetEl).addClass("open");
        // window.scroll.update();
        window.scroll.start();
        timeline.to(targetEl, {
          maxHeight: $(targetEl).find(".form").innerHeight(),
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
          $(".events__nav_tool").prop("disabled", false);
        });
      } else {
        $(e.currentTarget).removeClass("active");
        $(targetEl).removeClass("open");
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
          $(".events__nav_tool").prop("disabled", false);
        });
      }
    }
  });
});
$(document).on("click", function (e) {
  if (!e.target.closest(".dropdown")) {
    $(".dropdown").removeClass("active");
  }
});

// // Мобильное меню

// темная тема

var date = new Date();
var time = date.getHours();
if (!localStorage.hasOwnProperty("colorTheme")) {
  // //console.log(time);
  if (!$("body").hasClass("dark")) {
    if (time >= 19) {
      $("body").addClass("dark");
    } else if (time > 7) {
      $("body").removeClass("dark");
    }
  }
} else if (localStorage.colorTheme === "light") {
  $("body").removeClass("dark");
  document.cookie = "BITRIX_SM_theme=light";
  $(".head__theme input").prop("checked", false);
} else if (localStorage.colorTheme === "dark") {
  $("body").addClass("dark");
  document.cookie = "BITRIX_SM_theme=dark";
  $(".head__theme input").prop("checked", true);
}

// // For jQuery
$(document).on("click", ".copy_buffer", function () {
  var _this5 = this;
  navigator.clipboard.writeText(this.dataset.url);
  $(this).find(".hint").addClass("show");
  setTimeout(function () {
    $(_this5).find(".hint").removeClass("show");
  }, 1500);
});
$(document).on("click", ".btn_play", function () {
  var cont = this.closest(".video_container");
  var video = cont.querySelector("video");
  video.play();
  $(this).hide();
});
$(document).on("click", ".mobile__nav_btn", function () {
  var navEl = $(this).closest(".mobile__nav");
  var subList = $(navEl).find(".mobile__nav_sublist");
  $(subList).addClass("active");
});
$(document).on("click", ".mobile__nav_sublist .mobile__nav_title", function () {
  var navEl = $(this).closest(".mobile__nav_sublist");
  $(navEl).removeClass("active");
});

// // accordion

$(document).on("click", ".accordion__title", function () {
  var accItem = this.closest(".accordion__item");
  if (!$(accItem).hasClass("active")) {
    $(accItem).addClass("active");
    $(this).addClass("active");
    $(accItem).find(".accordion__content").css({
      "max-height": $(accItem).find(".accordion__content_desc").innerHeight() + "px"
    });
  } else {
    $(accItem).removeClass("active");
    $(this).removeClass("active");
    $(accItem).find(".accordion__content").css({
      "max-height": "0px"
    });
  }
});
$(document).on("click", ".contacts__col .accordion_btn", function () {
  var accItem = $(this).closest(".contacts__col");
  if (!$(accItem).hasClass("active")) {
    $(accItem).addClass("active");
    $(accItem).find(".contacts__col_bottom").css({
      "max-height": $(accItem).find(".contacts__col_list").innerHeight() + "px"
    });
  } else {
    $(accItem).removeClass("active");
    $(accItem).find(".contacts__col_bottom").css({
      "max-height": "0px"
    });
  }
});
$(document).on("focus", "input[type=text], input[type=email], input[type=tel], textarea", function (e) {
  var label = $(this).closest("label");
  var placeholder = $(label).find(".placeholder");
  $(placeholder).addClass("active");
});
$(document).on("blur", "input[type=text], input[type=email], input[type=tel], textarea", function (e) {
  var label = $(this).closest("label");
  var placeholder = $(label).find(".placeholder");
  if (!$(this).val()) {
    $(placeholder).removeClass("active");
  }
});
$(document).on("mousemove", ".mobile", function (e) {
  $("#mobile_vawe").css({
    left: e.clientX + "px"
  });
});

// // popup

$(document).on("click", ".popup_open", function () {
  var target = $(this).data("target");
  var popup = $(target);
  var popupContent = $(popup).find(".popup__content");
  $("body").addClass("hidden");
  var timeLine = gsap.timeline();
  timeLine.to($(target), {
    opacity: 1,
    visibility: "visible",
    duration: 0.1,
    ease: "power1.out"
  }).to($(popupContent), {
    translateX: 0,
    duration: 0.1,
    ease: "power1.out"
  }).then(function () {
    scroll.stop();
  });
});
(function () {
  Typograf.addRule({
    name: "common/other/typographicSmallerNames",
    handler: function handler(text) {
      return text.replace(/([А-ЯЁ]\.)\s+([А-ЯЁ]\.)/g, "$1&nbsp;$2");
    }
  });
  Typograf.addRule({
    name: "common/other/typographicSmallNames",
    handler: function handler(text) {
      return text.replace(/([А-ЯЁ][а-яё]{0,2}\.)\s+([А-ЯЁ]\.)\s+([А-Я][а-я]+)/g, "$1&nbsp;$2&nbsp;$3");
    }
  });
  Typograf.addRule({
    name: "common/other/typographicNdashToMdash",
    handler: function handler(text) {
      return text.replace(/\s+(-)\s+/g, "&nbsp;&mdash; ");
    }
  });
  var tp = new Typograf({
    locale: ["ru", "en-US"]
  });
  tp.setSetting("common/punctuation/quote", "ru", {
    left: "«",
    right: "»",
    removeDuplicateQuotes: false
  });
  var elems = document.querySelectorAll("h1,h2,h3,h4,h5,h6,p,li,b");
  var _iterator6 = _createForOfIteratorHelper(elems),
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
$(document).on("mouseover", ".events__item:first-child", function () {
  var row = $(this).closest(".events__content_row");
  $(row).addClass("hover");
});
$(document).on("mouseout", ".events__item:first-child", function () {
  var row = $(this).closest(".events__content_row");
  $(row).removeClass("hover");
});
$(document).on("submit", ".ajax_form.subscribe_form ", function (e) {
  var form = this;
  e.preventDefault();
  var action = $(this).attr("action");
  var formData = $(this).serialize();
  $.ajax({
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
      var formMessage = $("<div class='form-message'>".concat(response.response.msg.message, "</div>"));
      $(form).find(".form_success_title h2").text(response.response.msg.message);
      if (response.err_code != 0) {
        setTimeout(function () {
          formMessage.hide();
          formMessage.remove();
        }, 5000);
      }
    }
  });
});
$(document).on("click", ".popup", function (e) {
  if (!e.target.closest(".popup__content") || e.target.closest(".popup_close")) {
    $("body").removeClass("hidden");
    $(this).find(".form_success").removeClass("show");
    $(this).find("form").trigger("reset");
    var timeLine = gsap.timeline();
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

/***/ }),

/***/ 9382:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _assets_js_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6321);
/* harmony import */ var _assets_js_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_js_index_js__WEBPACK_IMPORTED_MODULE_0__);


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.O(undefined, [859], function() { return __webpack_require__(4859); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [859], function() { return __webpack_require__(9382); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;