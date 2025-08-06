//find numbers which are divisible by given number
const fn = (numbers, divisors) => numbers.filter((n) => n % divisors == 0);
console.log(fn([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
