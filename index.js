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
        if (typeof node === 'string')
            node = new Node(node)
        if (this.head === null) {
            this.head = node;
            this.tail = node;
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
        let secondToLast = this.at(this.length - 2);
        secondToLast.next = null;
        this.tail = secondToLast;
        this.length--;
    };
    contains(value) {
        let tmp = this.next;
        while (tmp !== null && tmp.name !== value && tmp.data !== value) {
            tmp = tmp.next;
        }
        if (!tmp)
            return false
        if (tmp.name === value || tmp.data === value)
            return true
    };
    find(value) {
        if (this.contains(value)) {
            let tmp = this.next;
            while (tmp !== null && tmp.name !== value && tmp.data !== value) {
                tmp = tmp.next;
            }
            return tmp
        }
    };
    toString() {
        let string = '';
        let tmp = this.next;
        while (tmp !== null) {
            string += `( ${tmp.name} ) -> `
            tmp = tmp.next;
        }
        string += '(null)'
        return string
    };
};

class Node {
    constructor(name, data = 'no data') {
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
// console.log(testList.pop())
console.log(testList.toString())


const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list)
console.log(list.toString())