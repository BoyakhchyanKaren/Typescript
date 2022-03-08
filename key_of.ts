//                          keyof operator

type FirstPerson = "name" | "age" | "email" | "password";
const first:FirstPerson = "name";


type SecondPerson = {
    name:string,
    age:string,
    email:string,
    password: string
};
type SecondPersonKeys = keyof SecondPerson;
const second:SecondPersonKeys = "age";

//These two signatures are the same.
//just the second one is the concise syntax.
//the keyof operator does the same thing how was described in the first example.



