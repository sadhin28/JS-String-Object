const compose = (...fns) => (arg) =>
    fns.reduceRight((acc, fn) => fn(acc), arg);
  

  const double = x => x * 2;
  const square = x => x * x;
  
  compose(double, square)(3); // ➞ double(square(3)) = 18
  