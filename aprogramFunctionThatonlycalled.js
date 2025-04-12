const once = (fn) => {
    let called = false;
    let result;
    return (...args) => {
      if (!called) {
        called = true;
        result = fn(...args);
      }
      return result;
    };
  };
  

  const addOnce = once((a, b) => a + b);
  addOnce(2, 3); // 5
  addOnce(10, 20); // still 5
  