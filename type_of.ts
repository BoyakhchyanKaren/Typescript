//                                      typeof operator

function doSomething (name:string, age:number) {
    return {
        name,
        age,
    }
};

type Init = ReturnType<typeof doSomething>;

const prop:Init = {
    name: "Karen",
    age: 21,
};

//usage of predefined ReturnType)
//It takes a function type and produces its return type.(example above)

