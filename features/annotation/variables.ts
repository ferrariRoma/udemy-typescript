const apples: number = 5;
let speed: string = 'fast';
const object: { [key: string]: string | number } = {
  x: 20,
  y: 50,
};
const fn = (i: number): string => {
  return `i`;
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x":10, "y":20}';
const coordinates: { [key: string]: number } = JSON.parse(json);
console.log(coordinates);
