<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die(); 

if((defined("ERROR_404") && ERROR_404 == "Y" && $APPLICATION->GetCurPage(true) !='/404.php'))  LocalRedirect('/404.php');

use Bitrix\Main\Page\Asset; //Подключение библиотеки для использования  Asset::getInstance()->addCss() 
// use \Local\Helper;
global $USER;
?>
<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<link rel="apple-touch-icon" sizes="57x57" href="<?=SITE_TEMPLATE_PATH?>/assets/favicon/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="<?=SITE_TEMPLATE_PATH?>/assets/favicon/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="<?=SITE_TEMPLATE_PATH?>/assets/favicon/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="<?=SITE_TEMPLATE_PATH?>/assets/favicon/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="<?=SITE_TEMPLATE_PATH?>/assets/favicon/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="<?=SITE_TEMPLATE_PATH?>/assets/favicon/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="152x152" href="<?=SITE_TEMPLATE_PATH?>/assets/favicon/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="<?=SITE_TEMPLATE_PATH?>/assets/favicon/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192" href="<?=SITE_TEMPLATE_PATH?>/assets/favicon/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="<?=SITE_TEMPLATE_PATH?>/assets/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="<?=SITE_TEMPLATE_PATH?>/assets/favicon/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="<?=SITE_TEMPLATE_PATH?>/assets/favicon/favicon-16x16.png">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="<?=SITE_TEMPLATE_PATH?>/assets/favicon/ms-icon-144x144.png">
	<meta name="theme-color" content="#ffffff">
	<link rel="shortcut icon" href="<?=SITE_TEMPLATE_PATH?>/assets/favicon/favicon.ico" type="image/x-icon">
	<?
	Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . '/assets/libs/animate/style.css');
	Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . '/assets/libs/fancybox/style.css');
	Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . '/assets/libs/swiper/swiper-bundle.css');
	Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . '/assets/libs/remodal/remodal-default-theme.css');
	Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . '/assets/libs/remodal/remodal.css');
	Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . '/assets/libs/lidrekon/style.css');
	Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . '/assets/css/fonts.css');
	Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . '/assets/css/animate.css');
	Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . '/assets/css/vars.css');
	Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . '/assets/css/general.css?'.time());
	Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . '/assets/css/global.css?'.time());
	Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . '/assets/css/layout.css?'.time());
	Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . '/assets/css/index.css?'.time());
	Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . '/assets/css/dark-theme.css?'.time());
	Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . '/assets/css/media.css?'.time());
	Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . '/assets/css/max1200.css?'.time());
	Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . '/assets/css/max991.css?'.time());
	Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . '/assets/css/max768.css?'.time());
	Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . '/assets/css/max576.css?'.time());
	Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . '/assets/css/max360.css?'.time());
	if ($APPLICATION->GetCurPage() == '/new-year-2026/') {
		$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/assets/css/ny2025.css");
		$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/assets/libs/jquery/jqueryUI.css");
	}
	CJSCore::Init(["jquery"]);
	if (CSite::InDir('/event/')) {
		?><meta type='robots' content='noindex,nofollow' /><?
	}
	?>
	<? $APPLICATION->ShowHead();  ?>
	<meta property="og:title" content="<?=$APPLICATION->ShowTitle();?>"/>
	<meta property="og:description" content="<?=$APPLICATION->ShowProperty("description");?>"/>
	<? if ($USER->IsAdmin() && $APPLICATION->GetCurPage() == '/cookies/') : ?>
		
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
		<script src="<?=SITE_TEMPLATE_PATH?>/assets/js/google-translate.js"></script>
		<script src="//translate.google.com/translate_a/element.js?cb=TranslateInit"></script>
	<? endif; ?>
	
	<script  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/2.10.1/browser/overlayscrollbars.browser.es6.min.js" integrity="sha512-bDTkSDb0/IRzL9tINJGwc2iQwmqVF3X9y7Doo7ZWvtfUM0y8Wuw1yqbYSPCBfVUBun64XIyPfXStDf9vc7cR8Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	<script src="https://cdn.jsdelivr.net/npm/simplebar@6.2.0/dist/simplebar.min.js"></script>
	<title><? $APPLICATION->ShowTitle(); ?></title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/2.10.1/styles/overlayscrollbars.css" integrity="sha512-sLlqwwvRwiiUjiUz7oYOuyO7ozyjVs+MbTP4yWI1yYdb/P9EseBDSfXnBJoEm8XAiHpFD85kYL6xJEIYPvFSdw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<script type="text/javascript">
		
		(function(d, w) {
			d.addEventListener("DOMContentLoaded", function() {
				var script = document.createElement('script');
				script.type = 'text/javascript';
				script.src = 'https://tickets.afisha.ru/wl/embed/entry.js?v=' + Date.now();
				script.async = true;
				script.onload = function() {
					w.afishaInit(function() {
						w.afishaWidget = new AfishaWidget(101, 'shows');
						console.log(w.afishaWidget );
					});
					
				};
				d.head.appendChild(script);
			}, false);
			let ticketUrl = ""

			function toggleButton() {
				for (button of document.querySelectorAll(".zh-c-concert__dates .zh-c-concert__date")) {
					button.classList.toggle("active")
				}
			}

			function toggleUrl(str) {
				console.log(str);
				ticketUrl = 'https://tickets.afisha.ru/iframe/101/api?gclid=1404449415#/place/' + str;
			}

			function openNewWin(url) {
				myWin = open(url);
			}
		})(document, window);
	</script>

	
		<? if ($APPLICATION->GetCurPage() != '/new-year-2026/') : ?>
			<!-- <script src="https://lidrekon.ru/slep/js/uhpv-hover-full.min.js"></script> -->
		<? endif; ?>

	
</head>

