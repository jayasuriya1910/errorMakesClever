// //    var =>
// var name = "varStringValue";

// console.log(name);

// var name = "hsdejfkjb";

// console.log(name);

// name = "newValue";

// console.log(name);

// //  let
// let age = 30;

// age = 25;

// console.log(age);

// // let age = 27

// // const
// const city = "New York";

// city = "Los Angeles"; // TypeError: Assignment to constant variable.

// console.log(city);

// // data types

// // string => ""
// // number => 1.5
// // boolean => true or false
// // undefined =>
// // null => {}

//  object => {}
//  // array => []

// ()
// {}
// []

// const name = "achappan";

// console.log("hello" + " " + name , name );

// const greet =  `hello ${name}`

// console.log(greet);

// function example () {
//   return  console.log("hello");
// }

// const exampleArrow = () => {
//   return console.log("hello");
// }

// console.log(example());

// let a = 10

// a += 1

// console.log(a);

// const b = 10

// const c = 40
// const d = 20

// console.log(a === b && !(c === d));
// console.log(a === b || c === d);

const persons = [
  {
    name: "achappan",
    age: 27,
    job: "developer",
    city: "chennai ",
  },
  {
    name: "besant ",
    age: 27,
    job: "institue",
    city: "chennai ",
  },
  {
    name: "gugan",
    age: 24,
    job: "rep",
    city: "chennai ",
  },
];
// console.log(persons.map((name) => name.name  ))

// console.log(persons.map((person)  => person.name));

// console.log(persons.filter((person) => person.age > 25));

// console.log(persons[0].name );

// const person = {
//   name: "achappan",
//   age: 27,
//   job: "developer",
//   city: "chennai ",
// };

// console.log(person);

// const result = 35;

// if (result > 90) {
//   if (result > 95) {
//     console.log("grade is A+");
//   }
// } else if (result <= 70 && result >= 50) {
//   console.log("grade is B");
// } else if (result <= 50 && result >= 35) {
//   console.log("grade is C");
// } else {
//   console.log("fail");
// }

// switch (true) {
//   case result > 90:
//     console.log("grade is A");
//     break;
//   case result < 70 && result >= 50:
//     console.log("grade is B");
//     break;
//   case result < 50 && result >= 35:
//     console.log("grade is C");
//     break;
//   default:
//     console.log("fail");
// }

// if (){

// }else {

// }

// const resutl = result === 35 ? "pass " : "fail";
// console.log(resutl);

// const div = document.createElement("div");
// div.textContent = "Hello World"

// const div1 = document.createElement("div");
// div1.innerHTML = "<strong>Bold text</strong>";

// document.body.appendChild(div);

// document.body.appendChild(div1);

// const input = document.createElement("input");
// input.value = "123";

// document.body.append(input)
// console.log(input.value);

// console.log(div.parentNode);
// console.log(div.children);
// console.log(div.firstChild);
// console.log(div.lastChild);
// console.log(div.previousSibling);
// console.log(div.nextSibling);
// console.log(div.childNodes);

// function handleClick() {
//   alert("Clicked!");
// }
// div.addEventListener("click", handleClick);

// // To remove:
// div.removeEventListener("click", handleClick);

// // Dispatch custom event
// const event = new Event("my-event");
// div.addEventListener("my-event", () => console.log("Custom event triggered"));
// div.dispatchEvent(event);

// document.body.append(div)

// function exampleFunction(a, b) {
//  return a + b;
// }

// console.log(exampleFunction(1, 2));
// console.log(ansFunction(1,2))

// const ansFunction = function (first, last) {
//   console.log("this function called by ", first, last);
// };

// const arrowFunction = () => {console.log("this function is cliked ");}
