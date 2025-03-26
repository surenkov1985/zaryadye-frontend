export async function loadScript(src, func = false) {
	const script = document.createElement("script");
	script.src = src;
	document.body.append(script);
	if (func) script.onload = () => func();
}

export function setMap() {
	let mapContainers = document.querySelectorAll(".map");

	if (mapContainers.length === 0) return;

	const script = document.createElement("script");
	script.src = "../local/templates/zaryadyehall/assets/libs/buildYaMaps/script.js";
	document.body.append(script);
	try {
		ymaps.ready(() => {
			for (let mapContainer of mapContainers) {
				let id = mapContainer.getAttribute("id"),
					data = mapContainer.dataset,
					mapCoord = JSON.parse(data.coord),
					mapZoom = data.zoom,
					mapTitle = data.title,
					
					// mapCoord2 = JSON.parse(data.coord2),
					// mapTitle2 = data.title2,
					mapCenter = ["55.75157862329463", "37.62489788352945"],
					map = null,
					pin = null,
					ZoomLayout = null,
					zoomControl = null,
					ButtonLayout = null,
					button = null,
					geolocation = ymaps.geolocation;
				(map = new ymaps.Map(id, {
					center: mapCoord,
					zoom: mapZoom,
					controls: [],
				})),
					(pin = new ymaps.Placemark(
						mapCoord,
						{
							hintContent: mapTitle,
						},
						{
							iconLayout: "default#image",
							iconImageHref: "/local/templates/zaryadyehall/assets/img/placemark.png",
							iconImageSize: [170, 190],
							iconImageOffset: [-90, -120],
						}
					));

				map.behaviors.disable(["scrollZoom"]);
				map.geoObjects.add(pin);
				// setMapCenter();
				function setMapCenter() {
					map.setCenter(mapCenter);

					if (!mapContainer.closest(".contacts")) {
						const centerCoord = map.getGlobalPixelCenter();

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

				(ZoomLayout = ymaps.templateLayoutFactory.createClass(
					[
						'<div class="map__controls section">',
						'<div class="container">',
						'<div class="sheme__sliders_scaler">',
						'<button id="zoom-in" class="btn btn_white btn_slider btn_splus inc">',
						'<svg width="19.000000" height="19.000000" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">',
						'<path d="M9.5 0C9.77612 0 10 0.223877 10 0.5L10 9L18.5 9C18.7761 9 19 9.22388 19 9.5C19 9.77612 18.7761 10 18.5 10L10 10L10 18.5C10 18.7761 9.77612 19 9.5 19C9.22388 19 9 18.7761 9 18.5L9 10L0.5 10C0.223877 10 0 9.77612 0 9.5C0 9.22388 0.223877 9 0.5 9L9 9L9 0.5C9 0.223877 9.22388 0 9.5 0Z" fill="currentColor" fill-opacity="1.000000" fill-rule="evenodd"></path>',
						"</svg>",
						"</button>",
						'<button id="zoom-out" class="btn btn_white btn_slider btn_minus dec">',
						'<svg width="19.000000" height="1.000000" viewBox="0 0 19 1" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">',
						'<path d="M0 0.5C0 0.223877 0.223877 0 0.5 0L18.5 0C18.7761 0 19 0.223877 19 0.5C19 0.776123 18.7761 1 18.5 1L0.5 1C0.223877 1 0 0.776123 0 0.5Z" fill="currentColor" fill-opacity="1.000000" fill-rule="evenodd"></path>',
						"</svg>",
						"</button>",
						"</div>",
						"</div>",
						"</div>",
					].join(""),
					{
						// Переопределяем методы макета, чтобы выполнять дополнительные действия
						// при построении и очистке макета.
						build: function () {
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

						clear: function () {
							// Снимаем обработчики кликов.
							$("#zoom-in").unbind("click", this.zoomInCallback);
							$("#zoom-out").unbind("click", this.zoomOutCallback);

							// Вызываем родительский метод clear.
							ZoomLayout.superclass.clear.call(this);
						},

						zoomIn: function () {
							var map = this.getData().control.getMap();
							map.setZoom(map.getZoom() + 1, { checkZoomRange: true });
						},

						zoomOut: function () {
							var map = this.getData().control.getMap();
							map.setZoom(map.getZoom() - 1, { checkZoomRange: true });
						},
					}
				)),
					(zoomControl = new ymaps.control.ZoomControl({ options: { layout: ZoomLayout } }));

				// map.controls.add(zoomControl);

				(ButtonLayout = ymaps.templateLayoutFactory.createClass(
					[
						'<div class="map__controls section">',
						'<div class="container">',
						'<div class="map__controls_row">',
						'<button class="btn btn_white btn_slider btn_size">',
						'<svg id="size" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">',
						'<g id="arr-top" >',
						'<path d="M20.6665 4H28.6665V12" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>',
						'<path d="M28.6665 4L19.3331 13.3333" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>',
						"</g>",
						'<g id="arr-bottom">',
						'<path d="M12.6665 28H4.6665V20" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>',
						'<path d="M4.6665 28L13.9998 18.6666" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>',
						"</g>",
						"</svg>",
						"</button>",
						"</div>",
						'<div class="sheme__sliders_scaler">',
						'<button id="zoom-in" class="btn btn_white btn_slider btn_splus inc">',
						'<svg width="19.000000" height="19.000000" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">',
						'<path d="M9.5 0C9.77612 0 10 0.223877 10 0.5L10 9L18.5 9C18.7761 9 19 9.22388 19 9.5C19 9.77612 18.7761 10 18.5 10L10 10L10 18.5C10 18.7761 9.77612 19 9.5 19C9.22388 19 9 18.7761 9 18.5L9 10L0.5 10C0.223877 10 0 9.77612 0 9.5C0 9.22388 0.223877 9 0.5 9L9 9L9 0.5C9 0.223877 9.22388 0 9.5 0Z" fill="currentColor" fill-opacity="1.000000" fill-rule="evenodd"></path>',
						"</svg>",
						"</button>",
						'<button id="zoom-out" class="btn btn_white btn_slider btn_minus dec">',
						'<svg width="19.000000" height="1.000000" viewBox="0 0 19 1" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">',
						'<path d="M0 0.5C0 0.223877 0.223877 0 0.5 0L18.5 0C18.7761 0 19 0.223877 19 0.5C19 0.776123 18.7761 1 18.5 1L0.5 1C0.223877 1 0 0.776123 0 0.5Z" fill="currentColor" fill-opacity="1.000000" fill-rule="evenodd"></path>',
						"</svg>",
						"</button>",
						"</div>",
						'<div class="map__controls_row">',
						'<button id="openInYaMaps" class="btn btn_white btn_calendar btn_splus inc">',
						'<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">',
						'<circle cx="16.6667" cy="15.3333" r="2.66667" stroke="currentColor" stroke-width="1.33333"/>',
						'<path d="M16.6667 30L24 22.6666C28.0501 18.6165 28.0501 12.05 24 7.99996C19.9499 3.94987 13.3834 3.94987 9.33333 7.99996C5.28324 12.05 5.28324 18.6165 9.33333 22.6666L16.6667 30Z" stroke="currentColor" stroke-width="1.33333" stroke-linejoin="round"/>',
						"</svg>",
						"<span>Открыть в Яндекс.Картах</span>",
						"</button>",
						'<button class="btn btn_white btn_slider btn_geo">',
						'<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">',
						'<path d="M27.3331 16C27.3331 21.8911 22.5575 26.6667 16.6664 26.6667M27.3331 16C27.3331 10.109 22.5575 5.33337 16.6664 5.33337M27.3331 16H23.3331M16.6664 26.6667C10.7754 26.6667 5.99976 21.8911 5.99976 16M16.6664 26.6667V22.6667M5.99976 16C5.99976 10.109 10.7754 5.33337 16.6664 5.33337M5.99976 16H9.99976M16.6664 5.33337V9.33337" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>',
						"</svg>",
						"</button>",
						"</div>",
						"</div>",
						"</div>",
					].join(""),
					{
						build: function () {
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

						clear: function () {
							// Снимаем обработчики кликов.
							$("#zoom-in").unbind("click", this.zoomInCallback);
							$("#zoom-out").unbind("click", this.zoomOutCallback);
							$(".btn_geo").unbind("click", this.getGeolocationCallback);
							$(".btn_size").unbind("click", this.enterFullscreenCallback);

							// Вызываем родительский метод clear.
							ZoomLayout.superclass.clear.call(this);
						},

						zoomIn: function () {
							var map = this.getData().control.getMap();
							map.setZoom(map.getZoom() + 1, { checkZoomRange: true });
						},

						zoomOut: function () {
							var map = this.getData().control.getMap();
							map.setZoom(map.getZoom() - 1, { checkZoomRange: true });
						},
						enterFullscreen: function () {
							if (!!map.container.isFullscreen()) {
								$(".btn_size").removeClass("active");
								map.container.exitFullscreen();
							} else {
								map.container.enterFullscreen();
								$(".btn_size").addClass("active");
							}
						},

						openInYaMaps: function () {
							let mapCenter = ["55.75157862329463", "37.62489788352945"];
							const yandexMapsUrl = `https://yandex.ru/maps/?ll=${mapCoord[1]},${mapCoord[0]}&z=17&l=map&pt=${mapCoord[1]},${mapCoord[0]},pm2bl`;
							window.open(yandexMapsUrl, "_blank");
						},
						getGeolocation: function () {
							geolocation
								.get({
									provider: "yandex",
									// mapStateAutoApply: true,
									autoReverseGeocode: false,
								})
								.then(function (result) {
									// Красным цветом пометим положение, вычисленное через ip.
									result.geoObjects.options.set("preset", "islands#redCircleIcon");
									result.geoObjects.get(0).properties.set({
										balloonContentBody: "Мое местоположение",
									});
									map.geoObjects.add(result.geoObjects);
									map.setCenter(result.geoObjects.get(0).geometry.getCoordinates(), 17, { duration: 300 });
									// var myMap = this.getData().control.getMap();
									// myMap.setZoom(17, { checkZoomRange: true });
								});
						},
					}
				)),
					(button = new ymaps.control.Button({
						options: {
							layout: ButtonLayout,
						},
					}));

				map.controls.add(button, {
					position: {
						right: 0,
						top: 0,
					},
				});
			}
		});
	} catch (e) {
		console.log("Yandex Map is not initiated");
	}
}
export const ease = {
	exponentialIn: (t) => {
		return t == 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
	},
	exponentialOut: (t) => {
		return t == 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
	},
	exponentialInOut: (t) => {
		return t == 0.0 || t == 1.0 ? t : t < 0.5 ? +0.5 * Math.pow(2.0, 20.0 * t - 10.0) : -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0;
	},
	sineOut: (t) => {
		const HALF_PI = 1.5707963267948966;
		return Math.sin(t * HALF_PI);
	},
	circularInOut: (t) => {
		return t < 0.5 ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t)) : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
	},
	cubicIn: (t) => {
		return t * t * t;
	},
	cubicOut: (t) => {
		const f = t - 1.0;
		return f * f * f + 1.0;
	},
	cubicInOut: (t) => {
		return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
	},
	quadraticOut: (t) => {
		return -t * (t - 2.0);
	},
	quarticOut: (t) => {
		return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
	},
};
export class ShapeOverlays {
	themeShape = document.querySelector(".shape-overlays-theme");
	themePath = this.themeShape.querySelectorAll("path");

	constructor(elm) {
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
		for (let i = 0; i < this.numPoints; i++) {
			this.delayPointsArray[i] = Math.random() * this.delayPointsMax;
		}
	}

	toggle() {
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
	themeToggle() {

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
	open(withTheme = false) {
		this.isOpened = true;
		this.elm.classList.add("is-opened");

		if (withTheme) {
			this.isThemeShapeOpened = true;
			this.themeShape.classList.add("is-opened");
		}
		// this.timeStart = Date.now();
		this.renderLoop(withTheme);
	}
	close(withTheme = false) {
		this.isOpened = false;
		this.elm.classList.remove("is-opened");

		if (withTheme) {
			this.isThemeShapeOpened = false;
			this.themeShape.classList.remove("is-opened");
		}
		// this.timeStart = Date.now();
		this.renderLoop(withTheme);
	}
	updatePath(time, withTheme = false) {
		const points = [];
		const themePoints = [];
		const width = Math.max(window.innerWidth, window.innerHeight);
		for (let i = 0; i < this.numPoints; i++) {
			const myEase = Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1);
			// points[i] = (1 - ease.cubicIn(myEase)) * 100;
			// if (withTheme) {
			// 	themePoints[i] = (1 - ease.cubicIn(myEase)) * 1;
			// }
			const thisEase = i % 2 === 1 ? ease.sineOut : ease.exponentialInOut;
			points[i] = (1 - thisEase(myEase)) * 100;
			if (withTheme) {
				themePoints[i] = 1 - thisEase(myEase);
			}
		}

		let str = "";
		let themeStr = "";
		str += this.isOpened ? `M 0 0 V ${points[0]}` : `M 0 ${points[0]}`;
		themeStr += this.isOpened ? `M 0 0 V ${themePoints[0]}` : `M 0 ${themePoints[0]}`;
		for (let i = 0; i < this.numPoints - 1; i++) {
			const p = ((i + 1) / (this.numPoints - 1)) * 100;
			const cp = p - ((1 / (this.numPoints - 1)) * 100) / 2;
			str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
			if (withTheme) {
				const p = (i + 1) / (this.numPoints - 1);
				const cp = p - 1 / (this.numPoints - 1) / 2;
				themeStr += `C ${cp} ${themePoints[i]} ${cp} ${themePoints[i + 1]} ${p} ${themePoints[i + 1]} `;
			}
		}

		str += this.isOpened ? `V 100 H 0` : `V 0 H 0`;
		themeStr += this.isOpened ? `V 1 H 0` : `V 0 H 0`;

		return { str, themeStr };
	}
	render(withTheme = false) {
		if (this.isOpened) {
			for (var i = 0; i < this.path.length; i++) {
				const time = Date.now();
				const attrToTime = this.setPathAttr(time, i);
				const { str, themeStr } = this.updatePath(attrToTime, withTheme);

				this.path[i].setAttribute("d", str);

				if (withTheme) {
					this.themePath[i].setAttribute("d", themeStr);
				}
			}
		} else {
			for (var i = 0; i < this.path.length; i++) {
				const time = Date.now();
				// const attrToTime = time - (this.timeStart + this.delayPerPath * (this.path.length - i - 1));
				const attrToTime = time - (this.timeStart + this.delayPerPath * i);
				const { str, themeStr } = this.updatePath(attrToTime, withTheme);
				this.path[i].setAttribute("d", str);
				if (withTheme) {
					this.themePath[i].setAttribute("d", themeStr);
				}
			}
		}
	}
	renderLoop(withTheme = false) {
		this.render(withTheme);
		if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
			requestAnimationFrame(() => {
				this.renderLoop(withTheme);
			});
		} else {
			setTimeout(() => {
				this.isAnimating = false;
			}, 700);
		}
	}
	openTheme() {
		this.isThemeShapeOpened = true;
		this.themeShape.classList.add("is-opened");

		this.renderThemeLoop();
	}
	closeTheme() {
		this.isThemeShapeOpened = false;
		this.themeShape.classList.remove("is-opened");

		this.renderThemeLoop();
	}
	updateThemePath(time) {
		const points = [];
		for (let i = 0; i < this.numPoints; i++) {
			// points[i] = (1 - ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1))) * 1;
			const thisEase = i % 2 === 1 ? ease.sineOut : ease.exponentialInOut;

			points[i] = 1 - thisEase(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1));
		}

		let str = "";
		str += this.isThemeShapeOpened ? `M 0 0 V ${points[0]}` : `M 0 ${points[0]}`;
		for (let i = 0; i < this.numPoints - 1; i++) {
			const p = (i + 1) / (this.numPoints - 1);
			const cp = p - 1 / (this.numPoints - 1) / 2;
			str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
		}
		str += this.isThemeShapeOpened ? `V ${1} H 0` : `V 0 H 0`;
		return str;
	}
	renderTheme() {
		if (this.isThemeShapeOpened) {
			for (var i = 0; i < this.themePath.length; i++) {
				const attrToTime = this.setPathAttr(Date.now(), i);
				this.themePath[i].setAttribute("d", this.updateThemePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
			}
		} else {
			for (var i = 0; i < this.themePath.length; i++) {
				this.themePath[i].setAttribute(
					"d",
					this.updateThemePath(Date.now() - (this.timeStart + this.delayPerPath * (this.themePath.length - i - 1)))
				);
			}
		}
	}
	setPathAttr(time, i) {
		return time - (this.timeStart + this.delayPerPath * i);
	}
	renderThemeLoop() {
		this.renderTheme();
		if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
			requestAnimationFrame(() => {
				this.renderThemeLoop();
			});
		} else {
			setTimeout(() => {
				this.isThemeShapeAnimating = false;
			}, 500);
		}
	}
}

class _ShapeOverlays {
	themeShape = document.querySelector(".shape-overlays-theme");
	themePath = this.themeShape.querySelectorAll("path");

	constructor(elm) {
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

	toggle() {

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
	themeToggle() {

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
	open(withTheme = false) {
		this.isOpened = true;
		this.elm.classList.add("is-opened");

		if (withTheme) {
			this.isThemeShapeOpened = true;
			this.themeShape.classList.add("is-opened");
		}
		// this.timeStart = Date.now();
		this.renderLoop(withTheme);
	}
	close(withTheme = false) {
		this.isOpened = false;
		this.elm.classList.remove("is-opened");

		if (withTheme) {
			this.isThemeShapeOpened = false;
			this.themeShape.classList.remove("is-opened");
		}
		// this.timeStart = Date.now();
		this.renderLoop(withTheme);
	}
	updatePath(time, withTheme = false) {
		const points = [];
		const themePoints = [];
		const width = Math.max(window.innerWidth, window.innerHeight);
		for (var i = 0; i < this.numPoints; i++) {
			const myEase = Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1);
			points[i] = (1 - ease.cubicIn(myEase)) * 100;
			if (withTheme) {
				themePoints[i] = (1 - ease.cubicIn(myEase)) * 1;
			}
		}

		let str = "";
		let themeStr = "";
		str += this.isOpened ? `M 0 0 V ${points[0]}` : `M 0 ${points[0]}`;
		themeStr += this.isOpened ? `M 0 0 V ${themePoints[0]}` : `M 0 ${themePoints[0]}`;
		for (var i = 0; i < this.numPoints - 1; i++) {
			const p = ((i + 1) / (this.numPoints - 1)) * 100;
			const cp = p - ((1 / (this.numPoints - 1)) * 100) / 2;
			str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
			if (withTheme) {
				const p = ((i + 1) / (this.numPoints - 1)) * 1;
				const cp = p - ((1 / (this.numPoints - 1)) * 1) / 2;
				themeStr += `C ${cp} ${themePoints[i]} ${cp} ${themePoints[i + 1]} ${p} ${themePoints[i + 1]} `;
			}
		}

		str += this.isOpened ? `V 100 H 0` : `V 0 H 0`;
		themeStr += this.isOpened ? `V ${1} H 0` : `V 0 H 0`;

		return { str, themeStr };
	}
	render(withTheme = false) {
		if (this.isOpened) {
			for (var i = 0; i < this.path.length; i++) {
				const time = Date.now();
				const attrToTime = this.setPathAttr(time, i);
				const { str, themeStr } = this.updatePath(attrToTime, withTheme);

				this.path[i].setAttribute("d", str);

				if (withTheme) {
					this.themePath[i].setAttribute("d", themeStr);
				}
			}
		} else {
			for (var i = 0; i < this.path.length; i++) {
				const time = Date.now();
				const attrToTime = time - (this.timeStart + this.delayPerPath * (this.path.length - i - 1));
				const { str, themeStr } = this.updatePath(attrToTime, withTheme);
				this.path[i].setAttribute("d", str);
				if (withTheme) {
					this.themePath[i].setAttribute("d", themeStr);
				}
			}
		}
	}
	renderLoop(withTheme = false) {
		this.render(withTheme);
		if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
			requestAnimationFrame(() => {
				this.renderLoop(withTheme);
			});
		} else {
			setTimeout(() => {
				this.isAnimating = false;
			}, 1000);
		}
	}
	openTheme() {
		this.isThemeShapeOpened = true;
		this.themeShape.classList.add("is-opened");

		this.renderThemeLoop();
	}
	closeTheme() {
		this.isThemeShapeOpened = false;
		this.themeShape.classList.remove("is-opened");

		this.renderThemeLoop();
	}
	updateThemePath(time) {
		const points = [];
		for (var i = 0; i < this.numPoints; i++) {
			points[i] = (1 - ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1))) * 1;
		}

		let str = "";
		str += this.isThemeShapeOpened ? `M 0 0 V ${points[0]}` : `M 0 ${points[0]}`;
		for (var i = 0; i < this.numPoints - 1; i++) {
			const p = ((i + 1) / (this.numPoints - 1)) * 1;
			const cp = p - ((1 / (this.numPoints - 1)) * 1) / 2;
			str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
		}
		str += this.isThemeShapeOpened ? `V ${1} H 0` : `V 0 H 0`;
		return str;
	}
	renderTheme() {
		if (this.isThemeShapeOpened) {
			for (var i = 0; i < this.themePath.length; i++) {
				const attrToTime = this.setPathAttr(Date.now(), i);
				this.themePath[i].setAttribute("d", this.updateThemePath(Date.now() + 70 - (this.timeStart + this.delayPerPath * i)));
			}
		} else {
			for (var i = 0; i < this.themePath.length; i++) {
				this.themePath[i].setAttribute(
					"d",
					this.updateThemePath(Date.now() + 40 - (this.timeStart + this.delayPerPath * (this.themePath.length - i - 1)))
				);
			}
		}
	}
	setPathAttr(time, i) {
		return time - (this.timeStart + this.delayPerPath * i);
	}
	renderThemeLoop() {
		this.renderTheme();
		if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
			requestAnimationFrame(() => {
				this.renderThemeLoop();
			});
		} else {
			setTimeout(() => {
				this.isThemeShapeAnimating = false;
			}, 500);
		}
	}
}

export function phoneMask(e) {
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
}

export function formatValueInput(elem, regexp) {
	let str = elem.value.replace(regexp, "");

	return str;
}

export function testValue(elem, reg, string) {
	if ($(elem).attr("data-reg") === "true") {
		let str = $(elem).val();
		let errElem = $(elem).closest("label").find("span.error");

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

export function maskedEmail(elem) {
	let regexp = /[^\w-@\.]/gi;
	let str = elem.value.replace(regexp, "");
	if (!/[\w-]/g.test(str)) {
		str = str.replace(/@/, "");
	}
	if (str.match(/@/g) && str.match(/@/g).length > 1) {
		str = str.slice(0, -1);
	}
	return str;
}

export function validationFormFields(formEl) {
	const form = $(formEl);
	const inputs = $(form).find("input[data-test]");
	const testInputs = $(form).find("input[data-test=true]");
	// console.log(inputs, testInputs.length);
	// if (inputs.length === testInputs.length) {
	// 	$(form).find("input[type=submit]").attr("disabled", false);
	// } else {
	// 	$(form).find("input[type=submit]").attr("disabled", true);
	// }
}
