// let obj = {
//   name: "amira",
//   age: 30,
// };

// let handler = {
//   get: function (target, prop) {
//     if(!(prop in target)){
//         throw new Error('Not Allowed!')
//     }
//     return target[prop]
//   },
//   set: function (t, k, newValue) {
//     if (typeof newValue != "string" && k == "name") {
//       throw new Error("Name Must be string");
//     }
//     t[k] = newValue;
//   },
// };

// let proxyObj = new Proxy(obj, handler);
// // console.log(proxyObj);
// console.log(proxyObj.name);
// console.log(proxyObj.age);
// console.log(proxyObj.kjhh);
// console.log(proxyObj);
// proxyObj.age=21
// console.log(obj);
// console.log(proxyObj.age);
// proxyObj.name='ali'
// proxyObj.name=13
// proxyObj.name = "ahmed";
// proxyObj.age=13
// console.log(proxyObj);
// proxyObj.age=13

// obj.age=33
// obj.name=13
// console.log(obj.age);

// Symbol

// let arr = [1, 2, 3];
// console.log(arr);
// let id = Symbol('userId');
// let user = {
//   name: "omar",
//   age: 13,
//   [id]: 666,
// //   [Symbol()]: "amira",
// };

// for (const key in user) {
//     console.log(key);
// }
// console.log(user[id]);
// console.log(user[x]);

// for (const item of user) {
//     console.log(item);
// }
// for (const item of arr) {
//     console.log(item);
// }

// let s1=Symbol('test')
// let s2=Symbol()

// console.log(s1);
// console.log(s1==s2);

/*

function abc(){
    return {
    next:function(){
      return {
        value:,
        done:boolean
      }   
    }
    }
}
*/

// let arr = [1, 2, 3];
// let x = arr[Symbol.iterator]();

// console.log(x.next());
// console.log(x.next());
// console.log(x.next());
// console.log(x.next());

// function oddNumbers() {
//   var counter = 1;
//   return {
//     next: function () {
//       counter += 2;
//       return counter < 10
//         ? {
//             value: counter,
//             done: false,
//           }
//         : { value: undefined, done: true };
//     },
//   };
// }

// let obj = {
//   id: 2,
//   firstName: "ramy",
//   age: 33,
//   [Symbol.iterator]: function () {
//     let objElemets = Object.entries(this);
//     let index = 0;
//     return {
//       next: function () {
//         if (index < objElemets.length) {
//           let val = objElemets[index++];
//           return { value: val, done: false };
//         } else {
//           return { value: undefined, done: true };
//         }
//       },
//     };
//   },
// };

// console.log(obj.abc());

// for (const item of obj) {
//     console.log(item);
// }

// for (const iterator of object) {

// }

// for (const [key,val] of obj) {
//     console.log(`${key} : ${val}`);
// }

// let obj = {
//   name: "amira",
//   age: 30,
// };

// console.log(Object.entries(obj));

// // import { Animal,Cat } from "./app.js";
// import {Animal as n} from "./app.js";

// let animal1=new n()

// animal1.makeSound()

// Ecommerce Cart
