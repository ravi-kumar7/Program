/**
 * 
 */
exports.unOrderedList = (stringArray, searchElement) => {
    let list = new linkedList;
    for (let i = 0; stringArray.length; i++) {
        list.add(stringArray[i]);
    }
    if (list.search(searchElement) == -1) {
        list.add(searchElement);
        console.log("element added successfully");
    }
    else {
        list.remove(searchElement);
        console.log("{element deleted successfully");
    }
    let elementWrite = list.show()

    writeToFile("../Anjali.txt", elementWrite);
}
class Node {
    constructor(searchElement) {
        this.searchElement = searchElement;
        this.next = null;
        this.size = 0;
    }
}
class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    search(searchElement) {
        let count = 0;
        let present = this.head;
        while (present != null) {
            if (present.searchElement === searchElement) {
                return count;
            }
            count++;
            present = present.next;
        }
        return -1
    }
    remove(searchElement) {
        let present = this.head;
        let previous = null;
        while (presnt != null) {
            if (present.searchElement === searchElement) {
                if (previous == null) {
                    this.head = present.next;
                }
                else {
                    previous.next = present.next;
                }
                this.size++;
                return present.searchElement;
            }
            previous = present;
            present = present.next;

        }
        return -1;
    }
    add(searchElement) {
        let node = new Node(searchElement);
        let present;
        if (this.head == null) {
            this.head = node;
        }
        else {
            present = this.head;
            while (present.next) {
                present = cpresent.nest;
            }
            present.nest = node;
        }
        this.size++;
    }
    show() {

    }
}
