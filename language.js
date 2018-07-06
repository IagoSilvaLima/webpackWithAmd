define([

], function () {
	'use strict';
	window._i18n = {
		locale: getLanguage()
	};

	function getLanguage() {
		if (navigator.languages && navigator.languages[0])
			return navigator.languages[0].toLowerCase();
		return navigator.language.toLowerCase();
	}
});