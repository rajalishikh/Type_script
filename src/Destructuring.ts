const user: {
  name: string;
  age: string;
  profession: string;
} = {
  name: "Raj",
  age: "27",
  profession: "Teacher",
};

const {
  name: myname,
  age: myage,
  profession: myprofession,
}: { name: string; age: string; profession: string } = user;
console.log("My name is md ", myname);
console.log("My age is: ", myage);
console.log("MY profession is ", myprofession);
