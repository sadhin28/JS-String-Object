const deepFlatten = (arr) => {
    return arr.reduce((acc, val) => 
      Array.isArray(val) ? acc.concat(deepFlatten(val)) : acc.concat(val), []);
  };
  
  // Example:
  deepFlatten([1, [2, [3, [4]], 5]]) // ➞ [1, 2, 3, 4, 5]
  