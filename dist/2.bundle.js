webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var captainListController = __webpack_require__(6);
	var captainListService = __webpack_require__(7);
	__webpack_require__(11);

	module.exports = angular.module('starTrekApp.captainList', [
	])
	.factory( 'CaptainListService', captainListService )
	.controller( 'CaptainListController', ['$scope', 'CaptainListService', captainListController ])


/***/ },
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function($scope, captainListService) {

		$scope.captains = captainListService.getData();
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function() {
		var data = [
	               {name: 'James T. Kirk'},
	               {name: 'Jean L. Picard'},
	               {name: 'Benjamin Sisko'},
	               {name: 'Katherine Janeway'}
		];

		return {
			getData: function() {
				return data;
			}
		}
	}


/***/ },
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/luwenhuang/Sites/blog-repos/webpack-tutorial/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/blog-repos/webpack-tutorial/node_modules/autoprefixer-loader/index.js!/Users/luwenhuang/Sites/blog-repos/webpack-tutorial/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/blog-repos/webpack-tutorial/app/modules/captain-list/captainList.scss", function() {
			var newContent = require("!!/Users/luwenhuang/Sites/blog-repos/webpack-tutorial/node_modules/css-loader/index.js!/Users/luwenhuang/Sites/blog-repos/webpack-tutorial/node_modules/autoprefixer-loader/index.js!/Users/luwenhuang/Sites/blog-repos/webpack-tutorial/node_modules/sass-loader/index.js!/Users/luwenhuang/Sites/blog-repos/webpack-tutorial/app/modules/captain-list/captainList.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	exports.push([module.id, ".captain{margin-bottom:1em}", ""]);

/***/ }
]);