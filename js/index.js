const n = parseInt(prompt('Enter number for Fibonacci'));

function fib(n) {
  let a = 1,
    b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

alert('Your Fibonacci number is ' + fib(n)); 





// alert('Your Fibonacci number is ');


// function fib(n) {
//   let a = 1,
//     b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }

// alert( fib(3) ); 
// alert( fib(33) ); 
// alert( fib(333) ); 















// function fib(n) {
//   let a = 1,
//     b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }

// alert( fib(3) ); 
// alert( fib(33) ); 
// alert( fib(333) ); 