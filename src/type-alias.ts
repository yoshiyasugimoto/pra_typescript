export {};

type Mojirestu = string;

const fooString: string = "Hello";
const fooMojirestu: Mojirestu = "Hello";

const example1 = {
  name: "ham",
  age: 43,
};

type Profile = {
  name: "ham";
  age: 43;
};

const eample2 = {
  name: "ham",
  age: 43,
};

type Profile2 = typeof example1;
