import "reflect-metadata";

@printMetadata
class Plane {
  color: string = "red";

  @markFunction("Hi there")
  fly(): void {
    console.log("vrrrrrrrr");
  }
}

function markFunction(secretInfo: string) {
  return function markFunction(target: Plane, key: string) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata("secret", target.prototype, key);
    console.log(secret);
  }
}

/* const plane = {
  color: "red",
}; */

//set invisible propertie
/* Reflect.defineMetadata("note", "hi there", plane);
Reflect.defineMetadata("height", 10, plane);

console.log(plane);

const note = Reflect.getMetadata("note", plane);
const height = Reflect.getMetadata("height", plane);

console.log(note);
console.log(height); */

/* Reflect.defineMetadata("note", "hi there", plane, "color");

const note = Reflect.getMetadata("note", plane, "color");

console.log(note);
 */
