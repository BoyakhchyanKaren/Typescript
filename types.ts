//                                          Property Modifiers
/*
 Each property in an object type can specify a couple of things:
 the type, whether the property is optional, and whether the property can be written to.
*/


// 1. Optional Properties
/*
Much of the time, we’ll find ourselves dealing with objects that might have a property set.
In those cases, we can mark those properties as optional by adding a question mark (?) to the end of their names.
 */

interface CarI {
    name: string,
    manufacturer: string,
    creation_date: string,
    color?: string,
    power?: string
    model?: string,
};

function createTesla(tesla: CarI) {
    return [
        {...tesla, originialProduct: true}
    ]
}

const myNewTesla = createTesla({name: "Tesla", manufacturer: "California", creation_date: "12.01.2020"});

//for myNewTesla property we have not to pass all arguments as was described in CarI interface.
//because of we added optional parameters for interface. This is useful for using reusable components and functions.


// 2.Inheritance of Interfaces

interface Animal {
    name: string,
    age: number,
    legs: number,
    fly?: boolean,
    swim?: boolean,
}

interface Amphibian {
    name: string,
    age: number,
    legs: number,
    live_residence: string
}

interface Amphibian extends Animal {
};

const whale:Amphibian = {
    name:"Big Whale",
    age:20,
    legs: 0,
    live_residence:"water-land",
}

//so one interface can extend from another with extends keyword, but can not implement. (important);




// 3. Intersection Types
/*
interfaces allowed us to build up new types from other types by extending them.
TypeScript provides another construct called intersection types that is mainly used to combine existing object types.
An intersection type is defined using the & operator.
 */


interface Body {
    hands:string,
    legs:string,
    belly:string,
}
interface Head {
    eyes:string,
    mouth:string,
    tongue:string
}

type Human = Body & Head;

function createPerson(arg:Human) {
    return {
        hands:arg.hands,
        eyes:arg.eyes,
    }
}


// 4. Generic Object Types

interface DataTypes<T> {
    parents_should_be_of_type:T,
    children_should_be_of_type:T,
    properties_should_be_of_type:T,
}

const GroupOfNumbers:DataTypes<number> = {
    parents_should_be_of_type: 555,
    children_should_be_of_type: 555,
    properties_should_be_of_type: 555,
}
const GroupOfStrings:DataTypes<string> = {
    parents_should_be_of_type: "string",
    children_should_be_of_type: "string",
    properties_should_be_of_type: "string",
}

console.log(typeof GroupOfNumbers.children_should_be_of_type);//number
console.log(typeof GroupOfStrings.children_should_be_of_type);//string

//very useful for creating reusable properties and objects.



// 5. Array type

function func1 (arg1:Array<string>):Array<string> {
    return arg1
};

function func2 (arg2:string[]):string[] {
    return arg2;
}

//These two functions both return array containing strings.
//just the second one is more concise syntax of the first.




// 6. Tuple Types

/*
A tuple type is another sort of Array type that knows exactly how many elements it contains,
and exactly which types it contains at specific positions.
 */

type describeArray = [string, number, string, number];

const sortedArray:describeArray = ["first", 2, "third", 4];


//Tuple Types can be also optional or described by rest operator.

type optionalDescription = [string, number, boolean?];

const optionalArray:optionalDescription = ["one", 2];

type restDescription = [number, boolean, ...string[]];

const restArray:restDescription = [20, true, "aa", "bb", "cc", "dd"];
