export {};

const kansu = (): number => 43;
let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
if (typeof numberUnknown === "number") {
  let sumunknown = numberUnknown + 10;
  console.log(sumunknown);
}
