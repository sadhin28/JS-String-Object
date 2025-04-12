const curry = (fn) => {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn(...args);
      } else {
        return (...next) => curried(...args, ...next);
      }
    };
  };
  

  const sum = (a, b, c) => a + b + c;
  const curriedSum = curry(sum);
  curriedSum(1)(2)(3); // ➞ 6
  