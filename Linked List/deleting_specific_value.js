// file showing the deletion of a specific value in a linked list

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.tail= null;
    }
    addValue(value){
        const newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    deleteValue(value){
        if(this.head === null){
            console.log("the linked list is empty");
            return;
        }
        if(this.head.value === value){
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        let previous = null;
        while (current !==null && current.value !== value){
            previous = current;
            current = current.next;
        }
        if(current === null){
            console.log("Node not found");
            return;
        }
        previous.next = current.next;
    }
    printList(value){
        let current = this.head;
        while (current!==null) {
            console.log(current.value);
            current= current.next;
        }
    }
}

const list = new linkedList()
list.addValue(1)
list.addValue(2)
list.addValue(3)
list.printList()
list.deleteValue(2)
list.printList()