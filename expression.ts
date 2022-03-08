//                                             Function Type Expressions


/*
The simplest way to describe a function is with a function type expression.
These types are syntactically similar to arrow functions.
*/


function outer (inner : (innerParameter:string) => void) {
    inner("Hello my name is inner function(expression)");
}

function callInner (str:string) {
    console.log(str);
}

outer(callInner);

// the syntax (innerParameter:string) => void means - "a function with one parameter, named innerParameter, of type string, doesn't have a return value".
// we can use types or interfaces for parameters or for describing functions.

type innerFunction = (innerParameter:string) => void;

function anotherFunction (inner : innerFunction) {
    inner("Hello my name is inner function with type description");
}


