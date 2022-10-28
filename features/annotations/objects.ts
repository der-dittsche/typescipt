const profile = {
  firstname: "Sascha",
  lastname: "Dietrich",
  age: 35,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, firstname }: { age: number; firstname: string } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
