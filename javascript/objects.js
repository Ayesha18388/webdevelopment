
// how to create an objects
// const myObj = {{}
//     myName: 'safina',
//     age: 34,
//     isloggedIn : false
// }
// console.log(myObj)


// how to access an object // two ways . or []
// console.log(myObj.myName);
// console.log(myObj["full name"])


// types of values can be stored in an object

// const userDetails = {
//     userName: "Fathima",
//     fullName: {
//       firstName: "safina",
//       lastName: "zainab",
//     },
//     phone: 673884382,
//     email: "reachsafina@gamil.com",
//     isloggedIn: true,
//     examMarks: [100, 89, 98, 95],
//   };
  
//   userDetails.greetings = function()  {
//     console.log(Welcome to my page ${this.userName});
//   };
  // console.log(userDetails);
  // userDetails.greetings();
  
  // freezing
  // Object.freeze(userDetails)
//   userDetails.email = 'contactsafina@gmail.com';
//   userDetails.phone = 611111111111
   
  // console.log(userDetails)
  

 // //merging arrays using assign
//   const obj1 = { name: 'safina', age: 76, phone: 7763726783 }
//   const obj2 = { city: 'bengaluru', state: 'Karnataka', country: 'India'}
  
//   const combineObjects = Object.assign({}, obj1, obj2)
  
// // merging of objects // Object.assign or spread operator
  // const combineObjects = { ...obj1, ...obj2 }
//   console.log(combineObjects)
  
  

  // hasOwnProperty(['value'])
  // accessing key Object.keys(objectName) pending
  // accessing values Object.values(objectName) pending
  


  //// 25feb
  ////object
  const userr ={
    name: 'kullu',
    greetings: function(){
        console.log('welcome ${this.name}')
    }
  }
  userr.greetings();

  ////array inside an object
  const user ={
    name: 'kullu',
    sub: ['hindi','english'],
    display: function() {
        console.log('${this.sub}')
    }
  }
  user.display();


  ////add new properties to an obj
  user.country="India"
  user.age=25
  console.log(user)

  ////delete a property from an obj
  delete user.age;
  console.log(user)


  ///use object.keys() method- it displays the keys in array form
  console.log(Object.keys(user))

  ////use object.values() method-it displays the values in array form
  console.log(Object.values(user))


  ////use entries() method-it displays the keys and values in individual separate array entries(row) form
  console.log(Object.entries(user))


  ////merging 2 obj
  const obj1={a:1, b:2, c:3}
  const obj2={d:4, e:5, f:6}
  const merg={...obj1,obj2}
  console.log(merg)
  