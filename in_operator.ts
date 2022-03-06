/*
                                    in operator

TypeScript takes this into account as a way to narrow down potnential types.                                        
"in" operator is efficient for finding the expected value and avoid from other values.

*/


type Fish = {
    swim: () => void;
}

type Bird = {
    fly: () => void;
} 

const fish:Fish = {
    swim: function (): void {
        console.log("I can swim");
    }
};

const bird:Bird = {
    fly: function ():void {
        console.log("I can fly");
    }
};

function act(animal: Fish | Bird) {
    if("fly" in animal) {
        return animal.fly;
    }
    return animal.swim;
};



//another example


interface User {
    fullname:string,
    email:string,
}

interface Admin {
    fullname:string,
    isAdmin:boolean,
}

type Step = Admin | User;

function checkStep(step:Step) {
    if("isAdmin" in step) {
        return step.isAdmin + ' ' + "Full access";
    }
    return step.email + ' ' + "Hasn't access";
}
