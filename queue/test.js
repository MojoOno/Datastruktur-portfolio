import Queue from "./queue.js";

const queue = new Queue();

queue.enqueue("A");
console.log(queue.peek());
console.log(queue.get(0));
queue.dequeue();
console.log(queue.peek());



