var oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summery: function () {
    return "Name: Honda ".concat(this.name, " is broken ").concat(this.broken);
  },
};
var oldGolf = {
  name: "III",
  year: new Date(),
  broken: false,
  summery: function () {
    return "Name: Golf ".concat(this.name, " is broken ").concat(this.broken);
  },
};
var drink = {
  color: "brown",
  sugar: 40,
  carbonatet: false,
  summery: function () {
    return "My drink is "
      .concat(this.color, " an do with ")
      .concat(this.sugar, "g of sugar");
  },
};
var printSummery = function (item) {
  console.log(item.summery());
};
printSummery(oldCivic);
printSummery(oldGolf);
printSummery(drink);
