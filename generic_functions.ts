//                                               Generic Functions

/*
It’s common to write a function where the types of the input relate to the type of the output,
or where the types of two inputs are related in some way
*/


//with generics we can easily describe the array type and the return type of a function.

function returnRelevantValues<Type>(arr: Type[]): Type {
    return arr[0];
}

const strings = ["aaa", "bbb", 5];
const numbers = [1, 2, 3];
const booleans = [true, false, true];

const str = returnRelevantValues(strings);
const num = returnRelevantValues(numbers);
const bool = returnRelevantValues(booleans);

console.log(str)
console.log(num);
console.log(bool);


function test<T>(testArg: T): T {
    return testArg;
}

const stringArguments = test<string>("String");
const numberArguments = test<number>(123);

//in other words generics allow to create reusable components or functions.


//also we can implement one of the array methods with generics, for example map method

//with the ordinary javascript the map method can be done with this way.


/*
Array.prototype.myMap = function (cb) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this));
    };
    return result;
}
*/

//with generics it will be like this one.

interface Array<T> {
    myMap,
}
//this interface is for adding new method inside the Array prototype, without this interface we will have any[] type, which is not expected.

Array.prototype.myMap = function<Input, Output> (callback:(item:Input, index:number, items:Input[]) => Output):Output[] {
    let result:Output[] = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    };
    return result;
}

