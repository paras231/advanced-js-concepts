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

