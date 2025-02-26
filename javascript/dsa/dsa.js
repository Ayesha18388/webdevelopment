// /1. Find the product of all elements in an array
//const number = [1, 3, 4, 5, 6, 7, 8, 9, 10]
// const proOfArray = (arr) => {
//     return arr.reduce((sum, num) => sum * num)
// }
// console.log(proOfArray(number))

//// 2. Find the Maximum num
//const number = [1, 3, 4, 5, 6, 7, 8, 9, 10]
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

//second even number
    const aa= [3,72,7,3,6,4,8,4,3,23,5,5]

    const findEven = (arr) => {
        let val=arr.sort((a,b)=>b-a);
        return arr.find(arr => arr % 2 === 0)
    }
    console.log(findEven(aa)) //output:- 72
//     // 8. Display even numbers 
// 
// const numberr = [1, 3, 4, 5, 6, 7, 8, 9, 10]
    
// const evennNumber = (arr) => {
//     return arr.filter(num => num % 2 === 0);
// }

//console.log(evennNumber(numberr))


//another
// const numberr = [1, 3, 4, 5, 6, 7, 8, 9, 10]
    
// const evennNumber = (arr) => {
//     let value=arr.sort((a,b)=>a-b)
//     return arr.find(arr => arr% 2 === 0);
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

const a1 = [3,72,7,3,6,4,8,4,3,23,5,5,0]

const seclar = (c) =>{
     let val = c.sort((a,b) =>b-a)
     return val[1]
}
console.log(seclar(a1))


// //   14. Find the first largest element in an array
const firstlarg = (c) =>{
    return Math.max(...a)
}
console.log(firstlarg(a))

// //   15. Function flatten an array

const numbers = [1, 5, 2, 2, 5, 3, 4, 2, 5];
const countOccurrences = (array, element) => {
   return array.reduce((count, item) => item === element ? count + 1 : count, 0);
  }
  console.log(countOccurrences(numbers,2))



  // second Function to count occurrences of an element




// 17. convert an array of strings to uppercase
const str=["html","css","js"]
const uc= (arr)=>{
    return str.map(word => word.toUpperCase());
}
console.log(uc(str))


//18. count the occurence of an element

  const num = [1, 2, 5, 2, 3, 4, 2, 5];
  const co = (array, element) => {
      return array.filter(item => item === element).length;
    };
  
    console.log(co(num,2)) // output:- 3
    
  


//19. average of an array
const n=[10,20,30,40,50];
const sum=(arr)=>{
    let num=arr.reduce((acc,num)=>acc+num,0);
    return num/5;
}
console.log(sum(n)) //output:- 30


//20. intersection of two arrays
const a1 = [1, 2, 3, 4, 5];
const a2 = [3, 4, 5, 6, 7];
const intersection = (a1, a2) => {
  return a1.filter(item => a2.includes(item));
};

console.log(intersection(a1,a2)); //output:- [3,4,5]


//21. union of two arrays
const a1 = [1, 2, 3, 4, 5];
const a2 = [3, 4, 5, 6, 7];
const union = (a1, a2) => {
  return [...new Set([...a1, ...a2])]; 
}
console.log(union(a1, a2)); //output:-  [1, 2, 3, 4, 5, 6, 7]

 
//22. prime number function




//23. merging of two arrays
const num1 = [1,2,3,4];
 const num2 =[4,5,6,7];
 const mergeArray =(arr1 ,arr2) => {
     arr1.push(... arr2);
      return arr1;
 }
console.log(mergeArray(num1,num2));

//24. addition of only odd numbers in an array

const number =[1,2,3,4,5,6,7,8,9,10];
const  oddNumbers = (arr)=> {
    let odd = arr.reduce((sum ,num)  =>  num %2 !== 0 ?  sum + num :  sum ,0);
  return odd;
}
console.log(oddNumbers(number));