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

array.mySplice(0,1);

console.log(array);
}



// console.log(array.splice(1, 3)); // deleted elements [3,4,5]

// console.log(array); // [2]
