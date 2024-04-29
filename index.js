console.log("node js advanced concepts");

/**
 * using setImmediate() in node js
 */

//  when to use this function -:

// theory and docs of setImmediate -: https://nodejs.org/en/learn/asynchronous-work/understanding-setimmediate

//  examples

// 1.

const baz = () => console.log("baz");

// setImmediate function takes a callback
setImmediate(baz);

const myPromise = new Promise((resolve, reject) => {
  resolve("value");
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err));


  setTimeout(()=>console.log('timeout running after 0sec.'),0);

  process.nextTick(()=>console.log('running in process next tick'));

  