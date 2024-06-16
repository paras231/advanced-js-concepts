// polyfills for js array methods-:
//  can be asked in interviews
export default function polyfill() {
  // create a polyfill for map method-:

  //  array map method takes a callback as parameter
  //  it runs callback for each element of the array
  // array map can modify the original array
  // it returns the modified array
  Array.prototype.myMap = function (cb) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      const outcome = cb(this[i], i);
      result.push(outcome);
    }
    return result;
  };

  //   polyfill for array filter method
  //  filter method does not execute callback for empty array
  // it does not change the original array

  Array.prototype.myFilter = function (cb) {
    if (this.length < 1) {
      return this;
    }
    let result = [];
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i)) {
        result.push(this[i]);
      }
    }
    return result;
  };

  //    polyfill for array splice method
  // its takes 3 argunments (2 are options) first is index second is howmany , third is new elements to be added
  //    returns an array containing removed items
  Array.prototype.mySplice = function (index, howMany, ...items) {
    let removedItems = [];
    for (let i = index; i < this.length; i++) {
      removedItems.push(this[i]);
    }
    //  decrease array length (remove items)
    this.length = this.length - howMany;
    return removedItems;
  };
  const array = [2, 3, 4, 5];

  array.mySplice(0, 1);

  console.log(array);
}

// console.log(array.splice(1, 3)); // deleted elements [3,4,5]

// console.log(array); // [2]

/**
 * create a polyfill for string.split() method
 * @param {String} seperator
 * @return {Array} array of strings
 */

String.prototype.mySplit = function (seperator) {
  if (!seperator) return [this];
  let result = [];
  let startIndex = 0;
  for (let index = 0; index < this.length; index++) {
    if (this[index] === seperator) {
      result.push(this.substring(startIndex, index));
      startIndex = index + 1;
    }
  }
  result.push(this.substring(startIndex));
  return result;
};

const myName = "my.name is.paras";

const value_split = myName.mySplit(".");
// console.log(value_split);

/**
 * polyfill for string.substring()
 * @param {Number} start index
 * @param {Number} end index
 * @return {String} string
 */

String.prototype.mySubString = function (start, end) {
  //  handle some cases

  //  if start is not provided
  start = start || 0;
  //   if end is not provided
  end = end || this.length;

  //  if start is negative
  if (start < 0) {
    start = 0;
  }
  // if end is negative
  if (end < 0) {
    end = 0;
  }
  //  if start is greater than end  swap them
  if (start > end) {
    [start, end] = [end, start];
  }
  // if end is greater than length of string
  if (end > this.length) {
    end = this.length;
  }
  let result = "";

  //  loop through string from start to end index
  for (let index = start; index < end; index++) {
    result += this[index];
  }
  return result;
};

const subVal = "they are not allowed";

// console.log(subVal.mySubString(4, 20));

