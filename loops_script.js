import { userArray } from "./constants.js";

export function iterateThroughNames() {
  let userNames = [];
  let otherNames = [];
  for (let i = 0; i < userArray.length; i++) {
    if (userArray[i].username.startsWith("a")) {
      const combinedName = userArray[i].username.split("_").join("");
      userNames.push(combinedName);
    } else {
      otherNames.push(userArray[i].username);
    }
  }

  return {
    userNames,
    otherNames,
  };
}

export function playWithAge() {
  let ages = [...userArray];
  // sort user by their ages-:
  for (let i = 0; i < ages.length - 1; i++) {
    for (let j = 0; j < ages.length - 1 - i; j++) {
      if (ages[j].age % 5 == 0 && ages[j + 1].age % 5 == 0) {
        if (ages[j].age > ages[j + 1].age) {
          // Swap the values
          let temp = ages[j].age;
          ages[j].age = ages[j + 1].age;
          ages[j + 1].age = temp;
        }
      }
    }
  }

  return ages;
}

export function filterByAge() {
  const data = [...userArray];
  let users = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].age % 2 === 0) {
      // remove gender property
      delete data[i].gender;

      users.push(data[i]);
    }
  }

  return users;
}

export function pairUserByAges() {
  const users = [...userArray];
  let usersIn20s = [];
  let usersIn30s = [];
  //  we need to pair users by their starting value of age , for example 20 to 29 will be in same and array and 30 to 39 will be separate array.
  for (let i = 0; i < users.length; i++) {
    let ages = users[i].age.toString();
    if (ages.startsWith("2")) {
      usersIn20s.push(users[i]);
    } else {
      usersIn30s.push(users[i]);
    }
  }
  return {
    usersIn20s,
    usersIn30s,
  };
}

// get pairs of  nums-:
//  given a sorted array , find pairs of num which have sum less than or equal the given number in function parameter
//  we can use 2 pointers technique
// left pointer and right pointer
export function getPairsOfNum(array, num) {
  let pairs = [];
  //  array is already sorted
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    if (array[left] + array[right] <= num) {
      pairs.push([array[left], array[right]]);
      // move the left pointer forwar to increaqse the some
      left++;
    } else {
      //  move the right pointer backword
      right--;
    }
  }
  return pairs;
}

//  the two pointer concept is very important here in above quiz

// practice more about two pointers concept

const arr = [12, 45, 56, 78, 34, 90];

// let left = 0;
// let right = arr.length-1;

// while(left<right){
//     console.log(arr[right]);
//     right--;

// }

export function findPalindrome(str) {
  //   use pointer technique
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      console.log(str[left], str[right]);
      return false;
    }
    left++;
    right--;
    return true;
  }
}

export function twoSum(array, target) {
  let pairs = [];
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    if (array[left] + array[right] == target) {
      pairs.push([array[left], array[right]]);
      left++;
      right--;
    } else if (array[left] + array[right] < target) {
      left++;
    } else {
      right--;
    }
  }
  return pairs;
}

export function find3Sum(array, n = 0) {
  let pairs = [];
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let sum = array[left] + array[right];
    if (sum == n) {
      pairs.push([sum]);
      left++;
      right--;
    }
  }
  return pairs;
}

export function removeDuplicates(array) {
  // array should be sorted
  let duplicates = [];
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    console.log(array[right]);
    if (array[left + 1] === array[right]) {
      duplicates.push(...array);
      left++;
      right--;
    } else if (array[left] < array[right]) {
      left++;
    } else {
      right--;
    }
  }
  return duplicates;
}

export function moveZeros(array) {
  let result = [];
  let left = 0;
  let right = 0;
}

//  to solve the problems with pointer techniques we need to see how we are taking pointers.
//  we can not use same approach all the time.

/**
 *
 * get unique elements from array
 * @param {Array} array
 * @return {Array}
 */
export function getUniqueElements(arr) {
  let uniqueElem = [];
  let repeatingElem = [];
  for (let index = 0; index < arr.length; index++) {
    if (!uniqueElem.includes(arr[index])) {
      uniqueElem.push(arr[index]);
    } else {
      repeatingElem.push(arr[index]);
    }
  }
  return { uniqueElem, repeatingElem };
}

//  array intersection function

function findArrayIntersection(arr1, arr2) {
  let common_elements = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      common_elements.push(arr1[i]);
    }
  }
  return common_elements;
}

const values = findArrayIntersection([2, 3, 4, 5], [4, 5]);

console.log(values);
