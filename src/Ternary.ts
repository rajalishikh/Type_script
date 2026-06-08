// I am practice ternary operator
let age: number = 10;
let permission_to_vote =
  age >= 18 ? "he can give vote" : "He can not give vote";
console.log(permission_to_vote);

// nulish coaclscing operator
let my_wife_name = null;
let display_name: string = my_wife_name ?? "Bushra khan";
console.log("here is my wife name ", display_name);
