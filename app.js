// import * as es6  from './es6';
// console.log(es6.default());

define([
	'babel-polyfill',
	'angular',
	'axios',
	'./language',
	'amdi18n-loader!./nls/app.i18n',
	'worker-loader!./workers/cache-worker',
	'./json/objeto.json',
	'./es6',
	'./comp'
	// './other',
], (polyfill, angular, axios, language, i18n, worker, objetoJson, es6, comp) => {
	'use strict';

	angular.module('app', ['react']);
	angular.module('app').controller('appCtrl', appCtrl);
	// console.log(versionJSON);
	// var worker = new Worker();
	// worker.postMessage(objetoJson);
	es6.default();

	(async () => {
		const { data } = await axios.get('./version.json')
		console.log(data);
		// .then(({ data }) => console.log(data))
	})();

	
	angular.module('app').factory('mathservice', function () {
		const addTwoNumbers = (x, y) => x + y;

		return {
			addTwoNumbers
		}
	});

	function appCtrl($scope, mathservice) {
		$scope.name = mathservice.addTwoNumbers(1, 1);
	}


	function readTextFile(file, callback) {
		var rawFile = new XMLHttpRequest();
		rawFile.overrideMimeType("application/json");
		rawFile.open("GET", file, true);
		rawFile.onreadystatechange = function () {
			if (rawFile.readyState === 4 && rawFile.status == "200") {
				callback(rawFile.responseText);
			}
		}
		rawFile.send(null);
	}

	appCtrl.$inject = ['$scope', 'mathservice'];
	// document.onreadystatechange = function () {
	// 	if (document.readyState == 'interactive') {

	// 	}
	// }
});