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
  }else{
    return 'Key did not exist'
  }
}

// 
