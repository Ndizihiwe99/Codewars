//arrow function add(n) which returns a function that always adds n to any number
const add = (n) => (x) => n + x;

let addthree = add(3);
console.log(addthree(10));
