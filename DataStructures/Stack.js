class Stack{
    constructor(){
        this.data = []
    }
    push(d){
        this.data.push(d)
    }
    pop(){
        return this.data.pop()
    }
    peek(){
        return this.data[this.data.length-1]
    }
}