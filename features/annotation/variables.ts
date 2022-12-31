const apples: number = 5;
let speed: string = 'fast';
const object: { [key: string]: string | number } = {
  x: 20,
  y: 50,
};

// Function
const fn = (i: number) => {
  return `i`;
};
const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x":10, "y":20}';
const coordinates: { [key: string]: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and initiailize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let key in words) {
  if (words[key] === 'red') foundWord = true;
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, true, 'string'];
let numberAboveZero: boolean | number = false;
