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

class Queue{
    constructor(){
        this.first = new Stack()
        this.second = new Stack()
    }

    add(d){
        this.first.push(d)
    }

    remove(){
        while(this.first.peek()){            
            this.second.push(this.first.pop())
        }
        const record = this.second.pop();

        while(this.second.peek()){            
            this.first.push(this.second.pop())
        }

        return record
    }

    peek(){
        while(this.first.peek()){            
            this.second.push(this.first.pop())
        }
        const record = this.second.peek();

        while(this.second.peek()){            
            this.first.push(this.second.pop())
        }

        return record
    }
}