import SinglyLinkedList from "./singlylinkedlist.js";

const list = new SinglyLinkedList();

console.log('----Before add----');
list.printList();
list.size();

console.log('----After add----');
list.add('S');
list.printList();

console.log('----SIZE----');
list.size();

console.log('----GET----');
list.get(0);
list.getFirst();
list.getLast();


list.getFirstNode(firstNode);
list.getLastNode();

const firstNode = list.getFirstNode();
list.getNextNode(firstNode);

console.log('----CLEAR----');
list.clear();
list.size();
