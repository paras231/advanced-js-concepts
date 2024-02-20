//  this file consists of creation of custom lodash functions

export const lodashArrayMethods = {
  // 1. _compact method , Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

  _compact: function (arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i] !== false &&
        arr[i] !== null &&
        arr[i] !== undefined &&
        !isNaN(arr[i]) &&
        arr[i] !== 0 &&
        arr[i] !== ""
      ) {
        result.push(arr[i]);
      }
    }
    return result;
  },
  // 2.   Creates an array of array values not included in the other given arrays
  _difference: function (array, values) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (!values.includes(array[i])) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  },
  //   3. Creates a slice of array with n elements dropped from the beginning
  //    n =  number of elements to drop from array
  _drop: function (array, n = 1) {
    let newArray = [];
    for (let i = n; i < array.length; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  },
  //   4. Creates a slice of array with n elements dropped from the end
  _dropRight: function (array, n = 1) {
    if (n >= array.length) {
      return [];
    } else {
      let newArray = [];
      for (let i = 0; i < array.length - n; i++) {
        newArray.push(array[i]);
      }
      return newArray;
    }
  },
  //   5. removes all given values from array
  _pull: function (array, ...values) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (!values.includes(array[i])) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  },
  // 6 .Removes elements from array corresponding to indexes and returns an array of removed elements.

  _pullAt: function (array, [indexes]) {
    
  },
};
