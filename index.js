// console.log("node started");

import {
  iterateThroughNames,
  playWithAge,
  filterByAge,
  pairUserByAges,
} from "./loops_script.js";
import { hof } from "./function_script.js";
import { hosting } from "./interview.js";
import {
  proxyObjectLearning,
  myPromise,
  readingFile,
  createOrReadFile,
} from "./function_script.js";
// import lodash methods-:
import { lodashArrayMethods } from "./lodash.js";
import {
  getPairsOfNum,
  findPalindrome,
  twoSum,
  find3Sum,
  // removeDuplicates,
  moveZeros,
} from "./loops_script.js";
// import dsa files
import Stack, { TextEditor } from "./dsa/stack.js";
import polyfill from "./polyfils.js";
import {
  fizzBuzz,
  calculateFatorial,
  objectTarget,
  flattenArray,
  factorial,
  fibonacci,
} from "./function_script.js";
import {
  reverseString,
  checkForPalindrom,
  stringComp,
  findMaxNumber,
  sumOfElements,
  removeDuplicates,
  countVowels,
} from "./function_script.js";
// const userNames = iterateThroughNames();

// // console.log(userNames);

// const ages = playWithAge();
// // console.log(ages);

// const userAges = filterByAge();
// console.log(userAges);

// const pairs = pairUserByAges();
// console.log(pairs);

// const values = hof()();
//  console.log(values);

// hosting();

// iife

// (function(){
// console.log('i am iife');
// })()

// proxyObjectLearning();

const handler1 = () => {};
const handler2 = () => {};

// myPromise("paras", handler1, handler2)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// readingFile().then((data) => {

// const functionFound = data.match('function');
// console.log(functionFound);
// // console.log(data[functionFound])
// }).catch((err) => console.log(err));

// const multiplePromises =  Promise.all([myPromise('jay shree ram',handler1,handler2),readingFile()]);
// console.log(multiplePromises.then((d)=>console.log(d)))

// custom push method-:
//  push only returns new length of array
Array.prototype.myPush = function (...arr) {
  for (let i = 0; i < arr.length; i++) {
    this[this.length] = arr.length;
  }
  return this.length;
};

const arr = [20];
// console.log(arr.myPush(10,30,40));

// custom pop method-:

// pop removes the last element from array
// returns the removed element

Array.prototype.myPop = function () {
  //  get last element
  let lastElem = this[this.length - 1];
  //  reduce length of array
  this.length = this.length - 1;
  return lastElem;
};

const x = [10, 20, 30];
// console.log(x.myPop());

// console.log(x); // new updated array

// createOrReadFile().then((data)=>console.log(data)).catch((err)=>console.log(err));

const compactValue = lodashArrayMethods._compact([1, 2, 3, 5, 0]);
// console.log(compactValue);
const differ = lodashArrayMethods._difference([2, 1, 4, 5, 6, 3], [2, 3]);
// console.log(differ);

const dropped = lodashArrayMethods._dropRight([1, 2, 3, 4, 5], 2);
// console.log(dropped);

const pulledValue = lodashArrayMethods._pullAt([1, 2, 3, 4, 7, 8, 5], [2, 3]);
// console.log(pulledValue);

const editor = new TextEditor();

const operation1 = {
  type: "typing",
  data: "hello world",
};

const operation2 = {
  type: "deletion",
  data: "some code removed",
};

editor.addOperation(operation1);
editor.addOperation(operation2);

// console.log(editor.getOperations());

//  undo some of the changes
editor.undoOperation();
// console.log(editor.getOperations());

const numPairs = getPairsOfNum([10, 20, 25, 40], 45);

// console.log(numPairs);

// console.log(findPalindrome('baba'));

// console.log(twoSum([10,20,34],5));
// console.log(find3Sum([-1, 0, 1, 2, -1, -4]));

// console.log(removeDuplicates([0,  1, 1, 1, 2, 2, 3, 3, 4]));
// console.log(moveZeros([0, 1, 0, 3, 12]))

// polyfill();

// fizzBuzz();

// calculateFatorial(5);

const targetObj = objectTarget({ user: "Paras", age: 23 }, "age", {
  lang: "JS",
});
// console.log(targetObj);

// console.log(b,'value of b')

// var b;
// console.log(b,'value of b after declaration');
// b = 20;

// console.log(b);

// setTimeout(() => {
//   console.log("print timeout");
// });

// console.log("print start");

// const mycbFunc = (cb)=>{
//   cb();
// }

// mycbFunc(()=>{console.log('my cb func');})

// new Promise((resolve, reject) => {
//   resolve("promise resolved");
// })
//   .then((data) => console.log(data))
//   .catch((eror) => console.log(eror));

// const asyncValue = async (cb) => {
//   cb();
// };

// asyncValue(() => {
//   console.log("async value");
// });

// console.log("print end");

// const reversedStr = reverseString('paras')
// console.log(reversedStr);

// const palind =  checkForPalindrom('paras');

// console.log(palind);

// const anagram  =  checkIfAnagram('lolc','lola');
// console.log(anagram);

const compStr = stringComp("aabcccccaaa");
// console.log(compStr);

// const flatten =  flattenArray([[1,2],[2,3,[4,5,[7,8]]]],5);
// console.log(flatten)

const factorialValue = factorial(5);
// console.log(factorialValue);

// const fibonacciSeries =  fibonacci(5);
// console.log(fibonacci);

// const max_num = findMaxNumber([20,36,18,29,56,34,45,98]);
// console.log(max_num);

// const sum = sumOfElements([10,20,30,5.5]);
// console.log(sum);


const removed_duplicates = removeDuplicates([10,20,20,35,45]);
// console.log(removed_duplicates);


const vowels_counter = countVowels('origin');

// console.log(vowels_counter);