// //1. Find the sum of all elements in an array

// const sumOfArray = (arr) => {
//     return arr.reduce((sum, num) => sum + num)
// }
// console.log(sumOfArray(number))

// // 2. Find the Maximum num
//     const maxNumber = (arr) => {
//     return Math.max(...arr)
// }
// console.log(maxNumber(number))

// // 3. Reverse an Array
// const reverseArray = (arr) => {
//     return arr.reverse()
// }
// console.log(reverseArray(number))

// //4. Remove Duplicate from Array

// const removeDuplicates = (arr) => {
//   return [...new Set(arr)];
// };
// console.log(removeDuplicates(number))

// // 5. Check if an Array contains a specific element

// const checkArray = (arr, ele) => {
//     return arr.includes(ele)
// }

// console.log(checkArray(number, 6))
// console.log(checkArray(number, 34))

// // 6. Merging of two arrays
// const num1 = [1, 2, 3, 4, 5];
// const num2 = [6, 7, 8, 9, 10];

// const mergeArray = (arr1, arr2) => {
//    return arr1.concat(...arr2);
// }
// console.log(mergeArray(num1, num2));


// // 7 . To find the first even number


// const findEvenNumber = (arr) => {
//         return arr.find(arr => arr % 2 === 0)
//     }
//     console.log(findEvenNumber(number))
    
    
//     // 8. Display even numbers 
// const numberr = [1, 3, 4, 5, 6, 7, 8, 9, 10]
    
// const evennNumber = (arr) => {
//     return arr.filter(num => num % 2 === 0);
// }

// console.log(evennNumber(numberr))


// //9. To display odd numbers
// const evenNumber = (arr) => {
//     return arr.filter(num => num % 2 != 0);
// }
// console.log(evenNumber(number))

// // 10. Find index of an element

// const number = [1, 3, 4, 5, 6, 7, 8, 9, 10]

// const indexArray = (arr, ele) => {
//     return arr.indexOf(ele)
// }

// console.log(indexArray(number, 2))

// // 11. Sorting of array
const a = [3,72,7,3,6,4,8,4,3,234,5,5,0]

const sorting = (c) =>{
     return c.sort((a,b) =>a-b)
}
console.log(sorting(a))

// //  12. Find smallest element in an array

const smallest= (c) =>{
    return Math.min(...a)
}
console.log(smallest(a))

// //   13. Find second Largest element in an array

// //   14. Find the first largest element in an array
const firstlarg = (c) =>{
    return Math.max(...a)
}
console.log(firstlarg(a))

// //   15. Function flatten an array






