'use strict';

var captainListController = require('./captainList.controller.js');
var captainListService = require('./captainList.service.js');
require("./captainList.scss");

module.exports = angular.module('starTrekApp.captainList', [
])
.factory( 'CaptainListService', captainListService )
.controller( 'CaptainListController', ['$scope', 'CaptainListService', captainListController ])
