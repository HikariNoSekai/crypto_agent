import "../components/backToTop/scroll.js";
$(function (){
	$('.locale__link').on("click", function() {
		var lang = $(this).attr('id');
		if (lang == "en") {
			$('[data-localize]').localize("./locales/locale", {language: "en"});
		} else if (lang == "ru") {
			$('[data-localize]').localize("./locales/locale", {language: "ru"});
		}
		// else if (lang == "gb") {
		// 	$('[data-localize]').localize("../locales/locale", {language: "gb"});
		// } else if (lang == "fr") {
		// 	$('[data-localize]').localize("../locales/locale", {language: "fr"});
		// } else if (lang == "tur") {
		// 	$('[data-localize]').localize("../locales/locale", {language: "tur"});
		// } else if (lang == "po") {
		// 	$('[data-localize]').localize("../locales/locale", {language: "po"});
		// }
	})
});
