// //* function expression



// var greet = function greet(user = "GUEST", role ="GUEST"){
//     const msg ='Hello $(user), you are a $(role)';
//    // console.Log(msg);
//     return msg;
// }

//  console. Log(greet());
//  let add = function (a,b){
//     return sum;
//  }

//   console. log (add(12,3));

//arrow function

// const add = (a,b) => {
//     return a+b;
// };

// console.log(add(34,5));


// const multiply = (a,b) =>{
//     return a*b;
// };

//  console.log(multiply(99,2));

// const add = (a,b) => a+b;
// console.log(add(83,21));



// // isEven (num) arrow and num
// const isEven = function (num) {
//     if (num %2 === 0){
//         return true;
//     }else{
//         return false;
//     }
//     }

// console.log(isEven(22));
// console.log(isEven(33));

// // odd 

//  const isOdd = function (num){
//     if (num %2 !== 0){
//         return true;

//     } else{
//         return false;

//     }

// // }



//* callback  function

// const parent = function (a){
//     console.log("parent");
//     a(); //
    
// }
//  const child = function (){
//     console.log("child");
// };

// // parent(child); 
// parent(child());



// * higher order function\

// const outer =() =>{
//     console.log("outer ");
//  const inner = () =>{
//         console.log ("inner");

//     };
//     return inner;

// }
// const x = outer();
// console.log(x);
// x();



// * todo : IIFE
// (function (){
//     console.log("LIFE");

// })();



// const calculate = (a,b,operation) => {
//     if (operation === "add"){
//         return a+b;
//     }

// }
// console.log(calculate(33,42,add));


// const calculate = (a,b,operation) => {
  
//     const res = operation(a,b);
//     console.log(res);

// };


// const add = (a,b) => a+b;
// const multiply = (a,b) => a*b;
// const divide = (a,b)=> a/b;

// calculate(33,42,add);
// calculate(33,42,multiply);
// calculate(33,42,divide);


// * function factory
// const factory =  (a) => b => (a+b);

// // const factory = (a) =>{
// //     return (b)=> a+b;
// // }
 
// const add5 = factory(5);
// console.log(add5(10));

// * todo: generator function *, yield

// function* generateCount(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;

// }
// const count = generateCount();
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// function* generateCount() {
//   let count = 1;
//     while (true){
//         yield count++;



//     }
//     }
// const count = generateCount();



// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());
// console.log(count.next());


