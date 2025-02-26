///creating an object
const person={
    name: 'Ayesha',
    age: 20,
    city: 'Bengaluru'
}
console.log(person) //output:- { name: 'Ayesha', age: 20, city: 'Bengaluru' }

////accessing object properties
const car = { brand: "Toyota", model: "Corolla", year: 2020 };
console.log(car.model) //outpit:- Corolla

////updating object property
const student = { name: "Ayesha", grade: "A" };
console.log(student) // output:- { name: 'Ayesha', grade: 'A' }
student.grade='A+';
console.log(student) //output:- { name: 'Ayesha', grade: 'A+' } 

////Adding a New Property
const book = { title: "JavaScript Basics", author: "John Doe" };

book.pages=250;
console.log(book) //output:- { title: 'JavaScript Basics', author: 'John Doe', pages: 250 }

////Deleting a Property
const laptop = { brand: "Dell", price: 50000, color: "Black" };
console.log(laptop) //output:-{ brand: 'Dell', price: 50000, color: 'Black' }
delete laptop.color;
console.log(laptop) //output:- { brand: 'Dell', price: 50000}

////checking if a property exists
const  phone = { brand: "Samsung", model: "S21" };
console.log(phone) // output:- { brand: 'Samsung', model: 'S21' }
console.log(phone.hasOwnProperty('price')) //output:- false

////loop through an object
const user = { name: "Ali", age: 25, country: "India" };

for (i in user) {
    console.log(i + ": "+ user[i]);
} /*output:- name: Ali
age: 25
country: India  */


////object with function
const calculator={
    num1: 20,
    num2: 40,
    add: function(){
        return this.num1+this.num2
    }
}
console.log(calculator.add()) //output:- 60

////nested objects
const student = {
    name: "Ayesha",
    age: 20,
    address: {
        city: "Bengaluru",
        pincode: 560045
    }
};
console.log(student); /*output:- {
    name: 'Ayesha',
    age: 20,
    address: { city: 'Bengaluru', pincode: 560045 }
   } */

////convert object to array
const fruits = { apple: 5, mango: 3, banana: 8 };

const fArray = Object.entries(fruits);
console.log(fArray); // output:- [ [ 'apple', 5 ], [ 'mango', 3 ], [ 'banana', 8 ] ]

////merging two objects
const obj1 = { a: 1, b: 2 };
 const obj2 = { c: 3, d: 4 };
const merge=Object.assign({},obj1,obj2)
console.log(merge) // output:- { a: 1, b: 2, c: 3, d: 4 }

////object properties length
const MyObj = { 
    name: 'Ayesha',
    age:20,
    gender:'female'}
       
    const countProp = obj =>{
       return Object.keys( MyObj).length;
    }
    console.log(countProp(MyObj)); // Output: 3
   

////converting array to object

   








////freezing
const config = { theme: "dark", language: "en" }
console.log(config) //output:- { theme: 'dark', language: 'en' }
Object.freeze(config)
config.theme = "light"
config.font= "Arial"
delete config.language

console.log(config); //output:- { theme: 'dark', language: 'en' }


////object destruction
const employee = { id: 101, name: "John", salary: 5000 };
const {name,salary}= employee;
console.log(employee);  // output:- { id: 101, name: 'John', salary: 5000 }

console.log(name); //John

console.log(salary); //output:- 5000