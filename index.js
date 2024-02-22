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

// import dsa files
import Stack, { TextEditor } from "./dsa/stack.js";
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
console.log(editor.getOperations());