const memoize = (fn) => {
    const cache = {};
    return (...args) => {
      const key = JSON.stringify(args);
      if (cache[key]) return cache[key];
      const result = fn(...args);
      cache[key] = result;
      return result;
    };
  };
  
 
  const fib = memoize(n => (n <= 1 ? n : fib(n - 1) + fib(n - 2)));
  fib(40); 
  