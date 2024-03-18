// stack data structure implementation with javascript

//  create a stack class

//  stack mainly has 2 operations

// 1. push -> add an element to the top of stack.
// 2. pop ->  remove an element from the top of stack.

//  this is stack implementation using array
class Stack {
  constructor() {
    this.items = [];
  }

  // push method
  //we do not need to use in-built js push method.
  push(element) {
    this.items[this.items.length] = element;
  }

  // pop method , remove and return the top element from stack

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    //  last element in stack , which represents the top element need to be popped
    const poppedElement = this.items[this.items.length - 1];
    //  update the items length
    this.items.length = this.items.length - 1;
    //  return removed or popped element
    return poppedElement;
  }

  //  check if stack is empty
  isEmpty() {
    if (this.items.length == 0) {
      return true;
    }
    return false;
  }

  // return stack items
  print() {
    return this.items;
  }
}

export default Stack;

//  real world use cases of stack data structure

// 1.  we can implement simple undo or redo feature in a text editor

export class TextEditor {
  constructor() {
    this.operations = [];
  }

  // add operation   (push method)
  addOperation(operation) {
    this.operations[this.operations.length] = operation;
  }

  // undo or redo operation (pop method)
  // return the previous operation
  undoOperation() {
    if(this.isEmpty){
        return;
    }
    const removedOperation = this.operations[this.operations.length - 1];
    this.operations.length = this.operations.length - 1;
    return removedOperation;
  }

  isEmpty() {
    return this.operations.length === 0;
  }

  //    get all operations
  getOperations() {
    return this.operations;
  }
}


// problems using stack Data structure

/**
 * reverse a string using stack
 * @param {String} string
 * @return {String} string
 */

export function reverseStringUsingStack(string) {
  const stack = [];
  const reversedStack = [];
  
  for (let index = 0; index < string.length; index++) {
        stack.push(string[index]);
  }
 
  
  while(stack.length>0){
      const val = stack.pop();
      reversedStack.push(val);
  }
 
  return reversedStack.join('');
}

/**
 * evaluate post fix expression
 * @param {String} expression
 * @return {Number} number
 */

function evalutationPostFixExpression(expression){
  const stack = [];
  const tokens  = expression.split(' ');
  for(let i =0; i<tokens.length; i++){
      // check if token is a number
      //  if it is a number then push into stack
      if(!isNaN(parseFloat(tokens[i]))){
          stack.push(Number(tokens[i]));
      }else{
          const operand1 = stack.pop();
          const operand2 = stack.pop();
          if(tokens[i]=='+'){
              stack.push(operand1+operand2);
          }else if(tokens[i]=='-'){
              stack.push(operand1-operand2);
          }else if( tokens[i]=='*'){
               stack.push(operand1*operand2);
          }else if(tokens[i]=='/'){
              stack.push(operand1/operand2);
          }
      }
  }
  console.log(stack);
}
evalutationPostFixExpression("3 4 + 4 *");


/**
 * valid Parentheses
 * @param {String} expression
 * @return {Boolean} 
 */

