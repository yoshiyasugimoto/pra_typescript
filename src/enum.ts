export {};

enum Months {
  January = 1,
  Feburary,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);
console.log(Months.Feburary);
console.log(Months.December);

enum COLORS {
  RED = "#FF0000",
  WHITH = "#FFFFFF",
  GREEN = "#008000",
}

let green = COLORS.GREEN;
console.log({ green });
