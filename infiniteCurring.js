const add = (a) => {
    return (b) => {
      if (b !== undefined) return add(a + b);
      return a;
    };
  };
  

  add(1)(2)(3)(4)(); // ➞ 10
  