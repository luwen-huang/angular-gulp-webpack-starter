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
