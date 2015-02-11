'use strict';

module.exports = function($scope, captainListService) {

	$scope.captains = captainListService.getData();
}
