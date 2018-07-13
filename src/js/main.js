import "../components/backToTop/scroll.js";
$(function() {
    $('.locale__link').on("click", function() {
        var lang = $(this).attr('id');
        if (lang == "en") {
            $('[data-localize]').localize("../static/locales/locale", { language: "en" });
            console.log("en");
        } else if (lang == "ru") {
            $('[data-localize]').localize("../static/locales/locale", { language: "ru" });
            console.log("ru")
        } else if (lang == "gb") {
            $('[data-localize]').localize("../static/locales/locale", { language: "gb" });
        } else if (lang == "fr") {
            $('[data-localize]').localize("../static/locales/locale", { language: "fr" });
        } else if (lang == "tur") {
            $('[data-localize]').localize("../static/locales/locale", { language: "tur" });
        } else if (lang == "po") {
            $('[data-localize]').localize("../static/locales/locale", { language: "po" });
        }
    })
});