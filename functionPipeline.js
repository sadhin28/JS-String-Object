const pipe = (...fns) => (input) =>
    fns.reduce((acc, fn) => fn(acc), input);
  

  const add1 = x => x + 1;
  const mul3 = x => x * 3;
  
  pipe(add1, mul3)(2); 
  
