class LinkedList {
    length = 0;
    head = null;
    tail = null;
    next = null;
    constructor() {
    };
    test(string) {
        return string;
    }
    append(node) {
        if (this.head === null) {
            this.head = node;
            this.next = node;
            this.length++;
            return;
        }
        let tmp = this.next;
        while (tmp.next !== null) {
            tmp = tmp.next;
        }
        tmp.next = node;
        this.tail = node;
        this.length++;
    };
    prepend(node) {
        node.next = this.next;
        this.head = node;
        this.next = node;
        this.length++;
    };
    get size() { return this.length };
    get head() { return this.next };
    at(index) {
        if (index > this.length - 1 || index < 0) { return 'out of bounds' }
        let tmp = this.next;
        let x = 0
        while (x !== index) {
            tmp = tmp.next;
            x++
        }
        return tmp
    };
    pop() {
        let secondToLast = this.at(this.length - 2)
        secondToLast.next = null
        this.length--
    };
    contains(value) {

    };
    find(value) {

    };
    toString() {

    };
};

class Node {
    constructor(name, data) {
        this.name = name;
        this.data = data;
        this.next = null;
    }
};

//////////////////////

const testList = new LinkedList()
const alex = new Node('alex', 'human')
const emma = new Node('emma', 'ex')

testList.append(alex)
testList.append(emma)
testList.prepend(new Node('griff', 'best bro'))

console.log(testList)
console.log(testList.pop())
console.log(testList)
