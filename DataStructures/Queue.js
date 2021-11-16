class Queue{
    constructor(){
        this.data = []
    }
    add(d){
        this.data.unshift(d)
    }
    remove(){
        return this.data.pop()
    }
    peek(){
        return this.data[this.data.length-1]
    }
}