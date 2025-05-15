// !function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/prog/",o(o.s=0)}([function(e,t,o){e.exports=o(1)},function(e,t,o){window.UPLAB_LOAD_LIBS=!0,o.p=o.p||"/";document.addEventListener("DOMContentLoaded",(function(){"undefined"==typeof jQuery?console.error("jQuery undefined"):o(2)}))},function(e,t){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,r(n.key),n)}}function r(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==o(t)?t:t+""}var a=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.init()},(t=[{key:"ajaxReplaceContent",value:function(e){var t,o=(e=e||{}).dataAttribute,n=e.html,r=e.res||{},a=!0===e.isParseSelector;$("[data-".concat(o,"]")).each((function(i,s){var l=$(s),c=l.data(o),d=!1;if(t=!0===e.isAppend&&l.is('[data-ajax-append="true"]'),a){var u=n.find("[data-".concat(o,"='").concat(c,"']"));u.length&&(d=t?u.html():u.prop("outerHTML"))}else r.hasOwnProperty(c)&&(d=r[c]);d&&(t?l.append($(d)):l.replaceWith(d))}))}},{key:"loadContent",value:function(e){var t=this;(e=e||{}).selector=e.selector||this.AJAX_CONTENT_SEL;var o=$(e.selector);o.length?(e.isJson=!1!==e.isJson,e.isParseSelector=!0===e.isParseSelector,e.url=e.url||location.href,e.query=e.query||"",e.method=e.method||"get",e.onSuccess="function"==typeof e.onSuccess&&e.onSuccess,e.hasOwnProperty("isAppend")||(e.isAppend=!1),e.hasOwnProperty("isPrepend")||(e.isPrepend=!1),e.hasOwnProperty("isKeepHistory")||(e.isKeepHistory=!1),e.hasOwnProperty("isKeepTitle")||(e.isKeepTitle=!1),e.hasOwnProperty("isKeepH1")||(e.isKeepH1=!1),e.hasOwnProperty("isScrollOnLoad")||(e.isScrollOnLoad=!1),$(window).trigger("preloader:show",o),$.ajax({url:e.url,data:e.query,dataType:e.isJson?"json":"html",method:e.method,success:function(n){$(window).trigger("preloader:hide",o);var r,a=e.isJson?n.html:n;e.isParseSelector&&(a=(r=$("<div>").append(a)).find(e.selector).html()),a&&(e.isPrepend?o.prepend(a):e.isAppend?o.append(a):o.html(a),e.isJson&&(t.ajaxReplaceContent({dataAttribute:"ajax-replace-content",html:r||$(a),res:n,isParseSelector:e.isParseSelector,isAppend:e.isAppend}),e.isKeepHistory||history.replaceState({},"",n.url),!e.isKeepH1&&n.hasOwnProperty("h1")&&n.h1&&$("h1").html(n.h1),!e.isKeepTitle&&n.hasOwnProperty("title")&&n.title&&(document.title=n.title)),$(window).trigger("init"),window.dispatchEvent(new CustomEvent("reinit")),e.isScrollOnLoad&&o.scrollTo(),e.onSuccess&&e.onSuccess(e,n))}})):console.error("no-ajax-container")}},{key:"initHandlers",value:function(){var e=this;$(document).on("reset","[data-ajax-form-to]",(function(t){var o=$(this);e.loadContent({url:o.prop("action")||location.href,query:"",method:o.prop("method")||"post",selector:o.data("ajax-form-to"),isJson:o.data("json-content"),isParseSelector:o.data("parse-selector"),isAppend:o.data("append-content")||!1,isKeepHistory:o.data("keep-history")||!1,isScrollOnLoad:o.data("scroll-on-load")||!1})})),$(document).on("submit","[data-ajax-form-to]",(function(t){t.preventDefault();var o=$(this);o.prop("disabled",!1),e.loadContent({url:o.data("action")||o.prop("action"),query:o.serializeArray(),method:o.prop("method")||"post",selector:o.data("ajax-form-to"),isJson:o.data("json-content"),isParseSelector:o.data("parse-selector"),isAppend:o.data("append-content")||!1,isKeepHistory:o.data("keep-history")||!1,isScrollOnLoad:o.data("scroll-on-load")||!1})})),$(document).on("click","[data-ajax-link-to]",(function(t){t.preventDefault();var o=$(this);o.trigger("button:loadingStart"),e.loadContent({url:o.data("href")||this.href,query:o.data("query")||"",selector:o.data("ajax-link-to"),isJson:o.data("json-content"),isParseSelector:o.data("parse-selector"),isAppend:o.data("append-content")||!1,isKeepHistory:o.data("keep-history")||!1,isScrollOnLoad:o.data("scroll-on-load")||!1,onSuccess:function(){o.trigger("button:loadingEnd")}})})),$(document).on("click","[data-submit-form-on-click]",(function(e){e.preventDefault();var t=$(this);$(t.data("submit-form-on-click")).trigger("submit",{query:t.data("query")})})),$(window).on("init.ajax",(function(){$(window).trigger("scroll")}))}},{key:"init",value:function(){this.initHandlers()}}])&&n(e.prototype,t),o&&n(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,o}();$((function(){window.__ajaxLoaderHandler=new a}))}]);
import $ from "jquery"
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
document.addEventListener("DOMContentLoaded", function () {
	class AjaxLoadHandler {
		constructor() {
			this.init();
		}

		ajaxReplaceContent(params) {
			console.log(88);

			params = params || {};
			const dataAttribute = params.dataAttribute;
			const $html = params.html;
			const res = params.res || {};
			const isParseSelector = params.isParseSelector === true;
			let isAppend;

			$(`[data-${dataAttribute}]`).each((key, item) => {
				const $item = $(item);
				const keyValue = $item.data(dataAttribute);

				let newHtml = false;
				isAppend = params.isAppend === true && $item.is('[data-ajax-append="true"]');

				if (isParseSelector) {
					const $replaceEl = $html.find(`[data-${dataAttribute}='${keyValue}']`);
					if ($replaceEl.length) {
						newHtml = isAppend ? $replaceEl.html() : $replaceEl.prop("outerHTML");
					}
				} else {
					if (res.hasOwnProperty(keyValue)) {
						newHtml = res[keyValue];
					}
				}

				if (newHtml) {
					if (isAppend) {
						$item.append($(newHtml));
					} else {
						$item.replaceWith(newHtml);
					}
					calendarSliders()
				}
			});
		}

		loadContent(params) {
			const self = this;

			params = params || {};
			params.selector = params.selector || this.AJAX_CONTENT_SEL;

			const $loadTo = $(params.selector);

			if (!$loadTo.length) {
				return;
			}
			console.log(params.url);

			params.isJson = false;
			// params.isJson = params.isJson !== false;
			params.isParseSelector = params.isParseSelector === true;
			params.url = params.url || location.href;
			params.query = params.query || "";
			params.method = params.method || "get";
			params.onSuccess = typeof params.onSuccess === "function" ? params.onSuccess : false;
			params.hasOwnProperty("isAppend") || (params.isAppend = false);
			params.hasOwnProperty("isPrepend") || (params.isPrepend = false);
			params.hasOwnProperty("isKeepHistory") || (params.isKeepHistory = false);
			params.hasOwnProperty("isKeepTitle") || (params.isKeepTitle = false);
			params.hasOwnProperty("isKeepH1") || (params.isKeepH1 = false);
			params.hasOwnProperty("isScrollOnLoad") || (params.isScrollOnLoad = false);

			$(window).trigger("preloader:show", $loadTo);

			$.ajax({
				url: params.url,
				data: params.query,
				dataType: params.isJson ? "json" : "html",
				method: params.method,
				success: (res) => {
					$(window).trigger("preloader:hide", $loadTo);
					let html = params.isJson ? res.html : res;
					let $html;
					if (params.isParseSelector) {
						$html = $("<div>").append(html);
						html = $html.find(params.selector).html();
					}

					if (!html) return;

					if (params.isPrepend) {
						$loadTo.prepend(html);
					} else if (params.isAppend) {
						$loadTo.append(html);
					} else {
						$loadTo.html(html);
						const faq = $(res).find(".faq");
						if (faq.length) {
							// cafeSliders();
							// window.scroll.start();
						}
						if (params.url === "/event/perenosy-i-otmeny/" || params.url === "/events/reschedules-and-cancellations/") {
							$("#cancelled").hide();
						} else {
							$("#cancelled").show();
						}
					}

					if (!params.isKeepHistory) {
						history.pushState({ lastUrl: location.href }, "", params.url);
					}

					if (params.isJson) {
						self.ajaxReplaceContent({
							dataAttribute: "ajax-replace-content",
							html: $html || $(html),
							res: res,
							isParseSelector: params.isParseSelector,
							isAppend: params.isAppend,
						});

						if (!params.isKeepH1 && res.hasOwnProperty("h1") && res.h1) {
							$("h1").html(res.h1);
						}

						if (!params.isKeepTitle && res.hasOwnProperty("title") && res.title) {
							document.title = res.title;
						}
					}

					$(window).trigger("init");
					window.dispatchEvent(new CustomEvent("reinit"));

					if (params.isScrollOnLoad) {
						$loadTo.scrollTo();
					}

					if (params.onSuccess) {
						params.onSuccess(params, res);
					}
				},
			});
		}

		initHandlers() {
			const self = this;

			$(document).on("reset", "[data-ajax-form-to]", function (event) {
				const $this = $(this);

				self.loadContent({
					url: $this.prop("action") || location.href,
					query: "",
					method: $this.prop("method") || "post",
					selector: $this.data("ajax-form-to"),
					isJson: $this.data("json-content"),
					isParseSelector: $this.data("parse-selector"),
					isAppend: $this.data("append-content") || false,
					isKeepHistory: $this.data("keep-history") || false,
					isScrollOnLoad: $this.data("scroll-on-load") || false,
				});
			});

			$(document).on("submit", "[data-ajax-form-to]", function (event) {
				event.preventDefault();
				const $this = $(this);
				$this.prop("disabled", false);

				self.loadContent({
					url: $this.data("action") || $this.prop("action"),
					query: $this.serializeArray(),
					method: $this.prop("method") || "post",
					selector: $this.data("ajax-form-to"),
					isJson: $this.data("json-content"),
					isParseSelector: $this.data("parse-selector"),
					isAppend: $this.data("append-content") || false,
					isKeepHistory: $this.data("keep-history") || false,
					isScrollOnLoad: $this.data("scroll-on-load") || false,
				});
			});

			$(document).on("click", "[data-ajax-link-to]", function (event) {
				event.preventDefault();
				const $this = $(this);
				console.log(33);

				$this.trigger("button:loadingStart");

				self.loadContent({
					url: $this.data("href") || this.href,
					query: $this.data("query") || "",
					selector: $this.data("ajax-link-to"),
					isJson: $this.data("json-content"),
					isParseSelector: $this.data("parse-selector"),
					isAppend: $this.data("append-content") || false,
					isKeepHistory: $this.data("keep-history") || false,
					isScrollOnLoad: $this.data("scroll-on-load") || false,
					onSuccess: () => {
						$this.trigger("button:loadingEnd");
						calendarSliders()
						console.log(222);
					},
				});
			});

			/*
		$(document).on('change', '[data-submit-form]', function () {
		$(this).closest('form').trigger('submit');
		});*/

			$(document).on("click", "[data-submit-form-on-click]", function (event) {
				event.preventDefault();
				const $this = $(this);

				$($this.data("submit-form-on-click")).trigger("submit", {
					query: $this.data("query"),
				});
			});

			$(window).on("init.ajax", () => {
				$(window).trigger("scroll");
			});
		}

		init() {
			this.initHandlers();
		}
	}

	$(() => {
		window.__ajaxLoaderHandler = new AjaxLoadHandler();
	});
});
