import { Node, LinkedList } from './LinkedList.mjs';

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

console.log(node1.data);
console.log(node1.next.data);
console.log(node1.next.next.data);

let list = new LinkedList();

console.log("===== insertAt() * 5 =====")
for(let i = 0; i < 5; i++){
    list.insertAt(i, i);
}
list.printAll();

console.log("===== clear =====")
list.clear();
list.printAll();

console.log("===== InsertLast() * 5 =====")
for(let i = 0; i < 5; i++){
    list.insertLast(i);
}
list.printAll();

console.log("===== deleteAt(2) =====")
let delNode1 = list.deleteAt(2);
console.log("delete Node : " + delNode1.data);
list.printAll();

console.log("===== deleteAt(3) =====")
let delNode2 = list.deleteAt(3);
console.log("delete Node : " + delNode2.data);
list.printAll();

console.log("===== deleteAt(0) =====")
let delNode3 = list.deleteAt(0);
console.log("delete Node : " + delNode3.data);
list.printAll();

console.log("===== deleteLast() =====")
let delNode4 = list.deleteLast();
console.log("delete Node : " + delNode4.data);
list.printAll();

console.log("===== deleteLast() =====")
let delNode5 = list.deleteLast();
console.log("delete Node : " + delNode5.data);
list.printAll();

console.log("===== InsertLast() * 5 =====")
for(let i = 0; i < 5; i++){
    list.insertLast(i);
}
list.printAll();

console.log("===== getNodeAt() * 5 =====")
for(let i = 0; i < 5; i++){
    let getNode = list.getNodeAt(i);
    console.log("[" + i + "] : " + getNode.data);
}