// higher order functions-:
import fs from "fs";
export function hof() {
  return function innerFunc() {
    return ["HELLO WORLD"];
  };
}

// learn about proxy in javascript-:

// Proxies allow you to intercept and customize object operations

// it is more powerful that the plain objects.

// examples and explanations

// it accepts two parameters 1. is the target object and 2. is the handler object
// handler object can be defined an object having getter and setter methods

// wrap the logic inside a function

export function proxyObjectLearning() {
  const target = {
    message: "hello",
    task: "do it today",
  };

  const handlers = {
    get(target, prop, receiver) {
      console.log(`Getting ${prop}`);
      return Reflect.get(target, prop, receiver);
    },
    set(target, prop, value, receiver) {
      console.log(`Setting ${prop} to ${value}`);
      return Reflect.set(target, prop, value, receiver);
    },
  };

  const proxy = new Proxy(target, handlers);
  proxy.text = "hello this is new text";
  console.log(proxy.text);
}

// practice promises-:

export function myPromise(str, ...handlers) {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject("provide a string");
    }
    if (str && str.length < 5) {
      reject("String can not be taken as valid string");
    }

    let allHandlers = [];
    for (const handler of handlers) {
      if (typeof handler !== "function") {
        reject("handler must be function");
      }
      allHandlers.push(handler);
    }
    resolve(allHandlers);
  });
}

// readfile

export function readingFile() {
  return new Promise((resolve, reject) => {
    fs.readFile("interview.js", "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

//  writing file

// we first need to check if a file exists it does not exist , we need to create this-:

export function createOrReadFile() {
  return new Promise((resolve, reject) => {
    fs.readFile("test.js", "utf-8", (err, data) => {
      if (err) {
        // err happened and file is not available create the file
        fs.writeFile("test.js", "function fetchFile(){}", (err) => {
          if (err) {
            reject("Error creating file");
          }
          resolve("File created");
        });
      }
      resolve(data);
    });
  });
}

// function FizzBuzz

// print

export function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log(i);
    }
  }
}

//  calculate fatorial of given number-:

export function calculateFatorial(n) {
  if (n < 1) {
    return "num should be positive";
  }
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

// create a function which accepts an object and a target and key and check if object has that target key and returns the value of that target key
//  this function should return  a plain object
export function objectTarget(object, key, target) {
  // handle errors;
  if (!object || !key || !target) return "all parameters are required";
  if (typeof object !== "object")
    throw new Error(`expected an object but got ${typeof object}`);
  if (typeof key !== "string") throw new Error("Key must be a string");
  if (typeof target !== "object") throw new Error("Target must be an object");
  if (object.hasOwnProperty(key)) {
    return { ...object, ...target };
  } else {
    return "Key did not exist";
  }
}

// string base questions for interview practice.

// reverse a string-:
// approach
/**
 * first we need to convert string into array
 * then reverse that array
 * and convert that array back into string
 */
export function reverseString(str) {
  let output = "";
  let reversedArr = [];
  //  iterate through string in reverse loop  (very important)
  for (let index = str.length - 1; index >= 0; --index) {
    reversedArr.push(str[index]);
  }
  output = reversedArr.join("");
  return output;
}

/**
  check if a string is palindrom or not,
  first we need to reverse the string,
  and compare with actual input string
 */

export function checkForPalindrom(str) {
  let reversedStr = "";
  let reversedStrArr = [];
  for (let index = str.length - 1; index >= 0; --index) {
    reversedStrArr.push(str[index]);
  }
  reversedStr = reversedStrArr.join("");
  if (reversedStr === str) {
    return true;
  }
  return false;
}

/**
 * string compression method
 * check if a string has repeating characters
 * if there are repeating characters,
 * replace those characters with their counts
 * */

export function stringComp(str) {
  let compressedStr = "";
  let charCount = 0;

  let strObj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      charCount++;
      strObj[str[i]] = charCount;
    }
  }
  return strObj;
}

/**
 * flatten a multi-dimensional array into a single array
 * @param {Array} array
 * @param {Number} depth
 * @returns {Array}
 * */

