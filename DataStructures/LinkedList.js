class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;        
    }    
}

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    insertFirst(data){
        this.head = new Node(data,this.head);
        this.length++
    }
    size(){
        return this.length
    }
}

const nodeOne = new Node(5)
let list = new LinkedList()
list.head = nodeOne
list.insertFirst(10)