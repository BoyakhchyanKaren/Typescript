class Foo {
    bar(name: string): string {
        return `My name is ${name}`
    };
};


//in the ES5 signature it will be like this one

function Goo() { }

Goo.prototype.bar = function (name: string): string { 
    return `My name is ${name}` 
};


//So how does work instanceof operator.

//It tests whether the prototype property of a constructor exists somewhere in another object.
//One of the ways to do that without instanceof operator is the getPrototypeOf method.


const foo = new Foo();

console.log(Object.getPrototypeOf(foo) === Foo.prototype)

//so we can make sure that getPrototypeOf method and instanceof operator work with the same way.


console.log(foo instanceof Foo);



