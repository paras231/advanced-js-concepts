
// primitive data types-:

//  Data types that can not be changed 


// 1. String
// 3. Number
// 4. Boolean
// 5. Symbol
// 6. Null
// 7. Undefined

//  non- premitive data types -:

//. Array   , objects


//  hoisting in js


export function hosting(){
// console.log(a);
    var a = 10;
    // console.log(a);
    // console.log(c);
   c = 30;
   
    var c;
    // console.log(k)
    // let k = 30
}
//  function expression 

const func1 =  function(){
    console.log('i am function exp')
}

function callMe(){
    console.log('i am function declaration')
}

// higher order functions

function hof(){
    return function(){
        // console.log(" im hof")
    }
}
hof()();

// this keyword-:

// function myThis(){
//     console.log(this);
// }
// myThis();

const myObj = {
    getData: function(){
        console.log(this);
    }
}

// myObj.getData();

// function currying in js-:

function curriedFunc(a){
  return function(b){
    return a+b;
  }
}
const add =  curriedFunc(3)(4);
// console.log(add);


// array splice method-:

const arr = [2,3,4,5];

// console.log(arr.splice(2,2));
// console.log(arr);

//  new Map in js-:

const myMap = new Map();
myMap.set('name','Paras');
myMap.set(['email'],'paras@gmail.com');
console.log(myMap.get(['email']));

