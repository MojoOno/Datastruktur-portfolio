import Stack from "./stack.js";

let stack = new Stack();

stack.push("A");
console.log(stack.peek());
console.log(stack.get(0));
console.log(stack.pop());
console.log(stack.size());