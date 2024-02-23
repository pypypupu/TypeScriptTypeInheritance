// const numberis = NaN;

// class A {
//     sound() {
//         console.log("A")
//     }
// }
// class B extends A {
//     sound() {
//         console.log("b")
//     }
// }

// const objA: A = new B();
// const objB: B = new B();

// objA.sound(), objB.sound();

type User = {
    id: string;
    email: string;
    password: string;
    name: string;
    surname: string;
    nickName: string;
    age: number;
    isLithuanian: boolean;
};

type UserUpdatedType = Omit<User, "id" | "email">;

let user: UserUpdatedType = {
    password: "XX",
    name: "XXX",
    surname: "XXX",
    nickName: "XXX",
    age: 0,
    isLithuanian: false
}


//use case
//for filtering the types and for creating a variable that could use any of the types defined in the type
type FilteredUser = keyof UserUpdatedType;
const useris: FilteredUser = "password"

console.log(useris)


//use case
//for converting a type to some common type. Maybe useful for a form
type UserStringified = {
    [key in keyof User]: string;
}
const userStringified: UserStringified = {
    id: "",
    email: "",
    password: "",
    name: "",
    surname: "",
    nickName: "",
    age: "",
    isLithuanian: ""
}


//Pick. Picks properties from a type
type PickedUser = Pick<User, "nickName" | "email">
const pickedUser: PickedUser = {
    email: "",
    nickName: ""
}


// Pick with additional properties
type PickedAndAdded = Pick<User, "age" | "isLithuanian"> & { nationality: "Lithuanian" | "Latvian" | "Estonian" };
const usermanas: PickedAndAdded = {
    age: 52,
    isLithuanian: false,
    nationality: "Estonian"
}

// Partial. Make some of the type properties partial
type PartialUser = Partial<User>;

const partialUser: PartialUser = {
    name:"Roberto",
    age:41
}

user = {...user, ...partialUser};
console.log(user)