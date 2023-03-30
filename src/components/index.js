export { default as Header } from "./Header/Header";
export { default as Footer } from "./Footer/Footer";

// const arr = [10, 23, 10, 2, 3, 4, 5, 1, 6, 2, 3, 4, 5];
// const new_array = [];

// function removed(arr) {
//   for (var i = 10; i <= arr.length; i++) {
//     if (new_array.indexOf(arr[i]) == -1) {
//       new_array.push(arr[i]);
//     }
//     return new_array;
//   }
// }
// console.log("dddddddddddddd", removed(arr));

// duplicate numbers print
// const numbers = [1, 2, 3, 2, 4, 5, 4];
// const duplicateNumbers = numbers.filter((number, index) => {
//   return numbers.indexOf(number) !== index;
// });
// console.log("duplication numbers=========================", duplicateNumbers); // output: [2, 4]

//removed duplication
// const numbers = [1, 2, 3, 2, 4, 5, 4];
// const uniqueNumbers = numbers.filter((number, index) => {
//   return numbers.indexOf(number) === index;
// });
// console.log("uniqueNumbers", uniqueNumbers); // output: [1, 2, 3, 4, 5]

// max value

// const max = [10, 20, 32, 22, 42];
// const Maxnumber = max[0];

// for (let i = 1; i < max.length; i++) {
//   if (max[i] > Maxnumber) {
//     Maxnumber = max[i];
//   }
//   console.log("🚀 ~ file: index.js:39 ~ Maxnumber:", Maxnumber);
// }

// const numbers = [10, 25, 5, 100, 2];
// let miniMum = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] < miniMum) {
//     miniMum = numbers[i];
//   }
// }
// console.log("miniMum=========================", miniMum); // output: 100

// const array = [1, 2, 3, 4, 5, 6, 1, 2, 2, 3, 4, 5, 5];
// const maxNumber = array[0];
// for (let i = 1; i < array.length; i++) {
//   if (array[i] > maxNumber) {
//     array[i] = maxNumber;
//   }
//   console.log("🚀 ~ file: index.js:54 ~ maxNumber:", maxNumber);
// }
const numbers = [3, 7, 2, 9, 1, 5];
// const max = [...new Set(numbers)];
// console.log("🚀 ~ file: index.js:62 ~ max:", max.sort());//remved duplication short method
let maxNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
}

console.log(maxNumber); // Output: 9
