let number1: number[] = [1, 23, 4, 6];
let number2: number[] = [4, 7, 9, 111, 3333];

let my_total_Number = [...number1, ...number2];

const user: {
  name: string;
  age: string;
} = {
  name: "Raj",
  age: "26",
};

const addNewMember = { ...user, role: "Teacher" };
console.log(addNewMember);
