//1.    2 or more interfaces can be declared with the same name.

interface PersonI {
    name:string,
    age:number
};

interface PersonI {
    address:string,
    postCode:number
};

const Person : PersonI = {
    name:"Person",
    age: 25,
    address:"Armenia",
    postCode: 123,
};

//2. For describing for example React Components it is better to use interfaces.

interface ComponentProps {
    isFixed:boolean,
    details:string,
    isReversed:string,
    image:string
};

// const NewComponent:React.FC<ComponentProps> = ({isFixed, details, isReversed, image}) => {
//     return "Hello my name is new Component";
// };


//3. Not all properties of an interfaces may be required.

interface OptionalProperties {
    color?:string,
    name:string,
    age:number,
    country?:string
};

const options: OptionalProperties = {
    name:"Options",
    age:555,
};

//the rest are optional.


//4. Inheritance

// 1. interface can not implement but can extend.
// 2. Cannot extend an interface (classes can only implement interfaces but can not extend from interfaces);

interface First {
    name:string,
    first_element:string,
    first_property:string,
};

interface Second {
    second_element:string,
    second_property:string,
};

interface Second extends First{};

const second:Second = {
    first_element: "",
    first_property: "",
    name: "",
    second_element: "",
    second_property: ""
};

class MyClass implements Second {

    first_element: string;
    first_property: string;
    name: string;
    second_element: string;
    second_property: string;

    constructor(el1:string, el2:string, el3:string, el4:string) {
        this.first_element = el1;
        this.first_property = el2;
        this.second_element = el3;
        this.second_property = el4;
    };

};

//interface can extend from classes.

class NewClass {
    name:string;
    age:number;
}
interface A extends NewClass {
    ww:string,
}
const a:A =  {
    age: 0,
    name: "",
    ww: ""
};

//multiply inheritance

class FirstClass {
    name:string;
};

interface FirstInterface {
    age:number;
};

class SecondClass extends FirstClass implements FirstInterface {
    name:string;
    age:number;
};

const secondClass = new SecondClass();


// 5. Describe array behavior.

interface ArrayType2  {
    value:[number, string]
};
const secondArray:ArrayType2 = {
    value:[10, ""],
};
//the value array has 2 length.

// 6. Generic Interfaces


interface Props<Gen> {
    prop1:Gen,
    prop2:Gen,
    prop3:Gen,
};

const numbers : Props<number> = { prop1:1, prop2:2, prop3:3 };
const strings : Props<string> = { prop1:"1", prop2:"2", prop3:"3" };


class InheritFromTypes {
    element:string;
    name:string;
    age:string

    constructor(element:string, name:string, age:string) {
        this.element = element;
        this.name = name;
        this.age = age;

    }
}

const inherit = new InheritFromTypes("New Element", "Inherit Component", "20");

interface Sum extends InheritFromTypes {
};

const sum : Sum = {
    element:"element",
    name:"name",
    age:"111",
};


const newProp:Sum = new InheritFromTypes("", "", "5");


//immediately create new class and implement Sum interface

const newProp2:Sum = new class MyNewClass implements Sum{
    age: string;
    element: string;
    name: string;
}
