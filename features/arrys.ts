const carMakers: string[] = ["ford", "toyota", "chevy"];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values

const car = carMakers[0];

const myCar = carMakers.pop();

// prevent incompatible values

carMakers.push("honda");

// Help with 'map'

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types

const importantDates: (Date | string)[] = [];
importantDates.push("2022-10-29");
importantDates.push(new Date());
