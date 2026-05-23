// common function
const sum = (num1: number, num2: number) => {
  console.log(num1 + num2);
};

sum(22, 22);

// arrow function
const sum2 = (arrow_num1: string, arrow_num2: string) => {
  console.log(arrow_num1, arrow_num2);
};
sum2("raj", "sheikh");

// object function

const give_money_poor_man = {
  poor_man_name: "raj sheikh",
  poor_man_money: 0,
  add_money(amount: number): number {
    return this.poor_man_money + amount;
  },
};
give_money_poor_man.add_money(100000);
console.log(give_money_poor_man);
