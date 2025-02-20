const array1 = [1, 2, 3, 4, "safina", true, null];

console.log(array1[4])

// array methods:

num.push(85) // add an element at the end of an array
console.log(num)

num.pop() // // remove an element at the end of an array
console.log(num)




const names = ["safina", "kulsum", "ayesha", "Yuman"]

names.unshift("Mehareen") // add an element at first
 console.log(names)

names.shift() // remove first element from an array
console.log(names)

//Maximum and minimum
const max = Math.max(...numbers)
const min = Math.min(...numbers)

const numm = [2, 4, 5, 9, 7, 10, 88]

//when array is passed as an argument it should have spread operator
const maxNum = Math.max(...numm);
console.log(maxNum)

const minNum = Math.min(...numm);
console.log(minNum)


//slice and splice

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const array2 = numbers.slice(4, 7)
console.log(numbers);
console.log(array2);


const array3= numbers.splice(1, 8)
console.log(array3);
console.log(numbers);

//Sorting of an array

const num = [3, 8, 7, 23, 76, 89, 2, 4, 56, 87, 92]

const sortedArray = num.sort((a, b) => b - a)
console.log(sortedArray)

//includes - array.includes(value)

console.log(num.includes(4))

//indexOf - array.indexOf(value)

 console.log(num.indexOf(88))

join // array.join() // convert array into string

console.log( typeof num.join())

flat // array.flat(level)

const myArray = [1, 2, 4, [2, 4, 5, [8, 7, [8, [9]], 3], [8, 7, 9]]]
console.log(myArray.flat(Infinity))


//merging of array
const arr1 = ['safina', 'kulsum', 'ayesha']
const arr2 = ['mehareen', 'sadiyah']

// 1. push
arr1.push(...arr2)
console.log(arr1)

// 2. concat - returns a new array

const newArrray = arr1.concat(arr2)
console.log(newArrray)

// 3. spread operator
const newArray = [...arr1, ...arr2]
console.log(newArray)



// Looping of array.

// 1. for loop

const numberArray = [2, 4, 6, 7, 2, 5, 7, 9,9,2,37]
console.log(numberArray[0])
console.log(numberArray[1])
console.log(numberArray[2])
console.log(numberArray[3])
console.log(numberArray[4])
console.log(numberArray[5])
console.log(numberArray[6])
console.log(numberArray[7])
 
for (let i = 0; i < numberArray.length; i++) {
    const element = numberArray[i];
    console.log(element)

}

// 2. forEach

numberArray.forEach((item) => {
            console.log(item)
})

numberArray.forEach((item) => {
    console.log(item)
})

// Transforms each element of an array and returns a new array.
//  Used when you want to modify elements.

const num1 = numberArray.map((item) => {
    return item - 1
})

console.log(num1)



//Filters elements based on a condition and returns a new array.
// Used when you want to select certain elements.

const num2 = numberArray.filter((item) => {
    return item > 30
})

console.log(num2)

// Reduces the array to a single value (sum, product, etc.).

//  Used when you want a single output from multiple values.
const totalNumberr = numberArray.reduce((acc, curr) => {
    return acc + curr
})

const totalNumber = numberArray.reduce((acc, curr) => {
    return acc + curr
})