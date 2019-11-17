// function fibonacci(n, memo) {
//   memo = memo || {};
//   if (memo[n]) {
//     return memo[n];
//   }
//   if (n <= 1) {
//     return 1;
//   }
//   return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo));
// }

// let memo = {};
// console.log(fibonacci(50));

function fibonacci(n) {
  // We will store our results here
  let resultsCache = {};

  // This is the inner function containing our fibonacci algorithm
  function innerFibonacci(n) {
    let result;

    // If the result for the input `n` is already on the resultsCache
    // we will use it instead of executing the whole algorithm
    if (resultsCache[n] !== undefined) {
      result = resultsCache[n];
    } else {
      if (n < 2) {
        result = n;
      } else {
        result = innerFibonacci(n - 1) + innerFibonacci(n - 2);
      }

      resultsCache[n] = result;
    }

    return result;
  }

  return innerFibonacci(n);
}

console.log(fibonacci(50));
