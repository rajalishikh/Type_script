type ID = string | number;
// variable type alias
let user1: ID = "123456";
let User2: ID = 123;

// object type alias

type UserDetails = {
  name: string;
  age: number;
  profession: string;
  address: string;
};

let User1: UserDetails = {
  name: "raj",
  age: 123,
  profession: "Teacher",
  address: "Utar badda",
};
console.log(User1);

// function type alias

type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => {
  console.log(a + b);
  return a + b;
};

add(22, 333);