<body class="<? if ($APPLICATION->GetCurDir() == '/kviz-infokiosk/' || $APPLICATION->GetCurDir() == '/kviz-letniy-festival/' || $APPLICATION->GetCurDir() == '/kviz-detyam/' || $APPLICATION->GetCurDir() == '/kviz-detyam-copy/' || $APPLICATION->GetCurDir() == '/kviz-detyam-2025/') : ?>infokiosk<?endif;?><? if ($APPLICATION->GetCurPage() == '/new-year-2026/') : ?>kids-page<? endif; ?>">
	
	<? if ($USER->IsAdmin()) : ?>
		<div id="panel">
			<? $APPLICATION->ShowPanel(); ?> 
		</div>
	<? endif; ?>
	
	<div id="smooth-wrapper">
			
		<div id="wrapper" class="wrapper" data-scroll-container>
			<? if ($APPLICATION->GetCurPage() == '/new-year-2026/') : ?>
				<header>
					<div class="header__garland min991" >
						<img src="/upload/garland.png" alt="">
					</div>
					<div class="header__garland max991" >
						<img src="/upload/garland_sm.png" alt="">
					</div>
					<div class="logo">
						<a href="/">
							<svg width="117" height="83" viewBox="0 0 117 83" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_7337_16773)">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M59.1105 73.5081C58.5643 73.5308 58.0174 73.4852 57.483 73.3723V68.4627C57.8508 68.441 58.2172 68.4193 58.5892 68.4193C59.9637 68.4193 61.2469 68.6637 61.2469 70.7077C61.24 72.5738 60.5071 73.5081 59.1105 73.5081ZM58.6058 66.4459C57.3919 66.4277 56.1793 66.5319 54.9871 66.7569V78.449H57.483V75.29C58.1353 75.3873 58.7937 75.4395 59.4534 75.4462C62.2715 75.4462 63.852 73.2732 63.852 70.6452C63.8506 67.3301 61.2621 66.4405 58.6044 66.4405L58.6058 66.4459ZM99.6587 76.6929C99.1056 76.6929 98.5525 76.6481 98.0105 76.6033V71.6856H99.1319C100.506 71.6856 101.79 71.7969 101.79 73.8871C101.812 75.7314 101.079 76.6875 99.6573 76.6875L99.6587 76.6929ZM99.2923 69.6905C98.8111 69.6905 98.399 69.6905 98.0326 69.7136V66.708H95.5339V78.4205C96.2903 78.4653 98.8526 78.5766 100.002 78.5766C102.842 78.5766 104.4 76.4037 104.4 73.8422C104.4 70.4632 101.788 69.685 99.2909 69.685L99.2923 69.6905ZM73.4913 73.0192C73.2147 73.0423 72.8497 73.0423 72.2537 73.0423C71.1475 73.0423 69.6887 72.6349 69.6887 70.6194C69.6887 69.1744 70.5183 68.4627 71.8886 68.4627C72.4334 68.4627 72.9174 68.4926 73.2894 68.5171L73.5148 68.5293V73.0192H73.4913ZM67.0766 70.6194C67.0766 72.4189 67.9063 73.553 69.0249 74.2415C67.9934 75.5317 66.7793 76.6427 65.1297 76.822L66.1875 78.6853C67.8371 78.6622 68.9599 78.0185 71.3189 74.9953C71.6762 75.0398 72.036 75.062 72.3961 75.0618C72.8994 75.0618 73.2438 75.0618 73.4954 75.0401V78.4626H75.9927V66.7963C74.6459 66.5665 73.2819 66.4475 71.9149 66.4405C68.8908 66.4405 67.0808 67.9969 67.0808 70.6194H67.0766ZM37.827 75.8427C37.827 80.1317 32.878 82.9987 27.8614 82.9987L27.17 81.0213C30.927 80.9547 35.096 79.2869 35.096 75.8876C35.096 73.6861 33.3551 73.0858 31.5008 73.0858C31.0484 73.0825 30.5963 73.1125 30.1485 73.1754V71.8635L33.9082 68.6352H31.2284C29.8539 68.6352 28.4103 68.4994 27.9526 68.058L28.709 65.991C29.3036 66.5682 31.1828 66.6795 32.2599 66.6795H37.5283V68.0376L33.68 71.3705C36.1082 71.5307 37.827 72.8644 37.827 75.8427ZM87.7213 76.3317H83.0033C84.0515 73.8527 84.8342 71.2733 85.3388 68.6352H87.7213V76.3317ZM90.173 66.7339H83.1706C83.1696 67.5194 83.0768 68.3023 82.8941 69.0671C82.3672 71.49 81.1532 74.5132 80.3968 76.3357H78.6075L78.3309 81.2481H80.7591L80.9195 78.4693H90.0139L89.7374 82.4255H92.2264L92.6163 76.3357H90.173V66.7339ZM113.334 76.6685C114.441 76.6819 115.547 76.5841 116.634 76.3765V78.4435C115.571 78.601 114.5 78.6918 113.426 78.7152C109.348 78.7152 106.806 77.3815 106.806 72.5588C106.806 70.4469 107.47 67.7579 109.44 66.7352H111.96C114.113 66.7352 115.278 66.5994 116.083 66.2463L117 68.202C116.032 68.6692 114.869 68.7357 113.083 68.7357H110.585C109.829 69.2246 109.508 70.6697 109.44 71.5131H111.777C112.556 71.5131 114.681 71.5131 115.281 71.3773L115.901 73.356C115.144 73.4457 113.746 73.4674 112.418 73.4674H109.443C109.623 75.6431 110.768 76.6644 113.334 76.6644V76.6685ZM44.72 70.9888C45.2248 69.4229 45.2469 69.3496 45.2469 69.3347C45.317 69.0873 45.3633 68.834 45.3852 68.5782H46.3241L47.9101 73.6861H43.8517C44.2375 72.4855 44.5182 71.6231 44.72 70.9888ZM43.3013 66.7556C43.4064 67.4075 43.1631 68.6977 42.9307 69.336L39.7504 78.4924H42.3624L43.2322 75.7585H48.571L49.4007 78.4924H52.104L48.2323 66.7569L43.3013 66.7556ZM2.70469 73.1577C2.32686 73.1629 1.95034 73.113 1.58742 73.0097C1.28612 72.9238 1.00446 72.7818 0.757758 72.5914C0.536336 72.4175 0.354905 72.1995 0.225393 71.9517C0.093688 71.6879 0.018393 71.4005 0.00415039 71.107H1.19748C1.22127 71.2652 1.27026 71.4187 1.34267 71.562C1.41912 71.6964 1.52041 71.8157 1.64135 71.9137C1.77903 72.0109 1.93301 72.0835 2.09628 72.1283C2.29463 72.1803 2.4994 72.205 2.70469 72.2016C3.23291 72.2016 3.61317 72.1111 3.84547 71.93C3.9617 71.8438 4.05488 71.7311 4.11702 71.6017C4.17916 71.4723 4.2084 71.3301 4.20223 71.1871C4.20494 71.0445 4.17861 70.9027 4.12479 70.7702C4.07109 70.6371 3.98116 70.521 3.86483 70.4347C3.72693 70.3324 3.56862 70.2597 3.40022 70.2215C3.17486 70.1622 2.94212 70.1343 2.70884 70.1387H1.88333V69.2871H2.70469C3.14303 69.2871 3.46107 69.1934 3.66157 69.0155C3.75747 68.9295 3.83369 68.8245 3.88518 68.7075C3.93667 68.5904 3.96226 68.4639 3.96024 68.3364C3.96295 68.2107 3.93661 68.086 3.8832 67.9716C3.8298 67.8573 3.75071 67.7564 3.65189 67.6764C3.45185 67.5007 3.13612 67.4129 2.70469 67.4129C2.50631 67.4098 2.30834 67.4317 2.11563 67.4781C1.96964 67.5144 1.83179 67.577 1.7091 67.6628C1.60093 67.743 1.51489 67.8485 1.45882 67.9697C1.39841 68.0958 1.35918 68.2306 1.34267 68.369H0.14381C0.157174 68.0953 0.224812 67.8268 0.342928 67.5786C0.453645 67.3433 0.61892 67.1368 0.825513 66.9756C1.05785 66.7987 1.32399 66.6693 1.60816 66.5953C1.96362 66.4981 2.33163 66.4523 2.70054 66.4595C3.52467 66.4595 4.14 66.6234 4.54654 66.9511C4.7488 67.1109 4.91009 67.315 5.01744 67.5471C5.12479 67.7792 5.1752 68.0328 5.16463 68.2875C5.17309 68.6043 5.06675 68.9138 4.86457 69.1608C4.6611 69.4036 4.38864 69.5813 4.08193 69.6715C4.45552 69.746 4.79485 69.9364 5.04986 70.2147C5.29782 70.5008 5.42584 70.8688 5.408 71.2442C5.41059 71.511 5.35099 71.7749 5.23377 72.0156C5.11336 72.256 4.93775 72.4657 4.72077 72.6281C4.46428 72.8099 4.17674 72.9451 3.87175 73.0274C3.4905 73.1224 3.09792 73.1662 2.70469 73.1577ZM6.47273 73.0559L9.01287 66.5573H10.2021L12.7533 73.0559H11.477L10.8976 71.562H8.2247L7.64532 73.0559H6.47273ZM8.59804 70.633H10.5339L9.56598 67.9779L8.59804 70.633ZM14.1457 73.1496C14.2112 73.155 14.2692 73.1577 14.3199 73.1577C14.6057 73.1638 14.8893 73.1067 15.1496 72.9907C15.4232 72.8356 15.6346 72.593 15.7483 72.3035C15.9405 71.8406 16.0643 71.3531 16.1161 70.8557C16.211 70.0443 16.253 69.2278 16.242 68.4111V67.5202H18.1543V73.0532H19.3421V66.5573H15.0929V68.2278C15.0929 69.0771 15.0768 69.7561 15.0445 70.265C15.0287 70.659 14.9741 71.0506 14.8813 71.4343C14.841 71.6376 14.736 71.8231 14.5813 71.964C14.4456 72.0474 14.2877 72.089 14.1277 72.0835H14.0406C14.0209 72.0845 14.0012 72.0817 13.9825 72.0753V73.1333C14.0361 73.1451 14.0908 73.1505 14.1457 73.1496Z" fill="white"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M65.026 52.2793C64.6581 51.5771 64.1742 51.4997 61.2925 51.2525C57.6185 50.9361 56.2136 50.0547 54.4796 47.8056C51.5412 43.9948 50.9065 38.0693 51.5205 33.6391C51.9353 30.6635 52.6709 24.9811 50.4544 23.5103C47.0293 21.2354 41.1802 26.8974 38.2542 32.0881C35.3504 37.2368 35.2218 42.2604 34.6272 45.7671C34.0326 49.2738 33.7519 50.7718 31.6916 51.2254C30.5384 51.4793 27.2018 51.3612 27.1783 53.253C27.1465 55.9177 30.5577 57.4985 33.1795 57.4985C35.8468 57.4985 39.8043 55.8403 45.0906 55.8403C50.4544 55.8403 55.0687 57.436 58.9183 57.436C62.7679 57.436 65.727 53.6143 65.026 52.2793ZM48.5586 49.6214C45.063 49.3199 44.2043 49.3838 41.9379 49.6567C41.3336 49.7287 40.5164 49.377 40.4971 48.2226C40.4777 47.0682 40.3491 43.2994 42.1661 39.2495C43.0688 37.2258 44.3652 35.3947 45.9825 33.8591C46.8122 33.0673 47.5187 32.9329 47.3902 33.8591C46.2839 41.7443 48.0981 45.486 49.9372 48.9342C50.229 49.4734 50.2995 49.7695 48.5586 49.6214Z" fill="white"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M57.837 16.853C60.915 15.1526 62.7347 14.1666 64.9236 13.4794C67.4997 12.6713 70.9027 14.1068 71.6384 17.479C72.4818 21.3483 72.8829 33.0417 70.3275 42.6748C68.0943 51.0857 74.9155 49.4356 77.6976 44.9185C82.1889 37.6308 76.4988 21.2709 75.8005 16.8435C75.0441 12.0602 75.7244 9.07909 78.0903 6.80696C79.8174 5.1487 83.9602 4.10023 90.8782 4.73855C96.094 5.22068 95.3957 1.12188 87.6978 0.206512C79.8976 -0.721082 74.592 1.56463 67.945 5.36057C63.5271 7.88667 59.1312 11.1434 57.1511 12.526C49.0246 18.207 53.3679 19.3207 57.837 16.853Z" fill="white"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M92.4352 13.6546C90.408 8.5372 85.6817 6.94685 81.6026 9.06958C77.1515 11.3879 76.6744 21.2315 82.9853 27.7328C85.1646 29.9805 86.1076 31.086 88.1016 32.7198C88.2338 32.8202 88.3236 32.9651 88.3534 33.1266C88.3833 33.2882 88.3512 33.4548 88.2634 33.5945C84.606 39.3773 80.6263 48.6478 72.8317 51.1794C69.9279 52.1233 67.0241 51.3573 66.6991 52.3541C66.2636 53.6865 68.8424 57.4077 72.8497 57.4593C75.3622 57.4905 78.732 56.2221 83.0697 50.8996C87.0147 46.0566 89.0045 39.0147 91.5046 35.8422C91.8544 35.3967 92.2291 35.5515 92.0314 36.0418C90.2877 40.3674 89.4608 46.4789 89.8826 49.3364C90.2186 51.6031 92.254 52.0228 93.5884 50.2559C94.9228 48.4889 95.4427 46.2385 96.0193 43.8917C97.5763 37.5615 96.152 23.046 92.4352 13.6546ZM91.5004 26.8283C91.4977 26.8977 91.4779 26.9653 91.4425 27.0254C91.4072 27.0855 91.3575 27.1362 91.2976 27.1731C91.2378 27.2101 91.1698 27.2321 91.0993 27.2373C91.0289 27.2426 90.9582 27.2308 90.8934 27.2032C88.7432 26.2892 85.2005 21.9649 84.9102 18.6946C84.5921 15.1173 87.0369 14.8049 88.4169 15.7067C89.7415 16.5732 91.6581 21.5955 91.4949 26.8243L91.5004 26.8283Z" fill="white"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M97.7837 57.4987C94.2618 57.4987 94.3268 55.1138 95.5616 52.365C97.6245 47.7749 98.6943 42.8139 98.7032 37.7965C98.7405 31.1186 97.3287 24.4394 97.3287 17.7561C97.3287 8.15557 98.446 5.33612 101.849 5.69738C105.252 6.05864 106.769 10.9805 107.092 15.9403C107.379 20.3542 107.507 23.5064 108.257 25.0709C108.277 25.1122 108.31 25.1461 108.351 25.1678C108.392 25.1895 108.439 25.1979 108.485 25.1917C108.531 25.1855 108.574 25.165 108.607 25.1333C108.641 25.1016 108.663 25.0603 108.672 25.0152C109.049 20.7019 109.489 16.8421 111.799 16.9127C115.02 17.0132 116.206 20.7073 116.617 34.8236C117.118 52.0146 115.905 57.4987 112.518 57.4987C109.132 57.4987 109.091 53.0481 109.858 48.6478C110.625 44.2475 113.654 36.1532 112.398 26.3027C112.393 26.2629 112.374 26.226 112.345 26.198C112.315 26.17 112.277 26.1526 112.236 26.1487C112.196 26.1448 112.155 26.1545 112.12 26.1763C112.086 26.1981 112.06 26.2307 112.047 26.2688C111.125 29.0448 109.973 33.7968 108.293 33.6325C106.613 33.4682 103.738 24.3498 102.975 20.2564C102.966 20.211 102.942 20.1701 102.905 20.1411C102.869 20.1122 102.823 20.0972 102.776 20.0988C102.729 20.1005 102.684 20.1187 102.65 20.1501C102.615 20.1816 102.594 20.2241 102.589 20.27C101.814 26.8759 103.615 34.3727 104.288 39.433C105.759 50.5383 103.095 57.4987 97.7837 57.4987Z" fill="white"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M66.8955 43.066C64.1922 43.995 61.7792 44.2218 60.3771 41.8831C59.5751 40.5426 60.261 38.9333 61.345 38.0165C69.6928 31.0154 70.1145 25.0397 70.1242 21.6797C70.1436 15.2748 64.8047 15.704 62.1235 17.5252C58.2103 20.1817 55.3936 24.7355 54.0828 31.6877C52.8106 38.4375 54.3068 47.3061 59.6871 48.2567C63.2685 48.8896 66.8554 47.5356 68.2354 45.3218C69.1148 43.904 68.1704 42.6273 66.8955 43.066ZM63.3694 22.4919C64.8974 21.2546 66.6715 21.3918 66.1681 24.9474C65.7077 28.2068 61.9438 32.341 59.7479 33.1436C59.4617 33.2482 59.1617 33.1708 59.1617 32.7362C59.1617 28.7256 61.4999 24.0075 63.3694 22.4919Z" fill="white"/>
								</g>
								<defs>
									<clipPath id="clip0_7337_16773">
										<rect width="117" height="83" fill="white"/>
									</clipPath>
								</defs>
							</svg>
						</a>
					</div>
				</header>
				<!--  -->
			<? else:?>
				<div class="head fixed ">
					<div class="container">
						<div class="head__top d-flex align-end justify-between">
							<? $APPLICATION->IncludeFile(SITE_TEMPLATE_PATH . '/include/depkult_logo.php'); ?>
							<?
										//Онлайн-трансляция сегодня
										$arConcertOnlineFilter = [
											"!PROPERTY_online_stream" => false,
											">=DATE_ACTIVE_TO" => date('d.m.Y'),
											"<DATE_ACTIVE_TO" => date('d.m.Y', strtotime('+1 day')),
										];
										$APPLICATION->IncludeComponent(
											"bitrix:news.list",
											"concert-online-btn",
											array(
												"IBLOCK_ID" => 1,
												"IBLOCK_TYPE" => "Event",
												"NEWS_COUNT" => 1,
												"SORT_BY1" => "ACTIVE_TO",
												"SORT_ORDER1" => "ASC",
												"SORT_BY2" => "NAME",
												"SORT_ORDER2" => "DESC",
												"FILTER_NAME" => "arConcertOnlineFilter",
												"FIELD_CODE" => array("DATE_ACTIVE_TO"),
												"PROPERTY_CODE" => array("stream_viewer", "online_stream"),
												"CHECK_DATES" => "Y",
												"DETAIL_URL" => "",
												"AJAX_MODE" => "N",
												"AJAX_OPTION_JUMP" => "N",
												"AJAX_OPTION_STYLE" => "Y",
												"AJAX_OPTION_HISTORY" => "N",
												"AJAX_OPTION_ADDITIONAL" => "",
												"CACHE_TYPE" => "A",
												"CACHE_TIME" => "1800",
												"CACHE_FILTER" => "Y",
												"CACHE_GROUPS" => "Y",
												"PREVIEW_TRUNCATE_LEN" => "",
												"ACTIVE_DATE_FORMAT" => "d.m.Y H:i:s",
												"SET_TITLE" => "N",
												"SET_BROWSER_TITLE" => "N",
												"SET_META_KEYWORDS" => "N",
												"SET_META_DESCRIPTION" => "N",
												"SET_LAST_MODIFIED" => "N",
												"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
												"ADD_SECTIONS_CHAIN" => "N",
												"HIDE_LINK_WHEN_NO_DETAIL" => "N",
												"PARENT_SECTION" => "",
												"PARENT_SECTION_CODE" => "",
												"INCLUDE_SUBSECTIONS" => "Y",
												"STRICT_SECTION_CHECK" => "N",
												"PAGER_TEMPLATE" => ".default",
												"DISPLAY_TOP_PAGER" => "N",
												"DISPLAY_BOTTOM_PAGER" => "N",
												"PAGER_TITLE" => "Новости",
												"PAGER_SHOW_ALWAYS" => "N",
												"PAGER_DESC_NUMBERING" => "N",
												"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
												"PAGER_SHOW_ALL" => "Y",
												"PAGER_BASE_LINK_ENABLE" => "N",
												"SET_STATUS_404" => "N",
												"SHOW_404" => "N",
												"MESSAGE_404" => ""
											),
											false
										);
										?>	
							<a href="/search/" class="links__item search_link">
								<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M25.3328 25.9988L20.8219 21.488M23.2586 15.6293C23.2586 20.211 19.5444 23.9251 14.9628 23.9251C10.3812 23.9251 6.66699 20.211 6.66699 15.6293C6.66699 11.0477 10.3812 7.3335 14.9628 7.3335C19.5444 7.3335 23.2586 11.0477 23.2586 15.6293Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</a>
							<?
							$APPLICATION->IncludeComponent(
								"bitrix:search.form",
								"header_form",
								Array(
									"COMPOSITE_FRAME_MODE" => "A",
									"PAGE" => "#SITE_DIR#search/index.php",
									"USE_SUGGEST" => "Y"
								)
							);
							?>
						</div>
						<div class="head__bottom">
							<div class="row align-start">
								<div class="head__left  col col-5">
									<div class="head__left_content max991">
										<!-- <a href="#" onclick="afishaWidget.openModal({page: 'order'})" class="links__item">
											<svg width="25.666016" height="25.055908" viewBox="0 0 25.666 25.0559" fill="none"
												xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
												<path
													d="M0.5 0.500488L3.27344 0.980469L4.55664 16.2778C4.66016 17.5271 5.70312 18.4858 6.95703 18.4819L21.502 18.4819C22.6992 18.4844 23.7129 17.6045 23.8828 16.4204L25.1484 7.67651C25.2891 6.69922 24.6113 5.79248 23.6348 5.65112C23.5488 5.63916 3.71875 5.63257 3.71875 5.63257"
													stroke="#101010" stroke-opacity="1.000000" stroke-width="1.000000"
													stroke-linejoin="round" stroke-linecap="round" />
												<path d="M15.666 10.5605L19.3633 10.5605" stroke="#101010" stroke-opacity="1.000000"
													stroke-width="1.000000" stroke-linejoin="round" stroke-linecap="round" />
												<path
													d="M6.37109 23.104C6.77344 23.104 7.09766 23.4294 7.09766 23.8293C7.09766 24.2307 6.77344 24.5559 6.37109 24.5559C5.9707 24.5559 5.64648 24.2307 5.64648 23.8293C5.64648 23.4294 5.9707 23.104 6.37109 23.104Z"
													fill="#101010" fill-opacity="1.000000" fill-rule="evenodd" />
												<path
													d="M7.09766 23.8293C7.09766 24.2307 6.77344 24.5559 6.37109 24.5559C5.9707 24.5559 5.64648 24.2307 5.64648 23.8293C5.64648 23.4294 5.9707 23.104 6.37109 23.104C6.77344 23.104 7.09766 23.4294 7.09766 23.8293Z"
													stroke="#101010" stroke-opacity="1.000000" stroke-width="1.000000"
													stroke-linejoin="round" />
												<path
													d="M21.4121 23.104C21.8145 23.104 22.1387 23.4294 22.1387 23.8293C22.1387 24.2307 21.8145 24.5559 21.4121 24.5559C21.0117 24.5559 20.6875 24.2307 20.6875 23.8293C20.6875 23.4294 21.0117 23.104 21.4121 23.104Z"
													fill="#101010" fill-opacity="1.000000" fill-rule="evenodd" />
												<path
													d="M22.1387 23.8293C22.1387 24.2307 21.8145 24.5559 21.4121 24.5559C21.0117 24.5559 20.6875 24.2307 20.6875 23.8293C20.6875 23.4294 21.0117 23.104 21.4121 23.104C21.8145 23.104 22.1387 23.4294 22.1387 23.8293Z"
													stroke="#101010" stroke-opacity="1.000000" stroke-width="1.000000"
													stroke-linejoin="round" />
											</svg>
										</a> -->
										<button class="links__item popup_open" data-target="#subscribe">
											<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M23.8705 12.4683L17.9461 17.2856C16.8267 18.1736 15.2519 18.1736 14.1326 17.2856L8.1582 12.4683" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
											<path fill-rule="evenodd" clip-rule="evenodd" d="M22.5445 28.6667C26.5996 28.6779 29.3327 25.3461 29.3327 21.2512V12.0934C29.3327 7.99851 26.5996 4.66675 22.5445 4.66675H9.4542C5.39906 4.66675 2.66602 7.99851 2.66602 12.0934V21.2512C2.66602 25.3461 5.39906 28.6779 9.4542 28.6667H22.5445Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
											</svg>
										</button>
									</div>
									<div class="head__left_content min991">
										<? $APPLICATION->IncludeFile(SITE_TEMPLATE_PATH . '/include/depkult_logo.php'); ?>	
										<div class="head__left_controls">
											<?$APPLICATION->IncludeComponent(
												"bitrix:search.form",
												"header_form",
												Array(
													"COMPOSITE_FRAME_MODE" => "A",
													"PAGE" => "#SITE_DIR#search/index.php",
													"USE_SUGGEST" => "Y"
												)
											);?>
											<div class="links">
												<a href="/search/" class="links__item search_link">
													<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M25.3328 25.9988L20.8219 21.488M23.2586 15.6293C23.2586 20.211 19.5444 23.9251 14.9628 23.9251C10.3812 23.9251 6.66699 20.211 6.66699 15.6293C6.66699 11.0477 10.3812 7.3335 14.9628 7.3335C19.5444 7.3335 23.2586 11.0477 23.2586 15.6293Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
													</svg>
												</a>
												<span id="specialButton" class="btn-bvi  bvi-open specialButton links__item" style="cursor:pointer;" class="links__item">
												<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2139 16.7375C20.2139 19.0655 18.3259 20.9522 15.9979 20.9522C13.6699 20.9522 11.7832 19.0655 11.7832 16.7375C11.7832 14.4082 13.6699 12.5215 15.9979 12.5215C18.3259 12.5215 20.2139 14.4082 20.2139 16.7375Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
												<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9967 26.4732C21.074 26.4732 25.718 22.8226 28.3327 16.7372C25.718 10.6519 21.074 7.00122 15.9967 7.00122H16.002C10.9247 7.00122 6.28068 10.6519 3.66602 16.7372C6.28068 22.8226 10.9247 26.4732 16.002 26.4732H15.9967Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
												</svg>
													<!-- <svg width="25.669922" height="20.471924" viewBox="0 0 25.6699 20.4719" fill="none"
														xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

														<path
															d="M12.834 14.4509C10.5059 14.4509 8.61914 12.5642 8.61914 10.2363C8.61914 7.90698 10.5059 6.02026 12.834 6.02026C15.1621 6.02026 17.0508 7.90698 17.0508 10.2363C17.0508 12.5642 15.1621 14.4509 12.834 14.4509Z"
															stroke="#101010" stroke-opacity="1.000000" stroke-width="1.000000"
															stroke-linejoin="round" />
														<path
															d="M25.166 10.2361C22.5527 4.15063 17.9082 0.5 12.8301 0.5L12.8359 0.5C7.75781 0.5 3.11523 4.15063 0.5 10.2361C3.11523 16.3213 7.75781 19.9719 12.8359 19.9719L12.8301 19.9719C17.9082 19.9719 22.5527 16.3213 25.166 10.2361Z"
															stroke="#101010" stroke-opacity="1.000000" stroke-width="1.000000"
															stroke-linejoin="round" />
													</svg> -->

												</span>
												<button class="links__item popup_open" data-target="#subscribe">
													<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M23.8705 12.4683L17.9461 17.2856C16.8267 18.1736 15.2519 18.1736 14.1326 17.2856L8.1582 12.4683" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
													<path fill-rule="evenodd" clip-rule="evenodd" d="M22.5445 28.6667C26.5996 28.6779 29.3327 25.3461 29.3327 21.2512V12.0934C29.3327 7.99851 26.5996 4.66675 22.5445 4.66675H9.4542C5.39906 4.66675 2.66602 7.99851 2.66602 12.0934V21.2512C2.66602 25.3461 5.39906 28.6779 9.4542 28.6667H22.5445Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
													</svg>
												</button>
											</div>
											<div class="links">
												<a href="#" onclick="afishaWidget.openModal({page: 'personal'})" class="links__item">
													<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3145 21.1284C11.1577 21.1284 6.75391 21.9081 6.75391 25.0306C6.75391 28.1532 11.1298 28.9608 16.3145 28.9608C21.4714 28.9608 25.8739 28.1798 25.8739 25.0586C25.8739 21.9373 21.4993 21.1284 16.3145 21.1284Z" stroke="101010" stroke-linecap="round" stroke-linejoin="round"/>
													<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3138 16.6747C19.698 16.6747 22.4408 13.9305 22.4408 10.5464C22.4408 7.16229 19.698 4.41943 16.3138 4.41943C12.9297 4.41943 10.1856 7.16229 10.1856 10.5464C10.1742 13.9191 12.8992 16.6632 16.2707 16.6747H16.3138Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
													</svg>
												</a>
												<!-- <a  href="#" onclick="afishaWidget.openModal({page: 'order'})" class="links__item">
													<svg width="25.666016" height="25.055908" viewBox="0 0 25.666 25.0559" fill="none"
														xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
														<path
															d="M0.5 0.500488L3.27344 0.980469L4.55664 16.2778C4.66016 17.5271 5.70312 18.4858 6.95703 18.4819L21.502 18.4819C22.6992 18.4844 23.7129 17.6045 23.8828 16.4204L25.1484 7.67651C25.2891 6.69922 24.6113 5.79248 23.6348 5.65112C23.5488 5.63916 3.71875 5.63257 3.71875 5.63257"
															stroke="#101010" stroke-opacity="1.000000" stroke-width="1.000000"
															stroke-linejoin="round" stroke-linecap="round" />
														<path d="M15.666 10.5605L19.3633 10.5605" stroke="#101010" stroke-opacity="1.000000"
															stroke-width="1.000000" stroke-linejoin="round" stroke-linecap="round" />
														<path
															d="M6.37109 23.104C6.77344 23.104 7.09766 23.4294 7.09766 23.8293C7.09766 24.2307 6.77344 24.5559 6.37109 24.5559C5.9707 24.5559 5.64648 24.2307 5.64648 23.8293C5.64648 23.4294 5.9707 23.104 6.37109 23.104Z"
															fill="#101010" fill-opacity="1.000000" fill-rule="evenodd" />
														<path
															d="M7.09766 23.8293C7.09766 24.2307 6.77344 24.5559 6.37109 24.5559C5.9707 24.5559 5.64648 24.2307 5.64648 23.8293C5.64648 23.4294 5.9707 23.104 6.37109 23.104C6.77344 23.104 7.09766 23.4294 7.09766 23.8293Z"
															stroke="#101010" stroke-opacity="1.000000" stroke-width="1.000000"
															stroke-linejoin="round" />
														<path
															d="M21.4121 23.104C21.8145 23.104 22.1387 23.4294 22.1387 23.8293C22.1387 24.2307 21.8145 24.5559 21.4121 24.5559C21.0117 24.5559 20.6875 24.2307 20.6875 23.8293C20.6875 23.4294 21.0117 23.104 21.4121 23.104Z"
															fill="#101010" fill-opacity="1.000000" fill-rule="evenodd" />
														<path
															d="M22.1387 23.8293C22.1387 24.2307 21.8145 24.5559 21.4121 24.5559C21.0117 24.5559 20.6875 24.2307 20.6875 23.8293C20.6875 23.4294 21.0117 23.104 21.4121 23.104C21.8145 23.104 22.1387 23.4294 22.1387 23.8293Z"
															stroke="#101010" stroke-opacity="1.000000" stroke-width="1.000000"
															stroke-linejoin="round" />
													</svg>
												</a> -->
											</div>
											
											<button class="btn btn_menu">
												<span class="lines">
													<span class="line line-1"></span>
													<span class="line line-2"></span>
													<span class="line line-3"></span>
												</span>
											</button>
										</div>

									</div>
								</div>
								<div class="head__center col col-2 d-flex justify-center">
								<? $APPLICATION->IncludeFile(SITE_TEMPLATE_PATH . '/include/logo.php'); ?>
								<? $APPLICATION->IncludeFile(SITE_TEMPLATE_PATH . '/include/logo_light.php'); ?>
								</div>
								<div class="head__right col col-5">
									<div class="head__right_content max991">
									
										<button class="btn btn_menu">
											<span class="lines">
												<span class="line line-1"></span>
												<span class="line line-2"></span>
												<span class="line line-3"></span>
											</span>
										</button>
									</div>
									<div class="head__right_content min991">
										<?$APPLICATION->IncludeComponent(
											"bitrix:menu", 
											"head_menu", 
											array(
												"ALLOW_MULTI_SELECT" => "N",
												"CHILD_MENU_TYPE" => "left",
												"DELAY" => "N",
												"MAX_LEVEL" => "1",
												"MENU_CACHE_GET_VARS" => array(
												),
												"MENU_CACHE_TIME" => "3600",
												"MENU_CACHE_TYPE" => "N",
												"MENU_CACHE_USE_GROUPS" => "Y",
												"ROOT_MENU_TYPE" => "top",
												"USE_EXT" => "N",
												"COMPONENT_TEMPLATE" => "head_menu"
											),
											false
										);?>
										<?
										//Онлайн-трансляция сегодня
										$arConcertOnlineFilter = [
											"!PROPERTY_online_stream" => false,
											">=DATE_ACTIVE_TO" => date('d.m.Y'),
											"<DATE_ACTIVE_TO" => date('d.m.Y', strtotime('+1 day')),
										];
										$APPLICATION->IncludeComponent(
											"bitrix:news.list",
											"concert-online-btn",
											array(
												"IBLOCK_ID" => 1,
												"IBLOCK_TYPE" => "Event",
												"NEWS_COUNT" => 1,
												"SORT_BY1" => "ACTIVE_TO",
												"SORT_ORDER1" => "ASC",
												"SORT_BY2" => "NAME",
												"SORT_ORDER2" => "DESC",
												"FILTER_NAME" => "arConcertOnlineFilter",
												"FIELD_CODE" => array("DATE_ACTIVE_TO"),
												"PROPERTY_CODE" => array("stream_viewer", "online_stream"),
												"CHECK_DATES" => "Y",
												"DETAIL_URL" => "",
												"AJAX_MODE" => "N",
												"AJAX_OPTION_JUMP" => "N",
												"AJAX_OPTION_STYLE" => "Y",
												"AJAX_OPTION_HISTORY" => "N",
												"AJAX_OPTION_ADDITIONAL" => "",
												"CACHE_TYPE" => "A",
												"CACHE_TIME" => "1800",
												"CACHE_FILTER" => "Y",
												"CACHE_GROUPS" => "Y",
												"PREVIEW_TRUNCATE_LEN" => "",
												"ACTIVE_DATE_FORMAT" => "d.m.Y H:i:s",
												"SET_TITLE" => "N",
												"SET_BROWSER_TITLE" => "N",
												"SET_META_KEYWORDS" => "N",
												"SET_META_DESCRIPTION" => "N",
												"SET_LAST_MODIFIED" => "N",
												"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
												"ADD_SECTIONS_CHAIN" => "N",
												"HIDE_LINK_WHEN_NO_DETAIL" => "N",
												"PARENT_SECTION" => "",
												"PARENT_SECTION_CODE" => "",
												"INCLUDE_SUBSECTIONS" => "Y",
												"STRICT_SECTION_CHECK" => "N",
												"PAGER_TEMPLATE" => ".default",
												"DISPLAY_TOP_PAGER" => "N",
												"DISPLAY_BOTTOM_PAGER" => "N",
												"PAGER_TITLE" => "Новости",
												"PAGER_SHOW_ALWAYS" => "N",
												"PAGER_DESC_NUMBERING" => "N",
												"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
												"PAGER_SHOW_ALL" => "Y",
												"PAGER_BASE_LINK_ENABLE" => "N",
												"SET_STATUS_404" => "N",
												"SHOW_404" => "N",
												"MESSAGE_404" => ""
											),
											false
										);
										?>
										<? if ($USER->IsAdmin()) : ?>
										<div class="head__languages ">
											<div class="head__languages_dropdown dropdown dropdown-light">
												<div class="dropdown__value"><span class="value">En</span></div>
												<div class="dropdown__list">
													<div class="dropdown__item">
														<a href="/en/" class="value" data-google-lang="en">En</a>
													</div>
													<div class="dropdown__item">
														<a href="/ru/" class="value" data-google-lang='zh'>Zh</a>
													</div>
												</div>
											</div>
										</div>
										<? endif;?>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
				<header data-scroll-section data-scroll class="head">
					<div class="container">
						<div class="head__top d-flex align-end justify-between">
						<? $APPLICATION->IncludeFile(SITE_TEMPLATE_PATH . '/include/depkult_logo.php'); ?>	
							<?
								//Онлайн-трансляция сегодня
								$arConcertOnlineFilter = [
									"!PROPERTY_online_stream" => false,
									">=DATE_ACTIVE_TO" => date('d.m.Y'),
									"<DATE_ACTIVE_TO" => date('d.m.Y', strtotime('+1 day')),
								];
								$APPLICATION->IncludeComponent(
									"bitrix:news.list",
									"concert-online-btn",
									array(
										"IBLOCK_ID" => 1,
										"IBLOCK_TYPE" => "Event",
										"NEWS_COUNT" => 1,
										"SORT_BY1" => "ACTIVE_TO",
										"SORT_ORDER1" => "ASC",
										"SORT_BY2" => "NAME",
										"SORT_ORDER2" => "DESC",
										"FILTER_NAME" => "arConcertOnlineFilter",
										"FIELD_CODE" => array("DATE_ACTIVE_TO"),
										"PROPERTY_CODE" => array("stream_viewer", "online_stream"),
										"CHECK_DATES" => "Y",
										"DETAIL_URL" => "",
										"AJAX_MODE" => "N",
										"AJAX_OPTION_JUMP" => "N",
										"AJAX_OPTION_STYLE" => "Y",
										"AJAX_OPTION_HISTORY" => "N",
										"AJAX_OPTION_ADDITIONAL" => "",
										"CACHE_TYPE" => "A",
										"CACHE_TIME" => "1800",
										"CACHE_FILTER" => "Y",
										"CACHE_GROUPS" => "Y",
										"PREVIEW_TRUNCATE_LEN" => "",
										"ACTIVE_DATE_FORMAT" => "d.m.Y H:i:s",
										"SET_TITLE" => "N",
										"SET_BROWSER_TITLE" => "N",
										"SET_META_KEYWORDS" => "N",
										"SET_META_DESCRIPTION" => "N",
										"SET_LAST_MODIFIED" => "N",
										"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
										"ADD_SECTIONS_CHAIN" => "N",
										"HIDE_LINK_WHEN_NO_DETAIL" => "N",
										"PARENT_SECTION" => "",
										"PARENT_SECTION_CODE" => "",
										"INCLUDE_SUBSECTIONS" => "Y",
										"STRICT_SECTION_CHECK" => "N",
										"PAGER_TEMPLATE" => ".default",
										"DISPLAY_TOP_PAGER" => "N",
										"DISPLAY_BOTTOM_PAGER" => "N",
										"PAGER_TITLE" => "Новости",
										"PAGER_SHOW_ALWAYS" => "N",
										"PAGER_DESC_NUMBERING" => "N",
										"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
										"PAGER_SHOW_ALL" => "Y",
										"PAGER_BASE_LINK_ENABLE" => "N",
										"SET_STATUS_404" => "N",
										"SHOW_404" => "N",
										"MESSAGE_404" => ""
									),
									false
								);
								?>
							<a href="/search/" class="links__item search_link">
								<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M25.3328 25.9988L20.8219 21.488M23.2586 15.6293C23.2586 20.211 19.5444 23.9251 14.9628 23.9251C10.3812 23.9251 6.66699 20.211 6.66699 15.6293C6.66699 11.0477 10.3812 7.3335 14.9628 7.3335C19.5444 7.3335 23.2586 11.0477 23.2586 15.6293Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</a>
							<?$APPLICATION->IncludeComponent(
								"bitrix:search.form",
								"header_form",
								Array(
									"COMPOSITE_FRAME_MODE" => "A",
									"PAGE" => "#SITE_DIR#search/index.php",
									"USE_SUGGEST" => "Y"
								)
							);?>
						</div>
						<div class="head__bottom">
							<div class="row align-start">
								<div class="head__left  col col-5">
									<div class="head__left_content max991">
										<!-- <a href="#" onclick="afishaWidget.openModal({page: 'order'})" class="links__item">
											<svg width="25.666016" height="25.055908" viewBox="0 0 25.666 25.0559" fill="none"
												xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
												<path
													d="M0.5 0.500488L3.27344 0.980469L4.55664 16.2778C4.66016 17.5271 5.70312 18.4858 6.95703 18.4819L21.502 18.4819C22.6992 18.4844 23.7129 17.6045 23.8828 16.4204L25.1484 7.67651C25.2891 6.69922 24.6113 5.79248 23.6348 5.65112C23.5488 5.63916 3.71875 5.63257 3.71875 5.63257"
													stroke="#101010" stroke-opacity="1.000000" stroke-width="1.000000"
													stroke-linejoin="round" stroke-linecap="round" />
												<path d="M15.666 10.5605L19.3633 10.5605" stroke="#101010" stroke-opacity="1.000000"
													stroke-width="1.000000" stroke-linejoin="round" stroke-linecap="round" />
												<path
													d="M6.37109 23.104C6.77344 23.104 7.09766 23.4294 7.09766 23.8293C7.09766 24.2307 6.77344 24.5559 6.37109 24.5559C5.9707 24.5559 5.64648 24.2307 5.64648 23.8293C5.64648 23.4294 5.9707 23.104 6.37109 23.104Z"
													fill="#101010" fill-opacity="1.000000" fill-rule="evenodd" />
												<path
													d="M7.09766 23.8293C7.09766 24.2307 6.77344 24.5559 6.37109 24.5559C5.9707 24.5559 5.64648 24.2307 5.64648 23.8293C5.64648 23.4294 5.9707 23.104 6.37109 23.104C6.77344 23.104 7.09766 23.4294 7.09766 23.8293Z"
													stroke="#101010" stroke-opacity="1.000000" stroke-width="1.000000"
													stroke-linejoin="round" />
												<path
													d="M21.4121 23.104C21.8145 23.104 22.1387 23.4294 22.1387 23.8293C22.1387 24.2307 21.8145 24.5559 21.4121 24.5559C21.0117 24.5559 20.6875 24.2307 20.6875 23.8293C20.6875 23.4294 21.0117 23.104 21.4121 23.104Z"
													fill="#101010" fill-opacity="1.000000" fill-rule="evenodd" />
												<path
													d="M22.1387 23.8293C22.1387 24.2307 21.8145 24.5559 21.4121 24.5559C21.0117 24.5559 20.6875 24.2307 20.6875 23.8293C20.6875 23.4294 21.0117 23.104 21.4121 23.104C21.8145 23.104 22.1387 23.4294 22.1387 23.8293Z"
													stroke="#101010" stroke-opacity="1.000000" stroke-width="1.000000"
													stroke-linejoin="round" />
											</svg>
										</a> -->
										
										<button class="links__item popup_open" data-target="#subscribe">
											<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M23.8705 12.4683L17.9461 17.2856C16.8267 18.1736 15.2519 18.1736 14.1326 17.2856L8.1582 12.4683" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
											<path fill-rule="evenodd" clip-rule="evenodd" d="M22.5445 28.6667C26.5996 28.6779 29.3327 25.3461 29.3327 21.2512V12.0934C29.3327 7.99851 26.5996 4.66675 22.5445 4.66675H9.4542C5.39906 4.66675 2.66602 7.99851 2.66602 12.0934V21.2512C2.66602 25.3461 5.39906 28.6779 9.4542 28.6667H22.5445Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
											</svg>
										</button>
									</div>
									<div class="head__left_content min991">
										<? $APPLICATION->IncludeFile(SITE_TEMPLATE_PATH . '/include/depkult_logo.php'); ?>	
										<div class="head__left_controls">
											<?$APPLICATION->IncludeComponent(
												"bitrix:search.form",
												"header_form",
												Array(
													"COMPOSITE_FRAME_MODE" => "A",
													"PAGE" => "#SITE_DIR#search/index.php",
													"USE_SUGGEST" => "Y"
												)
											);?>
											<div class="links">
												<span  class="links__item search_link">
													<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M25.3328 25.9988L20.8219 21.488M23.2586 15.6293C23.2586 20.211 19.5444 23.9251 14.9628 23.9251C10.3812 23.9251 6.66699 20.211 6.66699 15.6293C6.66699 11.0477 10.3812 7.3335 14.9628 7.3335C19.5444 7.3335 23.2586 11.0477 23.2586 15.6293Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
													</svg>
													
													<?
													// $APPLICATION->IncludeComponent(
													// 	"bitrix:search.suggest.input",
													// 	"",
													// 	Array(
													// 		"COMPOSITE_FRAME_MODE" => "A",
													// 		"COMPOSITE_FRAME_TYPE" => "AUTO",
													// 		"DROPDOWN_SIZE" => "10",
													// 		"INPUT_SIZE" => "40",
													// 		"NAME" => "q",
													// 		"VALUE" => ""
													// 	)
													// );
													?>
												</span>
												<span id="specialButton" class="btn-bvi  bvi-open specialButton links__item" style="cursor:pointer;" class="links__item">
												<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2139 16.7375C20.2139 19.0655 18.3259 20.9522 15.9979 20.9522C13.6699 20.9522 11.7832 19.0655 11.7832 16.7375C11.7832 14.4082 13.6699 12.5215 15.9979 12.5215C18.3259 12.5215 20.2139 14.4082 20.2139 16.7375Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
													<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9967 26.4732C21.074 26.4732 25.718 22.8226 28.3327 16.7372C25.718 10.6519 21.074 7.00122 15.9967 7.00122H16.002C10.9247 7.00122 6.28068 10.6519 3.66602 16.7372C6.28068 22.8226 10.9247 26.4732 16.002 26.4732H15.9967Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
												</svg>
													<!-- <svg width="25.669922" height="20.471924" viewBox="0 0 25.6699 20.4719" fill="none"
														xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

														<path
															d="M12.834 14.4509C10.5059 14.4509 8.61914 12.5642 8.61914 10.2363C8.61914 7.90698 10.5059 6.02026 12.834 6.02026C15.1621 6.02026 17.0508 7.90698 17.0508 10.2363C17.0508 12.5642 15.1621 14.4509 12.834 14.4509Z"
															stroke="#101010" stroke-opacity="1.000000" stroke-width="1.000000"
															stroke-linejoin="round" />
														<path
															d="M25.166 10.2361C22.5527 4.15063 17.9082 0.5 12.8301 0.5L12.8359 0.5C7.75781 0.5 3.11523 4.15063 0.5 10.2361C3.11523 16.3213 7.75781 19.9719 12.8359 19.9719L12.8301 19.9719C17.9082 19.9719 22.5527 16.3213 25.166 10.2361Z"
															stroke="#101010" stroke-opacity="1.000000" stroke-width="1.000000"
															stroke-linejoin="round" />
													</svg> -->

												</span>
												<button class="links__item popup_open" data-target="#subscribe">
													<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M23.8705 12.4683L17.9461 17.2856C16.8267 18.1736 15.2519 18.1736 14.1326 17.2856L8.1582 12.4683" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
														<path fill-rule="evenodd" clip-rule="evenodd" d="M22.5445 28.6667C26.5996 28.6779 29.3327 25.3461 29.3327 21.2512V12.0934C29.3327 7.99851 26.5996 4.66675 22.5445 4.66675H9.4542C5.39906 4.66675 2.66602 7.99851 2.66602 12.0934V21.2512C2.66602 25.3461 5.39906 28.6779 9.4542 28.6667H22.5445Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
													</svg>
												</button>
											</div>
											<div class="links">
												<a href="#" onclick="afishaWidget.openModal({page: 'personal'})" class="links__item">
													<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3145 21.1284C11.1577 21.1284 6.75391 21.9081 6.75391 25.0306C6.75391 28.1532 11.1298 28.9608 16.3145 28.9608C21.4714 28.9608 25.8739 28.1798 25.8739 25.0586C25.8739 21.9373 21.4993 21.1284 16.3145 21.1284Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
														<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3138 16.6747C19.698 16.6747 22.4408 13.9305 22.4408 10.5464C22.4408 7.16229 19.698 4.41943 16.3138 4.41943C12.9297 4.41943 10.1856 7.16229 10.1856 10.5464C10.1742 13.9191 12.8992 16.6632 16.2707 16.6747H16.3138Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round"/>
													</svg>
												</a>
												<!-- <a  href="#" onclick="afishaWidget.openModal({page: 'order'})" class="links__item">
													<svg width="25.666016" height="25.055908" viewBox="0 0 25.666 25.0559" fill="none"
														xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
														<path
															d="M0.5 0.500488L3.27344 0.980469L4.55664 16.2778C4.66016 17.5271 5.70312 18.4858 6.95703 18.4819L21.502 18.4819C22.6992 18.4844 23.7129 17.6045 23.8828 16.4204L25.1484 7.67651C25.2891 6.69922 24.6113 5.79248 23.6348 5.65112C23.5488 5.63916 3.71875 5.63257 3.71875 5.63257"
															stroke="#101010" stroke-opacity="1.000000" stroke-width="1.000000"
															stroke-linejoin="round" stroke-linecap="round" />
														<path d="M15.666 10.5605L19.3633 10.5605" stroke="#101010" stroke-opacity="1.000000"
															stroke-width="1.000000" stroke-linejoin="round" stroke-linecap="round" />
														<path
															d="M6.37109 23.104C6.77344 23.104 7.09766 23.4294 7.09766 23.8293C7.09766 24.2307 6.77344 24.5559 6.37109 24.5559C5.9707 24.5559 5.64648 24.2307 5.64648 23.8293C5.64648 23.4294 5.9707 23.104 6.37109 23.104Z"
															fill="#101010" fill-opacity="1.000000" fill-rule="evenodd" />
														<path
															d="M7.09766 23.8293C7.09766 24.2307 6.77344 24.5559 6.37109 24.5559C5.9707 24.5559 5.64648 24.2307 5.64648 23.8293C5.64648 23.4294 5.9707 23.104 6.37109 23.104C6.77344 23.104 7.09766 23.4294 7.09766 23.8293Z"
															stroke="#101010" stroke-opacity="1.000000" stroke-width="1.000000"
															stroke-linejoin="round" />
														<path
															d="M21.4121 23.104C21.8145 23.104 22.1387 23.4294 22.1387 23.8293C22.1387 24.2307 21.8145 24.5559 21.4121 24.5559C21.0117 24.5559 20.6875 24.2307 20.6875 23.8293C20.6875 23.4294 21.0117 23.104 21.4121 23.104Z"
															fill="#101010" fill-opacity="1.000000" fill-rule="evenodd" />
														<path
															d="M22.1387 23.8293C22.1387 24.2307 21.8145 24.5559 21.4121 24.5559C21.0117 24.5559 20.6875 24.2307 20.6875 23.8293C20.6875 23.4294 21.0117 23.104 21.4121 23.104C21.8145 23.104 22.1387 23.4294 22.1387 23.8293Z"
															stroke="#101010" stroke-opacity="1.000000" stroke-width="1.000000"
															stroke-linejoin="round" />
													</svg>
												</a> -->
											</div>
											<button class="btn btn_menu">
												<span class="lines">
													<span class="line line-1"></span>
													<span class="line line-2"></span>
													<span class="line line-3"></span>
												</span>
											</button>
										</div>

									</div>
								</div>
								<div class="head__center col col-2 d-flex justify-center">
									<? $APPLICATION->IncludeFile(SITE_TEMPLATE_PATH . '/include/logo.php'); ?>
									<? $APPLICATION->IncludeFile(SITE_TEMPLATE_PATH . '/include/logo_light.php'); ?>
								</div>
								<div class="head__right col col-5">
									<div class="head__right_content max991">
									
										<button class="btn btn_menu">
											<span class="lines">
												<span class="line line-1"></span>
												<span class="line line-2"></span>
												<span class="line line-3"></span>
											</span>
										</button>
									</div>
									<div class="head__right_content min991">
										<?$APPLICATION->IncludeComponent(
											"bitrix:menu", 
											"head_menu", 
											array(
												"ALLOW_MULTI_SELECT" => "N",
												"CHILD_MENU_TYPE" => "left",
												"DELAY" => "N",
												"MAX_LEVEL" => "1",
												"MENU_CACHE_GET_VARS" => array(
												),
												"MENU_CACHE_TIME" => "3600",
												"MENU_CACHE_TYPE" => "N",
												"MENU_CACHE_USE_GROUPS" => "Y",
												"ROOT_MENU_TYPE" => "top",
												"USE_EXT" => "N",
												"COMPONENT_TEMPLATE" => "head_menu"
											),
											false
										);?>
										<?
											//Онлайн-трансляция сегодня
											$arConcertOnlineFilter = [
												"!PROPERTY_online_stream" => false,
												">=DATE_ACTIVE_TO" => date('d.m.Y'),
												"<DATE_ACTIVE_TO" => date('d.m.Y', strtotime('+1 day')),
											];
											$APPLICATION->IncludeComponent(
												"bitrix:news.list",
												"concert-online-btn",
												array(
													"IBLOCK_ID" => 1,
													"IBLOCK_TYPE" => "Event",
													"NEWS_COUNT" => 1,
													"SORT_BY1" => "ACTIVE_TO",
													"SORT_ORDER1" => "ASC",
													"SORT_BY2" => "NAME",
													"SORT_ORDER2" => "DESC",
													"FILTER_NAME" => "arConcertOnlineFilter",
													"FIELD_CODE" => array("DATE_ACTIVE_TO"),
													"PROPERTY_CODE" => array("stream_viewer", "online_stream"),
													"CHECK_DATES" => "Y",
													"DETAIL_URL" => "",
													"AJAX_MODE" => "N",
													"AJAX_OPTION_JUMP" => "N",
													"AJAX_OPTION_STYLE" => "Y",
													"AJAX_OPTION_HISTORY" => "N",
													"AJAX_OPTION_ADDITIONAL" => "",
													"CACHE_TYPE" => "A",
													"CACHE_TIME" => "1800",
													"CACHE_FILTER" => "Y",
													"CACHE_GROUPS" => "Y",
													"PREVIEW_TRUNCATE_LEN" => "",
													"ACTIVE_DATE_FORMAT" => "d.m.Y H:i:s",
													"SET_TITLE" => "N",
													"SET_BROWSER_TITLE" => "N",
													"SET_META_KEYWORDS" => "N",
													"SET_META_DESCRIPTION" => "N",
													"SET_LAST_MODIFIED" => "N",
													"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
													"ADD_SECTIONS_CHAIN" => "N",
													"HIDE_LINK_WHEN_NO_DETAIL" => "N",
													"PARENT_SECTION" => "",
													"PARENT_SECTION_CODE" => "",
													"INCLUDE_SUBSECTIONS" => "Y",
													"STRICT_SECTION_CHECK" => "N",
													"PAGER_TEMPLATE" => ".default",
													"DISPLAY_TOP_PAGER" => "N",
													"DISPLAY_BOTTOM_PAGER" => "N",
													"PAGER_TITLE" => "Новости",
													"PAGER_SHOW_ALWAYS" => "N",
													"PAGER_DESC_NUMBERING" => "N",
													"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
													"PAGER_SHOW_ALL" => "Y",
													"PAGER_BASE_LINK_ENABLE" => "N",
													"SET_STATUS_404" => "N",
													"SHOW_404" => "N",
													"MESSAGE_404" => ""
												),
												false
											);
										?>
										<? if ($USER->IsAdmin()) : ?>
										<div class="head__languages ">
											<div class="head__languages_dropdown dropdown dropdown-light">
												<div class="dropdown__value"><span class="value">En</span></div>
												<div class="dropdown__list">
													<div class="dropdown__item">
														<a href="" class="value" data-google-lang="en">En</a>
													</div>
													<div class="dropdown__item">
														<a href="" class="value" data-google-lang='zh'>Zh</a>
													</div>
												</div>
											</div>
										</div>
										<? endif;?>
										<!-- <div class="head__languages ">
											<div class="head__languages_dropdown dropdown dropdown-light">
												<div class="dropdown__value"><span class="value">En</span></div>
												<div class="dropdown__list">
												<div class="dropdown__item">
												<a href="/en/" class="value" data-google-lang='en'>En</a>
											</div>
											<div class="dropdown__item">
												<a href="/ru/" class="value" data-google-lang='ru'>Ru</a>
											</div>
													
												</div>
											</div>
										</div> -->
									</div>
									
								</div>
							</div>
						</div>

					</div>
				</header>
			<?endif;?>
			<!-- FS -->
			<? if ($APPLICATION->GetCurPage() != '/new-year-2026/' && $APPLICATION->GetCurDir() != '/kviz-infokiosk/' && $APPLICATION->GetCurDir() != '/kviz-letniy-festival/' && $APPLICATION->GetCurDir() != '/kviz-detyam/' && $APPLICATION->GetCurDir() != '/kviz-detyam-copy/' && $APPLICATION->GetCurDir() != '/kviz-detyam-2025/') : ?>
				<section data-scroll-section class="section__fs<? if (!$isMainPage) : ?> section<?endif;?> <? if ($isMainPage || $APPLICATION->GetCurPage(true) == '/404.php') echo 'fs_index';?> fs">
					<? if ($isMainPage) : ?>
						<div class="fs__content">
							<div class="fs__images_slider  swiper">
								<div class="swiper-wrapper">
									<?
									$APPLICATION->IncludeComponent("bitrix:news.list", "slider-home-lib", Array(
										"ACTIVE_DATE_FORMAT" => "d.m.Y",	// Формат показа даты
											"ADD_SECTIONS_CHAIN" => "Y",	// Включать раздел в цепочку навигации
											"AJAX_MODE" => "N",	// Включить режим AJAX
											"AJAX_OPTION_ADDITIONAL" => "",	// Дополнительный идентификатор
											"AJAX_OPTION_HISTORY" => "N",	// Включить эмуляцию навигации браузера
											"AJAX_OPTION_JUMP" => "N",	// Включить прокрутку к началу компонента
											"AJAX_OPTION_STYLE" => "Y",	// Включить подгрузку стилей
											"CACHE_FILTER" => "N",	// Кешировать при установленном фильтре
											"CACHE_GROUPS" => "Y",	// Учитывать права доступа
											"CACHE_TIME" => "36000000",	// Время кеширования (сек.)
											"CACHE_TYPE" => "A",	// Тип кеширования
											"CHECK_DATES" => "Y",	// Показывать только активные на данный момент элементы
											"COMPOSITE_FRAME_MODE" => "A",	// Голосование шаблона компонента по умолчанию
											"COMPOSITE_FRAME_TYPE" => "AUTO",	// Содержимое компонента
											"DETAIL_URL" => "",	// URL страницы детального просмотра (по умолчанию - из настроек инфоблока)
											"DISPLAY_BOTTOM_PAGER" => "Y",	// Выводить под списком
											"DISPLAY_DATE" => "Y",	// Выводить дату элемента
											"DISPLAY_NAME" => "Y",	// Выводить название элемента
											"DISPLAY_PICTURE" => "Y",	// Выводить изображение для анонса
											"DISPLAY_PREVIEW_TEXT" => "Y",	// Выводить текст анонса
											"DISPLAY_TOP_PAGER" => "N",	// Выводить над списком
											"FIELD_CODE" => array(	// Поля
												0 => "DETAIL_PICTURE",
												1 => "",
											),
											"FILTER_NAME" => "",	// Фильтр
											"HIDE_LINK_WHEN_NO_DETAIL" => "N",	// Скрывать ссылку, если нет детального описания
											"IBLOCK_ID" => "2",	// Код информационного блока
											"IBLOCK_TYPE" => "Event",	// Тип информационного блока (используется только для проверки)
											"INCLUDE_IBLOCK_INTO_CHAIN" => "Y",	// Включать инфоблок в цепочку навигации
											"INCLUDE_SUBSECTIONS" => "Y",	// Показывать элементы подразделов раздела
											"MESSAGE_404" => "",	// Сообщение для показа (по умолчанию из компонента)
											"NEWS_COUNT" => "20",	// Количество новостей на странице
											"PAGER_BASE_LINK_ENABLE" => "N",	// Включить обработку ссылок
											"PAGER_DESC_NUMBERING" => "N",	// Использовать обратную навигацию
											"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",	// Время кеширования страниц для обратной навигации
											"PAGER_SHOW_ALL" => "N",	// Показывать ссылку "Все"
											"PAGER_SHOW_ALWAYS" => "N",	// Выводить всегда
											"PAGER_TEMPLATE" => ".default",	// Шаблон постраничной навигации
											"PAGER_TITLE" => "Новости",	// Название категорий
											"PARENT_SECTION" => "",	// ID раздела
											"PARENT_SECTION_CODE" => "",	// Код раздела
											"PREVIEW_TRUNCATE_LEN" => "",	// Максимальная длина анонса для вывода (только для типа текст)
											"PROPERTY_CODE" => array(	// Свойства
												0 => "video_mobile",
												1 => "time",
												2 => "date",
												3 => "slider_tittle",
												4 => "link_event",
												5 => "video_desctop",
												11 =>'slide_dark'
											),
											"SET_BROWSER_TITLE" => "Y",	// Устанавливать заголовок окна браузера
											"SET_LAST_MODIFIED" => "N",	// Устанавливать в заголовках ответа время модификации страницы
											"SET_META_DESCRIPTION" => "Y",	// Устанавливать описание страницы
											"SET_META_KEYWORDS" => "Y",	// Устанавливать ключевые слова страницы
											"SET_STATUS_404" => "N",	// Устанавливать статус 404
											"SET_TITLE" => "Y",	// Устанавливать заголовок страницы
											"SHOW_404" => "N",	// Показ специальной страницы
											"SORT_BY1" => "ACTIVE_TO",
											"SORT_BY2" => "NAME",
											"SORT_ORDER1" => "ASC",
											"SORT_ORDER2" => "DESC",	// Направление для второй сортировки новостей
											"STRICT_SECTION_CHECK" => "N",	// Строгая проверка раздела для показа списка
										),
										false
									);
									$APPLICATION->IncludeComponent(
										"bitrix:news", 
										"slider-home", 
										array(
											"ADD_ELEMENT_CHAIN" => "N",
											"ADD_SECTIONS_CHAIN" => "Y",
											"AJAX_MODE" => "N",
											"AJAX_OPTION_ADDITIONAL" => "",
											"AJAX_OPTION_HISTORY" => "N",
											"AJAX_OPTION_JUMP" => "N",
											"AJAX_OPTION_STYLE" => "Y",
											"BROWSER_TITLE" => "-",
											"CACHE_FILTER" => "N",
											"CACHE_GROUPS" => "Y",
											"CACHE_TIME" => "36000000",
											"CACHE_TYPE" => "N",
											"CHECK_DATES" => "Y",
											"DETAIL_ACTIVE_DATE_FORMAT" => "d.m.Y",
											"DETAIL_DISPLAY_BOTTOM_PAGER" => "Y",
											"DETAIL_DISPLAY_TOP_PAGER" => "N",
											"DETAIL_FIELD_CODE" => array(
												0 => "",
												1 => "",
											),
											"DETAIL_PAGER_SHOW_ALL" => "Y",
											"DETAIL_PAGER_TEMPLATE" => "",
											"DETAIL_PAGER_TITLE" => "Страница",
											"DETAIL_PROPERTY_CODE" => array(
												0 => "",
												1 => "",
											),
											"DETAIL_SET_CANONICAL_URL" => "N",
											"DISPLAY_BOTTOM_PAGER" => "Y",
											"DISPLAY_DATE" => "Y",
											"DISPLAY_NAME" => "Y",
											"DISPLAY_PICTURE" => "Y",
											"DISPLAY_PREVIEW_TEXT" => "Y",
											"DISPLAY_TOP_PAGER" => "N",
											"HIDE_LINK_WHEN_NO_DETAIL" => "N",
											"IBLOCK_ID" => "1",
											"IBLOCK_TYPE" => "Event",
											"INCLUDE_IBLOCK_INTO_CHAIN" => "Y",
											"LIST_ACTIVE_DATE_FORMAT" => "d.m.Y",
											"LIST_FIELD_CODE" => array(
												0 => "DATE_ACTIVE_TO",
												1 => " ",
												2 => "",
											),
											"LIST_PROPERTY_CODE" => array(
												0 => "xeshteg",
												1 => "hall",
												2 => "date_time",
												3 => "show_slider_home",
												4 => "slider_tittle",
												5 => "slide_dark",
												6 => "buy_ticket",
												7 => "date_month",
												8 => "pushkin",
												9 => "slide_without_bg",
												10 => "linck_slider_home",
												11 => "senz",
												12 => "date_number",
												13 => "slider_home",
												14 => "slider_home_mobile",
												15 => "",
											),
											"MESSAGE_404" => "",
											"META_DESCRIPTION" => "-",
											"META_KEYWORDS" => "-",
											"NEWS_COUNT" => "999",
											"PAGER_BASE_LINK_ENABLE" => "N",
											"PAGER_DESC_NUMBERING" => "N",
											"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
											"PAGER_SHOW_ALL" => "N",
											"PAGER_SHOW_ALWAYS" => "N",
											"PAGER_TEMPLATE" => ".default",
											"PAGER_TITLE" => "Новости",
											"PREVIEW_TRUNCATE_LEN" => "",
											"SEF_MODE" => "Y",
											"SET_LAST_MODIFIED" => "N",
											"SET_STATUS_404" => "N",
											"SET_TITLE" => "Y",
											"SHOW_404" => "N",
											"SORT_BY1" => "DATE_ACTIVE_TO",
											"SORT_BY2" => "SORT",
											"SORT_ORDER1" => "ASC",
											"SORT_ORDER2" => "ASC",
											"STRICT_SECTION_CHECK" => "N",
											"USE_CATEGORIES" => "N",
											"USE_FILTER" => "N",
											"USE_PERMISSIONS" => "N",
											"USE_RATING" => "N",
											"USE_RSS" => "N",
											"USE_SEARCH" => "N",
											"USE_SHARE" => "N",
											"COMPONENT_TEMPLATE" => "slider-home",
											"USE_REVIEW" => "N",
											"SEF_FOLDER" => "event/",
											"COMPOSITE_FRAME_MODE" => "A",
											"COMPOSITE_FRAME_TYPE" => "AUTO",
											"SEF_URL_TEMPLATES" => array(
												"news" => "",
												"section" => "#SECTION_CODE#/",
												"detail" => "#SECTION_CODE#/#ELEMENT_CODE#/",
											)
										),
										false
									); 
									?>
								</div>
								<div class="section fs__nav_section">
									<div class="container fs__nav_container">
									<div class="swiper-nav">
										<div class="btn btn_slider swiper-prev-btn">
											<svg width="7.667969" height="14.337158" viewBox="0 0 7.66797 14.3372" fill="none"
												xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
												<path id="Vector" d="M7.16602 0.501953L0.5 7.1687L7.16602 13.8352" stroke="currentColor"
													stroke-opacity="1.000000" stroke-width="1.000000" stroke-linejoin="round"
													stroke-linecap="round" />
											</svg>
										</div>
										<div class="btn btn_slider swiper-next-btn">
											<svg width="7.666016" height="14.337158" viewBox="0 0 7.66602 14.3372" fill="none"
												xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
												<path id="Vector" d="M0.501953 0.501953L7.16797 7.1687L0.501953 13.8352" stroke="currentColor"
													stroke-opacity="1.000000" stroke-width="1.000000" stroke-linejoin="round"
													stroke-linecap="round" />
											</svg>
										</div>
									</div>
								</div>
								</div>
								
							</div>
							<div class="swiper-pagination"></div>
						</div>
					<? else : ?>
						<div class="container  <?=$APPLICATION->ShowProperty("padding_bottom")?>">
							<?$APPLICATION->IncludeComponent("bitrix:breadcrumb", "breadcrumbs", Array(
								"COMPOSITE_FRAME_MODE" => "A",	// Голосование шаблона компонента по умолчанию
									"COMPOSITE_FRAME_TYPE" => "AUTO",	// Содержимое компонента
									"PATH" => "",	// Путь, для которого будет построена навигационная цепочка (по умолчанию, текущий путь)
									"SITE_ID" => "s1",	// Cайт (устанавливается в случае многосайтовой версии, когда DOCUMENT_ROOT у сайтов разный)
									"START_FROM" => "0",	// Номер пункта, начиная с которого будет построена навигационная цепочка
								),
								false
							);?>
						
							<div class="fs__page-title <? if ($APPLICATION->GetCurPage(false) == '/contacts/') : ?><? endif; ?> <?=$APPLICATION->ShowProperty("no_title")?><? if ($APPLICATION->GetCurPage() == "/o-zale/navigatsiya-po-zalu/") : ?> w100<?endif;?>" data-scroll>
								<? if ($APPLICATION->GetPageProperty("no_title") != 'd-none') : ?>
									<div class="title_container">
										<h1 class="h1"><? if ($APPLICATION->GetCurPage() == "/programma-loyalnosti/intempo/") : ?>In Temро<br>Программа привилегий<?else : ?><?=$APPLICATION->ShowTitle(false)?><? endif;?></h1>
									</div>
								<?endif;?>
								<? if ($APPLICATION->GetCurPage() != "/o-zale/halls/novoe-kontsertnoe-prostranstvo/") : ?>
									<? if (($APPLICATION->GetDirProperty('PAGE_SUBTITLE') || $APPLICATION->GetPageProperty('PAGE_SUBTITLE')) && $APPLICATION->GetCurPage() != "/o-zale/navigatsiya-po-zalu/") : ?>
										<p class="fs__page-subtitle" data-scroll><?=$APPLICATION->ShowProperty('PAGE_SUBTITLE') ?></p>
									<? endif; ?>
									<? if ($APPLICATION->GetCurPage() == "/informatsiya/karera/" || $APPLICATION->GetCurPage() == "/information/careers/") : ?>
										<p class="fs__page-subtitle" data-scroll><div class="d-flex justify-center"><button data-target="#feedback" class="btn btn_scroll">Отправить резюме</button></div></p>
									<? endif; ?>
									<? if ($APPLICATION->GetCurPage() == "/o-zale/navigatsiya-po-zalu/") : ?>
											<div class="fs__navigation_subtitle">
												<div class="fs__page-subtitle" ><?=$APPLICATION->ShowProperty('PAGE_SUBTITLE') ?> </div> 
													<div class="download-sheme">
														<a href="" download="Схема мест зала"
															class="download-link">
															<span class="btn btn_slider">
																<svg width="19.000000" height="18.000000" viewBox="0 0 19 18" fill="none"
																	xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
																	<path id="Vector (Stroke)"
																		d="M9.41321 0C9.68945 0 9.91321 0.223877 9.91321 0.5L9.91321 11.7094L11.9778 9.63641C12.1726 9.4408 12.4891 9.44012 12.6848 9.63501C12.8805 9.82983 12.8812 10.1464 12.6863 10.3421L9.77026 13.2701C9.67651 13.3643 9.54895 13.4172 9.41602 13.4172C9.39136 13.4172 9.36682 13.4154 9.34265 13.4119C9.21838 13.3943 9.10889 13.3311 9.03149 13.2397L6.14575 10.3421C5.95093 10.1464 5.95154 9.82983 6.14722 9.63501C6.3429 9.44012 6.65942 9.4408 6.85437 9.63641L8.91321 11.7039L8.91321 0.5C8.91321 0.223877 9.13708 0 9.41321 0ZM0 5L5.23682 5C5.51294 5 5.73682 5.22388 5.73682 5.5C5.73682 5.77612 5.51294 6 5.23682 6L1 6L1 17L18 17L18 6L13.7632 6C13.4871 6 13.2632 5.77612 13.2632 5.5C13.2632 5.22388 13.4871 5 13.7632 5L19 5L19 18L0 18L0 5Z"
																		fill="currentColor" fill-opacity="1.000000" fill-rule="evenodd" />
																</svg>
															</span>
															<span class="text">
																<span class="main_font">Схема мест зала</span>
																<span class="main_font light_text file_type"></span>
															</span>
														</a>
													</div> 
											
											
										</div>
									<? endif; ?>
									<? if ($APPLICATION->GetCurPage() == '/404.php') : ?>
										<!-- <p class="fs__page-subtitle" data-scroll><?=$APPLICATION->ShowProperty('PAGE_SUBTITLE') ?></p><br> -->
										<div class="d-flex justify-center section_pt_sm"><a href="/" class="btn btn_blur">На главную</a></div>
									<? endif ?>
								<?endif;?>
							</div>

						</div>
					<? endif; ?>

					<? if ($APPLICATION->GetCurPage() == '/404.php') : ?>
						<div class="fs_bg dark-logo" data-scroll>
							<video loop="" muted="" playsinline="" autoplay="" preload="auto">
							<source src="/upload/video/404.mov" type="video/quicktime">
							<source src="/upload/video/404.webm" type="video/webm">
							</video>
						</div>
						<div class="fs_bg light-logo" data-scroll>
							<video loop="" muted="" playsinline="" autoplay="" preload="auto">
							<source src="/upload/video/404_loop_bl.mov" type="video/quicktime">
							<source src="/upload/video/404_loop_bl_webm.webm" type="video/webm">
							</video>
						</div>
					<? endif ?>
				</section>
			<? endif;?>

			<!-- END FS -->

			