/*
function Person(name){
    const that = this;
    this._name = name;
    return{
        get name(){
            return that._name
        },
        set name(name){
            that._name = name        
        }
    };
}

const p1 = new Person('Nikol')

console.log(p1._name)
console.log(p1.name)
p1.name = 'jack'
console.log(p1.name)

*******************************
const a = new Promise((res,rej) => {

    console.log(1)
    setTimeout(() => res(2),0)
})

const b = new Promise((res,rej) => res(3))

setTimeout(() => console.log(4))
a.then(r => console.log(r))
b.then(r => console.log(r))

*/

//*******************************//
var length = 10;
function fn(){
    console.log(this.length)
}

var obj = {
    length:5,
    method: function(fn){
        fn()
        arguments[0]()

    }
}
obj.method(fn,2)

//*******************************//
const obj1 = Object.create({foo: 'foo'})
const obj2 = obj1
obj2.foo = 'bar'
delete obj1.foo 
console.log(obj1.foo)
console.log(obj2.foo)


//*******************************//
(function(){

    return[ (() => this.x).bind({x:'Foo'})(),(() => this.x)()]
}).call({x:'Bar'})