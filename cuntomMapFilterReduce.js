// Custom map
const myMap = (fn, arr) =>
    arr.length === 0 ? [] : [fn(arr[0]), ...myMap(fn, arr.slice(1))];
  

  const myFilter = (fn, arr) =>
    arr.length === 0
      ? []
      : fn(arr[0])
      ? [arr[0], ...myFilter(fn, arr.slice(1))]
      : myFilter(fn, arr.slice(1));
  

  const myReduce = (fn, acc, arr) =>
    arr.length === 0 ? acc : myReduce(fn, fn(acc, arr[0]), arr.slice(1));
  