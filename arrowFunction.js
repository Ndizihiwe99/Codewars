//arrow function add(n) which returns a function that always adds n to any number
const add = (n) => (x) => n + x;

let addthree = add(3);
console.log(addthree(10));

//find numbers which are divisible by given number
const fn = (numbers, divisors) => numbers.filter((n) => n % divisors == 0);
console.log(fn([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));

//
/*function takes an array of objects as input, where each object contains a category and a value.
 It then sums up the values for each category and returns an object with the total value for each category.*/
const sumOfCategory = (arr) => {
  result = {};
  for (const { category, value } of arr) {
    result[category] = (result[category] || 0) + value;
  }
  return result;
};

const data = [
  { category: "A", value: 10 },
  { category: "B", value: 50 },
  { category: "C", value: 40 },
  { category: "A", value: 30 },
  { category: "B", value: 20 },
  { category: "C", value: 60 },
];

const summation = sumOfCategory(data);
console.log(summation);
