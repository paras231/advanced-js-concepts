/**
 * solve problems related to stack data structures
 */

/**
 * problems 1. Valid Parentheses
 */

function isValid(s) {
  const matchingBrackets = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];

    // If the character is an opening bracket, push it onto the stack
    if (currentChar === "(" || currentChar === "[" || currentChar === "{") {
      stack.push(currentChar);
    } else if (
      currentChar === ")" ||
      currentChar === "]" ||
      currentChar === "}"
    ) {
      // If the character is a closing bracket, check if it matches the top of the stack
      if (
        stack.length === 0 ||
        stack[stack.length - 1] !== matchingBrackets[currentChar]
      ) {
        return false;
      } else {
        // If it matches, pop the top of the stack
        stack.pop();
      }
    }
  }

  // If the stack is empty, all opening brackets have been matched correctly
  return stack.length === 0;
}

// Test cases
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("([{}])")); // Output: true
console.log(isValid("([)]")); // Output: false
console.log(isValid("(((")); // Output: false
console.log(isValid("")); // Output: true (an empty string is considered valid)

/**
 * problem 2 Daily temperature
 */

function dailytemp(list){
    
}