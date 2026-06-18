let anyThing: any = 1235;
anyThing as number;

// make a function kg to gram converter

const kg_to_gramConverter = (
  input: string | number,
): string | number | undefined => {
  if (typeof input === "number") {
    return input * 10000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `converted string into number ${Number(value) * 1000}`;
  }
};

const number = kg_to_gramConverter(2) as number;
console.log({ number });
const number2 = kg_to_gramConverter("2 kg") as string;
console.log({ number2 });

type customError = {
  message: string;
};

try {
} catch (err) {
  console.log((err as customError).message);
}
