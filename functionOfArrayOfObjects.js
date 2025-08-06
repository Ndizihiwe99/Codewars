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
