///creating an object
const person={
    name: 'Ayesha',
    age: 20,
    city: 'Bengaluru'
}
console.log(person) //output:- { name: 'Ayesha', age: 20, city: 'Bengaluru' }

////accessing object properties
let car = { brand: "Toyota", model: "Corolla", year: 2020 };
console.log(car.model) //outpit:- Corolla

////updating object property
let student = { name: "Ayesha", grade: "A" };
console.log(student) // output:- { name: 'Ayesha', grade: 'A' }
student.grade='A+';
console.log(student) //output:- { name: 'Ayesha', grade: 'A+' } 

////Adding a New Property
let book = { title: "JavaScript Basics", author: "John Doe" };

book.pages=250;
console.log(book) //output:- { title: 'JavaScript Basics', author: 'John Doe', pages: 250 }

////Deleting a Property
let laptop = { brand: "Dell", price: 50000, color: "Black" };
console.log(laptop) //output:-{ brand: 'Dell', price: 50000, color: 'Black' }
delete laptop.color;
console.log(laptop) //output:- { brand: 'Dell', price: 50000}

////checking if a property exists
let phone = { brand: "Samsung", model: "S21" };
console.log(phone) // output:- { brand: 'Samsung', model: 'S21' }
console.log(phone.hasOwnProperty('price')) //output:- false

////loop through an object
let user = { name: "Ali", age: 25, country: "India" };

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
console.log(calculator.add())