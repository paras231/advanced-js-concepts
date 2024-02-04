// console.log("node started");

import {
  iterateThroughNames,
  playWithAge,
  filterByAge,
  pairUserByAges,
} from "./loops_script.js";
import { hof } from "./function_script.js";
import { hosting } from "./interview.js";
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

hosting();

// iife

// (function(){
// console.log('i am iife');
// })()