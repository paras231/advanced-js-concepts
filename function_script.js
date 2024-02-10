// higher order functions-:

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
    set(target,prop,value,receiver){
        console.log(`Setting ${prop} to ${value}`);
        return Reflect.set(target, prop, value, receiver);
    }
  };

  const proxy = new Proxy(target, handlers);
  proxy.text = 'hello this is new text';
  console.log(proxy.text);
}
