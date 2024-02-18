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
} from "./function_script.js";
// const userNames = iterateThroughNames();

// // console.log(userNames);

// const ages = playWithAge();
// // console.log(ages);

// const userAges = filterByAge();
// console.log(userAges);

// const pairs = pairUserByAges();
// console.log(pairs);

const values = hof()();
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
console.log(x.myPop());

console.log(x); // new updated array
