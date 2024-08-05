"use strict";
// console.log("Hello, World")
// const students = [{
//     firstName:"Hari",
//     lastName:"Shrestha",
//     Score:70,
// },
// {
//     firstName:"Gita",
//     lastName:"Thapa",
//     Score:80,
// },
// {
//     firstName:"Ram",
//     lastName:"Yadav",
//     Score:100,
// },
// ];
// for(const student of students) {
//     console.log("firstName",student.firstName);
//     console.log("lastName",student.lastName);
//     console.log("Score",student.Score)
// }
// @ts-ignore
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(2, 3));
// console.log(addNumbers("text", 3));
function subNumbers(a, b) {
    return a - b;
}
console.log(subNumbers(9, 4));
function mulNumbers(a, b) {
    return a * b;
}
console.log(mulNumbers(9, 4));
// string Types
var fistname = "rohn";
// fistname =1;
let automobile = 'BMW';
const city = "New York";
let students = 32;
let studentAsString = students.toString();
// number types
var age = 32;
let years = 2024;
const numberOfMembers = 61;
// numberOfMembers= 128
let stringToNumber = parseInt("1985");
// booleans
let isStudent = false;
const alwaysStudent = true;
let minimumAge = age >= 6 ? true : false;
// null and undefined
let user;
// console.log(user)
// null
let userRole;
userRole = null;
// console.log(userRole)
console.log(userRole === user);
if (!userRole) {
    console.log("This condition is true");
}
if (!user) {
    console.log("this condition is true");
}
// Bigint
const safeInt = Number.MAX_SAFE_INTEGER;
console.log(safeInt);
const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;
console.log(safeIntPlusOne);
console.log(safeIntPlusTwo);
let bigInt1 = BigInt(1234);
console.log(bigInt1);
let bigInt2 = BigInt(1234666n);
console.log(bigInt2);
let c = bigInt1 - bigInt2;
console.log(c);
// let d:bigint= 1234444n  big int can be used only with integer value not with int
// let f = Math.log(bigInt1)
// symbol Table
