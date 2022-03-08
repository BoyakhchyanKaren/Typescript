//arrow functions in typescript also called lambda functions.


//there are many ways to describe arrow functions

//1. interface
interface DescribeArrow {
    (param1: string, param2: string): string;
};

const func1: DescribeArrow = () => {
    return "Func 1";
};

//2. type
type DescribeArrow2 = {
    (param1: string, param2: string):string
}

const func2: DescribeArrow2 = (param1:string, param2:string):string => {
    return "Func 2";
};

//3. generic
const func3 = <T>(param1:T):T[] => {
    return [param1];
}

const num = func3<number>(125);
console.log(num);