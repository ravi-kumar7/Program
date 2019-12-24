/**
 * Read the Text from a file, split it into words and arrange it as Linked List. 
 * Take a user input to search a Word in the List.
 * If the Word is not found then add it to the list.
 * if it found then remove the word from the List.
 * In the end save the list into a file
 */

exports.unOrderedList = (stringArray, searchElement) => {
    let list = new linkedList;
    for (let i = 0; i < stringArray.length; i++) {
        list.add(stringArray[i]);
    }
    if (list.search(searchElement) == -1) {
        list.add(searchElement);
        console.log("element added successfully");
    }
    else {
        list.remove(searchElement);
        console.log("element deleted successfully");
    }
    let elementWrite = list.show()
    writeFile("../../Anjali.txt", elementWrite);
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
        while (present != null) {
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
                present = present.next;
            }
            present.next = node;
        }
        this.size++;
    }
    show() {
        let present = this.head;
        let string = "";
        while (present) {
            string = string + present.searchElement + " ";
            present = present.next;
        }
        console.log(string);
        return string;
    }
}
function writeFile(fileName, data) {
    let fs = require('fs');
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err);
        }
    });
}

/**
 * 
 */
exports.unOrderedList=(data,searchElement)=>
{
search(searchElement)
{
    let count=0;
    let present=this.head;
    while(present!=null)
    {
        if(present.searchElement==searchElement)
        {
            return present;
        }
        count++;
        present=present.next;
    }
}
remove(searchElement)
{
    let present=this.head;
    let previous=null;
    while(present!=null)
    {
        if(present.searchElement==searchElement)
        {
            if(present==null)
            {
                this.head=present.next;
            }
            else{
previous.next=present.next;
            }
            size--;
            return present.searchElement;
        }
        previous=present;
        present=present.next;
    }                        
    return -1;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
}
add(searchElement)
{
    let node=new Node(searchElement)
    let present;
    if(this.head==null)
    {
        this.head=node;
    }
    else{
        present=this.head;
        while(present.next)
        {
            present.next=node;
        }
    }
    this.size++;
}





























    sort(data)
    {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }

}
}