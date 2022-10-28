interface Reportable {
  /*   name: string;
  year: Date;
  broken: boolean; --> do it reuseable */
  summery(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summery(): string {
    return `Name: Honda ${this.name} is broken ${this.broken}`;
  },
};

const oldGolf = {
  name: "III",
  year: new Date(),
  broken: false,
  summery(): string {
    return `Name: Golf ${this.name} is broken ${this.broken}`;
  },
};

const drink = {
  color: "brown",
  sugar: 40,
  carbonatet: false,
  summery(): string {
    return `My drink is ${this.color} an do with ${this.sugar}g of sugar`;
  },
};

const printSummery = (item: Reportable): void => {
  console.log(item.summery());
};

printSummery(oldCivic);
printSummery(oldGolf);
printSummery(drink);
