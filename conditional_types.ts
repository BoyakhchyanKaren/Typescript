//                                      Conditional Types

/*
Conditional types take a form that looks a little like conditional expressions
            (condition ? trueExpression : falseExpression)
in JavaScript.
*/



interface Car {
    name:string,
    manufacturer:string,
    creation_date:Date,
};

interface Tesla extends Car {
    color:string;
}

type Init = Tesla extends Car ? number : string;

// const wrongAnswer : Init = "string"; //=> because of tesla extends from Car is true
const rightAnswer : Init = 555;


