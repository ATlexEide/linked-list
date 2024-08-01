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
        console.log(tmp);
        this.tail = node;
        this.length++;
    };
    prepend(node) {
        node.next = this.next;
        this.head = node;
        this.length++;
    };
    get size() { return this.length };
    get head() { return this.next };
    at(index) {
        let tmp = this.next;
        if (index > this.length - 1) { return }
        while (tmp.next !== null) {
            tmp = tmp.next;
        }

    };
    pop() {

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

console.log(testList.head)
