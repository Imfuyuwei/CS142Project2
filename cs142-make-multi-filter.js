'use strict';

function cs142MakeMultiFilter(originalArray) {
	// Make a currentArray of the original array, currentArray will be the current array.
	var currentArray = originalArray.slice();


	var arrayFilter = function(filterCriteria, callback) {
		if (typeof filterCriteria === 'function') {
			// Array.filter mehtod apllies the criteria to the array, return a new array.
			currentArray = currentArray.filter(filterCriteria);

			// The call() method can be used to invoke (call) a method with an owner object as an argument (parameter).
			// The first parameter is the object to which the "this" variable is set to in the context of the function call.
			if (typeof callback === 'function') {
				callback.call(originalArray, currentArray);
			}
			
			return arrayFilter;
		} else {
			// If the filterCriteria is not a function, directly return the current array.
			return currentArray;
		}
	};
	return arrayFilter;
}