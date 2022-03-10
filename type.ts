// 1. Inheritance

// 1. class can implement types but can not extend from types.

type ClassProps = {
    name:string,
};

class MyClass implements ClassProps {
    name: string;
};


// 2. Intersection

type FirstClassProps = {
    name:string,
    first_element:string
};

type SecondClassProps = {
    name:string,
    second_element:string
};

type CombinePropsWithOr = FirstClassProps | SecondClassProps; //all properties are not required
type CombinePropsWithAnd = FirstClassProps & SecondClassProps; //all properties are required


//intersection works also with interfaces

interface FirstInterface {
    name:string,
    first_interface:string
};

interface SecondInterface {
    name:string,
    second_interface:string
};

type CombineInterfacesWithOr = FirstInterface | SecondInterface;
type CombineInterfacesWithAnd = FirstInterface & SecondInterface;

interface ThirdInterface extends FirstInterface, SecondInterface {};

const exampleOne:CombineInterfacesWithAnd =  {
    name:"",
    first_interface:"",
    second_interface:"",
};

const exampleTwo:ThirdInterface = {
    name:"",
    first_interface:"",
    second_interface:"",
}

//after this example we can say that in case of type inheritance the "and" operator acts like "extends" operator in case of interfaces.



// 3. Describe Array Behavior.

type ArrayType = [number, string];
const firstArray:ArrayType = [10, "10"];


// 4. Describe Functions Behavior.
//via types can create reusable functions and components.


type CarProps = {
    name:string,
    manufacturer:string,
    country:string,
}

type CarFactory = (car:CarProps) => CarProps;

const createNewCar:CarFactory = (car) => {
    return car;
}

const tesla = createNewCar({name:"Tesla Model S", country:"USA", manufacturer:"California"});
const bmw = createNewCar({name:"BMW 325", country:"German", manufacturer:"GermanMTA"});




//5. Support Generics. => Generic Types
//Generics are used to create reusable components and functions

type BigCases<T> = {
    element_1:T,
    element_2:T,
    element_3:T
};

const numbers:BigCases<number> = { element_1:1, element_2:2, element_3:3 };

const strings:BigCases<string> = { element_1:"1", element_2:"2", element_3:"3" };