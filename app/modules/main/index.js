'use strict';

var mainController = require('./main.controller.js');

require('ng-cache!./main.html');
require("./main.scss");

module.exports = angular.module('starTrekApp.main', [
])
.controller( 'MainController', ['$scope', mainController ]);
