// // * globL SCOPE

// let globe_let = "golbal let";
// const globe_const ="global const";
// var global_var = "global var";



// // *block scope
// if (true){
//     let block_let ="block let";
//     const block_const="block const";
//     var block_var ="block var";
//     console.log(block_const, block_let, block_var);
    
// }
// console.log(block_const, block_let, block_var); // error block_const is not defined, block_let is not defined, block_var is block var



// * function
// function  scope(){
//     let function_let ="function let";
//     const function_const="function const";
//     var function_var="function var";
//     console.log(function_const,function_let,function_var);

// }

// scope();
//console.log(function_const);  reference error function_const is not defined
// console.log(function_let);  reference error function_let is not defined
// console.log(function_var); reference error function_var is not defined


// * lexical scope
// function a (){
//     let x = 10;
//     console.log(x);

//     function b(){
//         x = 222;
//         console.log(x);

//         function c(){
//             console.log(x);
            
//         }
//         c();


//     }
//     b();
// }
// a();

// * scope chain

// let x =122;
// function a (){
//     let x = 10;
//     console.log(x);

//     function b(){
//         x = 222;
//         console.log(x);

//         function c(){
//             console.log(x);
            
//         }
//         c();


//     }
//     b();
// }
// a();




if (true){
    let x ="x";
    if (true){
        let x ="11";
        if (true){
            let x ="21";


        }
        console.log(x);

    }
    console.log(x);

}
console.log(x);
