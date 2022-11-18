// task 1 
// function fibonacci(num) {
//     if (num < 2){
//         return num;
//     }
  
//     return fibonacci(num - 1) + fibonacci(num - 2);
//   }
//   console.log(fibonacci(4))


// task 2 Closure 
// function addstr(a){
//     return function(b){
//         return b.concat(a)
//     }
// }
// let addstr2 = addstr("less")
// console.log(addstr2("fear"))


// task 3
// function add(a,b){
//     return function(c,d){
//         return function(e,f){
//             return a*c*e+b*d*f
//         }
//     }
// }
// let f1=add(1,2)
// let f2=f1(1,1)
// let f3=f2(2,3)
// console.log(f3)