class Type<Gen> {
    firstName:Gen;
    lastName:Gen;
    getEmailAndPassword:(email:Gen, password:Gen) => Gen;
    getUserNameWrapped: (username:Gen) => Gen[];
}

const type = new Type<string>();

//type.firstName = 4;       //=>Type 'number' is not assignable to type 'string'.(as a generic we have written string :)

type.firstName = "Karen";
type.lastName = "Boyakhchyan";
type.getEmailAndPassword = function (x, y) {
    return `email: ${x} password: ${y}`;
}

// console.log(type.getEmailAndPassword("karenboyakhchyan20@gmail.com", "test"));

type.getUserNameWrapped = function (x) {
    return [x];
}
console.log(type.getUserNameWrapped("karentest, karenboyakhchyan, karen777, karen888"));




//also class can accept multiply generics and implement from the another interface.

interface ClassI<Gen1, Gen2, Gen3> {
    name:Gen1 | Gen2,
    age:Gen2 | Gen3,
    email:Gen1 | Gen3,
};

class Initial<Gen1, Gen2, Gen3> implements ClassI<Gen1, Gen2, Gen3> {
    age: Gen2 | Gen3;
    email: Gen1 | Gen3;
    name: Gen1 | Gen2;
    getAllMembers() {
        return {
            age:this.age,
            email:this.email,
            name:this.name
        }
    }
}

const init = new Initial<string, number, string>();
init.age = 10;
init.email = "karenboyakhchyan20@gmail.com";
init.name = "Karen";
init.getAllMembers();
