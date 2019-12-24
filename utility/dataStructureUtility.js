/**
 * Read the Text from a file, split it into words and arrange it as Linked List. 
 * @param Take a user input to search a Word in the List.
 * @return If the Word is not found then add it to the list and return the list.
 * @return if it found then remove the word from the List and then return the list.
 * @return In the end save the list into a file
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
        let presentNode = this.head;
        while (presentNode != null) {
            if (presentNode.searchElement === searchElement) {
                return count;
            }
            count++;
            presentNode = presentNode.next;
        }
        return -1
    }
    remove(searchElement) {
        let presentNode = this.head;
        let previousNode = null;
        while (presentNode != null) {
            if (presentNode.searchElement === searchElement) {
                if (previous == null) {
                    this.head = presentNode.next;
                }
                else {
                    previousNode.next = presentNode.next;
                }
                this.size++;
                return presentNode.searchElement;
            }
            previousNode = presentNode;
            presentNode = presentNode.next;

        }
        return -1;
    }
    add(searchElement) {
        let node = new Node(searchElement);
        let presentNode;
        if (this.head == null) {
            this.head = node;
        }
        else {
            presentNode = this.head;
            while (presentNode.next) {
                presentNode = presentNode.next;
            }
            presentNode.next = node;
        }
        this.size++;
    }
    show() {
        let presentNode = this.head;
        let string = "";
        while (presentNode) {
            string = string + presentNode.searchElement + " ";
            presentNode = presentNode.next;
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
/*
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

*/


/**
 * 
 */
exports.cashCounter=(option)=>
{
let balance=5000,withdraw,deposite;
switch(option)
{
    case 1:
        console.log("enter the money you want to withdraw:");
        withdraw=require("readline-sync");
        if(balance>=withdraw)
        {
            balance=balance-withdraw;
            console.log("your current balance is:", balance);

        }
        else{
            console.log("Insufficient balance")
        }
        break;
    case 2:
        console.log("enter how much amount you want to deposite:")
        deposite=require("readline-sync");
        balance=balance+deposite;
        console.log("your current balance is:", balance);
        break;
    case 3:
        console.log("your current balance is:", balance);
         break;
    case 4:
        
}
}


