// this problem can be solved using recursion.
export function flattenArray(array, depth) {
  let result = [];
  if (array.length === 0 || depth === 0) {
    return result;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      // console.log(array[i])
      const elements = flattenArray(array[i], depth - 1);
      result.push(...elements);
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

/**
 * factorial calculation using recursion
 * @param {Number} number
 * @returns {Number} number
 */

export function factorial(number) {
  if (number <= 1) {
    return 1; // Base case: factorial of 0 and 1 is 1
  } else {
    return number * factorial(number - 1); // Recursive case
  }
}

/**
 * create a Fibonacci sequence from a given number
 * @param {Number} number
 * @returns {Number} num
 */

export function fibonacci(number) {
  if (number < 1) return;
  else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
}

/**
 * find maximum number in an array
 * the array should be sorted
 * @param {Array} array
 * @returns {number} maximum number
 */

export function findMaxNumber(array) {
  const sorted_array = array.sort((a, b) => a - b);
  return sorted_array[sorted_array.length - 1];
}

/**
 * find some of all elements in array
 * @param {Array} array
 * @return {Number} sum of elements
 */

export function sumOfElements(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }
  return sum;
}

/**
 * remove duplicates from array
 * @param {Array} array to remove duplicates from
 * @return {Array} array with duplicates removed
 */

export function removeDuplicates(array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] == array[index + 1]) {
      array.splice(index, 1);
    }
  }
  return array;
}


/**
 * count vowels in a string
 * @param {String} string
 * @return {Number} count
 */

export function countVowels(string) {
  if(!string){
     return 0   ;
  }
    let vowels =['a','e','i','o','u'];
    let counter = 0;
     for (let index = 0; index < string.length; index++) {
           if(vowels.includes(string[index])) {
              counter++;
           }
     } 
     return counter;
}

/**
 * count number of words in a string
 * @param {String} string
 * @return {Number} number
 */

export function countWords(string) {
  if(!string) return 0;
  string =  string.split(' ');
  return string.length;
}

/**
 * find longest word in a string
 * @param {String} string
 * @return {String} string
 */

export function longestWord(string){
  if(!string) return 0;
  string =  string.split(' ');
  let longest_word = '';
  let longest_length = 0;
  for(let index = 0; index<string.length; index++){
     if(string[index].length>longest_length){
         longest_word = string[index];
         longest_length =  string[index].length;
     } 
  }
  return longest_word;
}

/**
 * convert each character of a sentence to upper case
 * @param {string} sentence
 * @return {string} sentence
 */

export function convertToUppercase(sentence){
  sentence = sentence.split(' ');
  let converted_sentence = '';
  for(let i=0; i<sentence.length; i++){
      
      sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1);
  }
  console.log(sentence);
  converted_sentence = sentence.join(' ');
  return converted_sentence;
}

/**
 * reverse words from sentence
 * @param {string} sentence
 * @return {string} reverse words
 */

export function reverseWordsFromSentence(sentence){
  sentence =  sentence.split(' ');
  for(let index=0 ; index<sentence.length; index++){
     let reversed_val = '';
      for(let j = sentence[index].length-1; j>=0; j--){
           reversed_val += sentence[index][j];
      }
      sentence[index] = reversed_val;
  }
 return  sentence.join(" ");
}

/**
 * sort array of objects by property
 * this only works for number properties
 */
export function sortArrayofObjectByProperty(array,property){
  let sorted_arr = [];
 
  for(let i = 0; i<array.length; i++){
      // check if property exists in object
      if(array[i].hasOwnProperty(property)){
          sorted_arr.push(array[i]);
      }
  }
  return sorted_arr.sort((a,b)=>a[property]-b[property]);
  
}

/**
 * count occurrences of elements in array
 * @param {Array} array
 * @param  property
 * @return {Number} count
 */


export function countOccourence(elements,val){
  let counter = 0;
 
  for(let i = 0; i<elements.length; i++){
      if(val==elements[i]){
          counter++;
      }
  }
  return counter;
}

/**
 * find sum of array elements
 * @param {Array} array
 * @return {Number} sum of array elements
 */

export function findAvg(array){
  let avg = 0;
  let sum =0;
  for(let i = 0; i<array.length; i++){
      sum += array[i];
  }
  avg = sum/array.length;
  return avg;
}


/**
 * convert a number into roman numerical
 * @param {Number} num
 * @return {String} roman string
 */


export function intToRoman(num){
  const romanNumericals = [
      {
          value:1000,
          symbol:"M"
      },
      {
          value:500,
          symbol:"D"
      },
      {
          value:100,
          symbol:"C"
      },
      {
          value:50,
          symbol:"L"
      },
      {
          value:10,
          symbol:"X"
      },
      {
          value:1,
          symbol:"I"
      }
      ];
      let result = '';
      for(let i =0; i<romanNumericals.length;i++){
          
          while(num>= romanNumericals[i].value){
              result += romanNumericals[i].symbol;
              num -= romanNumericals[i].value;
          }
      }
      return result;
}