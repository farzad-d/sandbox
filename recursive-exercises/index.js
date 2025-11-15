// Question 1: Sum all numbers ####################
function sumRange(n) {
  if (n === 1) return n;
  return n + sumRange(n - 1);
}

console.log(sumRange(3)); // 6

// Question 2: Power function ####################
function power(base, exponent) {
  result = base;
  if (exponent === 0) return 1;
  if (exponent === 1) return result;
  return result * power(base, exponent - 1);
}

console.log(power(2, 3)); // 8

// Question 3: Calculate factorial ####################
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// Question 4: Check all values in an array ####################
function all(arr, checkNum, index = 0) {
  if (index === arr.length) return true;
  if (!checkNum(arr[index])) return false;
  return all(arr, checkNum, index + 1);
}

const allAreLessThanSeven = all([1, 2, 2], (num) => num < 7);
console.log(allAreLessThanSeven); // true

// Question 5: Product of an array ####################
function productOfArray(arr, index = 0) {
  if (index === arr.length) return 1;
  return arr[index] * productOfArray(arr, index + 1);
}

console.log(productOfArray([1, 2, 3, 10])); // 60

// Question 6: Search JS object ####################
function contains(object, target) {
  if (typeof object !== "object" || object === null) {
    return object === target;
  }
  for (const value of Object.values(object)) {
    if (contains(value, target)) {
      return true;
    }
  }
  return false;
}

// function contains(obj, value) {
//   for (let key in obj) {
//     if (obj[key] === value) return true;
//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       if (contains(obj[key], value)) return true;
//     }
//   }
//   return false;
// }

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "bar",
          },
        },
      },
    },
  },
};

let exist = contains(nestedObject, 44);
let notExist = contains(nestedObject, "foo");
console.log(exist, notExist); // true false

// Question 7: Parse a multi-dimensional array ####################
function totalIntegers(arr) {
  let total = 0;

  for (const val of arr) {
    if (Array.isArray(val)) {
      total += totalIntegers(val);
    } else if (Number.isInteger(val)) {
      total++;
    }
  }

  return total;
}

const seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7
console.log(seven);

// Question 8: Sum squares of numbers in nested arrays
function sumSquares(arr) {
  let total = 0;

  for (const val of arr) {
    if (Array.isArray(val)) {
      total += sumSquares(val);
    } else {
      total += val * val;
    }
  }

  return total;
}

let numbers = [1, 2, 3];
console.log(sumSquares(numbers)); // 1 + 4 + 9 = 14

numbers = [[1, 2], 3];
console.log(sumSquares(numbers)); // 1 + 4 + 9 = 14

numbers = [[[[[[[[[1]]]]]]]]];
console.log(sumSquares(numbers)); // 1 = 1

numbers = [10, [[10], 10], [10]];
console.log(sumSquares(numbers)); // 100 + 100 + 100 + 100 = 400

// Question 9: Replicate numbers ####################
function replicate(time, num) {
  if (time <= 0) return [];
  return [...[num], ...replicate(time - 1, num)];
  // return [num].concat(replicate(time - 1, num));
}

console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(1, 69)); // [69]
console.log(replicate(-2, 6)); // []
